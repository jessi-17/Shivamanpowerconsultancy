"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   PageHero — shared inner-page hero.
   Used on /services, /about-us, /jobs/*, /visa/*, /services/*,
   city pages, /faq, /current-demands, /success-stories, etc.

   Visual recipe (locked):
   - Light brand background (#f4f6fb) on the left
   - Diagonal navy slab on the right (clip-path), full-bleed
   - Kicker = small accent bar + uppercase label (no AI-style pill)
   - H1 with a yellow highlighter swash under the highlight phrase
   - Optional chip strip (keyword eyebrow)
   - CTA pair: solid navy primary + ghost secondary
   - Optional 3-up stats row separated by a thin top border
   - Right column: tall image with a white seal card pinned bottom
     and an optional micro chip pinned top-right
   - GSAP entrance: stagger fade-up on left, scale-in on image,
     overlays stagger in after image

   Use this everywhere except the homepage hero.
   ============================================================ */

export interface PageHeroProps {
  kicker: string;
  title: string;
  highlight?: string;
  chips?: string[];
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Array<{ num: string; label: string }>;
  image: { src: string; alt: string };
  imageSeal?: { title: string; subtitle: string };
  microChip?: { value: string; label: string };
}

export default function PageHero({
  kicker,
  title,
  highlight,
  chips,
  description,
  primaryCta = { label: "Get Started Today", href: "/contactus" },
  secondaryCta = { label: "+91 98148-20432", href: "tel:+919814820432" },
  stats,
  image,
  imageSeal,
  microChip,
}: PageHeroProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;

    const leftEls = root.querySelectorAll<HTMLElement>(".ph-left > *");
    const overlayEls = root.querySelectorAll<HTMLElement>(".ph-overlay");
    const imageEl = root.querySelector<HTMLElement>(".ph-image");

    gsap.set(leftEls, { opacity: 0, y: 24 });
    gsap.set(overlayEls, { opacity: 0, y: 12, scale: 0.96 });
    if (imageEl) gsap.set(imageEl, { opacity: 0, scale: 0.96 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(leftEls, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, delay: 0.1 });
    if (imageEl) tl.to(imageEl, { opacity: 1, scale: 1, duration: 0.9 }, 0.2);
    if (overlayEls.length) {
      tl.to(overlayEls, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 }, 0.7);
    }
  }, []);

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <>{title}</>;
    }
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

  const isPhone = secondaryCta.href.startsWith("tel:");

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Page hero"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#f4f6fb",
        paddingTop: m ? 110 : 140,
        paddingBottom: m ? 56 : 96,
        overflow: "hidden",
      }}
    >
      {/* Diagonal navy slab on the right (desktop only) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: m ? "0" : "38%",
          backgroundColor: "#001f5d",
          clipPath: m ? "none" : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
          opacity: m ? 0 : 1,
        }}
      />
      {/* Warm wash on the left */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "60%",
          background: "linear-gradient(135deg, #f4f6fb 0%, #eef2fa 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 60px",
          display: "flex",
          alignItems: "center",
          gap: m ? 40 : 64,
          flexWrap: "wrap",
        }}
      >
        {/* LEFT */}
        <div
          className="ph-left"
          style={{
            flex: "1 1 480px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {/* Kicker */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: m ? "clamp(2rem, 7vw, 2.5rem)" : "clamp(2.5rem, 5.2vw, 3.75rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              margin: 0,
            }}
          >
            {renderTitle()}
          </h1>

          {/* Optional chip strip */}
          {chips && chips.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: m ? 10 : 14,
                alignItems: "center",
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 700,
                color: "#64748b",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {chips.map((c, i) => (
                <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: m ? 10 : 14 }}>
                  <span>{c}</span>
                  {i < chips.length - 1 && <span style={{ color: "#cbd5e1" }}>·</span>}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: m ? 15 : 17,
              color: "#43474d",
              lineHeight: 1.7,
              maxWidth: 540,
              margin: 0,
            }}
          >
            {description}
          </p>

          {/* CTA pair */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
            <Link
              href={primaryCta.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 30px",
                backgroundColor: "#001f5d",
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                textDecoration: "none",
                transition: "transform 200ms, background-color 200ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "#0b1c30";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#001f5d";
              }}
            >
              {primaryCta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <a
              href={secondaryCta.href}
              {...(!isPhone ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 28px",
                backgroundColor: "transparent",
                color: "#0b1c30",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 10,
                textDecoration: "none",
                border: "1.5px solid rgba(11,28,48,0.16)",
                transition: "border-color 200ms, background-color 200ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#001f5d";
                e.currentTarget.style.backgroundColor = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(11,28,48,0.16)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isPhone && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              )}
              {secondaryCta.label}
            </a>
          </div>

          {/* Optional stats row */}
          {stats && stats.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: m ? 20 : 32,
                flexWrap: "wrap",
                marginTop: 14,
                paddingTop: 22,
                borderTop: "1px solid rgba(11,28,48,0.08)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: m ? 22 : 26,
                      fontWeight: 800,
                      color: "#0b1c30",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#64748b",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — image + overlays */}
        <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
          <div
            className="ph-image"
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "4/5",
              boxShadow: "0 24px 60px rgba(0,12,47,0.32)",
              willChange: "transform, opacity",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,12,47,0.35) 100%)",
              }}
            />

            {/* Seal — bottom of image */}
            {imageSeal && (
              <div
                className="ph-overlay"
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  backgroundColor: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 8px 24px rgba(0,12,47,0.18)",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    backgroundColor: "#001f5d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#0b1c30",
                      lineHeight: 1.1,
                    }}
                  >
                    {imageSeal.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#64748b",
                      marginTop: 3,
                    }}
                  >
                    {imageSeal.subtitle}
                  </div>
                </div>
              </div>
            )}

            {/* Micro chip — top-right */}
            {microChip && (
              <div
                className="ph-overlay"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(0,18,51,0.86)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 10,
                  padding: "8px 12px",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {microChip.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 9,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {microChip.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
