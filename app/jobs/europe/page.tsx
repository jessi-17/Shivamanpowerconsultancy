import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Jobs in Europe | Poland, Romania, Croatia Work Opportunities",
  description:
    "Find factory, warehouse, and skilled worker jobs in Europe through Shiva Travel & Manpower Consultants. Government licensed recruitment for Poland, Romania, Croatia, Malta. Work permit assistance. Zero candidate fees.",
};

const countries = [
  {
    name: "Poland",
    flag: "\u{1F1F5}\u{1F1F1}",
    desc: "Poland is the most popular European destination for Indian workers. Booming manufacturing, construction, and agriculture sectors with competitive salaries and low cost of living.",
    link: "/jobs/poland",
  },
  {
    name: "Romania",
    flag: "\u{1F1F7}\u{1F1F4}",
    desc: "Romania\u2019s growing economy needs workers in construction, manufacturing, and agriculture. EU member with Schengen access, making it a gateway to Europe.",
    link: "/jobs/romania",
  },
  {
    name: "Croatia",
    flag: "\u{1F1ED}\u{1F1F7}",
    desc: "Croatia\u2019s booming tourism and construction sectors are actively recruiting. Beautiful country with good worker protections as an EU member.",
  },
  {
    name: "Malta",
    flag: "\u{1F1F2}\u{1F1F9}",
    desc: "English-speaking EU nation with strong demand in hospitality, gaming, and logistics. Warm Mediterranean climate and good quality of life.",
  },
  {
    name: "Hungary",
    flag: "\u{1F1ED}\u{1F1FA}",
    desc: "Hungary\u2019s automotive and electronics manufacturing sectors employ thousands of foreign workers. Major companies like Audi, Mercedes, and Samsung have plants here.",
  },
  {
    name: "Czech Republic",
    flag: "\u{1F1E8}\u{1F1FF}",
    desc: "One of Europe\u2019s lowest unemployment rates means high demand for foreign workers. Strong manufacturing sector with companies like Skoda, Foxconn, and Hyundai.",
  },
];

