"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   NumberedProcess — minimal editorial process flow.
   Inspired by oci.madebybuzzworthy.com section 5.
   Big 01–04 numerals, hairline dividers, no icons, no cards.
   Bigger type, more whitespace.
   ============================================================ */

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface NumberedProcessProps {
  kicker: string;
  title: string;
  highlight?: string;
  intro?: string;
  steps: ProcessStep[]; // expects 3–6 steps
}

export default function NumberedProcess({
  kicker,
  title,
  highlight,
  intro,
  steps,
}: NumberedProcessProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const els = root.querySelectorAll<HTMLElement>(".np-step");
    gsap.set(els, { opacity: 0, y: 28 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#001f5d", position: "relative", whiteSpace: "nowrap" }}>
          {highlight}
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: m ? -2 : -4,
              height: m ? 6 : 10,
              backgroundColor: "#facc15",
              zIndex: -1,
              opacity: 0.55,
            }}
          />
        </span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Process"
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: m ? "80px 0" : "140px 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 60px",
        }}
      >
        {/* Header */}
        <div style={{ maxWidth: 820, marginBottom: m ? 56 : 96 }}>
          {/* Kicker */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: m ? "clamp(2rem, 7vw, 2.5rem)" : "clamp(2.75rem, 5.5vw, 4.25rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: intro ? 24 : 0,
            }}
          >
            {renderTitle()}
          </h2>

          {intro && (
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: m ? 16 : 19,
                color: "#43474d",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 640,
              }}
            >
              {intro}
            </p>
          )}
        </div>

        {/* Steps — vertical stack on mobile, horizontal grid on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : `repeat(${Math.min(steps.length, 4)}, 1fr)`,
            gap: 0,
          }}
        >
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.title}
                className="np-step"
                style={{
                  padding: m ? "32px 0" : "0 32px 0 0",
                  borderTop: m ? "1px solid rgba(11,28,48,0.10)" : "none",
                  borderLeft: !m && i > 0 ? "1px solid rgba(11,28,48,0.10)" : "none",
                  paddingLeft: !m && i > 0 ? 32 : !m ? 0 : 0,
                  marginRight: m && isLast ? 0 : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: m ? "3.5rem" : "clamp(4rem, 7vw, 6rem)",
                    fontWeight: 800,
                    color: "#001f5d",
                    lineHeight: 0.9,
                    letterSpacing: "-0.05em",
                    marginBottom: m ? 16 : 28,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: m ? "1.25rem" : "1.5rem",
                    fontWeight: 700,
                    color: "#0b1c30",
                    lineHeight: 1.15,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: m ? 14 : 15,
                    color: "#43474d",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
