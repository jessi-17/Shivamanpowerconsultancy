import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "GAMCA Medical Test — Complete Guide for Indian Workers (2026)" },
  description:
    "Full procedure of GCC Approved Medical Centres Association (GAMCA) examination for Gulf visas. Tests included, cost, common rejection reasons, how to prepare, approved centres in Punjab.",
  alternates: { canonical: "/guides/gamca-medical-test" },
};

const baseUrl = "https://shivatravelconsultant.in";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GAMCA Medical Test — Complete Guide for Indian Workers (2026)",
  description:
    "Step-by-step guide to GAMCA medical examination for Gulf employment visas — tests, costs, preparation, rejection reasons, approved centres.",
  author: {
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: "Tarsem Lal",
    jobTitle: "Founder & Managing Director, Shiva Travel & Manpower Consultants",
  },
  publisher: { "@id": `${baseUrl}/#organization` },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/guides/gamca-medical-test` },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to complete the GAMCA medical test for a Gulf work visa",
  description: "Six-step process for Indian workers to complete the GAMCA medical examination required for UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman employment visas.",
  totalTime: "P14D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "3000" },
  supply: [
    { "@type": "HowToSupply", name: "Valid Indian passport" },
    { "@type": "HowToSupply", name: "4 passport-sized photographs" },
    { "@type": "HowToSupply", name: "Demand letter / employment offer from Gulf employer" },
    { "@type": "HowToSupply", name: "GAMCA medical fees (₹2,500–3,000)" },
  ],
  step: [
    { "@type": "HowToStep", position: 1, name: "Book a GAMCA appointment", text: "Visit https://wafid.com (the official GAMCA portal, now Wafid) and book an appointment at any GAMCA-approved medical centre. Choose the country code matching your destination visa." },
    { "@type": "HowToStep", position: 2, name: "Prepare for the test", text: "Avoid alcohol for 72 hours. Fast for 8 hours before blood tests. Bring passport, 4 photos, appointment confirmation, employment offer letter." },
    { "@type": "HowToStep", position: 3, name: "Attend the medical examination", text: "Tests typically include: blood (HIV, Hepatitis B & C, Syphilis, Malaria), urine (drugs, pregnancy), chest X-ray (TB screening), physical examination (BP, vision, general fitness)." },
    { "@type": "HowToStep", position: 4, name: "Wait for results", text: "Results published online via Wafid portal within 3–7 working days. You receive a fitness certificate marked 'Fit' or 'Unfit'." },
    { "@type": "HowToStep", position: 5, name: "Submit to employer / RA agency", text: "Forward the fitness certificate to your recruitment agent or employer. They submit it as part of the work visa application." },
    { "@type": "HowToStep", position: 6, name: "If declared Unfit — appeal options", text: "Some conditions allow re-test after 3 months (e.g., elevated BP). For others (HIV+, active TB) reapplication is generally not possible. Consult our Nakodar office for guidance." },
  ],
};

const rejectionReasons = [
  { condition: "Active TB / TB scar on chest X-ray", note: "Most common rejection. Old scars without active infection sometimes OK." },
  { condition: "HIV positive", note: "Permanent disqualification across Gulf." },
  { condition: "Hepatitis B / C", note: "Disqualification — varies slightly by country." },
  { condition: "Syphilis (active)", note: "Treatable but causes delay; retest after treatment." },
  { condition: "Drug traces in urine", note: "Includes prescribed opioids; bring doctor's prescription if relevant." },
  { condition: "High blood pressure (severe)", note: "Mild cases sometimes deferred for 3-month retest." },
  { condition: "Diabetes (uncontrolled)", note: "Controlled diabetes usually OK with documentation." },
  { condition: "Vision below standard", note: "Glasses/contacts allowed; severe vision impairment can disqualify." },
  { condition: "Pregnancy", note: "Female applicants — pregnancy usually causes deferral." },
  { condition: "Mental health conditions (severe)", note: "Schizophrenia, severe depression with medication can disqualify." },
];

const faqs = [
  {
    q: "What is GAMCA medical and why is it required?",
    a: "GAMCA (Gulf Approved Medical Centres Association) is the mandatory health screening for any worker applying for an employment visa to a GCC country (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman). It ensures workers do not carry communicable diseases like TB, HIV, hepatitis. As of 2024, the GAMCA system was renamed Wafid but the test and process remain the same.",
  },
  {
    q: "How much does GAMCA medical cost in India in 2026?",
    a: "Standard GAMCA medical examination cost in India ranges ₹2,500–₹3,500 depending on the approved centre. Some specialized tests (additional chest X-ray, dental for specific roles) may add ₹500–₹1,000. Avoid centres charging significantly above ₹4,000 — they may be unauthorized.",
  },
  {
    q: "How long is GAMCA medical valid?",
    a: "GAMCA medical fitness certificate is valid for 3 months from the date of issue. If your visa processing exceeds this window, you may need to redo the test. Plan your medical close to (but not too close to) your expected visa stamping date.",
  },
  {
    q: "Where can I take the GAMCA medical test in Punjab?",
    a: "Several GAMCA-approved centres operate in Punjab — most are in Jalandhar, Ludhiana and Chandigarh. The closest authorized centre to Nakodar is in Jalandhar (approximately 30 minutes by road). Shiva Travel coordinates booking, transport, and documentation with approved centres.",
  },
  {
    q: "Can I retake GAMCA if I fail the first time?",
    a: "Depends on the reason. Treatable conditions (mild hypertension, treatable infections) often allow retest after the condition is resolved — typically a 3-month wait. Permanent disqualifications (HIV+, active TB without recovery) generally cannot be retested. Some Gulf countries are more lenient than others — Saudi is generally strictest.",
  },
  {
    q: "What should I do the night before GAMCA medical?",
    a: "Avoid alcohol for 72 hours, fast for 8 hours before the test (blood work), get 7+ hours of sleep, drink water normally (don't dehydrate), avoid heavy/oily food. Bring all required documents — appointment slip, passport, photos, employment offer.",
  },
  {
    q: "What tests are included in GAMCA medical?",
    a: "Standard GAMCA tests include: (1) blood tests — HIV, Hepatitis B & C, Syphilis, Malaria, blood group, (2) urine — drug screening, pregnancy (women), (3) chest X-ray — TB screening, (4) physical exam — BP, height, weight, vision, hearing, general fitness, (5) for some roles: dental check (e.g., food handlers), psychological screening.",
  },
  {
    q: "Can I use any medical centre for GAMCA?",
    a: "No. Only GAMCA-approved / Wafid-authorized medical centres can issue valid certificates. Tests done at regular hospitals are NOT accepted by Gulf embassies. Always verify the centre is on the official Wafid approved list before booking.",
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

export default function GAMCAGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "GAMCA Medical Test", href: "/guides/gamca-medical-test" },
        ])) }}
      />

      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "120px 32px 80px", fontFamily: "var(--font-body)", color: "#0b1c30" }}>
          <Link href="/guides" style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0052dc", textDecoration: "none" }}>
            &larr; All Guides
          </Link>

          <div style={{ marginTop: 24, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Process Guide • 10 min read</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 16 }}>
            GAMCA Medical Test — Complete Guide for Indian Workers
          </h1>

          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 32 }}>
            By <strong style={{ color: "#0b1c30" }}>Tarsem Lal</strong>, Founder, Shiva Travel &amp; Manpower Consultants (MEA RA B-1794) · Updated 2026-05-13
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>
            Every Indian worker applying for a Gulf country employment visa must pass the GAMCA medical examination. Fail it, and your visa application stops. Pass it, and you&apos;re a major step closer to departure. This guide covers the entire process — booking, tests, cost, preparation, rejection reasons, and what to do if you fail.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            What is GAMCA?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            GAMCA stands for <strong>Gulf Approved Medical Centres Association</strong>. It&apos;s the system used by all six GCC countries (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman) to medically screen foreign workers before issuing employment visas. As of 2024, the GAMCA system was technically renamed <strong>Wafid</strong>, but the process, tests, and certificate remain identical.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            The purpose: ensure foreign workers do not carry communicable diseases like TB, HIV, or Hepatitis B/C into the host country. It&apos;s a one-time test (valid 3 months) and applies to every worker regardless of role — construction, hospitality, driver, supervisor, anyone.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            The 6-step GAMCA process
          </h2>
          <ol style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ marginBottom: 16 }}><strong>Book your appointment</strong> at <a href="https://wafid.com" target="_blank" rel="noopener noreferrer nofollow" style={{ color: "#0052dc" }}>wafid.com</a> — choose the destination country code (matches your visa target).</li>
            <li style={{ marginBottom: 16 }}><strong>Prepare</strong>: 72 hours alcohol-free, 8-hour fast before blood tests, sleep well. Bring passport, 4 photos, appointment slip, employment offer letter.</li>
            <li style={{ marginBottom: 16 }}><strong>Attend the examination</strong> at the GAMCA/Wafid-approved centre. Allow 2–3 hours.</li>
            <li style={{ marginBottom: 16 }}><strong>Wait for results</strong>: published online at Wafid portal in 3–7 working days. Marked &quot;Fit&quot; or &quot;Unfit&quot;.</li>
            <li style={{ marginBottom: 16 }}><strong>Submit certificate</strong> to your recruitment agent / employer for visa application.</li>
            <li style={{ marginBottom: 16 }}><strong>If declared Unfit</strong>: assess reason. Treatable conditions allow retest in 3 months; permanent disqualifications (HIV+, active TB) generally cannot be reapplied.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            Tests included in GAMCA medical
          </h2>
          <ul style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li><strong>Blood tests:</strong> HIV, Hepatitis B &amp; C, Syphilis (VDRL), Malaria, blood group</li>
            <li><strong>Urine tests:</strong> drug screening, pregnancy (women), general urinalysis</li>
            <li><strong>Chest X-ray:</strong> TB screening — most common cause of rejection</li>
            <li><strong>Physical examination:</strong> blood pressure, height, weight, BMI, vision, hearing, general fitness</li>
            <li><strong>Role-specific extras</strong>: food handlers get dental check; some roles include psychological screening</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            Common rejection reasons
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 24, border: "1px solid #e5e7eb", borderRadius: 12 }}>
            <table style={{ width: "100%", fontSize: 14, borderCollapse: "collapse" }}>
              <thead style={{ backgroundColor: "#001f5d", color: "#fff" }}>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Condition</th>
                  <th style={{ textAlign: "left", padding: "12px 14px" }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {rejectionReasons.map((r, idx) => (
                  <tr key={r.condition} style={{ borderTop: "1px solid #e5e7eb", backgroundColor: idx % 2 ? "#f8f9ff" : "#fff" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 600 }}>{r.condition}</td>
                    <td style={{ padding: "12px 14px", color: "#43474d" }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            How to prepare — the night before
          </h2>
          <ul style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li>72 hours: no alcohol</li>
            <li>8 hours before: no food (water OK)</li>
            <li>7+ hours sleep</li>
            <li>Avoid heavy/oily/spicy food 24 hours before</li>
            <li>Hydrate normally (don&apos;t over-drink or under-drink)</li>
            <li>If on prescribed medication — bring the prescription</li>
            <li>Trim hair away from chest if X-ray planned (some technicians ask)</li>
            <li>Wear comfortable, easily-removable clothing</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
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
              GAMCA booking + coordination from Nakodar
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 16 }}>
              We coordinate GAMCA medical appointments with approved centres in Jalandhar/Ludhiana for our candidates — including pre-test briefing, transport guidance, and result tracking. Part of our complete Gulf visa service.
            </p>
            <Link href="/services/gamca-medical" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#fff", color: "#001f5d", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
              GAMCA Service Details &rarr;
            </Link>
          </div>

          <div style={{ marginTop: 32, fontSize: 14, color: "#64748b" }}>
            <p>Related: <Link href="/services/e-migrate" style={{ color: "#0052dc" }}>E-Migrate Registration</Link> · <Link href="/services/document-attestation" style={{ color: "#0052dc" }}>Document Attestation</Link> · <Link href="/guides/work-visa-comparison" style={{ color: "#0052dc" }}>Country Visa Comparison</Link></p>
          </div>
        </article>
      </main>
    </>
  );
}
