"use client";

import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   Desktop-only proof sections for the /services page.
   Inspired by the mobile credibility stack: real visa stamps,
   live deployment ticker. Mobile already has its own version
   via MobileCredibilityStack so we hide these on small screens.
   ============================================================ */

const visaStamps = [
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (15).jpeg", name: "Vijay K.", country: "Dubai", flag: "🇦🇪", month: "May 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (5).jpeg", name: "Manjit S.", country: "Poland", flag: "🇵🇱", month: "May 2026", type: "Work Permit" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.06 PM.jpeg", name: "Narinder P.", country: "Romania", flag: "🇷🇴", month: "Apr 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (8).jpeg", name: "Harpreet S.", country: "Saudi Arabia", flag: "🇸🇦", month: "Apr 2026", type: "Iqama" },
  { img: "/WhatsApp Image 2026-05-09 at 5.04.42 PM.jpeg", name: "Sukhdev S.", country: "Bulgaria", flag: "🇧🇬", month: "Apr 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (11).jpeg", name: "Jaspreet S.", country: "Qatar", flag: "🇶🇦", month: "Mar 2026", type: "QID Approval" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (2).jpeg", name: "Karamjit S.", country: "Kuwait", flag: "🇰🇼", month: "Mar 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (13).jpeg", name: "Balwinder S.", country: "UAE", flag: "🇦🇪", month: "Mar 2026", type: "Employment Visa" },
];

function Kicker({ accent = "#001f5d", label }: { accent?: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
      <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: accent, borderRadius: 2 }} />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 12,
          fontWeight: 800,
          color: accent,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: accent, borderRadius: 2 }} />
    </div>
  );
}

export function VerifiedPlacementsWall() {
  const m = useIsMobile();
  if (m) return null;

  return (
    <div role="region" aria-label="Verified placements" style={{ width: "100%", padding: "96px 0", backgroundColor: "#f8f9ff", position: "relative", overflow: "hidden" }}>
      {/* Subtle background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,31,93,0.04) 0%, rgba(0,31,93,0) 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 60px", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Kicker label="Verified Placements" />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Real Visas. Real Workers.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#43474d",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Stamped this season. Names shown first-name only for privacy. Every photo is a real placement we did from our Nakodar office.
          </p>
        </div>

        {/* 4-col grid of visa stamp photos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
          }}
        >
          {visaStamps.map((v, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: "#000c2f",
                boxShadow: "0 8px 24px rgba(0,12,47,0.10)",
                transition: "transform 250ms, box-shadow 250ms",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 36px rgba(0,12,47,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,12,47,0.10)";
              }}
            >
              <Image
                src={v.img}
                alt={`${v.type} for ${v.name} to ${v.country}`}
                fill
                sizes="(max-width: 1200px) 25vw, 300px"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(0,12,47,0) 35%, rgba(0,12,47,0.9) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  padding: "4px 9px",
                  backgroundColor: "rgba(250, 204, 21, 0.95)",
                  borderRadius: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 800,
                  color: "#000c2f",
                  letterSpacing: "0.04em",
                }}
              >
                {v.type.toUpperCase()}
              </div>
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>
                  {v.name} → {v.country} {v.flag}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
                  Stamped {v.month}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line — verifiability */}
        <div
          style={{
            marginTop: 36,
            padding: "20px 28px",
            backgroundColor: "#fff",
            border: "1px solid rgba(0,12,47,0.08)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              backgroundColor: "#fff7ed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div style={{ flex: "1 1 280px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 4 }}>
              Want to verify a placement?
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.5 }}>
              Visit our Nakodar office — we&apos;ll show you the original visa, the employer contract, and connect you with workers currently abroad.
            </p>
          </div>
          <a
            href="https://wa.me/919815358832?text=Hi%2C%20I%27d%20like%20to%20verify%20a%20recent%20placement"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "11px 20px",
              borderRadius: 10,
              backgroundColor: "#001f5d",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Verify on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
