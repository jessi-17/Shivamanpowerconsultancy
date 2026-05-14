import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Romania vs Poland vs UAE vs Saudi — Work Visa Comparison 2026" },
  description:
    "Complete side-by-side comparison of overseas work visas for Indian workers. Salaries, timelines, requirements, accommodation, EU vs Gulf — decide which country fits your profile best.",
  alternates: { canonical: "/guides/work-visa-comparison" },
};

const baseUrl = "https://shivatravelconsultant.in";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Work Visa Comparison for Indian Workers — Gulf vs Europe (2026)",
  description:
    "Side-by-side comparison of work visa salaries, timelines, requirements, and contract terms across UAE, Saudi Arabia, Qatar, Poland, Romania for Indian workers.",
  author: {
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: "Tarsem Lal",
    jobTitle: "Founder & Managing Director, Shiva Travel & Manpower Consultants",
  },
  publisher: { "@id": `${baseUrl}/#organization` },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/guides/work-visa-comparison` },
};

const countries = [
  {
    name: "UAE (Dubai, Abu Dhabi)",
    salary: "₹28k – ₹85k/month",
    contract: "2 years, renewable",
    timeline: "30–45 days",
    visaType: "Employment Visa / Mission Visa / Green Visa",
    accommodation: "Employer-arranged, usually free",
    food: "Cash allowance ~AED 600/month OR canteen",
    tax: "Zero income tax",
    pros: "Fastest processing, strong Indian community, tax-free, modern infrastructure",
    cons: "Saturated market for unskilled labour, weather extreme Apr-Sep",
    bestFor: "Hospitality, driving, construction, retail — quick entry-level placements",
  },
  {
    name: "Saudi Arabia",
    salary: "₹35k – ₹1,30,000/month",
    contract: "2 years, renewable",
    timeline: "45–60 days",
    visaType: "Work Visa + Iqama",
    accommodation: "Employer-arranged, free",
    food: "Cash allowance OR camp/canteen meals",
    tax: "Zero income tax",
    pros: "Highest salaries in Gulf (especially NEOM), Vision 2030 mega-projects, Wage Protection System",
    cons: "Cultural restrictions, slower bureaucracy than UAE",
    bestFor: "Welders, electricians, NEOM workers, oil & gas, construction supervisors",
  },
  {
    name: "Qatar",
    salary: "₹35k – ₹90k/month",
    contract: "2 years, renewable",
    timeline: "30–45 days",
    visaType: "Employment Visa (QID)",
    accommodation: "Employer-arranged, free",
    food: "Cash OR canteen",
    tax: "Zero income tax",
    pros: "Strong worker protections post-2022 reforms, Lusail city megaprojects",
    cons: "Slower placement volume than UAE/Saudi",
    bestFor: "Construction, transport, maintenance, hospitality",
  },
  {
    name: "Kuwait / Bahrain",
    salary: "₹25k – ₹75k/month",
    contract: "2 years, renewable",
    timeline: "60–90 days",
    visaType: "Work Visa (Article 18/19)",
    accommodation: "Employer-arranged",
    food: "Cash allowance",
    tax: "Zero income tax",
    pros: "Stable Gulf options, smaller worker pool means less competition",
    cons: "Smaller economies, fewer openings",
    bestFor: "Skilled trades, oil & gas, hospitality",
  },
  {
    name: "Poland",
    salary: "₹70k – ₹1,20,000/month",
    contract: "3 years, renewable; path to PR after 5 yrs",
    timeline: "75–90 days",
    visaType: "Type A work permit (Zezwolenie na prace) + Type D visa",
    accommodation: "Employer-arranged OR allowance",
    food: "Not typically included",
    tax: "~17–32% (refundable portion)",
    pros: "EU + Schengen access, path to EU permanent residency, growing salaries",
    cons: "Higher cost of living than India, winter cold, language barrier",
    bestFor: "Factory workers, food processing, agriculture, packaging, drivers",
  },
  {
    name: "Romania",
    salary: "₹85k – ₹1,30,000/month",
    contract: "1–2 years, renewable; path to EU long-term residence",
    timeline: "90–120 days",
    visaType: "Long-Stay D Visa (employment subcategory)",
    accommodation: "Employer-arranged, often free",
    food: "Often included for construction camps",
    tax: "~10% flat (low for Europe)",
    pros: "Schengen access, EU rights, low tax, lower cost of living than W Europe",
    cons: "Longer processing time, work permit must come first",
    bestFor: "Construction, manufacturing, industrial, carpentry, welding",
  },
  {
    name: "Croatia",
    salary: "₹85k – ₹1,25,000/month",
    contract: "1–3 years, renewable",
    timeline: "90 days",
    visaType: "Work & Residence Permit (combined)",
    accommodation: "Employer-arranged",
    food: "Varies",
    tax: "~20–30%",
    pros: "EU + Schengen, tourism + construction boom, beautiful coast",
    cons: "Smaller country, fewer openings than Poland/Romania",
    bestFor: "Skilled & semi-skilled construction, tourism, hospitality",
  },
];

const faqs = [
  {
    q: "Which country pays Indian workers the most?",
    a: "For unskilled to semi-skilled workers, Romania and Poland currently offer the highest gross monthly salaries (₹85k–₹1.3L) due to EU labour shortage. For skilled workers (welders, electricians, supervisors), Saudi Arabia's NEOM project offers comparable or higher rates (₹95k–₹1.3L). However, Gulf countries provide free accommodation/food (saving ₹15–25k/month), so net savings can be similar.",
  },
  {
    q: "Should I go to Gulf or Europe?",
    a: "Choose Gulf (UAE, Saudi, Qatar) for: faster placement (30–60 days), tax-free income, free housing, easier visa process, ability to return home frequently. Choose Europe (Poland, Romania, Croatia) for: higher gross salary, EU citizenship path, better long-term opportunity, family reunification options. Skill level matters too — Gulf accepts more unskilled labour; Europe prefers documented skills.",
  },
  {
    q: "Which European country is easiest to get a work visa for from India?",
    a: "Poland and Romania have the highest acceptance rates for Indian workers in 2026. Both have active labour shortages, simpler visa processes than Western Europe, and structured pathways for non-EU workers. Croatia is also accessible. Schengen Western European countries (Germany, France) are much harder for entry-level placement.",
  },
  {
    q: "How long does Saudi Arabia work visa take from India?",
    a: "Saudi Arabia work visa typically takes 45–60 days from initial application to departure. Process: (1) employer files application, (2) GAMCA medical 2–3 weeks, (3) document attestation 2–3 weeks, (4) visa stamping 1 week, (5) E-Migrate clearance + flight 1 week. NEOM project candidates can sometimes be fast-tracked.",
  },
  {
    q: "Can I take family to Gulf countries?",
    a: "Yes, but with salary thresholds. UAE requires minimum AED 4,000/month (or AED 3,000 with accommodation) for family sponsorship. Saudi Arabia requires SAR 4,000+ monthly. Family sponsorship typically possible after 6–12 months in initial employment.",
  },
  {
    q: "Can I move from Romania/Poland to other EU countries later?",
    a: "Yes. After 5 years of continuous legal residence and employment, you become eligible for EU long-term residence permit. This grants the right to live and work in most other EU countries (subject to local labour market tests). Romanian and Polish work permits are some of the best entry routes to EU citizenship for Indian workers.",
  },
  {
    q: "What documents are required for any overseas work visa from India?",
    a: "Universal: valid passport (min 6–12 months validity), passport-sized photos, attested educational certificates (10th, 12th, ITI/diploma), work experience letters, police clearance certificate (PCC), medical fitness certificate (GAMCA for Gulf), demand letter / employment contract from employer, E-Migrate registration confirmation.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function VisaComparisonGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Work Visa Comparison", href: "/guides/work-visa-comparison" },
        ])) }}
      />

      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <article style={{ maxWidth: 880, margin: "0 auto", padding: "120px 32px 80px", fontFamily: "var(--font-body)", color: "#0b1c30" }}>
          <Link href="/guides" style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0052dc", textDecoration: "none" }}>
            &larr; All Guides
          </Link>

          <div style={{ marginTop: 24, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Country Comparison • 12 min read</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 16 }}>
            Romania vs Poland vs UAE vs Saudi — Work Visa Comparison
          </h1>

          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32 }}>
            By <strong style={{ color: "#0b1c30" }}>Tarsem Lal</strong>, Founder, Shiva Travel &amp; Manpower Consultants (MEA RA B-1794) · Updated 2026-05-13
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 32 }}>
            Choosing the right country for overseas work isn&apos;t just about salary. It&apos;s about salary <em>minus</em> cost of living, plus career trajectory, plus quality of life, plus where you want to be 5 years from now. Here&apos;s the side-by-side comparison every Indian worker should see before signing.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
            Quick comparison table (2026 data)
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 32, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse", minWidth: 720 }}>
              <thead style={{ backgroundColor: "#001f5d", color: "#fff" }}>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Country</th>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Salary (₹/mo)</th>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Timeline</th>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Contract</th>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Tax</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, idx) => (
                  <tr key={c.name} style={{ borderTop: "1px solid #e5e7eb", backgroundColor: idx % 2 ? "#f8f9ff" : "#fff" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, color: "#0b1c30" }}>{c.name}</td>
                    <td style={{ padding: "12px 14px" }}>{c.salary}</td>
                    <td style={{ padding: "12px 14px" }}>{c.timeline}</td>
                    <td style={{ padding: "12px 14px" }}>{c.contract}</td>
                    <td style={{ padding: "12px 14px" }}>{c.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
            Country-by-country detail
          </h2>
          {countries.map((c) => (
            <div key={c.name} style={{ marginBottom: 32, padding: 24, border: "1px solid #e5e7eb", borderRadius: 12, backgroundColor: "#f8f9ff" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{c.name}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "8px 16px", fontSize: 14, lineHeight: 1.6 }}>
                <strong>Salary:</strong><span>{c.salary}</span>
                <strong>Contract:</strong><span>{c.contract}</span>
                <strong>Timeline:</strong><span>{c.timeline}</span>
                <strong>Visa type:</strong><span>{c.visaType}</span>
                <strong>Accommodation:</strong><span>{c.accommodation}</span>
                <strong>Food:</strong><span>{c.food}</span>
                <strong>Income tax:</strong><span>{c.tax}</span>
                <strong>Best for:</strong><span style={{ color: "#0052dc", fontWeight: 600 }}>{c.bestFor}</span>
                <strong>Pros:</strong><span>{c.pros}</span>
                <strong>Cons:</strong><span>{c.cons}</span>
              </div>
            </div>
          ))}

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
            Decision framework — how to choose
          </h2>
          <ol style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Speed-first?</strong> → UAE or Qatar (30–45 days)</li>
            <li style={{ marginBottom: 12 }}><strong>Highest gross salary?</strong> → Romania or Poland (₹85k+ in EU currency)</li>
            <li style={{ marginBottom: 12 }}><strong>Highest net savings?</strong> → Saudi NEOM (high pay + free housing + zero tax)</li>
            <li style={{ marginBottom: 12 }}><strong>Want EU citizenship long-term?</strong> → Poland or Romania (5-year PR path)</li>
            <li style={{ marginBottom: 12 }}><strong>Bring family later?</strong> → UAE or Saudi (family visa easier with salary thresholds)</li>
            <li style={{ marginBottom: 12 }}><strong>Skilled trade (welder, electrician, carpenter)?</strong> → Saudi NEOM or Romania construction</li>
            <li style={{ marginBottom: 12 }}><strong>Agricultural / farming background?</strong> → Poland food processing &amp; agriculture</li>
            <li style={{ marginBottom: 12 }}><strong>Hospitality / retail?</strong> → UAE or Qatar</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 32, marginBottom: 16 }}>
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ backgroundColor: "#f8f9ff", borderRadius: 12, padding: "18px 22px", border: "1px solid #e5e7eb" }}>
                <summary style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", cursor: "pointer", listStyle: "none" }}>
                  {f.q}
                </summary>
                <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 12, color: "#43474d" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: 24, backgroundColor: "#001f5d", borderRadius: 16, color: "#fff" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              Need help choosing? Free consultation
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>
              Bring your work experience certificates to our Nakodar office. We&apos;ll map your profile against current openings across all 7 countries above and recommend the highest-net-pay option for your specific skills.
            </p>
            <Link href="/contactus" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#fff", color: "#001f5d", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
              Book Free Consultation &rarr;
            </Link>
          </div>

          <div style={{ marginTop: 32, fontSize: 14, color: "#64748b" }}>
            <p>Related visa pages: <Link href="/visa/uae" style={{ color: "#0052dc" }}>UAE</Link> · <Link href="/visa/saudi-arabia" style={{ color: "#0052dc" }}>Saudi</Link> · <Link href="/visa/qatar" style={{ color: "#0052dc" }}>Qatar</Link> · <Link href="/visa/romania" style={{ color: "#0052dc" }}>Romania</Link> · <Link href="/visa/poland" style={{ color: "#0052dc" }}>Poland</Link> · <Link href="/visa/croatia" style={{ color: "#0052dc" }}>Croatia</Link></p>
          </div>
        </article>
      </main>
    </>
  );
}
