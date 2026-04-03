"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filtered = query.length >= 2
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <div style={{ position: "relative", flex: "1 1 280px", maxWidth: 400 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 16px",
        backgroundColor: "var(--surface-container-lowest)",
        borderRadius: 12,
        border: "1.5px solid var(--outline-variant)",
        transition: "border-color 150ms",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--outline)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          style={{
            flex: 1, border: "none", outline: "none",
            backgroundColor: "transparent",
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--on-surface)",
          }}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setIsOpen(false); }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--outline)", fontSize: 18, lineHeight: 1,
              padding: 0,
            }}
          >
            &times;
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {isOpen && filtered.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
          backgroundColor: "var(--surface-container-lowest)",
          borderRadius: 14,
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--outline-variant)",
          zIndex: 50, overflow: "hidden",
          maxHeight: 400, overflowY: "auto",
        }}>
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 16px",
                textDecoration: "none",
                borderBottom: "1px solid var(--surface-container)",
                transition: "background 100ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--surface-container-low)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <div style={{
                position: "relative", width: 48, height: 48,
                borderRadius: 8, overflow: "hidden", flexShrink: 0,
              }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="48px" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 14,
                  fontWeight: 700, color: "var(--on-surface)",
                  overflow: "hidden", textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}>
                  {post.title}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 12,
                  color: "var(--outline)", marginTop: 2,
                }}>
                  {post.category} &middot; {post.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && filtered.length === 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
          backgroundColor: "var(--surface-container-lowest)",
          borderRadius: 14, boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--outline-variant)",
          zIndex: 50, padding: "20px 16px", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--outline)",
          }}>
            No articles found for &ldquo;{query}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
