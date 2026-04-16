"use client";

import { useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import gsap from "gsap";
import EmployerQuoteForm from "./EmployerQuoteForm";

const stats = [
  { num: "5,000+", label: "Workers Deployed" },
  { num: "12+", label: "Countries" },
  { num: "25+", label: "Years" },
  { num: "98%", label: "Retention" },
];

export default function EmployerHero() {
  const m = useIsMobile();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".emp-hero-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    });
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
        <Image
          src="/Professional Punjab office environment.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.2, mixBlendMode: "overlay" }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(0,12,47,0.95) 0%, rgba(0,31,93,0.85) 50%, rgba(0,12,47,0.9) 100%)",
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
          <div className="emp-hero-animate" style={{ marginBottom: 20 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999,
              backgroundColor: "rgba(0,82,220,0.25)",
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", color: "#bfdbfe",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", backgroundColor: "#60a5fa",
                display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              LICENSED BY GOVT OF INDIA (MEA) &bull; RA B-1794
            </span>
          </div>

          {/* Headline */}
          <h1
            className="emp-hero-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#ffffff", marginBottom: 20, maxWidth: 600,
            }}
          >
            Your Trusted Recruitment{" "}
            <span style={{ color: "#60a5fa" }}>Partner in India</span>
          </h1>

          {/* Subtext */}
          <p
            className="emp-hero-animate"
            style={{
              maxWidth: 540, marginBottom: 28,
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              fontWeight: 400, lineHeight: 1.65, color: "#b4c5ff",
            }}
          >
            Shiva Travel &amp; Manpower Consultants provides ethically-sourced, pre-screened
            skilled workforce from India to employers across the Gulf, Europe, and beyond.
            25+ years of reliable manpower deployment with zero compliance issues.
          </p>

          {/* Trust points */}
          <div className="emp-hero-animate" style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
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
            className="emp-hero-animate"
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
                }}>{s.num}</span>
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
          className="emp-hero-animate"
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

          <EmployerQuoteForm compact />
        </div>
      </div>
    </div>
  );
}
