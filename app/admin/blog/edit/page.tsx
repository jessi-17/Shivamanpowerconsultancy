"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  keywords: string[];
}

const CATEGORIES = [
  "Dubai Jobs",
  "Gulf Jobs",
  "Europe Jobs",
  "Visa Guide",
  "Career Guide",
  "Worker Rights",
  "General",
];

const emptyPost: BlogPost = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  image: "/Blog-1.jpg",
  category: "General",
  date: new Date().toISOString().split("T")[0],
  readTime: "5 min read",
  keywords: [],
};

function EditorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editSlug = searchParams.get("slug");
  const isNew = !editSlug;

  const [post, setPost] = useState<BlogPost>(emptyPost);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (editSlug) {
      fetch("/api/admin/blogs")
        .then((r) => r.json())
        .then((blogs: BlogPost[]) => {
          const found = blogs.find((b) => b.slug === editSlug);
          if (found) setPost(found);
        });
    }
  }, [editSlug]);

  const handleSave = useCallback(async () => {
    setSaving(true);
    setSaved(false);

    const method = isNew ? "POST" : "PUT";
    await fetch("/api/admin/blogs", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);

    if (isNew) {
      router.push("/admin/blog");
    }
  }, [isNew, post, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();

    setPost({ ...post, image: data.url });
    setUploading(false);
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !post.keywords.includes(keywordInput.trim())) {
      setPost({ ...post, keywords: [...post.keywords, keywordInput.trim()] });
      setKeywordInput("");
    }
  };

  const removeKeyword = (kw: string) => {
    setPost({ ...post, keywords: post.keywords.filter((k) => k !== kw) });
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 700,
    color: "#64748b",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    backgroundColor: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "#0b1c30",
    outline: "none",
    transition: "border-color 150ms",
  };

  return (
    <div style={{ padding: "120px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/admin/blog"
            style={{
              width: 36, height: 36, borderRadius: 8, backgroundColor: "#f1f5f9",
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none", border: "1px solid #e5e7eb",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
          </Link>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#0b1c30" }}>
            {isNew ? "New Post" : "Edit Post"}
          </h1>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => setPreview(!preview)}
            style={{
              padding: "10px 20px", backgroundColor: "#f1f5f9", border: "1px solid #e5e7eb",
              borderRadius: 8, fontFamily: "var(--font-display)", fontSize: 13,
              fontWeight: 600, color: "#0b1c30", cursor: "pointer",
            }}
          >
            {preview ? "Edit" : "Preview"}
          </button>
          <button
            onClick={handleSave}
            disabled={saving || !post.title}
            style={{
              padding: "10px 24px",
              backgroundColor: saving ? "#93c5fd" : "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: saving ? "wait" : "pointer",
              boxShadow: "0 0 16px rgba(0,82,220,0.3)",
            }}
          >
            {saving ? "Saving..." : saved ? "Saved!" : isNew ? "Publish" : "Update"}
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>
        {/* Main editor */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Title */}
          <div>
            <label style={labelStyle}>Title</label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="e.g. How to Get a Job in Dubai from Punjab – Complete Guide 2025"
              style={{ ...inputStyle, fontSize: 18, fontFamily: "var(--font-display)", fontWeight: 700, padding: "16px 14px" }}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label style={labelStyle}>Excerpt</label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="e.g. Complete guide on how to get a work visa for Dubai from Punjab. Learn about documents, fees, process timeline, and how Shiva Manpower can help."
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Content */}
          <div>
            <label style={labelStyle}>Content (Markdown)</label>
            {preview ? (
              <div
                style={{
                  padding: 24, backgroundColor: "#fff", borderRadius: 8,
                  border: "1px solid #e5e7eb", minHeight: 400,
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "#0b1c30", lineHeight: 1.8,
                  whiteSpace: "pre-wrap",
                }}
              >
                {post.content || "Nothing to preview..."}
              </div>
            ) : (
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                placeholder={"Write in Markdown format. Example:\n\n## Why Dubai?\n\nDubai offers tax-free salaries and opportunities in construction, hospitality, and logistics.\n\n### Step 1: Find a Genuine Agency\n\nAlways verify the agency's MEA license...\n\n- Point one\n- Point two\n\n**Bold text** and *italic text* work too."}
                rows={20}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: 400,
                  fontFamily: "monospace",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Featured Image */}
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <label style={labelStyle}>Featured Image</label>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                borderRadius: 8,
                backgroundColor: "#e5e7eb",
                backgroundImage: `url(${post.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: 12,
              }}
            />
            <label
              style={{
                display: "block",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f1f5f9",
                borderRadius: 8,
                border: "1px dashed #cbd5e1",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                color: "#64748b",
                cursor: "pointer",
              }}
            >
              {uploading ? "Uploading..." : "Upload Image"}
              <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
            </label>
          </div>

          {/* Category */}
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <label style={labelStyle}>Category</label>
            <select
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Date & Read Time */}
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Date</label>
              <input
                type="date"
                value={post.date}
                onChange={(e) => setPost({ ...post, date: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Read Time</label>
              <input
                value={post.readTime}
                onChange={(e) => setPost({ ...post, readTime: e.target.value })}
                placeholder="e.g. 5 min read"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Slug */}
          <div style={{ backgroundColor: "#fff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb" }}>
            <label style={labelStyle}>Slug (URL)</label>
            <input
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              placeholder="auto-generated-from-title"
              style={{ ...inputStyle, fontSize: 12, fontFamily: "monospace" }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8", marginTop: 4 }}>
              Leave blank to auto-generate from title
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function EditBlogPage() {
  return (
    <Suspense fallback={<div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "var(--font-body)", color: "#64748b" }}>Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
