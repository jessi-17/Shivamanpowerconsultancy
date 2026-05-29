"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

const images = [
  "/WhatsApp Image 2026-05-09 at 5.04.42 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM (1).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM (2).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM (3).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (1).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (2).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (3).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (4).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (5).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (6).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (7).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (8).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (9).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (10).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (11).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (12).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (13).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (14).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (15).jpeg",
];

const AUTO_ADVANCE_MS = 2200;

export default function HeroCredibilityCarousel() {
  const m = useIsMobile();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  const progressPct = ((index + 1) / images.length) * 100;

  return (
    <div
      className="hero-animate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        flex: m ? "1 1 100%" : "0 0 400px",
        width: m ? "100%" : 400,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {/* Wrapper for card + cup (cup bleeds outside card edges) */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Image card â€” overflow:hidden directly clips the slide track */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 5",
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        >
          {/* Sliding track */}
          <div
            style={{
              display: "flex",
              width: `${images.length * 100}%`,
              height: "100%",
              transform: `translateX(-${(index * 100) / images.length}%)`,
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {images.map((src, i) => (
              <div
                key={src}
                style={{
                  width: `${100 / images.length}%`,
                  height: "100%",
                  position: "relative",
                  flexShrink: 0,
                  backgroundColor: "#000c2f",
                }}
              >
                <Image
                  src={src}
                  alt={`Real placement story ${i + 1} â€” Shiva Travel & Manpower Consultants`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={i === 0}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold cup â€” sibling of card, positioned to bleed outside */}
        <div
          style={{
            position: "absolute",
            top: -28,
            right: -28,
            width: 110,
            height: 110,
            pointerEvents: "none",
            zIndex: 3,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.55))",
          }}
        >
          <Image
            src="/award-trophy-shiva-manpower.png"
            alt="Top-rated recruitment agency Punjab â€” 1000+ successful overseas placements"
            fill
            sizes="110px"
            style={{ objectFit: "contain" }}
          />
        </div>

      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: 4,
          borderRadius: 999,
          backgroundColor: "rgba(255,255,255,0.1)",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: `${progressPct}%`,
            height: "100%",
            background: "linear-gradient(90deg, #60a5fa 0%, #0052dc 100%)",
            borderRadius: 999,
            transition: "width 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>

      {/* Counter + caption */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          5,000+ placed since 2002
        </span>
      </div>
    </div>
  );
}
