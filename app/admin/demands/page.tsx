"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VersionHistory from "@/components/own/VersionHistory";

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

export default function AdminDemandsList() {
  const [demands, setDemands] = useState<Demand[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchDemands = async () => {
    setError(null);
    try {
      const res = await fetch("/api/admin/demands");
      if (res.status === 401) {
        setError("Your admin session has expired. Log in again at /admin and reload this page.");
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setError(`Could not load demands (status ${res.status}). Check server logs.`);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setDemands(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (err) {
      setError(`Network error — could not reach the server: ${(err as Error).message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemands();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;
    setDeleting(id);
    setError(null);
    try {
      const res = await fetch("/api/admin/demands", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.status === 401) {
        setError("Your admin session has expired. Log in again at /admin and try the delete again.");
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({} as { error?: string }));
        setError(body?.error ? `Delete failed (${res.status}): ${body.error}` : `Delete failed with status ${res.status}.`);
        return;
      }
      setDemands(demands.filter((d) => d.id !== id));
    } catch (err) {
      setError(`Network error during delete: ${(err as Error).message}`);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 16, color: "#64748b" }}>
        Loading demands...
      </div>
    );
  }

  if (error && demands.length === 0) {
    return (
      <div style={{ padding: "80px 32px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            padding: 28,
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 12,
            fontFamily: "var(--font-body)",
          }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#991b1b", marginBottom: 6 }}>
            Could not load demands
          </p>
          <p style={{ fontSize: 13, color: "#7f1d1d", marginBottom: 18, lineHeight: 1.5 }}>{error}</p>
          <button
            type="button"
            onClick={() => { setLoading(true); fetchDemands(); }}
            style={{
              padding: "10px 22px",
              background: "#0052dc",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
            Current Demands
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>
            {demands.length} demand{demands.length === 1 ? "" : "s"} live on /current-demands and /offer
          </p>
        </div>
        <Link
          href="/admin/demands/edit"
          style={{
            padding: "12px 28px",
            backgroundColor: "#0052dc",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            borderRadius: 10,
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(0,82,220,0.3)",
          }}
        >
          + New Demand
        </Link>
      </div>

      {error && (
        <div
          role="alert"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            padding: "12px 16px",
            background: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 10,
            marginBottom: 20,
            fontFamily: "var(--font-body)",
          }}
        >
          <span style={{ flex: 1, fontSize: 13, color: "#7f1d1d", lineHeight: 1.5 }}>{error}</span>
          <button
            type="button"
            onClick={() => setError(null)}
            style={{
              background: "transparent",
              border: "none",
              color: "#991b1b",
              fontSize: 18,
              cursor: "pointer",
              padding: "0 4px",
              lineHeight: 1,
            }}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {demands.length === 0 ? (
        <div
          style={{
            padding: "80px 32px",
            border: "2px dashed #e5e7eb",
            borderRadius: 16,
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>
            No demands yet
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", marginBottom: 20 }}>
            Add your first demand poster to make it appear on the Current Demands page and the Ads Landing Page.
          </p>
          <Link
            href="/admin/demands/edit"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              backgroundColor: "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            + New Demand
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
            gap: 20,
          }}
        >
          {/* version history rendered below the grid */}
          {demands.map((d) => (
            <div
              key={d.id}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  aspectRatio: "4/5",
                  backgroundColor: "#e5e7eb",
                  backgroundImage: d.poster ? `url(${d.poster})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                }}
              >
                {!d.poster && "No poster"}
              </div>
              <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0b1c30",
                    lineHeight: 1.25,
                  }}
                >
                  {d.title || "Untitled"}
                </h3>
                {d.country && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      backgroundColor: "#eff4ff",
                      borderRadius: 20,
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#0052dc",
                      width: "fit-content",
                    }}
                  >
                    {d.country}
                  </span>
                )}
                <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 10 }}>
                  <Link
                    href={`/admin/demands/edit?id=${d.id}`}
                    style={{
                      flex: 1,
                      padding: "6px 12px",
                      backgroundColor: "#f1f5f9",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#0b1c30",
                      textDecoration: "none",
                      border: "1px solid #e5e7eb",
                      textAlign: "center",
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(d.id, d.title)}
                    disabled={deleting === d.id}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: deleting === d.id ? "#fecaca" : "#fff",
                      borderRadius: 6,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#dc2626",
                      border: "1px solid #fecaca",
                      cursor: "pointer",
                    }}
                  >
                    {deleting === d.id ? "..." : "Del"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <VersionHistory storeKey="demands" onRestored={fetchDemands} />
    </div>
  );
}

