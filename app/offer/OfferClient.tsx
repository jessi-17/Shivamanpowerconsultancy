"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { gsap } from "@/lib/gsap";
import type { OfferContent } from "../api/admin/offer/route";
import type { Demand } from "../api/admin/demands/route";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"];

function CountryOptions() {
  return (
    <>
      <option value="">Select Country</option>
      <option value="UAE">UAE</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Qatar">Qatar</option>
      <option value="Poland">Poland</option>
      <option value="Romania">Romania</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Croatia">Croatia</option>
      <option value="Other">Other</option>
    </>
  );
}

function VerticalMarquee({ images, direction }: { images: string[]; direction: "up" | "down" }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;
    const track = trackRef.current;

    const start = () => {
      const totalHeight = track.scrollHeight / 2;
      if (totalHeight <= 0) return null;
      gsap.set(track, { y: direction === "up" ? 0 : -totalHeight });
      return gsap.to(track, {
        y: direction === "up" ? -totalHeight : 0,
        duration: Math.max(20, totalHeight / 30),
        ease: "none",
        repeat: -1,
      });
    };

    let tween = start();
    const imgs = track.querySelectorAll("img");
    const onLoad = () => {
      if (tween) tween.kill();
      tween = start();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });

    return () => {
      if (tween) tween.kill();
    };
  }, [images, direction]);

  if (!images.length) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.25)",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          textAlign: "center",
          padding: 16,
        }}
      >
        No images yet
      </div>
    );
  }

  const doubled = [...images, ...images];

  return (
    <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "8px 12px",
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            style={{
              width: "100%",
              aspectRatio: "3/4",
              objectFit: "cover",
              borderRadius: 14,
              backgroundColor: "rgba(255,255,255,0.04)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HorizontalMarquee({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || images.length === 0) return;
    const track = trackRef.current;

    const start = () => {
      const totalWidth = track.scrollWidth / 2;
      if (totalWidth <= 0) return null;
      gsap.set(track, { x: 0 });
      return gsap.to(track, {
        x: -totalWidth,
        duration: Math.max(20, totalWidth / 40),
        ease: "none",
        repeat: -1,
      });
    };

    let tween = start();
    const imgs = track.querySelectorAll("img");
    const onLoad = () => {
      if (tween) tween.kill();
      tween = start();
    };
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });

    return () => {
      if (tween) tween.kill();
    };
  }, [images]);

  if (!images.length) return null;

  const doubled = [...images, ...images];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 12,
          padding: "0 12px",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            style={{
              width: 140,
              height: 180,
              objectFit: "cover",
              borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.04)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              flexShrink: 0,
              display: "block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function OfferInner({ offer, demands }: { offer: OfferContent; demands: Demand[] }) {
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
    const utmSuffix = utmParts.length ? `\n\n--- source: /offer ${utmParts.join(" ")}` : "\n\n--- source: /offer";

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email || `noemail+${Date.now()}@offer.local`,
          message: (form.message || "Ad landing page lead") + utmSuffix,
        }),
      });

      if (res.ok) {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
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
        backgroundImage:
          "radial-gradient(1000px 500px at 50% -10%, rgba(0,82,220,0.06), transparent 60%)",
        paddingTop: 90,
        paddingBottom: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Mobile horizontal marquees (top) */}
      <div className="offer-mobile-marquee" style={{ marginBottom: 24 }}>
        <HorizontalMarquee images={[...offer.leftMarqueeImages, ...offer.rightMarqueeImages]} />
      </div>

      <div
        className="offer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(0, 680px) 1fr",
          gap: 24,
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 24px",
          alignItems: "stretch",
        }}
      >
        {/* Left rail */}
        <div
          className="offer-rail"
          style={{
            height: "calc(100vh - 120px)",
            maxHeight: 900,
            position: "sticky",
            top: 100,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            background: "#f8f9ff",
          }}
        >
          <VerticalMarquee images={offer.leftMarqueeImages} direction="up" />
        </div>

        {/* Center — hero + form */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
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
                  <CountryOptions />
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

        {/* Right rail */}
        <div
          className="offer-rail"
          style={{
            height: "calc(100vh - 120px)",
            maxHeight: 900,
            position: "sticky",
            top: 100,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            background: "#f8f9ff",
          }}
        >
          <VerticalMarquee images={offer.rightMarqueeImages} direction="down" />
        </div>
      </div>

      {/* Current demands section */}
      <section
        style={{
          maxWidth: 1200,
          margin: "80px auto 0",
          padding: "0 24px",
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
            Tap a country to apply — our team will reach out once you fill the quick form.
          </p>
        </div>

        {demands.length === 0 ? (
          <DemandsEmpty />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {demands.map((d) => (
              <DemandCard key={d.id} demand={d} />
            ))}
          </div>
        )}
      </section>

      <style>{`
        .offer-mobile-marquee { display: none; }
        @media (max-width: 1023px) {
          .offer-grid { grid-template-columns: 1fr !important; }
          .offer-rail { display: none !important; }
          .offer-mobile-marquee { display: block !important; }
        }
      `}</style>
    </div>
  );
}

export default function OfferClient({ offer, demands }: { offer: OfferContent; demands: Demand[] }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }} />}>
      <OfferInner offer={offer} demands={demands} />
    </Suspense>
  );
}
