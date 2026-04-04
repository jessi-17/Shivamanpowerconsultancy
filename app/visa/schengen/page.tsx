import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Schengen Visa Services in Nakodar | Europe Work Visa | Shiva Travel & Manpower Consultants",
  description:
    "Apply for Schengen visa from Nakodar, Punjab. Work visa for 27 European countries — Poland, Romania, Croatia, Malta, Hungary, Czech Republic. Government licensed consultant. Zero fees. Visit Shiva Travel & Manpower Consultants office in Nakodar.",
  keywords: [
    "schengen visa nakodar",
    "schengen visa consultant nakodar",
    "europe work visa Punjab",
    "schengen visa office nakodar",
    "schengen work permit",
    "europe visa from India",
    "schengen visa agent nakodar",
  ],
  alternates: {
    canonical: "/visa/schengen",
  },
};

const countries = [
  { name: "Poland", flag: "🇵🇱", desc: "Highest demand for Indian workers — construction, manufacturing, and agriculture jobs with excellent pay. Poland is the top destination for Punjabi workers in Europe.", href: "/visa/poland" },
  { name: "Romania", flag: "🇷🇴", desc: "EU member with Schengen access and the lowest cost of living in Europe. Factory, farm, and construction work with employer-provided accommodation.", href: "/visa/romania" },
  { name: "Croatia", flag: "🇭🇷", desc: "Newest Schengen member with growing demand for skilled and semi-skilled workers in tourism, construction, and shipbuilding industries.", href: "/visa/croatia" },
  { name: "Malta", flag: "🇲🇹", desc: "English-speaking EU island nation with strong demand in hospitality, healthcare, and manufacturing sectors. Great climate year-round.", href: "/visa/malta" },
  { name: "Hungary", flag: "🇭🇺", desc: "Central European hub with booming automotive and electronics manufacturing. Affordable living and growing Indian community in Budapest.", href: "/visa/hungary" },
  { name: "Czech Republic", flag: "🇨🇿", desc: "One of Europe's lowest unemployment rates means high demand for foreign workers in engineering, automotive, and food processing industries.", href: "/visa/czech-republic" },
];

const visaProcess = [
  { step: "01", title: "Consultation at Nakodar Office", desc: "Visit our office at Golden Avenue, Nakodar or call us. We assess your profile, discuss your preferred European destination, and explain the complete Schengen visa process." },
  { step: "02", title: "Document Preparation", desc: "We help you compile and verify all required documents — passport, photographs, educational certificates, work experience proof, medical reports, and financial statements." },
  { step: "03", title: "Job Matching with European Employers", desc: "Our network of verified employers across 27 Schengen countries is matched to your skills and experience. You may have a video interview or direct selection by the employer." },
  { step: "04", title: "Work Permit Application", desc: "The European employer files for your work authorization with their country's immigration authority. Processing typically takes 4-10 weeks depending on the country." },
  { step: "05", title: "Visa Stamping", desc: "Once the work permit is approved, we guide you through visa stamping at the respective embassy. We prepare you with a pre-departure briefing on labour laws and your rights." },
  { step: "06", title: "Departure to Europe", desc: "You fly to your destination country with a valid work visa. The employer arranges airport pickup and accommodation. You're now part of the Schengen zone — welcome to Europe!" },
];

const requirements = [
  "Valid passport with at least 12 months validity",
  "Passport-size photographs (white background, recent)",
  "Educational certificates and mark sheets",
  "Work experience certificates (if applicable)",
  "Medical fitness certificate from approved panel doctor",
  "Police clearance certificate (PCC)",
  "Bank statements (last 6 months)",
  "Aadhar card and PAN card copies",
  "Employment contract or job offer letter from European employer",
  "Completed visa application form",
];

