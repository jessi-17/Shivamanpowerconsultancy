"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import type { OfferContent, Region } from "../../api/admin/offer/route";
import type { Demand } from "../../api/admin/demands/route";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";
import SidePosterRails from "@/components/own/SidePosterRails";
import DemandsTicker from "@/components/own/DemandsTicker";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"];

function CountryOptions({ region }: { region: Region }) {
  if (region === "europe") {
    return (
      <>
        <option value="">Select Country</option>
        <option value="Poland">Poland</option>
        <option value="Romania">Romania</option>
        <option value="Croatia">Croatia</option>
        <option value="Malta">Malta</option>
        <option value="Hungary">Hungary</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Other">Other</option>
      </>
    );
  }
  return (
    <>
      <option value="">Select Country</option>
      <option value="UAE">UAE</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Qatar">Qatar</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Oman">Oman</option>
      <option value="Other">Other</option>
    </>
  );
}

function OfferInner({
  offer,
  demands,
  region,
}: {
  offer: OfferContent;
  demands: Demand[];
  region: Region;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    yourname: "",
    phone: "",
    email: "",
    interest: "",
    experience: "Fresher",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const utmParts: string[] = [];
    for (const key of UTM_KEYS) {
      const v = searchParams.get(key);
      if (v) utmParts.push(`${key}=${v}`);
    }
    const source = `/offer/${region}`;
    const utmSuffix = utmParts.length
      ? `\n\n--- source: ${source} ${utmParts.join(" ")}`
      : `\n\n--- source: ${source}`;

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email || `noemail+${Date.now()}@offer.local`,
          message: (form.message || `Ad landing page lead (${region})`) + utmSuffix,
        }),
      });

      if (res.ok) {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
        posthog.capture("lead_form_submitted", {
          source: "offer",
          region,
          interest: form.interest,
          experience: form.experience,
        });
        router.push("/?submitted=1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "#f8f9ff",
    border: "1.5px solid rgba(0,0,0,0.06)",
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--on-surface)",
    outline: "none",
    transition: "border-color 150ms",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        paddingTop: 90,
        paddingBottom: 60,
        position: "relative",
      }}
    >
      {/* Faint region background */}
      {offer.bgImage && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${offer.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(1000px 500px at 50% -10%, rgba(0,82,220,0.06), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <DemandsTicker demands={demands} />

      <SidePosterRails
        leftImages={offer.leftMarqueeImages}
        rightImages={offer.rightMarqueeImages}
        showMobileStrip
      />

      {/* Main content — centered, padded away from the rails on desktop */}
      <div
        className="offer-main"
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          position: "relative",
          zIndex: 1,
          marginTop: 24,
        }}
      >
        {/* Hero */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              backgroundColor: "#eff4ff",
              border: "1px solid #dbeafe",
              borderRadius: 999,
              color: "#0052dc",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Government Licensed · RA B-1794
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.15,
              marginBottom: 14,
            }}
          >
            {offer.heading}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              color: "#43474d",
              lineHeight: 1.6,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {offer.subheading}
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            padding: "32px 28px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 16px 48px rgba(0,12,47,0.08)",
          }}
        >
          <div style={{ marginBottom: 22 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#0b1c30", marginBottom: 6 }}>
              {offer.formTitle}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
              {offer.formSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input
                type="text"
                placeholder="Full name *"
                required
                value={form.yourname}
                onChange={(e) => setForm({ ...form, yourname: e.target.value })}
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Phone number *"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
              />
            </div>

            <input
              type="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                required
              >
                <CountryOptions region={region} />
              </select>
              <select
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
              >
                <option value="Fresher">Fresher</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>

            <textarea
              placeholder="Tell us about your background (optional)"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#0052dc",
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 700,
                border: "none",
                borderRadius: 10,
                cursor: status === "loading" ? "wait" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                boxShadow: "0 8px 24px rgba(0,82,220,0.35)",
              }}
            >
              {status === "loading" ? "Submitting..." : offer.ctaLabel || "Request Free Call Back"}
            </button>

            {status === "error" && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#dc2626", textAlign: "center" }}>
                Something went wrong. Please try again or call +91 98148-20432.
              </p>
            )}

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "#94a3b8",
                textAlign: "center",
                marginTop: 4,
              }}
            >
              By submitting, you agree to be contacted by our team.
            </p>
          </form>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
            color: "#64748b",
            fontFamily: "var(--font-body)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>✓ 20+ years in business</span>
          <span>✓ 3000+ placed</span>
          <span>✓ MEA licensed</span>
          <span>✓ No hidden fees</span>
        </div>
      </div>

      {/* Current demands section */}
      <section
        className="offer-demands"
        style={{
          maxWidth: 1100,
          margin: "80px auto 0",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 14px",
              backgroundColor: "#eff4ff",
              borderRadius: 999,
              color: "#0052dc",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Current Demands
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            Jobs Hiring Right Now
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "#64748b",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            Tap a card to see details and apply — our team will reach out once you fill the quick form.
          </p>
        </div>

        {demands.length === 0 ? (
          <DemandsEmpty />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {demands.map((d) => (
              <DemandCard key={d.id} demand={d} />
            ))}
          </div>
        )}
      </section>

      <style>{`
        @media (min-width: 1200px) {
          .offer-main { padding-left: 220px !important; padding-right: 220px !important; max-width: 1200px !important; }
          .offer-demands { padding-left: 220px !important; padding-right: 220px !important; max-width: 1400px !important; }
        }
      `}</style>
    </div>
  );
}

export default function OfferClient({
  offer,
  demands,
  region,
}: {
  offer: OfferContent;
  demands: Demand[];
  region: Region;
}) {
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }} />}>
      <OfferInner offer={offer} demands={demands} region={region} />
    </Suspense>
  );
}
