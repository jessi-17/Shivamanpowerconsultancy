import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Overseas Job Guides, Visa Tips & Worker Resources",
  description:
    "Read expert guides on overseas jobs, work visa processes, salary expectations, and worker rights. Updated resources for workers going to UAE, Saudi Arabia, Qatar, Poland, Romania.",
};

const posts = [
  {
    title: "How to Get a Work Visa for UAE in 2025: Complete Guide",
    excerpt: "Everything you need to know about UAE employment visa — documents required, medical process, costs, timeline, and what to expect after arrival in Dubai or Abu Dhabi.",
    category: "Visa Guide",
    date: "March 2025",
    readTime: "8 min read",
    href: "/jobs/uae",
  },
  {
    title: "Top Factory Jobs in Europe for Indian Workers",
    excerpt: "Poland, Romania, Croatia — which European country offers the best factory jobs? We compare salaries, benefits, work permits, and path to permanent residency.",
    category: "Job Guide",
    date: "February 2025",
    readTime: "10 min read",
    href: "/jobs/europe",
  },
  {
    title: "Saudi Arabia Work Permit Guide: Everything You Need to Know",
    excerpt: "From Iqama to Musaned — understand Saudi Arabia's work permit system, your rights as a worker, salary expectations, and how Vision 2030 is changing the job market.",
    category: "Visa Guide",
    date: "February 2025",
    readTime: "9 min read",
    href: "/jobs/saudi-arabia",
  },
  {
    title: "Why Choose a Licensed Recruitment Agency?",
    excerpt: "Fake agents have ruined lives. Learn how to verify an agency's license, what questions to ask, and why Shiva Travel's government license (RA B-1794) matters for your safety.",
    category: "Safety",
    date: "January 2025",
    readTime: "6 min read",
    href: "/about-us",
  },
  {
    title: "Poland vs Romania: Which is Better for Indian Workers?",
    excerpt: "A detailed comparison of working in Poland and Romania — salaries, cost of living, weather, language, work permits, and path to EU permanent residency.",
    category: "Comparison",
    date: "January 2025",
    readTime: "12 min read",
    href: "/jobs/europe",
  },
  {
    title: "What to Pack for Your First Overseas Job: Complete Checklist",
    excerpt: "Going abroad for the first time? Here's everything you need to pack — documents, clothing, medicines, electronics, and items you can't find easily in Gulf or Europe.",
    category: "Tips",
    date: "December 2024",
    readTime: "5 min read",
    href: "/contactus",
  },
  {
    title: "Understanding Your Rights as an Overseas Worker",
    excerpt: "Know your rights before you fly. Indian labour laws, destination country protections, MADAD portal, Indian Embassy helplines, and what to do if something goes wrong.",
    category: "Worker Rights",
    date: "December 2024",
    readTime: "7 min read",
    href: "/about-us",
  },
  {
    title: "Qatar After the World Cup: Why It's Still a Great Destination",
    excerpt: "Qatar's post-World Cup development continues with metro expansion, Lusail City, and tourism projects. Learn about current job openings and the new minimum wage law.",
    category: "Job Guide",
    date: "November 2024",
    readTime: "8 min read",
    href: "/jobs/qatar",
  },
  {
    title: "How to Send Money Home: Best Options for Overseas Workers",
    excerpt: "Compare money transfer options — bank transfers, Wise, Western Union, Al Ansari Exchange. Which is cheapest? Which is fastest? Tips to save on fees and get better rates.",
    category: "Finance",
    date: "November 2024",
    readTime: "6 min read",
    href: "/contactus",
  },
];

const categories = ["All", "Visa Guide", "Job Guide", "Safety", "Comparison", "Tips", "Worker Rights", "Finance"];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #0052dc 100%)",
          padding: "160px 24px 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", color: "#60a5fa", textTransform: "uppercase", marginBottom: 16,
            }}>
              GUIDES, TIPS & RESOURCES
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Blog
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
            }}>
              Expert guides on overseas jobs, visa processes, salary expectations,
              and everything you need to know before going abroad for work.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section style={{ padding: "32px 24px 0", backgroundColor: "var(--surface)" }}>
          <div style={{
            maxWidth: 900, margin: "0 auto",
            display: "flex", flexWrap: "wrap", gap: 8,
          }}>
            {categories.map((cat, i) => (
              <span key={cat} style={{
                padding: "6px 16px", borderRadius: 20,
                backgroundColor: i === 0 ? "var(--primary)" : "var(--surface-container)",
                color: i === 0 ? "#fff" : "var(--on-surface-variant)",
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                cursor: "pointer",
              }}>{cat}</span>
            ))}
          </div>
        </section>

        {/* Posts */}
        <section style={{ padding: "32px 24px 80px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {posts.map((post) => (
                <Link key={post.title} href={post.href} style={{
                  padding: 24, borderRadius: 16,
                  backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                  textDecoration: "none",
                  display: "flex", flexDirection: "column",
                  transition: "all 150ms",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    marginBottom: 12,
                  }}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 12,
                      backgroundColor: "var(--surface-container)",
                      fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700,
                      color: "var(--surface-tint)",
                    }}>{post.category}</span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 11, color: "var(--on-surface-variant)",
                    }}>{post.readTime}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 8, lineHeight: 1.3,
                  }}>{post.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7, flex: 1, marginBottom: 12,
                  }}>{post.excerpt}</p>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderTop: "1px solid var(--outline-variant)", paddingTop: 12,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)",
                    }}>{post.date}</span>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                      color: "var(--surface-tint)",
                    }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section style={{
          padding: "60px 24px",
          backgroundColor: "var(--surface-container-low)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 500, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
              color: "var(--on-surface)", marginBottom: 12,
            }}>
              Have Questions?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
              lineHeight: 1.6, marginBottom: 24,
            }}>
              Can&apos;t find what you&apos;re looking for? Reach out to us directly — we&apos;re happy to answer any questions about overseas jobs and visa processes.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/919814820432" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", padding: "12px 28px", borderRadius: 10,
                backgroundColor: "var(--primary)", color: "#fff",
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                textDecoration: "none",
              }}>
                Ask on WhatsApp
              </a>
              <Link href="/contactus" style={{
                display: "inline-flex", padding: "12px 28px", borderRadius: 10,
                backgroundColor: "transparent", color: "var(--on-surface)",
                border: "1px solid var(--outline-variant)",
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                textDecoration: "none",
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
