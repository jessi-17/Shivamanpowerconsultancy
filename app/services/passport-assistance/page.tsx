import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Passport Assistance Services | New Passport & Renewal | Nakodar & Jalandhar",
  description:
    "Passport assistance services from Nakodar, Jalandhar — new passport applications, renewal, ECR to ECNR conversion, name corrections, address changes. Complete guidance for Passport Seva Kendra applications. Licensed agency RA B-1794.",
  keywords: [
    "passport assistance nakodar",
    "passport help jalandhar",
    "new passport application punjab",
    "passport renewal nakodar",
    "ecr to ecnr conversion",
    "passport seva kendra jalandhar",
    "passport agent nakodar",
    "passport application help",
  ],
  alternates: {
    canonical: "/services/passport-assistance",
  },
};

const services = [
  {
    title: "Fresh / New Passport Application",
    desc: "Applying for a passport for the first time? We guide you through the entire process — from filling the online application on the Passport Seva portal to document preparation, appointment booking at the nearest PSK (Passport Seva Kendra) in Jalandhar, and police verification follow-up.",
    details: [
      "Online form filling on passportindia.gov.in",
      "Document checklist and preparation",
      "Appointment booking at PSK Jalandhar",
      "Police verification guidance",
    ],
  },
  {
    title: "Passport Renewal",
    desc: "If your passport is expired or nearing expiry (within 1 year), you need to renew it before applying for a work visa. We handle the re-issue application including address changes, photo updates, and ensuring your renewed passport has the correct ECR/ECNR endorsement.",
    details: [
      "Re-issue application filing",
      "Expired passport renewal",
      "Address or name change during renewal",
      "Expedited processing guidance",
    ],
  },
  {
    title: "ECR to ECNR Conversion",
    desc: "If you hold an ECR (Emigration Check Required) passport and have now passed your 10th class or obtained a degree, you can convert to ECNR status. This exempts you from emigration clearance requirements for Gulf countries, making future travel faster and simpler.",
    details: [
      "Eligibility verification for ECNR",
      "Supporting document preparation",
      "Application filing and tracking",
      "Updated passport with ECNR endorsement",
    ],
  },
  {
    title: "Corrections & Changes",
    desc: "Spelling mistakes in your name, incorrect date of birth, father's name errors — any discrepancy between your passport and other documents can cause visa rejection. We help you file correction applications and gather the supporting documents needed.",
    details: [
      "Name spelling corrections",
      "Date of birth corrections",
      "Father's / spouse's name changes",
      "Address update",
    ],
  },
  {
    title: "Damaged / Lost Passport",
    desc: "Lost or damaged passports need immediate attention, especially if you have an active job offer abroad. We guide you through the duplicate passport process including FIR filing, affidavit preparation, and expedited application at the PSK.",
    details: [
      "FIR filing guidance",
      "Affidavit preparation",
      "Duplicate passport application",
      "Re-issue with existing visa transfer",
    ],
  },
  {
    title: "Additional Booklet (36 to 60 pages)",
    desc: "If your passport is running out of blank pages for visa stamps but is still valid, you can apply for additional pages or a new booklet with 60 pages. Essential for frequent travellers and workers who change jobs between Gulf countries.",
    details: [
      "60-page jumbo passport application",
      "Page exhaustion documentation",
      "Expedited processing for urgent travel",
    ],
  },
];

const documentChecklist = [
  "Aadhaar Card (for address proof)",
  "PAN Card",
  "10th Class Marksheet / Certificate",
  "Voter ID Card",
  "Birth Certificate (for date of birth proof)",
  "Current Passport (for renewal / re-issue)",
  "Marriage Certificate (if applicable)",
  "Passport-size Photographs (white background, 2x2 inches)",
];

const faqs = [
  { q: "How do I apply for a new passport from Nakodar?", a: "Passport applications are filed online at passportindia.gov.in. After filling the form, you need to book an appointment at the Passport Seva Kendra (PSK) in Jalandhar, which is the nearest centre to Nakodar. We help you fill the form correctly, prepare documents, book the appointment, and guide you on what to expect at the PSK." },
  { q: "How long does it take to get a new passport?", a: "A normal (non-tatkal) fresh passport takes 15-30 working days after your PSK appointment, depending on police verification. Tatkal (urgent) applications are processed in 1-3 working days but require additional fees and documentation. Renewal is usually faster at 10-15 working days." },
  { q: "What is the difference between ECR and ECNR passport?", a: "ECR (Emigration Check Required) passports are issued to applicants who have not passed 10th class. ECR passport holders need emigration clearance from the Protector of Emigrants (through E-Migrate) when travelling to certain countries for employment. ECNR (Emigration Check Not Required) passports are issued to those with 10th pass or higher education, government officials, and certain other categories — they are exempt from emigration checks." },
  { q: "Can I convert my ECR passport to ECNR?", a: "Yes. If you have now passed your 10th class or obtained higher education since getting your ECR passport, you can apply for ECNR endorsement. You need to file a re-issue application with your educational certificates as proof. We handle the complete process." },
  { q: "My passport has a spelling mistake. Can it be corrected?", a: "Yes. Any errors in name, date of birth, or other details can be corrected by filing a re-issue application with supporting documents (birth certificate, school records, Aadhaar, etc.). It is critical to fix such errors before applying for a visa, as mismatched details will cause rejection." },
  { q: "Do you charge for passport assistance?", a: "When passport assistance is part of your overseas employment process through Shiva Travel, we provide this guidance at no extra cost — it is included in our recruitment services. We help you with form filling, document preparation, and appointment booking. Government fees for the passport itself are paid directly to the Passport Seva portal." },
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
  name: "Passport Assistance Services",
  description: "Complete passport assistance including new applications, renewal, ECR to ECNR conversion, corrections, and lost passport re-issue from Nakodar, Punjab.",
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
  serviceType: "Passport Application Assistance",
};

export default function PassportAssistancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Passport Assistance", href: "/services/passport-assistance" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Your First Step to Going Abroad
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Passport Assistance
                <br />
                & Application Support
                <br />
                <span style={{ color: "#0052dc" }}>from Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Your passport is the foundation of your overseas journey. Whether you need a fresh passport, renewal, ECR to ECNR conversion, or corrections — we guide you through every step. Our Nakodar office assists with online applications, document preparation, and appointment booking at the Passport Seva Kendra in Jalandhar.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Get Passport Help
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["New & Renewal", "ECR to ECNR", "Corrections & Re-issue"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Passport assistance at Shiva Travel Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Passport Services We Assist With</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                From first-time applications to complex corrections — we have helped thousands of workers from Nakodar and Jalandhar get their passports sorted for overseas employment.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {services.map((s) => (
                <div key={s.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.details.map((d) => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#0b1c30" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DOCUMENT CHECKLIST ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Documents You Will Need
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                The exact requirements depend on whether you are applying for a new passport, renewal, or re-issue. Here is a general checklist — we will guide you on the specific documents needed for your case.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {documentChecklist.map((doc) => (
                  <div key={doc} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, color: "#0b1c30" }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Office desk.webp" alt="Passport documents preparation at Nakodar office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About Passport Services</h2>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
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
              Need Help With<br />Your Passport?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our Nakodar office with your documents. We will guide you through every step.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar 144040
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
