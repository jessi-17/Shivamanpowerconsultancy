"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface AdminCard {
  href: string;
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
  accent: string;
}

const cards: AdminCard[] = [
  {
    href: "/admin/credibility",
    title: "Credibility Content",
    description: "Visa stamps, deployed feed, airport photos, destination videos.",
    badge: "Mobile",
    accent: "#0052dc",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      </svg>
    ),
  },
  {
    href: "/admin/blog",
    title: "Blog Posts",
    description: "Write, edit, and publish blog articles.",
    accent: "#0ea5e9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    href: "/admin/demands",
    title: "Current Demands",
    description: "Job postings & employer demand lists shown on the site.",
    accent: "#16a34a",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    href: "/admin/offer",
    title: "Offer Landing Pages",
    description: "Gulf & Europe landing page hero, marquee images, copy.",
    accent: "#f59e0b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    href: "/admin/leads",
    title: "Leads",
    description: "View, filter, and export inquiries from website forms.",
    accent: "#8b5cf6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
  },
];

export default function AdminDashboardPage() {
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

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    sessionStorage.removeItem("admin-auth");
    setAuthed(false);
  };

  if (checking) return null;

  if (!authed) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9ff" }}>
        <form onSubmit={handleLogin} style={{ width: 360, padding: 40, backgroundColor: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#0b1c30", marginBottom: 8 }}>Admin Login</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", marginBottom: 24 }}>Enter the admin password to access the dashboard.</p>
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

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9ff" }}>
      {/* Top bar */}
      <header
        style={{
          backgroundColor: "#0b1c30",
          color: "#fff",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "#60a5fa", textTransform: "uppercase", marginBottom: 4 }}>
            Shiva Manpower · Admin
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>
            Dashboard
          </h1>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 18px",
            backgroundColor: "rgba(255,255,255,0.08)",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 700,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </header>

      {/* Cards */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 32px 80px" }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 6 }}>
            Sections
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
            Tap any card to edit. Updates publish to the live site within a few seconds.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: 22,
                backgroundColor: "#fff",
                borderRadius: 16,
                border: "1px solid #e5e7eb",
                textDecoration: "none",
                transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(11,28,48,0.08)";
                e.currentTarget.style.borderColor = c.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    backgroundColor: `${c.accent}15`,
                    color: c.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {c.icon}
                </div>
                {c.badge && (
                  <span
                    style={{
                      padding: "3px 9px",
                      borderRadius: 999,
                      backgroundColor: `${c.accent}15`,
                      color: c.accent,
                      fontFamily: "var(--font-display)",
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
                  {c.description}
                </p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: 8, fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: c.accent }}>
                Open →
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
