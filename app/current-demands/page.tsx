import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Current Demands | Shiva Travel & Manpower Consultants Nakodar",
  description:
    "Browse current overseas job openings across Gulf and European countries. Construction, factory, driving, hospitality, healthcare and more. Zero recruitment fees. Government licensed agency in Nakodar, Punjab.",
};

const destinations = [
  { flag: "\u{1F1E6}\u{1F1EA}", country: "UAE", sectors: ["Construction", "Factory", "Driving", "Hospitality"], href: "/jobs/uae" },
  { flag: "\u{1F1F8}\u{1F1E6}", country: "Saudi Arabia", sectors: ["Oil & Gas", "Construction", "Healthcare"], href: "/jobs/saudi-arabia" },
  { flag: "\u{1F1F6}\u{1F1E6}", country: "Qatar", sectors: ["Construction", "Transport", "Hospitality"], href: "/jobs/qatar" },
  { flag: "\u{1F1F5}\u{1F1F1}", country: "Poland", sectors: ["Factory", "Food Processing", "Agriculture"], href: "/jobs/poland" },
  { flag: "\u{1F1F7}\u{1F1F4}", country: "Romania", sectors: ["Construction", "Manufacturing", "Agriculture"], href: "/jobs/romania" },
  { flag: "\u{1F1EA}\u{1F1FA}", country: "Europe", sectors: ["Croatia", "Malta", "Hungary", "Czech Republic"], href: "/jobs/europe" },
];

const steps = [
  { num: "01", title: "Walk In or Call", desc: "Visit our office in Nakodar or call us directly at +91 98148-20432. No appointment needed." },
  { num: "02", title: "Profile Assessment", desc: "We evaluate your skills, experience, and preferences to match you with the right opportunity." },
  { num: "03", title: "Interview & Selection", desc: "Direct interviews with verified employers. No middlemen, no hidden steps." },
  { num: "04", title: "Visa & Departure", desc: "We handle everything from visa processing to travel arrangements and pre-departure orientation." },
];

export default function CurrentDemands() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Current Demands", href: "/current-demands" },
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
                  Updated Regularly
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Current Job Openings
                <br />
                <span style={{ color: "#0052dc" }}>Across the Globe.</span>
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
                Browse live openings in Gulf and European countries. Every listing is verified, every employer is vetted, and you pay absolutely zero recruitment fees. Your next career move starts here.
              </p>

              {/* Badges */}
              <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
                {["Gulf Countries", "European Union", "Zero Fees"].map((badge) => (
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
                <Image src="/overseasplacement.png" alt="Overseas job placement opportunities across the globe" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: 24, backgroundColor: "#001f5d", borderRadius: 12, padding: "20px 28px", boxShadow: "0 8px 32px rgba(0,12,47,0.3)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                  Active Openings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS BAR ===== */}
        <section style={{ padding: "60px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap" }}>
            {[
              { value: "12+", label: "Active Countries" },
              { value: "500+", label: "Openings This Month" },
              { value: "30-60", label: "Days Avg Processing" },
              { value: "Zero", label: "Candidate Fees" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#001f5d", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FEATURED DESTINATIONS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Featured Destinations</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Explore job opportunities by country. Each destination has verified employers and active openings across multiple sectors.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 24 }}>
              {destinations.map((d) => (
                <Link
                  key={d.country}
                  href={d.href}
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    padding: "36px 32px",
                    border: "1px solid #e5e7eb",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                >
                  <div style={{ fontSize: 40, lineHeight: 1 }}>{d.flag}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#0b1c30" }}>{d.country}</h3>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {d.sectors.map((sector) => (
                      <span
                        key={sector}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#0052dc",
                          backgroundColor: "#eff4ff",
                          padding: "4px 12px",
                          borderRadius: 20,
                        }}
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: "#0052dc", marginTop: "auto" }}>
                    View Jobs &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderRadius: 24, maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>How It Works</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                From your first call to your departure day, we guide you through every step of the overseas recruitment process.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 24 }}>
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    padding: "36px 28px",
                    borderRadius: 16,
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f8fafc",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, color: "#0052dc", opacity: 0.2, lineHeight: 1 }}>{step.num}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30" }}>{step.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAN'T FIND YOUR ROLE? ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div
              style={{
                padding: "56px 48px",
                borderRadius: 20,
                backgroundColor: "#001f5d",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />

              <div style={{ flex: "1 1 400px", minWidth: 0, position: "relative" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
                  Can&apos;t Find Your Role?
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#bfdbfe", lineHeight: 1.7, maxWidth: 520 }}>
                  Not every opening is listed here. We receive new demands from employers every week. Reach out to us directly and we&apos;ll match you with the right opportunity based on your skills and experience.
                </p>
              </div>

              <div style={{ flex: "0 0 auto", display: "flex", gap: 16, flexWrap: "wrap", position: "relative" }}>
                <a
                  href="https://wa.me/919815358832"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 28px",
                    backgroundColor: "#25d366",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 50,
                    textDecoration: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
                <Link
                  href="/contactus"
                  style={{
                    display: "inline-block",
                    padding: "14px 28px",
                    backgroundColor: "transparent",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 50,
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
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
