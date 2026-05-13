import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import PunjabCluster from "@/components/own/PunjabCluster";
import Testimonials from "@/components/own/Testimonials";

export const metadata: Metadata = {
  title: "Manpower Consultancy Near Jalandhar | Shiva Travel & Manpower Consultants",
  description:
    "Looking to work abroad from Jalandhar? Shiva Travel & Manpower Consultants — government licensed (RA B-1794), 20+ years experience. Dubai visa agent, Saudi Arabia, Qatar, Poland, Romania jobs. Minimal & transparent charges. Office just 20 min from Jalandhar on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Jalandhar",
    "overseas recruitment agency Jalandhar",
    "Gulf jobs from Jalandhar",
    "Dubai jobs Jalandhar Punjab",
    "Europe work visa Jalandhar",
    "recruitment agency near Jalandhar",
    "Saudi Arabia jobs Jalandhar",
    "Qatar jobs from Jalandhar",
    "Poland work permit Jalandhar",
    "Romania jobs Jalandhar Punjab",
  ],
  alternates: {
    canonical: "/jalandhar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Shiva Travel & Manpower Consultants — Jalandhar Region",
  description:
    "Government licensed overseas recruitment agency serving Jalandhar, Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivatravelconsultant.in/jalandhar",
  telephone: "+91-9814820432",
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
  areaServed: {
    "@type": "City",
    name: "Jalandhar",
    containedInPlace: { "@type": "State", name: "Punjab" },
  },
};

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM Projects, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta — Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "100%", label: "Transparent Fees" },
];

const trustReasons = [
  { title: "30 Minutes from BMC Chowk Jalandhar", desc: "Our Nakodar office on Jalandhar Road is 22 km from Jalandhar city. Direct PRTC and private buses every 15 minutes from Jalandhar Bus Stand (₹40, 30 min). Many Jalandhar workers visit Saturday mornings — finish consultation by lunch, return same day." },
  { title: "Trusted by 600+ Workers from Jalandhar District", desc: "Workers from Jalandhar Cantt, Adampur, Kartarpur, Phillaur, Nurmahal, Shahkot regularly come. We understand the Jalandhar worker profile — many have sports goods, factory or skilled trade experience that Gulf and Europe employers actively recruit." },
  { title: "Jalandhar Skills → Europe Salaries", desc: "Jalandhar sports goods, leather and manufacturing factory experience translates directly to Romania, Poland, Croatia skilled-worker shortlists — Europe salaries 4–6x your current Jalandhar wage. We position your CV for the right cluster." },
  { title: "Govt-Licensed RA B-1794 (Verify Yourself)", desc: "Issued by Ministry of External Affairs, valid through June 2027. E-Migrate registered, ALMRA Punjab member. Verifiable on emigrate.gov.in. Many Jalandhar agents claim 'licensed' — verify ours directly on the official portal." },
  { title: "Driver Profiles for Saudi NEOM & Qatar", desc: "Jalandhar district has a high concentration of HMV/HTV license holders. We have direct tie-ups with Saudi NEOM contractors, Qatar Lusail construction companies, UAE logistics firms — heavy vehicle drivers earn ₹55k–80k monthly + accommodation." },
  { title: "Family-First Consultations", desc: "Bring your family \u2014 parents, spouse, in-laws. We sit with everyone, answer all questions in Hindi/Punjabi/English. Many Jalandhar families want collective decisions on overseas placement \u2014 we welcome this approach." },
];

const faqs = [
  { q: "How do I reach Shiva Travel from Jalandhar?", a: "From Jalandhar Bus Stand take any Jalandhar→Nakodar bus (PRTC or private, every 15 min, ₹40, 30 minutes). Get off at Nakodar Golden Avenue stop and walk 2 minutes to our office near Sukhjeet Hospital. By private vehicle: take Jalandhar–Nakodar road via Lambra, 22 km, ~30 minutes." },
  { q: "Are there overseas jobs suited for sports goods factory workers from Jalandhar?", a: "Yes. Sports goods experience translates well to factory and manufacturing jobs in Poland and Romania (food processing, packaging, leather, sports equipment). UAE construction and Saudi NEOM projects also welcome workers with manufacturing background. Bring your work experience certificate — employers value documented factory tenure." },
  { q: "Can someone from Adampur, Kartarpur or Phillaur also use your services?", a: "Of course. Adampur is 15 km from our office, Kartarpur 18 km, Phillaur 22 km. Workers from across Jalandhar district — Cantt, Phillaur, Nurmahal, Shahkot, Sham Chaurasi — regularly visit us. Many catch the morning bus, finish consultation by lunch, and return same day." },
  { q: "I have a heavy vehicle license — which Gulf country pays the most?", a: "For HMV/HTV drivers, Saudi NEOM project (SAR 4,000–6,000/month, ~₹90k–1.3L INR) and Qatar Lusail construction (QR 2,500–3,500, ~₹60k–80k INR) are the highest-paying. Accommodation, transport, food typically free. You'll need valid Indian heavy vehicle license + 2+ years experience." },
  { q: "What are the fees for overseas placement from Jalandhar?", a: "Service charges are minimal, transparent, and posted in our Nakodar office. Every cost — application, GAMCA medical, visa stamping, ticket — explained upfront before deposit. Follows Indian government regulations. No hidden commissions, no broker fees, no surprise deductions." },
  { q: "Is Shiva Travel a genuine licensed agency?", a: "Yes — we hold RA License B-1794/PUN/PER/100/5/10094/2022 from the Ministry of External Affairs, valid through June 2027. E-Migrate registered, ALMRA Punjab member. Verify our license directly on the official eMigrate.gov.in portal — unique to our agency." },
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

export default function JalandharPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jalandhar", href: "/jalandhar" },
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
                  Serving Jalandhar & Doaba Since 2002
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Overseas Recruitment Agency
                <br />
                <span style={{ color: "#0052dc" }}>Near Jalandhar.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Shiva Travel & Manpower Consultants is a government-licensed recruitment agency on Jalandhar Road, Nakodar — just 20 minutes from Jalandhar city. We have placed 5,000+ workers from the Doaba region in premium jobs across the Gulf & Europe.
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
                {["Government Licensed", "No Hidden Fees", "20+ Years"].map((badge) => (
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
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel Manpower Consultants office near Jalandhar" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>5,000+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />Worldwide
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* ===== WHY FAMILIES TRUST US ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Why Families from Jalandhar Trust Shiva Travel</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Government licensed, transparent charges, and decades of proven results for the Doaba region.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {trustReasons.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
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

        {/* ===== DESTINATIONS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Overseas Jobs Available from Jalandhar</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                We recruit for 20+ countries. Here are the most popular destinations for workers from the Jalandhar-Doaba region.
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Frequently Asked Questions</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Common questions from job seekers in the Jalandhar region.
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
        <PunjabCluster currentSlug="jalandhar" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Overseas Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar — just 20 minutes from Jalandhar city centre.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Walk-in consultations available Monday to Saturday, 9am to 6:30pm.
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
