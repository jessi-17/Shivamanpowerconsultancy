import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Embassy Coordination & Visa Stamping | Nakodar & Jalandhar | Shiva Travel",
  description:
    "Embassy coordination and visa stamping services from Nakodar, Jalandhar. We manage embassy appointments, document submissions, visa stamping for UAE, Saudi Arabia, Qatar, Kuwait, Poland, Romania embassies. Licensed agency RA B-1794.",
  keywords: [
    "embassy coordination nakodar",
    "visa stamping services jalandhar",
    "embassy appointment booking",
    "uae embassy coordination",
    "saudi embassy visa stamping",
    "qatar embassy services",
    "embassy submission agent punjab",
    "consulate coordination nakodar",
  ],
  alternates: {
    canonical: "/services/embassy-coordination",
  },
};

const embassyServices = [
  {
    title: "Embassy Appointment Scheduling",
    desc: "Each embassy has its own appointment system, processing windows, and submission requirements. We manage the scheduling process, ensuring your application is submitted at the right time with the right documents to avoid delays or rejections.",
  },
  {
    title: "Document Compilation & Review",
    desc: "Embassies are strict about document formats, translations, and completeness. A single missing document or incorrect format can delay your visa by weeks. Our team reviews your complete file against the embassy's current requirements before submission.",
  },
  {
    title: "Visa Stamping Coordination",
    desc: "Once the embassy approves your visa, the physical stamping on your passport must be coordinated. We manage passport submission for stamping, track the process, and ensure timely collection so your departure schedule stays on track.",
  },
  {
    title: "Embassy Fee Management",
    desc: "Visa fees, attestation charges, and processing fees differ by country and visa type. We ensure the correct fees are paid through the embassy's approved payment channels — demand drafts, online payments, or cash as required.",
  },
  {
    title: "Interview Preparation",
    desc: "Some embassies require in-person or phone interviews before approving work visas. We prepare you with likely questions, proper documentation to carry, dress code guidance, and what to expect during the interview process.",
  },
  {
    title: "Status Tracking & Follow-Up",
    desc: "Visa applications can get stuck due to additional verification, security checks, or administrative backlogs. We actively track your application status and follow up with the embassy to resolve pending issues.",
  },
];

const embassies = [
  {
    country: "UAE Embassy (Abu Dhabi / Dubai Consulate)",
    location: "New Delhi & Mumbai",
    process: "UAE work visas are primarily processed electronically through MOHRE (Ministry of Human Resources and Emiratisation). The employer applies for the work permit online, and after approval, visa stamping is coordinated through the UAE Embassy. We manage the MOHRE coordination, medical (Wafid), and final entry permit.",
  },
  {
    country: "Saudi Arabia Embassy",
    location: "New Delhi",
    process: "Saudi work visas require employer-side approval through the Ministry of Labour (MOL) and MOFA. After demand letter approval and GAMCA medical, visa stamping is done at the Royal Embassy of Saudi Arabia. We handle the complete process including enjaz and MOFA verification.",
  },
  {
    country: "Qatar Embassy",
    location: "New Delhi",
    process: "Qatar work visas are processed through the Ministry of Administrative Development, Labour and Social Affairs (MADLSA). After employer approval and medical clearance, visa stamping is coordinated through the Qatar Embassy in New Delhi.",
  },
  {
    country: "Kuwait Embassy",
    location: "New Delhi",
    process: "Kuwait employment visas require approval from the Ministry of Social Affairs and Labour. Medical clearance, attestation, and visa processing are coordinated through the Kuwait Embassy. We manage all documentation and submission.",
  },
  {
    country: "Poland Embassy / VFS Global",
    location: "New Delhi (VFS Global centres in Chandigarh, Jalandhar)",
    process: "Poland work visas (Type D National Visa) are applied through VFS Global. The process includes employer work permit (Oświadczenie or Zezwolenie), document compilation, biometric appointment at VFS, and passport submission. VFS centres in Chandigarh and Jalandhar serve the Punjab region.",
  },
  {
    country: "Romania Embassy",
    location: "New Delhi",
    process: "Romania work visas require an employer-issued work authorization from the Romanian Immigration Inspectorate. After authorization, the visa application is submitted at the Romanian Embassy. We coordinate employer documentation, apostille, and embassy submission.",
  },
];

