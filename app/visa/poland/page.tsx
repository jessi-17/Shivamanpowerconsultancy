import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Poland Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Apply for Poland visa & work permit from Nakodar, Punjab. Type A work permit, seasonal permits, Schengen access. Government licensed consultant. No hidden fees. Shiva Travel & Manpower Consultants.",
  keywords:
    "poland visa in nakodar, poland work permit Punjab, poland visa consultant nakodar, poland work visa from India, poland work permit agent nakodar, poland visa Punjab, poland job visa nakodar",
  alternates: {
    canonical: "/visa/poland",
  },
};

const whyPoland = [
  { title: "EU Member & Schengen Access", desc: "Poland is a full EU member and part of the Schengen zone. Your Polish work permit allows visa-free travel across 27 European countries during holidays and weekends." },
  { title: "Highest Demand for Indian Workers", desc: "Poland has the highest number of work permits issued to Indian nationals in recent years. Construction, manufacturing, logistics, and agriculture sectors are actively recruiting from India." },
  { title: "Path to Permanent Residency", desc: "After 5 years of continuous legal work in Poland, you can apply for a permanent residence permit (Karta Stalego Pobytu). This gives you the right to live and work anywhere in the EU." },
  { title: "Good Salary in EUR", desc: "Poland offers competitive salaries paid in Polish Zloty (PLN), easily convertible to EUR and INR. The minimum wage is among the fastest-growing in the EU, ensuring fair pay." },
  { title: "Large Indian Community", desc: "Poland has a rapidly growing Indian community, especially in Warsaw, Wroclaw, and Krakow. You will find Indian grocery stores, restaurants, and community groups to feel at home." },
  { title: "Strong & Growing Economy", desc: "Poland has the 6th largest economy in the EU with consistent GDP growth. The country's infrastructure, healthcare, and public transport are modern and well-developed." },
];

const visaServices = [
  { title: "Work Permit Type A", desc: "The most common work permit for Indian workers. Valid for up to 3 years, tied to a specific employer. We handle the full application from Nakodar including employer coordination in Poland." },
  { title: "Seasonal Work Permit", desc: "For agriculture, hospitality, and food processing jobs lasting up to 9 months. Faster processing and ideal for workers who want to start earning in Poland quickly." },
  { title: "Document Attestation", desc: "We assist with attestation and apostille of all required documents including educational certificates, experience letters, and police clearance certificates from Nakodar." },
  { title: "Embassy Coordination", desc: "We prepare your complete visa file and coordinate with the Polish Embassy in New Delhi for timely appointment booking and visa stamping." },
  { title: "E-Migrate Registration", desc: "Full assistance with E-Migrate portal registration, which is mandatory for Indian workers going abroad. We complete the entire process at our Nakodar office." },
  { title: "Pre-Departure Briefing", desc: "Before you fly, we conduct a detailed briefing covering Polish labour laws, your rights as a worker, weather preparation, cultural tips, and emergency contacts." },
];

const visaRequirements = [
  "Valid passport with minimum 6 months validity beyond intended stay",
  "Recent passport-sized photographs (biometric, white background)",
  "Medical fitness certificate from an approved panel physician",
  "Relevant work experience certificates (attested)",
  "Educational documents (10th, 12th, ITI/diploma if applicable)",
  "Police clearance certificate (PCC) from local authorities",
];

