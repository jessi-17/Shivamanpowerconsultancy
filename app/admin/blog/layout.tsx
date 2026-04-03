"use client";

import { useState, useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin-auth");
    if (stored === "true") setAuthed(true);
    setChecking(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      sessionStorage.setItem("admin-auth", "true");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (checking) return null;

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9ff" }}>
        <form onSubmit={handleLogin} style={{ width: 360, padding: 40, backgroundColor: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#0b1c30", marginBottom: 8 }}>Admin Login</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", marginBottom: 24 }}>Enter the admin password to manage blog posts.</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#f8fafc",
              border: error ? "1px solid #dc2626" : "1px solid #e5e7eb",
              borderRadius: 8,
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "#0b1c30",
              outline: "none",
              marginBottom: 16,
            }}
          />

          {error && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#dc2626", marginBottom: 12 }}>
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
