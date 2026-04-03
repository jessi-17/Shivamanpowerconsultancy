"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function NewsletterSubscription() {
  const ref = useScrollReveal();
  const m = useIsMobile();
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState<"weekly" | "daily">("weekly");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, frequency }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      id="newsletter"
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 20px" : "80px 0",
        backgroundColor: "#000c2f",
      }}
    >
      <div style={{
        maxWidth: 640, margin: "0 auto", textAlign: "center",
        padding: m ? 0 : "0 var(--spacing-8)",
      }}>
        {/* Icon */}
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          backgroundColor: "rgba(0,82,220,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
          fontWeight: 700, color: "#fff",
          marginBottom: 12, lineHeight: 1.25,
        }}>
          Get Job Updates in Your Inbox
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15,
          color: "rgba(255,255,255,0.6)", lineHeight: 1.6,
          marginBottom: 32, maxWidth: 480, margin: "0 auto 32px",
        }}>
          Subscribe to receive the latest overseas job openings, salary updates, and
          recruitment news directly in your email. Choose your preferred frequency.
        </p>

        {/* Frequency toggle */}
        <div style={{
          display: "inline-flex", gap: 0,
          backgroundColor: "rgba(255,255,255,0.06)",
          borderRadius: 10, padding: 4,
          marginBottom: 20,
        }}>
          {(["weekly", "daily"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              style={{
                padding: "8px 24px",
                backgroundColor: frequency === f ? "#0052dc" : "transparent",
                color: frequency === f ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                border: "none", borderRadius: 8, cursor: "pointer",
                transition: "all 150ms",
                textTransform: "capitalize",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex", gap: 12,
            maxWidth: 480, margin: "0 auto",
            flexWrap: m ? "wrap" : "nowrap",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: m ? "12px 14px" : "14px 18px",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              fontFamily: "var(--font-body)", fontSize: 14,
              color: "#fff", outline: "none",
              transition: "border-color 150ms",
              width: m ? "100%" : "auto",
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: m ? "12px 24px" : "14px 28px",
              backgroundColor: status === "success" ? "#16a34a" : "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              border: "none", borderRadius: 12,
              cursor: status === "loading" ? "wait" : "pointer",
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              whiteSpace: "nowrap",
              width: m ? "100%" : "auto",
              boxShadow: status === "success"
                ? "0 0 20px rgba(22,163,74,0.4)"
                : "0 0 20px rgba(0,82,220,0.4)",
            }}
            onMouseEnter={(e) => {
              if (status === "idle") {
                e.currentTarget.style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : status === "error" ? "Try Again" : "Subscribe"}
          </button>
        </form>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          color: "rgba(255,255,255,0.3)", marginTop: 16,
        }}>
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
}
