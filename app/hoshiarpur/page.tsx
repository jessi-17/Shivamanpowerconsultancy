import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import PunjabCluster from "@/components/own/PunjabCluster";
import Testimonials from "@/components/own/Testimonials";
import StatsRibbon from "@/components/own/StatsRibbon";
import CityTrustGrid from "@/components/own/CityTrustGrid";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "Manpower Consultancy Near Hoshiarpur | Shiva Travel & Manpower Consultants",
  description:
    "Looking to work abroad from Hoshiarpur? Shiva Travel & Manpower Consultants — government licensed (RA B-1794), 25+ years experience. Dubai visa agent, Saudi Arabia, Qatar, Poland, Romania jobs. Zero candidate fees. Office just 35 min from Hoshiarpur on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Hoshiarpur",
    "overseas recruitment agency Hoshiarpur",
    "Gulf jobs from Hoshiarpur",
    "Dubai jobs Hoshiarpur Punjab",
    "Europe work visa Hoshiarpur",
    "recruitment agency near Hoshiarpur",
    "Saudi Arabia jobs Hoshiarpur",
    "Qatar jobs from Hoshiarpur",
    "Poland work permit Hoshiarpur",
    "Romania jobs Hoshiarpur Punjab",
  ],
  alternates: {
    canonical: "/hoshiarpur",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Shiva Travel & Manpower Consultants — Hoshiarpur Region",
  description:
    "Government licensed overseas recruitment agency serving Hoshiarpur, Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivatravelconsultant.in/hoshiarpur",
  telephone: "+91-9814820432",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
    addressLocality: "Nakodar",
    addressRegion: "Punjab",
    postalCode: "144040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.12,
    longitude: 75.47,
  },
  areaServed: {
    "@type": "City",
    name: "Hoshiarpur",
    containedInPlace: { "@type": "State", name: "Punjab" },
  },
};

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM Projects, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta — Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "Zero", label: "Fees Charged" },
];

const trustReasons = [
  { title: "1-Hour Trip from Hoshiarpur (Worth It)", desc: "Our Nakodar office is 50 km from Hoshiarpur city on Jalandhar Road. Direct PRTC and private buses every 30 min from Hoshiarpur Bus Stand (₹80, 1 hour). Many Hoshiarpur families plan a Saturday trip — meet us in the morning, lunch in Nakodar, return by 4 PM." },
  { title: "Trusted Across Hoshiarpur District", desc: "Dasuya, Mukerian, Mahilpur, Garhdiwala, Tanda — workers from across Hoshiarpur district come to us. Approximately 700+ placements from this district in 20+ years. We are the closest fully-licensed agency for the entire Hoshiarpur belt." },
  { title: "Woodcraft, Carpentry & Construction Specialty", desc: "Hoshiarpur's famous woodcraft and carpentry tradition matches Romania, Croatia construction-fitting work and Saudi NEOM finishing-trade jobs. We position your craft skills for Europe at ₹1.2L+ monthly salaries — much higher than unskilled labour roles." },
  { title: "Govt-Licensed RA B-1794 — Verify Yourself", desc: "MEA-issued license valid through June 2027. ALMRA Punjab member, E-Migrate registered. Search 'Shiva Travel Manpower Consultants Nakodar' on emigrate.gov.in to confirm directly." },
  { title: "Mukerian & Dasuya Industrial Worker Profiles", desc: "Workers from Mukerian power plant area and Dasuya industrial belt have skills that match Poland and Romania manufacturing employer demands. We have direct tie-ups specifically for skilled industrial workers from this belt." },
  { title: "Pre-Booked Sat/Sun Consultations Available", desc: "For families travelling 1 hour from Hoshiarpur, we can pre-block Saturday/Sunday afternoon slots so you don't waste your trip. Call ahead: +91 98148-20432. Walk-ins also welcome \u2014 but pre-booking guarantees your time slot." },
];

