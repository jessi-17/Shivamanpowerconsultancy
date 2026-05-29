import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import PunjabCluster from "@/components/own/PunjabCluster";
import Testimonials from "@/components/own/Testimonials";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: { absolute: "Best Travel Agent & Immigration Office in Nakodar | Since 2002" },
  description:
    "Best travel agent & immigration office in Nakodar — govt-licensed (RA B-1794), 20+ years. Romania, Schengen, Poland, UAE, Croatia, Saudi & Qatar visas, work permits & overseas recruitment from Nakodar, Punjab.",
  keywords: [
    "travel agent in nakodar",
    "travel agent nakodar",
    "immigration office in nakodar",
    "visa consultant nakodar",
    "romania visa nakodar",
    "schengen visa nakodar",
    "poland visa nakodar",
    "work permit nakodar",
    "overseas recruitment nakodar",
    "travel agency nakodar",
    "manpower consultancy nakodar",
    "uae visa nakodar",
    "croatia visa nakodar",
    "saudi arabia visa nakodar",
    "qatar visa nakodar",
    "immigration consultant nakodar punjab",
  ],
  alternates: {
    canonical: "/nakodar",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency", "EmploymentAgency"],
  name: "Shiva Travel & Manpower Consultants",
  description:
    "Government licensed immigration office and overseas recruitment agency in Nakodar, Punjab. Specializing in Romania, Schengen, Poland, UAE, Croatia, Saudi Arabia & Qatar visas since 2002.",
  url: "https://shivatravelconsultant.in/nakodar",
  telephone: "+91-9814820432",
  image: "https://shivatravelconsultant.in/shiva-manpower-nakodar-office-punjab.webp",
  priceRange: "Affordable (Minimal & Transparent Charges)",
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
  areaServed: [
    { "@type": "City", name: "Nakodar" },
    { "@type": "City", name: "Jalandhar" },
    { "@type": "City", name: "Kapurthala" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:30",
  },
  sameAs: [
    "https://shivatravelconsultant.in",
  ],
};

const visaServices = [
  { country: "Romania Visa", desc: "Work permits for construction, manufacturing & industrial jobs in Romania. Fast processing with direct employer tie-ups.", href: "/visa/romania" },
  { country: "Schengen Visa", desc: "Tourist, business & work visas for 27 Schengen countries. Expert documentation assistance from Nakodar.", href: "/visa/schengen" },
  { country: "Poland Visa", desc: "Factory, food processing, packaging & agriculture jobs in Poland. High demand for workers from Punjab.", href: "/visa/poland" },
  { country: "UAE Visa", desc: "Dubai, Abu Dhabi & Sharjah work visas. Construction, hospitality, driving & factory positions available.", href: "/visa/uae" },
  { country: "Croatia Visa", desc: "Skilled & semi-skilled worker visas for Croatia. Growing demand for Indian workers in construction & tourism.", href: "/visa/croatia" },
  { country: "Saudi Arabia Visa", desc: "NEOM projects, oil & gas, welding, electrical & construction jobs. Largest employer of Indian workers abroad.", href: "/visa/saudi-arabia" },
  { country: "Qatar Visa", desc: "Construction, transport, maintenance & hospitality positions. Premium Gulf jobs with top employers.", href: "/visa/qatar" },
];

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM Projects, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta — Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "20+", label: "Years in Nakodar" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "100%", label: "Transparent Fees" },
];

const trustReasons = [
  { title: "Walk-in Office on Your Doorstep", desc: "Golden Avenue, Jalandhar Road — within 5“10 minutes of most Nakodar mohallas. 1 km from Nakodar Bus Stand, 2 km from Nakodar Railway Station. Your hometown RA agency — no need to travel to Jalandhar or Chandigarh." },
  { title: "Only Govt-Licensed RA Inside Nakodar City", desc: "Other agents you may see in Nakodar are unlicensed sub-agents who refer your case to bigger agencies in Jalandhar/Chandigarh — adding hidden commission. We are the only MEA-licensed (RA B-1794) agency physically operating from inside Nakodar." },
  { title: "Walk-In Without Appointment", desc: "Bring your family, parents, friends — no need to call ahead. Sit with our team 30“45 minutes, ask everything, no commitment. Open Mon“Sat 9 AM“6:30 PM even during peak season." },
  { title: "24 Years of Nakodar Reputation", desc: "Tarsem Lal sir founded Shiva Travel in Nakodar in 2002. Almost every Nakodar family has visited our office, or knows a worker we've placed abroad. Local accountability — we live and work in this same neighbourhood." },
  { title: "Direct Employer Contact — No Middlemen", desc: "From our Nakodar office we directly call employers in UAE, Saudi, Qatar, Poland, Romania, Croatia. No middleman agent, no sub-agent commission, no false promises that other Nakodar agents make. Direct contracts, direct visa stamping." },
  { title: "Honest Free Consultation", desc: "Bring just an ID and any work certificate. We assess your profile in 30“45 minutes for free. If you genuinely qualify for an opening, we explain the next steps. If not, we tell you straight — no false hopes, no deposit pressure." },
];

