"use client";

import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Work", "#projects"],
  ["Journey", "#journey"],
  ["Certificates", "#semester-certificates"],
  ["Contact", "#contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Priyadharshini, home">
          <span className="brand-mark" aria-hidden="true"><img src="/icon.png" alt="" /></span>
          <span className="brand-name">Priyadharshini<span className="brand-dot">.</span></span>
        </a>
        <nav className={`nav-links${open ? " nav-links-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s connect <span aria-hidden="true">→</span></a>
        <button
          className={`menu-toggle${open ? " menu-toggle-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${open ? " mobile-menu-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {links.map(([label, href], index) => (
          <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span className="mono">0{index + 1}</span>{label}<span aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
