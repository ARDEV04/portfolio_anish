// api/contact.js
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  message: z.string().min(10).max(5000),
  tsToken: z.string().min(10),
});

// simple in-memory rate limit (per function instance)
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQ = 3;
const hits = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || rec.expires < now) {
    hits.set(ip, { count: 1, expires: now + WINDOW_MS });
    return true;
  }
  if (rec.count >= MAX_REQ) return false;
  rec.count += 1;
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message, tsToken } = schema.parse(req.body);

    const ip =
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket?.remoteAddress ||
      "unknown";

    if (!rateLimit(ip)) {
      return res.status(429).json({ error: "Too many requests. Try later." });
    }

    // Verify Cloudflare Turnstile
    const form = new URLSearchParams();
    form.append("secret", process.env.TURNSTILE_SECRET_KEY);
    form.append("response", tsToken);
    if (ip !== "unknown") form.append("remoteip", ip);

    const verifyResp = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form }
    );
    const verifyData = await verifyResp.json();
    if (!verifyData?.success) {
      return res.status(400).json({ error: "Human verification failed." });
    }

    // Send email with Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const html = `
      <div style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f6f7f9;padding:12px;border-radius:8px">${escapeHtml(
          message
        )}</pre>
        <hr/>
        <p style="color:#6b7280;font-size:12px">IP: ${escapeHtml(ip)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.VITE_CONTACT_TO,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    if (err?.name === "ZodError") {
      return res.status(400).json({ error: "Invalid input." });
    }
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Server error." });
  }
}

function escapeHtml(s = "") {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
