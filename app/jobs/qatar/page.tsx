import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";
import PageHero from "@/components/own/PageHero";

export const metadata: Metadata = {
  title: "Jobs in Qatar | Doha Work Opportunities for Indian Workers",
  description:
    "Find high-paying jobs in Qatar through Shiva Travel & Manpower Consultants. Government licensed recruitment for Doha and across Qatar. Construction, hospitality, oil & gas jobs. No hidden fees.",
};

const jobCategories = [
  { title: "Construction & Infrastructure", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", roles: ["Mason", "Steel Fixer", "Carpenter", "Plumber", "Painter", "Scaffolder", "Crane Operator", "Surveyor"] },
  { title: "Oil, Gas & Energy", icon: "M2 20h20M4 20V10l8-6 8 6v10", roles: ["Pipe Fitter", "Welder", "Rigger", "Instrumentation Technician", "Safety Officer", "Process Operator"] },
  { title: "Hospitality & Tourism", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", roles: ["Chef / Cook", "Waiter", "Hotel Housekeeping", "Barista", "Restaurant Manager", "Front Desk Agent"] },
  { title: "Facility Management", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", roles: ["Electrician", "AC Technician", "Plumber", "Cleaning Supervisor", "Gardener / Landscaper", "Security Guard"] },
  { title: "Transport & Logistics", icon: "M1 6h22M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M10 11v6M14 11v6", roles: ["Heavy Driver", "Light Driver", "Bus Driver", "Warehouse Worker", "Forklift Operator", "Logistics Coordinator"] },
  { title: "Retail & Services", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", roles: ["Sales Executive", "Cashier", "Store Keeper", "Delivery Rider", "Tailor", "Barber / Salon Staff"] },
];

const whyQatar = [
  { title: "Post-World Cup Boom", desc: "After hosting the 2022 FIFA World Cup, Qatar continues massive infrastructure development including metro expansion, new cities, and tourism projects." },
  { title: "Highest Minimum Wage in Gulf", desc: "Qatar introduced a minimum wage of QAR 1,000/month — the highest in the Gulf region. Plus mandatory food and housing allowances if not provided by employer." },
  { title: "Tax-Free Earnings", desc: "Zero income tax. Combined with employer benefits, workers take home their full salary. Typical savings rate is 60-75% of earnings." },
  { title: "Modern Worker Welfare", desc: "Qatar has reformed its labour laws significantly. The kafala system is abolished, workers can change jobs freely, and there's a minimum wage guarantee." },
  { title: "World-Class Living", desc: "Doha is one of the most modern cities in the Middle East with excellent public transport, healthcare, and worker accommodation standards." },
  { title: "Strong Indian Community", desc: "Indians are the largest expatriate community in Qatar (over 700,000). Plenty of Indian restaurants, temples, and community support." },
];

const salaryRanges = [
  { role: "Construction Worker", range: "QAR 1,200 – 2,000", inr: "₹27,000 – ₹45,000" },
  { role: "Electrician", range: "QAR 2,000 – 3,500", inr: "₹45,000 – ₹79,000" },
  { role: "Pipe Fitter", range: "QAR 2,500 – 5,000", inr: "₹56,000 – ₹1,13,000" },
  { role: "Heavy Driver", range: "QAR 2,500 – 4,000", inr: "₹56,000 – ₹90,000" },
  { role: "Chef / Cook", range: "QAR 2,000 – 4,000", inr: "₹45,000 – ₹90,000" },
  { role: "AC Technician", range: "QAR 2,500 – 4,500", inr: "₹56,000 – ₹1,02,000" },
  { role: "Welder", range: "QAR 2,500 – 5,000", inr: "₹56,000 – ₹1,13,000" },
  { role: "Security Guard", range: "QAR 1,500 – 2,500", inr: "₹34,000 – ₹56,000" },
];

const visaProcess = [
  { step: "01", title: "Apply With Us", desc: "Visit our Nakodar office or call us. We'll understand your skills, experience, and preferred job type." },
  { step: "02", title: "Document Preparation", desc: "We help you prepare passport, medical certificate, educational documents, and experience certificates." },
  { step: "03", title: "Job Matching", desc: "We match your profile with verified employers in Qatar. You may have a direct interview or video call." },
  { step: "04", title: "Visa Processing", desc: "Once selected, the employer applies for your work visa. Processing takes 2-4 weeks typically." },
  { step: "05", title: "Pre-Departure Briefing", desc: "We brief you on Qatar labour laws, your rights, accommodation details, and what to expect on arrival." },
  { step: "06", title: "Fly to Qatar", desc: "You fly to Qatar with your employment visa. The employer arranges airport pickup and accommodation." },
];

const faqs = [
  { q: "Has Qatar abolished the kafala system?", a: "Yes. Qatar is the first Gulf country to abolish the kafala (sponsorship) system. Workers can now change jobs without employer permission after a notice period, and can leave the country freely." },
  { q: "What is the minimum wage in Qatar?", a: "QAR 1,000/month (approximately ₹22,500). In addition, employers must provide food allowance of QAR 300 and housing allowance of QAR 500 if not provided in kind." },
  { q: "How is the weather in Qatar?", a: "Hot summers (May-September, 35-50°C) with outdoor work restrictions during peak hours. Winters (November-March) are pleasant at 15-25°C. Most accommodation is air-conditioned." },
  { q: "Is Qatar expensive to live in?", a: "With employer-provided accommodation and food, your daily expenses are minimal. Worker camps have cooking facilities, and Indian groceries are widely available and affordable." },
  { q: "How long is a work contract?", a: "Typically 2 years. After completion, you're entitled to end-of-service benefits, return ticket, and can renew or find a new employer." },
  { q: "Do I need to pay any fees to get a job in Qatar?", a: "No. Through Shiva Travel & Manpower Consultants, we maintain minimal and transparent charges with no hidden fees. The employer bears most costs including visa, ticket, and recruitment charges as per Qatar and Indian government regulations." },
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

export default function JobsInQatar() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jobs", href: "/current-demands" },
          { name: "Jobs in Qatar", href: "/jobs/qatar" },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Doha · Al Wakrah · Lusail"
          title="Build your career in Qatar."
          highlight="in Qatar."
          chips={["Tax-Free Income", "Free Accommodation", "Highest Min. Wage", "Post-WC Boom"]}
          description="Highest minimum wage in the Gulf, tax-free salaries, and thousands of verified job openings. Qatar's post-World Cup boom means massive opportunities for skilled Indian workers."
          primaryCta={{ label: "Apply Now — It's Free", href: "/contactus" }}
          stats={[
            { num: "1,500+", label: "Placed in Qatar" },
            { num: "0%", label: "Income Tax" },
            { num: "QAR 1.8–4K", label: "Avg Monthly" },
          ]}
          image={{ src: "/saudi-arabia-jobs-indian-workers.jpg", alt: "Qatar skyline — job opportunities in Qatar" }}
          imageSeal={{ title: "1,500+ Placed in Qatar", subtitle: "Construction · Oil & Gas · Hospitality · Driving" }}
          microChip={{ value: "0%", label: "Income Tax" }}
        />

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "48px 0", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { value: "QAR 1,000", label: "Minimum Wage" },
              { value: "1,500+", label: "Workers Placed" },
              { value: "0%", label: "Income Tax" },
              { value: "4-5 hrs", label: "Flight from Punjab" },
              { value: "No", label: "Hidden Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#5b1a3a", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY QATAR ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Why Thousands from Punjab Choose Qatar
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                Qatar offers unmatched opportunities for Indian workers — from the highest minimum wage in the Gulf to modern labour reforms and employer-sponsored benefits.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {whyQatar.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== JOB CATEGORIES ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Available Job Categories in Qatar
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                We recruit for all major industries across Doha, Al Wakrah, Lusail, and other cities in Qatar.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 20 }}>
              {jobCategories.map((cat) => (
                <div key={cat.title} style={{ backgroundColor: "#f8f9ff", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5b1a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={cat.icon} /></svg>
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
                Qatar guarantees a minimum wage of QAR 1,000/month plus QAR 300 food and QAR 500 housing if not provided by employer. Actual salary depends on employer, experience, and specific role.
              </p>
              <div style={{ padding: "16px 20px", backgroundColor: "#5b1a3a", borderRadius: 12 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#f9a8d4", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Average Savings</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>60-75%</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>of salary saved due to tax-free income + free housing</div>
              </div>
            </div>

            <div style={{ flex: "1 1 560px", minWidth: 0 }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: "#f1f5f9", borderBottom: "1px solid #e5e7eb" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>Role</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>QAR/Month</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase" }}>INR Approx.</span>
                </div>
                {salaryRanges.map((item, i) => (
                  <div key={item.role} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafbfc", borderBottom: i < salaryRanges.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.role}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#5b1a3a", fontWeight: 600 }}>{item.range}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>{item.inr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISA PROCESS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            <div style={{ flex: "1 1 360px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                How We Get You to Qatar
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                Our streamlined 6-step process takes you from application to arrival in as little as 30 days. We handle all paperwork so you can focus on your new career.
              </p>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/saudi-arabia-jobs-indian-workers.jpg" alt="Workers in Qatar placed by Shiva Manpower" fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {visaProcess.map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, backgroundColor: "#5b1a3a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>{item.step}</div>
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

        <SalaryCalcCTA country="Qatar" />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #3d0f26 0%, #5b1a3a 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,34,82,0.25) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to Start Your<br />Career in Qatar?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Walk in to our office at Golden Avenue, Nakodar or call us today. No fees. No hidden charges. Government licensed recruitment.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#5b1a3a", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
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
