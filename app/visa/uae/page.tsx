import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "UAE & Dubai Visa Services in Nakodar | Work Permit | Shiva Travel",
  description:
    "Get UAE & Dubai work visa, employment visa, and work permit from Nakodar, Punjab. GAMCA medical, attestation, E-Migrate registration. Government licensed consultant. Visit Shiva Travel & Manpower Consultants.",
  keywords:
    "dubai visa nakodar, UAE work visa Punjab, dubai visa consultant nakodar, UAE work permit from India, dubai employment visa, UAE visa agent nakodar, dubai work permit punjab, GAMCA medical nakodar",
  alternates: {
    canonical: "/visa/uae",
  },
};

const whyUAE = [
  { title: "Tax-Free Income", desc: "The UAE has zero income tax. Every dirham you earn is yours to keep. This means significantly higher take-home pay compared to most other countries." },
  { title: "High Demand for Workers", desc: "Dubai, Abu Dhabi, and other emirates have massive ongoing construction, hospitality, and logistics projects. Thousands of new positions open every month for skilled and semi-skilled workers." },
  { title: "Modern Infrastructure", desc: "The UAE boasts world-class infrastructure — modern housing, excellent public transport, top hospitals, and safe cities. Living conditions for workers have improved dramatically." },
  { title: "Large Indian Community", desc: "Indians make up the largest expat community in the UAE. You'll find Indian restaurants, temples, gurdwaras, grocery stores, and a strong Punjabi community across all emirates." },
  { title: "Direct Flights from Punjab", desc: "Multiple daily direct flights from Amritsar and Chandigarh to Dubai and Abu Dhabi. You can be home in just 3-4 hours. Weekend visits during holidays are easy and affordable." },
  { title: "Career Growth Opportunities", desc: "The UAE rewards hard work. Many workers who started in entry-level positions have grown into supervisory and management roles within a few years." },
];

const visaTypes = [
  { title: "Employment Visa", desc: "The standard work visa sponsored by your UAE employer. Valid for 2-3 years and renewable. Includes residence permit, Emirates ID, and labour card." },
  { title: "Mission Visa", desc: "Short-term work visa for project-based assignments, typically 3-6 months. Ideal for skilled tradespeople needed for specific construction or installation projects." },
  { title: "Visit Visa Conversion", desc: "Already in the UAE on a visit visa? We help convert it to an employment visa without leaving the country, saving you time and airfare." },
  { title: "Green Visa", desc: "Self-sponsored residence visa for skilled workers, freelancers, and investors. Valid for 5 years with more flexibility than traditional employment visas." },
  { title: "Golden Visa", desc: "Long-term residence visa (5-10 years) for specialized talents, investors, and exceptional professionals. Allows sponsorship of family members." },
];

const ourServices = [
  { title: "Complete Visa Processing", desc: "End-to-end handling of your UAE employment visa — from document collection to visa stamping. We coordinate with UAE employers and immigration authorities." },
  { title: "GAMCA Medical Assistance", desc: "We guide you through the mandatory GCC Approved Medical Centres Association (GAMCA) medical examination required for all UAE work visas. We help book appointments and prepare documentation." },
  { title: "Document Attestation", desc: "UAE requires attestation of educational and professional certificates from MEA, state HRD, and UAE Embassy. We handle the entire attestation chain for you." },
  { title: "E-Migrate Registration", desc: "Mandatory registration on the Government of India's E-Migrate portal for all emigration clearance. We complete your registration and ensure compliance." },
  { title: "Job Matching & Placement", desc: "We match your skills and experience with verified UAE employers. Direct interviews with companies in Dubai, Abu Dhabi, Sharjah, and other emirates." },
  { title: "Pre-Departure Briefing", desc: "Comprehensive orientation covering UAE labour laws, your rights as a worker, cultural norms, what to expect on arrival, and emergency contacts." },
];

const visaProcess = [
  { step: "01", title: "Visit Our Nakodar Office", desc: "Come to our Golden Avenue office or call us. We assess your skills, experience, and preferred job type in the UAE." },
  { step: "02", title: "Document Collection & Verification", desc: "We collect your passport, photographs, educational certificates, and experience letters. All documents are verified and prepared for attestation." },
  { step: "03", title: "GAMCA Medical & Attestation", desc: "We schedule your GAMCA medical test and simultaneously process document attestation through MEA and UAE Embassy channels." },
  { step: "04", title: "Job Matching & Employer Coordination", desc: "Your profile is matched with verified UAE employers. You may have a phone or video interview. Once selected, the employer initiates your work permit." },
  { step: "05", title: "Visa Stamping & E-Migrate", desc: "After work permit approval, we complete E-Migrate registration and get your employment visa stamped. Full pre-departure briefing provided." },
  { step: "06", title: "Fly to the UAE", desc: "You depart for the UAE with all documents in order. Your employer arranges airport pickup, accommodation, and onboarding. Welcome to your new career!" },
];

