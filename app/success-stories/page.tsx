import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

const Testimonials = dynamic(() => import("@/components/own/Testimonials"));
const ClientVideos = dynamic(() => import("@/components/own/ClientVideos"));

export const metadata: Metadata = {
  title: "Success Stories | Workers Placed by Shiva Travel & Manpower Consultants",
  description:
    "Real success stories from workers placed overseas by Shiva Travel & Manpower Consultants Nakodar. Read testimonials from workers in UAE, Saudi Arabia, Qatar, Poland, Romania.",
};



export default function SuccessStories() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Success Stories", href: "/success-stories" },
            ])
          ),
        }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 60, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {/* Left */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Proven Excellence</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Real Journeys.<br />
                <span style={{ color: "#0b1c30" }}>Global Careers.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Behind every successful visa stamp is a story of ambition and resilience. Explore how our candidates transitioned from Punjab to prestigious roles across the globe.
              </p>

              {/* Badges */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["98% Visa Success Rate", "25+ Destinations"].map((badge) => (
                  <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0052dc" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#0b1c30" }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image with floating card */}
            <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/success.webp" alt="Successful overseas placements by Shiva Manpower" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>

              {/* Floating approval card */}
              <div style={{ position: "absolute", bottom: 20, left: -20, backgroundColor: "#ffffff", borderRadius: 12, padding: "14px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#16a34a", letterSpacing: "0.05em", textTransform: "uppercase" }}>Approved</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#0b1c30" }}>Poland Work Visa</div>
                  <div style={{ display: "flex", gap: 2, marginTop: 2 }}>
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#FBBC05" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VIDEO STORIES ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>Voice of the Global Punjabi</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6, maxWidth: 500 }}>
                  Real candidates, raw emotions. Watch how Shiva Manpower opened doors to international careers.
                </p>
              </div>
              <Link href="/contactus" style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#0052dc", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                Share Your Story <span>&rarr;</span>
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 24 }}>
              {[
                { id: "DWEVQ5PjuBd", title: "Interviews at Nakodar Office", subtitle: "Live recruitment drive" },
                { id: "DWNzMiVFbzb", title: "Factory Worker Placed in Dubai", subtitle: "Construction sector, UAE" },
              ].map((vid) => (
                <a
                  key={vid.id}
                  href={`https://www.instagram.com/reel/${vid.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", backgroundColor: "#0b1c30", textDecoration: "none" }}
                >
                  <iframe
                    src={`https://www.instagram.com/reel/${vid.id}/embed/`}
                    style={{
                      position: "absolute",
                      top: "-60%",
                      left: "-2%",
                      width: "104%",
                      height: "220%",
                      border: "none",
                      pointerEvents: "none",
                    }}
                    loading="lazy"
                    title={vid.title}
                  />
                  {/* Bottom gradient + text */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "60px 24px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.85))", zIndex: 2 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{vid.title}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{vid.subtitle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA SUCCESS STATS ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>Visa Success Stats</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6, maxWidth: 500 }}>
                Transparency is our core value. Here&apos;s a real-time look at our candidate deployment performance across key regions.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 28, alignItems: "start" }}>
              {/* Left — Big stat + destinations */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Big stat */}
                <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 800, color: "#0b1c30", lineHeight: 1 }}>4,200+</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", marginTop: 8 }}>Candidates deployed to Middle East & Europe since 2002.</p>
                </div>

                {/* Top destinations */}
                <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30" }}>Popular Destinations</h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      { name: "United Arab Emirates", count: "1,200+" },
                      { name: "Saudi Arabia", count: "950+" },
                      { name: "Poland (Schengen)", count: "850+" },
                      { name: "Qatar", count: "520+" },
                      { name: "Romania", count: "420+" },
                      { name: "Kuwait", count: "180+" },
                      { name: "Croatia", count: "80+" },
                    ].map((dest) => (
                      <div key={dest.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid #f1f5f9" }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30" }}>{dest.name}</span>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#0052dc" }}>{dest.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Approval rate + Zero frauds + growth bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Approval stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ backgroundColor: "#001f5d", borderRadius: 16, padding: 28, textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#fff" }}>99.2%</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#93c5fd", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>UAE Visa Approval</div>
                  </div>
                  <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 28, textAlign: "center", border: "1px solid #e5e7eb" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#0b1c30" }}>14 Days</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>Average Processing Time</div>
                  </div>
                </div>

                {/* Zero frauds */}
                <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Zero Upfront Frauds</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7, marginBottom: 20 }}>
                    We operate with government-approved licensing, ensuring every candidate&apos;s investment and dream is protected by law.
                  </p>
                  <Link href="/about-us" style={{ display: "inline-flex", alignItems: "center", padding: "10px 20px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none" }}>
                    Verify License
                  </Link>
                </div>

                {/* Yearly growth bars */}
                <div style={{ backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 20 }}>Yearly Placements</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { year: "2024", count: 820, max: 820 },
                      { year: "2023", count: 690, max: 820 },
                      { year: "2022", count: 540, max: 820 },
                      { year: "2021", count: 380, max: 820 },
                      { year: "2020", count: 210, max: 820 },
                    ].map((y) => (
                      <div key={y.year} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#64748b", minWidth: 36 }}>{y.year}</span>
                        <div style={{ flex: 1, height: 8, backgroundColor: "#f1f5f9", borderRadius: 4, overflow: "hidden" }}>
                          <div style={{ width: `${(y.count / y.max) * 100}%`, height: "100%", backgroundColor: y.year === "2024" ? "#0052dc" : "#93c5fd", borderRadius: 4 }} />
                        </div>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "#0b1c30", minWidth: 28 }}>{y.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== YOUR STORY BEGINS HERE — Process Steps ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#001f5d", borderRadius: 24, maxWidth: 1300, margin: "0 auto 40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", textAlign: "center", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#ffffff", marginBottom: 8 }}>Your Story Begins Here</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#93c5fd", lineHeight: 1.6, marginBottom: 48 }}>
              Our 4-step precision process ensures your global transition is secure.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32 }}>
              {[
                { step: "01", title: "Profile Analysis", desc: "Complete skill assessment and documentation review." },
                { step: "02", title: "Job Match", desc: "Aligning your profile with verified global employers." },
                { step: "03", title: "Visa Precision", desc: "Seamless documentation, processing and filing." },
                { step: "04", title: "Deployment", desc: "Pre-travel briefing with on-ground support." },
              ].map((s) => (
                <div key={s.step} style={{ textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#fff" }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#93c5fd", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GOOGLE REVIEWS (Testimonials component) ===== */}
        <Testimonials />

        {/* ===== WALL OF FAME ===== */}
        <ClientVideos />

        {/* ===== CTA — Full Width ===== */}
        <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />

          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            {/* Flags */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 28 }}>
              {["🇦🇪", "🇸🇦", "🇶🇦", "🇵🇱", "🇷🇴", "🇭🇷"].map((flag) => (
                <span key={flag} style={{ fontSize: 28 }}>{flag}</span>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
              Start Your Success<br />Story Today
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
              Your global career is just one application away. Join thousands of successful candidates who trusted Punjab&apos;s most reliable manpower agency.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "18px 40px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Apply Now
              </Link>
              <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 40px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Request Callback
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
