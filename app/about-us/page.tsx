import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import AboutClient from "./AboutClient";
import PageHero from "@/components/own/PageHero";
import BigQuote from "@/components/own/BigQuote";
import VsThemComparison from "@/components/own/VsThemComparison";
import EmployerLogoWall from "@/components/own/EmployerLogoWall";
import EditorialTimeline from "@/components/own/EditorialTimeline";

export const metadata: Metadata = {
  title: { absolute: "Best Govt-Licensed Manpower Consultancy in Punjab | About Us" },
  description:
    "About Punjab's best travel agent, immigration office & overseas recruitment agency. Govt-licensed (RA B-1794), ALMRA member, 5,000+ placed across UAE, Saudi, Romania, Poland since 2002.",
  alternates: { canonical: "/about-us" },
};

const milestones = [
  { year: "2002", title: "Journey Started", desc: "Mr. Tarsem Lal began his journey in the overseas manpower and emigration space, laying the foundation for what would become a trusted name in recruitment." },
  { year: "2014", title: "First Office Opened", desc: "Established Shiva Travel & Manpower Consultants as an independent consultancy with our first office, serving families across India." },
  { year: "2017", title: "Punjab Govt. Approved", desc: "Received official approval from the Government of Punjab to operate as a licensed travel and manpower consultancy in the state." },
  { year: "2023", title: "MEA Licensed (RA B-1794)", desc: "Granted the Recruiting Agent license by the Ministry of External Affairs, Government of India — the federal credential required to deploy workers overseas." },
  { year: "2024", title: "ALMRA Member", desc: "Became a registered member of ALMRA, reinforcing our commitment to ethical and regulated overseas recruitment." },
  { year: "2026", title: "RLA Licensed", desc: "Added RLA accreditation alongside our existing MEA license — strengthening our compliance credentials and continuing to provide the best opportunities to our brothers across India." },
];

