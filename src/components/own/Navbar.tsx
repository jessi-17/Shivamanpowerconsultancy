"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Visa Services", href: "/services" },
  { label: "Opportunities", href: "/current-demands" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const m = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: m ? 64 : 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: `all var(--duration-normal) var(--ease-out)`,
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          padding: "0 var(--spacing-8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: m ? 16 : 24,
              fontWeight: 700,
              color: scrolled ? "var(--primary)" : "#ffffff",
              transition: `color var(--duration-normal) var(--ease-out)`,
              lineHeight: 1.15,
              display: "inline-block",
              whiteSpace: "pre-line",
            }}
          >
            {"Shiva Travels &\nManpower Consultancy"}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="nav-links-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-8)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 500,
                color: scrolled ? "var(--on-surface-variant)" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                transition: `color var(--duration-fast) var(--ease-out)`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "var(--primary)" : "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "var(--on-surface-variant)"
                  : "rgba(255,255,255,0.8)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-4)" }}>
          <Link
            href="/contactus"
            className="nav-cta-desktop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 24px",
              background: scrolled
                ? "linear-gradient(135deg, var(--primary), var(--primary-container))"
                : "linear-gradient(135deg, #0052dc, #1d4ed8)",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              transition: `transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
           Contact us
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 22,
                  height: 2,
                  borderRadius: 2,
                  backgroundColor: scrolled ? "var(--on-surface)" : "#ffffff",
                  transition: `all var(--duration-fast) var(--ease-out)`,
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 1
                        ? "opacity(0)"
                        : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: m ? 64 : 80,
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            padding: "var(--spacing-6) var(--spacing-8)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-4)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--on-surface)",
                textDecoration: "none",
                padding: "var(--spacing-2) 0",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contactus"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ textDecoration: "none", textAlign: "center", marginTop: "var(--spacing-2)" }}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