const emirates = [
  { name: "Dubai", desc: "The commercial hub with maximum job opportunities in construction, hospitality, retail, and logistics." },
  { name: "Abu Dhabi", desc: "The capital city with major oil & gas, construction, and government infrastructure projects." },
  { name: "Sharjah", desc: "Growing industrial and manufacturing hub with affordable living, close to Dubai." },
  { name: "Ajman", desc: "Emerging emirate with construction and small business opportunities at lower costs." },
  { name: "Ras Al Khaimah (RAK)", desc: "Industrial free zones with manufacturing, ceramics, and construction projects." },
];

const faqs = [
  { q: "Where can I get a Dubai visa in Nakodar?", a: "Shiva Travel & Manpower Consultants at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar is your trusted Dubai visa consultant. We are government licensed and have placed hundreds of workers in the UAE. Visit us or call +91-9814820432." },
  { q: "How much does a Dubai work visa cost?", a: "Through Shiva Travel & Manpower Consultants, we maintain minimal and transparent charges with no hidden fees. The UAE employer bears most visa and recruitment costs as per regulations. You only need to cover personal expenses like GAMCA medical (approx. Rs. 2,500-3,000) and passport fees if applicable." },
  { q: "What is GAMCA medical for UAE visa?", a: "GAMCA (GCC Approved Medical Centres Association) medical is a mandatory health screening for all workers going to UAE and other Gulf countries. It includes blood tests, chest X-ray, and general physical examination. We help you book and complete this at an approved centre." },
  { q: "How long does UAE visa processing take?", a: "A standard UAE employment visa takes 2-4 weeks after the employer submits the application. The entire process from our office to your departure typically takes 4-8 weeks, depending on document attestation and medical clearance timelines." },
  { q: "Do I need to know English or Arabic for UAE jobs?", a: "Basic English is helpful but not always required for manual and semi-skilled jobs. Many UAE workplaces have Hindi and Punjabi-speaking supervisors. For skilled positions, conversational English is usually expected." },
  { q: "Can I take my family to the UAE?", a: "Yes, once you have a valid employment visa and meet the minimum salary requirement (currently AED 4,000/month or AED 3,000 with accommodation), you can sponsor your spouse and children for a residence visa." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UAE & Dubai Visa Services",
  description: "Complete UAE and Dubai visa processing, work permit, GAMCA medical, attestation, and E-Migrate services from Nakodar, Punjab.",
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
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  serviceType: "Visa & Work Permit Processing",
};

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

export default function UAEVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "UAE Visa", href: "/visa/uae" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#1e40af", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Tax-Free Income &middot; High Demand &middot; Direct Flights
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                UAE &amp; Dubai Visa
                <br />
                <span style={{ color: "#1e40af" }}>Services in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Complete Dubai and UAE work visa processing from Nakodar, Punjab. Employment visa, GAMCA medical, document attestation, E-Migrate registration, and job placement. Government licensed recruitment through Shiva Travel &amp; Manpower Consultants.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Apply Now — Free Consultation
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Tax-Free Salary", "GAMCA Medical Help", "No Hidden Fees"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="UAE Dubai visa services at Shiva Travel Nakodar office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>1000+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />in UAE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "7", label: "Emirates Covered" },
              { value: "1000+", label: "Workers Placed" },
              { value: "0%", label: "Income Tax" },
              { value: "3 hrs", label: "Flight from Punjab" },
              { value: "No", label: "Hidden Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY UAE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose UAE for Your Career
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                The UAE offers tax-free earnings, a massive Indian community, world-class infrastructure, and direct flights from Punjab.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyUAE.map((item) => (
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
                UAE Visa Types We Process
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From standard employment visas to the prestigious Golden Visa — we handle all categories of UAE work and residence permits.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaTypes.map((item, i) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{item.title}</h3>
                  </div>
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
                Our UAE Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Everything you need for your UAE journey — from GAMCA medical to visa stamping — handled by our experienced team in Nakodar.
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
                Your Path to Working in the UAE
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process gets you from our Nakodar office to the UAE in 4-8 weeks. We handle all paperwork including GAMCA medical, attestation, E-Migrate, and visa stamping.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel Nakodar office - UAE visa processing" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
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

        {/* ===== EMIRATES COVERED ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Emirates We Cover
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We place workers across all major emirates in the UAE — from Dubai&apos;s commercial hub to Abu Dhabi&apos;s capital projects.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
              {emirates.map((item) => (
                <div key={item.name} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#1e40af", marginBottom: 8 }}>{item.name}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
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

        <SalaryCalcCTA country="UAE" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Dubai &amp; UAE?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040. Call +91-9814820432 or WhatsApp +91-9815358832. Government licensed. No hidden fees.
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
