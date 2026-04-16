"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { flagFor } from "@/lib/countryFlags";
import type { Demand } from "../../../app/api/admin/demands/route";

export default function DemandsTicker({ demands }: { demands: Demand[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || demands.length === 0) return;
    const track = trackRef.current;

    const start = () => {
      const totalWidth = track.scrollWidth / 2;
      if (totalWidth <= 0) return null;
      gsap.set(track, { x: 0 });
      return gsap.to(track, {
        x: -totalWidth,
        duration: Math.max(25, totalWidth / 40),
        ease: "none",
        repeat: -1,
      });
    };

    const tween = start();
    return () => {
      if (tween) tween.kill();
    };
  }, [demands]);

  if (demands.length === 0) return null;

  const items = [...demands, ...demands];

  return (
    <div
      className="demands-ticker"
      style={{
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(90deg, #0b1c30 0%, #001f5d 50%, #0052dc 100%)",
        padding: "11px 0",
        position: "relative",
        zIndex: 10,
        boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 2px 12px rgba(11,28,48,0.15)",
      }}
      aria-label="Current openings"
    >
      {/* Subtle sheen overlay for depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Edge fades matching the gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 80,
          background: "linear-gradient(90deg, #0b1c30 0%, rgba(11,28,48,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 80,
          background: "linear-gradient(270deg, #0052dc 0%, rgba(0,82,220,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {items.map((d, i) => (
          <Link
            key={`${d.id}-${i}`}
            href={`/current-demands/${d.id}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.02em",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }} aria-hidden>
              {flagFor(d.country)}
            </span>
            <span>{d.title}</span>
            <span style={{ opacity: 0.55, fontWeight: 400, fontSize: 16 }} aria-hidden>
              •
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
