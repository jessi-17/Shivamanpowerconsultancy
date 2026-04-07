import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Pre-Departure Orientation & Briefing | Nakodar & Jalandhar | Shiva Travel",
  description:
    "Pre-departure orientation training (PDOT) for overseas workers from Nakodar, Jalandhar. MEA-mandated pre-departure briefing covering worker rights, labour laws, cultural orientation, airport procedures, emergency contacts for Gulf & Europe jobs.",
  keywords: [
    "pre-departure briefing nakodar",
    "pdot training jalandhar",
    "pre-departure orientation punjab",
    "overseas worker training",
    "gulf country orientation",
    "worker rights training abroad",
    "airport procedure guidance",
    "pre departure orientation training",
  ],
  alternates: {
    canonical: "/services/pre-departure-briefing",
  },
};

const briefingTopics = [
  {
    title: "Destination Country Labour Laws",
    desc: "Every country has specific labour laws governing working hours, overtime pay, rest days, end-of-service benefits, and termination procedures. We explain the laws of your specific destination country so you know your legal rights and obligations before you land.",
    examples: ["UAE Labour Law (Federal Decree-Law No. 33 of 2021)", "Saudi Arabia Labour Law (Royal Decree M/51)", "Qatar Labour Law (Law No. 14 of 2004)", "Poland Labour Code (Kodeks pracy)"],
  },
  {
    title: "Worker Rights & Protections",
    desc: "As an Indian worker abroad, you have specific rights protected by both Indian law and the destination country's regulations. We cover your right to a signed employment contract, timely salary payment, adequate housing, medical care, and the process to file complaints if your rights are violated.",
    examples: ["Right to keep your original passport", "Minimum wage entitlements", "Working hour limits and overtime compensation", "Right to file complaints with Indian Embassy"],
  },
  {
    title: "Cultural Orientation",
    desc: "Working in a foreign country means adapting to different cultural norms, religious practices, and social expectations. We prepare you with practical advice on dress codes, communication etiquette, food habits, religious customs, and social behaviour to help you settle in comfortably.",
    examples: ["Gulf region: Ramadan etiquette, dress code, alcohol laws", "Europe: Workplace culture, punctuality expectations", "General: Language basics, local customs, public behaviour"],
  },
  {
    title: "Financial Literacy & Remittance",
    desc: "Earning abroad is only valuable if you manage your money wisely. We cover how to open a bank account in the destination country, the safest and cheapest ways to send money home to Punjab, how to avoid predatory money transfer agents, and basic budgeting advice.",
    examples: ["Legal remittance channels (bank transfer, exchange houses)", "Avoiding illegal hawala operators", "Saving strategies for overseas workers", "Understanding salary deductions and benefits"],
  },
  {
    title: "Health & Safety at the Workplace",
    desc: "Construction sites, factories, and industrial environments in Gulf and European countries have strict safety protocols. We cover mandatory safety equipment usage, heat stroke prevention (critical in Gulf countries), injury reporting procedures, and your right to refuse unsafe work.",
    examples: ["Heat stress prevention in Gulf summers", "Personal Protective Equipment (PPE) requirements", "Injury reporting and workman compensation", "Health insurance coverage and hospital procedures"],
  },
  {
    title: "Airport & Travel Procedures",
    desc: "For many first-time travellers, the airport experience itself can be overwhelming. We walk you through every step — from check-in at the Indian airport to immigration, customs, baggage claim, and what to do when you land in the destination country.",
    examples: ["Check-in and boarding procedures", "Immigration and emigration counters", "What to carry in hand luggage vs checked baggage", "What to do at the destination airport"],
  },
];

const emergencyInfo = [
  { title: "Indian Embassy Helpline", desc: "Every Indian Embassy abroad has a 24/7 helpline for distressed Indian workers. We provide you with the specific contact numbers for your destination country's Indian Embassy and Consulate." },
  { title: "MADAD Portal", desc: "The Ministry of External Affairs operates the MADAD portal (madad.gov.in) for Indian citizens abroad to register grievances. We show you how to use this portal and when to use it." },
  { title: "Employer Contact Information", desc: "You receive your employer's local contact number, company address, and the name of your point-of-contact person before departure. We verify this information with the employer." },
  { title: "Shiva Travel Support Line", desc: "Our commitment does not end at the airport. We provide you with a dedicated contact number for post-arrival support. If you face any issues with your employer, accommodation, or documents, call us." },
  { title: "Local Emergency Numbers", desc: "Police, ambulance, fire — every country has different emergency numbers. We provide you with a printed card of all essential emergency numbers for your destination country." },
  { title: "Insurance Claims Process", desc: "If you need to use your travel or health insurance abroad, the claims process can be confusing. We explain how to file a claim, what documents to keep, and whom to contact." },
];

