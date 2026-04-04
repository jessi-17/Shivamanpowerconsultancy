import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Bahrain Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Get Bahrain work visa, flexi permit, and work permit through Shiva Travel & Manpower Consultants, Nakodar. GAMCA medical, attestation, and complete visa processing. Licensed recruitment RA B-1794.",
  keywords: [
    "bahrain visa nakodar",
    "bahrain work visa Punjab",
    "bahrain visa consultant",
    "bahrain flexi permit",
    "bahrain work permit punjab",
  ],
  alternates: { canonical: "/visa/bahrain" },
};

const whyBahrain = [
  { title: "Flexible Labour Laws", desc: "Bahrain was the first Gulf country to abolish the kafala system and introduce the Flexi Permit, allowing workers greater mobility and flexibility. The Labour Market Regulatory Authority (LMRA) ensures fair practices." },
  { title: "Growing & Diversified Economy", desc: "Bahrain is actively diversifying beyond oil into finance, tourism, logistics, and manufacturing. The Bahrain Economic Vision 2030 drives investment across sectors, creating consistent demand for workers." },
  { title: "Flexi Permit System", desc: "Bahrain's unique Flexi Permit allows workers to live and work independently without a fixed employer sponsor. This gives you the freedom to work for multiple employers and negotiate your own terms." },
  { title: "Strategic Location", desc: "Connected to Saudi Arabia via the King Fahad Causeway, Bahrain offers easy access to the wider Gulf market. Many workers benefit from weekend trips to Saudi Arabia for shopping and recreation." },
  { title: "Affordable Cost of Living", desc: "Compared to Dubai or Qatar, Bahrain offers a more affordable cost of living with lower rents, food costs, and transportation. This means higher savings potential on similar salaries." },
  { title: "Welcoming Indian Community", desc: "Over 350,000 Indians live in Bahrain, making up the largest expatriate community. You'll find Indian schools, temples, mosques, cultural associations, restaurants, and a strong support network." },
];

const visaTypes = [
  { title: "Work Visa (Employment Visa)", desc: "Standard employment visa issued with a valid job offer from a Bahraini employer. Processed through the LMRA (Labour Market Regulatory Authority). Valid for 2 years and renewable." },
  { title: "Flexi Permit", desc: "Bahrain's unique self-sponsorship work permit allowing you to live and work independently. You can work for any employer without a fixed sponsor. Renewable annually through the LMRA." },
  { title: "Visit / Business Visa", desc: "Short-term visa for family visits, business meetings, or tourism. Bahrain offers e-visa facilities for Indian passport holders, making the process faster and more convenient." },
];

const ourServices = [
  { title: "Complete Visa Processing", desc: "End-to-end Bahrain visa application handling from document preparation to embassy submission. We manage work visa and Flexi Permit applications with complete paperwork assistance." },
  { title: "GAMCA Medical Examination", desc: "We guide you through the mandatory GCC medical test at approved centres. We schedule your appointment and ensure all health requirements are met for Bahrain entry." },
  { title: "Document Attestation", desc: "Full attestation services for educational certificates, experience letters, and personal documents. We handle HRD, MEA, and Bahrain Embassy attestation processes." },
  { title: "E-Migrate Registration", desc: "Mandatory registration on India's E-Migrate portal for workers travelling to ECR countries. We complete your registration and ensure full compliance with Indian emigration requirements." },
  { title: "LMRA Registration", desc: "We assist with your Labour Market Regulatory Authority (LMRA) registration and work permit processing. This is mandatory for all workers in Bahrain." },
  { title: "Pre-Departure Orientation", desc: "Comprehensive briefing covering Bahrain labour laws, your employment rights, cultural norms, emergency contacts, Indian Embassy details, and practical tips for life in Bahrain." },
];

const visaProcess = [
  { step: "01", title: "Consultation & Assessment", desc: "Visit our Nakodar office or call us. We assess your skills, experience, and preferred job type in Bahrain. We advise on the best visa option — work visa or Flexi Permit." },
  { step: "02", title: "Document Preparation", desc: "We help prepare your passport, educational certificates, experience letters, and photographs. All documents are verified and organized as per Bahrain embassy requirements." },
  { step: "03", title: "GAMCA Medical & Attestation", desc: "We schedule your GAMCA medical examination and handle complete document attestation from HRD, MEA, and Bahrain Embassy." },
  { step: "04", title: "Visa Application & E-Migrate", desc: "We submit your visa application and complete your E-Migrate registration. For Flexi Permits, we handle the LMRA application process." },
  { step: "05", title: "Visa Stamping & Briefing", desc: "Once approved, we assist with visa stamping in your passport. A comprehensive pre-departure briefing covers Bahrain laws, culture, and practical information." },
  { step: "06", title: "Fly to Bahrain", desc: "You depart for Bahrain with all documents in order. Your employer arranges airport reception and accommodation (for work visa holders). Welcome to Bahrain!" },
];