const visaProcess = [
  { step: "01", title: "Visit Our Nakodar Office", desc: "Walk in to our office at Golden Avenue, Nakodar or call us. We assess your profile, skills, work experience, and preferred job type in Poland.", timeline: "Day 1" },
  { step: "02", title: "Document Collection & Preparation", desc: "We collect and verify your passport, educational certificates, experience letters, and medical reports. We handle attestation and translations if needed.", timeline: "Week 1-2" },
  { step: "03", title: "Employer Matching & Work Permit Filing", desc: "We connect you with verified Polish employers. The employer files the work permit application (Zezwolenie na prace) with the Voivode office in Poland.", timeline: "Week 3-4" },
  { step: "04", title: "Work Permit Approval", desc: "The Polish Voivode (provincial authority) processes and approves the work permit. Processing time varies by region — typically 4-8 weeks.", timeline: "Week 5-10" },
  { step: "05", title: "Visa Stamping at Embassy", desc: "Once the work permit is approved, we prepare your visa file and assist with appointment booking at the Polish Embassy in New Delhi for visa stamping.", timeline: "Week 10-12" },
  { step: "06", title: "Pre-Departure & Fly to Poland", desc: "We conduct a pre-departure briefing, assist with E-Migrate, and help with flight booking. Your employer arranges airport pickup and accommodation in Poland.", timeline: "Week 12-14" },
];

const permitTypes = [
  { title: "Type A — General Work Permit", desc: "The standard work permit for foreign nationals employed by a Polish company. Valid for up to 3 years, renewable. This is the most common permit for Indian workers in construction, manufacturing, and logistics.", tag: "Most Common" },
  { title: "Type B — Board Member Permit", desc: "For foreign nationals serving on the management board or as partners in a Polish company. Valid for up to 5 years. Required when the stay exceeds 6 months in a 12-month period.", tag: "Management" },
  { title: "Seasonal Work Permit", desc: "Allows work in agriculture, hospitality, and food processing for up to 9 months within a calendar year. Faster processing time and lower requirements. Ideal for first-time workers.", tag: "Agriculture & Hospitality" },
  { title: "Oswiadczenie (Employer Declaration)", desc: "A simplified procedure where the Polish employer registers a declaration at the local labour office. Allows work for up to 24 months. Faster than Type A and popular with many employers.", tag: "Simplified Process" },
];

const faqs = [
  { q: "Where to apply for Poland visa in Nakodar?", a: "Visit Shiva Travel & Manpower Consultants at Golden Avenue, Nakodar, Punjab. We are a government-licensed recruitment agency specializing in Poland work permits. Walk in or call +91 98148-20432 for a free consultation." },
  { q: "How long does Poland work visa take from India?", a: "The entire process from application to departure typically takes 2-3 months. Work permit approval takes 4-8 weeks depending on the Polish Voivode office, followed by 1-2 weeks for visa stamping at the embassy." },
  { q: "Is Poland visa easy to get?", a: "Poland is one of the most accessible European work visa destinations for Indian workers. The approval rates are high when you apply through a licensed consultant with proper documentation. We ensure your application is complete and error-free." },
  { q: "What is the salary in Poland for Indian workers?", a: "The minimum gross salary in Poland is approximately PLN 4,300/month (around EUR 1,000 or INR 92,000). Skilled workers in construction and welding can earn PLN 5,500-8,000/month. Accommodation is usually provided by the employer." },
  { q: "Do I need to know Polish language?", a: "Not for most manual and factory jobs. Employers provide on-site training and many workplaces have multilingual supervisors. However, learning basic Polish phrases helps with daily life. We provide a basic language guide during pre-departure briefing." },
  { q: "Can I bring my family to Poland?", a: "Yes. After you receive your residence card (Karta Pobytu) in Poland, you can apply for family reunification. Your spouse and children under 18 can join you with a dependent visa. They may also be eligible to work in Poland." },
  { q: "What types of jobs are available in Poland for Indians?", a: "Poland has high demand for construction workers, welders, factory operators, warehouse staff, truck drivers, farm workers, and food processing workers. We match your skills to the right employer in Poland." },
  { q: "Is there any fee to apply through Shiva Travel Consultants?", a: "We maintain minimal and transparent charges with no hidden fees. The Polish employer bears most recruitment and work permit costs as per Indian government regulations." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Poland Visa & Work Permit Services",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Avenue",
      addressLocality: "Nakodar",
      addressRegion: "Punjab",
      postalCode: "144040",
      addressCountry: "IN",
    },
    telephone: "+919814820432",
  },
  areaServed: {
    "@type": "Place",
    name: "Nakodar, Punjab, India",
  },
  description:
    "Government-licensed Poland visa and work permit services from Nakodar, Punjab. Type A work permits, seasonal permits, document attestation, embassy coordination, and E-Migrate assistance. No hidden fees.",
  serviceType: "Immigration Consulting",
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

