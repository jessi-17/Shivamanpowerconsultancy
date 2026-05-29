import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "USA H-2B Visa from India | Govt-Licensed H-2B Recruitment Partner",
  description:
    "End-to-end H-2B visa processing for Indian workers going to USA & Guam. MEA Licensed RA B-1794. Sourcing, trade testing, DS-160, US consular interview coordination in Delhi & Mumbai. First H-2B cohort already mobilised to Guam.",
  keywords:
    "h-2b visa india, h-2b recruitment agency, usa work visa from punjab, guam jobs h-2b, ds-160 nakodar, us consulate interview punjab, h-2b agency nakodar, h-2b visa processing india",
  alternates: {
    canonical: "/visa/usa-h2b",
  },
};

const whyH2B = [
  { title: "Legal Path to Skilled US Work", desc: "The H-2B is the United States non-immigrant visa category for temporary non-agricultural workers. It is the structured, lawful route used by US employers to hire foreign skilled workers in construction, hospitality, landscaping, and food processing." },
  { title: "Employer-Sponsored Pathway", desc: "The US employer files the I-129 petition with USCIS and the temporary labor certification with the Department of Labor. Most petition and processing costs are borne by the employer, not the worker, under DOL regulations." },
  { title: "Live Deployment Track Record", desc: "In May 2026, we completed our first end-to-end H-2B mobilisation to Guam in partnership with Infratech International, LLC. Sourcing, on-site testing, documentation, and consular processing all owned by our team." },
  { title: "USD Wages, Federally Compliant", desc: "Wages are set by US DOL prevailing wage rules and paid in US Dollars. Even after living expenses, take-home savings are significantly higher than Gulf or European packages for the same skill level." },
  { title: "Family Reunification via H-4", desc: "Your spouse and unmarried children under 21 can apply for an H-4 dependent visa to live with you in the US for the duration of your H-2B status." },
  { title: "Govt of India Licensed Recruiter", desc: "We hold MEA Recruiting Agent Licence B-1794, are e-Migrate compliant, and operate under both Indian and US Department of Labor recruitment standards." },
];

const visaServices = [
  { title: "H-2B Job Order Intake", desc: "We receive the US employer's approved I-129 petition and DOL temporary labor certification, then translate the job order into a sourcing brief: trade, headcount, wage band, contract length, and start date." },
  { title: "Pre-Vetted Candidate Sourcing", desc: "Sourcing through our verified Punjab and pan-India network. Every candidate is screened for trade competency, age, language, document readiness, and ECR-passport compliance before being presented to the employer." },
  { title: "On-Site Trade Testing", desc: "We host the US employer's selection panel at our Nakodar facility, providing testing space, machinery, and physical-evaluation infrastructure so candidates are assessed in person — exactly as we did for the Infratech Guam engagement." },
  { title: "DS-160 Filing & Documentation", desc: "Our team prepares the DS-160 online visa application, compiles passport, police clearance, contract attestation, medicals, and the full visa file for every shortlisted candidate." },
  { title: "US Consular Interview Coordination", desc: "Through our associate offices in Delhi and Mumbai, we schedule consular interviews at the US Consulates in Chennai, Mumbai, or New Delhi, and brief candidates with mock interviews and document checklists." },
  { title: "Pre-Departure & e-Migrate", desc: "Pre-departure orientation covering US workplace culture, contract terms, US labor rights, accommodation, and emergency contacts. Mandatory e-Migrate clearance handled in-house for ECR-passport holders." },
];

const visaRequirements = [
  "Valid Indian passport with 12+ months remaining validity and 2 blank pages",
  "Job order from a US employer with approved I-129 petition and DOL temporary labor certification",
  "Trade test pass at the US employer's on-site selection round",
  "DS-160 online visa application (filed by our team)",
  "Police clearance certificate (PCC) from local Indian authorities",
  "Medical fitness certificate as per US consular requirements",
  "Education, ITI, and experience documents relevant to the H-2B trade",
  "Bank statements and proof of ties to India (for consular interview)",
  "Recent US-spec visa photographs (5cm x 5cm, white background)",
  "e-Migrate clearance from MEA (for ECR-passport holders)",
];