const faqs = [
  { q: "Why do I need embassy coordination services?", a: "Embassies have complex, country-specific processes with strict documentation requirements. A small error — wrong photo size, missing attestation, incorrect fee payment — can cause rejection or weeks of delay. Our team has processed thousands of embassy submissions and knows exactly what each embassy requires, ensuring your application goes through smoothly the first time." },
  { q: "Do I need to visit the embassy myself?", a: "It depends on the country. Gulf country embassies (UAE, Saudi, Qatar, Kuwait) generally do not require the worker to visit in person — applications are submitted by the authorized recruiting agent. For European countries like Poland and Romania, biometric appointments at VFS Global centres may be required, and we guide you through that process." },
  { q: "Which embassies do you coordinate with?", a: "We coordinate with embassies and consulates of all major destination countries including UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, Poland, Romania, Croatia, and other European nations. Our 25+ years of experience means we have established working processes with all these embassies." },
  { q: "How long does embassy processing take?", a: "Processing times vary significantly by country. Gulf country visas typically take 1-3 weeks after submission. European work visas (Poland, Romania, Croatia) can take 4-8 weeks due to additional verification steps. We provide realistic timelines for your specific case and actively follow up to prevent unnecessary delays." },
  { q: "What if my visa application is rejected by the embassy?", a: "Rejections happen due to incomplete documentation, employer-side issues, or security concerns. We analyze the rejection reason, address the specific issue, and resubmit with proper documentation. Our experience helps us anticipate common rejection reasons and prevent them before submission." },
  { q: "Is there a charge for embassy coordination?", a: "When you are going through Shiva Travel for overseas employment, embassy coordination is part of our end-to-end recruitment service — no additional charges to the candidate. Embassy fees and government charges are separate and are borne by the employer as per Indian recruitment regulations." },
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
  name: "Embassy Coordination & Visa Stamping",
  description: "Complete embassy coordination services including appointment scheduling, document submission, visa stamping, and status tracking for Gulf and European embassies.",
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
  serviceType: "Embassy & Consulate Coordination",
};

export default function EmbassyCoordinationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Embassy Coordination", href: "/services/embassy-coordination" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Embassy & Consulate Services
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Embassy Coordination
                <br />
                & Visa Stamping
                <br />
                <span style={{ color: "#0052dc" }}>from Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                After your documents are ready, medical is cleared, and employer approval is in place — the final step is embassy submission and visa stamping. This is where most applicants face confusion and delays. We coordinate directly with embassies in New Delhi, Mumbai, and VFS Global centres to ensure your visa application is submitted correctly, tracked actively, and stamped on time.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Start Visa Process
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["All Major Embassies", "VFS Global", "25+ Years Experience"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/carousel 4.webp" alt="Embassy coordination services at Shiva Travel Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>How We Coordinate With Embassies</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Embassy coordination involves multiple moving parts. Here is what we handle so you do not have to worry about anything.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {embassyServices.map((s) => (
                <div key={s.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COUNTRY-WISE EMBASSY DETAILS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Embassy Coordination by Country
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Each country has a unique visa processing workflow. Here is how the embassy coordination works for our most popular destinations.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {embassies.map((e) => (
                <div key={e.country} style={{ padding: 28, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{e.country}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#93c5fd", marginBottom: 12 }}>Location: {e.location}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{e.process}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About Embassy Coordination</h2>
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
              Let Us Handle<br />The Embassy Process
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              From document submission to visa stamping — we coordinate everything.
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
              Government Licensed | RA B-1794 | Zero Candidate Fees
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
