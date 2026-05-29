import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "Jobs in USA & Guam | H-2B Visa Recruitment for Indian Workers",
  description:
    "Construction, manufacturing, hospitality and skilled-trade jobs in the USA & Guam under the H-2B visa. Govt-licensed Indian recruitment partner (RA B-1794). End-to-end H-2B processing, DS-160, consular interviews in Delhi & Mumbai.",
  alternates: {
    canonical: "/jobs/usa",
  },
};

const jobCategories = [
  { title: "Construction", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", roles: ["Mason", "Carpenter", "Furniture Carpenter", "Steel Fixer", "Shutterer", "Plumber", "Electrician", "Painter"] },
  { title: "Skilled Trades & Operators", icon: "M2 20h20M4 20V10l8-6 8 6v10", roles: ["Machine Operator", "Welder", "HVAC Technician", "Heavy Equipment Operator", "Forklift Operator", "Foreman / Supervisor"] },
  { title: "Hospitality & Service", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", roles: ["Hotel Housekeeping", "Cook / Kitchen Staff", "Waiter / Server", "Resort Staff", "Cleaner"] },
  { title: "Landscaping & Grounds", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", roles: ["Landscaper", "Groundskeeper", "Tree Trimmer", "Lawn Maintenance"] },
  { title: "Warehouse & Logistics", icon: "M1 6h22M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M10 11v6M14 11v6", roles: ["Warehouse Worker", "Order Picker", "Inventory Clerk", "Loading/Unloading", "Packaging"] },
  { title: "Food & Seafood Processing", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", roles: ["Meat Processing Worker", "Seafood Processor", "Food Packaging", "Cold Storage Worker"] },
];

const whyUSA = [
  { title: "H-2B Visa for Skilled Trades", desc: "The H-2B program is the United States visa pathway for temporary non-agricultural workers. It is the legal, structured route used by US employers to bring skilled Indian workers into the country for fixed-term roles." },
  { title: "Guam: A Live, Active Market", desc: "Guam is a US territory with ongoing infrastructure, hospitality, and military construction demand. We have already mobilised our first H-2B cohort to Guam in partnership with Infratech International, LLC in May 2026." },
  { title: "USD Wages, Far Higher Take-Home", desc: "H-2B roles are paid in US Dollars at federally compliant prevailing wage rates. Even after overseas living costs, take-home savings significantly exceed Gulf and European packages." },
  { title: "Employer-Sponsored Pathway", desc: "Under H-2B, the US employer files the petition (Form I-129) and bears most of the processing cost. Your job offer is locked in before you depart India, with contract terms vetted under US Department of Labour rules." },
  { title: "End-to-End Process from Nakodar", desc: "We host trade testing at our facility, prepare DS-160 filings, coordinate consular interviews at the US Consulate in Chennai, Mumbai, or New Delhi, and handle pre-departure logistics. You deal with one team from application to flight." },
  { title: "Licensed & Verified Recruiter", desc: "We are an MEA-licensed Recruiting Agent (Licence B-1794) under the Government of India. Every H-2B mobilisation we run is compliant with both US DOL and Indian e-Migrate regulations." },
];

const salaryRanges = [
  { role: "Mason / Bricklayer", usd: "USD 18 - 28 / hr", monthly: "USD 3,100 - 4,800", inr: "INR 2.6L - 4.0L" },
  { role: "Furniture Carpenter", usd: "USD 20 - 32 / hr", monthly: "USD 3,400 - 5,500", inr: "INR 2.8L - 4.6L" },
  { role: "Machine Operator", usd: "USD 17 - 26 / hr", monthly: "USD 2,900 - 4,500", inr: "INR 2.4L - 3.7L" },
  { role: "Welder", usd: "USD 22 - 35 / hr", monthly: "USD 3,800 - 6,000", inr: "INR 3.1L - 5.0L" },
  { role: "HVAC Technician", usd: "USD 24 - 38 / hr", monthly: "USD 4,100 - 6,500", inr: "INR 3.4L - 5.4L" },
  { role: "Heavy Equipment Operator", usd: "USD 22 - 34 / hr", monthly: "USD 3,800 - 5,800", inr: "INR 3.1L - 4.8L" },
  { role: "Hospitality / Housekeeping", usd: "USD 14 - 20 / hr", monthly: "USD 2,400 - 3,400", inr: "INR 2.0L - 2.8L" },
  { role: "Landscaper", usd: "USD 15 - 22 / hr", monthly: "USD 2,600 - 3,800", inr: "INR 2.1L - 3.1L" },
];

const h2bProcess = [
  { step: "01", title: "Job Order Received from US Employer", desc: "The US employer files the temporary labor certification (TLC) and Form I-129 petition with the US Department of Labor and USCIS. We receive the approved job order with role, headcount, wage, and contract terms." },
  { step: "02", title: "Sourcing & Pre-Screening in India", desc: "We source candidates through our verified network across Punjab and other states, matching skill, experience, age, and language requirements to the job order specifications." },
  { step: "03", title: "On-Site Trade Testing at Our Facility", desc: "We host the US employer's selection panel at our Nakodar facility, providing testing space, machinery, and physical-evaluation infrastructure. Candidates are assessed in person and shortlisted on the spot." },
  { step: "04", title: "Documentation & DS-160 Filing", desc: "Our team handles passport, police clearance, contract attestation, medicals, and the DS-160 online visa application for every shortlisted candidate." },
  { step: "05", title: "US Consular Interview", desc: "We coordinate consular interview scheduling at the US Consulates in Chennai, Mumbai, or New Delhi through our associate offices in Delhi and Mumbai, and brief candidates on what to expect." },
  { step: "06", title: "Pre-Departure & Mobilisation", desc: "Pre-departure orientation covering US workplace culture, contract terms, accommodation, and labour rights. We assist with flight booking and the employer arranges airport pickup at destination." },
];

const faqs = [
  { q: "What is the H-2B visa?", a: "The H-2B is a US non-immigrant visa that allows American employers to bring foreign workers into the United States to fill temporary non-agricultural jobs. It covers skilled trades like construction, hospitality, landscaping, food processing, and seafood. The US employer must first obtain a temporary labor certification from the Department of Labor and an approved I-129 petition from USCIS before workers can apply." },
  { q: "Have you already deployed workers under H-2B?", a: "Yes. In May 2026, we successfully completed our first end-to-end H-2B mobilisation to Guam, USA, in partnership with Infratech International, LLC. Over 100 candidates were screened through our network for the trades requested (mason, furniture carpenter, machine operator), and the US employer shortlisted the full requirement in a single day at our on-site trade testing facility. Documentation and consular processing for that cohort are complete and visas are awaited." },
  { q: "Which US destinations do you currently mobilise to?", a: "Our active deployment partner network covers Guam (US territory) and the mainland United States for H-2B roles. We work directly with US employers and US-side immigration counsel on a per-engagement basis. Reach out and we will tell you exactly which locations have live demand right now." },
  { q: "Where is the US consular interview held?", a: "US consular interviews for Indian H-2B applicants are held at the US Consulates in Chennai, Mumbai, or New Delhi (and sometimes Kolkata or Hyderabad). We coordinate the appointment through our associate offices in Delhi and Mumbai, and prepare candidates with interview briefings before they appear." },
  { q: "How long does the H-2B process take?", a: "Once a US employer has an approved I-129 petition in hand, the India-side process (sourcing, testing, documentation, DS-160, consular interview, visa stamping) typically takes 6 to 12 weeks. The petition stage on the US side can take 2 to 6 months depending on USCIS workload and whether premium processing is used." },
  { q: "Who pays for the H-2B visa and recruitment?", a: "Under US Department of Labor rules, the H-2B employer bears the cost of the temporary labor certification, the I-129 petition fee, and the cost of inbound transportation. We maintain a transparent recruitment fee structure shared at the start of every engagement, with no hidden charges to the worker." },
  { q: "Can my family come with me on an H-2B visa?", a: "Spouses and unmarried children under 21 can apply for an H-4 dependent visa. The H-4 allows them to live with you in the US for the duration of your H-2B status but does not by itself grant work authorisation." },
  { q: "What trades are you sourcing for right now?", a: "Construction (masons, furniture carpenters, machine operators, steel fixers, shutterers), MEP (welders, HVAC technicians, electricians, plumbers), heavy equipment operators, hospitality (housekeeping, kitchen staff), landscaping, and food/seafood processing. We are actively building the candidate pool across these categories." },
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

export default function JobsInUSA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in USA", href: "/jobs/usa" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="H-2B Visa · USA & Guam · USD Wages"
          title="Build your career in the USA."
          highlight="in the USA."
          chips={["H-2B Visa", "USA & Guam", "USD Wages", "Live Deployments"]}
          description="Construction, skilled trades, hospitality and landscaping jobs in the USA and Guam under the H-2B visa. We just closed our first H-2B mobilisation to Guam with Infratech International, LLC — and we are actively building the next cohort."
          primaryCta={{ label: "Apply Now — It's Free", href: "/contactus" }}
          stats={[
            { num: "H-2B", label: "Visa Category" },
            { num: "USD $", label: "Paid in Dollars" },
            { num: "Live", label: "Guam Deployment" },
          ]}
          image={{ src: "/USA.png", alt: "USA and Guam H-2B jobs for Indian workers through Shiva Travel & Manpower Consultants" }}
          imageSeal={{ title: "First H-2B Cohort Mobilised", subtitle: "Guam · Infratech International · May 2026" }}
          microChip={{ value: "H-2B", label: "USA Visa" }}
        />

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "H-2B", label: "Visa Category" },
              { value: "100+", label: "Candidates Screened" },
              { value: "USD $", label: "Wage Currency" },
              { value: "Delhi / Mumbai", label: "Consular Coordination" },
              { value: "MEA RA", label: "B-1794 Licensed" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e3a8a", lineHeight: 1 }}>{s.value}</div>
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
                  First H-2B mobilisation to Guam, closed end-to-end.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                  In partnership with <strong style={{ color: "#fff" }}>Infratech International, LLC</strong>, we sourced 100+ pre-vetted candidates for skilled trades (mason, furniture carpenter, machine operator), hosted on-site trade testing at our Nakodar facility, and the US employer shortlisted the full requirement in a single day. DS-160, documentation, and consular processing complete; visas awaited for mobilisation.
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

        {/* ===== WHY USA ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why H-2B to USA & Guam?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The H-2B program opens a structured, legal pathway to skilled work in the United States — with USD wages, employer-sponsored petitions, and federally compliant contract terms.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyUSA.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== JOB CATEGORIES ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                H-2B Trades We Source For
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                The H-2B program covers temporary non-agricultural skilled work. These are the categories we are actively sourcing for our US and Guam employer partners.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {jobCategories.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={cat.icon} /></svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{cat.title}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.roles.map((role) => (
                      <span key={role} style={{ fontFamily: "var(--font-body)", fontSize: 13, padding: "5px 14px", borderRadius: 20, backgroundColor: "#ffffff", color: "#43474d", border: "1px solid #e5e7eb" }}>{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SALARY RANGES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Indicative H-2B Wage Ranges
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                Wages on H-2B jobs are set by US Department of Labor prevailing wage rules and vary by trade, state, and employer. The ranges below are indicative for skilled trades in current US and Guam job orders. Final wages are stated on the I-129 petition and the contract you sign.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#1e3a8a", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Take-Home Saving Potential</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>USD 1,500 - 3,000</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>typical monthly remittance after US living costs</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr 1fr", padding: "14px 20px", backgroundColor: "#f1f5f9", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Role</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Hourly (USD)</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Monthly (USD)</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>INR Approx.</span>
                </div>
                {salaryRanges.map((item, i) => (
                  <div key={item.role} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1.2fr 1fr", padding: "14px 20px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < salaryRanges.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.role}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#1e3a8a", fontWeight: 600 }}>{item.usd}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", fontWeight: 500 }}>{item.monthly}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>{item.inr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== H-2B PROCESS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                How We Get You to the USA
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our 6-step H-2B process is the same one we just executed for Infratech International. From the moment a US job order lands with us, we own every step on the India side — sourcing, testing, documentation, DS-160, consular interview, and mobilisation.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/USA0 guam.png" alt="H-2B mobilisation to Guam from Shiva Travel & Manpower Consultants — Infratech International cohort" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {h2bProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#1e3a8a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
                    <div style={{ paddingTop: 4 }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 4 }}>{item.title}</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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

        <SalaryCalcCTA country="USA (H-2B)" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e3a8a 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready for Your<br />H-2B Job in the USA?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Walk in to our office at Golden Avenue, Nakodar or call us today. MEA Licensed RA B-1794. Full transparency. We just deployed to Guam — your cohort could be next.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e3a8a", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
