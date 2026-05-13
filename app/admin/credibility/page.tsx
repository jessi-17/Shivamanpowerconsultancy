"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { uploadImage } from "@/lib/uploadImage";
import { verifySaved } from "@/lib/verifySaved";
import VersionHistory from "@/components/own/VersionHistory";

/* ============================================================
   Types — mirror /api/admin/credibility/store.ts shape exactly
   ============================================================ */
interface VisaStamp { img: string; name: string; country: string; flag: string; month: string; type: string; }
interface DeployedEntry { day: string; name: string; country: string; role: string; flag: string; }
interface AirportPhoto { img: string; name: string; to: string; flag: string; }
interface DestinationReel { id: string; label: string; country: string; type: "reel" | "p"; }

interface CredibilityFile {
  visaStamps: VisaStamp[];
  deployedFeed: DeployedEntry[];
  airportPhotos: AirportPhoto[];
  destinationReels: DestinationReel[];
  updatedAt: string;
}

const EMPTY: CredibilityFile = {
  visaStamps: [],
  deployedFeed: [],
  airportPhotos: [],
  destinationReels: [],
  updatedAt: "",
};

type Tab = "visaStamps" | "deployedFeed" | "airportPhotos" | "destinationReels";

const TABS: { key: Tab; label: string; help: string }[] = [
  { key: "visaStamps", label: "Visa Stamps", help: "Photos of approved visas / work permits — the strongest credibility unit." },
  { key: "deployedFeed", label: "Deployed Feed", help: "Marquee ticker of recent placements. Update weekly." },
  { key: "airportPhotos", label: "Airport Photos", help: "Departure-day photos from IGI. Caption with name + destination." },
  { key: "destinationReels", label: "Destination Videos", help: "Instagram reel IDs (just the ID after /reel/ or /p/). Filtered to overseas only." },
];

/* ============================================================
   Page
   ============================================================ */
