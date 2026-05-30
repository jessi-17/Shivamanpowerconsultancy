"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VersionHistory from "@/components/own/VersionHistory";

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
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setError(null);
    try {
      const res = await fetch("/api/admin/blogs");
      if (res.status === 401) {
        setError("Your admin session has expired. Log in again at /admin and reload this page.");
        setLoading(false);
        return;
      }
      if (!res.ok) {
        setError(`Could not load posts (status ${res.status}). Check server logs.`);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (err) {
      setError(`Network error — could not reach the server: ${(err as Error).message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm(`Delete "${posts.find((p) => p.slug === slug)?.title}"?`)) return;
    setDeleting(slug);
    setError(null);
    try {
      const res = await fetch("/api/admin/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
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
      setPosts(posts.filter((p) => p.slug !== slug));
    } catch (err) {
      setError(`Network error during delete: ${(err as Error).message}`);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 16, color: "#64748b" }}>
        Loading posts...
      </div>
    );
  }

  if (error && posts.length === 0) {
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
            Could not load posts
          </p>
          <p style={{ fontSize: 13, color: "#7f1d1d", marginBottom: 18, lineHeight: 1.5 }}>{error}</p>
          <button
            type="button"
            onClick={() => { setLoading(true); fetchPosts(); }}
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
    <div style={{ padding: "40px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
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

      <VersionHistory storeKey="blogs" onRestored={fetchPosts} />
    </div>
  );
}

