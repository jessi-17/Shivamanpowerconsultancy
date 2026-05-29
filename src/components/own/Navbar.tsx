"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import Link from "next/link";

type NavLink = { label: string; href: string };
type NavColumn = { heading?: string; links: NavLink[] };
type NavItem =
  | { label: string; href: string; columns?: undefined }
  | { label: string; href?: string; columns: NavColumn[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  {
    label: "Jobs",
    href: "/current-demands",
    columns: [
      {
        heading: "Gulf Jobs",
        links: [
          { label: "Jobs in UAE", href: "/jobs/uae" },
          { label: "Jobs in Saudi Arabia", href: "/jobs/saudi-arabia" },
          { label: "Jobs in Qatar", href: "/jobs/qatar" },
        ],
      },
      {
        heading: "European Jobs",
        links: [
          { label: "Jobs in Poland", href: "/jobs/poland" },
          { label: "Jobs in Romania", href: "/jobs/romania" },
          { label: "All Europe Jobs", href: "/jobs/europe" },
        ],
      },
      {
        heading: "Live",
        links: [{ label: "All Current Openings", href: "/current-demands" }],
      },
    ],
  },
  {
    label: "Work Permits",
    href: "/services",
    columns: [
      {
        heading: "Gulf Work Permits",
        links: [
          { label: "UAE Work Permit", href: "/visa/uae" },
          { label: "Saudi Arabia Work Permit", href: "/visa/saudi-arabia" },
          { label: "Qatar Work Permit", href: "/visa/qatar" },
          { label: "Kuwait Work Permit", href: "/visa/kuwait" },
          { label: "Bahrain Work Permit", href: "/visa/bahrain" },
        ],
      },
      {
        heading: "European Work Permits",
        links: [
          { label: "Poland Work Permit", href: "/visa/poland" },
          { label: "Romania Work Permit", href: "/visa/romania" },
          { label: "Croatia Work Permit", href: "/visa/croatia" },
          { label: "Schengen Work Permit", href: "/visa/schengen" },
        ],
      },
    ],
  },
  {
    label: "Immigration",
    href: "/services",
    columns: [
      {
        heading: "Office",
        links: [
          { label: "Immigration Office Nakodar", href: "/nakodar" },
          { label: "Visa Consultant Nakodar", href: "/services" },
        ],
      },
      {
        heading: "Visa Process",
        links: [
          { label: "E-Migrate Guidance", href: "/services/e-migrate" },
          { label: "Document Attestation Guide", href: "/services/document-attestation" },
          { label: "GAMCA Medical Guide", href: "/services/gamca-medical" },
        ],
      },
      {
        heading: "Departure & Beyond",
        links: [
          { label: "Embassy Guidance", href: "/services/embassy-coordination" },
          { label: "Passport Guidance", href: "/services/passport-assistance" },
          { label: "Pre-Departure Briefing", href: "/services/pre-departure-briefing" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/punjab",
    columns: [
      {
        heading: "Doaba Cities",
        links: [
          { label: "Nakodar (HQ)", href: "/nakodar" },
          { label: "Jalandhar", href: "/jalandhar" },
          { label: "Kapurthala", href: "/kapurthala" },
          { label: "Phagwara", href: "/phagwara" },
          { label: "Hoshiarpur", href: "/hoshiarpur" },
          { label: "Nawanshahr", href: "/nawanshahr" },
        ],
      },
      {
        heading: "State-wide",
        links: [{ label: "All Punjab", href: "/punjab" }],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Tools",
        links: [{ label: "Salary Calculator", href: "/salary-calculator" }],
      },
      {
        heading: "Stories & Knowledge",
        links: [
          { label: "Success Stories", href: "/success-stories" },
          { label: "Guides", href: "/guides" },
          { label: "Blog", href: "/blog" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
];

// Pages that have a dark hero background at the top
const DARK_HERO_PAGES = ["/", "/contactus", "/employers", "/job-seekers", "/salary-calculator"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const m = useIsMobile();
  const pathname = usePathname();

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname) || pathname === "/blog" || pathname.startsWith("/employers/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileSection(null);
    setOpenDropdown(null);
  }, [pathname]);

  // Admin pages render their own toolbar; hide the public navbar there.
  if (pathname.startsWith("/admin")) return null;

  // White text when on a dark hero page AND not scrolled
  const light = hasDarkHero && !scrolled;
  const textColor = light ? "#ffffff" : "var(--primary)";
  const linkColor = light ? "rgba(255,255,255,0.85)" : "var(--on-surface-variant)";
  const linkHover = light ? "#ffffff" : "var(--primary)";
  const hamburgerColor = light ? "#ffffff" : "var(--on-surface)";

  const handleEnter = (label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

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
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: m ? 8 : 12,
          }}
          aria-label="Shiva Travel & Manpower Consultants — Home"
        >
          <img
            src="/image.png"
            alt="Shiva Travel & Manpower Consultants logo"
            style={{
              height: m ? 44 : 56,
              width: "auto",
              display: "block",
              objectFit: "contain",
              filter: light ? "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" : "none",
              transition: "filter 300ms ease",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: m ? 14 : 18,
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
            gap: 4,
          }}
        >
          {navItems.map((item) => {
            const hasColumns = "columns" in item && item.columns && item.columns.length > 0;
            const isOpen = openDropdown === item.label;
            const colCount = hasColumns ? item.columns!.length : 0;
            const panelMinWidth = colCount <= 1 ? 240 : colCount === 2 ? 480 : colCount === 3 ? 720 : 880;

            const baseStyle: React.CSSProperties = {
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "10px 14px",
              borderRadius: 8,
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              whiteSpace: "nowrap",
              color: scrolled ? "var(--on-surface-variant)" : linkColor,
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 200ms ease, background-color 200ms ease",
              backgroundColor: "transparent",
            };

            const onEnter = (e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.color = scrolled ? "var(--primary)" : linkHover;
              if (hasColumns) handleEnter(item.label);
            };
            const onLeave = (e: React.MouseEvent<HTMLElement>) => {
              e.currentTarget.style.color = scrolled ? "var(--on-surface-variant)" : linkColor;
              if (hasColumns) handleLeave();
            };

            const chevron = hasColumns ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 200ms ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            ) : null;

            return (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => hasColumns && handleEnter(item.label)}
                onMouseLeave={() => hasColumns && handleLeave()}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    style={baseStyle}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                  >
                    {item.label}
                    {chevron}
                  </Link>
                ) : (
                  <button
                    type="button"
                    style={{ ...baseStyle, border: "none", background: "transparent" }}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                  >
                    {item.label}
                    {chevron}
                  </button>
                )}

                {/* Dropdown mega-menu panel */}
                {hasColumns && isOpen && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      minWidth: panelMinWidth,
                      backgroundColor: "#ffffff",
                      borderRadius: 14,
                      boxShadow: "0 18px 44px rgba(0,12,47,0.14), 0 2px 6px rgba(0,12,47,0.08)",
                      border: "1px solid rgba(11,28,48,0.06)",
                      padding: "20px 8px",
                      animation: "nav-dd-in 180ms ease-out",
                      display: "grid",
                      gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
                      gap: 8,
                    }}
                  >
                    {item.columns!.map((col, ci) => (
                      <div key={ci} style={{ minWidth: 200 }}>
                        {col.heading && (
                          <div
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: 11,
                              fontWeight: 800,
                              color: "#001f5d",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              padding: "0 14px 10px",
                              borderBottom: "1px solid rgba(11,28,48,0.08)",
                              marginBottom: 6,
                            }}
                          >
                            {col.heading}
                          </div>
                        )}
                        {col.links.map((child) => (
                          <Link
                            key={`${ci}-${child.href}`}
                            href={child.href}
                            role="menuitem"
                            style={{
                              display: "block",
                              padding: "9px 14px",
                              fontFamily: "var(--font-body)",
                              fontSize: 14,
                              fontWeight: 500,
                              color: "#0b1c30",
                              textDecoration: "none",
                              borderRadius: 8,
                              transition: "background-color 150ms ease, color 150ms ease, padding-left 150ms ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#001f5d";
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.paddingLeft = "18px";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "transparent";
                              e.currentTarget.style.color = "#0b1c30";
                              e.currentTarget.style.paddingLeft = "14px";
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(20px)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          {navItems.map((item) => {
            const hasColumns = "columns" in item && item.columns && item.columns.length > 0;
            const isSectionOpen = openMobileSection === item.label;

            if (!hasColumns && item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0b1c30",
                    textDecoration: "none",
                    padding: "14px 4px",
                    borderBottom: "1px solid rgba(11,28,48,0.06)",
                  }}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} style={{ borderBottom: "1px solid rgba(11,28,48,0.06)" }}>
                <button
                  type="button"
                  onClick={() => setOpenMobileSection(isSectionOpen ? null : item.label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "14px 4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0b1c30",
                  }}
                  aria-expanded={isSectionOpen}
                >
                  {item.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: "transform 200ms ease",
                      transform: isSectionOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isSectionOpen && (
                  <div style={{ paddingBottom: 12, display: "flex", flexDirection: "column", gap: 0 }}>
                    {item.columns!.map((col, ci) => (
                      <div key={ci}>
                        {col.heading && (
                          <div
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: 10,
                              fontWeight: 800,
                              color: "#001f5d",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              padding: "10px 16px 6px",
                              marginLeft: 6,
                            }}
                          >
                            {col.heading}
                          </div>
                        )}
                        {col.links.map((child) => (
                          <Link
                            key={`${ci}-${child.href}`}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block",
                              fontFamily: "var(--font-body)",
                              fontSize: 14,
                              fontWeight: 500,
                              color: "#43474d",
                              textDecoration: "none",
                              padding: "10px 16px",
                              borderLeft: "2px solid rgba(0,31,93,0.10)",
                              marginLeft: 6,
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contactus"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 24px",
              background: "linear-gradient(135deg, #0052dc, #1d4ed8)",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              marginTop: 16,
              textAlign: "center",
            }}
          >
            Contact us
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes nav-dd-in {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
