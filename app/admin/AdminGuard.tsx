"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminTopNav from "./_components/AdminTopNav";

/**
 * Shared guard for all admin subpages. The real enforcement is server-side
 * (middleware redirects unauthenticated visitors, every API route checks the
 * signed cookie) — this component verifies the session on mount so an expired
 * session bounces back to the login instead of rendering a broken editor,
 * and renders the shared admin nav bar.
 */
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null);
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
      <AdminTopNav onLogout={handleLogout} />
      {children}
    </>
  );
}
