import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import blogs from "../../_lib/data/blogs";

/* ------------------------------------------------------------------ */
/*  Simple Markdown-to-HTML converter (no external libraries)          */
/* ------------------------------------------------------------------ */

function markdownToHtml(md: string): string {
  const lines = md.trim().split("\n");
  const htmlParts: string[] = [];
  let inTable = false;
  let inList = false;
  let tableRows: string[][] = [];

  function flushTable() {
    if (tableRows.length === 0) return;
    let html = '<table style="width:100%;border-collapse:collapse;margin:24px 0;font-size:15px;line-height:1.6">';
    tableRows.forEach((cells, rowIdx) => {
      const tag = rowIdx === 0 ? "th" : "td";
      const bgColor = rowIdx === 0 ? "#f1f5f9" : rowIdx % 2 === 0 ? "#f8fafc" : "#ffffff";
      html += `<tr style="background:${bgColor}">`;
      cells.forEach((cell) => {
        const align = cell.trim().startsWith("---") ? "" : "";
        html += `<${tag} style="padding:10px 14px;border:1px solid #e2e8f0;text-align:left${align}">${inlineFormat(cell.trim())}</${tag}>`;
      });
      html += "</tr>";
    });
    html += "</table>";
    htmlParts.push(html);
    tableRows = [];
  }

  function flushList() {
    if (inList) {
      htmlParts.push("</ul>");
      inList = false;
    }
  }

  function inlineFormat(text: string): string {
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight:700;color:#0b1c30">$1</strong>');
    // Italic
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
    // Links
    text = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" style="color:#2563eb;text-decoration:underline">$1</a>'
    );
    return text;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip table separator rows (|---|---|)
    if (/^\|[\s\-|]+\|$/.test(trimmed)) {
      continue;
    }

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      if (!inTable) {
        flushList();
        inTable = true;
      }
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
      inTable = false;
    }

    // Blank line
    if (trimmed === "") {
      flushList();
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      flushList();
      const text = inlineFormat(trimmed.slice(4));
      htmlParts.push(
        `<h3 style="font-family:var(--font-display);font-size:18px;font-weight:700;color:#0b1c30;margin:28px 0 12px;line-height:1.4">${text}</h3>`
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      const text = inlineFormat(trimmed.slice(3));
      htmlParts.push(
        `<h2 style="font-family:var(--font-display);font-size:24px;font-weight:700;color:#0b1c30;margin:36px 0 14px;line-height:1.3">${text}</h2>`
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(trimmed)) {
      if (!inList) {
        htmlParts.push(
          '<ol style="padding-left:24px;margin:12px 0;list-style:decimal">'
        );
        inList = true;
      }
      const text = inlineFormat(trimmed.replace(/^\d+\.\s/, ""));
      htmlParts.push(
        `<li style="font-family:var(--font-body);font-size:16px;color:#374151;line-height:1.8;margin-bottom:6px">${text}</li>`
      );
      continue;
    }

    // Unordered list
    if (trimmed.startsWith("- ")) {
      if (!inList) {
        htmlParts.push(
          '<ul style="padding-left:24px;margin:12px 0;list-style:disc">'
        );
        inList = true;
      }
      const text = inlineFormat(trimmed.slice(2));
      htmlParts.push(
        `<li style="font-family:var(--font-body);font-size:16px;color:#374151;line-height:1.8;margin-bottom:6px">${text}</li>`
      );
      continue;
    }

    // Italic/emphasis line (single * wrapping)
    if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) {
      flushList();
      const text = inlineFormat(trimmed);
      htmlParts.push(
        `<p style="font-family:var(--font-body);font-size:14px;color:#64748b;line-height:1.7;margin:8px 0;font-style:italic">${text}</p>`
      );
      continue;
    }

    // Regular paragraph
    flushList();
    const text = inlineFormat(trimmed);
    htmlParts.push(
      `<p style="font-family:var(--font-body);font-size:16px;color:#374151;line-height:1.8;margin:14px 0">${text}</p>`
    );
  }

  // Flush any remaining open elements
  flushList();
  if (inTable) flushTable();

  return htmlParts.join("\n");
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const articleHtml = markdownToHtml(post.content);

  // Related posts: same category first, then fill with others
  const sameCat = blogs.filter(
    (b) => b.category === post.category && b.slug !== post.slug
  );
  const otherPosts = blogs.filter(
    (b) => b.category !== post.category && b.slug !== post.slug
  );
  const related = [...sameCat, ...otherPosts].slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
    },
    publisher: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="full-width-page">
        {/* ============================================================ */}
        {/*  HERO HEADER                                                  */}
        {/* ============================================================ */}
        <section
          style={{
            background: "linear-gradient(135deg, #0b1c30 0%, #0a2540 100%)",
            padding: "140px 24px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dot pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div
            style={{
              maxWidth: 750,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Breadcrumb */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <Link
                href="/blog"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>
                {post.category}
              </span>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
              <span
                style={{
                  color: "rgba(255,255,255,0.4)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 200,
                }}
              >
                {post.title}
              </span>
            </nav>

            {/* Category badge */}
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: 20,
                backgroundColor: "rgba(37,99,235,0.15)",
                color: "#60a5fa",
                fontFamily: "var(--font-display)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: 20,
              }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              {post.title}
            </h1>

            {/* Date & read time */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 36,
              }}
            >
              <span>{formattedDate}</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.3)",
                }}
              />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Blog image */}
          <div
            style={{
              maxWidth: 750,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
              borderRadius: "16px 16px 0 0",
              overflow: "hidden",
              aspectRatio: "16/9",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 750px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>

        {/* ============================================================ */}
        {/*  ARTICLE BODY                                                 */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "48px 24px 64px",
          }}
        >
          <article
            style={{
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: articleHtml }}
              style={{
                overflowX: "auto",
              }}
            />
          </article>
        </section>

        {/* ============================================================ */}
        {/*  CTA SECTION                                                  */}
        {/* ============================================================ */}
        <section
          style={{
            background: "linear-gradient(135deg, #0b1c30 0%, #0a2540 100%)",
            padding: "64px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Ready to start your overseas career?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Get in touch with our team for genuine job opportunities abroad.
              Zero fees, government licensed, 25+ years of trust.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+919814820432"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 12,
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 150ms",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="https://wa.me/919815358832"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 12,
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 150ms",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  RELATED POSTS                                                */}
        {/* ============================================================ */}
        {related.length > 0 && (
          <section
            style={{
              backgroundColor: "#f8fafc",
              padding: "64px 24px",
            }}
          >
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#0b1c30",
                  marginBottom: 8,
                  textAlign: "center",
                }}
              >
                Keep Reading
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "#64748b",
                  textAlign: "center",
                  marginBottom: 36,
                }}
              >
                More guides and resources for overseas job seekers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: 20,
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 14,
                      overflow: "hidden",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      textDecoration: "none",
                      transition: "box-shadow 150ms, transform 150ms",
                    }}
                  >
                    {/* Card image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    {/* Card body */}
                    <div style={{ padding: "16px 18px 20px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 10,
                        }}
                      >
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: 10,
                            backgroundColor: "#f1f5f9",
                            fontFamily: "var(--font-display)",
                            fontSize: 11,
                            fontWeight: 700,
                            color: "#2563eb",
                          }}
                        >
                          {r.category}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: 11,
                            color: "#94a3b8",
                          }}
                        >
                          {r.readTime}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#0b1c30",
                          lineHeight: 1.35,
                          marginBottom: 8,
                        }}
                      >
                        {r.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          color: "#64748b",
                          lineHeight: 1.6,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
