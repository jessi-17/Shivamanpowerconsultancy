import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";
import RelatedVisas from "@/components/own/RelatedVisas";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "Kuwait Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Get Kuwait work visa (Visa 18, Visa 20) and work permit through Shiva Travel & Manpower Consultants, Nakodar. GAMCA medical, attestation, and complete visa processing. Licensed recruitment RA B-1794.",
  keywords: [
    "kuwait visa nakodar",
    "kuwait work visa Punjab",
    "kuwait visa consultant",
    "kuwait visa 18",
    "kuwait visa 20",
    "kuwait work permit punjab",
  ],
  alternates: { canonical: "/visa/kuwait" },
};

const whyKuwait = [
  { title: "Oil-Rich Economy", desc: "Kuwait holds approximately 6% of the world's proven oil reserves. The petroleum sector drives massive infrastructure spending, creating consistent demand for skilled and semi-skilled workers across all sectors." },
  { title: "Tax-Free Income", desc: "Kuwait levies zero income tax on employees. Workers keep 100% of their salary, enabling significant savings. Combined with employer-provided accommodation, your take-home pay goes directly to your family." },
  { title: "High Demand for Workers", desc: "Kuwait's ambitious New Kuwait 2035 development plan is driving billions of dollars in infrastructure, healthcare, and education projects. The demand for foreign workers remains strong across all skill levels." },
  { title: "Strong Indian Community", desc: "Over 1 million Indians live and work in Kuwait, making it one of the largest Indian communities in the Gulf. You'll find Indian schools, temples, mosques, restaurants, and grocery stores across Kuwait City." },
  { title: "Modern Living Standards", desc: "Kuwait City offers excellent infrastructure, modern shopping malls, healthcare facilities, and public transport. The government continues to invest heavily in improving quality of life for all residents." },
  { title: "Worker Protection Laws", desc: "Kuwait has strengthened its labour laws with mandatory electronic salary payments, regulated working hours, and a dedicated labour court for dispute resolution. Annual leave and end-of-service benefits are legally mandated." },
];

const visaTypes = [
  { title: "Visa 18 (Work Visa)", desc: "The standard employment visa for workers with a confirmed job offer from a Kuwaiti employer. This is the most common visa type for skilled and semi-skilled workers. Valid for 2 years and renewable." },
  { title: "Visa 20 (Company Transfer Visa)", desc: "Issued for workers transferring between companies or for project-based assignments. Allows the employer to bring workers for specific projects. Common in construction and oil sectors." },
  { title: "Visit / Family Visa", desc: "Short-term visa for family visits or business purposes. Workers earning above the minimum threshold can sponsor family members. We handle complete application and documentation." },
];

const ourServices = [
  { title: "Complete Visa Processing", desc: "End-to-end Kuwait visa application handling from document preparation to embassy submission. We manage Visa 18 and Visa 20 applications with complete paperwork assistance." },
  { title: "GAMCA Medical Examination", desc: "We guide you through the mandatory GCC medical test at approved centres. We schedule your appointment, prepare you for the examination, and ensure all health requirements are met." },
  { title: "Document Attestation", desc: "Full attestation services for educational certificates, experience letters, and personal documents. We handle HRD, MEA, and Kuwait Embassy attestation processes." },
  { title: "E-Migrate Registration", desc: "Mandatory registration on India's E-Migrate portal for workers travelling to ECR countries. We complete your registration and ensure full compliance with Indian emigration requirements." },
  { title: "Contract Verification", desc: "We verify your employment contract terms including salary, accommodation, working hours, and benefits before you sign. This ensures complete transparency and protects your rights." },
  { title: "Pre-Departure Orientation", desc: "Comprehensive briefing covering Kuwait labour laws, your employment rights, cultural norms, emergency contacts, Indian Embassy details, and practical tips for life in Kuwait." },
];

const visaProcess = [
  { step: "01", title: "Consultation & Assessment", desc: "Visit our Nakodar office or call us. We assess your skills, experience, and preferred job type in Kuwait. We match you with verified Kuwaiti employers." },
  { step: "02", title: "Document Preparation", desc: "We help prepare your passport, educational certificates, experience letters, and photographs. All documents are verified and organized as per Kuwait embassy requirements." },
  { step: "03", title: "GAMCA Medical & Attestation", desc: "We schedule your GAMCA medical examination and handle complete document attestation from HRD, MEA, and Kuwait Embassy." },
  { step: "04", title: "Visa Application & E-Migrate", desc: "We submit your Visa 18 or Visa 20 application and complete your E-Migrate registration. Your employment contract is verified for your protection." },
  { step: "05", title: "Visa Stamping & Briefing", desc: "Once approved, we assist with visa stamping in your passport. A comprehensive pre-departure briefing covers Kuwait laws, culture, and practical information." },
  { step: "06", title: "Fly to Kuwait", desc: "You depart for Kuwait with all documents in order. Your employer arranges airport reception and accommodation. Welcome to Kuwait!" },
];

