"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   PlaybookCards — image-hero card grid.
   Inspired by the screenshot you sent (Buzzworthy-style use-case
   cards). Each card: image hero + tag chip + duration + title
   + arrow + bottom accent line.
   Use for Country Playbooks, Job Guides, Document Walkthroughs.
   ============================================================ */

export interface Playbook {
  image: string;
  imageAlt: string;
  tag: string;
  duration: string; // e.g. "7 mins read", "12 min guide"
  title: string;
  href: string;
}

export interface PlaybookCardsProps {
  kicker?: string;
  title: string;
  highlight?: string;
  intro?: string;
  playbooks: Playbook[];
}

export default function PlaybookCards({
  kicker = "Playbooks",
  title,
  highlight,
  intro,
  playbooks,
}: PlaybookCardsProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const els = root.querySelectorAll<HTMLElement>(".pb-card");
    gsap.set(els, { opacity: 0, y: 24 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
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
      aria-label="Playbooks"
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
            marginBottom: m ? 48 : 72,
          }}
        >
          <div style={{ maxWidth: 720 }}>
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
                marginBottom: intro ? 20 : 0,
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
                }}
              >
                {intro}
              </p>
            )}
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
            gap: m ? 20 : 28,
          }}
        >
          {playbooks.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="pb-card"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(11,28,48,0.08)",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 250ms, box-shadow 250ms, border-color 250ms",
                position: "relative",
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,12,47,0.14)";
                e.currentTarget.style.borderColor = "rgba(0,31,93,0.18)";
                const arrow = e.currentTarget.querySelector<HTMLElement>(".pb-arrow");
                if (arrow) {
                  arrow.style.transform = "translateX(6px)";
                  arrow.style.backgroundColor = "#001f5d";
                  arrow.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(11,28,48,0.08)";
                const arrow = e.currentTarget.querySelector<HTMLElement>(".pb-arrow");
                if (arrow) {
                  arrow.style.transform = "translateX(0)";
                  arrow.style.backgroundColor = "transparent";
                  arrow.style.color = "#001f5d";
                }
              }}
            >
              {/* Image hero */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  backgroundColor: "#001f5d",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,12,47,0.10) 0%, rgba(0,12,47,0.35) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: m ? "20px 20px 22px" : "26px 26px 28px", display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
                {/* Tag + duration */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 12px",
                      borderRadius: 999,
                      backgroundColor: "#eef2fa",
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#001f5d",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#64748b", fontWeight: 500 }}>
                    {p.duration}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: m ? "1.125rem" : "1.375rem",
                    fontWeight: 700,
                    color: "#001f5d",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {p.title}
                </h3>

                {/* Arrow */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 8 }}>
                  <span
                    className="pb-arrow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1.5px solid #001f5d",
                      color: "#001f5d",
                      transition: "transform 250ms, background-color 250ms, color 250ms",
                      willChange: "transform",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                aria-hidden
                style={{
                  height: 3,
                  backgroundColor: "#001f5d",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
