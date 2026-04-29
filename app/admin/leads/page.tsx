"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type LeadType = "general" | "employer" | "newsletter";

interface LeadRow {
  id: number;
  type: LeadType;
  name: string | null;
  email: string | null;
  phone: string | null;
  country: string | null;
  data: Record<string, unknown>;
  created_at: string;
}

const TYPE_LABEL: Record<LeadType, string> = {
  general: "Job Seeker / Contact",
  employer: "Employer",
  newsletter: "Newsletter",
};

const TYPE_COLOR: Record<LeadType, string> = {
  general: "#0052dc",
  employer: "#16a34a",
  newsletter: "#9333ea",
};

export default function AdminLeadsPage() {
  const [rows, setRows] = useState<LeadRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<LeadType | "all">("all");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [deleting, setDeleting] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (type !== "all") params.set("type", type);
      if (search) params.set("search", search);
      const res = await fetch(`/api/admin/leads?${params.toString()}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      const data = await res.json();
      setRows(data.rows);
      setTotal(data.total);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [type, search]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this lead permanently?")) return;
    setDeleting(id);
    const res = await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDeleting(null);
    if (res.ok) {
      setRows(rows.filter((r) => r.id !== id));
      setTotal((t) => Math.max(0, t - 1));
    } else {
      alert("Failed to delete");
    }
  };

  const handleExport = () => {
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (search) params.set("search", search);
    window.location.href = `/api/admin/leads/export?${params.toString()}`;
  };

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
        <AdminNavLink href="/admin/blog" label="Blog" />
        <AdminNavLink href="/admin/offer" label="Ads Landing Page" />
        <AdminNavLink href="/admin/demands" label="Current Demands" />
        <AdminNavLink href="/admin/leads" label="Leads" active />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
            Leads
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>
            {total} {total === 1 ? "submission" : "submissions"} from contact, employer & newsletter forms
          </p>
        </div>
        <button
          onClick={handleExport}
          disabled={rows.length === 0}
          style={{
            padding: "12px 28px",
            backgroundColor: rows.length === 0 ? "#cbd5e1" : "#0052dc",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 700,
            borderRadius: 10,
            border: "none",
            cursor: rows.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Export CSV
        </button>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        {(["all", "general", "employer", "newsletter"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              backgroundColor: type === t ? "#0b1c30" : "#fff",
              color: type === t ? "#fff" : "#0b1c30",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              border: "1px solid",
              borderColor: type === t ? "#0b1c30" : "#e5e7eb",
              cursor: "pointer",
            }}
          >
            {t === "all" ? "All" : TYPE_LABEL[t]}
          </button>
        ))}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchInput.trim());
          }}
          style={{ display: "flex", gap: 8, marginLeft: "auto" }}
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search name, email, phone, country..."
            style={{
              padding: "8px 14px",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              minWidth: 280,
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 18px",
              backgroundColor: "#f1f5f9",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 600,
              color: "#0b1c30",
              cursor: "pointer",
            }}
          >
            Search
          </button>
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSearchInput("");
              }}
              style={{
                padding: "8px 14px",
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#64748b",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          )}
        </form>
      </div>

      {error && (
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: 10,
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "#991b1b",
            marginBottom: 20,
          }}
        >
          {error}
        </div>
      )}

      {loading ? (
        <div style={{ padding: "60px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>
          Loading leads...
        </div>
      ) : rows.length === 0 ? (
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
            No leads {search || type !== "all" ? "match your filters" : "yet"}
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
            Submissions from your contact, employer, and newsletter forms will show up here.
          </p>
        </div>
      ) : (
        <div style={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 13 }}>
              <thead>
                <tr style={{ backgroundColor: "#f8fafc", textAlign: "left" }}>
                  <Th>Type</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Country</Th>
                  <Th>Date</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <Row
                    key={row.id}
                    row={row}
                    expanded={expanded === row.id}
                    onToggle={() => setExpanded(expanded === row.id ? null : row.id)}
                    onDelete={() => handleDelete(row.id)}
                    deleting={deleting === row.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        padding: "12px 16px",
        fontFamily: "var(--font-display)",
        fontSize: 12,
        fontWeight: 700,
        color: "#475569",
        textTransform: "uppercase",
        letterSpacing: 0.5,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {children}
    </th>
  );
}

function Row({
  row,
  expanded,
  onToggle,
  onDelete,
  deleting,
}: {
  row: LeadRow;
  expanded: boolean;
  onToggle: () => void;
  onDelete: () => void;
  deleting: boolean;
}) {
  const date = new Date(row.created_at).toLocaleString();

  return (
    <>
      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
        <td style={{ padding: "14px 16px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "3px 10px",
              backgroundColor: `${TYPE_COLOR[row.type]}15`,
              color: TYPE_COLOR[row.type],
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {TYPE_LABEL[row.type]}
          </span>
        </td>
        <td style={{ padding: "14px 16px", color: "#0b1c30", fontWeight: 500 }}>{row.name || "—"}</td>
        <td style={{ padding: "14px 16px", color: "#475569" }}>
          {row.email ? (
            <a href={`mailto:${row.email}`} style={{ color: "#0052dc", textDecoration: "none" }}>
              {row.email}
            </a>
          ) : (
            "—"
          )}
        </td>
        <td style={{ padding: "14px 16px", color: "#475569" }}>
          {row.phone ? (
            <a href={`tel:${row.phone}`} style={{ color: "#0052dc", textDecoration: "none" }}>
              {row.phone}
            </a>
          ) : (
            "—"
          )}
        </td>
        <td style={{ padding: "14px 16px", color: "#475569" }}>{row.country || "—"}</td>
        <td style={{ padding: "14px 16px", color: "#64748b", whiteSpace: "nowrap" }}>{date}</td>
        <td style={{ padding: "14px 16px", whiteSpace: "nowrap" }}>
          <button
            onClick={onToggle}
            style={{
              padding: "5px 10px",
              backgroundColor: "#f1f5f9",
              border: "1px solid #e5e7eb",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#0b1c30",
              cursor: "pointer",
              marginRight: 6,
            }}
          >
            {expanded ? "Hide" : "View"}
          </button>
          <button
            onClick={onDelete}
            disabled={deleting}
            style={{
              padding: "5px 10px",
              backgroundColor: deleting ? "#fecaca" : "#fff",
              border: "1px solid #fecaca",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#dc2626",
              cursor: deleting ? "wait" : "pointer",
            }}
          >
            {deleting ? "..." : "Delete"}
          </button>
        </td>
      </tr>
      {expanded && (
        <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
          <td colSpan={7} style={{ padding: "16px 20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
              {Object.entries(row.data).map(([key, value]) => (
                <div key={key}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>
                    {key}
                  </div>
                  <div style={{ fontSize: 13, color: "#0b1c30", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {value === null || value === undefined || value === "" ? "—" : String(value)}
                  </div>
                </div>
              ))}
              {Object.keys(row.data).length === 0 && (
                <div style={{ fontSize: 13, color: "#64748b", fontStyle: "italic" }}>No additional data</div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
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
