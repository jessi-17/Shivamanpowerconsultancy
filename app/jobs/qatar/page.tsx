import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs in Qatar | Doha Work Opportunities for Indian Workers",
  description:
    "Find high-paying jobs in Qatar through Shiva Travel & Manpower Consultants. Government licensed recruitment for Doha and across Qatar. Construction, hospitality, oil & gas jobs. Zero candidate fees.",
};

const jobCategories = [
  { title: "Construction & Infrastructure", roles: ["Mason", "Steel Fixer", "Carpenter", "Plumber", "Painter", "Scaffolder", "Crane Operator", "Surveyor"] },
  { title: "Oil, Gas & Energy", roles: ["Pipe Fitter", "Welder", "Rigger", "Instrumentation Technician", "Safety Officer", "Process Operator"] },
  { title: "Hospitality & Tourism", roles: ["Chef / Cook", "Waiter", "Hotel Housekeeping", "Barista", "Restaurant Manager", "Front Desk Agent"] },
  { title: "Facility Management", roles: ["Electrician", "AC Technician", "Plumber", "Cleaning Supervisor", "Gardener / Landscaper", "Security Guard"] },
  { title: "Transport & Logistics", roles: ["Heavy Driver", "Light Driver", "Bus Driver", "Warehouse Worker", "Forklift Operator", "Logistics Coordinator"] },
  { title: "Retail & Services", roles: ["Sales Executive", "Cashier", "Store Keeper", "Delivery Rider", "Tailor", "Barber / Salon Staff"] },
];

const whyQatar = [
  { title: "Post-World Cup Boom", desc: "After hosting the 2022 FIFA World Cup, Qatar continues massive infrastructure development including metro expansion, new cities, and tourism projects." },
  { title: "Highest Minimum Wage in Gulf", desc: "Qatar introduced a minimum wage of QAR 1,000/month — the highest in the Gulf region. Plus mandatory food and housing allowances if not provided by employer." },
  { title: "Tax-Free Earnings", desc: "Zero income tax. Combined with employer benefits, workers take home their full salary. Typical savings rate is 60-75% of earnings." },
  { title: "Modern Worker Welfare", desc: "Qatar has reformed its labour laws significantly. The kafala system is abolished, workers can change jobs freely, and there's a minimum wage guarantee." },
  { title: "World-Class Living", desc: "Doha is one of the most modern cities in the Middle East with excellent public transport, healthcare, and worker accommodation standards." },
  { title: "Strong Indian Community", desc: "Indians are the largest expatriate community in Qatar (over 700,000). Plenty of Indian restaurants, temples, and community support." },
];

const salaryRanges = [
  { role: "Construction Worker", range: "QAR 1,200 – 2,000/month" },
  { role: "Electrician", range: "QAR 2,000 – 3,500/month" },
  { role: "Pipe Fitter", range: "QAR 2,500 – 5,000/month" },
  { role: "Heavy Driver", range: "QAR 2,500 – 4,000/month" },
  { role: "Chef / Cook", range: "QAR 2,000 – 4,000/month" },
  { role: "AC Technician", range: "QAR 2,500 – 4,500/month" },
  { role: "Welder", range: "QAR 2,500 – 5,000/month" },
  { role: "Security Guard", range: "QAR 1,500 – 2,500/month" },
];

export default function JobsInQatar() {
  return (
    <>
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #5b1a3a 0%, #8b2252 100%)",
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
              letterSpacing: "0.15em", color: "#f9a8d4", textTransform: "uppercase", marginBottom: 16,
            }}>
              GULF&apos;S FASTEST GROWING ECONOMY
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in Qatar
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Doha and beyond — Qatar&apos;s post-World Cup development is creating thousands of new jobs.
              Highest minimum wage in the Gulf. Modern labour laws. Government-approved recruitment.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "#5b1a3a", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why Qatar */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Qatar is a Smart Choice
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whyQatar.map((item) => (
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
              Job Categories Available in Qatar
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
                    color: "#5b1a3a", marginBottom: 14,
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
              Qatar guarantees a minimum wage of QAR 1,000/month plus QAR 300 food and QAR 500 housing if not provided by employer.
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
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#5b1a3a", fontWeight: 600 }}>
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
              { q: "Has Qatar abolished the kafala system?", a: "Yes. Qatar is the first Gulf country to abolish the kafala (sponsorship) system. Workers can now change jobs without employer permission after a notice period, and can leave the country freely." },
              { q: "What is the minimum wage in Qatar?", a: "QAR 1,000/month (approximately ₹22,500). In addition, employers must provide food allowance of QAR 300 and housing allowance of QAR 500 if not provided in kind." },
              { q: "How is the weather in Qatar?", a: "Hot summers (May-September, 35-50°C) with outdoor work restrictions during peak hours. Winters (November-March) are pleasant at 15-25°C. Most accommodation is air-conditioned." },
              { q: "Is Qatar expensive to live in?", a: "With employer-provided accommodation and food, your daily expenses are minimal. Worker camps have cooking facilities, and Indian groceries are widely available and affordable." },
              { q: "How long is a work contract?", a: "Typically 2 years. After completion, you're entitled to end-of-service benefits, return ticket, and can renew or find a new employer." },
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
          background: "linear-gradient(135deg, #5b1a3a, #8b2252)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Ready to Work in Qatar?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Visit our office at Golden Avenue, Nakodar or call +91 98148-20432.
              Government licensed. Zero fees.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "#5b1a3a", fontFamily: "var(--font-display)", fontSize: 15,
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
    </>
  );
}
