"use client";

import { useEffect, useState } from "react";

interface HistoryEntry {
  id: number;
  key: string;
  value: unknown;
  created_at: string;
  note: string | null;
}

interface Props {
  /** Storage key — "offer", "demands", or "blogs" */
  storeKey: string;
  /** Refresh trigger — change this prop to force a refetch (e.g. after a save). */
  refreshKey?: number;
  /** Called after a successful restore so the parent page can re-fetch live state. */
  onRestored?: () => void;
}

export default function VersionHistory({ storeKey, refreshKey, onRestored }: Props) {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`/api/admin/history?key=${encodeURIComponent(storeKey)}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        setEntries(Array.isArray(data?.entries) ? data.entries : []);
      })
      .catch(() => {
        if (!cancelled) setEntries([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [storeKey, refreshKey]);

  const handleRestore = async (id: number, label: string) => {
    if (!confirm(`Restore "${label}" version?\n\nThis replaces current ${storeKey} with this version. The current state will be auto-snapshotted to history first, so you can still rollback.`)) return;
    setRestoring(id);
    try {
      const res = await fetch("/api/admin/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ historyId: id }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        alert(`Restore failed: HTTP ${res.status} ${text}`);
        return;
      }
      onRestored?.();
      // Re-fetch list (the prior live version is now in history too)
      const refreshed = await fetch(`/api/admin/history?key=${encodeURIComponent(storeKey)}`);
      const data = await refreshed.json();
      setEntries(Array.isArray(data?.entries) ? data.entries : []);
    } catch (err) {
      alert(`Restore error: ${(err as Error).message}`);
    } finally {
      setRestoring(null);
    }
  };

  const summary = (value: unknown): string => {
    if (Array.isArray(value)) return `${value.length} items`;
    if (value && typeof value === "object") return `${Object.keys(value).length} fields`;
    return typeof value;
  };

  return (
    <div
      style={{
        marginTop: 24,
        backgroundColor: "#fff",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "14px 20px",
          backgroundColor: "transparent",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "var(--font-display)",
          fontSize: 14,
          fontWeight: 700,
          color: "#0b1c30",
        }}
      >
        <span>
          🕐 Version History
          {!loading && (
            <span style={{ color: "#94a3b8", fontWeight: 500, marginLeft: 8 }}>
              ({entries.length} {entries.length === 1 ? "snapshot" : "snapshots"})
            </span>
          )}
        </span>
        <span style={{ fontSize: 12, color: "#64748b" }}>{open ? "Hide" : "Show"}</span>
      </button>

      {open && (
        <div style={{ borderTop: "1px solid #e5e7eb", padding: "8px 0" }}>
          {loading ? (
            <div style={{ padding: 16, color: "#64748b", fontSize: 13 }}>Loading…</div>
          ) : entries.length === 0 ? (
            <div style={{ padding: 16, color: "#64748b", fontSize: 13 }}>
              No previous versions yet. Snapshots are created automatically when you save changes.
            </div>
          ) : (
            <div style={{ maxHeight: 400, overflowY: "auto" }}>
              {entries.map((entry) => {
                const date = new Date(entry.created_at);
                const dateStr = date.toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });
                return (
                  <div
                    key={entry.id}
                    style={{
                      padding: "10px 20px",
                      borderBottom: "1px solid #f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>
                        {dateStr}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#64748b", marginTop: 2 }}>
                        {summary(entry.value)}
                        {entry.note ? ` · ${entry.note}` : ""}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRestore(entry.id, dateStr)}
                      disabled={restoring === entry.id}
                      style={{
                        padding: "6px 14px",
                        backgroundColor: restoring === entry.id ? "#fde68a" : "#fff",
                        border: "1px solid #f59e0b",
                        color: "#92400e",
                        borderRadius: 6,
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: restoring === entry.id ? "wait" : "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {restoring === entry.id ? "Restoring…" : "Restore"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