const trustFactors = [
  { title: "Government Licensed", desc: "Registered with the Ministry of External Affairs, Government of India. License verified and renewed regularly. Fully compliant with all emigration regulations.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "25+ Years Experience", desc: "Established in 1999, we have over two decades of experience sending workers to Europe, the Gulf, and beyond. Thousands of successful placements from Punjab.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Zero Candidate Fees", desc: "We charge absolutely no recruitment fees from candidates. All costs including work permit and recruitment charges are borne by the employer as per international regulations.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Nakodar Office", desc: "Walk in to our office at Golden Avenue, Jalandhar Road, Nakodar, Punjab. Face-to-face consultation, document verification, and complete visa assistance — all under one roof.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
];

const faqs = [
  { q: "Where can I apply for Schengen visa in Nakodar?", a: "You can apply at Shiva Travel & Manpower Consultants, Golden Avenue, Jalandhar Road, Nakodar. We are a government-licensed recruitment agency providing Schengen work visa services for all 27 European countries. Walk in or call +91 98148-20432 for an appointment." },
  { q: "How much does Schengen visa cost from Nakodar?", a: "Through Shiva Travel & Manpower Consultants, candidates pay zero recruitment fees. The employer bears all work permit and recruitment costs. You only pay for standard government charges like passport, medical test, and police clearance — which are minimal." },
  { q: "Can I get a Schengen work visa from Punjab?", a: "Yes. Our Nakodar office processes Schengen work visas for candidates across Punjab. We handle everything from document preparation to embassy appointments. Thousands of workers from Jalandhar, Nakodar, Kapurthala, and surrounding areas have gone to Europe through us." },
  { q: "Which European countries can I work in with Schengen visa?", a: "A Schengen work visa is issued by a specific country (e.g., Poland, Romania, Croatia) but allows you to travel across all 27 Schengen countries. You must work in the country that issued your permit, but you can visit other Schengen nations during holidays." },
  { q: "How long does Schengen visa processing take?", a: "The complete process from initial consultation to departure typically takes 3-5 months. Work permit processing alone takes 4-10 weeks depending on the destination country. Poland and Romania tend to be faster. We keep you updated at every stage." },
  { q: "Is Shiva Travel authorized for Schengen visa processing?", a: "Yes. Shiva Travel & Manpower Consultants is licensed by the Ministry of External Affairs, Government of India (License No. verified). We have been sending workers to Europe since 1999 and have a proven track record of successful placements across Schengen countries." },
  { q: "What jobs are available in Europe through Schengen visa?", a: "We recruit for construction, manufacturing, agriculture, food processing, hospitality, warehousing, and transport sectors. Common roles include factory worker, welder, mason, carpenter, farm worker, truck driver, and hotel staff. Salaries range from €700 to €1,600/month." },
  { q: "Do I need to know a European language for Schengen work visa?", a: "Not for most manual and factory jobs. Employers provide on-site training and many workplaces have multilingual supervisors. However, learning basic phrases of the local language helps in daily life. We can guide you on language resources before departure." },
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
  name: "Schengen Visa Services",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Golden Avenue, Jalandhar Road",
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
    "Schengen work visa processing for 27 European countries including Poland, Romania, Croatia, Malta, Hungary, and Czech Republic. Government licensed recruitment agency with zero candidate fees.",
  serviceType: "Visa Consulting",
};

export default function SchengenVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa/schengen" },
          { name: "Schengen Visa", href: "/visa/schengen" },
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
                  Schengen Zone &middot; 27 Countries &middot; Work &amp; Travel
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Schengen Visa Services
                <br />
                <span style={{ color: "#1e40af" }}>in Nakodar</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Apply for Schengen work visas for 27 European countries from our Nakodar office. Shiva Travel &amp; Manpower Consultants provides complete visa processing — from document preparation to embassy stamping. Government licensed. Zero candidate fees.
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
                {["27 Schengen Countries", "Work Permit Included", "Zero Fees"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Schengen visa services at Shiva Travel Nakodar office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>27</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  European Countries<br />Schengen Zone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "27", label: "Schengen Countries" },
              { value: "1000+", label: "Workers Sent to Europe" },
              { value: "25+", label: "Years Experience" },
              { value: "6", label: "Countries We Process" },
              { value: "Zero", label: "Candidate Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHAT IS SCHENGEN ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                What is the Schengen Area?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 20 }}>
                The Schengen Area is a zone of 27 European countries that have abolished passport controls at their mutual borders. Once you have a work visa for any Schengen country, you can travel freely across all 27 nations during your holidays and time off.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 20 }}>
                For Indian workers, a Schengen work visa is the gateway to Europe. You get a legal work permit in one country with the freedom to explore France, Germany, Italy, Spain, and 23 other nations — all on a single visa.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>
                Shiva Travel &amp; Manpower Consultants processes work visas for the countries with the highest demand for Indian workers — Poland, Romania, Croatia, Malta, Hungary, and Czech Republic.
              </p>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 20 }}>Types of Schengen Work Visas</h3>
                {[
                  { type: "Long-Stay Work Visa (Type D)", desc: "For employment exceeding 90 days. This is the most common visa for Indian workers going to Europe for jobs." },
                  { type: "Seasonal Work Visa", desc: "For agriculture, tourism, and hospitality jobs lasting 3-9 months. Ideal for farm workers and hotel staff." },
                  { type: "EU Blue Card", desc: "For highly skilled workers with university degrees. Higher salary threshold but faster path to permanent residency." },
                  { type: "Intra-Company Transfer", desc: "For employees transferred within a multinational company to a European branch." },
                ].map((item) => (
                  <div key={item.type} style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#1e40af", marginBottom: 4 }}>{item.type}</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== COUNTRIES WE PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Countries We Process Visas For
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We specialize in work visa processing for these high-demand Schengen countries. Each offers unique opportunities for Indian workers.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {countries.map((country) => (
                <Link key={country.name} href={country.href} style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb", transition: "box-shadow 0.2s", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <span style={{ fontSize: 28 }}>{country.flag}</span>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{country.name}</h3>
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7, marginBottom: 16 }}>{country.desc}</p>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#1e40af" }}>
                      View {country.name} Visa Details &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Our 6-Step Schengen Visa Process
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                From your first visit to our Nakodar office to your flight to Europe — we handle everything. The complete process takes about 3-5 months. All paperwork, employer coordination, and embassy appointments are managed by our experienced team.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Schengen visa consultation at Shiva Travel Nakodar" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
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

        {/* ===== REQUIREMENTS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 12 }}>
              Documents Required for Schengen Work Visa
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
              Our team at the Nakodar office will help you prepare and verify every document. Don&apos;t worry if you&apos;re missing something — we guide you through the entire process.
            </p>
            <div style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {requirements.map((req, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, backgroundColor: "#1e40af", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#0b1c30", lineHeight: 1.6, paddingTop: 2 }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Shiva Travel for Schengen Visa
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Nakodar&apos;s most trusted name in overseas recruitment. Licensed, experienced, and committed to your success.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}>
              {trustFactors.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: "#eff4ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
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

        <SalaryCalcCTA country="Europe" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Europe?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit us at <strong style={{ color: "rgba(255,255,255,0.85)" }}>Golden Avenue, Jalandhar Road, Nakodar, Punjab</strong> or call us today.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              No fees. No hidden charges. Government licensed recruitment. Schengen work visa for 27 European countries.
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