export default function AdminCredibilityPage() {
  const [data, setData] = useState<CredibilityFile>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("visaStamps");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "verifying" | "verified" | "mismatch">("idle");
  const [verifyReason, setVerifyReason] = useState<string | null>(null);
  const [historyRefresh, setHistoryRefresh] = useState(0);

  useEffect(() => {
    fetch("/api/admin/credibility")
      .then((r) => r.json())
      .then((live: CredibilityFile) => {
        setData({ ...EMPTY, ...live });
        setLoading(false);
      });
  }, []);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);
    setVerifyStatus("idle");

    const res = await fetch("/api/admin/credibility", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const live: CredibilityFile = await res.json();
      setData(live);
      setSaved(true);

      setVerifyStatus("verifying");
      const result = await verifySaved<CredibilityFile, CredibilityFile>({
        url: "/api/admin/credibility",
        expected: live,
        selector: (l) => l,
        compare: (actual, expected) => {
          const a = actual as CredibilityFile | undefined;
          if (!a) return false;
          return (
            JSON.stringify(a.visaStamps) === JSON.stringify(expected.visaStamps) &&
            JSON.stringify(a.deployedFeed) === JSON.stringify(expected.deployedFeed) &&
            JSON.stringify(a.airportPhotos) === JSON.stringify(expected.airportPhotos) &&
            JSON.stringify(a.destinationReels) === JSON.stringify(expected.destinationReels)
          );
        },
      });
      setVerifyStatus(result.ok ? "verified" : "mismatch");
      setVerifyReason(result.reason ?? null);
      setHistoryRefresh((n) => n + 1);
      setTimeout(() => setSaved(false), 4000);
    }
    setSaving(false);
  }, [data]);

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
        Loading…
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9ff" }}>
      {/* Top bar */}
      <header
        style={{
          backgroundColor: "#0b1c30",
          color: "#fff",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link
            href="/admin"
            style={{
              padding: "8px 12px",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 8,
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            ← Dashboard
          </Link>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", color: "#60a5fa", textTransform: "uppercase" }}>
              Admin · Credibility
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800 }}>
              Mobile Credibility Sections
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            {data.updatedAt ? `Last saved ${new Date(data.updatedAt).toLocaleString()}` : "Never saved"}
          </span>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: "11px 22px",
              backgroundColor: saved ? "#16a34a" : "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 800,
              borderRadius: 8,
              border: "none",
              cursor: saving ? "wait" : "pointer",
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saved ? "✓ Saved" : saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </header>

      {verifyStatus === "mismatch" && (
        <div style={{ padding: "10px 28px", backgroundColor: "#fef3c7", color: "#92400e", fontFamily: "var(--font-body)", fontSize: 13 }}>
          ⚠ Save reported success but the saved data didn&apos;t match what was sent. {verifyReason ?? ""}
        </div>
      )}

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "16px 28px 0",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#fff",
          overflowX: "auto",
          flexWrap: "nowrap",
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px 10px 0 0",
              border: "none",
              backgroundColor: "transparent",
              borderBottom: tab === t.key ? "3px solid #0052dc" : "3px solid transparent",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              color: tab === t.key ? "#0052dc" : "#64748b",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {t.label}
            <span style={{ marginLeft: 6, opacity: 0.6, fontWeight: 600 }}>
              ({data[t.key].length})
            </span>
          </button>
        ))}
      </div>

      {/* Two-column layout: editor + preview */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 420px",
          gap: 24,
          padding: 28,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* LEFT — editor */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
              {TABS.find((t) => t.key === tab)?.help}
            </p>
          </div>

          {tab === "visaStamps" && (
            <VisaStampsEditor
              items={data.visaStamps}
              onChange={(next) => setData((d) => ({ ...d, visaStamps: next }))}
            />
          )}
          {tab === "deployedFeed" && (
            <DeployedFeedEditor
              items={data.deployedFeed}
              onChange={(next) => setData((d) => ({ ...d, deployedFeed: next }))}
            />
          )}
          {tab === "airportPhotos" && (
            <AirportPhotosEditor
              items={data.airportPhotos}
              onChange={(next) => setData((d) => ({ ...d, airportPhotos: next }))}
            />
          )}
          {tab === "destinationReels" && (
            <DestinationReelsEditor
              items={data.destinationReels}
              onChange={(next) => setData((d) => ({ ...d, destinationReels: next }))}
            />
          )}

          <div style={{ marginTop: 32 }}>
            <VersionHistory
              storeKey="credibility"
              refreshKey={historyRefresh}
              onRestored={() => {
                fetch("/api/admin/credibility")
                  .then((r) => r.json())
                  .then((live: CredibilityFile) => setData({ ...EMPTY, ...live }));
              }}
            />
          </div>
        </div>

        {/* RIGHT — mobile preview */}
        <MobilePreview tab={tab} data={data} />
      </main>
    </div>
  );
}

/* ============================================================
   Shared field/card styles
   ============================================================ */
