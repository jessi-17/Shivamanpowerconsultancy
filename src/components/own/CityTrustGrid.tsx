"use client";

import { useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

export type TrustItem = { title: string; desc: string };

interface CityTrustGridProps {
  items: TrustItem[];
  image: { src: string; alt: string };
  /** Optional caption rendered on the image card (bottom-left). */
  imageCaption?: string;
}

const ICON_STROKE = "#0052dc";

const ICONS = [
  // 0 — MapPin (transit / location)
  <svg key="pin" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // 1 — Users (community / district)
  <svg key="users" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // 2 — GraduationCap (skills / industry / education)
  <svg key="cap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6" />
    <path d="M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.7 3 3 6 3s6-1.3 6-3v-5" />
  </svg>,
  // 3 — ShieldCheck (govt license)
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // 4 — Wrench (specialty trade / skilled work)
  <svg key="wrench" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // 5 — Heart (family-first / counselling)
  <svg key="heart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>,
];

function Card({ icon, item }: { icon: React.ReactNode; item: TrustItem }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 24,
        border: `1px solid ${hover ? "#0052dc" : "#e8ecf3"}`,
        boxShadow: hover
          ? "0 12px 28px rgba(0,82,220,0.10)"
          : "0 1px 2px rgba(11,28,48,0.04)",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition:
          "transform 250ms cubic-bezier(0.16,1,0.3,1), box-shadow 250ms ease, border-color 250ms ease",
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: "50%",
          backgroundColor: "#eef3ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 17,
          fontWeight: 700,
          color: "#0b1c30",
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "#4a5568",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function CityTrustGrid({ items, image, imageCaption }: CityTrustGridProps) {
  const m = useIsMobile();
  const safeItems = items.slice(0, 6);
  const topRow = safeItems.slice(0, 2);
  const bottomRow = safeItems.slice(2, 6);

  if (m) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 11",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(11,28,48,0.12)",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          {imageCaption && (
            <div
              style={{
                position: "absolute",
                left: 16,
                bottom: 16,
                right: 16,
                padding: "10px 14px",
                backgroundColor: "rgba(11,28,48,0.78)",
                backdropFilter: "blur(10px)",
                borderRadius: 10,
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "0.01em",
              }}
            >
              {imageCaption}
            </div>
          )}
        </div>
        {safeItems.map((item, i) => (
          <Card key={item.title} icon={ICONS[i % ICONS.length]} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
      }}
    >
      {/* Image card — spans 2 cols on top row */}
      <div
        style={{
          gridColumn: "span 2",
          gridRow: "span 1",
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          minHeight: 280,
          boxShadow: "0 12px 32px rgba(11,28,48,0.12)",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1280px) 50vw, 600px"
          style={{ objectFit: "cover" }}
        />
        {imageCaption && (
          <div
            style={{
              position: "absolute",
              left: 20,
              bottom: 20,
              right: 20,
              padding: "12px 16px",
              backgroundColor: "rgba(11,28,48,0.78)",
              backdropFilter: "blur(10px)",
              borderRadius: 10,
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.01em",
              maxWidth: "75%",
            }}
          >
            {imageCaption}
          </div>
        )}
      </div>

      {/* Top row — 2 cards on the right */}
      {topRow.map((item, i) => (
        <Card key={item.title} icon={ICONS[i]} item={item} />
      ))}

      {/* Bottom row — 4 cards */}
      {bottomRow.map((item, i) => (
        <Card key={item.title} icon={ICONS[i + 2]} item={item} />
      ))}
    </div>
  );
}
