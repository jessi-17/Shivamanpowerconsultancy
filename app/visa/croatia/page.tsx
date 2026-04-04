import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Croatia Visa & Work Permit in Nakodar | Shiva Travel Consultants",
  description:
    "Get Croatia work visa and work permit from Nakodar, Punjab. EU member country with Schengen access. Construction, tourism, agriculture jobs. Government licensed consultant. Shiva Travel & Manpower Consultants.",
  keywords:
    "croatia visa nakodar, croatia work permit Punjab, croatia visa consultant, croatia work visa India, croatia jobs from Punjab, croatia EU work permit nakodar",
  alternates: {
    canonical: "/visa/croatia",
  },
};

const whyCroatia = [
  { title: "EU Member State", desc: "Croatia is a full European Union member since 2013. Working here gives you access to EU labour protections, healthcare standards, and worker rights." },
  { title: "Schengen Zone Access", desc: "Croatia joined the Schengen area, meaning your Croatian work permit allows visa-free travel across 27 European countries during your time off." },
  { title: "Growing Economy", desc: "Croatia's economy is expanding rapidly, especially in construction, tourism, and shipbuilding. This growth has created strong demand for foreign workers." },
  { title: "Path to EU Residency", desc: "After 5 years of legal work in Croatia, you can apply for long-term EU residence. This opens doors to live and work in any EU country." },
  { title: "Beautiful Country", desc: "Croatia offers stunning coastline along the Adriatic Sea, historic cities like Zagreb and Dubrovnik, and a Mediterranean climate that's comfortable year-round." },
  { title: "Affordable Living", desc: "Compared to Western Europe, Croatia has a lower cost of living. Your salary stretches further for rent, food, and daily expenses, allowing better savings." },
];

const ourServices = [
  { title: "Work Permit Processing", desc: "Complete handling of your Croatia work permit application. We coordinate with Croatian employers and immigration authorities to secure your authorization." },
  { title: "Document Preparation", desc: "We prepare and verify all required documents — passport, educational certificates, experience letters, medical certificates, and police clearance." },
  { title: "Embassy Coordination", desc: "We guide you through the Croatian Embassy visa appointment process, prepare you for the interview, and ensure all documentation meets embassy requirements." },
  { title: "E-Migrate Registration", desc: "Mandatory registration on the Government of India's E-Migrate portal for emigration clearance. We handle the complete registration process for you." },
  { title: "Job Matching", desc: "We match your skills with verified Croatian employers in construction, tourism, agriculture, and shipbuilding. Direct interviews arranged with companies." },
  { title: "Pre-Departure Briefing", desc: "Comprehensive orientation covering Croatian labour laws, your rights, cultural norms, weather preparation, and what to expect on arrival." },
];

const visaProcess = [
  { step: "01", title: "Visit Our Nakodar Office", desc: "Come to our Golden Avenue office or call us. We assess your skills, work experience, and preferred job sector in Croatia." },
  { step: "02", title: "Document Collection", desc: "We collect your passport, photographs, educational certificates, experience letters, and police clearance certificate. All documents are verified and translated." },
  { step: "03", title: "Job Matching & Employer Selection", desc: "Your profile is matched with verified Croatian employers. You may have a phone or video interview. Once selected, the employer initiates your work permit." },
  { step: "04", title: "Work Permit Application", desc: "The Croatian employer submits your work permit application to the Croatian Employment Service. Processing typically takes 4-8 weeks." },
  { step: "05", title: "Visa Stamping & E-Migrate", desc: "After work permit approval, we schedule your embassy appointment, complete E-Migrate registration, and get your visa stamped." },
  { step: "06", title: "Fly to Croatia", desc: "You depart for Croatia with all documents in order. Your employer arranges accommodation and onboarding. Welcome to the EU!" },
];

const jobSectors = [
  { title: "Construction", roles: ["Mason", "Carpenter", "Electrician", "Plumber", "Steel Fixer", "Painter", "General Labourer", "Tile Worker"], desc: "Croatia's booming construction sector needs skilled tradespeople for residential, commercial, and infrastructure projects across the country." },
  { title: "Tourism & Hospitality", roles: ["Hotel Staff", "Chef / Cook", "Waiter", "Housekeeping", "Resort Worker", "Kitchen Helper"], desc: "Croatia's Adriatic coast is a top European tourist destination. Hotels, restaurants, and resorts need workers especially during the peak season." },
  { title: "Agriculture", roles: ["Farm Worker", "Fruit Picker", "Vineyard Worker", "Greenhouse Worker", "Olive Harvester"], desc: "Croatia's agricultural sector produces wine, olive oil, fruits, and vegetables. Seasonal and year-round positions available." },
  { title: "Shipbuilding & Maritime", roles: ["Welder", "Pipe Fitter", "Ship Painter", "Assembly Worker", "Marine Electrician"], desc: "Croatia has a long shipbuilding tradition with major shipyards in Rijeka, Split, and Trogir. Skilled workers are in constant demand." },
];

