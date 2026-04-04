"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const sectors = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /><path d="M8 2v4" /><path d="M16 2v4" />
      </svg>
    ),
    title: "Construction & Infrastructure",
    count: "200+ employers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Hospitality & Hotels",
    count: "80+ employers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Manufacturing & Industrial",
    count: "120+ employers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Healthcare & Nursing",
    count: "50+ employers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Logistics & Transport",
    count: "60+ employers",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Oil, Gas & Energy",
    count: "40+ employers",
  },
];

export default function PartnersBar() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div style={{ padding: m ? "40px 0" : "80px 0", backgroundColor: "var(--surface)" }}>
      <div ref={ref} className="reveal-stagger" style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 700,
          color: "var(--on-surface)", marginBottom: 8,
        }}>
          Industries We Recruit For
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
          marginBottom: 36, maxWidth: 520, margin: "0 auto 36px",
        }}>
          Our employer network spans 500+ companies across six major industries in the Gulf, Europe, and beyond.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 16,
        }}>
          {sectors.map((s, i) => (
            <div
              key={s.title}
              className="reveal-child"
              style={{
                "--i": i,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "28px 16px",
                backgroundColor: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.04)",
                cursor: "default",
                transition: "transform 250ms cubic-bezier(0.16,1,0.3,1), box-shadow 250ms ease",
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                backgroundColor: "rgba(0,82,220,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#0052dc",
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                color: "var(--on-surface)", textAlign: "center", lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 12,
                color: "var(--on-surface-variant)",
              }}>
                {s.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
