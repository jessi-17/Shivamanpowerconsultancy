"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";

type Region = "gulf" | "europe";

interface OfferContent {
  heading: string;
  subheading: string;
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
  bgImage: string;
  updatedAt: string;
}

type OfferFile = Record<Region, OfferContent>;

const emptyOffer: OfferContent = {
  heading: "",
  subheading: "",
  ctaLabel: "",
  formTitle: "",
  formSubtitle: "",
  leftMarqueeImages: [],
  rightMarqueeImages: [],
  bgImage: "",
  updatedAt: "",
};

const REGION_LABEL: Record<Region, string> = {
  gulf: "Gulf",
  europe: "Europe",
};

export default function AdminOfferPage() {
  const [file, setFile] = useState<OfferFile>({ gulf: emptyOffer, europe: emptyOffer });
  const [region, setRegion] = useState<Region>("gulf");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingField, setUploadingField] = useState<"left" | "right" | "bg" | null>(null);

  // Defensive merge with emptyOffer so any missing field from a legacy API response
  // doesn't cause a runtime crash (e.g. undefined arrays before we call .length).
  const offer: OfferContent = useMemo(
    () => ({ ...emptyOffer, ...(file[region] ?? {}) }),
    [file, region]
  );
  const setOffer = (updater: (prev: OfferContent) => OfferContent) => {
    setFile((prev) => {
      const safePrev = { ...emptyOffer, ...(prev[region] ?? {}) };
      return { ...prev, [region]: updater(safePrev) };
    });
  };

  useEffect(() => {
    fetch("/api/admin/offer")
      .then((r) => r.json())
      .then((data: Partial<OfferFile> | OfferContent) => {
        // If the API returned the legacy flat shape, treat it as gulf
        const isLegacy = data && typeof data === "object" && !("gulf" in data) && "heading" in data;
        const file: OfferFile = isLegacy
          ? { gulf: { ...emptyOffer, ...(data as OfferContent) }, europe: emptyOffer }
          : {
              gulf: { ...emptyOffer, ...((data as Partial<OfferFile>).gulf ?? {}) },
              europe: { ...emptyOffer, ...((data as Partial<OfferFile>).europe ?? {}) },
            };
        setFile(file);
        setLoading(false);
      });
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);
    const res = await fetch("/api/admin/offer", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ region, ...offer }),
    });
    if (res.ok) {
      const data: OfferContent = await res.json();
      setFile((prev) => ({ ...prev, [region]: data }));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setSaving(false);
  }, [region, offer]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "left" | "right"
  ) => {
    const img = e.target.files?.[0];
    if (!img) return;
    setUploadingField(side);

    const formData = new FormData();
    formData.append("file", img);
    formData.append("prefix", "offer");

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();

    if (data.url) {
      const key = side === "left" ? "leftMarqueeImages" : "rightMarqueeImages";
      setOffer((prev) => ({ ...prev, [key]: [...prev[key], data.url] }));
    }
    setUploadingField(null);
    e.target.value = "";
  };

  const handleBgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files?.[0];
    if (!img) return;
    setUploadingField("bg");

    const formData = new FormData();
    formData.append("file", img);
    formData.append("prefix", "offer-bg");

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url) setOffer((prev) => ({ ...prev, bgImage: data.url }));
    setUploadingField(null);
    e.target.value = "";
  };

  const removeImage = (side: "left" | "right", url: string) => {
    const key = side === "left" ? "leftMarqueeImages" : "rightMarqueeImages";
    setOffer((prev) => ({ ...prev, [key]: prev[key].filter((u) => u !== url) }));
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 700,
    color: "#64748b",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "#0b1c30",
    outline: "none",
  };

  if (loading) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 16, color: "#64748b" }}>
        Loading offer pages...
      </div>
    );
  }

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Admin nav */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <AdminNavLink href="/admin/blog" label="Blog" />
        <AdminNavLink href="/admin/offer" label="Ads Landing Page" active />
        <AdminNavLink href="/admin/demands" label="Current Demands" />
      </div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
            Ads Landing Pages
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
            Two separate landing pages — one for Gulf ads, one for Europe ads. Edit each region independently.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link
            href={`/offer/${region}`}
            target="_blank"
            style={{
              padding: "10px 20px",
              backgroundColor: "#f1f5f9",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "#0b1c30",
              textDecoration: "none",
            }}
          >
            View Live Page ↗
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: "10px 24px",
              backgroundColor: saving ? "#93c5fd" : "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: saving ? "wait" : "pointer",
              boxShadow: "0 0 16px rgba(0,82,220,0.3)",
            }}
          >
            {saving ? "Saving..." : saved ? "Saved!" : `Save ${REGION_LABEL[region]}`}
          </button>
        </div>
      </div>

      {/* Region tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: "1px solid #e5e7eb" }}>
        {(["gulf", "europe"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            style={{
              padding: "12px 22px",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: region === r ? "3px solid #0052dc" : "3px solid transparent",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: region === r ? 800 : 600,
              color: region === r ? "#0052dc" : "#64748b",
              cursor: "pointer",
              marginBottom: -1,
            }}
          >
            {REGION_LABEL[r]}
          </button>
        ))}
        {offer.updatedAt && (
          <span
            style={{
              marginLeft: "auto",
              alignSelf: "center",
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "#94a3b8",
              paddingBottom: 12,
            }}
          >
            Last saved: {new Date(offer.updatedAt).toLocaleString()}
          </span>
        )}
      </div>

      {/* Text content */}
      <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e5e7eb", marginBottom: 24 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 20 }}>
          Hero Content — {REGION_LABEL[region]}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={labelStyle}>Heading</label>
            <input
              value={offer.heading}
              onChange={(e) => setOffer((p) => ({ ...p, heading: e.target.value }))}
              placeholder="e.g. Work in the Gulf in 60 Days"
              style={{ ...inputStyle, fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 700, padding: "14px" }}
            />
          </div>
          <div>
            <label style={labelStyle}>Subheading</label>
            <textarea
              value={offer.subheading}
              onChange={(e) => setOffer((p) => ({ ...p, subheading: e.target.value }))}
              placeholder="Supporting copy under the heading"
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={labelStyle}>Form Title</label>
              <input
                value={offer.formTitle}
                onChange={(e) => setOffer((p) => ({ ...p, formTitle: e.target.value }))}
                placeholder="Get Free Consultation"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Form Subtitle</label>
              <input
                value={offer.formSubtitle}
                onChange={(e) => setOffer((p) => ({ ...p, formSubtitle: e.target.value }))}
                placeholder="We'll call you back within 24 hours"
                style={inputStyle}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Submit Button Label</label>
            <input
              value={offer.ctaLabel}
              onChange={(e) => setOffer((p) => ({ ...p, ctaLabel: e.target.value }))}
              placeholder="Request Free Call Back"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Background image */}
      <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e5e7eb", marginBottom: 24 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>
          Background Image
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8", marginBottom: 16 }}>
          Shown very faintly (≈8% opacity) behind the page content. Use a wide landscape image representing the region (e.g. skyline, landmark).
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div
            style={{
              width: 220,
              aspectRatio: "16/9",
              borderRadius: 10,
              backgroundColor: "#e5e7eb",
              backgroundImage: offer.bgImage ? `url(${offer.bgImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              fontFamily: "var(--font-body)",
              fontSize: 12,
              flexShrink: 0,
            }}
          >
            {!offer.bgImage && "No bg image"}
          </div>
          <div style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 10 }}>
            <label
              style={{
                display: "block",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f1f5f9",
                borderRadius: 8,
                border: "1px dashed #cbd5e1",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                color: "#64748b",
                cursor: "pointer",
              }}
            >
              {uploadingField === "bg" ? "Uploading..." : offer.bgImage ? "Replace Background" : "Upload Background"}
              <input type="file" accept="image/*" onChange={handleBgUpload} style={{ display: "none" }} />
            </label>
            {offer.bgImage && (
              <button
                onClick={() => setOffer((p) => ({ ...p, bgImage: "" }))}
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#fff",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  borderRadius: 6,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Marquees */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <MarqueeEditor
          title="Left Marquee — Permits"
          side="left"
          images={offer.leftMarqueeImages}
          uploading={uploadingField === "left"}
          onUpload={(e) => handleImageUpload(e, "left")}
          onRemove={(url) => removeImage("left", url)}
        />
        <MarqueeEditor
          title="Right Marquee — Visa Photos"
          side="right"
          images={offer.rightMarqueeImages}
          uploading={uploadingField === "right"}
          onUpload={(e) => handleImageUpload(e, "right")}
          onRemove={(url) => removeImage("right", url)}
        />
      </div>
    </div>
  );
}

function AdminNavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      style={{
        padding: "8px 16px",
        borderRadius: 999,
        backgroundColor: active ? "#0b1c30" : "#f1f5f9",
        color: active ? "#fff" : "#0b1c30",
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 600,
        textDecoration: "none",
        border: "1px solid",
        borderColor: active ? "#0b1c30" : "#e5e7eb",
      }}
    >
      {label}
    </Link>
  );
}

function MarqueeEditor({
  title,
  side,
  images,
  uploading,
  onUpload,
  onRemove,
}: {
  title: string;
  side: "left" | "right";
  images: string[];
  uploading: boolean;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (url: string) => void;
}) {
  return (
    <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#0b1c30" }}>
          {title}
        </h3>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8" }}>
          {images.length} image{images.length === 1 ? "" : "s"}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
        {images.map((url) => (
          <div
            key={url}
            style={{
              position: "relative",
              aspectRatio: "3/4",
              borderRadius: 8,
              backgroundColor: "#e5e7eb",
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => onRemove(url)}
              style={{
                position: "absolute",
                top: 6,
                right: 6,
                width: 24,
                height: 24,
                border: "none",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Remove image"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <label
        style={{
          display: "block",
          padding: "12px",
          textAlign: "center",
          backgroundColor: "#f1f5f9",
          borderRadius: 8,
          border: "1px dashed #cbd5e1",
          fontFamily: "var(--font-body)",
          fontSize: 12,
          fontWeight: 600,
          color: "#64748b",
          cursor: "pointer",
        }}
      >
        {uploading ? "Uploading..." : `+ Upload ${side === "left" ? "Permit" : "Visa"} Image`}
        <input type="file" accept="image/*" onChange={onUpload} style={{ display: "none" }} />
      </label>
    </div>
  );
}
