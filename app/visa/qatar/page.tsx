import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Qatar Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Get Qatar work visa and work permit through Shiva Travel & Manpower Consultants, Nakodar. GAMCA medical, attestation, and complete visa processing. Licensed recruitment RA B-1794.",
  keywords: [
    "qatar visa nakodar",
    "qatar work visa Punjab",
    "qatar visa consultant nakodar",
    "qatar work permit",
    "qatar jobs from punjab",
  ],
  alternates: { canonical: "/visa/qatar" },
};

const whyQatar = [
  { title: "High Income & Tax-Free Salary", desc: "Qatar offers some of the highest wages in the Gulf region with absolutely zero income tax. Workers can save a significant portion of their earnings and send money home to their families." },
  { title: "Modern Infrastructure", desc: "Qatar boasts world-class infrastructure including the Doha Metro, Hamad International Airport, and ultra-modern cities. Workers enjoy excellent public services, healthcare, and living conditions." },
  { title: "FIFA World Cup Legacy", desc: "The 2022 FIFA World Cup left Qatar with billions of dollars worth of new stadiums, hotels, roads, and facilities. Ongoing maintenance and new projects continue to create strong demand for workers." },
  { title: "Growing & Diversified Economy", desc: "Qatar is actively diversifying beyond oil and gas into tourism, finance, technology, and education. Qatar National Vision 2030 is driving massive investments across all sectors." },
  { title: "Strong Worker Protections", desc: "Qatar has introduced landmark labour reforms including the abolition of the kafala system, a non-discriminatory minimum wage (QAR 1,000), and the Wage Protection System ensuring timely payments." },
  { title: "Large Indian Community", desc: "Over 700,000 Indians live in Qatar, forming the largest expatriate community. You'll find Indian restaurants, cultural centers, schools, and a supportive community network across Doha." },
];

const visaTypes = [
  { title: "Work Visa (Employment Visa)", desc: "Standard employment visa issued with a valid job offer and approved work permit from a Qatari employer. Typically valid for 2 years and renewable. Includes Qatar ID card issuance upon arrival." },
  { title: "Project Visa", desc: "Issued for specific project-based work with a defined duration. Common in construction and infrastructure sectors. The visa is tied to the project timeline and employer." },
  { title: "Visit / Business Visa", desc: "Short-term visa for family visits, business meetings, or tourism. Available as single-entry or multiple-entry. We handle complete application including sponsorship letters." },
];

const ourServices = [
  { title: "Complete Visa Processing", desc: "End-to-end Qatar visa application handling from document collection to embassy submission. We manage the entire paperwork chain so you can focus on preparing for departure." },
  { title: "GAMCA Medical Examination", desc: "We guide you through the mandatory GCC medical test at approved centres. We schedule your appointment and ensure all health requirements are met for Qatar entry." },
  { title: "Document Attestation", desc: "Full attestation services for educational certificates, experience letters, and personal documents. We handle HRD, MEA, and Qatar Embassy attestation processes." },
  { title: "E-Migrate Registration", desc: "Mandatory registration on India's E-Migrate portal for workers travelling to ECR countries. We complete your registration and ensure full compliance with emigration rules." },
  { title: "Contract Verification", desc: "We verify your employment contract terms, salary, benefits, and working conditions before you sign. This protects your rights and ensures transparency." },
  { title: "Pre-Departure Orientation", desc: "Comprehensive briefing covering Qatar labour laws, your employment rights, cultural norms, emergency contacts, and practical tips for settling in Doha." },
];

const visaProcess = [
  { step: "01", title: "Consultation & Profile Review", desc: "Visit our Nakodar office or call us. We review your skills, qualifications, and work experience to match you with the right opportunity in Qatar." },
  { step: "02", title: "Document Collection", desc: "We help prepare your passport, educational certificates, experience letters, and photographs. All documents are verified and organized as per Qatar embassy requirements." },
  { step: "03", title: "GAMCA Medical & Attestation", desc: "We schedule your GAMCA medical examination and handle complete document attestation from HRD, MEA, and Qatar Embassy." },
  { step: "04", title: "Visa Application & E-Migrate", desc: "We submit your visa application to the Qatar embassy and complete your E-Migrate registration. Your employment contract is verified for your protection." },
  { step: "05", title: "Visa Stamping & Briefing", desc: "Once approved, we assist with visa stamping in your passport. A detailed pre-departure briefing covers Qatar laws, culture, and what to expect." },
  { step: "06", title: "Fly to Qatar", desc: "You depart for Doha with all documents in order. Your employer arranges airport pickup and accommodation. Welcome to Qatar!" },
];

