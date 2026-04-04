"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Registration & Profile",
    desc: "Submit your documents and complete a skill assessment. We evaluate your qualifications and match you with the right opportunities.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Interview & Selection",
    desc: "Get matched with verified employers across the Gulf & Europe. We prepare you for interviews and handle all employer communication.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Visa & Documentation",
    desc: "We guide you through work permit processing, medical clearance, and E-Migrate registration — step by step, so nothing gets missed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deployment & Support",
    desc: "Pre-departure orientation, travel coordination, and post-arrival support in your destination country. We stay with you.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
];

export default function VisaProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".process-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the horizontal arrow connectors
    const arrows = sectionRef.current.querySelectorAll(".process-arrow");
    arrows.forEach((arrow, i) => {
      gsap.fromTo(
        arrow,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.4,
          delay: 0.15 + i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        padding: "clamp(40px, 8vw, 80px) 0 clamp(48px, 8vw, 100px)",
        backgroundColor: "var(--surface-container-low)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 560, margin: "0 auto 56px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#0052dc",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            YOUR JOURNEY WITH US
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--on-surface)",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            From Nakodar to the World<br />in 4 Simple Steps
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "var(--on-surface-variant)",
              lineHeight: 1.6,
            }}
          >
            Here is exactly how we take you from your first visit to landing
            in your new country. No confusion, no hidden steps.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card"
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: "28px 28px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  backgroundColor: "#0052dc", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800,
                  flexShrink: 0,
                }}>{step.number}</div>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  backgroundColor: "rgba(0,82,220,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0052dc", flexShrink: 0,
                }}>{step.icon}</div>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                color: "var(--on-surface)", marginBottom: 8, lineHeight: 1.3,
              }}>{step.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--on-surface-variant)", lineHeight: 1.65,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
