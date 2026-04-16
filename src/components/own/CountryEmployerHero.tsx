"use client";

import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import gsap from "gsap";
import EmployerQuoteForm from "./EmployerQuoteForm";

interface CountryHeroProps {
  name: string;
  fullName: string;
  flag: string;
  heroHeadline: string;
  heroSubtext: string;
  stats: { value: string; label: string }[];
  defaultCountry: string;
}

export default function CountryEmployerHero({
  name, fullName, flag, heroHeadline, heroSubtext, stats, defaultCountry,
}: CountryHeroProps) {
  const m = useIsMobile();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ceh-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 });
  }, []);

  return (
    <div
      data-navbar-theme="dark"
      style={{
        position: "relative",
        width: "100%",
        minHeight: m ? "auto" : "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#000c2f",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          width: "100%", height: "100%",
          backgroundImage: "url('/Professional Punjab office environment.webp')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
          opacity: 0.15, mixBlendMode: "overlay",
        }} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(0,12,47,0.97) 0%, rgba(0,31,93,0.88) 50%, rgba(0,12,47,0.93) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 3, width: "100%",
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: m ? "120px 16px 48px" : "140px 60px 80px",
          display: "flex",
          flexDirection: m ? "column" : "row",
          gap: m ? 32 : 48,
          alignItems: m ? "stretch" : "center",
        }}
      >
        {/* LEFT — Content */}
        <div style={{ flex: "1 1 55%" }}>
          {/* Badge */}
          <div className="ceh-animate" style={{ marginBottom: 20 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999,
              backgroundColor: "rgba(0,82,220,0.25)",
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.05em", color: "#bfdbfe",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", backgroundColor: "#60a5fa",
                display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              LICENSED BY GOVT OF INDIA (MEA) &bull; RA B-1794
            </span>
          </div>

          {/* Flag & Country */}
          <div className="ceh-animate" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: m ? 28 : 36 }}>{flag}</span>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
              color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              {fullName}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="ceh-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#ffffff", marginBottom: 20, maxWidth: 600,
            }}
          >
            {heroHeadline.split(name).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span style={{ color: "#60a5fa" }}>{name}</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          {/* Subtext */}
          <p
            className="ceh-animate"
            style={{
              maxWidth: 540, marginBottom: 28,
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              fontWeight: 400, lineHeight: 1.65, color: "#b4c5ff",
            }}
          >
            {heroSubtext}
          </p>

          {/* Trust points */}
          <div className="ceh-animate" style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              "Free consultation & manpower audit",
              "Customized recruitment plan in 24 hours",
              "Dedicated account manager assigned",
              "Full compliance & documentation support",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  backgroundColor: "rgba(96,165,250,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="ceh-animate"
            style={{
              display: "flex", gap: m ? 12 : 32, flexWrap: "wrap",
              padding: m ? "16px 12px" : "20px 28px",
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: m ? "0 4px" : "0 12px",
                borderRight: i < stats.length - 1 && !m ? "1px solid rgba(255,255,255,0.1)" : "none",
                flex: m ? "1 1 40%" : undefined,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: m ? 20 : 26,
                  fontWeight: 800, color: "#60a5fa", display: "block",
                }}>{s.value}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 11,
                  color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Inquiry Form */}
        <div
          className="ceh-animate"
          id="inquiry-form"
          style={{
            flex: "1 1 400px",
            maxWidth: m ? "100%" : 460,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            padding: m ? "24px 18px" : "32px 28px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ marginBottom: 18 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: m ? 18 : 20, fontWeight: 700,
              color: "var(--on-surface)", marginBottom: 6,
            }}>
              Get a Free Recruitment Quote
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--on-surface-variant)", lineHeight: 1.5,
            }}>
              Tell us your requirements — we&apos;ll respond within 24 hours.
            </p>
          </div>

          <EmployerQuoteForm defaultCountry={defaultCountry} compact />
        </div>
      </div>
    </div>
  );
}
