"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const stats = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: "20+ Years Experience",
    description: "Pioneering overseas recruitment across India with a legacy of trust and reliability.",
  },
  {
    icon: (
      <svg width="18" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% Legal Process",
    description: "Full compliance with MEA regulations. Transparent, minimal charges with no hidden fees.",
  },
  {
    icon: (
      <svg width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Direct Employer Ties",
    description: "Direct partnerships with 500+ top companies across UAE, Poland, and more.",
  },
  {
    icon: (
      <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "End-to-End Support",
    description: "From initial documentation to post-landing assistance in the host country.",
  },
];

export default function TrustBar() {
  const ref = useScrollReveal(0.2);
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal-stagger"
      style={{
        width: "calc(100% - 48px)",
        maxWidth: 1280,
        margin: "-37px auto 0",
        position: "relative",
        zIndex: 10,
        backgroundColor: "#ffffff",
        borderRadius: m ? 20 : 29,
        padding: m ? "28px 20px" : "55px 56px",
        boxShadow: "0 8px 40px rgba(11,28,48,0.08)",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: m ? 20 : 32 }}>
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="reveal-child"
            style={{
              "--i": i,
              flex: "1 1 250px",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-4)",
              transition: "transform 300ms cubic-bezier(0.16,1,0.3,1)",
            } as React.CSSProperties}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 16,
              backgroundColor: "#000c2f",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {stat.icon}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                color: "#000c2f", lineHeight: 1.4, margin: 0,
              }}>
                {stat.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 400,
                color: "#43474d", lineHeight: 1.5, margin: 0,
              }}>
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
