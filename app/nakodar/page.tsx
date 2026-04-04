import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Immigration Office in Nakodar | Visa Consultant | Shiva Travel & Manpower Consultants",
  description:
    "Shiva Travel & Manpower Consultants — the #1 immigration office in Nakodar. Government licensed (RA B-1794), 25+ years experience. Romania visa, Schengen visa, Poland visa, UAE visa, work permits & overseas recruitment from Nakodar, Punjab. Zero candidate fees.",
  keywords: [
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
  "@type": ["LocalBusiness", "EmploymentAgency"],
  name: "Shiva Travel & Manpower Consultants",
  description:
    "Government licensed immigration office and overseas recruitment agency in Nakodar, Punjab. Specializing in Romania, Schengen, Poland, UAE, Croatia, Saudi Arabia & Qatar visas since 1998.",
  url: "https://shivatravelconsultant.in/nakodar",
  telephone: "+91-9814820432",
  image: "https://shivatravelconsultant.in/Professional Punjab office environment.webp",
  priceRange: "Free (Zero Candidate Fees)",
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
    closes: "18:00",
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
  { value: "25+", label: "Years in Nakodar" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "Zero", label: "Fees Charged" },
];

const testimonials = [
  { name: "Harpreet Singh", location: "Nakodar", text: "I got my Romania work visa through Shiva Travel right here in Nakodar. The entire process was smooth and transparent. They guided me from documentation to departure. Best immigration office in Nakodar." },
  { name: "Rajinder Kumar", location: "Nakodar", text: "My brother and I both went to Dubai through Shiva Travel. Being a local Nakodar office, we could visit anytime for updates. Highly trustworthy and professional team." },
  { name: "Sukhwinder Kaur", location: "Nakodar", text: "My husband got placed in Saudi Arabia with zero fees. We were worried about agents, but Shiva Travel is government licensed and right here in our city. No need to go to Jalandhar for anything." },
];

const trustReasons = [
  { title: "Government Licensed Office in Nakodar", desc: "RA License B-1794 issued by Ministry of External Affairs. E-Migrate registered. ALMRA Punjab member. The only fully licensed immigration office in Nakodar." },
  { title: "Zero Candidate Fees", desc: "We never charge candidates. All costs are borne by the hiring employers. 100% transparent process as per Indian government regulations." },
  { title: "25+ Years Serving Nakodar", desc: "Founded in 1998, Shiva Travel has been the trusted name in Nakodar for overseas recruitment for over two decades. Our roots are here." },
  { title: "Walk-In Office in Nakodar City", desc: "No need to travel to Jalandhar or Ludhiana. Visit our office at Golden Avenue, Jalandhar Road, Nakodar. Walk-in consultations Monday to Saturday, 9am-6pm." },
  { title: "Direct Employer Connections", desc: "We work directly with 500+ employers across UAE, Saudi Arabia, Qatar, Poland, Romania, Croatia — no middlemen, no sub-agents." },
  { title: "Complete Visa & Immigration Support", desc: "From skill testing to visa stamping to airport send-off. We handle documentation, medical, insurance, and everything in between." },
];

const faqs = [
  { q: "Where is the best immigration office in Nakodar?", a: "Shiva Travel & Manpower Consultants is the leading government-licensed immigration office in Nakodar, located at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar 144040. We have been serving the community for over 25 years with RA License B-1794." },
  { q: "Can I get a Romania visa from Nakodar?", a: "Yes. Shiva Travel & Manpower Consultants in Nakodar specializes in Romania work visas. We have direct tie-ups with Romanian employers for construction, manufacturing, and industrial jobs. Visit our Nakodar office for a free consultation." },
  { q: "Is there a Schengen visa consultant in Nakodar?", a: "Yes. Our Nakodar office provides complete Schengen visa assistance including documentation, appointment booking, and interview preparation for all 27 Schengen countries." },
  { q: "Do I need to pay fees for overseas recruitment in Nakodar?", a: "No. Shiva Travel charges zero fees from candidates. All recruitment costs are borne by the hiring employers as per Indian government regulations. We are 100% transparent." },
  { q: "Which countries can I get a work visa for from Nakodar?", a: "From our Nakodar office, we process work visas for 20+ countries including Romania, Poland, Croatia, UAE (Dubai), Saudi Arabia, Qatar, Kuwait, Bahrain, and other European and Gulf nations." },
  { q: "What is the phone number of Shiva Travel in Nakodar?", a: "You can call us at +91-9814820432 or WhatsApp us at +91-9815358832. Our Nakodar office is open Monday to Saturday, 9am to 6pm for walk-in consultations." },
  { q: "How long does the Poland visa process take from Nakodar?", a: "The Poland work visa process typically takes 45-60 days from application to departure. We handle everything from our Nakodar office — documentation, skill testing, visa stamping, and travel arrangements." },
  { q: "Is Shiva Travel & Manpower Consultants a genuine agency?", a: "Absolutely. We hold RA License B-1794 from the Ministry of External Affairs, Government of India. We are E-Migrate registered and a member of ALMRA Punjab. Our Nakodar office has been operational for over 25 years." },
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
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {/* Left — Text */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Nakodar&apos;s #1 Immigration Office Since 1998
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Immigration Office &
                <br />
                Visa Consultant
                <br />
                <span style={{ color: "#0052dc" }}>in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Shiva Travel & Manpower Consultants is Nakodar&apos;s leading government-licensed immigration office and visa consultancy. Based right here in Nakodar since 1998, we have placed 5,000+ workers from Punjab in premium jobs across the Gulf & Europe. Romania visa, Schengen visa, Poland visa, UAE visa — all processed from our Nakodar office.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Book Free Consultation
                </Link>
                <Link href="/current-demands" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  View Current Openings
                </Link>
              </div>

              {/* Badges */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Government Licensed", "Zero Fees", "25+ Years in Nakodar"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image with overlay stat */}
            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel & Manpower Consultants immigration office in Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>5,000+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />From Nakodar
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "60px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
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
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Nakodar Trusts Shiva Travel & Manpower Consultants</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The only government-licensed immigration office based in Nakodar with 25+ years of proven results.
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

        {/* ===== TESTIMONIALS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>What Nakodar Families Say About Us</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Real stories from Nakodar families who trusted us with their overseas careers.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {testimonials.map((t) => (
                <div key={t.name} style={{ padding: 32, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 20 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                    {t.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              Walk-in consultations available Monday to Saturday, 9am to 6pm. No appointment needed.
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
