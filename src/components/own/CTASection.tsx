"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function CTASection() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      style={{
        backgroundColor: "#000c2f",
        padding: m ? "48px 0" : "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle bg image */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "35%",
          opacity: 0.15,
          backgroundImage: "url('/Homepage.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
        }}
      />

      <div
        ref={ref}
        className="reveal"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.1em", color: "#60a5fa", textTransform: "uppercase", marginBottom: 16,
        }}>
          PUNJAB&apos;S MOST TRUSTED
        </p>

        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          fontWeight: 700, color: "#ffffff", marginBottom: 20,
        }}>
          Don&apos;t Risk Your Future with Unverified Agents
        </h2>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)",
          lineHeight: 1.6, maxWidth: 600, margin: "0 auto 36px",
        }}>
          Walk into our Nakodar office or book a digital session for a secure, legal,
          and rapid recruitment process. Trusted by families across the Doaba region for over two decades.
        </p>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 16, flexWrap: "wrap", marginBottom: 32,
        }}>
          <a
            href="/contactus"
            style={{
              display: "inline-flex", alignItems: "center", padding: "14px 28px",
              backgroundColor: "#0052dc", color: "#ffffff",
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              borderRadius: 10, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,82,220,0.4)",
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
          >
            Contact Our Experts Now
          </a>
          <a
            href="tel:+919814820432"
            style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "14px 24px", backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none", transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                CALL US DIRECTLY
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#ffffff" }}>
                +91 98148-20432
              </p>
            </div>
          </a>
        </div>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.35)", fontStyle: "italic",
        }}>
          Serving Nakodar, Jalandhar, Kapurthala, and the entire Doaba region.
        </p>
      </div>
    </div>
  );
}
