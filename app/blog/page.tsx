import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blogs from "../_lib/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Overseas Job Guides, Visa Tips & Worker Resources",
  description:
    "Read expert guides on overseas jobs, work visa processes, salary expectations, and worker rights. Updated resources for workers going to UAE, Saudi Arabia, Qatar, Poland, Romania.",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const sortedPosts = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = [
    "All",
    ...Array.from(new Set(sortedPosts.map((p) => p.category))),
  ];

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <>
      <main className="full-width-page">
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #0b1c30 0%, #1e3a5f 100%)",
            padding: "160px 24px 72px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "#60a5fa",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              GUIDES, TIPS & RESOURCES
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              Blog
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                maxWidth: 560,
                margin: "0 auto",
              }}
            >
              Expert guides on overseas jobs, visa processes, salary expectations,
              and everything you need to know before going abroad for work.
            </p>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section style={{ padding: "32px 24px 0", backgroundColor: "#f8fafc" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
            }}
          >
            {categories.map((cat, i) => (
              <span
                key={cat}
                style={{
                  padding: "8px 20px",
                  borderRadius: 100,
                  backgroundColor: i === 0 ? "#2563eb" : "#fff",
                  color: i === 0 ? "#fff" : "#64748b",
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  border: i === 0 ? "none" : "1px solid #e2e8f0",
                  cursor: "pointer",
                  transition: "all 150ms",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section style={{ padding: "40px 24px 0", backgroundColor: "#f8fafc" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Link
              href={`/blog/${featuredPost.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                borderRadius: 20,
                overflow: "hidden",
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                textDecoration: "none",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    minHeight: 300,
                    backgroundColor: "#e2e8f0",
                  }}
                >
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Content */}
                <div
                  style={{
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        padding: "4px 14px",
                        borderRadius: 100,
                        backgroundColor: "#eff6ff",
                        color: "#2563eb",
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      {featuredPost.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "#2563eb",
                        fontWeight: 600,
                      }}
                    >
                      FEATURED
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                      fontWeight: 800,
                      color: "#0b1c30",
                      lineHeight: 1.3,
                      marginBottom: 14,
                    }}
                  >
                    {featuredPost.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      color: "#64748b",
                      lineHeight: 1.7,
                      marginBottom: 20,
                    }}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#94a3b8",
                    }}
                  >
                    <span>{formatDate(featuredPost.date)}</span>
                    <span style={{ color: "#cbd5e1" }}>|</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#2563eb",
                      }}
                    >
                      Read Full Article
                      <span style={{ fontSize: 18 }}>&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Posts Grid */}
        <section style={{ padding: "48px 24px 80px", backgroundColor: "#f8fafc" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 800,
                color: "#0b1c30",
                marginBottom: 32,
              }}
            >
              All Articles
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 28,
              }}
            >
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    border: "1px solid #e2e8f0",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    transition: "box-shadow 200ms, transform 200ms",
                  }}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 200,
                      backgroundColor: "#e2e8f0",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    {/* Category Badge on Image */}
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        padding: "5px 14px",
                        borderRadius: 100,
                        backgroundColor: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(4px)",
                        color: "#2563eb",
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      padding: "22px 24px 24px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#0b1c30",
                        lineHeight: 1.4,
                        marginBottom: 10,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "#64748b",
                        lineHeight: 1.65,
                        flex: 1,
                        marginBottom: 16,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid #f1f5f9",
                        paddingTop: 14,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          color: "#94a3b8",
                        }}
                      >
                        <span>{formatDate(post.date)}</span>
                        <span style={{ color: "#e2e8f0" }}>|</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#2563eb",
                        }}
                      >
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: "72px 24px",
            backgroundColor: "#0b1c30",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              Have Questions?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              Can&apos;t find what you&apos;re looking for? Reach out to us
              directly — we&apos;re happy to answer any questions about overseas
              jobs and visa processes.
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
                href="https://wa.me/919815358832"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  padding: "14px 32px",
                  borderRadius: 12,
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background-color 150ms",
                }}
              >
                Ask on WhatsApp
              </a>
              <Link
                href="/contactus"
                style={{
                  display: "inline-flex",
                  padding: "14px 32px",
                  borderRadius: 12,
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "border-color 150ms",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
