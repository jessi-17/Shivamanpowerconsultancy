import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { readBlogs } from "../api/admin/blogs/route";
import BlogSearch from "@/components/own/BlogSearch";

export const dynamic = "force-dynamic";

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

export default async function Blog() {
  const blogs = await readBlogs();
  const sortedPosts = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const categories = [
    "All",
    ...Array.from(new Set(sortedPosts.map((p) => p.category))),
  ];

  const featuredPost = sortedPosts[0];
  const gridPosts = sortedPosts.slice(1, 10);
  const stayInformedFeatured = sortedPosts.length > 10 ? sortedPosts[10] : sortedPosts[sortedPosts.length - 1];
  const stayInformedSide = sortedPosts.length > 11 ? sortedPosts.slice(11, 13) : sortedPosts.slice(Math.max(sortedPosts.length - 2, 1));

  return (
    <>
      <style>{`
        .blog-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .blog-hero-images { position: relative; height: 420px; }
        .blog-featured-card {
          display: grid;
          grid-template-columns: 7fr 5fr;
        }
        .blog-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .blog-stay-informed-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .blog-newsletter-form {
          display: flex;
          gap: 12px;
          max-width: 460px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .blog-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .blog-hero-images { display: none; }
          .blog-hero-stats { gap: 24px !important; }
          .blog-featured-card { grid-template-columns: 1fr; }
          .blog-featured-card-img { min-height: 240px !important; }
          .blog-featured-card-body { padding: 28px 20px !important; }
          .blog-filter-bar { flex-direction: column; align-items: flex-start !important; }
          .blog-bento-grid { grid-template-columns: 1fr; }
          .blog-stay-informed-grid { grid-template-columns: 1fr; }
          .blog-newsletter-form { flex-wrap: wrap; }
          .blog-newsletter-cta { padding: 56px 20px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-bento-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <main className="full-width-page" style={{ backgroundColor: "var(--surface)" }}>

        {/* ===== HERO — Dark Navy with Overlapping Images ===== */}
        <section
          style={{
            maxWidth: "none",
            padding: 0,
            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: 800, height: 800, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div className="blog-hero-grid" style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "120px 24px 80px",
            position: "relative",
          }}>
            {/* Left — Text */}
            <div>
              <div style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-full)",
                marginBottom: 24,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 12,
                  fontWeight: 700, color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  Blog & Resources
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                fontWeight: 700, color: "#fff",
                lineHeight: 1.1, letterSpacing: "-0.02em",
                marginBottom: 20,
              }}>
                Navigating Global Careers
                <br />
                from <span style={{ color: "#60a5fa" }}>Punjab.</span>
              </h1>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: 16,
                color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
                marginBottom: 32, maxWidth: 480,
              }}>
                Expert-written guides on overseas employment, visa processes,
                salary benchmarks, and worker rights — backed by 25+ years
                of recruitment experience.
              </p>

              <div className="blog-hero-stats" style={{ display: "flex", gap: 40 }}>
                {[
                  { num: "12+", label: "Expert Guides" },
                  { num: "25+", label: "Years Experience" },
                  { num: "6", label: "Countries Covered" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28, fontWeight: 800, color: "#fff",
                      lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 12,
                      fontWeight: 600, color: "rgba(255,255,255,0.45)",
                      letterSpacing: "0.05em", textTransform: "uppercase",
                      marginTop: 4,
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Overlapping Images */}
            <div className="blog-hero-images">
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "72%", height: "88%",
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}>
                <Image
                  src={featuredPost.image}
                  alt="Global careers"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0,
                width: "55%", height: "65%",
                borderRadius: 20, overflow: "hidden",
                border: "4px solid var(--primary)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                zIndex: 2,
              }}>
                <Image
                  src={sortedPosts.length > 1 ? sortedPosts[1].image : featuredPost.image}
                  alt="Professional careers"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{
                position: "absolute", top: -16, left: "40%",
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "#60a5fa", opacity: 0.15,
                zIndex: 1,
              }} />
            </div>
          </div>
        </section>

        {/* ===== Featured Story — Asymmetric Editorial Layout ===== */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 0" }}>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="blog-featured-card"
            style={{
              borderRadius: 20,
              overflow: "hidden",
              backgroundColor: "var(--surface-container-lowest)",
              textDecoration: "none",
              boxShadow: "var(--shadow-md)",
              transition: "box-shadow 300ms var(--ease-out), transform 300ms var(--ease-out)",
            }}
          >
            <div className="blog-featured-card-img" style={{
              position: "relative", minHeight: 420,
              backgroundColor: "var(--surface-container)",
            }}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, rgba(0,0,0,0.03) 100%)",
              }} />
            </div>

            <div className="blog-featured-card-body" style={{
              padding: "48px 40px",
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{
                  padding: "5px 14px",
                  backgroundColor: "var(--surface-container-low)",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-body)", fontSize: 11,
                  fontWeight: 700, color: "var(--surface-tint)",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  {featuredPost.category}
                </span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 11,
                  fontWeight: 700, color: "var(--surface-tint)",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}>
                  Featured
                </span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                fontWeight: 700, color: "var(--on-surface)",
                lineHeight: 1.3, marginBottom: 16,
              }}>
                {featuredPost.title}
              </h2>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15,
                color: "var(--on-surface-variant)", lineHeight: 1.7,
                marginBottom: 24, maxWidth: 440,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
                {featuredPost.excerpt}
              </p>

              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "var(--outline)", marginBottom: 24,
              }}>
                <span>{formatDate(featuredPost.date)}</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "var(--outline-variant)" }} />
                <span>{featuredPost.readTime}</span>
              </div>

              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-display)", fontSize: 14,
                fontWeight: 700, color: "var(--surface-tint)",
              }}>
                Read Full Article
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </Link>
        </section>

        {/* ===== Search & Filter Section ===== */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0" }}>
          <div className="blog-filter-bar" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 20,
            padding: "28px 32px",
            backgroundColor: "var(--surface-container-low)",
            borderRadius: 16,
          }}>
            <div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18,
                fontWeight: 700, color: "var(--on-surface)",
                marginBottom: 4,
              }}>
                Need a Personalized Roadmap?
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "var(--on-surface-variant)",
              }}>
                Browse by topic or explore our curated guides
              </p>
            </div>

            <BlogSearch posts={sortedPosts.map(({ slug, title, excerpt, image, category, date, readTime }) => ({ slug, title, excerpt, image, category, date, readTime }))} />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: i === 0 ? "var(--primary)" : "var(--surface-container-lowest)",
                    color: i === 0 ? "#fff" : "var(--on-surface-variant)",
                    fontFamily: "var(--font-display)", fontSize: 13,
                    fontWeight: 600,
                    border: i === 0 ? "none" : "1px solid var(--outline-variant)",
                    cursor: "pointer",
                    transition: "all 150ms var(--ease-out)",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Blog Grid — Bento 3x3 ===== */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px 0" }}>
          <div className="blog-bento-grid">
            {gridPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  backgroundColor: "var(--surface-container-lowest)",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 250ms var(--ease-out), transform 250ms var(--ease-out)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{
                  position: "relative", width: "100%",
                  aspectRatio: "16/10",
                  backgroundColor: "var(--surface-container)",
                }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span style={{
                    position: "absolute", top: 14, left: 14,
                    padding: "5px 12px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "var(--font-display)", fontSize: 11,
                    fontWeight: 700, color: "var(--surface-tint)",
                  }}>
                    {post.category}
                  </span>
                </div>

                <div style={{
                  padding: "20px 22px 22px",
                  display: "flex", flexDirection: "column", flex: 1,
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 16,
                    fontWeight: 700, color: "var(--on-surface)",
                    lineHeight: 1.4, marginBottom: 10,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14,
                    color: "var(--on-surface-variant)", lineHeight: 1.6,
                    flex: 1, marginBottom: 16,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid var(--surface-container)",
                    paddingTop: 14,
                  }}>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 8,
                      fontFamily: "var(--font-body)", fontSize: 12,
                      color: "var(--outline)",
                    }}>
                      <span>{formatDate(post.date)}</span>
                      <span style={{
                        width: 3, height: 3, borderRadius: "50%",
                        backgroundColor: "var(--outline-variant)",
                      }} />
                      <span>{post.readTime}</span>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 13,
                      fontWeight: 700, color: "var(--surface-tint)",
                    }}>
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Stay Informed on Global Moves ===== */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 0" }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 700, color: "var(--on-surface)",
              marginBottom: 8,
            }}>
              Stay Informed on Global Moves
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15,
              color: "var(--on-surface-variant)", maxWidth: 520,
            }}>
              In-depth features and analysis on the latest in international recruitment and migration.
            </p>
          </div>

          <div className="blog-stay-informed-grid">
            <Link
              href={`/blog/${stayInformedFeatured.slug}`}
              style={{
                borderRadius: 20, overflow: "hidden",
                backgroundColor: "var(--surface-container-lowest)",
                textDecoration: "none",
                boxShadow: "var(--shadow-md)",
                transition: "box-shadow 250ms var(--ease-out)",
              }}
            >
              <div style={{
                position: "relative", width: "100%",
                aspectRatio: "16/9",
                backgroundColor: "var(--surface-container)",
              }}>
                <Image
                  src={stayInformedFeatured.image}
                  alt={stayInformedFeatured.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <span style={{
                  position: "absolute", top: 16, left: 16,
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "var(--font-display)", fontSize: 11,
                  fontWeight: 700, color: "var(--surface-tint)",
                }}>
                  {stayInformedFeatured.category}
                </span>
              </div>
              <div style={{ padding: "24px 28px 28px" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 20,
                  fontWeight: 700, color: "var(--on-surface)",
                  lineHeight: 1.35, marginBottom: 12,
                }}>
                  {stayInformedFeatured.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "var(--on-surface-variant)", lineHeight: 1.65,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  marginBottom: 16,
                }}>
                  {stayInformedFeatured.excerpt}
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "var(--font-body)", fontSize: 12,
                  color: "var(--outline)",
                }}>
                  <span>{formatDate(stayInformedFeatured.date)}</span>
                  <span style={{
                    width: 3, height: 3, borderRadius: "50%",
                    backgroundColor: "var(--outline-variant)",
                  }} />
                  <span>{stayInformedFeatured.readTime}</span>
                </div>
              </div>
            </Link>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {stayInformedSide.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    borderRadius: 16, overflow: "hidden",
                    backgroundColor: "var(--surface-container-lowest)",
                    textDecoration: "none",
                    boxShadow: "var(--shadow-sm)",
                    transition: "box-shadow 250ms var(--ease-out)",
                  }}
                >
                  <div style={{
                    position: "relative", width: "100%",
                    aspectRatio: "16/10",
                    backgroundColor: "var(--surface-container)",
                  }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  <div style={{ padding: "16px 20px 18px" }}>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 11,
                      fontWeight: 700, color: "var(--surface-tint)",
                      letterSpacing: "0.05em", textTransform: "uppercase",
                    }}>
                      {post.category}
                    </span>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontSize: 15,
                      fontWeight: 700, color: "var(--on-surface)",
                      lineHeight: 1.4, marginTop: 6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {post.title}
                    </h4>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 12,
                      color: "var(--outline)", marginTop: 8,
                    }}>
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Newsletter — "Stay Ahead of the Curve" ===== */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 80px" }}>
          <div className="blog-newsletter-cta" style={{
            borderRadius: 24, overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, var(--primary) 0%, #001a4d 100%)",
            padding: "80px 40px",
            textAlign: "center",
          }}>
            <div style={{
              position: "absolute", bottom: -80, right: -60,
              width: 384, height: 384, borderRadius: "50%",
              backgroundColor: "rgba(0,31,93,0.15)",
              filter: "blur(64px)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", maxWidth: 540, margin: "0 auto" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700, color: "#fff",
                lineHeight: 1.15, marginBottom: 12,
              }}>
                Stay Ahead of the Curve
              </h2>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15,
                color: "rgba(255,255,255,0.55)", lineHeight: 1.65,
                maxWidth: 420, margin: "0 auto 36px",
              }}>
                Get the latest overseas job updates, visa policy changes, and
                recruitment insights delivered to your inbox.
              </p>

              <div className="blog-newsletter-form">
                <div style={{
                  flex: "1 1 240px",
                  padding: "14px 18px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "rgba(255,255,255,0.35)",
                  textAlign: "left",
                }}>
                  Enter your email address
                </div>
                <Link
                  href="/contactus"
                  style={{
                    padding: "14px 28px",
                    backgroundColor: "#fff",
                    color: "var(--primary)",
                    fontFamily: "var(--font-display)", fontSize: 14,
                    fontWeight: 700, borderRadius: 12,
                    textDecoration: "none",
                    transition: "transform 150ms var(--ease-out)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                </Link>
              </div>

              <p style={{
                fontFamily: "var(--font-body)", fontSize: 12,
                color: "rgba(255,255,255,0.3)", marginTop: 20,
              }}>
                Free forever. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
