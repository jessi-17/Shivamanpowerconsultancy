"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const highlights = [
  "First H-2B cohort to Guam mobilised — May 2026",
  "End-to-end: sourcing, DS-160, US consular interview",
  "On-site trade testing hosted at our Nakodar facility",
  "Delhi & Mumbai associate offices for consular routing",
];

export default function H2BSpotlight() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const m = useIsMobile();

  return (
    <section
      style={{
        padding: m ? "48px 0" : "88px 0",
        backgroundColor: "#0b1c30",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
          display: "flex",
          alignItems: "center",
          gap: m ? 32 : 60,
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* LEFT — H-2B info (tight) */}
        <div ref={leftRef} className="reveal-left" style={{ flex: "1 1 460px", minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(96,165,250,0.15)",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#60a5fa",
                animation: "pulse 2s infinite",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#93c5fd",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              New · USA H-2B Visa · Live Deployment
            </p>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.18,
              marginBottom: 16,
            }}
          >
            Now mobilising Indian workers to the USA &amp; Guam under the H-2B visa.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              marginBottom: 24,
              maxWidth: 520,
            }}
          >
            We just closed our first end-to-end H-2B mobilisation to Guam in partnership with
            <strong style={{ color: "#fff" }}> Infratech International, LLC</strong>. From sourcing
            to on-site trade testing at our Nakodar facility, DS-160 filing, and US consular
            interview coordination in Delhi and Mumbai — we own every step on the India side.
          </p>

          {/* Tight checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
            {highlights.map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                  <circle cx="12" cy="12" r="12" fill="#60a5fa" fillOpacity={0.18} />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.5,
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/visa/usa-h2b"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 28px",
                backgroundColor: "#ffffff",
                color: "#0b1c30",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                textDecoration: "none",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              See H-2B Visa Details
            </Link>
            <Link
              href="/jobs/usa"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 28px",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.25)",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              View USA Jobs
            </Link>
          </div>
        </div>

        {/* RIGHT — USA image (full poster) + stat card below */}
        <div
          ref={rightRef}
          className="reveal-right"
          style={{ flex: "1 1 460px", minWidth: 0, width: "100%" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "#0b1c30",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src="/USA0 guam.png"
              alt="USA H-2B visa mobilisation by Shiva Travel & Manpower Consultants — first cohort to Guam in May 2026"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>

          {/* Stat card below image */}
          <div
            style={{
              marginTop: 14,
              padding: m ? "14px 16px" : "18px 22px",
              borderRadius: 14,
              backgroundColor: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(8px)",
              display: "flex",
              gap: m ? 16 : 28,
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#64748b",
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                Guam Deployment
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0b1c30",
                }}
              >
                Infratech International, LLC
              </div>
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1e3a8a",
                    lineHeight: 1,
                  }}
                >
                  100+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  Candidates Screened
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#1e3a8a",
                    lineHeight: 1,
                  }}
                >
                  1 day
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 10,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  Full Shortlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
