import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "E-Migrate Registration & Processing | Nakodar & Jalandhar | Shiva Travel",
  description:
    "Complete E-Migrate registration and emigration clearance from Nakodar, Jalandhar. Government-mandated E-Migrate processing for Gulf countries — UAE, Saudi Arabia, Qatar, Kuwait, Bahrain. Licensed agency RA B-1794.",
  keywords: [
    "e-migrate registration nakodar",
    "e-migrate processing jalandhar",
    "emigration clearance punjab",
    "e-migrate for gulf jobs",
    "e-migrate agent nakodar",
    "emigration check required",
    "protector of emigrants",
    "e-migrate portal help",
  ],
  alternates: {
    canonical: "/services/e-migrate",
  },
};

const steps = [
  { step: "01", title: "Worker Registration", desc: "We create your profile on the official E-Migrate portal (emigrate.gov.in) with your passport, photo, and personal details. Every field is verified to avoid rejection." },
  { step: "02", title: "Employer & Foreign Principal Verification", desc: "Your employer abroad must be registered on E-Migrate as a Foreign Employer (FE). We coordinate with the employer to ensure their FE registration and project details are active and valid." },
  { step: "03", title: "Recruiting Agent Linkage", desc: "As a licensed recruiting agent (RA B-1794), we link your application to our RA profile. This is mandatory — only MEA-licensed agents can process E-Migrate applications." },
  { step: "04", title: "Document Upload & Verification", desc: "Employment contract, visa copy, medical certificate, insurance policy, and skill certificates are uploaded. Our team cross-checks every document against POE requirements." },
  { step: "05", title: "Emigration Clearance", desc: "Once all documents are verified, the Protector of Emigrants (POE) issues emigration clearance. We track the application status and resolve any queries raised by the POE office." },
  { step: "06", title: "Clearance Certificate & Departure", desc: "You receive your Emigration Clearance (EC) status linked to your passport. At the airport, immigration checks your EC status electronically — no paper certificate needed." },
];

const ecrCountries = [
  "United Arab Emirates (UAE)",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "Malaysia",
  "Libya",
  "Jordan",
  "Yemen",
  "Sudan",
  "Syria",
  "Iraq",
  "Lebanon",
  "Thailand",
  "Indonesia",
  "Afghanistan",
];

const documents = [
  "Valid Passport (with ECR stamp)",
  "Passport-size Photographs (white background)",
  "Employment Contract / Offer Letter",
  "Visa Copy (work visa / employment visa)",
  "Medical Fitness Certificate (GAMCA for Gulf)",
  "Insurance Policy (as per MEA norms)",
  "Skill Certificate (if applicable)",
  "Educational Certificates (10th / 12th marksheet)",
];

const faqs = [
  { q: "What is E-Migrate and why is it required?", a: "E-Migrate is a mandatory online system launched by the Ministry of External Affairs, Government of India. It is required for all Indian workers holding ECR (Emigration Check Required) passports who are travelling to 18 designated countries for employment. The system protects workers from exploitation by verifying employers, contracts, and working conditions before departure." },
  { q: "Who needs E-Migrate clearance?", a: "Any Indian citizen holding an ECR passport who is going abroad for employment to an ECR country (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, etc.) needs E-Migrate clearance. If your passport has an ECNR (Emigration Check Not Required) stamp — typically for graduates and certain professionals — you are exempt." },
  { q: "How long does E-Migrate processing take?", a: "When all documents are in order, E-Migrate clearance typically takes 3 to 7 working days. However, if the POE raises queries or if the employer's FE registration is pending, it can take longer. We handle all follow-ups to ensure minimum delays." },
  { q: "Can I apply for E-Migrate on my own?", a: "Technically, the portal allows individual registration. However, the process requires coordination between the worker, the recruiting agent (RA), and the foreign employer (FE). Since the employer must be registered and linked, and many steps require RA involvement, most workers process it through a licensed agency like ours." },
  { q: "What happens if my E-Migrate is rejected?", a: "Common reasons for rejection include mismatched contract details, incomplete employer registration, or document discrepancies. We review the rejection reason, correct the issues, and resubmit. Our experience with the POE office helps resolve queries quickly." },
  { q: "Is there a fee for E-Migrate registration?", a: "The government portal itself does not charge workers a fee. As per Indian law, all recruitment costs are borne by the employer. Shiva Travel maintains minimal and transparent charges with no hidden fees — this includes E-Migrate processing, documentation, and coordination." },
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
  name: "E-Migrate Registration & Processing",
  description: "Complete E-Migrate registration, document upload, employer verification, and emigration clearance processing for Indian workers going to Gulf and other ECR countries.",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    url: "https://shivatravelconsultant.in",
    telephone: "+91-9814820432",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
      addressLocality: "Nakodar",
      addressRegion: "Punjab",
      postalCode: "144040",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Nakodar" },
    { "@type": "City", name: "Jalandhar" },
    { "@type": "State", name: "Punjab" },
  ],
  serviceType: "Emigration Clearance Processing",
};

