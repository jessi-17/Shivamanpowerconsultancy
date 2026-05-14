import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "How to Verify a Govt-Licensed RA Agency in India (2026 Guide)" },
  description:
    "Step-by-step guide to verify any overseas recruitment agent's MEA license on the official eMigrate portal. Avoid fraud, scams, and unlicensed sub-agents. Updated for 2026.",
  alternates: { canonical: "/guides/how-to-verify-licensed-ra-agency" },
};

const baseUrl = "https://shivatravelconsultant.in";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Verify a Govt-Licensed RA Agency in India (2026 Guide)",
  description:
    "Complete guide to verify any overseas recruitment agent's MEA-issued license. Use the official eMigrate portal to confirm RA license validity before paying any agency.",
  author: {
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    name: "Tarsem Lal",
    jobTitle: "Founder & Managing Director, Shiva Travel & Manpower Consultants",
  },
  publisher: { "@id": `${baseUrl}/#organization` },
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
  mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/guides/how-to-verify-licensed-ra-agency` },
  about: { "@type": "Thing", name: "MEA Recruiting Agent license verification" },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to verify a Recruiting Agent license on eMigrate.gov.in",
  description: "Step-by-step process to verify any Indian overseas recruitment agency's government license.",
  totalTime: "PT5M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Visit the official eMigrate portal", text: "Go to https://emigrate.gov.in — the only official Indian government portal for emigration." },
    { "@type": "HowToStep", position: 2, name: "Navigate to 'Registered Recruiting Agents'", text: "From the main menu, select 'Recruiting Agents' → 'Active RA List' or use the search box." },
    { "@type": "HowToStep", position: 3, name: "Search by agency name or license number", text: "Enter the agency's name (e.g., 'Shiva Travel') or RA license number (e.g., 'B-1794') in the search field." },
    { "@type": "HowToStep", position: 4, name: "Verify the license details", text: "Confirm: (a) license is Active not Expired, (b) state and city match the agency's claimed location, (c) license validity date is in the future." },
    { "@type": "HowToStep", position: 5, name: "Cross-check business identity", text: "Match the licensed name with the agency you are dealing with. Some scammers operate under similar-sounding names." },
  ],
};

const faqs = [
  {
    q: "Can I trust a government-licensed recruitment agency in India for overseas job placement?",
    a: "Yes — a Government of India, Ministry of External Affairs (MEA) licensed recruitment agency (RA) is the only legal channel for overseas employment of ECR-passport holders, and it is the safest route by a large margin. An MEA-licensed RA: (1) must hold a unique RA Licence number — for example, Shiva Travel & Manpower Consultants holds RA Licence B-1794 — verifiable on the official emigrate.gov.in portal; (2) is bound by capped service-fee rules set by the Emigration Act, 1983 — no agency can legally charge more, and overage is grounds for licence revocation; (3) must sign every candidate on a formal employment contract before departure; (4) must register every placement on the E-Migrate system; (5) is accountable to MEA Protector of Emigrants and can lose its bank guarantee in any fraud or abandonment case. To trust an agency, verify three things before paying anything: (a) the licence number on emigrate.gov.in; (b) a physical office you can visit; (c) ALMRA membership or equivalent industry body affiliation. Avoid any 'agent' who cannot show all three. Unlicensed agents have no legal recourse channel — MEA-licensed RAs do.",
  },
  {
    q: "Why must Indian overseas recruitment agencies have an MEA license?",
    a: "Under Indian Emigration Act 1983, any agency placing Indian workers in overseas employment must hold a Recruiting Agent (RA) license issued by the Protector General of Emigrants, Ministry of External Affairs (MEA). Operating without this license is illegal and grounds for criminal prosecution.",
  },
  {
    q: "What does an MEA RA license number look like?",
    a: "An MEA RA license number follows the format 'RA B-XXXX/STATE/PER/...' — example: 'B-1794/PUN/PER/100/5/10094/2022'. 'B' refers to the registration category, the 4-digit number is the unique RA ID, and the state code (PUN for Punjab) identifies the licensing region.",
  },
  {
    q: "Where do I verify an Indian recruitment agency's license?",
    a: "On the official Ministry of External Affairs portal: https://emigrate.gov.in. The portal has a public 'Active RA' list searchable by name, license number, or state. No third-party site should be trusted for verification.",
  },
  {
    q: "What if an agency claims to be 'partnered with' a licensed agency?",
    a: "Sub-agents and 'partners' are typically unlicensed brokers who add hidden commission to your fees. Per MEA regulations, only the licensed RA itself can legally handle your case. If an agency tells you they 'work with' another licensed firm, walk away — or deal directly with the licensed firm.",
  },
  {
    q: "How long is an MEA RA license valid?",
    a: "MEA RA licenses are typically issued for 5 years, then renewable subject to compliance review. Always verify both the issue year and the validity-through year on the eMigrate portal. An expired-but-not-renewed agency cannot legally place workers.",
  },
  {
    q: "What are red flags of a fraudulent recruitment agency?",
    a: "Major red flags: (1) cannot produce RA license number, (2) demands large upfront 'guarantee fee', (3) no physical office address, (4) does not appear on eMigrate.gov.in active list, (5) operates only through WhatsApp without verifiable contact details, (6) promises 'guaranteed' visa within unrealistic timeframe.",
  },
  {
    q: "Can I trust JustDial or Sulekha reviews for verifying an agency?",
    a: "Reviews tell you about service quality, not legal compliance. An agency can have great reviews and still be unlicensed (operating illegally). Always cross-check legal license on emigrate.gov.in regardless of review platform reputation.",
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

export default function VerifyRAGuide() {
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
          { name: "How to Verify a Licensed RA Agency", href: "/guides/how-to-verify-licensed-ra-agency" },
        ])) }}
      />

      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "120px 32px 80px", fontFamily: "var(--font-body)", color: "#0b1c30" }}>
          <Link href="/guides" style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0052dc", textDecoration: "none" }}>
            &larr; All Guides
          </Link>

          <div style={{ marginTop: 24, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Trust & Verification • 8 min read</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 16 }}>
            How to Verify a Govt-Licensed RA Agency in India
          </h1>

          <p style={{ fontSize: 14, color: "#64748b", marginBottom: 40 }}>
            By <strong style={{ color: "#0b1c30" }}>Tarsem Lal</strong>, Founder, Shiva Travel &amp; Manpower Consultants (MEA RA B-1794) · Published 2026-05-13
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>
            Every year, thousands of families across Punjab and India lose lakhs of rupees to unlicensed &quot;recruitment agents&quot; promising overseas jobs. The fix is simple — verify the agency&apos;s government license <em>before</em> you pay anything. This guide shows you exactly how, in under 5 minutes.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            Why this matters
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            Under India&apos;s <strong>Emigration Act 1983</strong>, every agency placing Indian workers in overseas employment must hold a <strong>Recruiting Agent (RA) license</strong> issued by the Protector General of Emigrants, Ministry of External Affairs (MEA). Operating without this license is illegal — and a major sign the agent is a fraudulent sub-agent.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 20 }}>
            A licensed RA is held to standards: transparent fees, no passport retention, verified employer contracts, pre-departure briefings. An unlicensed broker has no such obligations — and no government recourse if things go wrong.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            The 5-step verification process
          </h2>

          <ol style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ marginBottom: 16 }}>
              <strong>Visit emigrate.gov.in</strong> — the only official Indian government portal for emigration. Do not use any third-party &quot;verification&quot; site.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Navigate to &quot;Recruiting Agents&quot; → &quot;Active RA List&quot;</strong> from the main menu, or use the homepage search box.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Search by name or license number</strong> — enter the agency&apos;s name (e.g., &quot;Shiva Travel&quot;) or their RA license number (e.g., &quot;B-1794&quot;).
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Verify the details</strong>: confirm (a) the license status is <em>Active</em> not Expired, (b) the state and city match the agency&apos;s claimed location, (c) the validity date is in the future.
            </li>
            <li style={{ marginBottom: 16 }}>
              <strong>Cross-check business identity</strong> — match the licensed name exactly with the agency name on signboards, paperwork, contracts. Scammers operate under similar-sounding names like &quot;Shiva Travels&quot; or &quot;Shiva Manpower&quot;.
            </li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            What an MEA RA license looks like
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
            A valid MEA RA license number follows this format:
          </p>
          <div style={{ background: "#f8f9ff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: 15, marginBottom: 20 }}>
            RA <strong>B-XXXX</strong>/<strong>STATE</strong>/PER/100/5/XXXXX/<strong>YEAR</strong>
            <br /><br />
            Example (our license): <strong>RA B-1794/PUN/PER/100/5/10094/2022</strong>
          </div>
          <ul style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li><strong>B-XXXX</strong> = unique RA ID (ours is B-1794)</li>
            <li><strong>STATE</strong> = state code (PUN for Punjab, MUM for Mumbai, DEL for Delhi, etc.)</li>
            <li><strong>YEAR</strong> = year of issuance / renewal</li>
            <li>Licenses are valid for 5 years and must be renewed</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12 }}>
            Red flags of a fraudulent agency
          </h2>
          <ul style={{ fontSize: 16, lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>Cannot produce RA license number on request</li>
            <li style={{ marginBottom: 8 }}>Demands large upfront &quot;guarantee&quot; or &quot;security&quot; fee (₹50k+)</li>
            <li style={{ marginBottom: 8 }}>No physical office address — operates only via WhatsApp</li>
            <li style={{ marginBottom: 8 }}>Does not appear on emigrate.gov.in active RA list</li>
            <li style={{ marginBottom: 8 }}>Promises &quot;guaranteed&quot; visa in unrealistic time (e.g., 7 days for Gulf)</li>
            <li style={{ marginBottom: 8 }}>Says &quot;we work with a licensed agency&quot; — sub-agent red flag</li>
            <li style={{ marginBottom: 8 }}>Asks you to deposit money in personal bank account (not business account)</li>
            <li style={{ marginBottom: 8 }}>Cannot show a sample employer contract or job offer letter in writing</li>
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
              Verify our license yourself
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
              Shiva Travel &amp; Manpower Consultants holds <strong style={{ color: "#fff" }}>RA B-1794/PUN/PER/100/5/10094/2022</strong>, issued by the Ministry of External Affairs, valid through June 2027. Search for us on the official portal:
            </p>
            <a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer nofollow" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#fff", color: "#001f5d", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
              Open eMigrate.gov.in &rarr;
            </a>
          </div>

          <div style={{ marginTop: 32, fontSize: 14, color: "#64748b" }}>
            <p>Related: <Link href="/punjab" style={{ color: "#0052dc" }}>Best Manpower Consultancy in Punjab</Link> · <Link href="/services/e-migrate" style={{ color: "#0052dc" }}>E-Migrate Registration</Link> · <Link href="/about-us" style={{ color: "#0052dc" }}>About Shiva Travel</Link></p>
          </div>
        </article>
      </main>
    </>
  );
}
