import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Shiva Travel & Manpower Consultants Nakodar",
  description:
    "Learn about Shiva Travel & Manpower Consultants — a government licensed overseas recruitment agency in Nakodar, Punjab. 25+ years of ethical recruitment. Licensed by Ministry of External Affairs (RA B-1794).",
};

const milestones = [
  { year: "2002", title: "Licensed & Launched", desc: "Obtained the official Recruiting Agent license from the Ministry of External Affairs. Began placing workers in Gulf countries from our Nakodar office." },
  { year: "2008", title: "1,000+ Placements", desc: "Crossed the milestone of 1,000 successful overseas placements across UAE, Saudi Arabia, and Qatar." },
  { year: "2015", title: "European Expansion", desc: "Expanded recruitment to European countries including Poland, Romania, and Croatia to meet growing demand for Indian workers." },
  { year: "2020", title: "Digital Transformation", desc: "Adopted video interviews and digital documentation to continue placements even during the pandemic." },
  { year: "2024", title: "5,000+ Workers Placed", desc: "Surpassed 5,000 successful placements across 12+ countries with zero recruitment fees charged to candidates." },
];

const values = [
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Zero Candidate Fees", desc: "We never charge workers for placement. Employers bear all recruitment costs. This is both our policy and Indian law — and we follow it strictly." },
  { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Government Licensed", desc: "We hold RA License B-1794 from the Ministry of External Affairs, valid through June 2027. Fully compliant with E-Migrate regulations." },
  { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3", title: "Ethical Recruitment", desc: "We follow ILO fair recruitment principles. No deception, no hidden charges, no passport retention. Every worker is briefed on their rights." },
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
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {/* Left — Text */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Since 2002 — Nakodar, Punjab
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Punjab&apos;s Most Trusted
                <br />
                <span style={{ color: "#0052dc" }}>Overseas Partner.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                For over two decades, Shiva Manpower has been the bridge between Punjab&apos;s talent and global opportunity. Government licensed, zero candidate fees, and 5,000+ successful placements across 12+ countries.
              </p>

              {/* Badges */}
              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                {["MEA Licensed", "25+ Nations Reached"].map((badge) => (
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
                <Image src="/Professional Punjab office environment.webp" alt="Shiva Travel Manpower Consultants office" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
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

        {/* ===== THE ETHICAL IMPERATIVE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>The Ethical Imperative</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Beyond placement, we provide protection. Our commitment to the Ministry of External Affairs standards ensures every step of your journey is legal, safe, and transparent.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: 24 }}>
              {/* MEA Licensed */}
              <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 40, border: "1px solid #e5e7eb", display: "flex", flexDirection: "column", gap: 20 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#0b1c30" }}>MEA Licensed Authority</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>
                  We operate under the strict oversight of the Ministry of External Affairs. This isn&apos;t just a license; it&apos;s a promise that every contract we facilitate is scrutinized for fairness and every employer is vetted for security.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, padding: "12px 16px", backgroundColor: "#f1f5f9", borderRadius: 8 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#0b1c30", letterSpacing: "0.05em" }}>LICENCE NO: B-1794/PUN/PER/100/5/10094/2022</span>
                </div>
              </div>

              {/* Zero Hidden Fees */}
              <div style={{ backgroundColor: "#001f5d", borderRadius: 16, padding: 40, display: "flex", flexDirection: "column", gap: 20, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "#ffffff", position: "relative" }}>Zero Hidden Fees</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#bfdbfe", lineHeight: 1.7, position: "relative" }}>
                  Our ethical recruitment model ensures transparency. No middlemen, no &quot;ghost&quot; charges. Just direct pathways to success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== BEST SERVICE BANNER ===== */}
        <section style={{ padding: "60px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 500px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>The Best Service in Punjab</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, maxWidth: 560 }}>
                Local expertise meets global excellence. Our Nakodar headquarters serves as the central hub for thousands of families across the state who trust us for the best travel agency experience and seamless documentation.
              </p>
            </div>
            <div style={{ flex: "0 0 auto", display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[{ value: "25+", label: "Years" }, { value: "5,000+", label: "Workers Placed" }, { value: "12+", label: "Countries" }, { value: "Zero", label: "Candidate Fees" }].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#001f5d", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOUNDER QUOTE ===== */}
        <section style={{ padding: "96px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "0 0 280px", position: "relative" }}>
              <div style={{ width: 280, height: 340, borderRadius: 16, overflow: "hidden", position: "relative", backgroundColor: "#e5e7eb" }}>
                <Image src="/founder.webp" alt="Mr. Tarsem Lal — Founder and Managing Director of Shiva Travel Manpower Consultants" fill sizes="280px" style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30" }}>Mr. Tarsem Lal</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#0052dc", letterSpacing: "0.05em", textTransform: "uppercase" }}>Founder & Managing Director</div>
              </div>
            </div>

            <div style={{ flex: "1 1 400px", minWidth: 0 }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 80, color: "#0052dc", lineHeight: 0.8, marginBottom: 8, opacity: 0.3 }}>&ldquo;</div>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 600, color: "#0b1c30", lineHeight: 1.4, marginBottom: 28 }}>
                We don&apos;t just find jobs; we architect futures. My promise to every Punjabi youth is a path built on dignity, legality, and the relentless pursuit of excellence.
              </blockquote>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 16 }}>
                Starting in 2002, our vision was simple: to eliminate the exploitation of manpower. Today, Shiva Manpower stands as a beacon of trust. We treat every application as if it were our own family member&apos;s journey.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7 }}>
                Our commitment to the &apos;Best Travel Agency&apos; title isn&apos;t about volume — it&apos;s about the quality of life our candidates enjoy once they land. That is our true metric of success.
              </p>
            </div>
          </div>
        </section>

        {/* ===== OUR JOURNEY — Full Width Timeline ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderRadius: 24, maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 56 }}>Our Journey</h2>

            {/* Horizontal timeline */}
            <div style={{ position: "relative", paddingTop: 40 }}>
              {/* Line */}
              <div style={{ position: "absolute", top: 47, left: 0, right: 0, height: 2, backgroundColor: "#e5e7eb" }} />

              <div style={{ display: "grid", gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, gap: 8 }}>
                {milestones.map((m, i) => (
                  <div key={m.year} style={{ textAlign: "center", position: "relative" }}>
                    {/* Dot */}
                    <div style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: i === milestones.length - 1 ? "#0052dc" : "#0b1c30", border: "3px solid #ffffff", boxShadow: "0 0 0 2px #e5e7eb", margin: "0 auto 20px", position: "relative", zIndex: 1 }} />
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", marginBottom: 6 }}>{m.year}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 6 }}>{m.title}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.6, padding: "0 4px" }}>{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT WE STAND FOR — with hover ===== */}
        <AboutClient values={values} />

        {/* ===== GOVERNMENT LICENSE ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ padding: 40, borderRadius: 20, backgroundColor: "#f8fafc", border: "1px solid #e5e7eb" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#0b1c30", marginBottom: 24, textAlign: "center" }}>Government License Details</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
                {[
                  { label: "Agency Name", value: "Shiva Travel & Manpower Consultants" },
                  { label: "RA License", value: "B-1794/PUN/PER/100/5/10094/2022" },
                  { label: "Issuing Authority", value: "Ministry of External Affairs, Govt. of India" },
                  { label: "Valid Through", value: "June 2027" },
                  { label: "E-Migrate Registered", value: "Yes" },
                  { label: "ALMRA Punjab Member", value: "Yes" },
                ].map((item) => (
                  <div key={item.label} style={{ padding: "8px 0" }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
