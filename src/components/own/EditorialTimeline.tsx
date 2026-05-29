"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   EditorialTimeline — vertical, feature-article style timeline.
   Big year on the left, story on the right, hairline dividers.
   The latest entry gets a yellow-swash accent + "PRESENT" tag.
   Reusable across about-us, city pages, founder bios.
   ============================================================ */

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface EditorialTimelineProps {
  kicker?: string;
  title: string;
  highlight?: string;
  intro?: string;
  milestones: Milestone[];
  presentLabel?: string; // e.g. "Present", "Now", "Today"
}

export default function EditorialTimeline({
  kicker = "Our Journey",
  title,
  highlight,
  intro,
  milestones,
  presentLabel = "Present",
}: EditorialTimelineProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const els = root.querySelectorAll<HTMLElement>(".et-row");
    gsap.set(els, { opacity: 0, y: 24 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
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
      aria-label="Timeline"
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
        <div style={{ maxWidth: 820, marginBottom: m ? 48 : 80 }}>
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

        {/* Timeline rows */}
        <div style={{ borderTop: "1px solid rgba(11,28,48,0.10)" }}>
          {milestones.map((ms, i) => {
            const isLast = i === milestones.length - 1;
            return (
              <div
                key={ms.year}
                className="et-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: m ? "1fr" : "minmax(160px, 220px) 1fr",
                  gap: m ? 12 : 56,
                  padding: m ? "36px 0" : "56px 0",
                  borderBottom: "1px solid rgba(11,28,48,0.10)",
                  alignItems: "baseline",
                }}
              >
                {/* Year column */}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: m ? "2.5rem" : "clamp(3rem, 4.5vw, 4.25rem)",
                      fontWeight: 800,
                      color: "#0b1c30",
                      lineHeight: 0.95,
                      letterSpacing: "-0.04em",
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                    }}
                  >
                    {ms.year}
                    {isLast && (
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
                    )}
                  </div>
                  {isLast && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        width: "fit-content",
                        padding: "4px 10px",
                        borderRadius: 999,
                        backgroundColor: "#001f5d",
                        fontFamily: "var(--font-display)",
                        fontSize: 10,
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#facc15",
                          animation: "pulse-dot 2s ease-in-out infinite",
                        }}
                      />
                      {presentLabel}
                    </span>
                  )}
                </div>

                {/* Content column */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: m ? "1.125rem" : "clamp(1.25rem, 1.8vw, 1.625rem)",
                      fontWeight: 700,
                      color: "#0b1c30",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      margin: 0,
                      marginBottom: 12,
                    }}
                  >
                    {ms.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: m ? 14 : 16,
                      color: "#43474d",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: 640,
                    }}
                  >
                    {ms.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
