import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Current Job Openings | Overseas Opportunities for Indian Workers",
  description:
    "Browse current overseas job openings in UAE, Saudi Arabia, Qatar, Poland, Romania. Construction, factory, hospitality, driving jobs available now. Apply through Shiva Travel & Manpower Consultants. Zero fees.",
};

const openings = [
  {
    title: "Factory Workers — Poland",
    location: "Warsaw, Wroclaw, Poznan",
    salary: "€900 – €1,200/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Health insurance", "Overtime at 1.5x", "EU work permit"],
    urgent: true,
    href: "/jobs/poland",
  },
  {
    title: "Construction Workers — UAE",
    location: "Dubai, Abu Dhabi",
    salary: "AED 1,800 – 2,500/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free food", "Free transport", "Annual flight home"],
    urgent: true,
    href: "/jobs/uae",
  },
  {
    title: "Welders — Saudi Arabia",
    location: "Riyadh, Dammam, Jubail",
    salary: "SAR 2,500 – 5,000/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free food", "Medical insurance", "End-of-service bonus"],
    urgent: false,
    href: "/jobs/saudi-arabia",
  },
  {
    title: "Heavy Vehicle Drivers — Qatar",
    location: "Doha, Al Wakrah",
    salary: "QAR 2,500 – 4,000/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free food allowance", "Overtime pay", "Annual leave"],
    urgent: true,
    href: "/jobs/qatar",
  },
  {
    title: "Electricians — UAE",
    location: "Dubai, Sharjah, Ajman",
    salary: "AED 2,000 – 3,500/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free transport", "Medical insurance", "Overtime pay"],
    urgent: false,
    href: "/jobs/uae",
  },
  {
    title: "Warehouse Workers — Romania",
    location: "Bucharest, Cluj-Napoca, Timisoara",
    salary: "€750 – €1,100/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Accommodation provided", "Health insurance", "EU work permit", "Overtime at 2x"],
    urgent: false,
    href: "/jobs/romania",
  },
  {
    title: "Pipe Fitters — Saudi Arabia (NEOM)",
    location: "NEOM, Yanbu, Jubail",
    salary: "SAR 3,000 – 6,000/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free food", "Medical insurance", "Project completion bonus"],
    urgent: true,
    href: "/jobs/saudi-arabia",
  },
  {
    title: "Chefs / Cooks — UAE",
    location: "Dubai, Abu Dhabi Hotels & Restaurants",
    salary: "AED 2,500 – 4,500/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free meals", "Tips", "Annual flight home"],
    urgent: false,
    href: "/jobs/uae",
  },
  {
    title: "Meat Processing Workers — Poland",
    location: "Various cities in Poland",
    salary: "€900 – €1,250/month",
    type: "Full Time — 1-2 Year Contract",
    benefits: ["Accommodation provided", "Health insurance", "Overtime pay", "EU Schengen travel"],
    urgent: false,
    href: "/jobs/poland",
  },
  {
    title: "AC Technicians — Qatar",
    location: "Doha, Lusail",
    salary: "QAR 2,500 – 4,500/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free transport", "Medical insurance", "Overtime pay"],
    urgent: false,
    href: "/jobs/qatar",
  },
  {
    title: "Farm Workers — Romania (Seasonal)",
    location: "Rural Romania",
    salary: "€660 – €900/month",
    type: "Seasonal — 6-9 Months",
    benefits: ["Accommodation provided", "Work gear provided", "Schengen access", "Contract renewal option"],
    urgent: false,
    href: "/jobs/romania",
  },
  {
    title: "Security Guards — UAE",
    location: "Dubai, Abu Dhabi",
    salary: "AED 1,500 – 2,500/month",
    type: "Full Time — 2 Year Contract",
    benefits: ["Free accommodation", "Free food", "Uniform provided", "Medical insurance"],
    urgent: false,
    href: "/jobs/uae",
  },
];

export default function CurrentDemands() {
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
              UPDATED REGULARLY — APPLY TODAY
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Current Opportunities
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
            }}>
              Browse live job openings across UAE, Saudi Arabia, Qatar, Poland, and Romania.
              All positions are verified. Zero recruitment fees.
            </p>
          </div>
        </section>

        {/* Openings */}
        <section style={{ padding: "60px 24px 80px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {openings.map((job, i) => (
                <div key={i} style={{
                  padding: 28, borderRadius: 16,
                  backgroundColor: "var(--surface-container-lowest)",
                  border: job.urgent ? "2px solid var(--surface-tint)" : "1px solid var(--outline-variant)",
                  position: "relative",
                }}>
                  {job.urgent && (
                    <span style={{
                      position: "absolute", top: -1, right: 20,
                      backgroundColor: "var(--surface-tint)", color: "#fff",
                      fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700,
                      padding: "4px 12px", borderRadius: "0 0 8px 8px",
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>Urgent Hiring</span>
                  )}
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    flexWrap: "wrap", gap: 16, marginBottom: 14,
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                        color: "var(--on-surface)", marginBottom: 4,
                      }}>{job.title}</h3>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: 13, color: "var(--on-surface-variant)",
                      }}>{job.location} — {job.type}</p>
                    </div>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                      color: "var(--surface-tint)",
                    }}>{job.salary}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {job.benefits.map((b) => (
                      <span key={b} style={{
                        fontFamily: "var(--font-body)", fontSize: 12,
                        padding: "3px 10px", borderRadius: 16,
                        backgroundColor: "var(--surface-container)", color: "var(--on-surface-variant)",
                      }}>{b}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a href="https://wa.me/919814820432" target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-flex", padding: "8px 20px", borderRadius: 8,
                      backgroundColor: "var(--primary)", color: "#fff",
                      fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                      textDecoration: "none",
                    }}>
                      Apply via WhatsApp
                    </a>
                    <Link href={job.href} style={{
                      display: "inline-flex", padding: "8px 20px", borderRadius: 8,
                      backgroundColor: "transparent", color: "var(--surface-tint)",
                      border: "1px solid var(--outline-variant)",
                      fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                      textDecoration: "none",
                    }}>
                      View Country Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              textAlign: "center", marginTop: 48, padding: 32, borderRadius: 16,
              backgroundColor: "var(--surface-container-low)",
            }}>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
                marginBottom: 16, lineHeight: 1.6,
              }}>
                Don&apos;t see your preferred role? We get new openings every week.
                Contact us and we&apos;ll match you when something fits.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="tel:+919814820432" style={{
                  display: "inline-flex", padding: "10px 24px", borderRadius: 8,
                  backgroundColor: "var(--primary)", color: "#fff",
                  fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600,
                  textDecoration: "none",
                }}>
                  Call +91 98148-20432
                </a>
                <a href="tel:+919814920432" style={{
                  display: "inline-flex", padding: "10px 24px", borderRadius: 8,
                  backgroundColor: "transparent", color: "var(--on-surface)",
                  border: "1px solid var(--outline-variant)",
                  fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600,
                  textDecoration: "none",
                }}>
                  Call +91 98149-20432
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
