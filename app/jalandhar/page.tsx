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
  title: "Manpower Consultancy Near Jalandhar | Shiva Travel & Manpower Consultants",
  description:
    "Looking to work abroad from Jalandhar? Shiva Travel & Manpower Consultants â€” government licensed (RA B-1794), 20+ years experience. Dubai visa agent, Saudi Arabia, Qatar, Poland, Romania jobs. Minimal & transparent charges. Office just 20 min from Jalandhar on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Jalandhar",
    "overseas recruitment agency Jalandhar",
    "Gulf jobs from Jalandhar",
    "Dubai jobs Jalandhar Punjab",
    "Europe work visa Jalandhar",
    "recruitment agency near Jalandhar",
    "Saudi Arabia jobs Jalandhar",
    "Qatar jobs from Jalandhar",
    "Poland work permit Jalandhar",
    "Romania jobs Jalandhar Punjab",
  ],
  alternates: {
    canonical: "/jalandhar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Shiva Travel & Manpower Consultants â€” Jalandhar Region",
  description:
    "Government licensed overseas recruitment agency serving Jalandhar, Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivatravelconsultant.in/jalandhar",
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
    name: "Jalandhar",
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
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "100%", label: "Transparent Fees" },
];

const trustReasons = [
  { title: "30 Minutes from BMC Chowk Jalandhar", desc: "Our Nakodar office on Jalandhar Road is 22 km from Jalandhar city. Direct PRTC and private buses every 15 minutes from Jalandhar Bus Stand (â‚¹40, 30 min). Many Jalandhar workers visit Saturday mornings â€” finish consultation by lunch, return same day." },
  { title: "Trusted by 600+ Workers from Jalandhar District", desc: "Workers from Jalandhar Cantt, Adampur, Kartarpur, Phillaur, Nurmahal, Shahkot regularly come. We understand the Jalandhar worker profile â€” many have sports goods, factory or skilled trade experience that Gulf and Europe employers actively recruit." },
  { title: "Jalandhar Skills â†’ Europe Salaries", desc: "Jalandhar sports goods, leather and manufacturing factory experience translates directly to Romania, Poland, Croatia skilled-worker shortlists â€” Europe salaries 4â€“6x your current Jalandhar wage. We position your CV for the right cluster." },
  { title: "Govt-Licensed RA B-1794 (Verify Yourself)", desc: "Issued by Ministry of External Affairs, valid through June 2027. E-Migrate registered, ALMRA Punjab member. Verifiable on emigrate.gov.in. Many Jalandhar agents claim 'licensed' â€” verify ours directly on the official portal." },
  { title: "Driver Profiles for Saudi NEOM & Qatar", desc: "Jalandhar district has a high concentration of HMV/HTV license holders. We have direct tie-ups with Saudi NEOM contractors, Qatar Lusail construction companies, UAE logistics firms â€” heavy vehicle drivers earn â‚¹55kâ€“80k monthly + accommodation." },
  { title: "Family-First Consultations", desc: "Bring your family \u2014 parents, spouse, in-laws. We sit with everyone, answer all questions in Hindi/Punjabi/English. Many Jalandhar families want collective decisions on overseas placement \u2014 we welcome this approach." },
];

const faqs = [
  { q: "How do I reach Shiva Travel from Jalandhar?", a: "From Jalandhar Bus Stand take any Jalandharâ†’Nakodar bus (PRTC or private, every 15 min, â‚¹40, 30 minutes). Get off at Nakodar Golden Avenue stop and walk 2 minutes to our office near Sukhjeet Hospital. By private vehicle: take Jalandharâ€“Nakodar road via Lambra, 22 km, ~30 minutes." },
  { q: "Are there overseas jobs suited for sports goods factory workers from Jalandhar?", a: "Yes. Sports goods experience translates well to factory and manufacturing jobs in Poland and Romania (food processing, packaging, leather, sports equipment). UAE construction and Saudi NEOM projects also welcome workers with manufacturing background. Bring your work experience certificate â€” employers value documented factory tenure." },
  { q: "Can someone from Adampur, Kartarpur or Phillaur also use your services?", a: "Of course. Adampur is 15 km from our office, Kartarpur 18 km, Phillaur 22 km. Workers from across Jalandhar district â€” Cantt, Phillaur, Nurmahal, Shahkot, Sham Chaurasi â€” regularly visit us. Many catch the morning bus, finish consultation by lunch, and return same day." },
  { q: "I have a heavy vehicle license â€” which Gulf country pays the most?", a: "For HMV/HTV drivers, Saudi NEOM project (SAR 4,000â€“6,000/month, ~â‚¹90kâ€“1.3L INR) and Qatar Lusail construction (QR 2,500â€“3,500, ~â‚¹60kâ€“80k INR) are the highest-paying. Accommodation, transport, food typically free. You'll need valid Indian heavy vehicle license + 2+ years experience." },
  { q: "What are the fees for overseas placement from Jalandhar?", a: "Service charges are minimal, transparent, and posted in our Nakodar office. Every cost â€” application, GAMCA medical, visa stamping, ticket â€” explained upfront before deposit. Follows Indian government regulations. No hidden commissions, no broker fees, no surprise deductions." },
  { q: "Is Shiva Travel a genuine licensed agency?", a: "Yes â€” we hold RA License B-1794/PUN/PER/100/5/10094/2022 from the Ministry of External Affairs, valid through June 2027. E-Migrate registered, ALMRA Punjab member. Verify our license directly on the official eMigrate.gov.in portal â€” unique to our agency." },
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

export default function JalandharPage() {
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
          { name: "Jalandhar", href: "/jalandhar" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Serving Jalandhar & Doaba Since 2002"
          title="Overseas recruitment agency near Jalandhar."
          highlight="near Jalandhar."
          chips={["20 mins from Jalandhar", "Govt-Licensed", "No Hidden Fees", "Local Languages"]}
          description="Shiva Travel & Manpower Consultants is a government-licensed recruitment agency on Jalandhar Road, Nakodar â€” just 20 minutes from Jalandhar city. 5,000+ workers placed from Doaba in Gulf & Europe."
          primaryCta={{ label: "Book Free Consultation", href: "/contactus" }}
          stats={[
            { num: "20 min", label: "From Jalandhar" },
            { num: "5,000+", label: "Doaba Workers Placed" },
            { num: "RA B-1794", label: "MEA Licensed" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel Manpower Consultants office near Jalandhar" }}
          imageSeal={{ title: "Walk-in from Jalandhar City", subtitle: "20 mins drive Â· Nakodar office" }}
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Families from Jalandhar Trust Shiva Travel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Government licensed, transparent charges, and decades of proven results for the Doaba region.
              </p>
            </div>

            <CityTrustGrid
              items={trustReasons}
              image={{
                src: "/shiva-manpower-nakodar-office-punjab.webp",
                alt: "Shiva Travel & Manpower Consultants office near Jalandhar â€” licensed MEA agency RA B-1794",
              }}
              imageCaption="Our Nakodar office â€” 30 minutes from Jalandhar"
            />
          </div>
        </section>

        {/* ===== DESTINATIONS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Jalandhar</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from the Jalandhar-Doaba region.
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

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Common questions from job seekers in the Jalandhar region.
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

        {/* ===== PUNJAB CLUSTER â€” internal linking ===== */}
        <PunjabCluster currentSlug="jalandhar" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Overseas Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar â€” just 20 minutes from Jalandhar city centre.
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
              Government Licensed | RA B-1794 | No Hidden Fees
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
