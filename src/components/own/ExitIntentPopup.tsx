"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");

  const show = useCallback(() => {
    if (sessionStorage.getItem("exit-popup-dismissed")) return;
    if (sessionStorage.getItem("lead-popup-dismissed")) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    // Desktop: mouse leaves viewport (exit intent)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };

    // Mobile: back button / tab switch via visibilitychange
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") return;
      // Show on return if they haven't seen it
      const elapsed = Date.now() - (window as unknown as Record<string, number>).__pageLoadTime;
      if (elapsed > 15000) show();
    };

    (window as unknown as Record<string, number>).__pageLoadTime = Date.now();

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [show]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("exit-popup-dismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    const country = destination || "Not selected";
    const msg = `Hi, I'm interested in jobs in ${country}. My phone: ${phone}. Please contact me.`;
    window.open(`https://wa.me/919815358832?text=${encodeURIComponent(msg)}`, "_blank");
    dismiss();
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0,
          backgroundColor: "rgba(0,12,47,0.6)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 10000,
        }}
      />

      {/* Popup */}
      <div
        style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10001,
          width: "calc(100% - 32px)",
          maxWidth: 420,
          backgroundColor: "#fff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0,12,47,0.4)",
          animation: "exitPopupIn 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
            padding: "24px 24px 20px",
            position: "relative",
          }}
        >
          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              position: "absolute", top: 12, right: 12,
              width: 28, height: 28, borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", color: "#fecaca", textTransform: "uppercase",
            marginBottom: 8,
          }}>
            WAIT — DON&apos;T MISS OUT
          </p>
          <h3 style={{
            fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800,
            color: "#fff", lineHeight: 1.2, marginBottom: 6,
          }}>
            Gulf & Europe Jobs Filling Fast
          </h3>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 13,
            color: "rgba(255,255,255,0.85)", lineHeight: 1.5,
          }}>
            Share your number — our expert will call you within 2 hours with matching opportunities. Zero fees.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 12 }}
        >
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{
              width: "100%", padding: "12px 14px",
              backgroundColor: "#f8f9ff", border: "1.5px solid rgba(0,0,0,0.06)",
              borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14,
              color: "#0b1c30", outline: "none", appearance: "none", cursor: "pointer",
            }}
          >
            <option value="">Where do you want to work?</option>
            <option value="UAE">UAE (Dubai)</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Qatar">Qatar</option>
            <option value="Poland">Poland</option>
            <option value="Romania">Romania</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="tel"
            required
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: "100%", padding: "12px 14px",
              backgroundColor: "#f8f9ff", border: "1.5px solid rgba(0,0,0,0.06)",
              borderRadius: 10, fontFamily: "var(--font-body)", fontSize: 14,
              color: "#0b1c30", outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%", padding: "14px",
              background: "linear-gradient(135deg, #0052dc, #2563eb)",
              color: "#fff", fontFamily: "var(--font-display)",
              fontSize: 15, fontWeight: 700, border: "none",
              borderRadius: 12, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Get a Free Call Back
          </button>

          {/* Trust badges */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 16, marginTop: 4,
            fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8",
          }}>
            <span>Govt Licensed</span>
            <span>&#8226;</span>
            <span>Zero Fees</span>
            <span>&#8226;</span>
            <span>5,000+ Placed</span>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes exitPopupIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </>
  );
}