const faqs = [
  { q: "Where exactly is your Nakodar office located?", a: "Shiva Travel & Manpower Consultants is at Golden Avenue, near Sukhjeet Hospital, Jalandhar Road, Nakodar — PIN 144040. We are 1 km from Nakodar Bus Stand (5 minutes walk) and 2 km from Nakodar Railway Station. Look for the blue Shiva Travel signboard." },
  { q: "Can I walk in without an appointment from Nakodar?", a: "Yes — most of our Nakodar visitors are walk-ins. Open Monday to Saturday, 9 AM to 6:30 PM. The least busy times are 10 AM“12 PM and 3 PM“5 PM. Bring your family, friends, or anyone you want to consult with. No appointment, no charges for first consultation." },
  { q: "Is Shiva Travel the only government-licensed agency in Nakodar?", a: "Yes — we are the only MEA-licensed Recruiting Agent (RA B-1794) physically operating from Nakodar city. There are unlicensed Nakodar agents who advertise overseas jobs but actually sub-agent through bigger Jalandhar/Chandigarh agencies, adding hidden commission. We deal directly with employers, fully licensed, fully transparent. Verify at emigrate.gov.in." },
  { q: "Can I get a Romania, Poland or Schengen visa from your Nakodar office?", a: "Yes. We process Romania, Poland, Croatia, Schengen and all major European work visas entirely from our Nakodar office — including documentation, skill testing, embassy appointments. No need to travel to Delhi or Chandigarh for European visa processing." },
  { q: "What are the fees for overseas recruitment from Nakodar?", a: "Service charges are written on a notice board in our Nakodar office. Every cost — application, GAMCA medical, visa, ticket — is explained upfront before any deposit. Charges follow Indian government regulations. No surprise deductions, no hidden commissions." },
  { q: "How do I contact Shiva Travel in Nakodar?", a: "Call +91 98148-20432 or WhatsApp +91 98153-58832. Our Nakodar office on Golden Avenue is open Mon“Sat 9 AM“6:30 PM for walk-in consultations. You can also email us at info@shivatravelconsultant.in." },
  { q: "How long does the visa process take from Nakodar?", a: "Gulf countries (UAE, Saudi, Qatar, Kuwait): 30“60 days. Europe (Poland 75 days, Romania 90 days, Croatia 90 days). We track every case from our Nakodar office and update you on WhatsApp at each stage." },
  { q: "Is Shiva Travel & Manpower Consultants a genuine agency in Nakodar?", a: "Yes — we hold RA License B-1794/PUN/PER/100/5/10094/2022 from the Ministry of External Affairs, valid through June 2027. We are E-Migrate registered, ALMRA Punjab members, and operating from Nakodar since 2002. Verify our license on the official eMigrate.gov.in portal." },
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

export default function NakodarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Nakodar", href: "/nakodar" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Nakodar's #1 Travel Agent & Immigration Office Since 2002"
          title="Travel agent & immigration office in Nakodar."
          highlight="in Nakodar."
          chips={["Headquartered Here", "Govt-Licensed", "Walk-In Welcome", "20+ Years"]}
          description="The most trusted travel agent in Nakodar and govt-licensed immigration office. Based right here on Jalandhar Road since 2002. Romania, Schengen, Poland, UAE — every visa processed from our Nakodar office."
          primaryCta={{ label: "Book Free Consultation", href: "/contactus" }}
          stats={[
            { num: "HQ", label: "Right in Nakodar" },
            { num: "5,000+", label: "Placed from Here" },
            { num: "20+", label: "Years on Jalandhar Rd" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel & Manpower Consultants immigration office in Nakodar" }}
          imageSeal={{ title: "Headquartered in Nakodar", subtitle: "Jalandhar Rd Â· Walk-in Welcome Â· Since 2002" }}
          microChip={{ value: "HQ", label: "Nakodar" }}
        />

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "60px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 64, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#001f5d", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== VISA & IMMIGRATION SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Visa & Immigration Services in Nakodar</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We process work visas, tourist visas, and immigration paperwork for 20+ countries — all from our Nakodar office. No need to travel to Jalandhar or Chandigarh.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {visaServices.map((v) => (
                <Link key={v.country} href={v.href} style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none", transition: "box-shadow 0.2s" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>
                    {v.country}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.6, marginBottom: 16 }}>
                    {v.desc}
                  </p>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc" }}>
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY NAKODAR TRUSTS US ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Nakodar Trusts Shiva Travel & Manpower Consultants</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The only government-licensed immigration office based in Nakodar with 20+ years of proven results.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {trustReasons.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OVERSEAS JOBS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Nakodar</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from Nakodar and the Doaba region.
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions — Nakodar Office</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Common questions from job seekers and visa applicants in Nakodar.
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
        <PunjabCluster currentSlug="nakodar" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Visit Nakodar&apos;s #1<br />Immigration Office Today
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Walk-in consultations available Monday to Saturday, 9am to 6:30pm. No appointment needed.
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