const keySectors = [
  { title: "Construction & Infrastructure", roles: ["Mason", "Carpenter", "Steel Fixer", "Electrician", "Plumber", "Painter", "Crane Operator", "Scaffolder"] },
  { title: "Hospitality & Tourism", roles: ["Chef / Cook", "Waiter", "Housekeeping", "Hotel Receptionist", "Kitchen Helper", "Barista", "Room Service"] },
  { title: "Transport & Logistics", roles: ["Heavy Vehicle Driver", "Light Vehicle Driver", "Forklift Operator", "Warehouse Worker", "Delivery Driver"] },
  { title: "Oil & Gas", roles: ["Rigger", "Welder", "Pipe Fitter", "Technician", "Safety Officer", "Scaffolder", "Helper"] },
];

const faqs = [
  { q: "How long does a Qatar work visa take?", a: "The Qatar work visa process typically takes 3-6 weeks from document submission. The entire process including medical, attestation, and E-Migrate takes about 2-3 months. We work to minimize delays at every step." },
  { q: "What is the minimum wage in Qatar?", a: "Qatar has a non-discriminatory minimum wage of QAR 1,000 per month (approximately INR 23,000), plus QAR 500 for food and QAR 300 for accommodation if not provided by the employer. Most skilled workers earn significantly above this." },
  { q: "Is the kafala system still in place?", a: "Qatar abolished the kafala (sponsorship) system in 2020. Workers can now change jobs without employer permission after a notice period, and exit permits are no longer required for most workers." },
  { q: "Do I need to pay recruitment fees?", a: "Shiva Travel & Manpower Consultants operates under government license RA B-1794. We follow all regulations regarding recruitment. Contact our Nakodar office for complete fee transparency." },
  { q: "Can I bring my family to Qatar?", a: "Yes, if you meet the minimum salary threshold (typically QAR 10,000+), you can sponsor your spouse and children on a family visa. We assist with dependent visa applications." },
  { q: "What is the weather like in Qatar?", a: "Qatar has a desert climate with very hot summers (40-50°C from June to September) and mild winters (15-25°C from November to March). All workplaces and accommodations have air conditioning. Outdoor work is restricted during peak summer hours." },
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
  name: "Qatar Visa & Work Permit Services",
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
  areaServed: "Qatar",
  description: "Complete Qatar visa processing, GAMCA medical, document attestation, and E-Migrate registration from Nakodar, Punjab.",
};

export default function QatarVisa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Qatar Visa", href: "/visa/qatar" },
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
                  Tax-Free Income &middot; Modern Infrastructure &middot; High Demand
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Qatar Visa &amp; Work Permit Services
                <br />
                <span style={{ color: "#1e40af" }}>in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Complete Qatar visa processing including work visa, GAMCA medical, document attestation, and E-Migrate registration. Government licensed recruitment through Shiva Travel &amp; Manpower Consultants (RA B-1794).
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
                {["Tax-Free Salary", "FIFA Legacy Jobs", "Licensed Recruitment"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Qatar visa services at Shiva Travel Consultants Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>700+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />in Qatar
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "700+", label: "Workers Placed" },
              { value: "Zero", label: "Income Tax" },
              { value: "700K+", label: "Indians in Qatar" },
              { value: "RA B-1794", label: "Licensed Agency" },
              { value: "QAR 1,000", label: "Minimum Wage" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY QATAR ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Qatar for Work
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Qatar offers high tax-free salaries, world-class infrastructure, strong worker protections, and a thriving Indian community in Doha.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyQatar.map((item) => (
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
                Qatar Visa Types We Process
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We handle all major Qatar visa categories with complete documentation and embassy coordination.
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
                Our Qatar Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From GAMCA medical to contract verification, we handle every step of your Qatar visa journey from our Nakodar office.
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
                How We Get You to Qatar
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from consultation to arrival in Doha. We handle GAMCA medical, attestation, E-Migrate, and contract verification so you can focus on your new career.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Qatar visa processing at Shiva Travel Consultants" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
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
                Key Employment Sectors in Qatar
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Doha, Al Wakrah, Lusail, and other Qatari cities.
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

        <SalaryCalcCTA country="Qatar" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Qatar?
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