const jobCategories = [
  { title: "Factory & Manufacturing", icon: "M2 20h20M4 20V10l8-6 8 6v10", roles: ["Production Worker", "Machine Operator", "Assembly Line Worker", "Quality Controller", "Packaging Operator", "CNC Operator", "Welder"] },
  { title: "Construction", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", roles: ["General Labourer", "Mason", "Carpenter", "Electrician", "Plumber", "Steel Fixer", "Painter", "Scaffolder"] },
  { title: "Agriculture & Food", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", roles: ["Farm Worker", "Fruit Picker", "Greenhouse Worker", "Meat Processing", "Food Packaging", "Dairy Farm Worker"] },
  { title: "Warehouse & Logistics", icon: "M1 6h22M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M10 11v6M14 11v6", roles: ["Warehouse Worker", "Forklift Operator", "Order Picker", "Delivery Driver", "Sorting Staff", "Inventory Manager"] },
  { title: "Hospitality & Tourism", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", roles: ["Hotel Housekeeping", "Kitchen Helper", "Chef / Cook", "Waiter / Waitress", "Resort Staff", "Cleaning Staff"] },
  { title: "Transport", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", roles: ["Truck Driver (CE License)", "Bus Driver", "Delivery Van Driver", "Courier", "Taxi Driver"] },
];

const whyEurope = [
  { title: "Schengen Access", desc: "Work permit in one EU/Schengen country lets you travel across 27 countries during holidays. Explore France, Germany, Italy, and more on weekends." },
  { title: "Path to Permanent Residency", desc: "After working 5 years in most European countries, you can apply for permanent residency. Some countries offer a path to citizenship too." },
  { title: "Higher Savings Than Gulf", desc: "While base salaries seem similar, European worker protections include overtime pay, holiday pay, and social security \u2014 your total compensation is much higher." },
  { title: "Worker Rights & Safety", desc: "EU labour laws are among the strongest in the world. Maximum 40-48 hour work weeks, mandatory rest days, health insurance, and workplace safety standards." },
  { title: "Free Healthcare", desc: "Most European countries provide free or subsidized healthcare to all legal workers. Your work permit includes health insurance coverage." },
  { title: "Better Quality of Life", desc: "Clean environment, safe cities, good public transport, and a healthy work-life balance. Europe consistently ranks highest in quality of life indices." },
];

const salaryRanges = [
  { role: "Factory Worker (Poland)", range: "\u20AC800 \u2013 \u20AC1,200", inr: "\u20B974,000 \u2013 \u20B91,11,000" },
  { role: "Construction Worker (Romania)", range: "\u20AC700 \u2013 \u20AC1,100", inr: "\u20B965,000 \u2013 \u20B91,02,000" },
  { role: "Welder (Poland)", range: "\u20AC1,000 \u2013 \u20AC1,800", inr: "\u20B993,000 \u2013 \u20B91,67,000" },
  { role: "Truck Driver (CE)", range: "\u20AC1,200 \u2013 \u20AC2,500", inr: "\u20B91,11,000 \u2013 \u20B92,32,000" },
  { role: "Farm Worker (Seasonal)", range: "\u20AC700 \u2013 \u20AC1,000", inr: "\u20B965,000 \u2013 \u20B993,000" },
  { role: "Warehouse Worker", range: "\u20AC800 \u2013 \u20AC1,300", inr: "\u20B974,000 \u2013 \u20B91,21,000" },
  { role: "Chef / Cook", range: "\u20AC900 \u2013 \u20AC1,500", inr: "\u20B984,000 \u2013 \u20B91,39,000" },
  { role: "Hotel Housekeeping", range: "\u20AC700 \u2013 \u20AC1,000", inr: "\u20B965,000 \u2013 \u20B993,000" },
];

const faqs = [
  { q: "Do I need to know the local language?", a: "For most factory and construction jobs, no. Basic English is usually sufficient. Some employers provide language training. Knowing basic phrases helps but isn\u2019t required at hiring." },
  { q: "Is European work permit better than a Gulf visa?", a: "European work permits offer stronger worker protections, path to permanent residency, Schengen travel access, and generally better work-life balance. Gulf jobs may offer higher take-home salary initially." },
  { q: "How cold is it in Europe?", a: "Winters in Poland and Romania can reach -10\u00B0C to -20\u00B0C. Employers provide heated accommodation and warm workplaces. You\u2019ll need to invest in good winter clothing." },
  { q: "Can I bring my family?", a: "Yes, after securing stable employment (usually 6-12 months), you can apply for family reunification visa for your spouse and children in most EU countries." },
  { q: "What is the visa processing time?", a: "Typically 4-8 weeks depending on the country. Poland work permits can take 2-3 months due to high demand. We handle all paperwork and keep you updated throughout." },
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

export default function JobsInEurope() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in Europe", href: "/jobs/europe" },
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
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#1e3a5f", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Poland &middot; Romania &middot; Croatia &middot; Malta &middot; Hungary
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Build Your Career
                <br />
                <span style={{ color: "#1e3a5f" }}>in Europe.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                EU work permits, path to permanent residency, and thousands of verified job openings for skilled and unskilled workers. Government-approved recruitment through Shiva Travel & Manpower Consultants.
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
                {["Schengen Access", "Path to PR", "Free Healthcare"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#1e3a5f" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Blog-6.jpg" alt="Europe job opportunities for Indian workers" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#1e3a5f", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Workers Placed<br />in Europe
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
              { value: "5 yrs", label: "Path to PR" },
              { value: "500+", label: "Workers Placed" },
              { value: "6", label: "Countries We Recruit" },
              { value: "Zero", label: "Candidate Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#1e3a5f", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY EUROPE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Thousands from Punjab Choose Europe
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Europe offers unmatched opportunities for Indian workers — from Schengen travel access to a path to permanent residency.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyEurope.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COUNTRIES WE RECRUIT FOR ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Countries We Recruit For
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We have verified employer partnerships across these EU nations, with active job openings year-round.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {countries.map((c) => (
                <div key={c.name} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", fontSize: 24 }}>
                      {c.flag}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{c.name}</h3>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7, marginBottom: c.link ? 16 : 0 }}>{c.desc}</p>
                  {c.link && (
                    <Link href={c.link} style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, color: "#1e3a5f", textDecoration: "none" }}>
                      View {c.name} jobs &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== JOB CATEGORIES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                In-Demand Job Categories Across Europe
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Poland, Romania, Croatia, Malta, Hungary, and Czech Republic.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {jobCategories.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#f8f9ff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={cat.icon} /></svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{cat.title}</h3>
                  </div>
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

        {/* ===== SALARY RANGES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Expected Salary Ranges
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                European salaries are net (after tax). Most employers provide accommodation or housing allowance on top. Overtime is paid at 1.5x-2x rate.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#1e3a5f", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Overtime Pay</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>1.5x-2x</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>rate for overtime + mandatory holiday pay</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#f8f9ff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: "#f1f5f9", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Role</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>EUR/Month</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>INR Approx.</span>
                </div>
                {salaryRanges.map((item, i) => (
                  <div key={item.role} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < salaryRanges.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.role}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#1e3a5f", fontWeight: 600 }}>{item.range}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>{item.inr}</span>
                  </div>
                ))}
              </div>
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

        <SalaryCalcCTA country="Europe" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Start Your European<br />Dream Today
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Walk in to our office at Golden Avenue, Nakodar or call us today. No fees. No hidden charges. Government licensed recruitment.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#1e3a5f", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
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
