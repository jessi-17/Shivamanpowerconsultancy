import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "H-2B Visa Processing from India | Govt-Licensed RA B-1794 | Shiva Travel",
  description:
    "End-to-end H-2B visa processing for US employers and Indian workers. Sourcing, on-site trade testing in Nakodar, DS-160 filing, consular interview coordination at US Consulates in Chennai, Mumbai, and New Delhi. First H-2B cohort already mobilised to Guam.",
  keywords: [
    "h-2b visa processing india",
    "h-2b recruitment agency punjab",
    "ds-160 filing nakodar",
    "us consulate interview coordination",
    "h-2b mobilisation guam",
    "us employer indian workers",
    "h-2b agency mea licensed",
    "h-2b worker sourcing india",
  ],
  alternates: {
    canonical: "/services/h2b-visa-processing",
  },
};

const h2bServices = [
  {
    title: "US Employer Engagement",
    desc: "We work directly with US employers (and their US-side immigration counsel) holding an approved I-129 H-2B petition and a Department of Labor temporary labor certification. We translate the job order into an India-side sourcing brief covering trade, headcount, wage band, contract length, and start date.",
  },
  {
    title: "Pre-Vetted Candidate Sourcing",
    desc: "Sourcing through our verified Punjab and pan-India network. Every candidate is screened against the H-2B job order for trade competency, age, English proficiency, ECR-passport status, and document readiness before being presented to the US employer's selection panel.",
  },
  {
    title: "On-Site Trade Testing at Nakodar",
    desc: "We host the US employer's selection panel at our facility, providing testing space, machinery, and physical-evaluation infrastructure. Candidates are assessed in person — the same workflow we executed for the Infratech Guam engagement where the full requirement was shortlisted in a single day.",
  },
  {
    title: "DS-160 Filing & Documentation",
    desc: "Our team prepares and files the DS-160 online visa application for every shortlisted candidate, plus passport, police clearance, contract attestation, medical fitness, and the full consular file. Nothing is left to the candidate to figure out alone.",
  },
  {
    title: "US Consular Interview Coordination",
    desc: "Through our associate offices in Delhi and Mumbai, we schedule consular interviews at the US Consulates in Chennai, Mumbai, or New Delhi, and brief candidates with mock interviews, document checklists, and dress-code guidance.",
  },
  {
    title: "e-Migrate, Mobilisation & Pre-Departure",
    desc: "Mandatory e-Migrate clearance from MEA for ECR-passport holders. Pre-departure orientation covering US workplace culture, contract terms, US labour rights, accommodation, and emergency contacts. We assist with flight booking and confirm on-arrival logistics with the US employer.",
  },
];

const processStages = [
  {
    country: "Stage 1 — US Side (Employer & Counsel)",
    location: "Handled by US employer and immigration counsel",
    process: "The US employer files the temporary labor certification (PERM) with the Department of Labor, followed by the I-129 H-2B petition with USCIS. Once both are approved, the employer issues the job order with the approved trade, headcount, wage, and contract period. We engage from this point onward.",
  },
  {
    country: "Stage 2 — Sourcing & Testing in India",
    location: "Our Nakodar facility, Punjab",
    process: "We source pre-vetted candidates from our Punjab and pan-India network matching the job order. The US employer's selection panel travels to our Nakodar facility (or evaluates remotely via video) for on-site trade testing — physical evaluation, machinery operation, and skill verification. Shortlisting typically completes within 1-3 days.",
  },
  {
    country: "Stage 3 — Documentation & DS-160",
    location: "Our Nakodar office",
    process: "Passport renewal (if needed), police clearance certificate, contract attestation, medical fitness certificate, ITI / experience documents, and DS-160 online visa application all handled in-house by our team. Every candidate file is reviewed against US consular requirements before submission.",
  },
  {
    country: "Stage 4 — US Consular Interview",
    location: "US Consulates in Chennai, Mumbai, or New Delhi",
    process: "Through our Delhi and Mumbai associate offices, we schedule the consular interview at the appropriate US Consulate based on geography and slot availability. Candidates are briefed with mock interviews and document checklists. Routine consular processing typically takes 2-4 weeks from DS-160 submission.",
  },
  {
    country: "Stage 5 — Visa Stamping & e-Migrate",
    location: "US Consulate + MEA e-Migrate portal",
    process: "Approved visas are stamped on the candidate's passport. For ECR-passport holders, mandatory e-Migrate clearance is filed by us before mobilisation. Visa stamping plus e-Migrate typically completes within 1-2 weeks after consular approval.",
  },
  {
    country: "Stage 6 — Mobilisation to USA / Guam",
    location: "India to US employer destination",
    process: "Pre-departure orientation covering US workplace culture, US DOL rights, accommodation, banking, and emergency contacts. Flight booking assistance and on-arrival airport pickup coordinated with the US employer. Our role ends when the worker arrives safely at the US worksite.",
  },
];

