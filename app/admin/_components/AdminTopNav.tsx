"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { href: "/admin/credibility", label: "Credibility" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/demands", label: "Current Demands" },
  { href: "/admin/offer", label: "Offer Pages" },
  { href: "/admin/leads", label: "Leads" },
];

export default function AdminTopNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#0b1c30",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexWrap: "wrap",
        rowGap: 8,
      }}
    >
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
          whiteSpace: "nowrap",
        }}
      >
        ← Dashboard
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8, flexWrap: "wrap" }}>
        {SECTIONS.map((s) => {
          const active = pathname === s.href || pathname.startsWith(s.href + "/");
          return (
            <Link
              key={s.href}
              href={s.href}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.02em",
                color: active ? "#0b1c30" : "rgba(255,255,255,0.7)",
                backgroundColor: active ? "#fff" : "transparent",
                textDecoration: "none",
                transition: "background-color 120ms ease, color 120ms ease",
                whiteSpace: "nowrap",
              }}
            >
              {s.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
