"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Panasonic", href: "#panasonic" },
  { label: "Location", href: "#location" },
  { label: "Ownership", href: "#ownership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-[0.3em] text-white">
            ASTRA
          </span>
          <span className="h-2 w-2 rounded-full bg-energy animate-pulse" />
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-energy to-amber px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:scale-105"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
