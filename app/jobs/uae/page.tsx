import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Jobs in UAE | Dubai, Abu Dhabi, Sharjah Work Opportunities",
  description:
    "Find high-paying jobs in UAE — Dubai, Abu Dhabi, Sharjah. Factory jobs, construction, driving, hospitality. Tax-free salary with free accommodation. Government licensed recruitment from Punjab. Zero candidate fees.",
};

const jobCategories = [
  { title: "Construction & Labour", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", roles: ["Mason", "Steel Fixer", "Carpenter", "Scaffolder", "Painter", "Tile Fixer", "Plumber", "Shuttering Carpenter"] },
  { title: "Factory & Manufacturing", icon: "M2 20h20M4 20V10l8-6 8 6v10", roles: ["Machine Operator", "Production Helper", "Quality Inspector", "Packaging Operator", "Forklift Operator", "CNC Operator"] },
  { title: "Hospitality & Food", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", roles: ["Chef / Cook", "Waiter / Steward", "Kitchen Helper", "Housekeeping Staff", "Room Attendant", "Restaurant Supervisor"] },
  { title: "Driving & Transport", icon: "M1 6h22M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M10 11v6M14 11v6", roles: ["Heavy Vehicle Driver", "Light Vehicle Driver", "Bus Driver", "Delivery Driver", "Forklift Operator"] },
  { title: "Technical & Skilled", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", roles: ["Electrician", "AC Technician", "Welder", "Pipe Fitter", "Auto Mechanic", "HVAC Technician"] },
  { title: "Office & Admin", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", roles: ["Data Entry Operator", "Receptionist", "Admin Assistant", "Accountant", "Sales Executive", "Store Keeper"] },
];

const whyUAE = [
  { title: "Tax-Free Salary", desc: "Zero income tax — your entire salary goes to your pocket. Workers typically save 60-70% of earnings." },
  { title: "Free Accommodation & Food", desc: "Most employers provide free accommodation, transport, and meals as part of the employment package." },
  { title: "High Demand for Workers", desc: "UAE's booming construction, hospitality, and manufacturing sectors create thousands of new openings every month." },
  { title: "Close to India", desc: "Just 3-4 hours flight from Punjab. Easy to visit family during holidays. Large Punjabi community already established." },
  { title: "Legal Protections", desc: "UAE labour law protects workers' rights including timely salary payment, end-of-service benefits, and annual leave." },
  { title: "Modern Infrastructure", desc: "Modern cities with excellent public transport, healthcare facilities, and worker accommodation standards." },
];

const salaryRanges = [
  { role: "Construction Worker", range: "AED 1,500 – 2,500", inr: "₹34,000 – ₹56,000" },
  { role: "Electrician", range: "AED 2,000 – 3,500", inr: "₹45,000 – ₹79,000" },
  { role: "Welder", range: "AED 2,000 – 4,000", inr: "₹45,000 – ₹90,000" },
  { role: "Heavy Driver", range: "AED 3,000 – 5,000", inr: "₹68,000 – ₹1,13,000" },
  { role: "Chef / Cook", range: "AED 2,500 – 4,500", inr: "₹56,000 – ₹1,02,000" },
  { role: "AC Technician", range: "AED 2,500 – 4,000", inr: "₹56,000 – ₹90,000" },
  { role: "Machine Operator", range: "AED 1,800 – 3,000", inr: "₹41,000 – ₹68,000" },
  { role: "Security Guard", range: "AED 1,500 – 2,500", inr: "₹34,000 – ₹56,000" },
];

const visaProcess = [
  { step: "01", title: "Apply With Us", desc: "Visit our Nakodar office or call us. We'll understand your skills, experience, and preferred job type." },
  { step: "02", title: "Document Preparation", desc: "We help you prepare passport, medical certificate, educational documents, and experience certificates." },
  { step: "03", title: "Job Matching", desc: "We match your profile with verified employers in UAE. You may have a direct interview or video call." },
  { step: "04", title: "Visa Processing", desc: "Once selected, the employer applies for your work visa. Processing takes 2-4 weeks typically." },
  { step: "05", title: "Pre-Departure Briefing", desc: "We brief you on UAE labour laws, your rights, accommodation details, and what to expect on arrival." },
  { step: "06", title: "Fly to UAE", desc: "You fly to UAE with your employment visa. The employer arranges airport pickup and accommodation." },
];

const faqs = [
  { q: "Do I need to pay any fees to get a job in UAE?", a: "No. Through Shiva Travel & Manpower Consultants, we charge zero recruitment fees from candidates. The employer bears all costs including visa, ticket, and recruitment charges as per UAE and Indian government regulations." },
  { q: "What documents do I need?", a: "Valid passport (minimum 6 months validity), passport-size photographs, medical fitness certificate from a GAMCA-approved center, educational certificates, and experience certificates if applicable." },
  { q: "How long does the visa process take?", a: "Typically 2-4 weeks after employer selection. This includes visa stamping, medical clearance, and emigration clearance from the Indian government." },
  { q: "Is accommodation provided?", a: "Yes, most UAE employers provide free shared accommodation, daily transport to work, and meals. Some companies offer a housing allowance instead." },
  { q: "Can I bring my family to UAE?", a: "Once you have a stable job and meet the minimum salary requirement (currently AED 4,000/month), you can sponsor your spouse and children for a family visa." },
  { q: "What is the contract duration?", a: "Standard employment contracts in UAE are for 2 years. After completion, you can renew or switch employers. You're entitled to end-of-service gratuity, return ticket, and pending leave salary." },
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

export default function JobsInUAE() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in UAE", href: "/jobs/uae" },
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
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Dubai &middot; Abu Dhabi &middot; Sharjah
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Build Your Career
                <br />
                <span style={{ color: "#0052dc" }}>in the UAE.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Tax-free salaries, free accommodation, and thousands of verified job openings for skilled and unskilled workers. Government-approved recruitment through Shiva Travel & Manpower Consultants.
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
                {["Tax-Free Income", "Free Accommodation", "2-4 Week Visa"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0052dc" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/UAE.png" alt="Dubai skyline — job opportunities in UAE" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>2,000+</div>
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
              { value: "0%", label: "Income Tax" },
              { value: "2,000+", label: "Workers Placed" },
              { value: "99%", label: "Visa Approval" },
              { value: "3-4 hrs", label: "Flight from Punjab" },
              { value: "Zero", label: "Candidate Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#001f5d", lineHeight: 1 }}>{s.value}</div>
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
                Why Thousands from Punjab Choose UAE
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                The UAE offers unmatched opportunities for Indian workers — from tax-free earnings to employer-sponsored benefits.
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

        {/* ===== JOB CATEGORIES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Available Job Categories in UAE
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Dubai, Abu Dhabi, Sharjah, Ajman, and other emirates.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {jobCategories.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={cat.icon} /></svg>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30" }}>{cat.title}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {cat.roles.map((role) => (
                      <span key={role} style={{ fontFamily: "var(--font-body)", fontSize: 13, padding: "5px 14px", borderRadius: 20, backgroundColor: "#ffffff", color: "#43474d", border: "1px solid #e5e7eb" }}>{role}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SALARY RANGES ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                Expected Salary Ranges
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 24 }}>
                These are approximate monthly salaries. Actual salary depends on employer, experience, and specific role. Most packages include free accommodation, transport, and meals.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#001f5d", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#60a5fa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Average Savings</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>60-70%</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>of salary saved due to tax-free income + free housing</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: "#f1f5f9", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Role</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>AED/Month</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>INR Approx.</span>
                </div>
                {salaryRanges.map((item, i) => (
                  <div key={item.role} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < salaryRanges.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.role}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0052dc", fontWeight: 600 }}>{item.range}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>{item.inr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                How We Get You to UAE
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from application to arrival in as little as 30 days. We handle all paperwork so you can focus on your new career.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/UAE.jpg" alt="Workers in UAE placed by Shiva Manpower" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {visaProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#001f5d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
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

        <SalaryCalcCTA country="UAE" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Career in UAE?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Walk in to our office at Golden Avenue, Nakodar or call us today. No fees. No hidden charges. Government licensed recruitment.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
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
