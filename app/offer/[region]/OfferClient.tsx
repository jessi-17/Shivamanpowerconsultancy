"use client";

import { useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import UnifiedContactForm from "@/components/own/UnifiedContactForm";
import type { OfferContent, Region } from "../../api/admin/offer/store";
import type { Demand } from "../../api/admin/demands/store";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";
import SidePosterRails from "@/components/own/SidePosterRails";
import DemandsTicker from "@/components/own/DemandsTicker";

function regionLabel(region: Region): string {
  return region === "europe" ? "Europe" : "Gulf";
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

          <UnifiedContactForm
            prefill={{
              interest: regionLabel(region),
              experience: "Fresher",
            }}
            source={`/offer/${region}`}
            contextTag={`Ad landing page lead (${region})`}
            submitLabel={offer.ctaLabel || "Request Free Call Back"}
            posthogContext={{ source: "offer", region }}
            onSuccess={() => router.push("/?submitted=1")}
            compact
          />
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