const values = [
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Minimal & Transparent Charges", desc: "We keep our service charges affordable and fully transparent. No hidden fees, no surprise deductions — every cost is communicated upfront before you proceed." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Government Licensed", desc: "We hold RA License B-1794 from the Ministry of External Affairs, valid through June 2027. Fully compliant with E-Migrate regulations." },
  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3", title: "Ethical Recruitment", desc: "We follow ILO fair recruitment principles. No deception, no hidden costs, no passport retention. Every worker is briefed on their rights." },
  { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "End-to-End Support", desc: "From document preparation to visa processing, pre-departure orientation to post-arrival follow-up — we support workers through every step." },
  { icon: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2", title: "Verified Employers Only", desc: "We only work with employers who provide proper contracts, accommodation, and comply with local labour laws." },
  { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", title: "Community First", desc: "Based in Nakodar, we serve the Doaba region — Jalandhar, Kapurthala, Nawanshahr, Hoshiarpur. Our doors are always open." },
];

export default function AboutUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about-us" },
            ])
          ),
        }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Since 2002 · Nakodar, Punjab"
          title="India's Government-Licensed Overseas Partner."
          highlight="Overseas Partner."
          chips={["MEA Licensed", "ALMRA Member", "RA B-1794", "25+ Nations Reached"]}
          description="For over two decades, Shiva Manpower has been the bridge between India's talent and global opportunity. Government licensed, transparent and minimal charges, and 5,000+ successful placements across 12+ countries."
          stats={[
            { num: "5,000+", label: "Placements" },
            { num: "20+", label: "Years Since 2002" },
            { num: "12+", label: "Countries" },
          ]}
          image={{ src: "/shiva-manpower-nakodar-office-punjab.webp", alt: "Shiva Travel Manpower Consultants office in Nakodar, Punjab" }}
          imageSeal={{ title: "Founded by Tarsem Lal · 2002", subtitle: "ALMRA Punjab · MEA RA B-1794" }}
          microChip={{ value: "4.9★", label: "200+ Reviews" }}
        />

        <BigQuote
          kicker="Founder's Note"
          quote="We don't just find jobs. We architect futures. My promise to every Punjabi youth is a path built on dignity, legality, and the relentless pursuit of excellence."
          attribution={{
            name: "Mr. Tarsem Lal",
            role: "Founder & Managing Director",
            meta: "Founded Shiva Manpower in 2002 · Nakodar, Punjab",
            avatar: "/founder.webp",
            avatarAlt: "Mr. Tarsem Lal — Founder of Shiva Travel Manpower Consultants",
            linkedinUrl: "https://www.linkedin.com/in/tarsem-bhagat-8151282a/",
          }}
        />

        {/* ===== BEST SERVICE BANNER ===== */}
        <section style={{ padding: "60px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>Trusted Service Across India</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, maxWidth: 560 }}>
                Local expertise meets global excellence. Our Nakodar headquarters serves as the central hub for thousands of families across India who trust us for a reliable travel agency experience and seamless documentation.
              </p>
            </div>
            <div style={{ flex: "0 0 auto", display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[{ value: "20+", label: "Years" }, { value: "5,000+", label: "Workers Placed" }, { value: "12+", label: "Countries" }, { value: "100%", label: "Transparent Fees" }].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#001f5d", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VsThemComparison
          kicker="The Difference"
          title="What licensed actually means."
          highlight="actually means."
          intro="Words like 'licensed' get thrown around. Here's what it concretely means in your hands when something goes wrong — and what it doesn't, with the alternatives."
          columns={{ us: "Shiva Manpower", middle: "Unlicensed Agents", right: "DIY Visa" }}
          rows={[
            { criterion: "MEA RA License", us: "RA B-1794, valid till 2027", middle: "None", right: "Not applicable" },
            { criterion: "E-Migrate Filing", us: "Under our RA registration", middle: "Often fake or skipped", right: "You file yourself" },
            { criterion: "Employer Verification", us: "Before any contract signed", middle: "Rarely — fake jobs common", right: "Up to you to verify" },
            { criterion: "Charges", us: "Minimal & transparent, in writing", middle: "Hidden + 3“5× higher", right: "Govt visa fee only" },
            { criterion: "If Visa Fails", us: "Refund policy in writing", middle: "Money lost", right: "Not applicable" },
            { criterion: "Legal Recourse", us: "MEA + Indian courts", middle: "Agent disappears", right: "Minimal" },
          ]}
        />

        <EditorialTimeline
          kicker="Our Journey"
          title="Two decades of building trust."
          highlight="building trust."
          intro="From a single office in Nakodar to over 5,000 placements across the Gulf and Europe. The credentials we hold today were earned one milestone at a time."
          milestones={milestones}
          presentLabel="Latest"
        />

        {/* ===== WHAT WE STAND FOR — with hover ===== */}
        <AboutClient values={values} />

        {/* ===== GOVERNMENT LICENSE — editorial credential block ===== */}
        <div role="region" aria-label="Government license" style={{ width: "100%", backgroundColor: "#f4f6fb", padding: "120px 0" }}>
          <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 60px" }}>
            {/* Header */}
            <div style={{ maxWidth: 820, marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: "#001f5d", borderRadius: 2 }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 800, color: "#001f5d", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Government Credential
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, marginBottom: 16 }}>
                The paperwork that backs every claim.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.6, margin: 0, maxWidth: 640 }}>
                Every line of copy on this site is backed by a government-issued document. Here&apos;s the credential — verifiable on the Ministry of External Affairs portal.
              </p>
            </div>

            {/* Featured credential — split layout, wraps on narrow viewports */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "start", marginBottom: 48 }}>
              {/* LEFT — Hero number lockup */}
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
                  Recruiting Agent License
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 9vw, 7.5rem)",
                    fontWeight: 800,
                    color: "#001f5d",
                    lineHeight: 0.92,
                    letterSpacing: "-0.05em",
                    marginBottom: 20,
                  }}
                >
                  B-1794
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "#0b1c30", marginBottom: 8 }}>
                  Ministry of External Affairs, Govt. of India
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.5, wordBreak: "break-word" }}>
                  Full registration: B-1794/PUN/PER/100/5/10094/2022
                </div>
              </div>

              {/* RIGHT — Spec rows */}
              <div style={{ borderTop: "1px solid rgba(11,28,48,0.12)" }}>
                {[
                  { label: "Agency", value: "Shiva Travel & Manpower Consultants" },
                  { label: "Valid through", value: "June 2027" },
                  { label: "Scope", value: "All India" },
                  { label: "Issued from", value: "Nakodar, Punjab" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: 24,
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(11,28,48,0.12)",
                      alignItems: "baseline",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", letterSpacing: "-0.01em" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership/compliance pills */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              {[
                { label: "E-Migrate Registered" },
                { label: "ALMRA Punjab Member" },
                { label: "RLA Accredited" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 16px",
                    borderRadius: 999,
                    backgroundColor: "#fff",
                    border: "1px solid rgba(11,28,48,0.10)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#0b1c30", letterSpacing: "-0.005em" }}>
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Verify CTA */}
            <a
              href="https://emigrate.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                color: "#001f5d",
                textDecoration: "none",
                borderBottom: "1.5px solid #001f5d",
                paddingBottom: 2,
              }}
            >
              Verify this license on emigrate.gov.in
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        <EmployerLogoWall
          kicker="Verified Employers"
          title="Where 5,000+ workers we placed are now."
          highlight="are now."
          intro="Two decades of placements across the Gulf and Europe. A partial list of employer types currently hosting our workers — every one verified before a single CV was shared."
          employers={[
            { name: "Construction Contractor", sector: "Infrastructure", country: "🇦🇪" },
            { name: "Hospitality Group", sector: "Hotels & F&B", country: "🇦🇪" },
            { name: "Logistics Operator", sector: "Warehousing", country: "🇦🇪" },
            { name: "MEP Contractor", sector: "Mechanical & Plumbing", country: "🇦🇪" },
            { name: "Oil & Gas EPC", sector: "Energy", country: "🇸🇦" },
            { name: "Steel Manufacturer", sector: "Heavy Industry", country: "🇸🇦" },
            { name: "Food Processing Group", sector: "Manufacturing", country: "🇸🇦" },
            { name: "Building Contractor", sector: "Construction", country: "🇸🇦" },
            { name: "Energy Contractor", sector: "Oil & Gas", country: "🇶🇦" },
            { name: "Hospitality Chain", sector: "Hotels", country: "🇶🇦" },
            { name: "Industrial Group", sector: "Manufacturing", country: "🇰🇼" },
            { name: "Engineering Firm", sector: "Mechanical", country: "🇰🇼" },
            { name: "Steel Works", sector: "Heavy Industry", country: "🇧🇭" },
            { name: "Logistics Company", sector: "Warehouse", country: "🇵🇱" },
            { name: "Factory Operator", sector: "Production", country: "🇵🇱" },
            { name: "Auto Plant", sector: "Automotive", country: "🇷🇴" },
            { name: "Aerospace Plant", sector: "Aerospace", country: "🇷🇴" },
            { name: "Marine Services", sector: "Shipping", country: "🇭🇷" },
            { name: "Manufacturing Group", sector: "Industrial", country: "🇧🇬" },
            { name: "Hotel Group", sector: "Hospitality", country: "🇲🇹" },
          ]}
        />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to move beyond<br />the ordinary?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Join the thousands of professionals who trusted Punjab&apos;s most reliable manpower agency. Your global career starts with a single consultation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Start Your Application
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Speak with a Consultant
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
