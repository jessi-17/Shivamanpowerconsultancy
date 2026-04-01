"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("lead-popup-dismissed")) return;

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 32) {
        setVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const el = document.getElementById("lead-popup");
    if (el) {
      gsap.fromTo(
        el,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }
      );
    }
  }, [visible]);

  const handleDismiss = () => {
    const el = document.getElementById("lead-popup");
    if (el) {
      gsap.to(el, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          setDismissed(true);
          setVisible(false);
          sessionStorage.setItem("lead-popup-dismissed", "1");
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${name}. ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919814820432?text=${encoded}`, "_blank");
    handleDismiss();
  };

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleDismiss}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,12,47,0.4)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 9998,
        }}
      />

      {/* Popup */}
      <div
        id="lead-popup"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: "calc(100% - 48px)",
          maxWidth: 400,
          backgroundColor: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,12,47,0.25)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #001f5d, #0052dc)",
            padding: "24px 24px 20px",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={handleDismiss}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 150ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#60a5fa",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            FREE CONSULTATION
          </p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.25,
              marginBottom: 6,
            }}
          >
            Dreaming of Working Abroad?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
            }}
          >
            Tell us your name and what you&apos;re looking for. We&apos;ll guide you on WhatsApp. No fees, no spam.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 14 }}
        >
          <div>
            <label
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 4,
                display: "block",
              }}
            >
              YOUR NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Singh"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                backgroundColor: "#f8f9ff",
                border: "1.5px solid rgba(0,0,0,0.06)",
                borderRadius: 10,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "#0b1c30",
                outline: "none",
                transition: "border-color 150ms",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
            />
          </div>

          <div>
            <label
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 4,
                display: "block",
              }}
            >
              WHAT ARE YOU LOOKING FOR?
            </label>
            <textarea
              required
              placeholder="e.g. I want a construction job in Dubai"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              style={{
                width: "100%",
                padding: "12px 14px",
                backgroundColor: "#f8f9ff",
                border: "1.5px solid rgba(0,0,0,0.06)",
                borderRadius: 10,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "#0b1c30",
                outline: "none",
                resize: "none",
                transition: "border-color 150ms",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#25D366",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 700,
              border: "none",
              borderRadius: 12,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,211,102,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp. It&apos;s Free
          </button>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "#94a3b8",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Opens WhatsApp directly. No account needed on our end.
          </p>
        </form>
      </div>
    </>
  );
}
