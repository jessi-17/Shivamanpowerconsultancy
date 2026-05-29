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
  title: "Manpower Consultancy Near Nawanshahr | Shiva Travel & Manpower Consultants",
  description:
    "Looking for overseas jobs from Nawanshahr? Shiva Travel & Manpower Consultants â€” government licensed (RA B-1794), 25+ years experience. Jobs in Dubai, Saudi Arabia, Qatar, Poland, Romania. Zero candidate fees. Office near Nawanshahr on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Nawanshahr",
    "overseas recruitment agency Nawanshahr",
    "Gulf jobs from Nawanshahr",
    "Dubai jobs Nawanshahr Punjab",
    "Europe work visa Nawanshahr",
    "recruitment agency near Nawanshahr",
    "Saudi Arabia jobs Nawanshahr",
    "Qatar jobs from Nawanshahr",
    "Poland work permit Nawanshahr",
    "Romania jobs Nawanshahr Punjab",
  ],
  alternates: {
    canonical: "/nawanshahr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Shiva Travel & Manpower Consultants â€” Nawanshahr Region",
  description:
    "Government licensed overseas recruitment agency serving Nawanshahr (Shaheed Bhagat Singh Nagar), Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivatravelconsultant.in/nawanshahr",
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
    name: "Nawanshahr",
    containedInPlace: { "@type": "State", name: "Punjab" },
  },
};

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM Projects, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta â€” Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "Zero", label: "Fees Charged" },
];

const trustReasons = [
  { title: "1-Hour from Nawanshahr via Banga Route", desc: "Our office is 45 km from Nawanshahr (SBS Nagar) city on Jalandhar Road, Nakodar. Direct buses every 30 min via Banga route (â‚¹70, 1 hour). Also accessible via Phagwara â€” slightly longer at 1 hour 15 min." },
  { title: "Agricultural Worker Specialty â€” Banga Belt", desc: "Many Nawanshahr (SBS Nagar) families have agricultural backgrounds â€” Banga sugar belt, Balachaur farming. Poland and Romania actively recruit Indian workers for agriculture, food processing, dairy farming. Salaries 5â€“8x typical India farm wages." },
  { title: "Sugar Mill & Industrial Worker Tie-Ups", desc: "Banga sugar mill workers and Garhshankar industrial area workers have direct experience that matches Poland food processing and Romania manufacturing employer demands. Pre-existing skills translate to higher overseas pay grades." },
  { title: "Skilled Trade Placements â€” Welders, Fitters, Electricians", desc: "Welders, electricians and fitters from Nawanshahr district routinely placed in Saudi NEOM, UAE Etihad Rail, Qatar Lusail. Highest demand, highest salaries â€” â‚¹85kâ€“1.3L monthly + free accommodation." },
  { title: "Govt-Licensed RA B-1794", desc: "MEA-issued, valid through June 2027. E-Migrate registered, ALMRA Punjab member. Verifiable on official emigrate.gov.in portal. Unlike unlicensed agents in Banga/Balachaur, we handle every step under government regulation." },
  { title: "Documentation Help in Plain Punjabi", desc: "Our team explains Punjabi forms, MEA paperwork, E-Migrate process in plain Punjabi. Bring your family for the consultation \u2014 we welcome elders. Many Nawanshahr families prefer Punjabi-only briefings; we are fluent and patient." },
];

export default function NawanshahrPage() {
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
          { name: "Nawanshahr", href: "/nawanshahr" },
        ])) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Serving Nawanshahr & Doaba Since 2002"
          title="Overseas recruitment agency near Nawanshahr."
          highlight="near Nawanshahr."
          chips={["40 mins from Nawanshahr", "Govt-Licensed", "No Hidden Fees", "20+ Years"]}
          description="Shiva Travel & Manpower Consultants is a govt-licensed recruitment agency on Jalandhar Road, Nakodar â€” about 40 minutes from Nawanshahr (Shaheed Bhagat Singh Nagar). 5,000+ Doaba workers placed."
          primaryCta={{ label: "Book Free Consultation", href: "/contactus" }}
          stats={[
            { num: "40 min", label: "From Nawanshahr" },
            { num: "5,000+", label: "Doaba Placements" },
            { num: "RA B-1794", label: "MEA Licensed" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel Manpower Consultants office near Nawanshahr" }}
          imageSeal={{ title: "Walk-in from Nawanshahr", subtitle: "40 mins to Nakodar office" }}
          microChip={{ value: "4.9â˜…", label: "200+ Reviews" }}
        />

        {/* ===== STATS BAR â€” floating overlap card ===== */}
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Families from Nawanshahr Trust Shiva Travel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Government licensed, zero fees, and decades of proven results for the Doaba region.
              </p>
            </div>

            <CityTrustGrid
              items={trustReasons}
              image={{
                src: "/shiva-manpower-nakodar-office-punjab.webp",
                alt: "Shiva Travel & Manpower Consultants office serving Nawanshahr (SBS Nagar) â€” licensed MEA agency RA B-1794",
              }}
              imageCaption="Our Nakodar office â€” 1 hour from Nawanshahr"
            />
          </div>
        </section>

        {/* ===== DESTINATIONS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Nawanshahr</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from the Nawanshahr-Doaba region.
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

        {/* ===== TESTIMONIALS â€” shared Google Reviews component ===== */}
        <Testimonials />

        {/* ===== PUNJAB CLUSTER â€” internal linking ===== */}
        <PunjabCluster currentSlug="nawanshahr" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Overseas Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar â€” about 40 minutes from Nawanshahr (Shaheed Bhagat Singh Nagar).
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
