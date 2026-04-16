"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

function VerticalMarquee({ images, direction }: { images: string[]; direction: "up" | "down" }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;
    const track = trackRef.current;

    const start = () => {
      const totalHeight = track.scrollHeight / 2;
      if (totalHeight <= 0) return null;
      gsap.set(track, { y: direction === "up" ? 0 : -totalHeight });
      return gsap.to(track, {
        y: direction === "up" ? -totalHeight : 0,
        duration: Math.max(24, totalHeight / 28),
        ease: "none",
        repeat: -1,
      });
    };

    let tween = start();
    const imgs = track.querySelectorAll("img");
    const onLoad = () => {
      if (tween) tween.kill();
      tween = start();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });

    return () => {
      if (tween) tween.kill();
    };
  }, [images, direction]);

  if (!images.length) return null;

  // Repeat enough times so one "set" (half the track) always exceeds viewport height,
  // otherwise you see blank gaps between loop cycles. With few images we pad with copies.
  const copiesPerSet = Math.max(3, Math.ceil(10 / images.length));
  const doubled = Array.from({ length: copiesPerSet * 2 }).flatMap(() => images);

  return (
    <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: "8px 10px",
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              borderRadius: 12,
              backgroundColor: "#eef2f7",
              boxShadow: "0 6px 18px rgba(0,12,47,0.08)",
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HorizontalMarquee({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;
    const track = trackRef.current;

    const start = () => {
      const totalWidth = track.scrollWidth / 2;
      if (totalWidth <= 0) return null;
      gsap.set(track, { x: 0 });
      return gsap.to(track, {
        x: -totalWidth,
        duration: Math.max(20, totalWidth / 40),
        ease: "none",
        repeat: -1,
      });
    };

    let tween = start();
    const imgs = track.querySelectorAll("img");
    const onLoad = () => {
      if (tween) tween.kill();
      tween = start();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });

    return () => {
      if (tween) tween.kill();
    };
  }, [images]);

  if (!images.length) return null;

  const doubled = [...images, ...images];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 12,
          padding: "0 12px",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            style={{
              width: 130,
              height: 170,
              objectFit: "cover",
              borderRadius: 10,
              backgroundColor: "#eef2f7",
              boxShadow: "0 4px 12px rgba(0,12,47,0.08)",
              flexShrink: 0,
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function SidePosterRails({
  leftImages,
  rightImages,
  showMobileStrip = false,
}: {
  leftImages: string[];
  rightImages: string[];
  showMobileStrip?: boolean;
}) {
  const hasAny = leftImages.length > 0 || rightImages.length > 0;
  if (!hasAny) return null;

  return (
    <>
      {/* Desktop: fixed side rails that stay visible across the whole page */}
      <div className="poster-rail poster-rail-left" aria-hidden>
        <VerticalMarquee images={leftImages} direction="up" />
      </div>
      <div className="poster-rail poster-rail-right" aria-hidden>
        <VerticalMarquee images={rightImages} direction="down" />
      </div>

      {/* Mobile: optional horizontal strip at top */}
      {showMobileStrip && (
        <div className="poster-rail-mobile">
          <HorizontalMarquee images={[...leftImages, ...rightImages]} />
        </div>
      )}

      <style>{`
        .poster-rail {
          position: fixed;
          top: 140px;
          bottom: 20px;
          width: 180px;
          overflow: hidden;
          background: transparent;
          z-index: 5;
          pointer-events: none;
        }
        .poster-rail-left { left: 20px; }
        .poster-rail-right { right: 20px; }
        .poster-rail-mobile { display: none; padding-top: 90px; padding-bottom: 8px; }

        @media (max-width: 1199px) {
          .poster-rail { display: none; }
          .poster-rail-mobile { display: block; }
        }
      `}</style>
    </>
  );
}
