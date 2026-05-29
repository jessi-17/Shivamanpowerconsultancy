import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import PageHero from "@/components/own/PageHero";
import NumberedProcess from "@/components/own/NumberedProcess";
import ShaderCTA from "@/components/own/ShaderCTA";

const Testimonials = dynamic(() => import("@/components/own/Testimonials"));
const ClientVideos = dynamic(() => import("@/components/own/ClientVideos"));

export const metadata: Metadata = {
  title: { absolute: "5,000+ Placed Abroad — Success Stories | Shiva Travel Punjab" },
  description:
    "Real success stories from 5,000+ workers placed overseas by Punjab's best govt-licensed recruitment agency. Testimonials from UAE, Saudi Arabia, Qatar, Kuwait, Poland & Romania — 20+ years of placements from Nakodar.",
  alternates: { canonical: "/success-stories" },
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
        <PageHero
          kicker="Proven Excellence"
          title="Real journeys. Global careers."
          highlight="Global careers."
          chips={["98% Visa Success Rate", "25+ Destinations", "5,000+ Placed", "20+ Years"]}
          description="Behind every successful visa stamp is a story of ambition and resilience. Explore how our candidates transitioned from Punjab to prestigious roles across the globe."
          image={{ src: "/success.webp", alt: "Successful overseas placements by Shiva Manpower" }}
          imageSeal={{ title: "Poland Work Visa", subtitle: "Approved · Stamped this season" }}
          microChip={{ value: "98%", label: "Visa Success" }}
        />

        {/* ===== VIDEO STORIES ===== */}
        <section style={{ padding: "64px 0" }}>
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

        <NumberedProcess
          kicker="Your Journey"
          title="From application to airport, in 4 steps."
          highlight="in 4 steps."
          intro="Our 4-step precision process ensures your transition is secure, transparent, and exactly what we promised on day one."
          steps={[
            { title: "Profile Analysis", desc: "Complete skill assessment, documentation review, and target-country matching in a single conversation." },
            { title: "Job Match", desc: "We align your profile with verified global employers we've worked with before. No fake jobs, no surprises." },
            { title: "Visa Precision", desc: "Documentation, processing, and filing under our MEA RA registration. Most visas issued in 2–4 weeks." },
            { title: "Deployment", desc: "Pre-departure briefing at our Nakodar office, airport coordination, and on-ground support after you land." },
          ]}
        />

        {/* ===== GOOGLE REVIEWS (Testimonials component) ===== */}
        <Testimonials />

        {/* ===== WALL OF FAME ===== */}
        <ClientVideos />

        <ShaderCTA
          kicker="Your Turn"
          title="Start your success story today."
          highlight="success story"
          description="Your global career is just one application away. Join thousands of successful candidates who trusted Punjab's most reliable manpower agency."
          primaryCta={{ label: "Apply Now — It's Free", href: "/contactus" }}
          secondaryCta={{ label: "Request Callback on WhatsApp", href: "https://wa.me/919815358832" }}
        />
      </main>
    </>
  );
}
