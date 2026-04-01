import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visa Services | Work Visa Processing for Gulf & Europe",
  description:
    "Complete visa processing services for UAE, Saudi Arabia, Qatar, Poland, Romania. Work visa, employment visa, document attestation, medical coordination, E-Migrate compliance. Government licensed agency.",
};

const services = [
  {
    title: "Work Visa Processing",
    desc: "End-to-end work visa processing for Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain) and European countries (Poland, Romania, Croatia). We handle all paperwork from application to stamping.",
    points: ["Employment visa for Gulf countries", "Work permit for EU countries", "Visa stamping coordination", "Embassy appointment scheduling", "Visa status tracking"],
  },
  {
    title: "Document Preparation & Attestation",
    desc: "Complete document preparation and attestation services required for overseas employment. We ensure all your documents meet the destination country's requirements.",
    points: ["Passport assistance (new & renewal)", "Educational certificate attestation", "Experience certificate preparation", "Police clearance certificate", "Document translation (if required)"],
  },
  {
    title: "Medical Coordination",
    desc: "We coordinate your medical examination at GAMCA-approved and embassy-approved medical centres to ensure smooth visa processing.",
    points: ["GAMCA medical for Gulf countries", "Embassy-approved medical for Europe", "Medical appointment scheduling", "Report collection & submission", "Re-medical coordination if needed"],
  },
  {
    title: "E-Migrate Compliance",
    desc: "Full compliance with India's E-Migrate system — mandatory for all Indian workers going to ECR countries. We handle registration and emigration clearance.",
    points: ["E-Migrate registration", "Emigration clearance processing", "POE (Protector of Emigrants) coordination", "Emigration check not required (ECNR) guidance", "MADAD portal assistance"],
  },
  {
    title: "Pre-Departure Orientation",
    desc: "Every worker gets a comprehensive briefing before departure — covering destination country laws, workplace rights, cultural norms, and emergency contacts.",
    points: ["Destination country labour laws", "Worker rights & responsibilities", "Cultural orientation", "Emergency contact information", "Airport & arrival procedures"],
  },
  {
    title: "Employer Verification & Job Matching",
    desc: "We verify every employer before sending workers. Our job matching process ensures your skills align with the role for better job satisfaction and performance.",
    points: ["Employer background verification", "Contract review & translation", "Salary & benefits confirmation", "Accommodation verification", "Skill-based job matching"],
  },
];

const destinations = [
  { name: "UAE", flag: "🇦🇪", href: "/jobs/uae", types: "Employment Visa, Mission Visa" },
  { name: "Saudi Arabia", flag: "🇸🇦", href: "/jobs/saudi-arabia", types: "Work Visa, Iqama" },
  { name: "Qatar", flag: "🇶🇦", href: "/jobs/qatar", types: "Work Permit, QID" },
  { name: "Poland", flag: "🇵🇱", href: "/jobs/poland", types: "Type A Work Permit, National Visa D" },
  { name: "Romania", flag: "🇷🇴", href: "/jobs/romania", types: "Work Permit, Long Stay Visa" },
  { name: "Europe (Others)", flag: "🇪🇺", href: "/jobs/europe", types: "EU Blue Card, Work Permits" },
];

const process = [
  { step: "01", title: "Walk In or Call", desc: "Visit our Nakodar office or call +91 98148-20432. We'll discuss your skills, experience, and preferred destination." },
  { step: "02", title: "Document Collection", desc: "We collect and verify your documents — passport, certificates, experience letters. We'll tell you exactly what's needed." },
  { step: "03", title: "Job Matching", desc: "We match your profile with verified employer openings. You may have a direct interview or video call." },
  { step: "04", title: "Visa Processing", desc: "Once selected, we handle all visa paperwork — application, medical, attestation, E-Migrate clearance." },
  { step: "05", title: "Pre-Departure Briefing", desc: "Comprehensive orientation on your destination country, workplace expectations, rights, and emergency procedures." },
  { step: "06", title: "Departure & Follow-Up", desc: "We coordinate your travel and stay in touch after arrival to ensure everything goes smoothly." },
];

export default function Services() {
  return (
    <>
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
              END-TO-END RECRUITMENT SERVICES
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Visa Services &<br />Recruitment Solutions
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
            }}>
              From document preparation to visa stamping, medical coordination to pre-departure
              orientation — we handle everything so you can focus on your new career.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Our Services
            </h2>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24,
            }}>
              {services.map((s) => (
                <div key={s.title} style={{
                  padding: 28, borderRadius: 16, backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 10,
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.7, marginBottom: 16,
                  }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {s.points.map((p) => (
                      <li key={p} style={{
                        fontFamily: "var(--font-body)", fontSize: 13, color: "var(--on-surface-variant)",
                        paddingLeft: 16, position: "relative",
                      }}>
                        <span style={{ position: "absolute", left: 0, color: "var(--surface-tint)" }}>+</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Types by Destination */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              Visa Types by Destination
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {destinations.map((d) => (
                <Link key={d.name} href={d.href} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 24px", borderRadius: 14,
                  backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                  textDecoration: "none", transition: "all 150ms",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontSize: 28 }}>{d.flag}</span>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                        color: "var(--on-surface)",
                      }}>{d.name}</p>
                      <p style={{
                        fontFamily: "var(--font-body)", fontSize: 13, color: "var(--on-surface-variant)",
                      }}>{d.types}</p>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                    color: "var(--surface-tint)",
                  }}>View Jobs →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "80px 24px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "var(--on-surface)", textAlign: "center", marginBottom: 48,
            }}>
              How It Works
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {process.map((p) => (
                <div key={p.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    backgroundColor: "var(--primary)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                  }}>{p.step}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                      color: "var(--on-surface)", marginBottom: 4,
                    }}>{p.title}</h3>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                      lineHeight: 1.7,
                    }}>{p.desc}</p>
                  </div>
                </div>
              ))}
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
              Ready to Start?
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Walk in to our office at Golden Avenue, Nakodar or call us.
              No fees. No hidden charges. Government licensed.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Contact Us
              </Link>
              <a href="tel:+919814820432" style={{
                display: "inline-block", padding: "14px 36px",
                backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Call +91 98148-20432
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