export default function EMigratePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "E-Migrate Processing", href: "/services/e-migrate" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Government Mandated Process
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                E-Migrate Registration
                <br />
                & Emigration Clearance
                <br />
                <span style={{ color: "#0052dc" }}>from Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                E-Migrate is the Government of India&apos;s mandatory online system that protects Indian workers going abroad for employment. Every worker with an ECR passport must get emigration clearance through the E-Migrate portal before departing for Gulf countries. We handle the entire process from our Nakodar office — registration, document upload, employer verification, and POE clearance.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Start E-Migrate Process
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Licensed RA B-1794", "No Hidden Fees", "POE Approved"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="E-Migrate processing at Shiva Travel office in Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>5,000+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  E-Migrate Clearances<br />Processed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT IS E-MIGRATE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16, textAlign: "center" }}>
                What Is E-Migrate?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.8, marginBottom: 20, textAlign: "center" }}>
                E-Migrate is an online platform operated by the Ministry of External Affairs (MEA) under the Emigration Act, 1983. It was launched to create a transparent, paperless system for managing the emigration of Indian workers to countries where exploitation risks are high.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.8, marginBottom: 20, textAlign: "center" }}>
                The system connects three stakeholders — the <strong>worker</strong>, the <strong>recruiting agent (RA)</strong>, and the <strong>foreign employer (FE)</strong> — under the oversight of the Protector of Emigrants (POE). No Indian worker with an ECR passport can board an international flight for employment without valid emigration clearance on the E-Migrate system.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.8, textAlign: "center" }}>
                As a registered recruiting agent (RA B-1794) with the MEA, Shiva Travel & Manpower Consultants is authorized to process E-Migrate applications. We handle hundreds of clearances every year from our Nakodar office for workers heading to UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and other ECR countries.
              </p>
            </div>
          </div>
        </section>

        {/* ===== STEP-BY-STEP PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                How We Process Your E-Migrate Clearance
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                From registration to emigration clearance — here is exactly what happens when you walk into our Nakodar office.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {steps.map((s) => (
                <div key={s.step} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#0052dc", opacity: 0.2, marginBottom: 12 }}>{s.step}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ECR COUNTRIES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                ECR Countries Where E-Migrate Is Mandatory
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                If you hold an ECR passport and are travelling for employment to any of these countries, you must obtain emigration clearance through the E-Migrate system.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, maxWidth: 900, margin: "0 auto" }}>
              {ecrCountries.map((country) => (
                <div key={country} style={{ padding: "14px 20px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{country}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DOCUMENTS REQUIRED ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Documents Required for E-Migrate
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Bring these documents to our Nakodar office. We will review, verify, and upload them to the E-Migrate portal on your behalf.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {documents.map((doc) => (
                  <div key={doc} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, color: "#0b1c30" }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Office desk.webp" alt="Document verification for E-Migrate at Nakodar office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Process E-Migrate Through Shiva Travel?
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {[
                { title: "MEA Licensed Recruiting Agent", desc: "We hold RA License B-1794 from the Ministry of External Affairs. Only licensed agents can link worker applications on the E-Migrate portal. Processing through unlicensed agents is illegal and risky." },
                { title: "No Hidden Fees", desc: "Indian law mandates that all major recruitment costs are borne by the employer. We maintain minimal and transparent charges — no hidden fees for E-Migrate processing, documentation, or any part of the recruitment process." },
                { title: "Direct POE Coordination", desc: "We have processed thousands of emigration clearances and have established working relationships with POE offices. Any queries or objections raised are resolved quickly with proper documentation." },
                { title: "Local Office in Nakodar", desc: "No need to travel to Jalandhar, Chandigarh, or Delhi. Walk into our Nakodar office with your documents, and we handle everything. Monday to Saturday, 9am to 6pm." },
                { title: "End-to-End Support", desc: "E-Migrate is just one step. We also handle your visa processing, GAMCA medical, document attestation, insurance, and pre-departure briefing — all from one office." },
                { title: "20+ Years of Experience", desc: "Since 2002, we have been sending workers from Punjab to the Gulf and Europe. Our experience means fewer rejections, faster clearances, and complete compliance." },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About E-Migrate</h2>
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
              Need E-Migrate Clearance?<br />Visit Our Nakodar Office
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Walk-in consultations available Monday to Saturday, 9am to 6pm.
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
