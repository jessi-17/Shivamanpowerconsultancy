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
  title: "Manpower Consultancy Near Kapurthala | Shiva Travel & Manpower Consultants",
  description:
    "Looking for overseas jobs from Kapurthala? Shiva Travel & Manpower Consultants — government licensed (RA B-1794), 25+ years experience. Jobs in Dubai, Saudi Arabia, Qatar, Poland, Romania. Zero candidate fees. Office near Kapurthala on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Kapurthala",
    "overseas recruitment agency Kapurthala",
    "Gulf jobs from Kapurthala",
    "Dubai jobs Kapurthala Punjab",
    "Europe work visa Kapurthala",
    "recruitment agency near Kapurthala",
    "Saudi Arabia jobs Kapurthala",
    "Qatar jobs from Kapurthala",
    "Poland work permit Kapurthala",
    "Romania jobs Kapurthala Punjab",
  ],
  alternates: {
    canonical: "/kapurthala",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Shiva Travel & Manpower Consultants — Kapurthala Region",
  description:
    "Government licensed overseas recruitment agency serving Kapurthala, Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivatravelconsultant.in/kapurthala",
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
    name: "Kapurthala",
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
  { title: "30 Minutes from Kapurthala Bus Stand", desc: "Our Nakodar office is 22 km from Kapurthala city via the Kapurthala“Nakodar road. Direct Punjab Roadways buses every 30 minutes (₹35, 30 min). Many Kapurthala families come on Saturday afternoons after visiting Sultanpur Lodhi gurdwara." },
  { title: "Sultanpur Lodhi & Bholath Families Welcome", desc: "We have placed 800+ workers from Kapurthala district — Sultanpur Lodhi, Bholath, Begowal, Phagwara Road. Religious-minded families value our transparent practice — no false promises, just honest assessments and verifiable license." },
  { title: "Engineering & Technical Diploma Specialty", desc: "Kapurthala has Punjab's railway coach factory legacy and engineering colleges (PLSEI etc). Workers with technical diplomas or engineering background match Romania and Poland skilled-worker shortlists perfectly. Tell us your training, we map the right country." },
  { title: "Govt-Licensed RA B-1794", desc: "MEA-issued, ALMRA Punjab member. Verifiable on emigrate.gov.in portal. License valid through June 2027 — search for our agency name directly on the official site to confirm." },
  { title: "Free Documentation Review", desc: "Bring your existing certificates — diploma, degree, work experience — and we'll tell you for FREE which countries best match your profile. No commitment, no charges for first consultation. Honest assessment first, decision second." },
  { title: "Family-First Counselling \u2014 Bring the Whole Family", desc: "Bring parents, spouses, in-laws. We sit with the whole family. Many Kapurthala families want to make the decision together \u2014 we welcome this approach and explain the process in Punjabi/Hindi/English." },
];

export default function KapurthalaPage() {
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
          { name: "Kapurthala", href: "/kapurthala" },
        ])) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Serving Kapurthala & Doaba Since 2002"
          title="Overseas recruitment agency near Kapurthala."
          highlight="near Kapurthala."
          chips={["15 mins from Kapurthala", "Govt-Licensed", "No Hidden Fees", "Doaba Coverage"]}
          description="Shiva Travel & Manpower Consultants is a govt-licensed recruitment agency on Jalandhar Road, Nakodar — just 15 minutes from Kapurthala. 5,000+ Doaba workers placed in Gulf & Europe."
          primaryCta={{ label: "Book Free Consultation", href: "/contactus" }}
          stats={[
            { num: "15 min", label: "From Kapurthala" },
            { num: "5,000+", label: "Doaba Placements" },
            { num: "RA B-1794", label: "MEA Licensed" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel Manpower Consultants office near Kapurthala" }}
          imageSeal={{ title: "Walk-in from Kapurthala", subtitle: "15 mins to Nakodar office" }}
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Families from Kapurthala Trust Shiva Travel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Government licensed, zero fees, and decades of proven results for the Doaba region.
              </p>
            </div>

            <CityTrustGrid
              items={trustReasons}
              image={{
                src: "/shiva-manpower-nakodar-office-punjab.webp",
                alt: "Shiva Travel & Manpower Consultants office near Kapurthala — licensed MEA agency RA B-1794",
              }}
              imageCaption="Our Nakodar office — 30 minutes from Kapurthala"
            />
          </div>
        </section>

        {/* ===== DESTINATIONS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Kapurthala</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from the Kapurthala-Doaba region.
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

        {/* ===== PUNJAB CLUSTER — internal linking ===== */}
        <PunjabCluster currentSlug="kapurthala" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Overseas Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar — just 15 minutes from Kapurthala city.
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
