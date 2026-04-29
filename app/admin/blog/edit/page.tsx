"use client";

import { useEffect, useMemo, useRef, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { renderMarkdown } from "../../../blog/[slug]/_lib/markdown";
import "../../../blog/[slug]/article.css";

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

/* ------------------------------------------------------------------ */
/*  Toolbar buttons                                                    */
/* ------------------------------------------------------------------ */

interface ToolbarAction {
  label: string;
  hint: string;
  /** wraps selection or inserts at cursor */
  wrap?: { before: string; after: string };
  /** inserts a block at the start of the line(s) */
  block?: string;
  /** inserts a multi-line snippet at the cursor */
  snippet?: string;
}

const TOOLBAR: ToolbarAction[] = [
  { label: "H2", hint: "Section heading", block: "## " },
  { label: "H3", hint: "Sub heading", block: "### " },
  { label: "B", hint: "Bold", wrap: { before: "**", after: "**" } },
  { label: "I", hint: "Italic", wrap: { before: "*", after: "*" } },
  { label: "Link", hint: "Hyperlink", wrap: { before: "[", after: "](https://)" } },
  { label: "List", hint: "Bullet list", block: "- " },
  { label: "1.", hint: "Numbered list", block: "1. " },
  { label: "Quote", hint: "Blockquote", block: "> " },
  {
    label: "Tip",
    hint: "Tip callout (green)",
    snippet: "\n> [!TIP]\n> Useful piece of advice or shortcut goes here.\n\n",
  },
  {
    label: "Note",
    hint: "Note callout (blue)",
    snippet: "\n> [!NOTE]\n> Background information the reader should know.\n\n",
  },
  {
    label: "Warn",
    hint: "Warning callout (orange)",
    snippet: "\n> [!WARNING]\n> Heads up about a risk or scam to avoid.\n\n",
  },
  { label: "—", hint: "Divider", snippet: "\n\n---\n\n" },
  {
    label: "Img",
    hint: "Image with caption",
    snippet: '\n![alt text](/your-image.jpg "Optional caption")\n\n',
  },
  {
    label: "Table",
    hint: "Insert table",
    snippet:
      "\n| Column A | Column B |\n|----------|----------|\n| Value    | Value    |\n| Value    | Value    |\n",
  },
];

const CHEATSHEET: { syntax: string; result: string }[] = [
  { syntax: "## Section title", result: "Big heading with an accent bar" },
  { syntax: "### Sub heading", result: "Smaller heading" },
  { syntax: "**bold** *italic*", result: "Inline emphasis" },
  { syntax: "[text](https://...)", result: "Link" },
  { syntax: "- item / 1. item", result: "Lists" },
  { syntax: "> quote", result: "Pull-quote" },
  { syntax: "> [!TIP] / [!NOTE] / [!WARNING]", result: "Coloured callout box" },
  { syntax: "---", result: "Divider line" },
  { syntax: '![alt](/img.jpg "caption")', result: "Image with caption" },
  { syntax: "| a | b |", result: "Table (use | --- | row)" },
];

/* ------------------------------------------------------------------ */

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
  const [tab, setTab] = useState<"write" | "preview">("write");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    if (isNew) router.push("/admin/blog");
  }, [isNew, post, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    setPost((p) => ({ ...p, image: data.url }));
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

  /* -------- Toolbar action -------- */
  const applyAction = (action: ToolbarAction) => {
    const ta = textareaRef.current;
    if (!ta) return;
    const { selectionStart: s, selectionEnd: e } = ta;
    const value = ta.value;
    const selected = value.slice(s, e);

    let next: string;
    let cursorStart = s;
    let cursorEnd = e;

    if (action.wrap) {
      const insert = `${action.wrap.before}${selected || "text"}${action.wrap.after}`;
      next = value.slice(0, s) + insert + value.slice(e);
      cursorStart = s + action.wrap.before.length;
      cursorEnd = cursorStart + (selected || "text").length;
    } else if (action.block) {
      // Insert block prefix at the start of every selected line (or current line)
      const lineStart = value.lastIndexOf("\n", s - 1) + 1;
      const before = value.slice(0, lineStart);
      const middle = value.slice(lineStart, e);
      const after = value.slice(e);
      const lines = (middle || "text").split("\n");
      const prefixed = lines.map((l) => action.block + l).join("\n");
      next = before + prefixed + after;
      cursorStart = lineStart + action.block.length;
      cursorEnd = cursorStart + prefixed.length - action.block.length;
    } else if (action.snippet) {
      next = value.slice(0, s) + action.snippet + value.slice(e);
      cursorStart = cursorEnd = s + action.snippet.length;
    } else {
      return;
    }

    setPost((p) => ({ ...p, content: next }));
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(cursorStart, cursorEnd);
    });
  };

  /* -------- Live preview html -------- */
  const previewHtml = useMemo(() => renderMarkdown(post.content || "").html, [post.content]);

  /* -------- Word / read-time -------- */
  const wordCount = useMemo(() => {
    return (post.content.trim().match(/\S+/g) || []).length;
  }, [post.content]);
  const estReadTime = Math.max(1, Math.round(wordCount / 220));

  /* -------- Styles -------- */
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
    <div style={{ padding: "120px 32px 80px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/admin/blog"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              border: "1px solid #e5e7eb",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0b1c30"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 800,
              color: "#0b1c30",
            }}
          >
            {isNew ? "New Post" : "Edit Post"}
          </h1>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "#94a3b8",
            }}
          >
            {wordCount} words · ~{estReadTime} min read
          </span>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 320px",
          gap: 28,
        }}
      >
        {/* Main editor */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
          {/* Title */}
          <div>
            <label style={labelStyle}>Title</label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="e.g. How to Get a Job in Dubai from Punjab – Complete Guide 2025"
              style={{
                ...inputStyle,
                fontSize: 18,
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                padding: "16px 14px",
              }}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label style={labelStyle}>
              Excerpt <span style={{ color: "#94a3b8", fontWeight: 500, textTransform: "none" }}>— shows under the title on the article page & in cards</span>
            </label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="One short paragraph that summarises the article (1–2 sentences)."
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Content with tabs + toolbar */}
          <div>
            {/* Tab switcher */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <label style={{ ...labelStyle, marginBottom: 0 }}>Content</label>
              <div
                style={{
                  display: "inline-flex",
                  background: "#f1f5f9",
                  padding: 3,
                  borderRadius: 8,
                }}
              >
                {(["write", "preview"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "6px 14px",
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: tab === t ? "#0b1c30" : "#64748b",
                      backgroundColor: tab === t ? "#fff" : "transparent",
                      borderRadius: 6,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: tab === t ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
                      textTransform: "capitalize",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {tab === "write" ? (
              <>
                {/* Toolbar */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    padding: "8px 10px",
                    background: "#f8fafc",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px 8px 0 0",
                    borderBottom: "none",
                  }}
                >
                  {TOOLBAR.map((a) => (
                    <button
                      key={a.label}
                      type="button"
                      title={a.hint}
                      onClick={() => applyAction(a)}
                      style={{
                        padding: "6px 10px",
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#0b1c30",
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: 6,
                        cursor: "pointer",
                        minWidth: 32,
                      }}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>

                <textarea
                  ref={textareaRef}
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                  placeholder={
                    "Start with a strong opening paragraph — this becomes the lede with a drop cap.\n\n## A clear section heading\n\nWrite naturally. Use short paragraphs. Add a callout when something matters:\n\n> [!TIP]\n> Use callouts sparingly — they lose impact if there are too many.\n\n### A specific point\n\n- Use lists for steps or items\n- Keep them parallel\n- Don't go past 6 items\n\nUse a divider when you change topic:\n\n---\n\nAdd images with captions: ![alt](/img.jpg \"caption text\")"
                  }
                  rows={24}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 480,
                    fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    borderRadius: "0 0 8px 8px",
                  }}
                />

                {/* Cheat sheet */}
                <details
                  style={{
                    marginTop: 12,
                    background: "#f8fafc",
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    padding: "10px 14px",
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#0b1c30",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Markdown reference
                  </summary>
                  <table
                    style={{
                      width: "100%",
                      marginTop: 12,
                      borderCollapse: "collapse",
                      fontSize: 12.5,
                    }}
                  >
                    <tbody>
                      {CHEATSHEET.map((row) => (
                        <tr key={row.syntax}>
                          <td
                            style={{
                              padding: "6px 10px 6px 0",
                              fontFamily: "ui-monospace, monospace",
                              color: "#0052dc",
                              whiteSpace: "nowrap",
                              verticalAlign: "top",
                            }}
                          >
                            {row.syntax}
                          </td>
                          <td
                            style={{
                              padding: "6px 0",
                              color: "#475569",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {row.result}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </details>
              </>
            ) : (
              /* PREVIEW — renders with the same styles as the live article */
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: "32px 28px",
                  minHeight: 480,
                }}
              >
                {post.content ? (
                  <div
                    className="article-body"
                    dangerouslySetInnerHTML={{ __html: previewHtml }}
                  />
                ) : (
                  <p style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}>
                    Nothing to preview yet — start writing.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Featured Image */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #e5e7eb",
            }}
          >
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
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>
          </div>

          {/* Category */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #e5e7eb",
            }}
          >
            <label style={labelStyle}>Category</label>
            <select
              value={post.category}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Read Time */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #e5e7eb",
            }}
          >
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
                placeholder={`auto: ${estReadTime} min read`}
                style={inputStyle}
              />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  color: "#94a3b8",
                  marginTop: 4,
                }}
              >
                Auto-estimate from content: ~{estReadTime} min read
              </p>
            </div>
          </div>

          {/* Slug */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #e5e7eb",
            }}
          >
            <label style={labelStyle}>Slug (URL)</label>
            <input
              value={post.slug}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              placeholder="auto-generated-from-title"
              style={{ ...inputStyle, fontSize: 12, fontFamily: "monospace" }}
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "#94a3b8",
                marginTop: 4,
              }}
            >
              Leave blank to auto-generate from title
            </p>
          </div>

          {/* Keywords */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 20,
              border: "1px solid #e5e7eb",
            }}
          >
            <label style={labelStyle}>SEO Keywords</label>
            <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
              <input
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addKeyword();
                  }
                }}
                placeholder="Add keyword + Enter"
                style={{ ...inputStyle, fontSize: 12 }}
              />
              <button
                type="button"
                onClick={addKeyword}
                style={{
                  padding: "0 14px",
                  background: "#f1f5f9",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0b1c30",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  onClick={() => removeKeyword(kw)}
                  style={{
                    padding: "4px 10px",
                    background: "#eaf1ff",
                    color: "#0052dc",
                    borderRadius: 999,
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  title="Click to remove"
                >
                  {kw} ×
                </span>
              ))}
              {post.keywords.length === 0 && (
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    color: "#94a3b8",
                  }}
                >
                  No keywords yet
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EditBlogPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: "120px 32px",
            textAlign: "center",
            fontFamily: "var(--font-body)",
            color: "#64748b",
          }}
        >
          Loading editor...
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
