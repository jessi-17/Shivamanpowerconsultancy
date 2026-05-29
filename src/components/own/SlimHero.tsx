"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   SlimHero — minimal hero for utility/tool/FAQ pages.
   No image, no chips, no stats. Just kicker + big h1 + intro.
   Use on: /salary-calculator, /faq, /guides, /privacy-policy,
   and other content-first pages where the page body IS the focus.
   ============================================================ */

export interface SlimHeroProps {
  kicker: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SlimHero({
  kicker,
  title,
  highlight,
  description,
  centered = false,
}: SlimHeroProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const els = root.querySelectorAll<HTMLElement>(".sh-el");
    gsap.set(els, { opacity: 0, y: 20 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.1,
    });
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
      aria-label="Page hero"
      style={{
        width: "100%",
        backgroundColor: "#f4f6fb",
        paddingTop: m ? 110 : 140,
        paddingBottom: m ? 56 : 88,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm gradient wash */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f4f6fb 0%, #eef2fa 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: centered ? 880 : "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 60px",
          textAlign: centered ? "center" : "left",
        }}
      >
        <div
          className="sh-el"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: centered ? "center" : "flex-start",
            gap: 12,
            marginBottom: 24,
          }}
        >
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

        <h1
          className="sh-el"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: m ? "clamp(2rem, 7vw, 2.5rem)" : "clamp(2.5rem, 5.2vw, 3.75rem)",
            fontWeight: 800,
            color: "#0b1c30",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            margin: 0,
            marginBottom: description ? 24 : 0,
            maxWidth: centered ? "100%" : 880,
          }}
        >
          {renderTitle()}
        </h1>

        {description && (
          <p
            className="sh-el"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: m ? 16 : 19,
              color: "#43474d",
              lineHeight: 1.6,
              margin: centered ? "0 auto" : 0,
              maxWidth: 640,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
