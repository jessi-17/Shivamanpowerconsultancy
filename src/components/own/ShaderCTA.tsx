"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   ShaderCTA — premium final CTA section with animated 3D
   shader gradient backdrop (@shadergradient/react).
   Used SPARINGLY — only on flagship pages where the cinematic
   moment is earned (e.g. /success-stories).

   The 3D canvas (~600KB) loads via dynamic import + ssr: false,
   so it's only fetched on the client when the page hydrates.
   A static gradient fallback shows during load.
   ============================================================ */

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradientCanvas),
  { ssr: false }
);
const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((m) => m.ShaderGradient),
  { ssr: false }
);

export interface ShaderCTAProps {
  kicker?: string;
  title: string;
  highlight?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function ShaderCTA({
  kicker = "Your Turn",
  title,
  highlight,
  description,
  primaryCta = { label: "Book Free Consultation", href: "/contactus" },
  secondaryCta = { label: "Speak on WhatsApp", href: "https://wa.me/919815358832" },
}: ShaderCTAProps) {
  const m = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#facc15", whiteSpace: "nowrap" }}>{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  const isExternal = secondaryCta.href.startsWith("http");

  return (
    <div
      role="region"
      aria-label="Call to action"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#000000",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Static fallback gradient — always rendered, sits behind the shader */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(115,191,196,0.35) 0%, rgba(0,12,47,1) 60%), linear-gradient(135deg, #001233 0%, #001f5d 100%)",
          zIndex: 0,
        }}
      />

      {/* 3D shader gradient — loaded client-side only */}
      {mounted && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.85,
          }}
        >
          <Suspense fallback={null}>
            <ShaderGradientCanvas
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <ShaderGradient
                animate="on"
                type="sphere"
                shader="defaults"
                uTime={0}
                uSpeed={0.3}
                uStrength={0.3}
                uDensity={0.8}
                uFrequency={5.5}
                uAmplitude={3.2}
                positionX={-0.1}
                positionY={0}
                positionZ={0}
                rotationX={0}
                rotationY={130}
                rotationZ={70}
                color1="#73bfc4"
                color2="#ff810a"
                color3="#8da0ce"
                reflection={0.4}
                cAzimuthAngle={270}
                cPolarAngle={180}
                cDistance={0.5}
                cameraZoom={15.1}
                lightType="env"
                brightness={0.8}
                envPreset="city"
                grain="on"
                toggleAxis={false}
                zoomOut={false}
                hoverState=""
                enableTransition={false}
              />
            </ShaderGradientCanvas>
          </Suspense>
        </div>
      )}

      {/* Dark vignette overlay for text legibility */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(0,12,47,0.55) 0%, rgba(0,12,47,0.3) 50%, rgba(0,12,47,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "100px 24px" : "160px 60px",
          textAlign: "center",
        }}
      >
        {kicker && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 3,
                backgroundColor: "#facc15",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 800,
                color: "#facc15",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {kicker}
            </span>
            <span
              style={{
                display: "inline-block",
                width: 36,
                height: 3,
                backgroundColor: "#facc15",
                borderRadius: 2,
              }}
            />
          </div>
        )}

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: m ? "clamp(2rem, 8vw, 2.75rem)" : "clamp(2.75rem, 6vw, 4.75rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            margin: 0,
            marginBottom: description ? 28 : 40,
            textShadow: "0 2px 24px rgba(0,0,0,0.35)",
          }}
        >
          {renderTitle()}
        </h2>

        {description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: m ? 16 : 19,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.6,
              margin: "0 auto",
              marginBottom: 44,
              maxWidth: 640,
              textShadow: "0 1px 12px rgba(0,0,0,0.3)",
            }}
          >
            {description}
          </p>
        )}

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={primaryCta.href}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 32px",
              backgroundColor: "#ffffff",
              color: "#001f5d",
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 12,
              textDecoration: "none",
              transition: "transform 200ms, box-shadow 200ms",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
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
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              borderRadius: 12,
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.4)",
              transition: "border-color 200ms, background-color 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.85)";
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