const keySectors = [
  { title: "Construction & Infrastructure", roles: ["Mason", "Carpenter", "Steel Fixer", "Electrician", "Plumber", "Painter", "Crane Operator", "Tiler"] },
  { title: "Hospitality & Tourism", roles: ["Chef / Cook", "Waiter", "Housekeeping", "Hotel Staff", "Kitchen Helper", "Barista", "Restaurant Manager"] },
  { title: "Retail & Sales", roles: ["Sales Executive", "Cashier", "Store Helper", "Merchandiser", "Delivery Staff", "Inventory Clerk"] },
  { title: "Manufacturing & Industrial", roles: ["Factory Worker", "Machine Operator", "Welder", "Quality Inspector", "Packaging Worker", "Assembly Worker"] },
];

const faqs = [
  { q: "What is the Bahrain Flexi Permit?", a: "The Flexi Permit is Bahrain's unique self-sponsorship work permit that allows you to live and work in Bahrain without being tied to a single employer. You can work for multiple employers and negotiate your own terms. It costs BHD 500 per year and is renewable." },
  { q: "How long does a Bahrain work visa take?", a: "The Bahrain work visa process typically takes 3-6 weeks from document submission. The entire process including medical, attestation, and E-Migrate takes about 2-3 months. Flexi Permits can be processed faster in some cases." },
  { q: "Is Bahrain expensive to live in?", a: "Bahrain is more affordable than Dubai, Qatar, or Saudi Arabia. Average monthly expenses for a single worker are BHD 100-200 (INR 22,000-44,000) for food and transport. Accommodation is often provided by the employer or available at reasonable rates." },
  { q: "Do I need to pay recruitment fees?", a: "Shiva Travel & Manpower Consultants operates under government license RA B-1794. We follow all regulations regarding recruitment charges. Visit our Nakodar office for complete fee transparency before starting the process." },
  { q: "Can I travel to Saudi Arabia from Bahrain?", a: "Yes, Bahrain is connected to Saudi Arabia via the 25 km King Fahad Causeway. Many workers make weekend trips to Saudi Arabia for shopping and recreation. You'll need a valid visa or permit for Saudi entry." },
  { q: "What is the minimum wage in Bahrain?", a: "Bahrain does not have a universal minimum wage for private sector workers, but wages are regulated through the LMRA. Most skilled workers earn BHD 200-500 per month. The Flexi Permit holder's income depends on the work they secure." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bahrain Visa & Work Permit Services",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
      addressLocality: "Nakodar",
      addressRegion: "Punjab",
      postalCode: "144040",
      addressCountry: "IN",
    },
    telephone: "+91-9814820432",
  },
  areaServed: "Bahrain",
  description: "Complete Bahrain visa processing including work visa, Flexi Permit, GAMCA medical, document attestation, and E-Migrate registration from Nakodar, Punjab.",
};

export default function BahrainVisa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Bahrain Visa", href: "/visa/bahrain" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#1e40af", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Flexi Permit &middot; Growing Economy &middot; Flexible Laws
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Bahrain Visa &amp; Work Permit Services
                <br />
                <span style={{ color: "#1e40af" }}>in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Complete Bahrain visa processing including work visa, Flexi Permit, GAMCA medical, document attestation, and E-Migrate registration. Government licensed recruitment through Shiva Travel &amp; Manpower Consultants (RA B-1794).
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Apply Now
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Flexi Permit", "Affordable Living", "Licensed Recruitment"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Bahrain visa services at Shiva Travel Consultants Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />in Bahrain
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "500+", label: "Workers Placed" },
              { value: "Flexi", label: "Permit Available" },
              { value: "350K+", label: "Indians in Bahrain" },
              { value: "RA B-1794", label: "Licensed Agency" },
              { value: "2030", label: "Economic Vision" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY BAHRAIN ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Bahrain for Work
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Bahrain offers flexible labour laws, the unique Flexi Permit system, affordable living costs, and a welcoming Indian community of over 350,000 people.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyBahrain.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA TYPES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Bahrain Visa Types We Process
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We handle work visas, Flexi Permits, and other Bahrain visa categories with complete documentation and embassy coordination.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaTypes.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Our Bahrain Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From GAMCA medical to LMRA registration, we handle every step of your Bahrain visa journey from our Nakodar office.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {ourServices.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                How We Get You to Bahrain
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from consultation to arrival in Bahrain. We handle GAMCA medical, attestation, E-Migrate, and LMRA registration for both work visas and Flexi Permits.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Bahrain visa processing at Shiva Travel Consultants" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {visaProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#1e40af", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
                    <div style={{ paddingTop: 4 }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 4 }}>{item.title}</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== KEY SECTORS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Key Employment Sectors in Bahrain
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Manama, Muharraq, Riffa, and other Bahraini cities.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {keySectors.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>{cat.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.roles.map((role) => (
                      <span key={role} style={{ fontFamily: "var(--font-body)", fontSize: 13, padding: "5px 14px", borderRadius: 20, backgroundColor: "#f8f9ff", color: "#43474d", border: "1px solid #e5e7eb" }}>{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 48 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SalaryCalcCTA country="Bahrain" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Bahrain?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040 or call us today. Government licensed recruitment (RA B-1794).
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e40af", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