const faqs = [
  { q: "Can I get a Croatia visa from Nakodar?", a: "Yes. Shiva Travel & Manpower Consultants at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar processes Croatia work visas. We handle the complete process from document preparation to embassy coordination. Call +91-9814820432." },
  { q: "Is Croatia in the EU?", a: "Yes, Croatia has been a full European Union member since July 2013 and joined the Schengen area in January 2023. Your Croatian work permit gives you EU worker protections and visa-free travel across Schengen countries." },
  { q: "How much does a Croatia work visa cost?", a: "Through Shiva Travel & Manpower Consultants, candidates pay zero recruitment fees. The employer bears work permit and recruitment costs. You only need to cover personal expenses like passport fees, medical certificate, and police clearance." },
  { q: "How long does Croatia visa processing take?", a: "A Croatia work permit typically takes 4-8 weeks after the employer submits the application. The entire process from our office to your departure takes about 2-4 months, depending on document preparation and embassy appointment availability." },
  { q: "What is the salary in Croatia?", a: "Croatia's average gross salary is around EUR 1,200-1,500 per month. Construction workers earn EUR 900-1,400, hospitality staff EUR 800-1,100, and skilled tradespeople like welders can earn EUR 1,200-1,800. Accommodation is often provided by employers." },
  { q: "Do I need to know Croatian language?", a: "Not for most manual and semi-skilled jobs. Employers provide on-site training and many have English-speaking supervisors. Learning basic Croatian phrases is helpful for daily life but not a visa requirement." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Croatia Visa & Work Permit Services",
  description: "Complete Croatia visa processing, work permit, document preparation, embassy coordination, and E-Migrate services from Nakodar, Punjab.",
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
  areaServed: { "@type": "Country", name: "Croatia" },
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

export default function CroatiaVisaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Visa Services", href: "/visa" },
          { name: "Croatia Visa", href: "/visa/croatia" },
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
                  EU Member &middot; Schengen Access &middot; Path to Residency
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Croatia Visa &amp; Work Permit
                <br />
                <span style={{ color: "#1e40af" }}>Services in Nakodar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Complete Croatia work visa and work permit processing from Nakodar, Punjab. EU member country with Schengen access. Construction, tourism, agriculture, and shipbuilding jobs. Government licensed recruitment through Shiva Travel &amp; Manpower Consultants.
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
                {["EU Work Permit", "Schengen Travel", "Zero Recruitment Fees"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e40af" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Croatia visa services at Shiva Travel Nakodar office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e40af", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>EU</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Member State<br />Schengen Zone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "EU", label: "Member Since 2013" },
              { value: "27", label: "Schengen Countries" },
              { value: "4", label: "Key Job Sectors" },
              { value: "5 yrs", label: "Path to EU Residency" },
              { value: "Zero", label: "Candidate Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e40af", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY CROATIA ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Choose Croatia for Work
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Croatia offers EU membership, Schengen access, a growing economy, and a clear pathway to long-term European residency.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyCroatia.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== OUR SERVICES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Our Croatia Visa Services
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                From work permit application to embassy coordination — our Nakodar team handles everything for your Croatia journey.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {ourServices.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                How We Get You to Croatia
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from our Nakodar office to Croatia in about 2-4 months. We handle all paperwork including work permit, embassy coordination, and E-Migrate registration.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel Nakodar office - Croatia visa processing" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
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

        {/* ===== JOB SECTORS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Job Sectors in Croatia
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for Croatia&apos;s top industries — from Adriatic coast tourism to Zagreb construction projects.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {jobSectors.map((sector) => (
                <div key={sector.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>{sector.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.7, marginBottom: 16 }}>{sector.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {sector.roles.map((role) => (
                      <span key={role} style={{ fontFamily: "var(--font-body)", fontSize: 13, padding: "5px 14px", borderRadius: 20, backgroundColor: "#ffffff", color: "#43474d", border: "1px solid #e5e7eb" }}>{role}</span>
                    ))}
                  </div>
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

        <SalaryCalcCTA country="Croatia" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2557 0%, #1e40af 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(30,64,175,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Work in<br />Croatia?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040. Call +91-9814820432 or WhatsApp +91-9815358832. Government licensed. Zero candidate fees.
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
