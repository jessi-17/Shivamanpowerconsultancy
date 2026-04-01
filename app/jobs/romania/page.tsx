import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs in Romania | Factory, Construction & Agriculture Work for Indians",
  description:
    "Find factory, construction, and agriculture jobs in Romania through Shiva Travel & Manpower Consultants. EU work permit with Schengen access. Government licensed recruitment. Zero candidate fees.",
};

const jobCategories = [
  { title: "Construction", roles: ["Mason", "Carpenter", "Electrician", "Plumber", "Steel Fixer", "Painter", "General Labourer", "Scaffolder"] },
  { title: "Manufacturing", roles: ["Factory Worker", "Machine Operator", "Welder", "Assembly Worker", "CNC Operator", "Quality Inspector"] },
  { title: "Agriculture", roles: ["Farm Worker", "Fruit Picker", "Greenhouse Worker", "Livestock Worker", "Agricultural Machine Operator"] },
  { title: "Food Processing", roles: ["Meat Processing", "Bakery Worker", "Food Packaging", "Cold Storage Worker", "Dairy Processing"] },
  { title: "Hospitality", roles: ["Hotel Staff", "Chef / Cook", "Housekeeping", "Waiter", "Resort Worker", "Kitchen Helper"] },
  { title: "Transport & Logistics", roles: ["Truck Driver", "Delivery Driver", "Warehouse Worker", "Forklift Operator", "Loading Staff"] },
];

const whyRomania = [
  { title: "EU Member with Schengen Access", desc: "Romania joined the Schengen area, meaning your Romanian work permit allows visa-free travel across 27 European countries during holidays." },
  { title: "Growing Demand for Workers", desc: "Romania's rapid economic growth has created severe labour shortages in construction, manufacturing, and agriculture. The government is actively recruiting foreign workers." },
  { title: "Affordable Living", desc: "Romania has one of the lowest costs of living in the EU. Your salary goes much further here — rent, food, and transport are very affordable compared to Western Europe." },
  { title: "Path to EU Residency", desc: "After 5 years of legal work, you can apply for long-term residence. This gives you the right to live and work in any EU country." },
  { title: "Pleasant Climate", desc: "Romania has four distinct seasons with warm summers perfect for agriculture work. Winters are cold but not as harsh as Poland or the Baltics." },
  { title: "Friendly People", desc: "Romanians are known for their warmth and hospitality. There's a growing Indian community, especially in Bucharest and major industrial cities." },
];

const salaryRanges = [
  { role: "Factory Worker", range: "RON 3,700 – 5,000/month (€750 – €1,000)" },
  { role: "Construction Worker", range: "RON 4,000 – 6,000/month (€800 – €1,200)" },
  { role: "Welder", range: "RON 4,500 – 7,000/month (€900 – €1,400)" },
  { role: "Farm Worker", range: "RON 3,300 – 4,500/month (€660 – €900)" },
  { role: "Truck Driver", range: "RON 5,000 – 8,000/month (€1,000 – €1,600)" },
  { role: "Meat Processing", range: "RON 3,500 – 5,000/month (€700 – €1,000)" },
  { role: "Forklift Operator", range: "RON 4,000 – 5,500/month (€800 – €1,100)" },
  { role: "Hotel Staff", range: "RON 3,300 – 4,500/month (€660 – €900)" },
];

export default function JobsInRomania() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #1e40af 0%, #eab308 100%)",
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
              letterSpacing: "0.15em", color: "#fef08a", textTransform: "uppercase", marginBottom: 16,
            }}>
              EU&apos;S RISING STAR — NOW WITH SCHENGEN ACCESS
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in Romania
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Construction, manufacturing, agriculture, food processing — Romania needs thousands of workers.
              EU work permit with Schengen travel. Low cost of living means higher savings.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "#1e40af", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why Romania */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Choose Romania
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whyRomania.map((item) => (
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
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              In-Demand Jobs in Romania
            </h2>
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
                    color: "#1e40af", marginBottom: 14,
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
              Romania&apos;s minimum wage is RON 3,300/month gross (2025). Most employers pay above minimum.
              Accommodation is typically provided or subsidized.
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
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#1e40af", fontWeight: 600 }}>
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
              { q: "Is Romania in the EU?", a: "Yes. Romania has been an EU member since 2007 and joined the Schengen area recently. Your Romanian work permit gives you access to travel across all Schengen countries." },
              { q: "Do I need to know Romanian?", a: "Not for most manual/factory jobs. Employers provide on-site training and many have multilingual supervisors. Learning basic Romanian helps with daily life and is relatively easy for Hindi speakers." },
              { q: "How is the weather?", a: "Romania has four seasons. Summers (June-August) are warm, 25-35°C — great for outdoor work. Winters (December-February) are cold, -5°C to -10°C. All accommodation is heated." },
              { q: "Is Romania cheaper than Poland?", a: "Yes, Romania generally has a lower cost of living than Poland. This means your savings potential is higher even if the base salary is slightly lower." },
              { q: "How long does the visa process take?", a: "Romanian work permits typically take 4-8 weeks. The entire process from application to departure takes about 3-4 months. We handle all paperwork and guide you through every step." },
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
          background: "linear-gradient(135deg, #1e40af, #2563eb)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Start Your Romania Journey Today
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Visit our office at Golden Avenue, Nakodar or call +91 98148-20432.
              Government licensed. Zero fees. EU work permit.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "#1e40af", fontFamily: "var(--font-display)", fontSize: 15,
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
