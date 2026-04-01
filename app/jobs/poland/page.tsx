import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs in Poland | Factory, Construction & Warehouse Work for Indians",
  description:
    "Find high-paying factory and construction jobs in Poland through Shiva Travel & Manpower Consultants. EU work permit with path to PR. Government licensed recruitment. Zero candidate fees.",
};

const jobCategories = [
  { title: "Factory & Production", roles: ["Production Worker", "Machine Operator", "Assembly Line Worker", "CNC Operator", "Welder", "Quality Controller", "Packaging Operator"] },
  { title: "Construction", roles: ["General Labourer", "Mason", "Carpenter", "Electrician", "Plumber", "Steel Fixer", "Painter", "Tile Fixer"] },
  { title: "Warehouse & Logistics", roles: ["Warehouse Worker", "Forklift Operator", "Order Picker", "Sorting Staff", "Inventory Clerk", "Loading/Unloading"] },
  { title: "Agriculture", roles: ["Farm Worker", "Fruit/Vegetable Picker", "Greenhouse Worker", "Poultry Farm Worker", "Dairy Worker"] },
  { title: "Food Processing", roles: ["Meat Processing Worker", "Fish Processing", "Bakery Worker", "Food Packaging", "Cold Storage Worker"] },
  { title: "Transport", roles: ["Truck Driver (CE)", "Delivery Driver", "Bus Driver", "Courier"] },
];

const whyPoland = [
  { title: "#1 European Destination for Indians", desc: "Poland issues more work permits to Indians than any other European country. The Polish government actively encourages Indian worker immigration to fill labour shortages." },
  { title: "EU Work Permit = Schengen Travel", desc: "Your Polish work permit lets you travel visa-free across 27 Schengen countries. Visit Germany, France, Italy, Spain on weekends and holidays." },
  { title: "Path to Permanent Residency", desc: "After 5 years of continuous legal work in Poland, you can apply for permanent residence. After 8 years, you can apply for Polish (EU) citizenship." },
  { title: "Low Cost of Living", desc: "Poland is one of the most affordable EU countries. Rent, food, and transport cost a fraction of Western Europe. Your savings go much further." },
  { title: "Growing Economy", desc: "Poland's economy has grown continuously for 30+ years — the only EU country to avoid recession during 2008. Strong manufacturing, automotive, and logistics sectors." },
  { title: "Good Worker Protections", desc: "EU labour laws protect all workers equally. Health insurance, paid holidays, overtime compensation, and workplace safety standards are guaranteed by law." },
];

const salaryRanges = [
  { role: "Factory Worker", range: "PLN 4,200 – 5,500/month (€950 – €1,250)" },
  { role: "Welder", range: "PLN 5,000 – 8,000/month (€1,130 – €1,800)" },
  { role: "Construction Worker", range: "PLN 4,500 – 6,500/month (€1,000 – €1,470)" },
  { role: "Forklift Operator", range: "PLN 4,500 – 6,000/month (€1,000 – €1,360)" },
  { role: "Truck Driver (CE)", range: "PLN 6,000 – 10,000/month (€1,360 – €2,270)" },
  { role: "Farm Worker", range: "PLN 3,500 – 4,500/month (€800 – €1,020)" },
  { role: "Meat Processing", range: "PLN 4,000 – 5,500/month (€900 – €1,250)" },
  { role: "CNC Operator", range: "PLN 5,500 – 8,000/month (€1,250 – €1,800)" },
];

export default function JobsInPoland() {
  return (
    <>
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
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
              letterSpacing: "0.15em", color: "#fca5a5", textTransform: "uppercase", marginBottom: 16,
            }}>
              EUROPE&apos;S #1 DESTINATION FOR INDIAN WORKERS
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in Poland
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Factory jobs, construction, warehousing, agriculture — Poland is hiring thousands of Indian workers
              every month. EU work permit with path to permanent residency.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "#991b1b", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why Poland */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Poland is the Best Choice for Punjabi Workers
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whyPoland.map((item) => (
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
              Most In-Demand Jobs in Poland
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
                    color: "#dc2626", marginBottom: 14,
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
              Expected Salary Ranges in Poland
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
              textAlign: "center", marginBottom: 40, lineHeight: 1.6,
            }}>
              Poland&apos;s minimum wage is PLN 4,300/month gross (2025). Most factory jobs pay above minimum.
              Overtime is paid at 1.5x-2x rate. Accommodation is often provided or subsidized.
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
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#dc2626", fontWeight: 600 }}>
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
              { q: "Do I need to know Polish?", a: "Not for most factory and warehouse jobs. Employers provide basic training in the workplace language. Many companies have Indian supervisors who translate. Learning basic Polish phrases helps with daily life." },
              { q: "How cold are Polish winters?", a: "December to February temperatures range from -5°C to -15°C (sometimes lower). Accommodation is always heated. Employers provide warm work clothing for outdoor work. You'll need a good winter jacket, boots, and thermal wear." },
              { q: "Can I get permanent residency in Poland?", a: "Yes. After 5 years of continuous legal residence and work in Poland, you can apply for a permanent residence permit. After 8 years, you may be eligible for Polish citizenship (EU citizenship)." },
              { q: "Is accommodation provided?", a: "Most employers either provide shared accommodation near the workplace or give a housing allowance. Shared apartments typically cost PLN 500-800/month per person if you arrange your own." },
              { q: "How much can I send home every month?", a: "Workers typically save and send home €500-€1,000 per month (₹45,000-₹90,000). This depends on your salary, overtime, and spending. Poland's low cost of living helps maximize savings." },
              { q: "How long does the work permit take?", a: "Polish work permits (Type A) currently take 2-4 months to process due to high demand. We submit your application early and handle all paperwork. The total process from application to flying takes about 3-5 months." },
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
          background: "linear-gradient(135deg, #dc2626, #991b1b)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Ready to Work in Poland?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Hundreds of Punjabi workers have already gone to Poland through us.
              Visit our office at Golden Avenue, Nakodar or call +91 98148-20432.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "#991b1b", fontFamily: "var(--font-display)", fontSize: 15,
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