const keySectors = [
  { title: "Construction & Infrastructure", roles: ["Mason", "Carpenter", "Steel Fixer", "Electrician", "Plumber", "Painter", "Crane Operator", "Heavy Equipment Operator"] },
  { title: "Oil & Gas", roles: ["Rigger", "Scaffolder", "Welder", "Pipe Fitter", "Technician", "Safety Officer", "Helper", "Instrument Technician"] },
  { title: "Hospitality & Services", roles: ["Chef / Cook", "Waiter", "Housekeeping", "Hotel Staff", "Kitchen Helper", "Cleaner", "Security Guard"] },
  { title: "Transport & Logistics", roles: ["Heavy Vehicle Driver", "Light Vehicle Driver", "Forklift Operator", "Warehouse Worker", "Delivery Driver"] },
];

const faqs = [
  { q: "What is the difference between Visa 18 and Visa 20?", a: "Visa 18 is the standard work visa issued to workers with a direct employment contract with a Kuwaiti company. Visa 20 is a company transfer or project visa, often used for specific project-based assignments. Both allow you to live and work legally in Kuwait." },
  { q: "How long does a Kuwait work visa take?", a: "The Kuwait work visa process typically takes 4-8 weeks from document submission. The entire process including medical, attestation, and E-Migrate takes about 2-3 months. We work to expedite every step." },
  { q: "Is there a minimum wage in Kuwait?", a: "Kuwait has set a minimum wage of KWD 75 per month for domestic workers. For other sectors, wages are determined by the employment contract. Most skilled workers earn KWD 150-400 per month depending on the role and experience." },
  { q: "Do I need to pay recruitment fees?", a: "Shiva Travel & Manpower Consultants operates under government license RA B-1794. We follow all regulations regarding recruitment charges. Visit our Nakodar office for complete fee transparency." },
  { q: "Can I change jobs in Kuwait?", a: "Yes, Kuwait allows workers to transfer their visa to a new employer after completing the initial contract period or with the current employer's NOC. Recent reforms have made the process easier for workers." },
  { q: "What accommodation is provided?", a: "Most employers in Kuwait provide shared accommodation for workers or a housing allowance. The standard varies by company â€” we verify accommodation arrangements as part of our contract review process." },
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
  name: "Kuwait Visa & Work Permit Services",
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
  areaServed: "Kuwait",
  description: "Complete Kuwait visa processing including Visa 18, Visa 20, GAMCA medical, document attestation, and E-Migrate registration from Nakodar, Punjab.",
};

export default function KuwaitVisa() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Kuwait Visa", href: "/visa/kuwait" },
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
        <PageHero
          kicker="Oil-Rich Economy Â· Tax-Free Â· High Demand"
          title="Kuwait visa & work permit services in Nakodar."
          highlight="in Nakodar."
          chips={["Visa 18", "Visa 20", "GAMCA Medical", "Attestation"]}
          description="Complete Kuwait visa processing: Visa 18, Visa 20, GAMCA medical, document attestation, and E-Migrate registration. Govt-licensed (RA B-1794)."
          primaryCta={{ label: "Apply Now", href: "/contactus" }}
          stats={[
            { num: "800+", label: "Kuwait Visas" },
            { num: "0%", label: "Income Tax" },
            { num: "Oil & Gas", label: "High Demand" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Kuwait visa services at Shiva Travel Consultants Nakodar" }}
          imageSeal={{ title: "Kuwait Visa Specialist", subtitle: "Visa 18 & 20 Â· GAMCA Â· Attestation" }}
          microChip={{ value: "0%", label: "Income Tax" }}
        />

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "800+", label: "Workers Placed" },
              { value: "Zero", label: "Income Tax" },
              { value: "1M+", label: "Indians in Kuwait" },
              { value: "RA B-1794", label: "Licensed Agency" },
              { value: "2035", label: "New Kuwait Vision" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY KUWAIT ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Kuwait for Work
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Kuwait offers tax-free income, an oil-powered economy with massive infrastructure spending, and a strong Indian community of over 1 million people.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyKuwait.map((item) => (
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
                Kuwait Visa Types We Process
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We handle Visa 18, Visa 20, and other Kuwait visa categories with complete documentation and embassy coordination.
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
                Our Kuwait Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From GAMCA medical to contract verification, we handle every step of your Kuwait visa journey from our Nakodar office.
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
                How We Get You to Kuwait
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from consultation to arrival in Kuwait. We handle GAMCA medical, attestation, E-Migrate, and contract verification for Visa 18 and Visa 20 applications.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/shiva-manpower-nakodar-office-punjab.webp" alt="Kuwait visa processing at Shiva Travel Consultants" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
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
                Key Employment Sectors in Kuwait
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Kuwait City, Ahmadi, Jahra, and other Kuwaiti cities.
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

        <SalaryCalcCTA country="Kuwait" />

        {/* ===== RELATED VISAS â€” internal linking ===== */}
        <RelatedVisas currentSlug="kuwait" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Kuwait?
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
