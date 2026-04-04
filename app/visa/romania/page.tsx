import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Romania Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Apply for Romania visa and work permit from Nakodar, Punjab. Shiva Travel & Manpower Consultants — government licensed Romania visa agent. EU work permit, document attestation, embassy appointment. Zero candidate fees.",
  keywords:
    "romania visa nakodar, romania work permit Punjab, romania visa consultant nakodar, romania visa agent, romania work visa from India, EU work permit nakodar",
  alternates: {
    canonical: "/visa/romania",
  },
};

const visaServices = [
  { title: "Work Permit Application", desc: "We coordinate with verified Romanian employers to file your work authorization with the General Inspectorate for Immigration. We track every stage and keep you updated until approval." },
  { title: "Document Attestation & Preparation", desc: "We help you gather, notarize, and attest all required documents — passport, educational certificates, experience letters, and police clearance — per Romanian Embassy standards." },
  { title: "Embassy Appointment Booking", desc: "We schedule your visa appointment at the Romanian Embassy or VFS Global centre, prepare your application form, and brief you on interview questions and protocol." },
  { title: "Medical Coordination", desc: "We connect you with authorized medical centres for the mandatory health check-up and ensure your medical certificate meets Romanian immigration requirements." },
  { title: "E-Migrate Processing", desc: "We register your emigration on the Government of India's e-Migrate portal, which is compulsory for all ECR passport holders travelling for work to Romania." },
  { title: "Pre-Departure Briefing", desc: "Before you fly, we conduct a comprehensive session covering Romanian labour laws, your rights as a worker, cultural orientation, weather, accommodation details, and emergency contacts." },
];

const whyRomania = [
  { title: "EU Member State", desc: "Romania has been a full EU member since 2007. A Romanian work permit gives you legal employment rights across all EU labour regulations with strong worker protections." },
  { title: "Schengen Area Access", desc: "Romania joined the Schengen zone, allowing your Romanian residence permit to grant visa-free travel across 27 European countries during your holidays." },
  { title: "Growing Demand for Workers", desc: "Romania's booming construction, manufacturing, and agriculture sectors face acute labour shortages. The government actively issues thousands of work permits for foreign workers annually." },
  { title: "Path to Permanent Residency", desc: "After 5 years of continuous legal residence and work in Romania, you become eligible for EU long-term residence — giving you the right to live and work in any EU country." },
];

const visaRequirements = [
  "Valid passport with minimum 12 months validity",
  "Passport-size colour photographs (white background, 3.5 x 4.5 cm)",
  "Medical fitness certificate from an authorized centre",
  "Police clearance certificate (PCC) from local authorities",
  "Educational certificates (10th, 12th, ITI, diploma — as applicable)",
  "Work experience certificates from previous employers",
  "Demand letter / employment contract from Romanian employer",
  "Work permit approval from Romanian General Inspectorate for Immigration",
  "Proof of accommodation in Romania (provided by employer)",
  "Travel insurance covering the duration of your stay",
  "E-Migrate registration (for ECR passport holders)",
  "Visa application form completed and signed",
];

const processTimeline = [
  { step: "01", title: "Initial Consultation", time: "Day 1", desc: "Visit our Nakodar office or call us. We assess your skills, work experience, and eligibility for a Romania work visa." },
  { step: "02", title: "Document Collection & Preparation", time: "Week 1–3", desc: "We guide you in gathering all required documents — passport, PCC, medical, educational and experience certificates. We handle attestation and notarization." },
  { step: "03", title: "Employer Matching & Work Permit Filing", time: "Week 3–6", desc: "Your profile is matched with a verified Romanian employer. The employer files the work permit application with Romanian immigration authorities." },
  { step: "04", title: "Work Permit Approval", time: "Week 6–10", desc: "The Romanian General Inspectorate processes the work permit. Average processing time is 4–8 weeks. We monitor progress and respond to any queries." },
  { step: "05", title: "Visa Appointment & Stamping", time: "Week 10–13", desc: "Once the work permit is approved, we book your embassy appointment, prepare the visa application, and accompany you through the visa stamping process." },
  { step: "06", title: "E-Migrate & Pre-Departure", time: "Week 13–14", desc: "We complete your e-Migrate registration, conduct pre-departure briefing, and coordinate your travel. The employer arranges airport pickup and accommodation in Romania." },
];

const visaTypes = [
  { title: "Long-Stay Work Visa (Type D)", desc: "The standard work visa for employment contracts of 1–2 years. This is the most common visa for Indian workers going to Romania for construction, factory, or agricultural jobs. Renewable in Romania." },
  { title: "Seasonal Work Visa", desc: "For short-term employment in agriculture, tourism, or food processing — typically 90 days to 9 months. Ideal for harvest seasons and summer hospitality work." },
  { title: "Intra-Company Transfer Visa", desc: "For workers being transferred by a multinational company from an Indian branch to their Romanian office or facility. Requires existing employment with the company." },
  { title: "EU Blue Card", desc: "For highly skilled workers with a university degree and a salary above the Romanian threshold. Provides enhanced mobility rights across EU countries." },
];

