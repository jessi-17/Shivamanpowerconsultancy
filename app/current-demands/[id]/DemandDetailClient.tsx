"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UnifiedContactForm from "@/components/own/UnifiedContactForm";
import type { Demand } from "../../api/admin/demands/store";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";
import SidePosterRails from "@/components/own/SidePosterRails";
import DemandsTicker from "@/components/own/DemandsTicker";
import ShareButtons from "@/components/own/ShareButtons";
import { flagFor } from "@/lib/countryFlags";

function inferRegion(country?: string | null): string {
  if (!country) return "";
  const lower = country.toLowerCase();
  const europe = ["poland", "romania", "croatia", "malta", "hungary", "czech republic", "europe", "schengen", "italy", "portugal", "germany", "france", "spain"];
  if (europe.some((c) => lower.includes(c))) return "Europe";
  return "Gulf";
}

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
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [back, setBack] = useState<{ href: string; label: string }>({
    href: "/current-demands",
    label: "All openings",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ref = document.referrer;
    if (!ref) return;
    try {
      const url = new URL(ref);
      if (url.origin !== window.location.origin) return;
      if (url.pathname.startsWith("/offer/")) {
        const region = url.pathname.split("/")[2] ?? "";
        const label =
          region === "europe" ? "Europe openings" :
          region === "gulf" ? "Gulf openings" :
          "Offer page";
        setBack({ href: url.pathname + url.search, label });
      }
    } catch {
      // ignore malformed referrer
    }
  }, []);

  useEffect(() => {
    if (!isImageOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsImageOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isImageOpen]);

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
        <Link href={back.href} style={{ color: "#0052dc", textDecoration: "none" }}>
          ← {back.label}
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
        <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "minmax(280px, 420px) 1fr", gap: 40 }}>
          {/* LEFT — poster + details */}
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxHeight: 560,
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,12,47,0.12)",
                backgroundColor: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {demand.poster ? (
                <img
                  src={demand.poster}
                  alt={demand.title}
                  onClick={() => setIsImageOpen(true)}
                  title="Click to expand"
                  style={{
                    maxWidth: "100%",
                    maxHeight: 560,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    cursor: "zoom-in",
                  }}
                />
              ) : (
                <div style={{ width: "100%", aspectRatio: "4/5" }} />
              )}
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

              <UnifiedContactForm
                prefill={{
                  interest: inferRegion(demand.country),
                  experience: "Fresher",
                }}
                source={`/current-demands/${demand.id}`}
                contextTag={`demand: ${demand.title} (${demand.id})`}
                submitLabel="Apply Now"
                posthogContext={{
                  source: "demand_detail",
                  demand_id: demand.id,
                  demand_title: demand.title,
                  demand_country: demand.country,
                }}
                onSuccess={() => router.push("/?submitted=1")}
                compact
              />
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

      {isImageOpen && demand.poster && (
        <div
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Poster preview"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.88)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            cursor: "zoom-out",
            animation: "fadeIn 200ms ease-out",
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageOpen(false);
            }}
            aria-label="Close preview"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              transition: "all 150ms ease",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={demand.poster}
            alt={demand.title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              cursor: "default",
            }}
          />
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
        </div>
      )}
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
