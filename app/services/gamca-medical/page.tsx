import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "GAMCA Medical Test | GCC Approved Medical Centre | Nakodar & Jalandhar",
  description:
    "GAMCA medical test assistance for Gulf country employment visas. GCC approved medical examination for UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman. Coordination with GAMCA-approved centres near Jalandhar. Licensed agency RA B-1794.",
  keywords: [
    "gamca medical nakodar",
    "gamca medical test jalandhar",
    "gcc approved medical punjab",
    "gamca medical for uae visa",
    "gamca medical for saudi visa",
    "gulf medical examination",
    "wafid medical test",
    "gamca medical centre near me",
  ],
  alternates: {
    canonical: "/services/gamca-medical",
  },
};

const medicalTests = [
  { test: "Complete Blood Count (CBC)", purpose: "Screens for infections, anaemia, and blood disorders." },
  { test: "Blood Sugar (Fasting & PP)", purpose: "Checks for diabetes, a common disqualifying condition if uncontrolled." },
  { test: "Liver Function Tests (LFT)", purpose: "Assesses liver health; screens for hepatitis B and C." },
  { test: "Kidney Function Tests (KFT)", purpose: "Evaluates renal health through creatinine and urea levels." },
  { test: "HIV / AIDS Screening", purpose: "Mandatory screening. A positive result leads to visa rejection." },
  { test: "Hepatitis B & C", purpose: "Tests for HBsAg and Anti-HCV. Active infection is grounds for rejection." },
  { test: "Chest X-Ray", purpose: "Screens for tuberculosis (TB) and other pulmonary conditions." },
  { test: "Urine Analysis", purpose: "Checks for drugs, infections, kidney issues, and pregnancy." },
  { test: "VDRL / Syphilis Test", purpose: "Screens for sexually transmitted infections." },
  { test: "Physical Examination", purpose: "General check-up including blood pressure, vision, hearing, BMI, and limb functionality." },
];

const processSteps = [
  { step: "01", title: "Online Registration on GAMCA Portal", desc: "We register you on the official GAMCA/Wafid portal (wafid.com) with your passport details, destination country, and visa type. You receive a unique GAMCA slip number required at the medical centre." },
  { step: "02", title: "Appointment at Approved Medical Centre", desc: "GAMCA medical tests can only be done at GCC-approved medical centres. The nearest approved centres to Nakodar are in Jalandhar and Ludhiana. We book your appointment and guide you on preparation." },
  { step: "03", title: "Medical Examination", desc: "On your appointment day, you visit the approved centre with your passport, GAMCA slip, and passport-size photos. The examination typically takes 2-3 hours and includes blood tests, X-ray, urine test, and physical examination." },
  { step: "04", title: "Report Processing & Verification", desc: "Test results are processed by the medical centre and uploaded to the GAMCA/Wafid system. Reports typically take 3-5 working days. If any test needs to be repeated, we coordinate the follow-up." },
  { step: "05", title: "Medical Fitness Certificate", desc: "Once all results are clear, your medical fitness status is updated online. This status is electronically linked to your visa application — the embassy and employer can verify it directly. We confirm clearance before proceeding with your visa." },
];

const countrySLips = [
  { country: "UAE (Dubai, Abu Dhabi, Sharjah)", portal: "Wafid.com", validity: "Medical report valid for 60 days from the date of examination.", notes: "UAE uses the Wafid system. Registration is done online and results are verified electronically by MOHRE (Ministry of Human Resources)." },
  { country: "Saudi Arabia", portal: "GAMCA Portal", validity: "Medical report valid for 90 days.", notes: "Saudi Arabia requires GAMCA medical through designated centres. Results are verified by the Saudi Embassy during visa stamping." },
  { country: "Qatar", portal: "GAMCA Portal", validity: "Medical report valid for 90 days.", notes: "Qatar follows standard GAMCA procedures. Some employers may require additional medical tests at specific centres." },
  { country: "Kuwait", portal: "GAMCA Portal", validity: "Medical report valid for 90 days.", notes: "Kuwait GAMCA medical is mandatory for all work visa categories including domestic workers." },
  { country: "Bahrain", portal: "GAMCA Portal", validity: "Medical report valid for 90 days.", notes: "Bahrain requires standard GAMCA medical. Results are checked during visa processing." },
  { country: "Oman", portal: "GAMCA Portal", validity: "Medical report valid for 90 days.", notes: "Oman follows GAMCA medical requirements for all employment visa categories." },
];

