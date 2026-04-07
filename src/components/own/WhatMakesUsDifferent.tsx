"use client";

import { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const points = [
  "Government licensed (RA B-1794/PUN). Not a freelance agent operating from a back office.",
  "Minimal & transparent charges. No hidden fees — every cost is communicated upfront before you proceed.",
  "Walk-in office in Nakodar. Meet us face to face, verify our credentials, ask any question.",
  "Post deployment support. We don't disappear after you land. Our team stays in touch until you're settled.",
];

export default function WhatMakesUsDifferent() {
  const ref = useRef<HTMLDivElement>(null);
  const m = useIsMobile();

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.querySelector(".diff-image"),
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      ref.current.querySelectorAll(".diff-animate"),
      { opacity: 0, y: 25 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: m ? "40px 0" : "80px 0",
        backgroundColor: "var(--surface)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
          display: "flex",
          alignItems: "center",
          gap: m ? 32 : 56,
          flexWrap: "wrap",
        }}
      >
        {/* Left — Image */}
        <div
          className="diff-image"
          style={{
            flex: "1 1 400px",
            minWidth: 0,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: m ? 300 : 520,
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/Professional Punjab office environment.webp"
              alt="Shiva Manpower Consultants Nakodar office"
              fill
              sizes="(max-width: 640px) 100vw, 45vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: m ? 16 : -16,
              backgroundColor: "#001f5d",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 8px 28px rgba(0,12,47,0.2)",
              maxWidth: 200,
            }}
          >
            <p style={{
              fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800,
              color: "#60a5fa", marginBottom: 2,
            }}>
              20+
            </p>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.4,
            }}>
              Years serving families across India
            </p>
          </div>
        </div>

        {/* Right — Text */}
        <div style={{ flex: "1 1 480px", minWidth: 0 }}>
          <p
            className="diff-animate"
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
            WHAT SETS US APART
          </p>

          <h2
            className="diff-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--on-surface)",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            What Makes Shiva Manpower<br />
            Consultants in Nakodar &amp; Jalandhar<br />
            Different?
          </h2>

          <p
            className="diff-animate"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "var(--on-surface-variant)",
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 520,
            }}
          >
            India has hundreds of recruitment agents. Most operate without proper licensing,
            charge hidden fees, and vanish after collecting money. Shiva Manpower Consultants has
            built its reputation over 20 years by doing the exact opposite.
          </p>

          {/* Bullet points */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {points.map((point) => (
              <div
                key={point}
                className="diff-animate"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 12,
                  backgroundColor: "rgba(0,82,220,0.03)",
                  border: "1px solid rgba(0,82,220,0.06)",
                  transition: "background-color 200ms, border-color 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0,82,220,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,82,220,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0,82,220,0.03)";
                  e.currentTarget.style.borderColor = "rgba(0,82,220,0.06)";
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ flexShrink: 0, marginTop: 2 }}
                >
                  <circle cx="12" cy="12" r="12" fill="#0052dc" fillOpacity={0.12} />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--on-surface)",
                    lineHeight: 1.5,
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>

          <a
            className="diff-animate"
            href="/contactus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              backgroundColor: "#001f5d",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: "none",
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,31,93,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Talk to Our Team →
          </a>
        </div>
      </div>
    </div>
  );
}
