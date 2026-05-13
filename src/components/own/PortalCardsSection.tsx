"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const cards = [
  {
    href: "/employers",
    title: "For Employers",
    description:
      "Hire pre-screened skilled workers from India. End-to-end recruitment, visa processing & deployment support.",
    cta: "Partner With Us",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    href: "/job-seekers",
    title: "For Job Seekers",
    description:
      "Browse overseas jobs, get salary info & subscribe for daily/weekly job alerts. Transparent, minimal charges.",
    cta: "Find Jobs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function PortalCardsSection() {
  const ref = useScrollReveal(0.15);
  const m = useIsMobile();

  return (
    <section
      style={{
        padding: m ? "56px 20px 72px" : "88px 60px 104px",
      }}
    >
      <div
        ref={ref}
        className="reveal-stagger"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: m ? 32 : 48,
        }}
      >
        <div
          className="reveal-child"
          style={{ "--i": 0, textAlign: "center", display: "flex", flexDirection: "column", gap: 12 } as React.CSSProperties}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#0052dc",
              textTransform: "uppercase",
            }}
          >
            Who We Help
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#000c2f",
              margin: 0,
            }}
          >
            Choose Your Path
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "1fr 1fr",
            gap: m ? 20 : 28,
          }}
        >
          {cards.map((card, i) => (
            <Link key={card.title} href={card.href} style={{ textDecoration: "none" }}>
              <div
                className="reveal-child"
                style={{
                  "--i": i + 1,
                  padding: m ? "28px 24px" : "44px 40px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 20,
                  boxShadow: "0 4px 20px rgba(11,28,48,0.04)",
                  transition: "all 280ms cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  height: "100%",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,82,220,0.25)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(11,28,48,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(11,28,48,0.04)";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "#000c2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: m ? 22 : 26,
                    fontWeight: 700,
                    color: "#000c2f",
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: m ? 14 : 15,
                    color: "#43474d",
                    lineHeight: 1.6,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0052dc",
                    marginTop: 4,
                  }}
                >
                  {card.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
