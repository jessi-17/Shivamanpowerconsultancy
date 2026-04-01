"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Already consented
    if (localStorage.getItem("cookie-consent")) return;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 20) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const el = document.getElementById("cookie-banner");
    if (el) {
      gsap.fromTo(el, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
    }
  }, [visible]);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    dismiss();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    dismiss();
  };

  const dismiss = () => {
    const el = document.getElementById("cookie-banner");
    if (el) {
      gsap.to(el, {
        y: 100, opacity: 0, duration: 0.4, ease: "power3.in",
        onComplete: () => setVisible(false),
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-banner"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "calc(100% - 48px)",
        maxWidth: 560,
        backgroundColor: "rgba(0,12,47,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 16,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ flex: "1 1 260px" }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1.5,
          margin: 0,
        }}>
          We use cookies to improve your experience and analyze site traffic.
        </p>
      </div>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={handleReject}
          style={{
            padding: "8px 18px",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding: "8px 18px",
            backgroundColor: "#0052dc",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 150ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1d4ed8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0052dc";
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
