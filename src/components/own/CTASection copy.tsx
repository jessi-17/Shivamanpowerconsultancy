"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".cta-animate"),
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#000c2f",
        padding: "80px 0",
        marginTop: 80,
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
          backgroundImage: "url('/Homepage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          className="cta-animate"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#60a5fa",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          NAKODAR&apos;S MOST TRUSTED
        </p>
        <h2
          className="cta-animate"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 20,
          }}
        >
          The Best Recruitment Service in Nakodar & Jalandhar — Guaranteed.
        </h2>
        <p
          className="cta-animate"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "0 auto 32px",
          }}
        >
          Don&apos;t risk your future with unverified agents. Walk into our Nakodar office or
          book a digital session for a secure, legal, and rapid recruitment process.
          Trusted by families across Jalandhar, Nakodar, Kapurthala &amp; the Doaba region.
        </p>

        {/* Local SEO stats */}
        <div
          className="cta-animate"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "5,000+", label: "Workers placed from Nakodar" },
            { num: "25+", label: "Years serving Jalandhar region" },
            { num: "15+", label: "Countries from Punjab" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800,
                color: "#60a5fa", marginBottom: 4,
              }}>{s.num}</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 12,
                color: "rgba(255,255,255,0.45)", maxWidth: 160,
              }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div
          className="cta-animate"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          <a
            href="https://wa.me/919814820432"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 32px",
              backgroundColor: "#0052dc",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,82,220,0.4)",
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            Contact Our Experts Now
          </a>
          <a
            href="tel:+919814820432"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 24px",
              backgroundColor: "rgba(255,255,255,0.06)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              transition: "all 200ms ease",
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

        <p
          className="cta-animate"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "rgba(255,255,255,0.35)",
            fontStyle: "italic",
          }}
        >
          Serving the youth of Nakodar, Jalandhar, Kapurthala, and the entire Doaba region with pride for over two decades.
        </p>
      </div>
    </div>
  );
}
