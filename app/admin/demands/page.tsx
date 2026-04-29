"use client";

import { useEffect, useState } from "react";
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

export default function AdminDemandsList() {
  const [demands, setDemands] = useState<Demand[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchDemands = async () => {
    const res = await fetch("/api/admin/demands");
    const data = await res.json();
    setDemands(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDemands();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"?`)) return;
    setDeleting(id);
    await fetch("/api/admin/demands", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDemands(demands.filter((d) => d.id !== id));
    setDeleting(null);
  };

  if (loading) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 16, color: "#64748b" }}>
        Loading demands...
      </div>
    );
  }

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Admin nav */}
      <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
        <AdminNavLink href="/admin/blog" label="Blog" />
        <AdminNavLink href="/admin/offer" label="Ads Landing Page" />
        <AdminNavLink href="/admin/demands" label="Current Demands" active />
        <AdminNavLink href="/admin/leads" label="Leads" />
      </div>

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