const faqs = [
  { q: "How do I reach Nakodar from Hoshiarpur?", a: "From Hoshiarpur Bus Stand, take any Hoshiarpurâ†’Nakodar or Hoshiarpurâ†’Kapurthala bus (every 30 min, ₹80, 1 hour via Tanda“Phagwara route). By private vehicle: NH-44 or NH-503, 50 km, ~1 hour. Many families travel Saturday morning, finish consultation by lunch, return same day." },
  { q: "Do you accept candidates from Dasuya, Mukerian, Mahilpur villages?", a: "Yes — Hoshiarpur district is one of our top placement regions. Workers from Dasuya, Mukerian, Garhdiwala, Tanda, Mahilpur, Bhunga regularly visit. The 1-hour journey is worth it — we are the closest government-licensed RA agency for the entire Hoshiarpur belt." },
  { q: "I work in Hoshiarpur woodcraft / carpentry — does this skill help abroad?", a: "Hugely. Romania, Croatia, Poland have shortage of skilled carpenters and wood-fitting workers in construction. Saudi NEOM project hires interior carpentry and fit-out specialists. Your existing craft skill could mean ₹3“5L higher annual salary vs unskilled labourers. Bring photos of your work — we share with employers." },
  { q: "What overseas jobs suit Mukerian power plant workers?", a: "Mukerian power plant fitters, electricians, mechanics match Saudi Aramco contractor demands, Qatar plant maintenance roles, and Romania industrial manufacturing. Typical salaries ₹65k“1L INR monthly + free accommodation. Bring your work experience and any vocational certificates." },
  { q: "What are the fees for Hoshiarpur candidates?", a: "Service charges are minimal, transparent, and shown on a board in our Nakodar office. Every cost — application, GAMCA medical, visa, ticket — explained upfront before deposit. Follows Indian government regulations. We do NOT charge extra for travel from Hoshiarpur or any other district." },
  { q: "Is Shiva Travel licensed for placements outside Gulf?", a: "Yes — our MEA RA License B-1794 is valid for placements globally, including Europe (Romania, Poland, Croatia, Schengen countries) and all Gulf countries. Many Hoshiarpur woodworkers go to Romania/Croatia, while drivers and welders prefer Gulf. We help you choose based on your skills." },
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

export default function HoshiarpurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Hoshiarpur", href: "/hoshiarpur" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Serving Hoshiarpur & Doaba Region"
          title="Overseas recruitment agency near Hoshiarpur."
          highlight="near Hoshiarpur."
          chips={["35 mins from Hoshiarpur", "Govt-Licensed", "No Hidden Fees", "20+ Years"]}
          description="Shiva Travel & Manpower Consultants is a govt-licensed recruitment agency on Jalandhar Road, Nakodar — approximately 35 minutes from Hoshiarpur. 5,000+ Doaba workers placed in Gulf & Europe."
          primaryCta={{ label: "Book Free Consultation", href: "/contactus" }}
          stats={[
            { num: "35 min", label: "From Hoshiarpur" },
            { num: "5,000+", label: "Doaba Placements" },
            { num: "RA B-1794", label: "MEA Licensed" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel Manpower Consultants office near Hoshiarpur" }}
          imageSeal={{ title: "Walk-in from Hoshiarpur", subtitle: "35 mins to Nakodar office" }}
          microChip={{ value: "4.9â˜…", label: "200+ Reviews" }}
        />

        {/* ===== STATS BAR — floating overlap card ===== */}
        <StatsRibbon stats={stats} overlap={-32} />
        <div style={{ height: 40 }} aria-hidden="true" />

        {/* ===== WHY FAMILIES TRUST US ===== */}
        <section style={{
          padding: "80px 0",
          backgroundColor: "#f8f9ff",
          backgroundImage: "radial-gradient(circle at center, rgba(0,82,220,0.07) 1px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Families from Hoshiarpur Trust Shiva Travel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Government licensed, zero fees, and decades of proven results for the Hoshiarpur and Doaba region.
              </p>
            </div>

            <CityTrustGrid
              items={trustReasons}
              image={{
                src: "/shiva-manpower-nakodar-office-punjab.webp",
                alt: "Shiva Travel & Manpower Consultants office serving Hoshiarpur district — licensed MEA agency RA B-1794",
              }}
              imageCaption="Our Nakodar office — 1 hour from Hoshiarpur"
            />
          </div>
        </section>

        {/* ===== DESTINATIONS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Hoshiarpur</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from Hoshiarpur and surrounding areas.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {destinations.map((d) => (
                <Link key={d.country} href={d.href} style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>
                    {d.country}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.6, marginBottom: 16 }}>
                    {d.roles}
                  </p>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc" }}>
                    View Jobs &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS — shared Google Reviews component ===== */}
        <Testimonials />

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Common questions from job seekers in the Hoshiarpur region.
              </p>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <summary style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <span style={{ fontSize: 20, color: "#64748b", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </summary>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginTop: 14 }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PUNJAB CLUSTER — internal linking ===== */}
        <PunjabCluster currentSlug="hoshiarpur" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Overseas Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar — approximately 35 minutes from Hoshiarpur city.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Walk-in consultations available Monday to Saturday, 9am to 6:30pm.
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
