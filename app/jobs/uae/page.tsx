import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Jobs in UAE | Dubai, Abu Dhabi, Sharjah Work Opportunities",
  description:
    "Find high-paying jobs in UAE through Shiva Travel & Manpower Consultants. Government licensed recruitment for Dubai, Abu Dhabi, Sharjah. Factory workers, drivers, electricians, plumbers, and more. Zero candidate fees.",
};

const jobCategories = [
  { title: "Construction & Labour", roles: ["Mason", "Steel Fixer", "Carpenter", "Scaffolder", "Painter", "Tile Fixer", "Plumber", "Shuttering Carpenter"] },
  { title: "Factory & Manufacturing", roles: ["Machine Operator", "Production Helper", "Quality Inspector", "Packaging Operator", "Forklift Operator", "CNC Operator"] },
  { title: "Hospitality & Food", roles: ["Chef / Cook", "Waiter / Steward", "Kitchen Helper", "Housekeeping Staff", "Room Attendant", "Restaurant Supervisor"] },
  { title: "Driving & Transport", roles: ["Heavy Vehicle Driver", "Light Vehicle Driver", "Bus Driver", "Delivery Driver", "Forklift Operator"] },
  { title: "Technical & Skilled", roles: ["Electrician", "AC Technician", "Welder", "Pipe Fitter", "Auto Mechanic", "HVAC Technician"] },
  { title: "Office & Admin", roles: ["Data Entry Operator", "Receptionist", "Admin Assistant", "Accountant", "Sales Executive", "Store Keeper"] },
];

const whyUAE = [
  { title: "Tax-Free Salary", desc: "UAE has zero income tax — your entire salary goes directly to your pocket. Workers typically save 60-70% of their earnings." },
  { title: "World-Class Infrastructure", desc: "Modern cities with excellent public transport, healthcare facilities, and worker accommodation standards regulated by the government." },
  { title: "High Demand for Workers", desc: "UAE's booming construction, hospitality, and manufacturing sectors create thousands of new job openings every month." },
  { title: "Close to India", desc: "Just 3-4 hours flight from Punjab. Easy to visit family during holidays. Large Punjabi community already established." },
  { title: "Free Accommodation & Food", desc: "Most employers provide free accommodation, transport, and meals as part of the employment package." },
  { title: "Legal Protections", desc: "UAE labour law protects workers' rights including timely salary payment, end-of-service benefits, and annual leave." },
];

const salaryRanges = [
  { role: "Construction Worker", range: "AED 1,500 – 2,500/month" },
  { role: "Electrician", range: "AED 2,000 – 3,500/month" },
  { role: "Welder", range: "AED 2,000 – 4,000/month" },
  { role: "Heavy Driver", range: "AED 3,000 – 5,000/month" },
  { role: "Chef / Cook", range: "AED 2,500 – 4,500/month" },
  { role: "AC Technician", range: "AED 2,500 – 4,000/month" },
  { role: "Machine Operator", range: "AED 1,800 – 3,000/month" },
  { role: "Security Guard", range: "AED 1,500 – 2,500/month" },
];

const visaProcess = [
  { step: "1", title: "Apply With Us", desc: "Visit our Nakodar office or call us. We'll understand your skills, experience, and preferred job type." },
  { step: "2", title: "Document Preparation", desc: "We help you prepare passport, medical certificate, educational documents, and experience certificates." },
  { step: "3", title: "Job Matching", desc: "We match your profile with verified employers in UAE. You may have a direct interview or video call with the employer." },
  { step: "4", title: "Visa Processing", desc: "Once selected, the employer applies for your work visa. Processing takes 2-4 weeks typically." },
  { step: "5", title: "Pre-Departure Briefing", desc: "We brief you on UAE labour laws, your rights, accommodation details, and what to expect on arrival." },
  { step: "6", title: "Fly to UAE", desc: "You fly to UAE with your employment visa. The employer arranges airport pickup and accommodation." },
];

export default function JobsInUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in UAE", href: "/jobs/uae" },
        ])) }}
      />
      <main className="full-width-page">
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
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", color: "#60a5fa", textTransform: "uppercase", marginBottom: 16,
            }}>
              MIDDLE EAST&apos;S TOP DESTINATION
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Jobs in UAE
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
            }}>
              Dubai, Abu Dhabi, Sharjah — thousands of verified job openings for skilled and unskilled workers.
              Tax-free salary. Free accommodation. Government-approved recruitment through Shiva Travel & Manpower Consultants.
            </p>
            <Link href="/contactus" style={{
              display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
              color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
              fontWeight: 700, borderRadius: 10, textDecoration: "none",
            }}>
              Apply Now — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Why UAE */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Why Thousands from Punjab Choose UAE
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24,
            }}>
              {whyUAE.map((item) => (
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
              Available Job Categories in UAE
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
              textAlign: "center", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.6,
            }}>
              We recruit for all major industries across Dubai, Abu Dhabi, Sharjah, Ajman, and other emirates.
              Here are the most in-demand categories:
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
                    color: "var(--primary)", marginBottom: 14,
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
              Expected Salary Ranges in UAE
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
              textAlign: "center", marginBottom: 40, lineHeight: 1.6,
            }}>
              These are approximate monthly salaries. Actual salary depends on employer, experience, and specific role.
              Most packages include free accommodation, transport, and meals.
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
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--surface-tint)", fontWeight: 600 }}>
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Process */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              How We Get You to UAE
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {visaProcess.map((item) => (
                <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: "var(--primary)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                  }}>{item.step}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                      color: "var(--on-surface)", marginBottom: 4,
                    }}>{item.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                      lineHeight: 1.7,
                    }}>{item.desc}</p>
                  </div>
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
              { q: "Do I need to pay any fees to get a job in UAE?", a: "No. Through Shiva Travel & Manpower Consultants, we charge zero recruitment fees from candidates. The employer bears all costs including visa, ticket, and recruitment charges as per UAE and Indian government regulations." },
              { q: "What documents do I need?", a: "Valid passport (minimum 6 months validity), passport-size photographs, medical fitness certificate from a GAMCA-approved center, educational certificates, and experience certificates if applicable." },
              { q: "How long does the visa process take?", a: "Typically 2-4 weeks after employer selection. This includes visa stamping, medical clearance, and emigration clearance from the Indian government." },
              { q: "Is accommodation provided?", a: "Yes, most UAE employers provide free shared accommodation, daily transport to work, and meals. Some companies offer a housing allowance instead." },
              { q: "Can I bring my family to UAE?", a: "Once you have a stable job and meet the minimum salary requirement (currently AED 4,000/month), you can sponsor your spouse and children for a family visa." },
              { q: "What is the contract duration?", a: "Standard employment contracts in UAE are for 2 years. After completion, you can renew or switch employers. You're entitled to end-of-service gratuity, return ticket, and pending leave salary." },
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
          background: "linear-gradient(135deg, var(--primary), #0052dc)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Ready to Start Your Career in UAE?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Walk in to our office at Golden Avenue, Nakodar or call us today.
              No fees. No hidden charges. Government licensed recruitment.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
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
