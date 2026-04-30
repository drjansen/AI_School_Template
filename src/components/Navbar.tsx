"use client";
import { useState, useEffect } from "react";
import { brand } from "@/config/brand";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#pathway", label: "Pathways" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#outcomes", label: "Operating Model" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 border-b"
          : "py-5 border-b border-transparent"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(8, 18, 42, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottomColor: "rgba(212,175,55,0.28)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          aria-label={`${brand.name} home`}
        >
          {/* Logotype mark */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm select-none"
            style={{
              background: "linear-gradient(135deg, #b8962e 0%, #d4af37 100%)",
              boxShadow: "0 2px 12px rgba(212,175,55,0.35), 0 0 0 1px rgba(212,175,55,0.40)",
              color: "#08122a",
            }}
          >
            E
          </div>
          <span className="font-semibold text-base tracking-tight text-white/90 group-hover:text-white transition-colors">
            {brand.shortName}
          </span>
          <span className="hidden sm:inline text-white/30 text-sm font-light tracking-wide">
            Institute
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm text-white/50 hover:text-white/90 hover:bg-white/[0.04] transition-all font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: "linear-gradient(135deg, #b8962e 0%, #d4af37 100%)",
            color: "#08122a",
            boxShadow: "0 2px 12px rgba(212,175,55,0.30)",
          }}
          aria-label="Make an inquiry"
        >
          Inquire Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-white/50 hover:text-white/90 hover:bg-white/[0.05] transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(8, 18, 42, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTopColor: "rgba(212,175,55,0.12)",
          }}
        >
          <ul className="flex flex-col px-5 py-4 gap-0.5" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 px-3 text-sm text-white/60 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#cta"
                className="block py-3 px-3 text-sm text-center font-semibold rounded-lg transition-all"
                style={{
                  background: "linear-gradient(135deg, #b8962e 0%, #d4af37 100%)",
                  color: "#08122a",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Inquire Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
