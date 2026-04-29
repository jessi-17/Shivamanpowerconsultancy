import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { readBlogs } from "../../api/admin/blogs/route";
import Article from "./_components/Article";
import { renderMarkdown } from "./_lib/markdown";
import "./article.css";

export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await readBlogs();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const absoluteImage = post.image.startsWith("http")
    ? post.image
    : `https://shivatravelconsultant.in${post.image}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://shivatravelconsultant.in/blog/${slug}`,
      images: [{ url: absoluteImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      authors: ["Shiva Travel & Manpower Consultants"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteImage],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await readBlogs();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  const { html, headings } = renderMarkdown(post.content);

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

  const shareUrl = `https://shivatravelconsultant.in/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": shareUrl },
    headline: post.title,
    description: post.excerpt,
    image: `https://shivatravelconsultant.in${post.image}`,
    url: shareUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
      url: "https://shivatravelconsultant.in",
      sameAs: [
        "https://www.facebook.com/shivatravelnakodar/",
        "https://www.instagram.com/shiva.travels.consultants/",
        "https://www.youtube.com/@ShivaTravelNakodar",
        "https://g.co/kgs/shivamanpowerconsultants",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
      logo: {
        "@type": "ImageObject",
        url: "https://shivatravelconsultant.in/logo.jpg",
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Shiva Travel & Manpower Consultants",
      url: "https://shivatravelconsultant.in",
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="full-width-page" style={{ backgroundColor: "#fff" }}>
        {/* ============================================================ */}
        {/*  HEADER — editorial, no jammed image                          */}
        {/* ============================================================ */}
        <header
          style={{
            backgroundColor: "#fff",
            padding: "120px 24px 0",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {/* Breadcrumb */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "#94a3b8",
              }}
            >
              <Link
                href="/blog"
                style={{ color: "#64748b", textDecoration: "none" }}
              >
                Blog
              </Link>
              <span style={{ color: "#cbd5e1" }}>/</span>
              <span style={{ color: "#64748b" }}>{post.category}</span>
            </nav>

            {/* Category */}
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 999,
                background: "#eaf1ff",
                color: "#0052dc",
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
                fontWeight: 800,
                color: "#0b1c30",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                margin: "0 0 20px",
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt — gives the reader a preview, fixes the "starts cold" feel */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
                lineHeight: 1.6,
                color: "#3b4858",
                margin: "0 0 28px",
                maxWidth: 640,
              }}
            >
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "var(--font-body)",
                fontSize: 13.5,
                color: "#64748b",
                paddingBottom: 36,
              }}
            >
              <span style={{ fontWeight: 600, color: "#0b1c30" }}>
                Shiva Travel & Manpower Consultants
              </span>
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "#cbd5e1",
                }}
              />
              <span>{formattedDate}</span>
              <span
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: "50%",
                  background: "#cbd5e1",
                }}
              />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Cover image — wide, full-bleed, then the body breathes below */}
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              borderRadius: "16px 16px 0 0",
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              boxShadow: "0 -1px 0 #f1f5f9",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1100px) 100vw, 1080px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </header>

        {/* ============================================================ */}
        {/*  ARTICLE BODY                                                 */}
        {/* ============================================================ */}
        <section style={{ background: "#fff", padding: "56px 24px 64px" }}>
          <Article html={html} headings={headings} />
        </section>

        {/* ============================================================ */}
        {/*  SHARE                                                        */}
        {/* ============================================================ */}
        <section style={{ background: "#fff", padding: "0 24px 56px" }}>
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              borderTop: "1px solid #e2e8f0",
              paddingTop: 28,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 800,
                color: "#0b1c30",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Share this article
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <ShareButton
                href={`https://wa.me/?text=${encodeURIComponent(post.title + " — " + shareUrl)}`}
                bg="#25D366"
                label="WhatsApp"
                icon={
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                }
              />
              <ShareButton
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                bg="#1877F2"
                label="Facebook"
                icon={
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                }
              />
              <ShareButton
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                bg="#0f1419"
                label="X"
                icon={
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                }
              />
              <ShareButton
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                bg="#0A66C2"
                label="LinkedIn"
                icon={
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                }
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  CTA                                                          */}
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
                color: "#fff",
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
              No hidden fees, government licensed, 20+ years of trust.
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
                style={ctaBtnStyle("#2563eb")}
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
                style={ctaBtnStyle("#22c55e")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  RELATED                                                      */}
        {/* ============================================================ */}
        {related.length > 0 && (
          <section style={{ background: "#f8fafc", padding: "64px 24px" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
                More guides for overseas job seekers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function ctaBtnStyle(bg: string): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    borderRadius: 12,
    backgroundColor: bg,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontSize: 15,
    fontWeight: 700,
    textDecoration: "none",
  };
}

function ShareButton({
  href,
  bg,
  label,
  icon,
}: {
  href: string;
  bg: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 18px",
        borderRadius: 10,
        backgroundColor: bg,
        color: "#fff",
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        {icon}
      </svg>
      {label}
    </a>
  );
}
