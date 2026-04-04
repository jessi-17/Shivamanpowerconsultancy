"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const featured = [
  { name: "UAE (Dubai)", subtitle: "CONSTRUCTION & TECH", image: "/UAE.jpg", color: "#c9a227", href: "/jobs/uae" },
  { name: "Poland", subtitle: "MANUFACTURING", image: "/poland job.webp", color: "#dc3545", href: "/jobs/poland" },
  { name: "Romania", subtitle: "LOGISTICS & FMCG", image: "/Romania jobs.webp", color: "#0052dc", href: "/jobs/romania" },
  { name: "Saudi Arabia", subtitle: "ENGINEERING", image: "/Saudi arabia job.webp", color: "#006d3a", href: "/jobs/saudi-arabia" },
  { name: "Croatia", subtitle: "CONSTRUCTION & INDUSTRY", image: "/Rectangle 3.webp", color: "#0052dc", href: "/jobs/europe" },
  { name: "Qatar", subtitle: "OIL & GAS", image: "/Rectangle 4.webp", color: "#8b1a3a", href: "/jobs/qatar" },
  { name: "Europe", subtitle: "SKILLED & SEMI-SKILLED", image: "/Rectangle 2.webp", color: "#f59e0b", href: "/jobs/europe" },
];

const moreCountries = [
  { name: "Qatar", region: "Middle East", flag: "flagpack:qa" },
  { name: "Kuwait", region: "Middle East", flag: "flagpack:kw" },
  { name: "Oman", region: "Middle East", flag: "flagpack:om" },
  { name: "Bahrain", region: "Middle East", flag: "flagpack:bh" },
  { name: "Croatia", region: "Europe", flag: "flagpack:hr" },
];

export default function CareerDestinations() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal(0.1);
  const gridRef = useScrollReveal(0.1);
  const m = useIsMobile();

  return (
    <div style={{ padding: m ? "40px 0" : "80px 0", backgroundColor: "var(--surface)" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)" }}>

        {/* Header */}
        <div
          ref={headerRef}
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--on-surface)",
                marginBottom: 12,
              }}
            >
              Career Destinations We Serve
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--on-surface-variant)",
                lineHeight: 1.6,
              }}
            >
              From Nakodar and Jalandhar to 20+ countries. We manage legal work permits and
              direct recruitment for skilled professionals across three continents.
            </p>
          </div>
          <a
            href="/current-demands"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              backgroundColor: "#001f5d",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 10,
              textDecoration: "none",
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,12,47,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View All Opportunities →
          </a>
        </div>

        {/* Featured destination cards */}
        <div
          ref={cardsRef}
          className="reveal-stagger"
          style={{ display: "flex", gap: 16, flexWrap: "wrap", paddingTop: 10, paddingBottom: 12 }}
        >
          {featured.map((dest, i) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="reveal-child"
              style={{
                "--i": i,
                flex: m ? "1 1 100%" : "1 1 calc(25% - 12px)",
                maxWidth: m ? "100%" : "calc(25% - 12px)",
                height: m ? 280 : 360,
                cursor: "pointer",
                transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
                textDecoration: "none",
              } as React.CSSProperties}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ width: "100%", height: "100%", borderRadius: 20, position: "relative", overflow: "hidden" }}>
                <Image src={dest.image} alt={`Jobs in ${dest.name} from Shiva Manpower Consultants Nakodar`} fill sizes="(max-width: 640px) 100vw, 20vw" loading="lazy" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,12,47,0) 0%, rgba(0,12,47,0.2) 50%, rgba(0,12,47,1) 100%)",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, zIndex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                    {dest.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", color: dest.color, textTransform: "uppercase" }}>
                    {dest.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* More Countries card */}
          <div
            className="reveal-child"
            style={{
              "--i": featured.length,
              flex: m ? "1 1 100%" : "1 1 calc(25% - 12px)",
              maxWidth: m ? "100%" : "calc(25% - 12px)",
              height: m ? 220 : 360,
              borderRadius: 20,
              backgroundColor: "#000c2f",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: 28,
              gap: 12,
              cursor: "pointer",
              transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
            } as React.CSSProperties}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#fff" }}>
              20+ Countries
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
              Qatar, Kuwait, Oman, Croatia, Bahrain & more.
            </p>
            <a href="/current-demands" style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#60a5fa", textDecoration: "none" }}>
              View All →
            </a>
          </div>
        </div>

        {/* Additional country flags — hidden on mobile */}
        {!m && (
          <div
            ref={gridRef}
            className="reveal-stagger"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 32,
            }}
          >
            {moreCountries.map((c, i) => (
              <div
                key={c.name}
                className="reveal-child"
                style={{
                  "--i": i,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.04)",
                  transition: "transform 300ms ease, box-shadow 300ms ease",
                  cursor: "default",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon icon={c.flag} width={24} height={24} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--on-surface)" }}>
                  {c.name}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--on-surface-variant)" }}>
                  {c.region}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
