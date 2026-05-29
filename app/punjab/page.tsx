import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import Testimonials from "@/components/own/Testimonials";

export const metadata: Metadata = {
  title: { absolute: "Best Travel Agent, Immigration & Manpower Consultancy in Punjab" },
  description:
    "Punjab's best govt-licensed travel agent, immigration office & overseas recruitment agency. RA B-1794, 20+ years, 5,000+ placed. UAE, Saudi, Qatar, Poland, Romania visas from Nakodar, Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr.",
  keywords: [
    "best travel agent in punjab",
    "best immigration office in punjab",
    "best manpower consultancy in punjab",
    "best recruitment agency punjab",
    "best recruiter in punjab",
    "best overseas recruitment agency punjab",
    "best travel agency in punjab",
    "best visa consultant punjab",
    "manpower consultancy punjab",
    "immigration consultant punjab",
    "punjab overseas jobs",
    "punjab work visa",
    "government licensed agency punjab",
    "RA B-1794 punjab",
    "best agency in doaba",
  ],
  alternates: { canonical: "/punjab" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency", "EmploymentAgency"],
  name: "Shiva Travel & Manpower Consultants",
  description:
    "Punjab's best government-licensed travel agent, immigration office and overseas recruitment agency. Serving Nakodar, Jalandhar, Kapurthala, Phagwara, Hoshiarpur and Nawanshahr since 2002.",
  url: "https://shivatravelconsultant.in/punjab",
  telephone: "+91-9814820432",
  image: "https://shivatravelconsultant.in/Professional Punjab office environment.webp",
  priceRange: "Affordable (Minimal & Transparent Charges)",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
    addressLocality: "Nakodar",
    addressRegion: "Punjab",
    postalCode: "144040",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.12, longitude: 75.47 },
  areaServed: [
    { "@type": "State", name: "Punjab" },
    { "@type": "City", name: "Nakodar" },
    { "@type": "City", name: "Jalandhar" },
    { "@type": "City", name: "Kapurthala" },
    { "@type": "City", name: "Phagwara" },
    { "@type": "City", name: "Hoshiarpur" },
    { "@type": "City", name: "Nawanshahr" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:30",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: "42",
  },
  sameAs: ["https://shivatravelconsultant.in"],
};

const cities = [
  { name: "Nakodar", href: "/nakodar", desc: "Our head office. Walk-in consultations Mon–Sat at Golden Avenue, Jalandhar Road." },
  { name: "Jalandhar", href: "/jalandhar", desc: "Serving Jalandhar district — workers travel from Kartarpur, Phillaur, Nurmahal." },
  { name: "Kapurthala", href: "/kapurthala", desc: "Trusted by Kapurthala, Sultanpur Lodhi, Bholath families since 2002." },
  { name: "Phagwara", href: "/phagwara", desc: "Workers from Phagwara, Banga, Goraya regularly visit our Nakodar office." },
  { name: "Hoshiarpur", href: "/hoshiarpur", desc: "Hoshiarpur, Dasuya, Mukerian & Mahilpur — Europe & Gulf placements." },
  { name: "Nawanshahr", href: "/nawanshahr", desc: "Serving SBS Nagar — Banga, Balachaur, Garhshankar for overseas work." },
];

const visaServices = [
  { country: "Romania Visa", desc: "Work permits for construction, manufacturing & industrial jobs in Romania.", href: "/visa/romania" },
  { country: "Schengen Visa", desc: "Tourist, business & work visas for 27 Schengen countries.", href: "/visa/schengen" },
  { country: "Poland Visa", desc: "Factory, food processing, packaging & agriculture jobs in Poland.", href: "/visa/poland" },
  { country: "UAE Visa", desc: "Dubai, Abu Dhabi & Sharjah work visas — construction, hospitality, driving.", href: "/visa/uae" },
  { country: "Croatia Visa", desc: "Skilled & semi-skilled worker visas — construction & tourism.", href: "/visa/croatia" },
  { country: "Saudi Arabia Visa", desc: "NEOM, oil & gas, welding, electrical & construction jobs.", href: "/visa/saudi-arabia" },
  { country: "Qatar Visa", desc: "Construction, transport, maintenance & hospitality positions.", href: "/visa/qatar" },
  { country: "Kuwait Visa", desc: "Skilled trades, oil & gas, hospitality & retail placements.", href: "/visa/kuwait" },
];

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta — Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "20+", label: "Years in Punjab" },
  { value: "5,000+", label: "Punjab Workers Placed" },
  { value: "6", label: "Doaba Cities Served" },
  { value: "100%", label: "Govt-Licensed (RA B-1794)" },
];

