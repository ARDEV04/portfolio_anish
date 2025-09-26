import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional: close when clicking outside (desktop)
  useEffect(() => {
    const onClick = (e) => {
      const nav = document.querySelector(".navbar");
      if (open && nav && !nav.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <nav className="navbar" data-expanded={open ? "true" : "false"}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={() => setOpen(false)}>
          Anish Ranjan
        </a>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul className="nav-menu">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                className="nav-link"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
