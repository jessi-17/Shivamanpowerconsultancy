"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

interface Demand {
  id: string;
  title: string;
  description: string;
  country: string;
  sectors: string[];
  poster: string;
  createdAt: string;
  updatedAt: string;
}

const COUNTRIES = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Poland",
  "Romania",
  "Croatia",
  "Malta",
  "Hungary",
  "Czech Republic",
  "Other",
];

const SUGGESTED_SECTORS = [
  "Construction",
  "Factory",
  "Welding",
  "Carpentry",
  "Plumbing",
  "Electrical",
  "Masonry",
  "Painting",
  "Driving",
  "Heavy Driver",
  "Hospitality",
  "Housekeeping",
  "Cleaning",
  "Security",
  "Warehouse",
  "Logistics",
  "Oil & Gas",
  "Manufacturing",
  "Food Processing",
  "Agriculture",
  "Healthcare",
  "Transport",
];

const emptyDemand: Demand = {
  id: "",
  title: "",
  description: "",
  country: "UAE",
  sectors: [],
  poster: "",
  createdAt: "",
  updatedAt: "",
};

function EditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("id");
  const isNew = !editId;

  const [demand, setDemand] = useState<Demand>(emptyDemand);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [sectorInput, setSectorInput] = useState("");

  useEffect(() => {
    if (editId) {
      fetch("/api/admin/demands")
        .then((r) => r.json())
        .then((all: Demand[]) => {
          const found = all.find((d) => d.id === editId);
          if (found) setDemand(found);
        });
    }
  }, [editId]);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);
    const method = isNew ? "POST" : "PUT";
    const res = await fetch("/api/admin/demands", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(demand),
    });
    setSaving(false);
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      if (isNew) router.push("/admin/demands");
    }
  }, [demand, isNew, router]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("prefix", "demand");
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (data.url) setDemand({ ...demand, poster: data.url });
    setUploading(false);
    e.target.value = "";
  };

  const addSector = () => {
    const s = sectorInput.trim();
    if (s && !demand.sectors.includes(s)) {
      setDemand({ ...demand, sectors: [...demand.sectors, s] });
      setSectorInput("");
    }
  };

  const removeSector = (s: string) => {
    setDemand({ ...demand, sectors: demand.sectors.filter((x) => x !== s) });
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

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/admin/demands"
            style={{
              width: 36, height: 36, borderRadius: 8, backgroundColor: "#f1f5f9",
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none", border: "1px solid #e5e7eb",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
          </Link>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#0b1c30" }}>
            {isNew ? "New Demand" : "Edit Demand"}
          </h1>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={handleSave}
            disabled={saving || !demand.title}
            style={{
              padding: "10px 24px",
              backgroundColor: saving || !demand.title ? "#93c5fd" : "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: saving ? "wait" : demand.title ? "pointer" : "not-allowed",
              boxShadow: "0 0 16px rgba(0,82,220,0.3)",
            }}
          >
            {saving ? "Saving..." : saved ? "Saved!" : isNew ? "Publish" : "Update"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 28 }}>
        {/* Main */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={labelStyle}>Title</label>
            <input
              value={demand.title}
              onChange={(e) => setDemand({ ...demand, title: e.target.value })}
              placeholder="e.g. UAE Welders Wanted — Immediate Joining"
              style={{ ...inputStyle, fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 700, padding: "14px" }}
            />
          </div>

          <div>
            <label style={labelStyle}>Description</label>
            <textarea
              value={demand.description}
              onChange={(e) => setDemand({ ...demand, description: e.target.value })}
              placeholder="Short paragraph about the opening — role, salary, duration, requirements."
              rows={6}
              style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}
            />
          </div>

          <div>
            <label style={labelStyle}>Sectors / Trades</label>

            {/* Selected pills */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12, minHeight: 28 }}>
              {demand.sectors.length === 0 ? (
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8" }}>
                  No sectors selected. Tap a suggestion below or type your own.
                </span>
              ) : (
                demand.sectors.map((s) => (
                  <span
                    key={s}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 12px",
                      backgroundColor: "#eff4ff",
                      color: "#0052dc",
                      borderRadius: 20,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => removeSector(s)}
                      style={{ background: "none", border: "none", color: "#0052dc", cursor: "pointer", fontSize: 14, padding: 0 }}
                      aria-label={`Remove ${s}`}
                    >
                      ×
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Suggested pills — click to add */}
            <div style={{ marginBottom: 12 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#94a3b8",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Suggestions — tap to add
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {SUGGESTED_SECTORS.filter((s) => !demand.sectors.includes(s)).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setDemand({ ...demand, sectors: [...demand.sectors, s] })}
                    style={{
                      padding: "4px 12px",
                      backgroundColor: "#fff",
                      border: "1px dashed #cbd5e1",
                      borderRadius: 20,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      cursor: "pointer",
                      transition: "background-color 150ms, color 150ms, border-color 150ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#eff4ff";
                      e.currentTarget.style.color = "#0052dc";
                      e.currentTarget.style.borderColor = "#bfdbfe";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.color = "#64748b";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }}
                  >
                    + {s}
                  </button>
                ))}
                {SUGGESTED_SECTORS.every((s) => demand.sectors.includes(s)) && (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8" }}>
                    All suggestions added. Type a custom sector below.
                  </span>
                )}
              </div>
            </div>

            {/* Custom input — for anything not in suggestions */}
            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={sectorInput}
                onChange={(e) => setSectorInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSector(); } }}
                placeholder="Add custom sector (press Enter)"
                style={{ ...inputStyle, flex: 1 }}
              />
              <button
                type="button"
                onClick={addSector}
                style={{
                  padding: "0 20px",
                  backgroundColor: "#0b1c30",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <label style={labelStyle}>Poster (1080×1350 recommended)</label>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: 10,
                backgroundColor: "#e5e7eb",
                backgroundImage: demand.poster ? `url(${demand.poster})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8",
                fontFamily: "var(--font-body)",
                fontSize: 12,
              }}
            >
              {!demand.poster && "Instagram portrait\n4:5 ratio"}
            </div>
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
              {uploading ? "Uploading..." : demand.poster ? "Replace Poster" : "Upload Poster"}
              <input type="file" accept="image/*" onChange={handleUpload} style={{ display: "none" }} />
            </label>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8", marginTop: 8, lineHeight: 1.5 }}>
              Use a 1080×1350 Instagram portrait image for best results. PNG, JPG, or WebP.
            </p>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <label style={labelStyle}>Country</label>
            <select
              value={demand.country}
              onChange={(e) => setDemand({ ...demand, country: e.target.value })}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditDemandPage() {
  return (
    <Suspense fallback={<div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", color: "#64748b" }}>Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
