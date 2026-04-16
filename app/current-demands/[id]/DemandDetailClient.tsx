"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Demand } from "../../api/admin/demands/route";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";
import SidePosterRails from "@/components/own/SidePosterRails";
import DemandsTicker from "@/components/own/DemandsTicker";
import ShareButtons from "@/components/own/ShareButtons";
import { flagFor } from "@/lib/countryFlags";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"];

function DetailInner({
  demand,
  otherDemands,
  leftMarqueeImages,
  rightMarqueeImages,
}: {
  demand: Demand;
  otherDemands: Demand[];
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    yourname: "",
    phone: "",
    email: "",
    interest: demand.country || "",
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
    const source = `/current-demands/${demand.id}`;
    const utmSuffix = utmParts.length ? ` ${utmParts.join(" ")}` : "";
    const demandTag = `\n\n--- demand: ${demand.title} (${demand.id}) — source: ${source}${utmSuffix}`;

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: form.email || `noemail+${Date.now()}@demand.local`,
          message: (form.message || `Applying for: ${demand.title}`) + demandTag,
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
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9ff",
        paddingTop: 90,
        paddingBottom: 60,
        position: "relative",
      }}
    >
      <DemandsTicker demands={[demand, ...otherDemands]} />

      <SidePosterRails leftImages={leftMarqueeImages} rightImages={rightMarqueeImages} />

      {/* Breadcrumb */}
      <div
        className="detail-container"
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          padding: "0 24px",
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "#64748b",
        }}
      >
        <Link href="/current-demands" style={{ color: "#0052dc", textDecoration: "none" }}>
          ← All openings
        </Link>
      </div>

      {/* Main 2-col */}
      <div
        className="detail-container"
        style={{
          maxWidth: 1200,
          margin: "20px auto 0",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {/* LEFT — poster + details */}
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: 18,
                overflow: "hidden",
                backgroundColor: "#e5e7eb",
                backgroundImage: demand.poster ? `url(${demand.poster})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                boxShadow: "0 16px 48px rgba(0,12,47,0.12)",
              }}
            >
              {demand.country && (
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    padding: "6px 16px",
                    backgroundColor: "rgba(11,28,48,0.9)",
                    color: "#fff",
                    borderRadius: 999,
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span aria-hidden>{flagFor(demand.country)}</span>
                  {demand.country}
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                fontWeight: 800,
                color: "#0b1c30",
                lineHeight: 1.2,
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              {demand.title}
            </h1>

            {demand.sectors.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {demand.sectors.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#0052dc",
                      backgroundColor: "#eff4ff",
                      padding: "5px 12px",
                      borderRadius: 999,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            {demand.description && (
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "#43474d",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                  marginBottom: 24,
                }}
              >
                {demand.description}
              </p>
            )}

            <div
              style={{
                padding: "18px 20px",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 14,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#64748b",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Share this opening
              </p>
              <ShareButtons path={`/current-demands/${demand.id}`} text={demand.title} size="md" />
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 16px 48px rgba(0,12,47,0.08)",
                position: "sticky",
                top: 100,
              }}
            >
              <div style={{ marginBottom: 22 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#0b1c30", marginBottom: 6 }}>
                  Apply for this opening
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
                  Fill the form and our team will call you back within 24 hours.
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
                  {status === "loading" ? "Submitting..." : "Apply Now"}
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
          </div>
        </div>
      </div>

      {/* More openings */}
      <section
        className="detail-container"
        style={{
          maxWidth: 1200,
          margin: "80px auto 0",
          padding: "0 24px",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#0b1c30",
              marginBottom: 8,
            }}
          >
            More openings
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>
            Explore other active demands
          </p>
        </div>

        {otherDemands.length === 0 ? (
          <DemandsEmpty />
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {otherDemands.map((d) => (
              <DemandCard key={d.id} demand={d} />
            ))}
          </div>
        )}
      </section>

      <style>{`
        @media (min-width: 1200px) {
          .detail-container { padding-left: 220px !important; padding-right: 220px !important; max-width: 1400px !important; }
        }
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}

export default function DemandDetailClient(props: {
  demand: Demand;
  otherDemands: Demand[];
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
}) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f8f9ff";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#f8f9ff" }} />}>
      <DetailInner {...props} />
    </Suspense>
  );
}
