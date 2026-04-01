"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const reels = [
  { id: "DWEVQ5PjuBd", label: "Interviews", country: "Nakodar Office" },
  { id: "DFUZ2gJNj2d", label: "Bulgaria Placement", country: "Europe" },
  { id: "DWNzMiVFbzb", label: "Factory Worker", country: "Dubai" },
  { id: "DUffhPTkf0C", label: "KFC Dubai Visa", country: "UAE" },
  { id: "DUDr71Bksev", label: "Work Permit Approved", country: "Bulgaria" },
  { id: "DSqwW-NEcHC", label: "Client Success", country: "Gulf Region" },
];

// Triple for a seamless loop
const allReels = [...reels, ...reels, ...reels];

export default function ClientVideos() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Header animation
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelector(".cv-header"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      }
    );
  }, []);

  // Auto-scroll marquee
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 280 + 16; // card + gap
    const oneSetWidth = reels.length * cardWidth;

    // Start from the second set so we can scroll both ways
    track.scrollLeft = oneSetWidth;

    const tween = gsap.to(track, {
      scrollLeft: oneSetWidth * 2,
      duration: 60,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        track.scrollLeft = oneSetWidth;
      },
    });
    tweenRef.current = tween;

    // Pause on hover
    const pause = () => tween.pause();
    const resume = () => tween.resume();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart", pause);
    track.addEventListener("touchend", resume);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  // Manual drag scroll (works while auto-scroll is paused on hover)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let isDown = false,
      startX = 0,
      scrollStart = 0,
      moved = false;

    const onDown = (e: MouseEvent) => {
      isDown = true;
      moved = false;
      track.style.cursor = "grabbing";
      startX = e.pageX;
      scrollStart = track.scrollLeft;
    };
    const onUp = () => {
      isDown = false;
      track.style.cursor = "grab";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 3) moved = true;
      track.scrollLeft = scrollStart - dx;
    };
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);
    track.addEventListener("click", onClick, true);
    return () => {
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
      track.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: "80px 0",
        background: "var(--surface)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to right, var(--surface), transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to left, var(--surface), transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        className="cv-header"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto 44px",
          padding: "0 var(--spacing-8)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--surface-tint)",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            NOT ACTORS. REAL PLACEMENTS.
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--on-surface)",
              lineHeight: 1.2,
            }}
          >
            Real Workers. Real Videos.
          </h2>
        </div>
        <a
          href="https://www.instagram.com/shiva.travels.consultants/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            borderRadius: 10,
            border: "1px solid var(--outline-variant)",
            backgroundColor: "var(--surface-container-lowest)",
            textDecoration: "none",
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--surface-tint)";
            e.currentTarget.style.backgroundColor =
              "var(--surface-container-low)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--outline-variant)";
            e.currentTarget.style.backgroundColor =
              "var(--surface-container-lowest)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--on-surface)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--on-surface)",
            }}
          >
            Follow Us
          </span>
        </a>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="cv-track"
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          cursor: "grab",
          padding: "4px 40px",
        }}
      >
        {allReels.map((reel, i) => (
          <a
            key={`${reel.id}-${i}`}
            href={`https://www.instagram.com/reel/${reel.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            style={{
              flex: "0 0 280px",
              height: 440,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              userSelect: "none",
              textDecoration: "none",
              display: "block",
              backgroundColor: "var(--surface-container)",
            }}
          >
            {/* Instagram embed — aggressively cropped to show only the video */}
            <iframe
              src={`https://www.instagram.com/reel/${reel.id}/embed/`}
              style={{
                width: 340,
                height: 750,
                border: "none",
                position: "absolute",
                top: -72,
                left: -24,
                pointerEvents: "none",
              }}
              scrolling="no"
              allowTransparency
              allow="encrypted-media"
              loading="lazy"
              tabIndex={-1}
            />

            {/* Cover the "View more on Instagram" text at bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 60%, transparent)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Bottom label */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "12px 16px",
                pointerEvents: "none",
                zIndex: 3,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {reel.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {reel.country}
              </p>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .cv-track::-webkit-scrollbar {
          display: none;
        }
        .cv-track {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
