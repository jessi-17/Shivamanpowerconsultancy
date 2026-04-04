"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Visa Services", href: "/services" },
  { label: "Salary Calculator", href: "/salary-calculator" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Nakodar Office", href: "/nakodar" },
  { label: "Blog", href: "/blog" },
];

// Pages that have a dark hero background at the top
const DARK_HERO_PAGES = ["/", "/contactus", "/employers", "/job-seekers", "/salary-calculator"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const m = useIsMobile();
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname) || pathname.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // White text when on a dark hero page AND not scrolled
  const light = hasDarkHero && !scrolled;

  const textColor = light ? "#ffffff" : "var(--primary)";
  const linkColor = light ? "rgba(255,255,255,0.8)" : "var(--on-surface-variant)";
  const linkHover = light ? "#ffffff" : "var(--primary)";
  const hamburgerColor = light ? "#ffffff" : "var(--on-surface)";

  return (
    <nav
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
        transition: "all 300ms ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
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
              color: scrolled ? "var(--primary)" : textColor,
              transition: "color 300ms ease",
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
                color: scrolled ? "var(--on-surface-variant)" : linkColor,
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = scrolled ? "var(--primary)" : linkHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = scrolled ? "var(--on-surface-variant)" : linkColor;
              }}
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
              background: "linear-gradient(135deg, #0052dc, #1d4ed8)",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,82,220,0.3)";
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
            aria-expanded={mobileOpen}
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
                  backgroundColor: scrolled ? "var(--on-surface)" : hamburgerColor,
                  transition: "all 200ms ease",
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
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
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
