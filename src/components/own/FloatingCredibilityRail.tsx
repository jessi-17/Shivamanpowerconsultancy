"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Subset of placement photos — using ~10 to keep bandwidth in check across every page
const images = [
  "/WhatsApp Image 2026-05-09 at 5.04.42 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.06 PM (2).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM.jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (2).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (5).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (8).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (11).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (13).jpeg",
  "/WhatsApp Image 2026-05-09 at 5.07.07 PM (15).jpeg",
];

const AUTO_ADVANCE_MS = 4200;
const DISMISS_KEY = "credibility-rail-dismissed";

export default function FloatingCredibilityRail() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    if (paused || dismissed) return;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, paused, dismissed]);

  if (dismissed) return null;

  const progressPct = ((index + 1) / images.length) * 100;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        width: 200,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Header chip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 9px",
            borderRadius: 999,
            backgroundColor: "rgba(250,204,21,0.14)",
            border: "1px solid rgba(250,204,21,0.4)",
            fontFamily: "var(--font-display)",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#fde68a",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 11 3 3L22 4" />
          </svg>
          VERIFIED · REAL
        </span>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(DISMISS_KEY, "1");
            setDismissed(true);
          }}
          aria-label="Dismiss credibility carousel"
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundColor: "rgba(0,12,47,0.6)",
            color: "rgba(255,255,255,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
            transition: "all 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0,12,47,0.9)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0,12,47,0.6)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Card + cup wrapper */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Image card — overflow:hidden directly */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 5",
            borderRadius: 14,
            overflow: "hidden",
            backgroundColor: "rgba(0,12,47,0.7)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
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
                  alt={`Real placement ${i + 1}`}
                  fill
                  sizes="200px"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold cup — sibling of card */}
        <div
          style={{
            position: "absolute",
            top: -16,
            right: -16,
            width: 56,
            height: 56,
            pointerEvents: "none",
            zIndex: 3,
            filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))",
          }}
        >
          <Image src="/gold cup.png" alt="" fill sizes="56px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: 3,
          borderRadius: 999,
          backgroundColor: "rgba(255,255,255,0.12)",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            width: `${progressPct}%`,
            height: "100%",
            background: "linear-gradient(90deg, #60a5fa 0%, #0052dc 100%)",
            transition: "width 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>

      {/* Counter */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-display)",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <span>5,000+ PLACED</span>
      </div>
    </div>
  );
}