const trustReasons = [
  { title: "Statewide Coverage — 6 Doaba Cities, One Office", desc: "We are the only fully-licensed Recruiting Agent operating from inside Punjab's Doaba belt with structured outreach to Nakodar, Jalandhar, Kapurthala, Phagwara, Hoshiarpur and Nawanshahr. Workers from Amritsar, Ludhiana, Tarn Taran, Moga also visit us regularly — the geographic reach matters because it means we understand worker profiles from every Punjab sub-region." },
  { title: "Punjab Worker Skill-Matching Network", desc: "Punjab workers have distinct regional skill clusters — Hoshiarpur woodcraft, Jalandhar sports goods, Kapurthala engineering diplomas, Banga sugar mill, Phagwara hospitality. We map each cluster to its highest-paying overseas destination: Hoshiarpur woodworkers to Romania, Banga sugar workers to Poland food processing, etc. State-level expertise that smaller city agents cannot offer." },
  { title: "MEA RA B-1794 — Punjab's Most-Verifiable Agency", desc: "We are licensed by the Ministry of External Affairs (RA B-1794/PUN/PER/100/5/10094/2022, valid through June 2027), E-Migrate registered, ALMRA Punjab member. Verify on emigrate.gov.in — search 'Punjab' and you'll find our agency listed among very few that hold an actual government license in the state." },
  { title: "5,000+ Punjab Placements in 20+ Countries", desc: "Across UAE (1,800+), Saudi Arabia (1,200+), Qatar (600+), Poland (450+), Romania (400+), Kuwait, Bahrain, Croatia, Schengen Europe — Punjabi workers placed via Shiva Travel constitute one of the largest Doaba-origin overseas workforce networks. Real volume, real long-term tracking." },
  { title: "Direct Employer Network — Not a Reseller", desc: "Most Punjab recruitment offices are sub-agents who route your case through bigger agencies in Delhi/Mumbai — adding silent commission to your fee. We have direct MoUs with 500+ overseas employers, negotiated directly. No middle layer means lower charges and faster decisions on your case." },
  { title: "Walk-In Office Serving All of Punjab", desc: "Golden Avenue, Jalandhar Road, Nakodar — central in the Doaba belt and reachable from Jalandhar (30 min), Kapurthala (30 min), Phagwara (40 min), Hoshiarpur (1 hr), Nawanshahr (1 hr). Open Mon–Sat 9 AM–6:30 PM. No appointment required for Punjab candidates." },
];

