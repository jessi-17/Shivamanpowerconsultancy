"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface OfferContent {
  heading: string;
  subheading: string;
  ctaLabel: string;
  formTitle: string;
  formSubtitle: string;
  leftMarqueeImages: string[];
  rightMarqueeImages: string[];
  updatedAt: string;
}

const emptyOffer: OfferContent = {
  heading: "",
  subheading: "",
  ctaLabel: "",
  formTitle: "",
  formSubtitle: "",
  leftMarqueeImages: [],
  rightMarqueeImages: [],
  updatedAt: "",
};

export default function AdminOfferPage() {
  const [offer, setOffer] = useState<OfferContent>(emptyOffer);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploadingSide, setUploadingSide] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    fetch("/api/admin/offer")
      .then((r) => r.json())
      .then((data: OfferContent) => {
        setOffer(data);
        setLoading(false);
      });
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);
    const res = await fetch("/api/admin/offer", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offer),
    });
    if (res.ok) {
      const data: OfferContent = await res.json();
      setOffer(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
    setSaving(false);
  }, [offer]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "left" | "right"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingSide(side);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prefix", "offer");

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();

    if (data.url) {
      const key = side === "left" ? "leftMarqueeImages" : "rightMarqueeImages";
      setOffer((prev) => ({ ...prev, [key]: [...prev[key], data.url] }));
    }
    setUploadingSide(null);
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
        Loading offer page...
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
            Ads Landing Page
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
            Edit the page that Meta ads point to. Changes go live on save.{" "}
            {offer.updatedAt && (
              <span>Last saved: {new Date(offer.updatedAt).toLocaleString()}</span>
            )}
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link
            href="/offer"
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
            {saving ? "Saving..." : saved ? "Saved!" : "Save"}
          </button>
        </div>
      </div>

      {/* Text content */}
      <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 24, border: "1px solid #e5e7eb", marginBottom: 24 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 20 }}>
          Hero Content
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={labelStyle}>Heading</label>
            <input
              value={offer.heading}
              onChange={(e) => setOffer({ ...offer, heading: e.target.value })}
              placeholder="e.g. Work Abroad in 60 Days"
              style={{ ...inputStyle, fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 700, padding: "14px" }}
            />
          </div>
          <div>
            <label style={labelStyle}>Subheading</label>
            <textarea
              value={offer.subheading}
              onChange={(e) => setOffer({ ...offer, subheading: e.target.value })}
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
                onChange={(e) => setOffer({ ...offer, formTitle: e.target.value })}
                placeholder="Get Free Consultation"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Form Subtitle</label>
              <input
                value={offer.formSubtitle}
                onChange={(e) => setOffer({ ...offer, formSubtitle: e.target.value })}
                placeholder="We'll call you back within 24 hours"
                style={inputStyle}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Submit Button Label</label>
            <input
              value={offer.ctaLabel}
              onChange={(e) => setOffer({ ...offer, ctaLabel: e.target.value })}
              placeholder="Request Free Call Back"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Marquees */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <MarqueeEditor
          title="Left Marquee — Permits"
          side="left"
          images={offer.leftMarqueeImages}
          uploading={uploadingSide === "left"}
          onUpload={(e) => handleImageUpload(e, "left")}
          onRemove={(url) => removeImage("left", url)}
        />
        <MarqueeEditor
          title="Right Marquee — Visa Photos"
          side="right"
          images={offer.rightMarqueeImages}
          uploading={uploadingSide === "right"}
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