const cardStyle: React.CSSProperties = {
  padding: 16,
  backgroundColor: "#fff",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  marginBottom: 12,
};
const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontSize: 11,
  fontWeight: 700,
  color: "#0b1c30",
  marginBottom: 4,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 11px",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  fontFamily: "var(--font-body)",
  fontSize: 13,
  color: "#0b1c30",
  backgroundColor: "#fff",
  outline: "none",
};
const removeBtnStyle: React.CSSProperties = {
  padding: "5px 10px",
  backgroundColor: "transparent",
  color: "#dc2626",
  border: "1px solid #fecaca",
  borderRadius: 6,
  fontFamily: "var(--font-display)",
  fontSize: 11,
  fontWeight: 700,
  cursor: "pointer",
};
const addBtnStyle: React.CSSProperties = {
  width: "100%",
  padding: 12,
  backgroundColor: "#fff",
  border: "1.5px dashed #cbd5e1",
  borderRadius: 10,
  fontFamily: "var(--font-display)",
  fontSize: 13,
  fontWeight: 700,
  color: "#0052dc",
  cursor: "pointer",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

/* ============================================================
   Image upload widget — reused by Visa and Airport editors
   ============================================================ */
function ImageUploadField({
  value,
  onChange,
  prefix,
}: {
  value: string;
  onChange: (url: string) => void;
  prefix: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setErr(null);
    try {
      const url = await uploadImage(file, prefix);
      onChange(url);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 10,
          backgroundColor: "#f1f5f9",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        {value ? (
          <Image src={value} alt="" fill sizes="80px" style={{ objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: 11 }}>
            No image
          </div>
        )}
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const f = e.target.files?.[0];
            e.target.value = "";
            if (f) handleFile(f);
          }}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          style={{
            padding: "8px 12px",
            backgroundColor: "#f1f5f9",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: 700,
            color: "#0b1c30",
            cursor: uploading ? "wait" : "pointer",
            width: "fit-content",
          }}
        >
          {uploading ? "Uploading…" : value ? "Replace image" : "Upload image"}
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="…or paste an image URL"
          style={{ ...inputStyle, fontSize: 11 }}
        />
        {err && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#dc2626" }}>{err}</p>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   Visa Stamps editor
   ============================================================ */
function VisaStampsEditor({ items, onChange }: { items: VisaStamp[]; onChange: (next: VisaStamp[]) => void }) {
  const update = (i: number, patch: Partial<VisaStamp>) =>
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () =>
    onChange([
      ...items,
      { img: "", name: "", country: "", flag: "🇦🇪", month: new Date().toLocaleString("en-US", { month: "short", year: "numeric" }), type: "Work Visa" },
    ]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <>
      {items.map((it, i) => (
        <div key={i} style={cardStyle}>
          <RowHeader index={i} total={items.length} onMove={(d) => move(i, d)} onRemove={() => remove(i)} />
          <Field label="Image (Visa / Work Permit photo)">
            <ImageUploadField value={it.img} onChange={(url) => update(i, { img: url })} prefix="visa" />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Field label="Name (first name only)">
              <input style={inputStyle} value={it.name} onChange={(e) => update(i, { name: e.target.value })} placeholder="Vijay K." />
            </Field>
            <Field label="Country">
              <input style={inputStyle} value={it.country} onChange={(e) => update(i, { country: e.target.value })} placeholder="Dubai" />
            </Field>
            <Field label="Flag emoji">
              <input style={inputStyle} value={it.flag} onChange={(e) => update(i, { flag: e.target.value })} placeholder="🇦🇪" />
            </Field>
            <Field label="Month / Year">
              <input style={inputStyle} value={it.month} onChange={(e) => update(i, { month: e.target.value })} placeholder="May 2026" />
            </Field>
          </div>
          <Field label="Visa type (badge text)">
            <input style={inputStyle} value={it.type} onChange={(e) => update(i, { type: e.target.value })} placeholder="Work Visa / Iqama / QID Approval" />
          </Field>
        </div>
      ))}
      <button onClick={add} style={addBtnStyle}>+ Add visa stamp</button>
    </>
  );
}

/* ============================================================
   Deployed Feed editor (no images)
   ============================================================ */
function DeployedFeedEditor({ items, onChange }: { items: DeployedEntry[]; onChange: (next: DeployedEntry[]) => void }) {
  const update = (i: number, patch: Partial<DeployedEntry>) =>
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, { day: "Mon", name: "", country: "", role: "", flag: "🇦🇪" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <>
      {items.map((it, i) => (
        <div key={i} style={cardStyle}>
          <RowHeader index={i} total={items.length} onMove={(d) => move(i, d)} onRemove={() => remove(i)} />
          <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 1fr 60px", gap: 10 }}>
            <Field label="Day">
              <input style={inputStyle} value={it.day} onChange={(e) => update(i, { day: e.target.value })} placeholder="Mon" />
            </Field>
            <Field label="Name">
              <input style={inputStyle} value={it.name} onChange={(e) => update(i, { name: e.target.value })} placeholder="Vijay K." />
            </Field>
            <Field label="Country">
              <input style={inputStyle} value={it.country} onChange={(e) => update(i, { country: e.target.value })} placeholder="Dubai" />
            </Field>
            <Field label="Flag">
              <input style={inputStyle} value={it.flag} onChange={(e) => update(i, { flag: e.target.value })} placeholder="🇦🇪" />
            </Field>
          </div>
          <Field label="Role / sector">
            <input style={inputStyle} value={it.role} onChange={(e) => update(i, { role: e.target.value })} placeholder="Construction / Welding / Driver" />
          </Field>
        </div>
      ))}
      <button onClick={add} style={addBtnStyle}>+ Add deployment</button>
    </>
  );
}

/* ============================================================
   Airport Photos editor
   ============================================================ */
function AirportPhotosEditor({ items, onChange }: { items: AirportPhoto[]; onChange: (next: AirportPhoto[]) => void }) {
  const update = (i: number, patch: Partial<AirportPhoto>) =>
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, { img: "", name: "", to: "", flag: "🇦🇪" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <>
      {items.map((it, i) => (
        <div key={i} style={cardStyle}>
          <RowHeader index={i} total={items.length} onMove={(d) => move(i, d)} onRemove={() => remove(i)} />
          <Field label="Photo (departure / airport)">
            <ImageUploadField value={it.img} onChange={(url) => update(i, { img: url })} prefix="airport" />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 80px", gap: 10 }}>
            <Field label="Name">
              <input style={inputStyle} value={it.name} onChange={(e) => update(i, { name: e.target.value })} placeholder="Vijay K." />
            </Field>
            <Field label="Destination city">
              <input style={inputStyle} value={it.to} onChange={(e) => update(i, { to: e.target.value })} placeholder="Dubai" />
            </Field>
            <Field label="Flag">
              <input style={inputStyle} value={it.flag} onChange={(e) => update(i, { flag: e.target.value })} placeholder="🇦🇪" />
            </Field>
          </div>
        </div>
      ))}
      <button onClick={add} style={addBtnStyle}>+ Add airport photo</button>
    </>
  );
}

/* ============================================================
   Destination Reels editor
   ============================================================ */
function DestinationReelsEditor({ items, onChange }: { items: DestinationReel[]; onChange: (next: DestinationReel[]) => void }) {
  const update = (i: number, patch: Partial<DestinationReel>) =>
    onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, { id: "", label: "", country: "Overseas", type: "reel" }]);
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <>
      {items.map((it, i) => (
        <div key={i} style={cardStyle}>
          <RowHeader index={i} total={items.length} onMove={(d) => move(i, d)} onRemove={() => remove(i)} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: 10 }}>
            <Field label="Instagram ID (just the code after /reel/ or /p/)">
              <input style={inputStyle} value={it.id} onChange={(e) => update(i, { id: e.target.value })} placeholder="DUffhPTkf0C" />
            </Field>
            <Field label="Type">
              <select
                style={inputStyle}
                value={it.type}
                onChange={(e) => update(i, { type: e.target.value as "reel" | "p" })}
              >
                <option value="reel">Reel</option>
                <option value="p">Post</option>
              </select>
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Field label="Label">
              <input style={inputStyle} value={it.label} onChange={(e) => update(i, { label: e.target.value })} placeholder="Factory Worker" />
            </Field>
            <Field label="Country / location">
              <input style={inputStyle} value={it.country} onChange={(e) => update(i, { country: e.target.value })} placeholder="Dubai" />
            </Field>
          </div>
        </div>
      ))}
      <button onClick={add} style={addBtnStyle}>+ Add destination video</button>
    </>
  );
}

