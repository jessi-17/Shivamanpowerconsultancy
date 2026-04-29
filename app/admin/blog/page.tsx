"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchPosts = async () => {
    const res = await fetch("/api/admin/blogs");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete "${posts.find((p) => p.slug === slug)?.title}"?`)) return;
    setDeleting(slug);
    await fetch("/api/admin/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    setPosts(posts.filter((p) => p.slug !== slug));
    setDeleting(null);
  };

  if (loading) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 16, color: "#64748b" }}>
        Loading posts...
      </div>
    );
  }

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Admin nav */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <AdminNavLink href="/admin/blog" label="Blog" active />
        <AdminNavLink href="/admin/offer" label="Ads Landing Page" />
        <AdminNavLink href="/admin/demands" label="Current Demands" />
        <AdminNavLink href="/admin/leads" label="Leads" />
      </div>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#0b1c30", marginBottom: 4 }}>
            Blog Manager
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>
            {posts.length} posts published
          </p>
        </div>
        <Link
          href="/admin/blog/edit"
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
          + New Post
        </Link>
      </div>

      {/* Posts table */}
      <div style={{ backgroundColor: "#fff", borderRadius: 16, border: "1px solid #e5e7eb", overflow: "hidden" }}>
        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 140px 120px 100px 100px",
            gap: 16,
            padding: "14px 24px",
            backgroundColor: "#f8fafc",
            borderBottom: "1px solid #e5e7eb",
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 700,
            color: "#64748b",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <span>Title</span>
          <span>Category</span>
          <span>Date</span>
          <span>Read Time</span>
          <span>Actions</span>
        </div>

        {/* Rows */}
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 140px 120px 100px 100px",
              gap: 16,
              padding: "16px 24px",
              borderBottom: "1px solid #f1f5f9",
              alignItems: "center",
              transition: "background-color 150ms",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: "#e5e7eb",
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0b1c30",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {post.title}
              </span>
            </div>

            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                backgroundColor: "#eff4ff",
                borderRadius: 20,
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                color: "#0052dc",
                width: "fit-content",
              }}
            >
              {post.category}
            </span>

            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
              {post.date}
            </span>

            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
              {post.readTime}
            </span>

            <div style={{ display: "flex", gap: 8 }}>
              <Link
                href={`/admin/blog/edit?slug=${post.slug}`}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: 6,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#0b1c30",
                  textDecoration: "none",
                  border: "1px solid #e5e7eb",
                }}
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post.slug)}
                disabled={deleting === post.slug}
                style={{
                  padding: "6px 12px",
                  backgroundColor: deleting === post.slug ? "#fecaca" : "#fff",
                  borderRadius: 6,
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                  cursor: "pointer",
                }}
              >
                {deleting === post.slug ? "..." : "Del"}
              </button>
            </div>
          </div>
        ))}
      </div>
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
