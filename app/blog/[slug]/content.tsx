"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import CTA from "@/components/own/CTA";
import ReactMarkdown from "react-markdown";
import blogs, { type BlogPost } from "../../_lib/data/blogs";

export default function BlogPostContent({ blog }: { blog: BlogPost }) {
  const relatedBlogs = blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* Hero */}
      <section className="top-margins px-4">
        <div className="max-w-[720px] mx-auto flex flex-col gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-medium hover:underline w-fit"
            style={{ color: "var(--primary-color)" }}
          >
            <Icon icon="si:arrow-left-duotone" width="18" height="18" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: "var(--primary-color)", color: "#fff" }}
            >
              {blog.category}
            </span>
            <span className="text-sm text-(--color-bland-400)">{blog.date}</span>
            <span className="text-sm text-(--color-bland-400)">·</span>
            <span className="text-sm text-(--color-bland-400)">{blog.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-[44px] font-extrabold leading-[120%] text-(--color-bland-800)">
            {blog.title}
          </h1>

          <p className="text-lg text-(--color-bland-500) leading-[170%]">
            {blog.excerpt}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mt-8 px-4">
        <div className="max-w-[720px] mx-auto">
          <div className="relative h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mt-12 px-4">
        <div className="max-w-[720px] mx-auto">
          <article className="blog-content">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1a1a1a", marginTop: "2.5rem", marginBottom: "1rem", lineHeight: "130%", letterSpacing: "-0.01em" }}>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#2a2a2a", marginTop: "2rem", marginBottom: "0.75rem", lineHeight: "140%" }}>
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p style={{ fontSize: "1.05rem", lineHeight: "190%", color: "#444", marginBottom: "1.25rem", fontWeight: 300 }}>
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li style={{ fontSize: "1.05rem", lineHeight: "175%", color: "#444", fontWeight: 300 }}>
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong style={{ fontWeight: 600, color: "#1a1a1a" }}>
                    {children}
                  </strong>
                ),
                table: ({ children }) => (
                  <div style={{ overflowX: "auto", marginBottom: "1.5rem", borderRadius: "12px", border: "1px solid #e5e5e5" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead style={{ background: "#f9f9f9" }}>
                    {children}
                  </thead>
                ),
                th: ({ children }) => (
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#1a1a1a", borderBottom: "1px solid #e5e5e5" }}>
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td style={{ padding: "12px 16px", color: "#555", borderBottom: "1px solid #f0f0f0" }}>
                    {children}
                  </td>
                ),
                blockquote: ({ children }) => (
                  <blockquote style={{ borderLeft: "3px solid var(--primary-color)", paddingLeft: "1.25rem", marginLeft: 0, marginBottom: "1.25rem", fontStyle: "italic", color: "#555" }}>
                    {children}
                  </blockquote>
                ),
                hr: () => (
                  <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "2rem 0" }} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </article>

          {/* Keywords tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-[#00000010]">
            {blog.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-xs border border-[#00000015] text-(--color-bland-500) bg-[#f9f9f9]"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Share & CTA */}
          <div className="mt-8 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: "var(--primary-color-50, #fef2f2)" }}>
            <div>
              <p className="font-bold text-(--color-bland-800)">Need help with Gulf placement?</p>
              <p className="text-sm text-(--color-bland-500)">Contact Shiva Manpower Consultants Nakodar — zero fees for candidates.</p>
            </div>
            <a
              href="https://wa.me/919815358832?text=Hi%2C%20I%20read%20your%20blog%20and%20want%20more%20information"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 rounded-full text-sm font-semibold cursor-pointer hover:scale-95 transition-transform flex items-center gap-2 whitespace-nowrap" style={{ background: "var(--primary-color)", color: "#fff" }}>
                <Icon icon="mdi:whatsapp" width="18" height="18" />
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="top-margins px-4">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-2xl font-bold text-(--color-bland-800) mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedBlogs.map((rb) => (
              <Link key={rb.slug} href={`/blog/${rb.slug}`}>
                <div className="group flex flex-col bg-white border border-[#00000010] rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-[130px] overflow-hidden">
                    <Image
                      src={rb.image}
                      alt={rb.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <span className="text-xs text-(--color-bland-400)">{rb.category}</span>
                    <h3 className="text-sm font-semibold text-(--color-bland-800) leading-[140%] line-clamp-2 group-hover:text-(--primary-color) transition-colors">
                      {rb.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 top-margins">
        <CTA />
      </section>

      <section className="px-4 top-margins">
        <Footer2 />
      </section>
    </div>
  );
}
