"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   BigQuote — editorial pull-quote section.
   Premium feel: massive serif opening glyph, asymmetric layout,
   word-by-word fade-in on scroll, no card chrome.
   Use on story pages (about-us, city pages, founder pages).
   ============================================================ */

export interface BigQuoteProps {
  kicker?: string;
  quote: string;
  attribution: {
    name: string;
    role: string;
    meta?: string; // e.g. "Founded the agency in 2002"
    avatar?: string;
    avatarAlt?: string;
    linkedinUrl?: string; // optional — renders LinkedIn icon next to name
  };
}

export default function BigQuote({ kicker, quote, attribution }: BigQuoteProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const wordEls = root.querySelectorAll<HTMLElement>(".bq-word");
    const attrEl = root.querySelector<HTMLElement>(".bq-attr");
    const glyphEl = root.querySelector<HTMLElement>(".bq-glyph");

    gsap.set(wordEls, { opacity: 0, y: 18, filter: "blur(4px)" });
    if (attrEl) gsap.set(attrEl, { opacity: 0, y: 12 });
    if (glyphEl) gsap.set(glyphEl, { opacity: 0, scale: 0.9 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            if (glyphEl) tl.to(glyphEl, { opacity: 0.12, scale: 1, duration: 0.9 });
            tl.to(
              wordEls,
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.025 },
              0.15
            );
            if (attrEl) tl.to(attrEl, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Founder quote"
      style={{
        width: "100%",
        backgroundColor: "#f4f6fb",
        padding: m ? "90px 0" : "160px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: m ? "0 20px" : "0 60px",
          position: "relative",
        }}
      >
        {/* Optional kicker */}
        {kicker && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: m ? 24 : 32 }}>
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 3,
                backgroundColor: "#001f5d",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 800,
                color: "#001f5d",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </span>
          </div>
        )}

        {/* Quote block — asymmetric, glyph anchored top-left */}
        <div style={{ position: "relative", paddingTop: m ? 50 : 80 }}>
          {/* Massive opening glyph */}
          <span
            className="bq-glyph"
            aria-hidden
            style={{
              position: "absolute",
              top: m ? -10 : -30,
              left: m ? -8 : -20,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: m ? "9rem" : "clamp(10rem, 18vw, 18rem)",
              fontWeight: 700,
              color: "#001f5d",
              opacity: 0,
              lineHeight: 0.8,
              pointerEvents: "none",
              userSelect: "none",
              willChange: "transform, opacity",
            }}
          >
            &ldquo;
          </span>

          <blockquote
            style={{
              position: "relative",
              fontFamily: "var(--font-display)",
              fontSize: m ? "clamp(1.5rem, 6vw, 1.875rem)" : "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 500,
              color: "#0b1c30",
              lineHeight: 1.22,
              letterSpacing: "-0.015em",
              fontStyle: "italic",
              margin: 0,
              maxWidth: m ? "100%" : "90%",
            }}
          >
            {quote.split(" ").map((word, i) => (
              <span
                key={i}
                className="bq-word"
                style={{ display: "inline-block", marginRight: "0.32em", willChange: "transform, opacity, filter" }}
              >
                {word}
              </span>
            ))}
          </blockquote>

          {/* Attribution */}
          <div
            className="bq-attr"
            style={{
              marginTop: m ? 36 : 56,
              display: "flex",
              alignItems: "center",
              gap: m ? 14 : 20,
              willChange: "transform, opacity",
            }}
          >
            {attribution.avatar && (
              <div
                style={{
                  position: "relative",
                  width: m ? 48 : 60,
                  height: m ? 48 : 60,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#e2e8f0",
                }}
              >
                <Image
                  src={attribution.avatar}
                  alt={attribution.avatarAlt || attribution.name}
                  fill
                  sizes="60px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            )}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: m ? 14 : 16,
                  fontWeight: 800,
                  color: "#0b1c30",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {attribution.name}
                {attribution.linkedinUrl && (
                  <a
                    href={attribution.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${attribution.name} on LinkedIn`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 22,
                      height: 22,
                      borderRadius: 5,
                      backgroundColor: "#0a66c2",
                      color: "#fff",
                      transition: "transform 200ms, background-color 200ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.backgroundColor = "#004182";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.backgroundColor = "#0a66c2";
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: m ? 11 : 12,
                  fontWeight: 700,
                  color: "#001f5d",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {attribution.role}
              </div>
              {attribution.meta && (
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: m ? 11 : 12,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  {attribution.meta}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
