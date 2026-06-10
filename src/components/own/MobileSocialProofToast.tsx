"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FlagIcon from "./FlagIcon";

// Real client placements — edit names/countries as needed
const placements = [
  { name: "Narinder Pal Singh", country: "Romania", flag: "🇷🇴", image: "/WhatsApp Image 2026-05-09 at 5.07.06 PM.jpeg", time: "2 min ago" },
  { name: "Vijay Kumar", country: "Dubai", flag: "🇦🇪", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (15).jpeg", time: "12 min ago" },
  { name: "Manjit Singh", country: "Poland", flag: "🇵🇱", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (5).jpeg", time: "28 min ago" },
  { name: "Harpreet Singh", country: "Saudi Arabia", flag: "🇸🇦", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (8).jpeg", time: "45 min ago" },
  { name: "Sukhdev Singh", country: "Bulgaria", flag: "🇧🇬", image: "/WhatsApp Image 2026-05-09 at 5.04.42 PM.jpeg", time: "1 hr ago" },
  { name: "Jaspreet Singh", country: "Qatar", flag: "🇶🇦", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (11).jpeg", time: "2 hr ago" },
  { name: "Karamjit Singh", country: "Kuwait", flag: "🇰🇼", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (2).jpeg", time: "3 hr ago" },
  { name: "Balwinder Singh", country: "UAE", flag: "🇦🇪", image: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (13).jpeg", time: "4 hr ago" },
];

const DISMISS_KEY = "social-proof-dismissed";
const FIRST_DELAY_MS = 4000;
const VISIBLE_MS = 5500;
const HIDDEN_MS = 9000;

export default function MobileSocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let visibleTimer: number;
    let hiddenTimer: number;

    const showNext = () => {
      setVisible(true);
      visibleTimer = window.setTimeout(() => {
        setVisible(false);
        hiddenTimer = window.setTimeout(() => {
          setIndex((i) => (i + 1) % placements.length);
          showNext();
        }, HIDDEN_MS);
      }, VISIBLE_MS);
    };

    const initialTimer = window.setTimeout(showNext, FIRST_DELAY_MS);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearTimeout(visibleTimer);
      window.clearTimeout(hiddenTimer);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const p = placements[index];

  return (
    <div
      className="social-proof-toast"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 50,
        maxWidth: "calc(100vw - 32px)",
        width: 280,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transition: "opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)",
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          backgroundColor: "#ffffff",
          borderRadius: 14,
          boxShadow: "0 10px 30px rgba(0,12,47,0.18), 0 2px 6px rgba(0,12,47,0.08)",
          border: "1px solid rgba(0,12,47,0.08)",
        }}
      >
        {/* Circular avatar */}
        <div
          style={{
            position: "relative",
            width: 44,
            height: 44,
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#000c2f",
            flexShrink: 0,
            border: "2px solid #facc15",
          }}
        >
          <Image src={p.image} alt={`${p.name} placed in ${p.country} by Shiva Manpower Consultants`} fill sizes="44px" style={{ objectFit: "cover" }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#000c2f",
              margin: 0,
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            <strong style={{ fontWeight: 700 }}>{p.name}</strong> got the visa to{" "}
            <strong style={{ fontWeight: 700 }}>
              {p.country} <FlagIcon flag={p.flag} size={13} />
            </strong>
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "#6b7280",
              margin: "2px 0 0",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                display: "inline-block",
              }}
            />
            Verified
          </p>
        </div>

        {/* Dismiss */}
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(DISMISS_KEY, "1");
            setDismissed(true);
          }}
          aria-label="Dismiss notification"
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(0,12,47,0.06)",
            color: "#6b7280",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
            flexShrink: 0,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