const visaProcess = [
  { step: "01", title: "Visit Our Nakodar Office", desc: "Walk in to our office at Golden Avenue, Nakodar or call us. We assess your trade skill, experience, age, document readiness, and fit against the current H-2B job orders we are filling.", timeline: "Day 1" },
  { step: "02", title: "Sourcing Acceptance & Trade Test", desc: "If your profile matches a live H-2B job order, we invite you for the US employer's on-site trade test at our facility. Selected candidates are shortlisted on the same day.", timeline: "Week 1-2" },
  { step: "03", title: "Documentation & DS-160 Filing", desc: "Our team prepares passport renewal (if needed), police clearance, contract attestation, medicals, and the DS-160 online visa application.", timeline: "Week 2-5" },
  { step: "04", title: "US Consular Interview", desc: "Through our Delhi or Mumbai associate office, we schedule and prepare you for the consular interview at the US Consulate in Chennai, Mumbai, or New Delhi.", timeline: "Week 5-8" },
  { step: "05", title: "Visa Stamping & e-Migrate", desc: "Once the visa is approved, we coordinate passport stamping and complete e-Migrate clearance for ECR-passport holders.", timeline: "Week 8-10" },
  { step: "06", title: "Pre-Departure & Fly to USA / Guam", desc: "Pre-departure orientation, flight booking assistance, and on-arrival logistics coordinated with the US employer.", timeline: "Week 10-12" },
];

const consulates = [
  { title: "US Consulate, Chennai", desc: "Primary consular jurisdiction for South India. Our Delhi & Mumbai associate offices coordinate appointment slots, document submission, and interview prep for candidates routed here.", tag: "South India" },
  { title: "US Consulate, Mumbai", desc: "Coordinated directly through our Mumbai associate office. Used for candidates from West India and many H-2B applicants where Mumbai slots are available first.", tag: "West India" },
  { title: "US Embassy, New Delhi", desc: "Coordinated through our Delhi associate office. Used for North India candidates including Punjab, Haryana, Himachal, J&K, and Delhi NCR.", tag: "North India" },
  { title: "US Consulate, Hyderabad / Kolkata", desc: "Used where slot availability or candidate geography makes it the better routing. Both work end-to-end through our DS-160 and interview-prep process.", tag: "Alternate Routing" },
];