const faqs = [
  { q: "What is Pre-Departure Orientation Training (PDOT)?", a: "Pre-Departure Orientation Training (PDOT) is a mandatory briefing session required by the Ministry of External Affairs (MEA) for all Indian workers going abroad for employment. It covers destination country laws, worker rights, cultural awareness, financial guidance, health and safety, and emergency procedures. The goal is to ensure workers are fully prepared before leaving India." },
  { q: "Is pre-departure briefing mandatory?", a: "Yes. The Government of India mandates pre-departure orientation for all emigrating workers, especially those going to ECR countries. The Protector of Emigrants (POE) requires proof that the worker has undergone PDOT before granting emigration clearance. We conduct this briefing as part of our recruitment process." },
  { q: "When does the pre-departure briefing happen?", a: "The briefing is conducted after your visa is stamped and before your departure date, typically 3-7 days before your flight. This timing ensures all your travel documents are ready and the briefing covers your specific destination, employer, and flight details." },
  { q: "How long is the briefing session?", a: "A comprehensive pre-departure briefing typically lasts 2-3 hours. It covers all essential topics including labour laws, rights, cultural orientation, airport procedures, and emergency contacts. We also allow time for questions and provide printed reference materials you can carry with you." },
  { q: "Is the briefing conducted in Punjabi / Hindi?", a: "Yes. Our briefings are conducted in Punjabi and Hindi so that every worker fully understands the content. We use simple, practical language with real examples rather than technical legal jargon. The goal is that you leave the session feeling confident and prepared." },
  { q: "What materials do I receive during the briefing?", a: "You receive a printed pre-departure kit that includes: destination country emergency numbers, Indian Embassy contact details, your employer's contact information, a summary of key labour laws, airport procedure checklist, and important do's and don'ts. This kit stays with you as a reference throughout your time abroad." },
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pre-Departure Orientation & Briefing",
  description: "MEA-mandated pre-departure orientation training covering worker rights, labour laws, cultural orientation, airport procedures, and emergency contacts for overseas workers.",
  provider: {
    "@type": "Organization",
    name: "Shiva Travel & Manpower Consultants",
    url: "https://shivatravelconsultant.in",
    telephone: "+91-9814820432",
  },
  areaServed: [
    { "@type": "City", name: "Nakodar" },
    { "@type": "City", name: "Jalandhar" },
    { "@type": "State", name: "Punjab" },
  ],
  serviceType: "Pre-Departure Orientation Training",
};

export default function PreDepartureBriefingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Pre-Departure Briefing", href: "/services/pre-departure-briefing" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  MEA Mandated Training
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Pre-Departure
                <br />
                Orientation & Briefing
                <br />
                <span style={{ color: "#0052dc" }}>for Overseas Workers.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Before you board your flight, you need to know your rights, understand the laws of your destination country, and be prepared for life and work abroad. Our pre-departure orientation covers everything — from labour laws and worker protections to airport procedures and emergency contacts. This briefing is conducted at our Nakodar office in Punjabi and Hindi, so every worker leaves feeling confident and informed.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Book Free Consultation
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Call +91 98148-20432
                </a>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Government Mandated", "In Punjabi & Hindi", "Printed Reference Kit"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/carousel 1.webp" alt="Pre-departure briefing session at Shiva Travel Nakodar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT WE COVER ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>What the Briefing Covers</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Our pre-departure orientation is comprehensive and tailored to your specific destination country and job role. Here are the key areas we cover.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {briefingTopics.map((topic) => (
                <div key={topic.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{topic.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 16 }}>{topic.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {topic.examples.map((ex) => (
                      <div key={ex} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0052dc", marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EMERGENCY SUPPORT ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#001f5d" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Emergency Information & Support
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We ensure you have every emergency contact and support channel before you leave India. You should never feel stranded abroad.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {emergencyInfo.map((info) => (
                <div key={info.title} style={{ padding: 28, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{info.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{info.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY IT MATTERS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Why Pre-Departure Briefing Matters
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.8, marginBottom: 20 }}>
                Many Indian workers face problems abroad not because of the job itself, but because they were not prepared for the realities of working and living in a foreign country. Common issues include:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Not knowing overtime pay is mandatory — and accepting unpaid extra hours",
                  "Handing over their passport to the employer — which is illegal in most Gulf countries",
                  "Not knowing how to file a complaint with the Indian Embassy",
                  "Falling victim to illegal money transfer agents and losing remittances",
                  "Not understanding heat safety rules — leading to heat strokes on Gulf construction sites",
                  "Not knowing their insurance covers hospital visits — and avoiding treatment",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.8, marginTop: 20 }}>
                Our briefing prevents these situations by ensuring every worker knows their rights, responsibilities, and whom to call for help.
              </p>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/carousel 2.webp" alt="Workers prepared for overseas employment" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQs ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions About Pre-Departure Briefing</h2>
            </div>

            <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <details key={faq.q} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: "24px 28px", border: "1px solid #e5e7eb" }}>
                  <summary style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.q}
                    <span style={{ fontSize: 20, color: "#64748b", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </summary>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginTop: 14 }}>{faq.a}</p>
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
              Go Abroad Prepared,<br />Not Unprepared
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Our pre-departure briefing ensures you know your rights, your employer, and your support system before you leave Punjab.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar 144040
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