const faqs = [
  { q: "What are the benefits of using a manpower consultancy in Punjab for overseas recruitment?", a: "Using a government-licensed manpower consultancy in Punjab for overseas recruitment gives you eight concrete benefits over a freelance agent or direct application: (1) Legal protection — only MEA-licensed Recruiting Agents (RA) can legally process overseas employment for ECR-passport holders; Shiva Travel holds Licence B-1794. (2) Verified employers — every Gulf, European or Schengen employer is vetted via Demand Letter, Power of Attorney, and Wakala before any candidate is signed. (3) End-to-end document chain — passport, MEA attestation, GAMCA medical, embassy stamping, E-Migrate clearance handled under one roof. (4) Transparent fees — capped by Indian government rules; no broker commissions or hidden deductions. (5) Local accessibility — walk-in office in Nakodar serving Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr and all of Doaba. (6) Punjabi/Hindi-speaking counsellors who understand local trade skills (welding, masonry, drivers, hospitality, farm work). (7) Faster placement — established employer relationships across UAE, Saudi Arabia, Qatar, Kuwait, Poland, Romania and Croatia. (8) Post-departure support — airport pickup, on-arrival paperwork, family contact, and grievance handling through ALMRA Punjab. A Punjab-based consultancy combines legal safety with proximity, which freelance agents cannot offer." },
  { q: "How does an overseas recruitment agency in Punjab help with job placement in Romania?", a: "A Punjab-based MEA-licensed recruitment agency like Shiva Travel & Manpower Consultants handles the entire Romania placement from Nakodar: sourcing the Romanian employer offer, processing the Aviz de munca work permit, MEA attestation of documents, Romanian embassy long-stay (D/AM) visa, mandatory E-Migrate clearance, flight booking, and airport pickup in Bucharest/Cluj. Typical roles include welder, mason, plumber, helper, factory worker, driver and hotel staff at Rs.95,000–Rs.1.6 lakh/month with employer-paid accommodation." },
  { q: "Which is the best manpower consultancy in Punjab?", a: "Shiva Travel & Manpower Consultants is the best government-licensed manpower consultancy in Punjab. We hold RA License B-1794 from the Ministry of External Affairs and have been serving Punjab since 2002 — 20+ years with 5,000+ workers placed across UAE, Saudi Arabia, Qatar, Kuwait, Poland and Romania. Our walk-in office in Nakodar serves Jalandhar, Kapurthala, Phagwara, Hoshiarpur and Nawanshahr." },
  { q: "Who is the best travel agent in Punjab for overseas work?", a: "Shiva Travel & Manpower Consultants is widely considered the best travel agent in Punjab for overseas work. We are government-licensed (RA B-1794), ALMRA Punjab members, and have placed 5,000+ workers in 20+ countries since 2002. We process Romania, Schengen, Poland, UAE, Croatia, Saudi Arabia, Qatar and Kuwait visas." },
  { q: "Which is the best immigration office in Punjab?", a: "Shiva Travel & Manpower Consultants is one of the most trusted government-licensed immigration offices in Punjab. Located in Nakodar (Golden Avenue, Jalandhar Road), we serve the entire Doaba region — Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr — with complete visa and immigration assistance for Gulf and European countries." },
  { q: "How do I find the best recruitment agency in Punjab?", a: "Look for three things: (1) Government license — every legitimate agency must hold an MEA-issued RA license. We hold RA B-1794. (2) Years in business — Punjab has many agencies but few have 20+ years. We started in 2002. (3) Transparent fees — we communicate every cost upfront, no hidden charges." },
  { q: "Which cities in Punjab do you serve?", a: "Our head office is in Nakodar, but we serve all of Doaba and beyond — Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr (SBS Nagar), Ludhiana and Amritsar. Workers from across Punjab visit our Nakodar office for overseas placements." },
  { q: "What is the fees structure of best recruitment agency in Punjab?", a: "Shiva Travel & Manpower Consultants maintains minimal and transparent service charges as per Indian government regulations. Every cost — application, medical, visa, ticket — is communicated upfront. No hidden fees, no surprise deductions, no broker commissions. This is one of the reasons we are considered Punjab's best recruitment agency." },
  { q: "Which countries can Punjabi workers get jobs in through Shiva Travel?", a: "From Punjab, we place workers in 20+ countries including UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah, NEOM), Qatar (Doha), Kuwait, Bahrain, Oman, Poland, Romania, Croatia, Bulgaria, Malta and more. Roles range from construction, factory, driving, hospitality, welding, electrical, oil & gas, healthcare to NEOM mega-projects." },
  { q: "Is Shiva Travel & Manpower Consultants a genuine agency in Punjab?", a: "Yes. Shiva Travel & Manpower Consultants holds RA License B-1794/PUN/PER/100/5/10094/2022 from the Ministry of External Affairs, Government of India, valid through June 2027. We are E-Migrate registered, ALMRA Punjab members, and have been operating from Nakodar since 2002. You can verify our license on the eMigrate portal." },
  { q: "Where is the office of Punjab's best manpower consultancy?", a: "Our head office is at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040. We are open Monday to Saturday, 9 AM to 6:30 PM for walk-in consultations. Call +91-9814820432 or WhatsApp +91-9815358832 anytime." },
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

export default function PunjabPage() {
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
          { name: "Punjab", href: "/punjab" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Punjab&apos;s Best Govt-Licensed Recruitment Agency Since 2002
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Best Travel Agent,
                <br />
                Immigration & Manpower
                <br />
                <span style={{ color: "#0052dc" }}>Consultancy in Punjab.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Shiva Travel &amp; Manpower Consultants is Punjab&apos;s best government-licensed travel agent, immigration office and overseas recruitment agency. Based in Nakodar since 2002, we&apos;ve placed 5,000+ skilled workers from Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr and across Doaba into premium jobs in UAE, Saudi Arabia, Qatar, Kuwait, Poland and Romania.
              </p>

              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  Book Free Consultation
                </Link>
                <Link href="/current-demands" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid #0052dc", color: "#0052dc", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                  View Live Openings
                </Link>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["Govt-Licensed RA B-1794", "ALMRA Punjab Member", "20+ Years"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0b1c30" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Professional Punjab office environment.webp" alt="Punjab's best govt-licensed travel agent and overseas recruitment agency office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>5,000+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />From Punjab
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

        {/* ===== CITIES WE SERVE ACROSS PUNJAB ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Cities We Serve Across Punjab
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Headquartered in Nakodar, we are the best overseas recruitment agency for the entire Doaba region — Jalandhar, Kapurthala, Phagwara, Hoshiarpur and Nawanshahr.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {cities.map((c) => (
                <Link key={c.name} href={c.href} style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none", transition: "box-shadow 0.2s" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>
                    Best in {c.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.6, marginBottom: 16 }}>
                    {c.desc}
                  </p>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc" }}>
                    Visit {c.name} Page &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA & IMMIGRATION ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Best Visa & Immigration Services in Punjab
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Work visas, tourist visas and immigration paperwork for 20+ countries — processed entirely from our Punjab office.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {visaServices.map((v) => (
                <Link key={v.country} href={v.href} style={{ display: "block", backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none", transition: "box-shadow 0.2s" }}>
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

        {/* ===== WHY PUNJAB TRUSTS US ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Punjab Trusts Shiva Travel & Manpower Consultants
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                The most trusted, government-licensed overseas recruitment agency in Punjab — with 20+ years of proven placements.
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

        {/* ===== OVERSEAS JOBS FROM PUNJAB ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Overseas Jobs from Punjab
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Top destinations for Punjabi workers. Live openings updated weekly.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {destinations.map((d) => (
                <Link key={d.country} href={d.href} style={{ display: "block", backgroundColor: "#f8f9ff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none" }}>
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
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Punjab Recruitment & Immigration FAQs
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Most-asked questions from job seekers across Punjab — Jalandhar, Kapurthala, Hoshiarpur and beyond.
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
              Visit Punjab&apos;s Best<br />Manpower Consultancy
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12, maxWidth: 480, margin: "0 auto 12px" }}>
              Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 36 }}>
              Serving Jalandhar, Kapurthala, Phagwara, Hoshiarpur, Nawanshahr — walk-in Mon–Sat, 9 AM–6:30 PM.
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
              Govt-Licensed | RA B-1794 | ALMRA Punjab Member | No Hidden Fees
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