const faqs = [
  { q: "What is GAMCA medical and who needs it?", a: "GAMCA stands for Gulf Approved Medical Centres Association. It is a mandatory medical fitness examination required for anyone applying for an employment visa to any of the six GCC countries — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. The exam ensures that workers are medically fit and free from communicable diseases before entering Gulf countries." },
  { q: "Where is the nearest GAMCA-approved medical centre to Nakodar?", a: "The nearest GAMCA-approved medical centres are in Jalandhar (approximately 25 km from Nakodar) and Ludhiana. We coordinate your appointment at the most convenient approved centre and guide you on the exact location, timings, and preparation required." },
  { q: "What should I bring to the GAMCA medical test?", a: "You need to bring your original passport, the GAMCA slip (which we generate for you from the portal), 4 passport-size photographs with white background, and any prescription medications you are currently taking. Come on an empty stomach (8-12 hours fasting) as blood tests require fasting samples." },
  { q: "What conditions can cause GAMCA medical failure?", a: "The most common reasons for GAMCA failure are active tuberculosis (TB), HIV/AIDS, Hepatitis B or C (active infection), uncontrolled diabetes, drug abuse, and severe vision or hearing impairment. Minor conditions that are under treatment usually do not cause rejection. If you have a pre-existing condition, consult us before registering." },
  { q: "What happens if I fail the GAMCA medical?", a: "If a specific test result is abnormal, the medical centre may ask you to repeat that test after treatment. If a condition is temporary (like high blood sugar due to diet), you can retest after 2-4 weeks. For serious conditions like active TB or HIV, the medical will be marked as unfit and the visa process cannot proceed." },
  { q: "How long is the GAMCA medical report valid?", a: "GAMCA medical reports are typically valid for 60-90 days depending on the destination country. UAE (Wafid) reports are valid for 60 days, while Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman reports are valid for 90 days. If your visa processing takes longer, you may need to repeat the medical." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GAMCA Medical Test Assistance",
  description: "Complete GAMCA medical test coordination for Gulf country employment visas. Registration on GAMCA/Wafid portal, appointment booking at approved medical centres, and report tracking.",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    url: "https://shivatravelconsultant.in",
    telephone: "+91-9814820432",
  },
  areaServed: [
    { "@type": "City", name: "Nakodar" },
    { "@type": "City", name: "Jalandhar" },
    { "@type": "State", name: "Punjab" },
  ],
  serviceType: "Medical Fitness Examination Coordination",
};

export default function GAMCAMedicalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "GAMCA Medical", href: "/services/gamca-medical" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Mandatory for Gulf Employment
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                GAMCA Medical Test
                <br />
                for Gulf Country Visas
                <br />
                <span style={{ color: "#0052dc" }}>from Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                GAMCA (Gulf Approved Medical Centres Association) medical examination is mandatory for every worker travelling to GCC countries for employment. The test screens for communicable diseases and ensures medical fitness. We handle your GAMCA registration, appointment booking at approved centres near Jalandhar, and report tracking — all coordinated from our Nakodar office.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Book GAMCA Medical
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["GCC Approved Process", "No Hidden Fees", "All 6 Gulf Countries"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/carousel 3.webp" alt="GAMCA medical test coordination from Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT TESTS ARE INCLUDED ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>What Does the GAMCA Medical Include?</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The GAMCA examination is a comprehensive health screening. Here is every test that will be conducted at the approved medical centre.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 16 }}>
              {medicalTests.map((t) => (
                <div key={t.test} style={{ backgroundColor: "#f8f9ff", borderRadius: 12, padding: "20px 24px", border: "1px solid #e5e7eb", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 4 }}>{t.test}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{t.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS STEPS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>How We Coordinate Your GAMCA Medical</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {processSteps.map((s) => (
                <div key={s.step} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#0052dc", opacity: 0.2, marginBottom: 12 }}>{s.step}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COUNTRY-WISE DETAILS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                GAMCA Medical by Destination Country
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Each GCC country has slightly different registration portals and validity periods. Here are the specifics.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {countrySLips.map((c) => (
                <div key={c.country} style={{ padding: 28, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{c.country}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#93c5fd", marginBottom: 10 }}>Portal: {c.portal} | {c.validity}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{c.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About GAMCA Medical</h2>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <summary style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <span style={{ fontSize: 20, color: "#64748b", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </summary>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginTop: 14 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready for Your<br />GAMCA Medical Test?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              We register you on the portal, book your appointment, and track your results.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Visit our Nakodar office or call us to start the process.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Call +91 98148-20432
              </a>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 24 }}>
              Government Licensed | RA B-1794 | No Hidden Fees
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
