import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Shiva Travel & Manpower Consultants Nakodar",
  description:
    "Learn about Shiva Travel & Manpower Consultants — a government licensed overseas recruitment agency in Nakodar, Punjab. 25+ years of ethical recruitment. Licensed by Ministry of External Affairs (RA B-1794).",
};

const milestones = [
  { year: "1998", title: "Founded in Nakodar", desc: "Started as a small travel agency on Golden Avenue, Nakodar, helping Punjabi families with passport and visa services." },
  { year: "2002", title: "Overseas Recruitment License", desc: "Obtained the official Recruiting Agent license from the Ministry of External Affairs, Government of India. Began placing workers in Gulf countries." },
  { year: "2008", title: "1,000+ Placements", desc: "Crossed the milestone of 1,000 successful overseas placements across UAE, Saudi Arabia, and Qatar." },
  { year: "2015", title: "European Expansion", desc: "Expanded recruitment to European countries including Poland, Romania, and Croatia to meet growing demand." },
  { year: "2020", title: "Digital Transformation", desc: "Adopted video interviews and digital documentation to continue placements even during the pandemic." },
  { year: "2024", title: "5,000+ Workers Placed", desc: "Surpassed 5,000 successful placements across 12+ countries with zero recruitment fees charged to candidates." },
];

const values = [
  { title: "Zero Candidate Fees", desc: "We never charge workers for placement. Employers bear all recruitment costs. This is both our policy and Indian law — and we follow it strictly." },
  { title: "Government Licensed", desc: "We hold RA License B-1794/PUN/PER/100/5/10094/2022 from the Ministry of External Affairs, valid through June 2027. We are fully compliant with E-Migrate regulations." },
  { title: "Ethical Recruitment", desc: "We follow ILO fair recruitment principles. No deception, no hidden charges, no passport retention. Every worker is briefed on their rights before departure." },
  { title: "End-to-End Support", desc: "From document preparation to visa processing, pre-departure orientation to post-arrival follow-up — we support workers through every step." },
  { title: "Verified Employers Only", desc: "We only work with employers who provide proper contracts, accommodation, and comply with local labour laws. Every employer is vetted before we send a single worker." },
  { title: "Community First", desc: "Based in Nakodar, we serve the Doaba region — Jalandhar, Kapurthala, Nawanshahr, Hoshiarpur. Our office doors are always open for walk-in consultations." },
];

const team = [
  { name: "Shiva Travel Team", role: "Recruitment & Documentation", desc: "Our experienced team handles candidate screening, document verification, visa processing, and employer coordination." },
  { name: "Pre-Departure Cell", role: "Worker Orientation", desc: "Dedicated team that briefs every worker on destination country laws, cultural norms, workplace expectations, and their legal rights." },
  { name: "Employer Relations", role: "International Partnerships", desc: "Maintains relationships with 200+ verified employers across UAE, Saudi Arabia, Qatar, Poland, Romania, and other countries." },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #0052dc 100%)",
          padding: "160px 24px 80px",
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
              SINCE 1998 — NAKODAR, PUNJAB
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              About Shiva Travel &<br />Manpower Consultants
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
            }}>
              A government licensed overseas recruitment agency helping the youth of Punjab find
              dignified, high-growth careers across the globe. 25+ years. 5,000+ placements. Zero fees.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 24,
            }}>
              Our Story
            </h2>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "var(--on-surface-variant)",
              lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20,
            }}>
              <p>
                Shiva Travel & Manpower Consultants was founded in 1998 on Golden Avenue, Nakodar — in the heart
                of Punjab&apos;s Doaba region. What started as a small travel agency helping families with passport
                and visa paperwork has grown into one of the most trusted overseas recruitment agencies in the state.
              </p>
              <p>
                In 2002, we obtained our official Recruiting Agent license from the Ministry of External Affairs,
                Government of India (RA B-1794). This allowed us to formally place Indian workers with verified
                employers in Gulf countries — UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain.
              </p>
              <p>
                Over the past two decades, we have successfully placed over 5,000 workers from Punjab in jobs
                across 12+ countries. From construction workers and electricians to chefs and factory operators —
                we&apos;ve helped thousands of families build a better future.
              </p>
              <p>
                In 2015, we expanded our reach to Europe — Poland, Romania, Croatia — responding to growing demand
                for Indian workers in the EU. Today, we are one of the few agencies in Punjab that recruits for
                both Gulf and European destinations.
              </p>
              <p>
                Our commitment has always been simple: <strong>zero fees from candidates, verified employers only,
                and complete support from interview to arrival.</strong> This is not just our policy — it&apos;s
                the law, and we follow it strictly.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Our Journey
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800,
                    color: "var(--surface-tint)", minWidth: 56, paddingTop: 2,
                  }}>
                    {m.year}
                  </div>
                  <div style={{
                    padding: 24, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                    border: "1px solid var(--outline-variant)", flex: 1,
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                      color: "var(--on-surface)", marginBottom: 6,
                    }}>{m.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                      lineHeight: 1.7,
                    }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              What We Stand For
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {values.map((v) => (
                <div key={v.title} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 8,
                  }}>{v.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7,
                  }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Our Teams
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {team.map((t) => (
                <div key={t.name} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)", textAlign: "center",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 4,
                  }}>{t.name}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
                    color: "var(--surface-tint)", textTransform: "uppercase",
                    letterSpacing: "0.05em", marginBottom: 12,
                  }}>{t.role}</p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7,
                  }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* License Info */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{
            maxWidth: 700, margin: "0 auto", padding: 40, borderRadius: 20,
            backgroundColor: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)",
            textAlign: "center",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
              color: "var(--on-surface)", marginBottom: 16,
            }}>
              Government License Details
            </h2>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
              lineHeight: 2,
            }}>
              <p><strong>Agency Name:</strong> Shiva Travel & Manpower Consultants</p>
              <p><strong>RA License:</strong> B-1794/PUN/PER/100/5/10094/2022</p>
              <p><strong>Issuing Authority:</strong> Ministry of External Affairs, Government of India</p>
              <p><strong>Valid Through:</strong> June 2027</p>
              <p><strong>E-Migrate Registered:</strong> Yes</p>
              <p><strong>ALMRA Punjab Member:</strong> Yes</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--primary), #0052dc)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Visit Our Office
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab.
              Walk-in consultations available Monday to Saturday, 10 AM – 6 PM.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919814820432" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", padding: "14px 36px",
                backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