export default function PolandVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Poland Visa", href: "/visa/poland" },
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
                  EU Member &middot; Schengen Zone &middot; High Demand for Indians
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Poland Visa & Work Permit
                <br />
                <span style={{ color: "#1e40af" }}>Services in Nakodar</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Government-licensed Poland visa and work permit services from Nakodar, Punjab. We handle Type A work permits, seasonal permits, document attestation, embassy coordination, and complete E-Migrate assistance. Minimal and transparent charges, no hidden fees.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Apply Now — It&apos;s Free
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["EU Work Permit", "Schengen Travel", "No Hidden Fees"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Poland visa and work permit services at Shiva Travel Consultants Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>2-3</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Months Total<br />Processing Time
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "EU", label: "Schengen Member" },
              { value: "2-3", label: "Months Processing" },
              { value: "27", label: "Countries Access" },
              { value: "PLN 4,300+", label: "Monthly Minimum Wage" },
              { value: "No", label: "Hidden Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY POLAND ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Poland for Work?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Poland is the top European destination for Indian workers — with EU membership, Schengen access, high demand, and a clear path to permanent residency.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyPoland.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR VISA SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Our Visa Services for Poland
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                End-to-end Poland visa and work permit assistance from our Nakodar office — from documentation to departure.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {visaServices.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA REQUIREMENTS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Poland Visa Requirements
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                These are the essential documents you need for a Poland work visa application. Our team at Nakodar will guide you through every document and ensure your file is complete before submission.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#1e40af", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Document Help</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#fff" }}>We Handle Everything</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Attestation, translation & embassy coordination included</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                {visaRequirements.map((req, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 24px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < visaRequirements.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, backgroundColor: "#eff4ff", color: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700 }}>{i + 1}</div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30", lineHeight: 1.6, paddingTop: 4 }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS TIMELINE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Poland Visa Process &amp; Timeline
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from your first visit to our Nakodar office to landing in Poland in about 2-3 months. We handle all paperwork, employer coordination, and embassy procedures.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel Consultants Nakodar office — Poland visa processing" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {visaProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#1e40af", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
                    <div style={{ paddingTop: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{item.title}</h3>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#1e40af", backgroundColor: "#eff4ff", padding: "2px 10px", borderRadius: 12 }}>{item.timeline}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TYPES OF WORK PERMITS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Types of Poland Work Permits
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Poland offers several work permit categories. We help you choose the right type based on your skills, job offer, and long-term goals.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 20 }}>
              {permitTypes.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", position: "relative" }}>
                  <span style={{ display: "inline-block", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#1e40af", backgroundColor: "#eff4ff", padding: "4px 12px", borderRadius: 12, marginBottom: 14, letterSpacing: "0.03em" }}>{item.tag}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ZERO FEES ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
              Minimal & Transparent Charges
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto", marginBottom: 28 }}>
              As per Indian government regulations, we maintain minimal and transparent charges with no hidden fees. The Polish employer bears most costs including work permit fees and processing expenses. Your only costs are passport, medical, and travel.
            </p>
            <div style={{ display: "inline-flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
              {["Work Permit Fee — Employer Pays", "Recruitment Fee — Minimal", "Visa Fee — Employer Pays"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 48 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>{faq.q}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SalaryCalcCTA country="Poland" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Apply for Your<br />Poland Work Visa?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Nakodar or call us today. Free consultation. No hidden fees. Government licensed recruitment. EU work permit with Schengen access.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e40af", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Contact Us
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>+91 98148-20432</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Golden Avenue, Nakodar, Punjab</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