const faqs = [
  { q: "Have you actually completed an H-2B deployment?", a: "Yes. In May 2026, Shiva Travel & Manpower Consultants completed our first end-to-end H-2B mobilisation to Guam in partnership with Infratech International, LLC. We screened 100+ candidates through our network for mason, furniture carpenter, and machine operator roles, hosted on-site trade testing at our Nakodar facility, and the US employer shortlisted the full requirement in a single day. DS-160, documentation, and consular processing for that cohort are complete and visas are awaited." },
  { q: "I am a US employer — how do I engage your H-2B services?", a: "Contact us with your approved I-129 petition number, the job order (role, headcount, wage, contract length, start date), and your US immigration counsel's contact. We will set up a video call within 48 hours to align on sourcing, testing, and mobilisation timelines. Reach us at info@shivatravelconsultant.in or +91 98148-20432." },
  { q: "I am an Indian worker — how do I apply for an H-2B role?", a: "Visit our office at Golden Avenue, Nakodar, Punjab, or call +91 98148-20432. We will assess your trade, experience, age, document readiness, and ECR-passport status against the H-2B job orders currently live with us. If your profile matches, we invite you for the US employer's on-site trade test. Walk-ins are welcome." },
  { q: "Where is the US consular interview held?", a: "US consular interviews for Indian H-2B applicants are held at the US Consulates in Chennai, Mumbai, New Delhi (and sometimes Kolkata or Hyderabad). We coordinate appointments through our associate offices in Delhi and Mumbai based on candidate geography and slot availability, and brief every candidate with mock interviews before they appear." },
  { q: "How long does the India-side H-2B process take?", a: "Once a US employer has an approved I-129 petition in hand and engages us, the India-side process — sourcing, trade test, documentation, DS-160, consular interview, visa stamping, e-Migrate, mobilisation — typically takes 6 to 12 weeks. The Infratech Guam cohort was closed on this timeline in May 2026." },
  { q: "Who pays for the H-2B petition, visa, and recruitment fees?", a: "Under US Department of Labor rules, the H-2B employer bears the temporary labor certification fee (PERM), the I-129 petition fee, and the inbound transportation cost. We maintain a transparent, written recruitment fee structure shared at the start of every engagement, with no hidden charges to the candidate." },
  { q: "Are you licensed to handle US recruitment?", a: "Yes. We are licensed by the Ministry of External Affairs, Government of India under Recruiting Agent Licence B-1794, valid through June 2027. We operate under both Indian e-Migrate regulations and US DOL recruitment compliance standards. Every H-2B mobilisation is fully documented and traceable." },
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
  name: "H-2B Visa Processing & Recruitment",
  description: "End-to-end H-2B visa processing for US employers and Indian workers — sourcing, on-site trade testing at Nakodar, DS-160 filing, consular interview coordination at US Consulates, e-Migrate, and mobilisation.",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    url: "https://shivatravelconsultant.in",
    telephone: "+91-9814820432",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Guam" },
    { "@type": "State", name: "Punjab" },
  ],
  serviceType: "H-2B Visa & Recruitment Consulting",
};

export default function H2BVisaProcessingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "H-2B Visa Processing", href: "/services/h2b-visa-processing" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="H-2B · USA & Guam · Live Deployment"
          title="End-to-end H-2B visa processing from Nakodar."
          highlight="from Nakodar."
          chips={["US Employer Engagement", "DS-160 In-House", "Delhi & Mumbai Consular", "Guam Cohort Mobilised"]}
          description="We just closed our first end-to-end H-2B mobilisation to Guam in partnership with Infratech International, LLC. From sourcing to consular interview to mobilisation, we own every step on the India side."
          primaryCta={{ label: "Start H-2B Process", href: "/contactus" }}
          stats={[
            { num: "H-2B", label: "Visa Category" },
            { num: "100+", label: "Candidates Screened" },
            { num: "Live", label: "Guam Deployment" },
          ]}
          image={{ src: "/USA.png", alt: "H-2B visa processing service at Shiva Travel & Manpower Consultants Nakodar" }}
          imageSeal={{ title: "First H-2B Cohort Mobilised", subtitle: "Guam · Infratech International · May 2026" }}
          microChip={{ value: "H-2B", label: "USA Visa" }}
        />

        {/* ===== INFRATECH CASE BANNER ===== */}
        <section style={{ padding: "60px 0", backgroundColor: "#0b1c30" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ flex: "1 1 520px", minWidth: 0 }}>
                <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 20, backgroundColor: "rgba(96,165,250,0.15)", color: "#93c5fd", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                  Recent Deployment · May 2026
                </div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 14 }}>
                  First H-2B mobilisation to Guam, closed end-to-end.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  In partnership with <strong style={{ color: "#fff" }}>Infratech International, LLC</strong>, we sourced 100+ pre-vetted candidates for mason, furniture carpenter, and machine operator roles, hosted on-site trade testing at our Nakodar facility, and the US employer shortlisted the full requirement in a single day. DS-160, documentation, and consular processing complete; visas awaited for mobilisation.
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

        {/* ===== WHAT WE DO ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>What Our H-2B Processing Covers</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The full India-side lifecycle of an H-2B engagement — from the moment a US employer's approved I-129 lands with us to the moment workers depart for the US.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {h2bServices.map((s) => (
                <div key={s.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS STAGES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Six Stages of an H-2B Mobilisation
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The H-2B process splits cleanly into a US-side petition stage and an India-side execution stage. We own everything from Stage 2 onward.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {processStages.map((e) => (
                <div key={e.country} style={{ padding: 28, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{e.country}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#93c5fd", marginBottom: 12 }}>{e.location}</p>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About H-2B Processing</h2>
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
              Run Your H-2B<br />Through a Proven Team
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              From the moment your I-129 is approved to the moment workers land at your US site — one team, one workflow, full transparency.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar 144040
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 24 }}>
              Government Licensed | RA B-1794 | Live Guam Deployment
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
