import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs in Saudi Arabia | Riyadh, Jeddah, Dammam Work Opportunities",
  description:
    "Find high-paying jobs in Saudi Arabia through Shiva Travel & Manpower Consultants. Government licensed recruitment for Riyadh, Jeddah, Dammam. Construction, oil & gas, hospitality jobs. Zero candidate fees.",
};

const jobCategories = [
  { title: "Oil & Gas", roles: ["Rigger", "Pipe Fitter", "Welder", "Safety Officer", "Crane Operator", "Instrumentation Technician", "Scaffolder"] },
  { title: "Construction", roles: ["Mason", "Steel Fixer", "Carpenter", "Painter", "Tile Fixer", "Plumber", "Shuttering Carpenter", "Site Supervisor"] },
  { title: "Healthcare", roles: ["Nurse", "Lab Technician", "Pharmacist", "Ward Boy", "Hospital Housekeeping", "Medical Equipment Technician"] },
  { title: "Hospitality", roles: ["Chef / Cook", "Waiter", "Kitchen Helper", "Housekeeping Staff", "Laundry Attendant", "Front Desk Receptionist"] },
  { title: "Driving & Transport", roles: ["Heavy Vehicle Driver", "Trailer Driver", "Bus Driver", "Light Vehicle Driver", "Forklift Operator"] },
  { title: "Industrial & Technical", roles: ["Electrician", "AC Technician", "Diesel Mechanic", "CNC Operator", "Quality Inspector", "Machine Operator"] },
];

const whySaudi = [
  { title: "Highest Paying Gulf Country", desc: "Saudi Arabia consistently offers some of the highest salaries in the Gulf region, especially for skilled workers in oil & gas, construction, and healthcare." },
  { title: "Vision 2030 Mega Projects", desc: "NEOM, The Line, Red Sea Project — Saudi's Vision 2030 is creating millions of jobs. This is the biggest construction boom in history." },
  { title: "Tax-Free Income", desc: "Zero income tax on salaries. Combined with employer-provided accommodation and food, workers save significantly more than in most countries." },
  { title: "Religious Significance", desc: "Home to Makkah and Madinah. Workers get the opportunity to perform Hajj and Umrah while working in the Kingdom." },
  { title: "Strong Labour Protections", desc: "The Musaned and Mudad platforms ensure transparent contracts, timely salary payments, and worker protection under Saudi Labour Law." },
  { title: "End-of-Service Benefits", desc: "After completing your contract, you receive end-of-service gratuity (half month salary per year for first 5 years, full month per year after)." },
];

const salaryRanges = [
  { role: "Construction Worker", range: "SAR 1,500 – 2,500/month" },
  { role: "Welder", range: "SAR 2,500 – 5,000/month" },
  { role: "Pipe Fitter (Oil & Gas)", range: "SAR 3,000 – 6,000/month" },
  { role: "Heavy Driver", range: "SAR 2,500 – 4,500/month" },
  { role: "Electrician", range: "SAR 2,000 – 4,000/month" },
  { role: "Chef / Cook", range: "SAR 2,000 – 4,000/month" },
  { role: "Nurse", range: "SAR 4,000 – 8,000/month" },
  { role: "AC Technician", range: "SAR 2,500 – 4,500/month" },
];

export default function JobsInSaudi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #1a472a 0%, #2d5a3f 100%)",
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
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", color: "#86efac", textTransform: "uppercase", marginBottom: 16,
            }}>
              VISION 2030 — MASSIVE OPPORTUNITIES
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in Saudi Arabia
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Riyadh, Jeddah, Dammam, NEOM — the Kingdom is hiring at an unprecedented scale.
              Oil & gas, construction, hospitality, and healthcare. Government-approved recruitment.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "#1a472a", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why Saudi */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Work in Saudi Arabia
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whySaudi.map((item) => (
                <div key={item.title} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 8,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7,
                  }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 16,
            }}>
              In-Demand Job Categories
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
              textAlign: "center", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.6,
            }}>
              Saudi Arabia&apos;s Vision 2030 is driving massive demand across all sectors. These are the most
              actively recruited categories right now.
            </p>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {jobCategories.map((cat) => (
                <div key={cat.title} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                    color: "#1a472a", marginBottom: 14,
                  }}>{cat.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.roles.map((role) => (
                      <span key={role} style={{
                        fontFamily: "var(--font-body)", fontSize: 13,
                        padding: "4px 12px", borderRadius: 20,
                        backgroundColor: "var(--surface-container)", color: "var(--on-surface-variant)",
                      }}>{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Salary Ranges */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 16,
            }}>
              Expected Salary Ranges
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
              textAlign: "center", marginBottom: 40, lineHeight: 1.6,
            }}>
              Salaries vary by employer, location, and experience. Most packages include free accommodation, food, and transport.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {salaryRanges.map((item, i) => (
                <div key={item.role} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "14px 20px",
                  backgroundColor: i % 2 === 0 ? "var(--surface-container-lowest)" : "var(--surface-container-low)",
                  borderRadius: i === 0 ? "12px 12px 0 0" : i === salaryRanges.length - 1 ? "0 0 12px 12px" : 0,
                }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--on-surface)" }}>
                    {item.role}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#1a472a", fontWeight: 600 }}>
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 40,
            }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: "Is it safe to work in Saudi Arabia?", a: "Yes. Saudi Arabia has strict law enforcement and is one of the safest countries in the Middle East. The government has invested heavily in worker welfare through platforms like Musaned and the Wage Protection System." },
              { q: "Do I need to know Arabic?", a: "Not for most blue-collar jobs. English or Hindi is sufficient. However, knowing basic Arabic phrases can be helpful and is appreciated by employers." },
              { q: "What about the weather?", a: "Summers (May-September) are very hot (40-50°C). Most outdoor work is banned during peak afternoon hours (12-3 PM) in summer. Indoor and air-conditioned work continues normally." },
              { q: "Can I switch jobs in Saudi Arabia?", a: "Yes. Recent labour reforms allow workers to switch jobs after completing their contract or with employer consent. The exit/re-entry visa system has also been relaxed significantly." },
              { q: "How much can I save per month?", a: "With free accommodation and food, skilled workers typically save SAR 1,500-4,000 per month (₹33,000-88,000 approximately). This depends on your salary and spending habits." },
            ].map((faq) => (
              <div key={faq.q} style={{ marginBottom: 28 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                  color: "var(--on-surface)", marginBottom: 6,
                }}>{faq.q}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                  lineHeight: 1.7,
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, #1a472a, #2d5a3f)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Start Your Saudi Arabia Journey Today
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Visit our office at Golden Avenue, Nakodar or call +91 98148-20432.
              Government licensed. Zero fees. 25+ years experience.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "#1a472a", fontFamily: "var(--font-display)", fontSize: 15,
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