const faqs = [
  { q: "Where to apply for Romania visa in Nakodar?", a: "Visit Shiva Travel & Manpower Consultants at Golden Avenue, Nakodar (Jalandhar, Punjab). We are a government licensed overseas recruitment agency handling Romania work visas. Walk in or call +91 98148-20432." },
  { q: "How much does Romania work visa cost?", a: "Through Shiva Travel & Manpower Consultants, candidates pay ZERO recruitment or visa processing fees. The Romanian employer bears all costs including work permit fees, recruitment charges, and visa expenses as per Indian government regulations." },
  { q: "Can I get Romania visa from Punjab?", a: "Yes. Our Nakodar office handles the complete Romania visa process for candidates from all over Punjab, Haryana, and North India. We coordinate document preparation, embassy appointments in Delhi, and all paperwork from our local office." },
  { q: "How long does Romania visa take?", a: "The complete process from application to visa stamping takes approximately 3–4 months. Work permit processing by Romanian authorities takes 4–8 weeks, followed by embassy appointment and visa stamping which takes another 2–4 weeks." },
  { q: "Do I need IELTS for Romania work visa?", a: "No. IELTS or any English language test is NOT required for Romania work visa. Romania's official language is Romanian, and most employers provide on-site training. No language certificate is needed for the visa application." },
  { q: "Is Romania in Schengen area?", a: "Yes. Romania joined the Schengen area, meaning your Romanian residence permit allows visa-free travel to all 27 Schengen countries including Germany, France, Italy, Spain, and others during your holidays." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Romania Visa & Work Permit Processing",
  description:
    "Complete Romania visa and work permit processing service from Nakodar, Punjab. Document attestation, embassy appointment booking, e-Migrate registration, and pre-departure briefing.",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    url: "https://shivatravelconsultant.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Avenue",
      addressLocality: "Nakodar",
      addressRegion: "Punjab",
      postalCode: "144040",
      addressCountry: "IN",
    },
    telephone: "+919814820432",
  },
  areaServed: {
    "@type": "State",
    name: "Punjab",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  serviceType: "Visa & Immigration Consulting",
};

export default function RomaniaVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Romania Visa", href: "/visa/romania" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#1e40af", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Visa Processing &middot; Work Permit &middot; EU Access
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Romania Visa &amp; Work Permit
                <br />
                <span style={{ color: "#1e40af" }}>Services in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Government licensed Romania visa consultant in Nakodar. We handle your complete work permit application, document attestation, embassy appointment, and e-Migrate processing. Zero fees from candidates.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Start Your Visa Process — Free
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Work Permit Processing", "Embassy Coordination", "Zero Fees"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Romania jobs.webp" alt="Romania visa and work permit services — Shiva Travel Consultants Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Visas Processed<br />for Romania
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "500+", label: "Visas Processed" },
              { value: "3–4", label: "Months Processing" },
              { value: "Zero", label: "Candidate Fees" },
              { value: "27", label: "Schengen Countries" },
              { value: "100%", label: "Licensed & Verified" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY ROMANIA FOR WORK ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Romania for Work?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Romania offers EU-level work opportunities with a clear path to permanent residency and Schengen-wide travel access.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyRomania.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR VISA SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Our Romania Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From initial consultation to pre-departure briefing, we handle every step of your Romania work visa journey.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaServices.map((item, i) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{item.title}</h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA REQUIREMENTS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Documents Required for Romania Work Visa
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                We help you prepare every document on this list. Our team ensures your paperwork is complete, correctly attested, and meets Romanian Embassy requirements before your appointment.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#1e40af", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Don&apos;t Worry</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#fff" }}>We Handle Everything</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Document preparation to embassy submission</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                {visaRequirements.map((doc, i) => (
                  <div key={doc} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 24px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < visaRequirements.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: "#eff4ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30", lineHeight: 1.6 }}>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS TIMELINE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Visa Process Timeline
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                The complete Romania work visa process takes approximately 3–4 months from your first consultation to departure. Here is the step-by-step timeline we follow.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Romania jobs.webp" alt="Romania visa processing timeline — Shiva Manpower Nakodar" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {processTimeline.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#1e40af", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
                    <div style={{ paddingTop: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{item.title}</h3>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#1e40af", backgroundColor: "#eff4ff", padding: "3px 10px", borderRadius: 12 }}>{item.time}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISA TYPES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Types of Romania Work Visas
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Romania offers several visa categories depending on the nature and duration of your employment.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaTypes.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COST & FEES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
              Cost &amp; Fees — Zero Charges for Candidates
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 680, margin: "0 auto 40px" }}>
              As per Indian Government regulations and our ethical recruitment policy, Shiva Travel &amp; Manpower Consultants charges absolutely no fees from candidates. The Romanian employer bears all costs.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20, textAlign: "left" }}>
              {[
                { label: "Recruitment Fee", value: "Zero", note: "No charges from candidates" },
                { label: "Work Permit Fee", value: "Employer Paid", note: "Filed and paid by Romanian employer" },
                { label: "Visa Fee", value: "Employer Paid", note: "Embassy visa fee covered by employer" },
                { label: "Medical Examination", value: "Candidate*", note: "Approx. INR 2,000–4,000 at authorized centre" },
                { label: "Passport / PCC", value: "Candidate*", note: "Government fees as applicable" },
                { label: "Air Ticket", value: "Employer Paid", note: "One-way ticket to Romania provided" },
              ].map((item) => (
                <div key={item.label} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 24, border: "1px solid #e5e7eb" }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: item.value === "Zero" ? "#1e40af" : "#0b1c30", marginBottom: 4 }}>{item.value}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#64748b" }}>{item.note}</div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8", marginTop: 20 }}>
              * Candidates only pay for personal government documents (passport, PCC) and medical examination at authorized centres. All recruitment and visa costs are borne by the employer.
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 48 }}>
              Romania Visa — Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SalaryCalcCTA country="Romania" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Start Your Romania<br />Visa Process Today
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Nakodar or call us now. Free consultation. Zero candidate fees. Government licensed Romania visa consultant in Punjab.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 32 }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e40af", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Book Free Consultation
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
              Shiva Travel &amp; Manpower Consultants<br />
              Golden Avenue, Nakodar, Jalandhar, Punjab 144040<br />
              Phone: +91 98148-20432 &middot; +91 98153-58832
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
