import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Turnstile from "react-turnstile";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [tsToken, setTsToken] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [errorMsg, setErrorMsg] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg(null);

    if (!tsToken) {
      setErrorMsg("Please complete the human verification.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, tsToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTsToken(null);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send. Try again later.");
    }
  }

  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      {/* ambient theme blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <h2 className="relative text-3xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
        Get In Touch
      </h2>
      <p className="relative text-[var(--text-2)] mb-10 text-center max-w-2xl">
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology and development.
      </p>

      <div className="relative w-full max-w-4xl flex flex-col md:flex-row gap-8 rounded-2xl shadow-xl p-8 md:p-12 bg-black/30 border border-white/10 backdrop-blur">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[var(--text-0)] mb-2">
            Send me a message
          </h3>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />
          <textarea
            placeholder="Tell me about your project or just say hello!"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            minLength={10}
            className="bg-white/5 border border-white/15 rounded-lg px-4 py-2 text-[var(--text-0)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60 focus:border-amber-300/40"
          />

          {/* Cloudflare Turnstile */}
          <div className="mt-2">
            <Turnstile
              sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onVerify={(token) => setTsToken(token)}
              onExpire={() => setTsToken(null)}
              options={{ theme: "auto" }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 inline-flex justify-center items-center rounded-lg font-semibold text-[#1a1223] px-4 py-2 border border-white/20 shadow bg-gradient-to-b from-white to-amber-200 hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">
              Message sent successfully! I’ll get back to you soon.
            </p>
          )}
          {status === "error" && errorMsg && (
            <p className="text-rose-400 text-sm mt-2">{errorMsg}</p>
          )}
        </form>

        {/* Sidebar (unchanged) */}
        <div className="flex-1 flex flex-col gap-6 justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-0)] mb-2">
              Let's connect
            </h3>
            <p className="text-[var(--text-2)] mb-4">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. I'm currently
              available for freelance projects and full-time opportunities.
            </p>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/ARDEV04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anish-ranjan-04bb7324b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:techiranjan004@gmail.com"
                className="text-2xl text-[var(--text-1)] hover:text-[var(--text-0)] bg-white/5 p-3 rounded-full border border-white/15 transition-colors backdrop-blur hover:bg-white/10"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="bg-white/5 border border-white/12 rounded-lg p-4 text-[var(--text-1)]">
              <div className="font-semibold mb-1">Quick Response</div>
              <div className="text-sm">
                I typically respond to messages within 24 hours. For urgent
                inquiries, feel free to reach out on LinkedIn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