const faqs = [
  { q: "What is an H-2B visa and who is it for?", a: "The H-2B is a US non-immigrant visa for foreign workers coming to the United States to perform temporary non-agricultural work. It is used by US employers for skilled trades like construction, hospitality, landscaping, food processing, and seafood. It requires the employer to first obtain a temporary labor certification from the US Department of Labor and an approved I-129 petition from USCIS before the worker can apply at a US consulate." },
  { q: "Have you actually done an H-2B deployment before?", a: "Yes. In May 2026, Shiva Travel & Manpower Consultants completed our first end-to-end H-2B mobilisation to Guam, USA in partnership with Infratech International, LLC. We screened 100+ candidates through our network for mason, furniture carpenter, and machine operator roles, hosted on-site trade testing at our Nakodar facility, and the US employer shortlisted the full requirement in a single day. DS-160, documentation, and consular processing for that cohort are complete." },
  { q: "Where do I apply for the US H-2B visa from Punjab?", a: "Visit Shiva Travel & Manpower Consultants at Golden Avenue, Nakodar, Punjab — MEA Licensed RA B-1794. We handle the full H-2B process from sourcing through consular interview coordination. Walk in or call +91 98148-20432 for a free consultation." },
  { q: "Where is the US consular interview held?", a: "US consular interviews for Indian H-2B applicants are held at the US Consulates in Chennai, Mumbai, New Delhi (and sometimes Kolkata or Hyderabad). We coordinate appointments through our associate offices in Delhi and Mumbai and brief candidates with mock interviews and document checklists." },
  { q: "How long does the H-2B process take?", a: "Once a US employer has an approved I-129 petition in hand, the India-side process — sourcing, trade test, documentation, DS-160, consular interview, visa stamping — typically takes 6 to 12 weeks. The petition stage on the US side can take 2 to 6 months depending on USCIS workload and whether premium processing is used." },
  { q: "Who pays for the H-2B petition and visa fees?", a: "Under US Department of Labor rules, the H-2B employer bears the cost of the temporary labor certification (PERM), the I-129 petition fee, and the cost of inbound transportation. We maintain a transparent recruitment fee structure shared at the start of every engagement with no hidden charges." },
  { q: "Is the H-2B visa a path to a US green card?", a: "The H-2B is a non-immigrant visa and does not by itself lead to permanent residence. However, while on H-2B status, an employer can sponsor a worker for an immigrant visa (employment-based green card) through a separate petition. Many successful US workers begin on H-2B and transition over time." },
  { q: "Can my family come with me on the H-2B?", a: "Yes — your spouse and unmarried children under 21 can apply for an H-4 dependent visa to live with you in the US for the duration of your H-2B status. The H-4 does not by itself grant work authorisation for the dependent." },
  { q: "What trades are you currently sourcing for under H-2B?", a: "Construction (masons, furniture carpenters, machine operators, steel fixers, shutterers), MEP (welders, HVAC technicians, electricians, plumbers), heavy equipment operators, hospitality (housekeeping, kitchen staff), landscaping, and food/seafood processing. The exact open trades depend on which US employer's job orders are live with us — call us for the current list." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "USA H-2B Visa & Recruitment Services",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
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
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Guam" },
  ],
  description:
    "End-to-end H-2B visa processing for Indian workers going to the USA and Guam. Sourcing, on-site trade testing, DS-160 filing, US consular interview coordination at Chennai, Mumbai, and New Delhi. MEA Licensed RA B-1794.",
  serviceType: "Immigration & Overseas Recruitment Consulting",
};

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

