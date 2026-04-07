import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Document Attestation Services | Nakodar & Jalandhar | Shiva Travel",
  description:
    "Document attestation and apostille services from Nakodar, Jalandhar for overseas employment. HRD, MEA, and embassy attestation for educational certificates, birth certificates, marriage certificates. Government licensed agency.",
  keywords: [
    "document attestation nakodar",
    "certificate attestation jalandhar",
    "HRD attestation punjab",
    "MEA attestation for gulf",
    "embassy attestation services",
    "apostille services nakodar",
    "degree attestation for work visa",
    "document legalization punjab",
  ],
  alternates: {
    canonical: "/services/document-attestation",
  },
};

const attestationTypes = [
  {
    title: "Educational Certificates",
    desc: "Degree certificates, diplomas, marksheets (10th, 12th, graduation), and professional qualifications. Required by employers and immigration authorities to verify your academic background.",
    documents: ["10th & 12th Marksheets", "Degree / Diploma Certificates", "Professional Course Certificates", "Skill Training Certificates"],
  },
  {
    title: "Personal Documents",
    desc: "Birth certificates, marriage certificates, and other personal documents needed for family visa applications, dependent visas, or legal requirements in the destination country.",
    documents: ["Birth Certificate", "Marriage Certificate", "Death Certificate", "Affidavits & Declarations"],
  },
  {
    title: "Commercial Documents",
    desc: "For business owners or professionals setting up operations abroad. Includes company registration, power of attorney, board resolutions, and trade licenses.",
    documents: ["Company Registration", "Power of Attorney", "Board Resolutions", "Trade License"],
  },
];

const processSteps = [
  { step: "01", title: "Notary Attestation", desc: "The first step is notarization by a registered Notary Public. This verifies the authenticity of the document and the signature of the issuing authority. We handle notary attestation locally in Nakodar." },
  { step: "02", title: "State Government (HRD / Home Department)", desc: "Educational documents go to the Human Resource Department (HRD) of Punjab. Personal documents like birth and marriage certificates go to the Home Department. We submit and collect on your behalf." },
  { step: "03", title: "MEA Attestation (Apostille)", desc: "The Ministry of External Affairs (MEA) in Delhi attests documents after state-level verification. For Hague Convention countries, an Apostille sticker is applied instead. We manage MEA submissions through authorized channels." },
  { step: "04", title: "Embassy / Consulate Attestation", desc: "For Gulf countries (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain), documents need final attestation from the respective embassy or consulate in India. We coordinate directly with embassies for timely processing." },
];

const gulfCountries = [
  { country: "UAE", details: "MOFA attestation required after MEA. Used for employment visa, family visa, and business setup in Dubai, Abu Dhabi, Sharjah." },
  { country: "Saudi Arabia", details: "Saudi Cultural Attaché and MOFA attestation. Mandatory for all work visas, especially NEOM and industrial projects." },
  { country: "Qatar", details: "Qatar Embassy attestation followed by MOFA Qatar. Required for work permits and professional licensing." },
  { country: "Kuwait", details: "Kuwait Embassy attestation. Needed for employment visas, especially in oil & gas and construction sectors." },
  { country: "Bahrain", details: "Bahrain Embassy attestation after MEA. Required for work permits and professional qualifications recognition." },
  { country: "Oman", details: "Oman Embassy attestation. Mandatory for employment visa processing and professional registration." },
];

const faqs = [
  { q: "What is document attestation and why do I need it?", a: "Document attestation is the process of getting your certificates and documents verified and stamped by authorized government bodies and embassies. Foreign employers and immigration authorities require attested documents to confirm that your qualifications and personal records are genuine. Without proper attestation, your visa application will be rejected." },
  { q: "How long does the full attestation process take?", a: "The timeline depends on the type of document and the destination country. Typically, the complete process — notary, state HRD/Home Department, MEA, and embassy attestation — takes 15 to 30 working days. Gulf country attestations are usually faster (15-20 days) because of established processing channels." },
  { q: "What is the difference between attestation and apostille?", a: "Attestation is the multi-step verification process involving state and central government departments plus the destination country's embassy. Apostille is a single-step MEA certification valid in countries that are members of the Hague Convention (most European countries). Gulf countries are NOT Hague members, so they require full embassy attestation." },
  { q: "Do I need original documents for attestation?", a: "Yes, original documents are required for attestation. Photocopies cannot be attested. We handle your originals with extreme care — they are tracked at every stage and returned to you along with the attested copies. We also recommend keeping self-attested photocopies for your records." },
  { q: "Can you attest documents issued by other states (not Punjab)?", a: "Yes. While HRD attestation must be done from the state where the certificate was issued, we coordinate with HRD departments of other Indian states through our partner network. We handle documents from Haryana, Himachal Pradesh, Uttar Pradesh, and other states." },
  { q: "How much does document attestation cost?", a: "Government fees vary by document type and destination country. As a licensed recruitment agency, when attestation is part of your overseas employment process through us, we do not charge additional service fees — the employer bears the cost. For standalone attestation services, fees depend on the specific requirements." },
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
  name: "Document Attestation Services",
  description: "Complete document attestation and apostille services including notary, HRD, MEA, and embassy attestation for overseas employment and immigration from Nakodar, Punjab.",
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
  serviceType: "Document Attestation & Apostille",
};

export default function DocumentAttestationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Document Attestation", href: "/services/document-attestation" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Attestation & Apostille Services
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Document Attestation
                <br />
                for Overseas Employment
                <br />
                <span style={{ color: "#0052dc" }}>from Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Every overseas job requires attested documents — your degree, birth certificate, marriage certificate, or professional qualifications. We manage the entire attestation chain from Notary to State HRD to MEA to Embassy, so you don&apos;t have to run between offices in Chandigarh, Delhi, and embassy consulates. Everything is handled from our Nakodar office.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Start Attestation Process
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["MEA Authorized", "All Embassies", "Track Your Documents"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Office desk.webp" alt="Document attestation services at Shiva Travel Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== TYPES OF DOCUMENTS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Documents We Attest</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We handle attestation for educational, personal, and commercial documents required for employment, family visas, and business purposes abroad.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {attestationTypes.map((type) => (
                <div key={type.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{type.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 20 }}>{type.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {type.documents.map((doc) => (
                      <div key={doc} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30" }}>{doc}</span>
                      </div>
                    ))}
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>The Attestation Process — Step by Step</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Document attestation follows a specific chain of verification. Each level confirms the authenticity verified at the previous level.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
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

        {/* ===== GULF COUNTRY ATTESTATION ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Country-Specific Attestation for Gulf Jobs
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Each Gulf country has specific attestation requirements. We handle the complete embassy attestation process for all major destinations.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {gulfCountries.map((c) => (
                <div key={c.country} style={{ padding: 28, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{c.country}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{c.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About Document Attestation</h2>
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
              Need Documents Attested?<br />We Handle Everything
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Bring your original documents. We manage the rest — from notary to embassy.
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
