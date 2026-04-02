import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Jobs in Europe | Poland, Romania, Croatia Work Opportunities",
  description:
    "Find factory, warehouse, and skilled worker jobs in Europe through Shiva Travel & Manpower Consultants. Government licensed recruitment for Poland, Romania, Croatia, Malta. Work permit assistance. Zero candidate fees.",
};

const countries = [
  {
    name: "Poland",
    flag: "🇵🇱",
    desc: "Poland is the top European destination for Indian workers. Booming manufacturing, construction, and agriculture sectors with competitive salaries and low cost of living.",
    link: "/jobs/poland",
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    desc: "Romania's growing economy needs workers in construction, manufacturing, and agriculture. EU member with Schengen access, making it a gateway to Europe.",
    link: "/jobs/romania",
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    desc: "Croatia's booming tourism and construction sectors are actively recruiting. Beautiful country with good worker protections as an EU member.",
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    desc: "English-speaking EU nation with strong demand in hospitality, gaming, and logistics. Warm Mediterranean climate and good quality of life.",
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    desc: "Hungary's automotive and electronics manufacturing sectors employ thousands of foreign workers. Major companies like Audi, Mercedes, and Samsung have plants here.",
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    desc: "One of Europe's lowest unemployment rates means high demand for foreign workers. Strong manufacturing sector with companies like Skoda, Foxconn, and Hyundai.",
  },
];

const jobCategories = [
  { title: "Factory & Manufacturing", roles: ["Production Worker", "Machine Operator", "Assembly Line Worker", "Quality Controller", "Packaging Operator", "CNC Operator", "Welder"] },
  { title: "Construction", roles: ["General Labourer", "Mason", "Carpenter", "Electrician", "Plumber", "Steel Fixer", "Painter", "Scaffolder"] },
  { title: "Agriculture & Food", roles: ["Farm Worker", "Fruit Picker", "Greenhouse Worker", "Meat Processing", "Food Packaging", "Dairy Farm Worker"] },
  { title: "Warehouse & Logistics", roles: ["Warehouse Worker", "Forklift Operator", "Order Picker", "Delivery Driver", "Sorting Staff", "Inventory Manager"] },
  { title: "Hospitality & Tourism", roles: ["Hotel Housekeeping", "Kitchen Helper", "Chef / Cook", "Waiter / Waitress", "Resort Staff", "Cleaning Staff"] },
  { title: "Transport", roles: ["Truck Driver (CE License)", "Bus Driver", "Delivery Van Driver", "Courier", "Taxi Driver"] },
];

const whyEurope = [
  { title: "Schengen Access", desc: "Work permit in one EU/Schengen country lets you travel across 27 countries during holidays. Explore France, Germany, Italy, and more on weekends." },
  { title: "Path to Permanent Residency", desc: "After working 5 years in most European countries, you can apply for permanent residency. Some countries offer a path to citizenship too." },
  { title: "Higher Savings Than Gulf", desc: "While base salaries seem similar, European worker protections include overtime pay, holiday pay, and social security — your total compensation is much higher." },
  { title: "Worker Rights & Safety", desc: "EU labour laws are among the strongest in the world. Maximum 40-48 hour work weeks, mandatory rest days, health insurance, and workplace safety standards." },
  { title: "Free Healthcare", desc: "Most European countries provide free or subsidized healthcare to all legal workers. Your work permit includes health insurance coverage." },
  { title: "Better Quality of Life", desc: "Clean environment, safe cities, good public transport, and a healthy work-life balance. Europe consistently ranks highest in quality of life indices." },
];

const salaryRanges = [
  { role: "Factory Worker (Poland)", range: "€800 – €1,200/month" },
  { role: "Construction Worker (Romania)", range: "€700 – €1,100/month" },
  { role: "Welder (Poland)", range: "€1,000 – €1,800/month" },
  { role: "Truck Driver (CE)", range: "€1,200 – €2,500/month" },
  { role: "Farm Worker (Seasonal)", range: "€700 – €1,000/month" },
  { role: "Warehouse Worker", range: "€800 – €1,300/month" },
  { role: "Chef / Cook", range: "€900 – €1,500/month" },
  { role: "Hotel Housekeeping", range: "€700 – €1,000/month" },
];

export default function JobsInEurope() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in Europe", href: "/jobs/europe" },
        ])) }}
      />
      <main className="full-width-page">
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
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
              letterSpacing: "0.15em", color: "#93c5fd", textTransform: "uppercase", marginBottom: 16,
            }}>
              YOUR GATEWAY TO THE EUROPEAN UNION
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in Europe
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Poland, Romania, Croatia, Malta, Hungary — Europe is actively hiring Indian workers.
              Factory jobs, construction, agriculture, warehousing. EU work permits with path to PR.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "#1e3a5f", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why Europe */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Europe Over the Gulf?
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whyEurope.map((item) => (
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

        {/* Countries */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Countries We Recruit For
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24,
            }}>
              {countries.map((c) => (
                <div key={c.name} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 32 }}>{c.flag}</span>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700,
                      color: "var(--on-surface)",
                    }}>{c.name}</h3>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7, marginBottom: c.link ? 16 : 0,
                  }}>{c.desc}</p>
                  {c.link && (
                    <Link href={c.link} style={{
                      fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                      color: "var(--surface-tint)", textDecoration: "none",
                    }}>
                      View {c.name} jobs →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              In-Demand Job Categories Across Europe
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
                    color: "#1e3a5f", marginBottom: 14,
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
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
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
              European salaries are net (after tax). Most employers provide accommodation or housing allowance on top.
              Overtime is paid at 1.5x-2x rate.
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
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#1e3a5f", fontWeight: 600 }}>
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 40,
            }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: "Do I need to know the local language?", a: "For most factory and construction jobs, no. Basic English is usually sufficient. Some employers provide language training. Knowing basic phrases helps but isn't required at hiring." },
              { q: "Is European work permit better than a Gulf visa?", a: "European work permits offer stronger worker protections, path to permanent residency, Schengen travel access, and generally better work-life balance. Gulf jobs may offer higher take-home salary initially." },
              { q: "How cold is it in Europe?", a: "Winters in Poland and Romania can reach -10°C to -20°C. Employers provide heated accommodation and warm workplaces. You'll need to invest in good winter clothing." },
              { q: "Can I bring my family?", a: "Yes, after securing stable employment (usually 6-12 months), you can apply for family reunification visa for your spouse and children in most EU countries." },
              { q: "What is the visa processing time?", a: "Typically 4-8 weeks depending on the country. Poland work permits can take 2-3 months due to high demand. We handle all paperwork and keep you updated throughout." },
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
          background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Start Your European Dream Today
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Visit our office at Golden Avenue, Nakodar or call +91 98148-20432.
              Government licensed. Zero fees. Path to permanent residency.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "#1e3a5f", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{
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
