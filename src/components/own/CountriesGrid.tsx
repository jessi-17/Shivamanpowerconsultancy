"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Icon } from "@iconify/react";

const countries = [
  { name: "UAE", region: "Middle East", flag: "flagpack:ae" },
  { name: "Saudi Arabia", region: "Middle East", flag: "flagpack:sa" },
  { name: "Qatar", region: "Middle East", flag: "flagpack:qa" },
  { name: "Poland", region: "Europe", flag: "flagpack:pl" },
  { name: "Romania", region: "Europe", flag: "flagpack:ro" },
  { name: "Kuwait", region: "Middle East", flag: "flagpack:kw" },
  { name: "Oman", region: "Middle East", flag: "flagpack:om" },
  { name: "Bahrain", region: "Middle East", flag: "flagpack:bh" },
  { name: "Croatia", region: "Europe", flag: "flagpack:hr" },
];

export default function CountriesGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".country-card"),
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{ padding: "80px 0", backgroundColor: "var(--surface)" }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", marginBottom: 12,
          }}>
            Countries We Serve from Nakodar &amp; Jalandhar
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)", lineHeight: 1.6,
          }}>
            From Nakodar and Jalandhar to the world. We facilitate recruitment across three continents
            for skilled and semi-skilled workers from Punjab&apos;s Doaba region.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {countries.map((c) => (
            <div
              key={c.name}
              className="country-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "28px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                transition: "transform 500ms ease, box-shadow 500ms ease",
                border: "1px solid rgba(0,0,0,0.04)",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "rgba(0,82,220,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
              }}
            >
              <div className="card-icon" style={{
                width: 48, height: 48, borderRadius: 14,
                backgroundColor: "var(--surface-container-low)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 1,
                transition: "background-color 600ms ease",
                overflow: "hidden",
              }}>
                <Icon icon={c.flag} width={32} height={32} />
              </div>
              <h3 className="card-title" style={{
                fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                color: "var(--on-surface)", textAlign: "center",
                position: "relative", zIndex: 1,
                transition: "color 600ms ease",
              }}>
                {c.name}
              </h3>
              <p className="card-sub" style={{
                fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)",
                position: "relative", zIndex: 1,
                transition: "color 600ms ease",
              }}>
                {c.region}
              </p>
            </div>
          ))}

          {/* View All */}
          <a
            href="/current-demands"
            className="country-card"
            style={{
              backgroundColor: "#000c2f",
              borderRadius: 16,
              padding: "28px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 250ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,12,47,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: 20, color: "#fff" }}>•••</span>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff",
            }}>View All</span>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)",
            }}>20+ Destinations</span>
          </a>
        </div>
      </div>
    </div>
  );
}
