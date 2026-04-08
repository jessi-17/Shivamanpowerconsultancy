"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
  countryName: string;
  points: { title: string; description: string }[];
}

const icons = [
  // Shield
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Clipboard check
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><path d="m9 14 2 2 4-4" /></svg>,
  // Heart pulse
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>,
  // File check
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></svg>,
];

export default function CountryCompliance({ countryName, points }: Props) {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 16px" : "80px 0",
        backgroundColor: "#f8f9ff",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: m ? 32 : 48 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", color: "var(--surface-tint)",
            textTransform: "uppercase", marginBottom: 10,
          }}>
            COMPLIANCE & REGULATIONS
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", lineHeight: 1.25,
            maxWidth: 640, margin: "0 auto",
          }}>
            Full Legal Compliance for {countryName}
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15,
            color: "var(--on-surface-variant)", lineHeight: 1.6,
            maxWidth: 560, margin: "12px auto 0",
          }}>
            We handle every legal and regulatory requirement so you can focus on your business.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(2, 1fr)",
          gap: m ? 12 : 20,
        }}>
          {points.map((point, i) => (
            <div
              key={point.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: m ? "20px 16px" : "28px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 200ms ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,12,47,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                backgroundColor: "rgba(0,82,220,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                {icons[i % icons.length]}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "var(--on-surface)", marginBottom: 8,
              }}>
                {point.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--on-surface-variant)", lineHeight: 1.6,
              }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