export default function USAH2BVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "USA H-2B Visa", href: "/visa/usa-h2b" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="USA & Guam · H-2B Visa · Live Deployment Track Record"
          title="USA H-2B visa processing from Nakodar."
          highlight="from Nakodar."
          chips={["H-2B Visa", "DS-160 Filing", "Delhi & Mumbai Consular Coordination", "Live Guam Deployment"]}
          description="End-to-end H-2B visa services from Nakodar — sourcing, on-site trade testing, DS-160 filing, US consular interview coordination, and mobilisation. MEA Licensed RA B-1794. We just deployed our first H-2B cohort to Guam."
          primaryCta={{ label: "Start H-2B Process", href: "/contactus" }}
          stats={[
            { num: "H-2B", label: "Visa Category" },
            { num: "Live", label: "Guam Deployment" },
            { num: "Delhi · Mumbai", label: "Consular Coordination" },
          ]}
          image={{ src: "/USA.png", alt: "USA H-2B visa services at Shiva Travel & Manpower Consultants Nakodar" }}
          imageSeal={{ title: "First H-2B Cohort Mobilised", subtitle: "Guam · Infratech International · May 2026" }}
          microChip={{ value: "H-2B", label: "USA Visa" }}
        />

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "H-2B", label: "Visa Category" },
              { value: "100+", label: "Candidates Screened" },
              { value: "DS-160", label: "Filed In-House" },
              { value: "Delhi · Mumbai", label: "Associate Offices" },
              { value: "RA B-1794", label: "MEA Licensed" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#1e3a8a", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== INFRATECH CASE BANNER ===== */}
        <section style={{ padding: "60px 0", backgroundColor: "#0b1c30" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 520px", minWidth: 0 }}>
                <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 20, backgroundColor: "rgba(96,165,250,0.15)", color: "#93c5fd", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                  Recent Deployment · May 2026
                </div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 14 }}>
                  First H-2B cohort to Guam, closed end-to-end.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  In partnership with <strong style={{ color: "#fff" }}>Infratech International, LLC</strong>, we sourced 100+ pre-vetted candidates for mason, furniture carpenter, and machine operator roles. The US employer hosted trade testing at our Nakodar facility and shortlisted the full requirement in a single day. DS-160, documentation, and consular processing complete; visas awaited for mobilisation.
                </p>
              </div>
              <div style={{ flex: "0 0 auto", display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { v: "100+", l: "Candidates Screened" },
                  { v: "1 day", l: "Full Shortlist" },
                  { v: "End-to-end", l: "Process Owned" },
                ].map((m) => (
                  <div key={m.l} style={{ textAlign: "center", padding: "16px 24px", borderRadius: 12, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#fff" }}>{m.v}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY H-2B ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why H-2B is a Real Pathway for Indian Workers
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The H-2B is a structured, employer-sponsored, federally-regulated route to skilled work in the United States. It is the visa most US construction, hospitality, and skilled-trade employers use to hire Indian workers.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyH2B.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR H-2B SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Our H-2B Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                End-to-end H-2B visa processing from our Nakodar office and our associate offices in Delhi and Mumbai — exactly the same workflow we executed for the Infratech Guam deployment.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaServices.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
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
                H-2B Visa Requirements
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                Below is the full document and qualification checklist for an Indian worker applying for a US H-2B visa. Our team at Nakodar walks you through every document, files DS-160 for you, and ensures the consular file is complete before your interview.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#1e3a8a", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Document Help</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#fff" }}>We Handle Everything</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>DS-160, attestation & consular coordination included</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                {visaRequirements.map((req, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 24px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < visaRequirements.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, backgroundColor: "#eff4ff", color: "#1e3a8a", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700 }}>{i + 1}</div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30", lineHeight: 1.6, paddingTop: 4 }}>{req}</span>
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
                H-2B Process &amp; Timeline
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Once a US employer with an approved I-129 petition engages us, the India-side process from sourcing to departure typically runs 6 to 12 weeks. We handle every step in-house — exactly the workflow we executed for the Infratech Guam cohort.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/USA0 guam.png" alt="H-2B visa processing — Guam deployment cohort at Shiva Travel & Manpower Consultants Nakodar" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {visaProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#1e3a8a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
                    <div style={{ paddingTop: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{item.title}</h3>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#1e3a8a", backgroundColor: "#eff4ff", padding: "2px 10px", borderRadius: 12 }}>{item.timeline}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONSULAR ROUTING ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                US Consular Interview Coordination
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We route every H-2B applicant to the right US consulate based on geography and slot availability, with full appointment and interview preparation handled through our Delhi and Mumbai associate offices.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
              {consulates.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", position: "relative" }}>
                  <span style={{ display: "inline-block", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#1e3a8a", backgroundColor: "#eff4ff", padding: "4px 12px", borderRadius: 12, marginBottom: 14, letterSpacing: "0.03em" }}>{item.tag}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRANSPARENT FEES ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
              Transparent H-2B Recruitment Terms
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto", marginBottom: 28 }}>
              Under US Department of Labor rules, the H-2B employer bears the temporary labor certification, the I-129 petition fee, and the inbound transportation cost. We maintain a transparent, written recruitment fee structure shared at the start of every engagement with no hidden charges to the worker.
            </p>
            <div style={{ display: "inline-flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {["I-129 Petition — Employer Pays", "DOL Certification — Employer Pays", "Recruitment Fee — Disclosed Upfront"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 48 }}>
              Frequently Asked Questions
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

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e3a8a 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Apply for Your<br />USA H-2B Visa?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Nakodar or call us today. Free consultation. MEA Licensed RA B-1794. Full transparency. We just deployed our first H-2B cohort to Guam.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e3a8a", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>+91 98148-20432</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Golden Avenue, Nakodar, Punjab</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
