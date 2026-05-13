"use client";

import Link from "next/link";
import Image from "next/image";

/* ============================================================
   Mobile-only inline CTA banner. Renders only below 768px via
   .mobile-only. Use to break long scroll at high-intent moments.
   Optionally pass `avatar` to show a personal-style CTA card.
   ============================================================ */

type Variant = "primary" | "whatsapp" | "subtle";

interface Props {
  kicker?: string;
  title: string;
  sub?: string;
  ctaLabel: string;
  href: string;
  variant?: Variant;
  /** Show a circular avatar + name in the top-left for a personal feel. */
  avatar?: { src: string; name: string; role?: string };
  newTab?: boolean;
}

export default function MobileInlineCta({
  kicker,
  title,
  sub,
  ctaLabel,
  href,
  variant = "primary",
  avatar,
  newTab,
}: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const openInNew = newTab ?? isExternal;

  const palette = {
    primary: {
      bg: "linear-gradient(135deg, #001233 0%, #001f5d 60%, #0052dc 100%)",
      kicker: "#facc15",
      title: "#fff",
      sub: "rgba(255,255,255,0.72)",
      btnBg: "#facc15",
      btnText: "#0b1c30",
      avatarBorder: "rgba(250,204,21,0.5)",
      avatarGlow: "0 0 0 6px rgba(250,204,21,0.15)",
    },
    whatsapp: {
      bg: "linear-gradient(135deg, #064e3b 0%, #15803d 60%, #16a34a 100%)",
      kicker: "#bbf7d0",
      title: "#fff",
      sub: "rgba(255,255,255,0.78)",
      btnBg: "#fff",
      btnText: "#15803d",
      avatarBorder: "rgba(187,247,208,0.45)",
      avatarGlow: "0 0 0 6px rgba(187,247,208,0.15)",
    },
    subtle: {
      bg: "#0b1c30",
      kicker: "#60a5fa",
      title: "#fff",
      sub: "rgba(255,255,255,0.65)",
      btnBg: "#0052dc",
      btnText: "#fff",
      avatarBorder: "rgba(96,165,250,0.45)",
      avatarGlow: "0 0 0 6px rgba(96,165,250,0.15)",
    },
  }[variant];

  const Btn = openInNew ? "a" : Link;
  const btnProps = openInNew
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : ({ href } as { href: string });

  return (
    <section className="mobile-only" style={{ padding: "20px 16px" }}>
      <div
        style={{
          position: "relative",
          padding: avatar ? "22px 20px 22px" : "24px 20px",
          borderRadius: 20,
          background: palette.bg,
          boxShadow: "0 12px 32px rgba(0,12,47,0.22)",
          overflow: "hidden",
          textAlign: avatar ? "left" : "center",
        }}
      >
        {/* Decorative dot pattern in top-right corner */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 130,
            height: 130,
            backgroundImage: `radial-gradient(circle, ${palette.kicker}1c 1.5px, transparent 1.5px)`,
            backgroundSize: "12px 12px",
            opacity: 0.55,
            pointerEvents: "none",
          }}
        />

        {avatar ? (
          <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                border: `2px solid ${palette.avatarBorder}`,
                boxShadow: palette.avatarGlow,
              }}
            >
              <Image src={avatar.src} alt={avatar.name} fill sizes="64px" style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              {kicker && (
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: palette.kicker,
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  {kicker}
                </p>
              )}
              <p style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: palette.title, lineHeight: 1.2 }}>
                {title}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: palette.sub, marginTop: 4 }}>
                <span style={{ color: palette.title, fontWeight: 700 }}>{avatar.name}</span>
                {avatar.role && <span> · {avatar.role}</span>}
              </p>
            </div>
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            {kicker && (
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: palette.kicker,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {kicker}
              </p>
            )}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 800,
                lineHeight: 1.2,
                color: palette.title,
                marginBottom: sub ? 8 : 0,
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </p>
          </div>
        )}

        {sub && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: palette.sub,
              lineHeight: 1.5,
              marginTop: avatar ? 14 : 0,
              marginBottom: 16,
              position: "relative",
              textAlign: avatar ? "left" : "center",
            }}
          >
            {sub}
          </p>
        )}

        <Btn
          {...btnProps}
          style={{
            display: avatar ? "flex" : "inline-flex",
            width: avatar ? "100%" : undefined,
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px 22px",
            backgroundColor: palette.btnBg,
            color: palette.btnText,
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 800,
            borderRadius: 12,
            textDecoration: "none",
            boxShadow: "0 6px 16px rgba(0,0,0,0.22)",
            position: "relative",
            marginTop: avatar && !sub ? 16 : 0,
          }}
        >
          {ctaLabel}
          <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
        </Btn>
      </div>
    </section>
  );
}
