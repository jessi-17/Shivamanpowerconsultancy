import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://shivatravelconsultant.in";
const LAST_UPDATED = "30 April 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Shiva Travel & Manpower Consultants. How we collect, use, share, and protect your personal information when you use our website or apply for overseas jobs through us.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Shiva Travel & Manpower Consultants",
    description:
      "How we collect, use, share, and protect your personal information.",
    url: `${SITE_URL}/privacy-policy`,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="full-width-page" style={{ backgroundColor: "#fff" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "120px 24px 32px",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 24,
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#94a3b8",
            }}
          >
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "#cbd5e1" }}>/</span>
            <span style={{ color: "#0b1c30" }}>Privacy Policy</span>
          </nav>

          <span
            style={{
              display: "inline-block",
              padding: "4px 12px",
              borderRadius: 999,
              background: "#eaf1ff",
              color: "#0052dc",
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Legal
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#0b1c30",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
            }}
          >
            Privacy Policy
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "#64748b",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </header>

      {/* Body */}
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 24px 80px",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "#374151",
          lineHeight: 1.75,
        }}
      >
        <Section title="1. Who we are">
          <p>
            This privacy policy applies to <strong>Shiva Travel &amp; Manpower
            Consultants</strong>, a Government of India Ministry of External
            Affairs (MEA) licensed overseas recruitment agency (RA B-1794),
            operating since 2002 from Nakodar, Punjab. In this policy, “we”,
            “us”, and “our” refer to Shiva Travel &amp; Manpower Consultants.
          </p>
          <p>
            We operate the website <a href={SITE_URL}>shivatravelconsultant.in</a>
            {" "}and provide overseas job placement, visa guidance, and related
            recruitment services to candidates and employers across the Gulf and
            Europe.
          </p>
        </Section>

        <Section title="2. What information we collect">
          <p>We collect personal information in three ways:</p>

          <h3 style={subheadingStyle}>a. Information you give us</h3>
          <p>
            When you fill out a contact, callback, employer inquiry, newsletter,
            or job application form on our website or through WhatsApp, we
            collect:
          </p>
          <ul style={listStyle}>
            <li>Name</li>
            <li>Phone number / WhatsApp number</li>
            <li>Email address</li>
            <li>Country or destination of interest</li>
            <li>Years of experience and skill area</li>
            <li>Company name (for employer inquiries)</li>
            <li>Any free-text message you write to us</li>
          </ul>
          <p>
            For job placements, we may later collect additional documents such
            as your CV, passport copy, photograph, educational and skill
            certificates, medical fitness reports, and police clearance — only
            after you formally engage us and have explicitly agreed to share
            these.
          </p>

          <h3 style={subheadingStyle}>b. Information collected automatically</h3>
          <p>
            When you visit our website, we and our analytics providers
            automatically collect:
          </p>
          <ul style={listStyle}>
            <li>IP address and approximate location (city / region level)</li>
            <li>Device type, browser type, and operating system</li>
            <li>Pages you visited, time spent, and clicks</li>
            <li>Referring website and UTM campaign parameters</li>
            <li>Cookies and similar tracking technologies (see Section 6)</li>
          </ul>

          <h3 style={subheadingStyle}>c. Information from third parties</h3>
          <p>
            If you reach us via Google Ads, Meta Ads, or social media, those
            platforms may share basic engagement data with us (for example, that
            an ad click resulted in a form submission). We do not buy
            third-party contact lists.
          </p>
        </Section>

        <Section title="3. Why we collect this information (purpose)">
          <ul style={listStyle}>
            <li>
              <strong>To respond to your inquiry</strong> — call you back, email
              you, or message you on WhatsApp with relevant job openings or
              visa information.
            </li>
            <li>
              <strong>To match you with overseas job opportunities</strong> from
              our verified employer partners across UAE, Saudi Arabia, Qatar,
              Kuwait, Bahrain, Oman, Poland, Romania, Croatia, and other
              countries.
            </li>
            <li>
              <strong>To process visa, emigration (E-Migrate), and document
              attestation steps</strong> on your behalf, where you have engaged
              us for that service.
            </li>
            <li>
              <strong>To send service-related communications</strong> — interview
              schedules, document checklists, deployment updates.
            </li>
            <li>
              <strong>To send newsletters</strong> if you have subscribed (you
              can unsubscribe any time).
            </li>
            <li>
              <strong>To improve our website and services</strong> by
              understanding how visitors use the site (page views, drop-offs,
              search terms).
            </li>
            <li>
              <strong>To meet legal and regulatory obligations</strong>,
              including reporting to MEA / Protector General of Emigrants and
              cooperating with embassies, consulates, and law enforcement when
              required.
            </li>
          </ul>
        </Section>

        <Section title="4. Who we share your information with">
          <p>
            We do <strong>not</strong> sell your personal information. We share
            it only with:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Overseas employers and their representatives</strong>
              {" "}— but only after you have agreed to be considered for a
              specific role.
            </li>
            <li>
              <strong>Indian government authorities</strong> — MEA, POE
              (Protector of Emigrants), embassies, and police, as required for
              emigration clearance, passport verification, or compliance.
            </li>
            <li>
              <strong>Foreign embassies and consulates</strong> for visa
              processing on your behalf.
            </li>
            <li>
              <strong>Service providers we rely on</strong> to run the website
              and our operations (these have contractual data-protection
              obligations and process data only on our instructions):
              <ul style={{ ...listStyle, marginTop: 8 }}>
                <li>
                  <strong>Vercel Inc.</strong> — website hosting and content
                  storage
                </li>
                <li>
                  <strong>Neon</strong> — database for storing leads
                </li>
                <li>
                  <strong>Resend</strong> — transactional email delivery
                </li>
                <li>
                  <strong>PostHog</strong> — product analytics (privacy-friendly,
                  anonymous unless you submit a form)
                </li>
                <li>
                  <strong>Google LLC</strong> — Google Analytics, Google Ads
                  conversion tracking, Google Tag Manager
                </li>
                <li>
                  <strong>Meta Platforms Inc.</strong> — Facebook Pixel for ad
                  conversion measurement
                </li>
                <li>
                  <strong>Gallabox</strong> — WhatsApp chat widget
                </li>
              </ul>
            </li>
            <li>
              <strong>Legal advisors and auditors</strong> when strictly
              necessary.
            </li>
          </ul>
          <p>
            Some of these providers are based outside India (United States,
            European Union). When data leaves India, we rely on the safeguards
            those providers offer (encryption in transit, access controls,
            standard contractual clauses where applicable).
          </p>
        </Section>

        <Section title="5. How long we keep your information">
          <ul style={listStyle}>
            <li>
              <strong>Lead inquiries</strong> (callback / contact / employer
              forms): up to 3 years from your last interaction with us, then
              archived or deleted.
            </li>
            <li>
              <strong>Active candidate files</strong> (CV, passport, certificates):
              for the duration of your engagement plus 7 years, in line with
              MEA record-keeping rules and emigration regulations.
            </li>
            <li>
              <strong>Newsletter subscriptions</strong>: until you unsubscribe.
            </li>
            <li>
              <strong>Website analytics data</strong>: typically retained by our
              analytics providers per their default settings (PostHog: up to 7
              years; Google Analytics: up to 14 months by default; Meta Pixel:
              per Meta&apos;s policy).
            </li>
          </ul>
        </Section>

        <Section title="6. Cookies and tracking">
          <p>
            We use cookies and similar technologies for three purposes:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Strictly necessary</strong> — required for the website to
              work (e.g. remembering your cookie consent choice). Cannot be
              disabled.
            </li>
            <li>
              <strong>Analytics</strong> — helps us understand how visitors use
              the site (PostHog, Google Analytics). Loaded only after you
              accept cookies on the consent banner.
            </li>
            <li>
              <strong>Marketing</strong> — measures the effectiveness of our ad
              campaigns (Meta Pixel, Google Ads conversion). Loaded only after
              you accept cookies.
            </li>
          </ul>
          <p>
            You can change or withdraw your consent at any time by clearing the
            <code> cookie-consent </code>entry in your browser&apos;s local
            storage, or by using your browser&apos;s privacy controls to block
            cookies.
          </p>
        </Section>

        <Section title="7. Your rights">
          <p>
            Depending on the country you reside in, you may have some or all of
            the following rights over the personal information we hold about
            you:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Access</strong> — request a copy of the data we hold about
              you.
            </li>
            <li>
              <strong>Correction</strong> — ask us to fix any incorrect or
              incomplete information.
            </li>
            <li>
              <strong>Deletion</strong> — ask us to delete your information
              (subject to legal record-keeping obligations).
            </li>
            <li>
              <strong>Withdraw consent</strong> — for any processing based on
              your consent, including marketing emails and cookie tracking.
            </li>
            <li>
              <strong>Object or restrict processing</strong> — for example, ask
              us to stop using your data for marketing.
            </li>
            <li>
              <strong>Portability</strong> — receive your data in a structured,
              machine-readable format.
            </li>
            <li>
              <strong>Lodge a complaint</strong> with your local data
              protection authority — for India, this is the Data Protection
              Board of India (under the Digital Personal Data Protection Act,
              2023). For EU residents, your national supervisory authority.
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at the details in
            Section 10. We will respond within 30 days.
          </p>
        </Section>

        <Section title="8. How we protect your information">
          <ul style={listStyle}>
            <li>
              The website is served over HTTPS with industry-standard
              encryption.
            </li>
            <li>
              Lead data is stored on managed cloud databases with access
              limited to authorised staff only.
            </li>
            <li>
              Physical candidate files at our Nakodar office are kept in a
              locked area accessible only to our recruitment staff.
            </li>
            <li>
              Our website admin panel is password-protected and only used by
              authorised consultants.
            </li>
          </ul>
          <p>
            No system is 100% secure. If we ever become aware of a breach
            affecting your personal information, we will notify you and the
            relevant authorities as required by law.
          </p>
        </Section>

        <Section title="9. Children's privacy">
          <p>
            Our services are intended for adults (18 years or older) seeking
            overseas employment. We do not knowingly collect personal
            information from anyone under 18. If you believe a minor has
            submitted information to us, please contact us so we can delete it.
          </p>
        </Section>

        <Section title="10. Contact us / data requests">
          <p>
            If you have any questions about this policy, or want to exercise
            any of the rights listed in Section 7, please reach out to us:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@shivatravelconsultant.in">
                info@shivatravelconsultant.in
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919814820432">+91 98148-20432</a> (Office)
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/919815358832"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 98153-58832
              </a>
            </li>
            <li>
              <strong>Postal address:</strong> Shiva Travel &amp; Manpower
              Consultants, Golden Avenue, Near Sukhjeet Hospital, Jalandhar
              Road, Nakodar, Punjab 144040, India
            </li>
          </ul>
          <p>
            For the fastest response on data requests, please mention
            “Privacy / Data Request” in the subject line of your email.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy from time to time to reflect changes in
            our services, technology, or legal requirements. The updated
            version will be posted on this page with a new “Last updated” date
            at the top. If the change is significant, we will also notify you
            by email (where we have your address) or by a prominent banner on
            our website.
          </p>
        </Section>

        <p
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid #f1f5f9",
            fontSize: 14,
            color: "#94a3b8",
          }}
        >
          Shiva Travel &amp; Manpower Consultants — MEA Licensed RA B-1794 —
          Founded 2002.
        </p>
      </article>
    </main>
  );
}

const subheadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 17,
  fontWeight: 700,
  color: "#0b1c30",
  margin: "24px 0 8px",
  lineHeight: 1.4,
};

const listStyle: React.CSSProperties = {
  paddingLeft: 22,
  margin: "8px 0 14px",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
          fontWeight: 800,
          color: "#0b1c30",
          letterSpacing: "-0.01em",
          margin: "8px 0 12px",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
