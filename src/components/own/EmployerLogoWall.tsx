"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";
import FlagIcon from "./FlagIcon";

/* ============================================================
   EmployerLogoWall — typographic credibility wall.
   Inspired by theinklusive.com section 11 (logo grid).
   We don't use image logos because mismatched marks look amateur
   for a regional recruiter. A dense type grid reads as more
   confident and editorial — and you can edit the names freely.
   ============================================================ */

export interface Employer {
  name: string;
  sector: string;
  country: string; // flag emoji
}

export interface EmployerLogoWallProps {
  kicker?: string;
  title: string;
  highlight?: string;
  intro?: string;
  employers: Employer[]; // seed with real employers from your records
}

export default function EmployerLogoWall({
  kicker = "Verified Employers",
  title,
  highlight,
  intro,
  employers,
}: EmployerLogoWallProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const els = root.querySelectorAll<HTMLElement>(".ew-cell");
    gsap.set(els, { opacity: 0, y: 14 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.03,
              ease: "power2.out",
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
      aria-label="Verified employers"
      style={{
        width: "100%",
        backgroundColor: "#f4f6fb",
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
            <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: "#001f5d", borderRadius: 2 }} />
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

        {/* Wall — 4-col on desktop, 2-col on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            borderTop: "1px solid rgba(11,28,48,0.10)",
            borderLeft: "1px solid rgba(11,28,48,0.10)",
          }}
        >
          {employers.map((emp) => (
            <div
              key={emp.name}
              className="ew-cell"
              style={{
                padding: m ? "20px 16px" : "28px 24px",
                borderRight: "1px solid rgba(11,28,48,0.10)",
                borderBottom: "1px solid rgba(11,28,48,0.10)",
                backgroundColor: "#fff",
                transition: "background-color 200ms",
                cursor: "default",
                minHeight: m ? 96 : 132,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#001f5d";
                const name = e.currentTarget.querySelector<HTMLElement>(".ew-name");
                const sector = e.currentTarget.querySelector<HTMLElement>(".ew-sector");
                if (name) name.style.color = "#fff";
                if (sector) sector.style.color = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                const name = e.currentTarget.querySelector<HTMLElement>(".ew-name");
                const sector = e.currentTarget.querySelector<HTMLElement>(".ew-sector");
                if (name) name.style.color = "#0b1c30";
                if (sector) sector.style.color = "#64748b";
              }}
            >
              <div
                className="ew-name"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: m ? 15 : 18,
                  fontWeight: 700,
                  color: "#0b1c30",
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  transition: "color 200ms",
                }}
              >
                {emp.name}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                <span
                  className="ew-sector"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: m ? 11 : 12,
                    fontWeight: 600,
                    color: "#64748b",
                    letterSpacing: "0.04em",
                    transition: "color 200ms",
                  }}
                >
                  {emp.sector}
                </span>
                <FlagIcon flag={emp.country} size={m ? 18 : 22} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer caption */}
        <p
          style={{
            marginTop: m ? 28 : 40,
            fontFamily: "var(--font-body)",
            fontSize: m ? 12 : 13,
            color: "#64748b",
            lineHeight: 1.5,
            maxWidth: 720,
          }}
        >
          A partial list of employers where workers placed by us are currently
          employed. We only work with employers who provide proper contracts,
          accommodation, and comply with MEA/E-Migrate regulations.
        </p>
      </div>
    </div>
  );
}