/* ============================================================
   Row header — reorder + remove controls
   ============================================================ */
function RowHeader({
  index,
  total,
  onMove,
  onRemove,
}: {
  index: number;
  total: number;
  onMove: (dir: -1 | 1) => void;
  onRemove: () => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #f1f5f9" }}>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800, color: "#94a3b8", letterSpacing: "0.08em" }}>
        #{index + 1} OF {total}
      </p>
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={() => onMove(-1)} disabled={index === 0} style={{ ...removeBtnStyle, color: "#0b1c30", borderColor: "#e5e7eb", opacity: index === 0 ? 0.3 : 1 }}>↑</button>
        <button onClick={() => onMove(1)} disabled={index === total - 1} style={{ ...removeBtnStyle, color: "#0b1c30", borderColor: "#e5e7eb", opacity: index === total - 1 ? 0.3 : 1 }}>↓</button>
        <button onClick={onRemove} style={removeBtnStyle}>Remove</button>
      </div>
    </div>
  );
}

/* ============================================================
   Live mobile preview pane — replicates MobileCredibilityStack
   rendering at 375px width so admin sees exactly what users see.
   ============================================================ */
function MobilePreview({ tab, data }: { tab: Tab; data: CredibilityFile }) {
  return (
    <aside style={{ position: "sticky", top: 16, alignSelf: "flex-start" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <p style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "#0b1c30", textTransform: "uppercase" }}>
          Live preview · 375px
        </p>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "#94a3b8" }}>
          What users see on mobile
        </span>
      </div>
      <div
        style={{
          width: 375,
          maxHeight: "75vh",
          overflowY: "auto",
          borderRadius: 24,
          backgroundColor: "var(--surface, #f8f9ff)",
          border: "8px solid #0b1c30",
          boxShadow: "0 20px 50px rgba(11,28,48,0.18)",
        }}
      >
        {tab === "visaStamps" && <PreviewVisaStamps items={data.visaStamps} />}
        {tab === "deployedFeed" && <PreviewDeployedFeed items={data.deployedFeed} />}
        {tab === "airportPhotos" && <PreviewAirportPhotos items={data.airportPhotos} />}
        {tab === "destinationReels" && <PreviewDestinationReels items={data.destinationReels} />}
      </div>
    </aside>
  );
}

