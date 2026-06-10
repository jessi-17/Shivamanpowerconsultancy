"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/admin/credibility", label: "Credibility" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/demands", label: "Demands" },
  { href: "/admin/offer", label: "Offer Pages" },
  { href: "/admin/leads", label: "Leads" },
];

/**
 * Shared guard for all admin subpages. The real enforcement is server-side
 * (middleware redirects unauthenticated visitors, every API route checks the
 * signed cookie) — this component verifies the session on mount so an expired
 * session bounces back to the login instead of rendering a broken editor,
 * and renders the shared admin nav bar.
 */
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/auth", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (d?.authed === true) {
          setAuthed(true);
        } else {
          router.replace("/admin");
        }
      })
      .catch(() => router.replace("/admin"));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.replace("/admin");
  };

  if (authed !== true) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9ff" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#94a3b8" }}>Checking session…</p>
      </div>
    );
  }

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "8px 16px",
          backgroundColor: "#0b1c30",
          overflowX: "auto",
        }}
      >
        <Link
          href="/admin"
          style={{
            padding: "7px 12px",
            borderRadius: 8,
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: 800,
            color: "#60a5fa",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          ← Dashboard
        </Link>
        <span style={{ width: 1, height: 18, backgroundColor: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
        {NAV.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "7px 12px",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                color: active ? "#fff" : "rgba(255,255,255,0.6)",
                backgroundColor: active ? "rgba(255,255,255,0.12)" : "transparent",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          style={{
            marginLeft: "auto",
            padding: "7px 12px",
            borderRadius: 8,
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: 700,
            color: "rgba(255,255,255,0.7)",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.18)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Log out
        </button>
      </nav>
      {children}
    </>
  );
}