/* ----- preview renderers ----- */
const PREVIEW_HSCROLL: React.CSSProperties = {
  display: "flex",
  gap: 12,
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  padding: "4px 16px 12px",
  scrollbarWidth: "none",
};
const PREVIEW_HEADER = (kicker: string, title: string, sub?: string, accent = "#0052dc", onDark = false) => (
  <div style={{ padding: "0 16px", marginBottom: 16 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <span style={{ display: "inline-block", width: 22, height: 3, backgroundColor: accent, borderRadius: 999 }} />
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 800, color: accent, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {kicker}
      </span>
    </div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: onDark ? "#fff" : "#0b1c30", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: sub ? 6 : 0 }}>
      {title}
    </div>
    {sub && (
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: onDark ? "rgba(255,255,255,0.72)" : "#3b4858", lineHeight: 1.5 }}>
        {sub}
      </div>
    )}
  </div>
);

function PreviewVisaStamps({ items }: { items: VisaStamp[] }) {
  return (
    <section style={{ padding: "32px 0", background: "#f8f9ff" }}>
      {PREVIEW_HEADER("Verified Placements", "Real Visas. Real Workers.", "Stamped this season. Names shown with first-name only for privacy.")}
      <div style={PREVIEW_HSCROLL}>
        {items.length === 0 && <EmptyState label="No visa stamps yet — add one to see the preview." />}
        {items.map((v, i) => (
          <div key={i} style={{ flex: "0 0 78%", maxWidth: "78%", height: 260, borderRadius: 16, overflow: "hidden", position: "relative", scrollSnapAlign: "start", backgroundColor: "#000c2f", boxShadow: "0 6px 18px rgba(0,12,47,0.12)" }}>
            {v.img && <Image src={v.img} alt="" fill sizes="295px" style={{ objectFit: "cover" }} />}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,12,47,0) 40%, rgba(0,12,47,0.85) 100%)" }} />
            <div style={{ position: "absolute", top: 10, left: 10, padding: "4px 9px", backgroundColor: "rgba(250, 204, 21, 0.95)", borderRadius: 8, fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, color: "#000c2f", letterSpacing: "0.04em" }}>
              {(v.type || "VISA").toUpperCase()}
            </div>
            <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                {v.name || "—"} → {v.country || "—"} {v.flag}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.75)" }}>
                Stamped {v.month || "—"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewDeployedFeed({ items }: { items: DeployedEntry[] }) {
  return (
    <section style={{ padding: "24px 0", background: "linear-gradient(135deg, #001233 0%, #001845 100%)" }}>
      {PREVIEW_HEADER("● Live This Week", "People We Deployed", undefined, "#facc15", true)}
      <div style={{ overflow: "hidden", padding: "0 16px" }}>
        {items.length === 0 && <EmptyState label="No deployments yet." onDark />}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {items.map((d, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, color: "#facc15", letterSpacing: "0.06em" }}>
                {(d.day || "—").toUpperCase()}
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#fff", fontWeight: 600 }}>
                {d.name || "—"}
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                → {d.country || "—"} {d.flag} · {d.role || "—"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewAirportPhotos({ items }: { items: AirportPhoto[] }) {
  return (
    <section style={{ padding: "32px 0", background: "#eff4ff" }}>
      {PREVIEW_HEADER("Departure Day", "The Moment They Fly Out", "Photos sent from IGI Airport — bags packed, visa in hand, family at the gate.")}
      <div style={PREVIEW_HSCROLL}>
        {items.length === 0 && <EmptyState label="No airport photos yet." />}
        {items.map((p, i) => (
          <div key={i} style={{ flex: "0 0 65%", maxWidth: "65%", height: 320, borderRadius: 16, overflow: "hidden", position: "relative", scrollSnapAlign: "start", backgroundColor: "#000c2f" }}>
            {p.img && <Image src={p.img} alt="" fill sizes="244px" style={{ objectFit: "cover" }} />}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.8) 100%)" }} />
            <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                {p.name || "—"}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#facc15", fontWeight: 600 }}>
                ✈ {p.to || "—"} {p.flag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PreviewDestinationReels({ items }: { items: DestinationReel[] }) {
  return (
    <section style={{ padding: "32px 0", background: "#f8f9ff" }}>
      {PREVIEW_HEADER("Filmed Abroad", "Workers, From The Site", "Not actors. Not stock footage. Clips workers sent us from their job site.")}
      <div style={PREVIEW_HSCROLL}>
        {items.length === 0 && <EmptyState label="No videos yet." />}
        {items.map((r, i) => (
          <a
            key={i}
            href={r.id ? `https://www.instagram.com/${r.type}/${r.id}/` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: "0 0 65%", maxWidth: "65%", height: 360, borderRadius: 16, overflow: "hidden", position: "relative", scrollSnapAlign: "start", textDecoration: "none", backgroundColor: "#d9e2f2", display: "block" }}
          >
            {r.id ? (
              <iframe
                src={`https://www.instagram.com/${r.type}/${r.id}/embed/`}
                style={{ width: 300, height: 660, border: "none", position: "absolute", top: -60, left: -20, pointerEvents: "none" }}
                scrolling="no"
                loading="lazy"
              />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", fontSize: 12 }}>
                Add an Instagram ID
              </div>
            )}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(0,0,0,0.85) 60%, transparent)", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, zIndex: 3 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                {r.label || "—"}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.7)" }}>
                {r.country || "—"}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function EmptyState({ label, onDark = false }: { label: string; onDark?: boolean }) {
  return (
    <div
      style={{
        padding: "32px 12px",
        textAlign: "center",
        border: `1px dashed ${onDark ? "rgba(255,255,255,0.2)" : "#cbd5e1"}`,
        borderRadius: 12,
        color: onDark ? "rgba(255,255,255,0.55)" : "#94a3b8",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        flex: "0 0 100%",
      }}
    >
      {label}
    </div>
  );
}
