import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import PageHero from "@/components/own/PageHero";
import { VerifiedPlacementsWall } from "@/components/own/ServicesProof";
import NumberedProcess from "@/components/own/NumberedProcess";
import PlaybookCards from "@/components/own/PlaybookCards";
import VsThemComparison from "@/components/own/VsThemComparison";
import EmployerLogoWall from "@/components/own/EmployerLogoWall";

export const metadata: Metadata = {
  title: "Visa Services | Work Visa Processing for Gulf & Europe | Nakodar & Jalandhar",
  description:
    "Visa processing guidance and overseas recruitment from Nakodar, Punjab. Work visa for UAE, Saudi Arabia, Qatar, Poland, Romania. E-Migrate, document attestation, and medical guidance. Government licensed agency.",
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Visa Services", href: "/services" },
            ])
          ),
        }}
      />
      <main style={{ backgroundColor: "#f8f9ff" }}>
        <PageHero
          kicker="Govt-Licensed · MEA RA B-1794"
          title="Global Mobility for Punjab's Skilled Workforce."
          highlight="Skilled Workforce."
          chips={["Recruitment", "Work Visas", "Attestation", "Pre-Departure"]}
          description="Shiva Manpower Consultancy bridges the gap between local ambition and international opportunity. From ethical recruitment to post-departure care, we handle every step of your overseas migration journey."
          stats={[
            { num: "5,000+", label: "Workers Placed" },
            { num: "20+", label: "Years Trusted" },
            { num: "12+", label: "Countries Served" },
          ]}
          image={{ src: "/factory-worker-jobs-dubai-uae.jpg", alt: "Construction workers in Dubai placed by Shiva Manpower" }}
          imageSeal={{ title: "Govt-Licensed Recruiting Agent", subtitle: "MEA · RA B-1794 · Valid till 2027" }}
          microChip={{ value: "4.9ÃƒÂ¢Ã‹Å“Ã¢€Â¦", label: "200+ Reviews" }}
        />

        <VerifiedPlacementsWall />

        <NumberedProcess
          kicker="How It Works"
          title="From your village to your visa ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â in 4 steps."
          highlight="in 4 steps."
          intro="No middlemen, no surprises. Transparent process from your first call to the day you board your flight."
          steps={[
            {
              title: "Apply With Us",
              desc: "Walk in to our Nakodar office or message on WhatsApp. We assess your skills, target country, and timeline in a single conversation.",
            },
            {
              title: "Document Preparation",
              desc: "Passport, GAMCA medical, educational certificates, experience letters. We list exactly what's needed and help you obtain anything missing.",
            },
            {
              title: "Visa Processing",
              desc: "We file your application via the MEA E-Migrate portal under our RA-1794 registration. Most visas issued in 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Å“4 weeks.",
            },
            {
              title: "Departure & After-care",
              desc: "Pre-departure briefing, airport coordination, post-arrival check-ins. We stay in touch ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â most agencies disappear after take-off.",
            },
          ]}
        />

        {/* ===== VISA & DOCUMENTATION SUPPORT ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â Dark rounded card ===== */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ backgroundColor: "#001f5d", borderRadius: 24, padding: "60px 48px", display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center", position: "relative", overflow: "hidden" }}>
              {/* Subtle glow */}
              <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.2) 0%, transparent 70%)" }} />

              {/* Left text */}
              <div style={{ flex: "1 1 400px", minWidth: 0, position: "relative" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
                  Visa & Documentation Support
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#bfdbfe", lineHeight: 1.7, marginBottom: 28 }}>
                  Navigating the complexities of international migration requires precision. Our dedicated legal and processing team ensures 100% compliance with local and foreign immigration laws.
                </p>

                <div style={{ display: "flex", gap: 32, marginBottom: 28, flexWrap: "wrap" }}>
                  {[
                    { title: "Document Attestation Guide", desc: "We guide you through attesting degrees, certificates, and legal papers." },
                    { title: "Visa Processing", desc: "Work permit applications for Europe, Gulf, and SE Asia." },
                  ].map((item) => (
                    <div key={item.title} style={{ flex: "1 1 180px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#0052dc" }} />
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#fff" }}>{item.title}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#93c5fd", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "12px 24px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, borderRadius: 8, textDecoration: "none" }}>
                  Consult an Expert
                </Link>
              </div>

              {/* Right image */}
              <div style={{ flex: "1 1 360px", minWidth: 0, position: "relative" }}>
                <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/10" }}>
                  <Image src="/carousel 4.webp" alt="Workers placed by Shiva Manpower Consultants" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PlaybookCards
          kicker="Country Playbooks"
          title="Pick your destination."
          highlight="destination."
          intro="Each playbook covers eligibility, documents, salary range, visa timeline, and what to expect ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â written by our team in plain English. Free to read."
          playbooks={[
            {
              image: "/UAE.jpg",
              imageAlt: "Dubai skyline ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â UAE work opportunities",
              tag: "Gulf",
              duration: "8 min read",
              title: "Landing a job in UAE: visa, salary, documents",
              href: "/jobs/uae",
            },
            {
              image: "/saudi-arabia-jobs-shiva-manpower.webp",
              imageAlt: "Saudi Arabia work opportunities",
              tag: "Gulf",
              duration: "9 min read",
              title: "Saudi Arabia work guide: Iqama, GAMCA, employer rules",
              href: "/jobs/saudi-arabia",
            },
            {
              image: "/poland-jobs-shiva-manpower.webp",
              imageAlt: "Poland factory and skilled trade jobs",
              tag: "Europe",
              duration: "10 min read",
              title: "Poland work permit playbook for Indian workers",
              href: "/jobs/poland",
            },
          ]}
        />

        {/* ===== YOUR PARTNER BEYOND BORDERS ===== */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: 24, padding: "48px", display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center", border: "1px solid #e5e7eb" }}>
              {/* Left */}
              <div style={{ flex: "1 1 440px", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 18 }}>&#10084;&#65039;</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>24/7 Global Support</span>
                </div>

                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                  Your Partner Beyond Borders
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                  Our commitment doesn&apos;t end when you board your flight. We provide a lifeline for our candidates abroad, ensuring they are never alone in a foreign land.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z", color: "#dc2626", title: "Emergency Helpline", desc: "A dedicated 24/7 helpline for legal, medical, or workplace emergencies." },
                    { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", color: "#2563eb", title: "Family Liaison", desc: "Regular updates and remittance support for families back home in Punjab." },
                    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", color: "#059669", title: "Legal Advocacy", desc: "Assistance in resolving employment disputes or contract violations." },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 2 }}>{item.title}</h4>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div style={{ flex: "1 1 380px", minWidth: 0 }}>
                <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                  <Image src="/shiva-manpower-support-team.webp" alt="Shiva Manpower support team" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <VsThemComparison
          kicker="Why Us"
          title="Licensed beats cheap. Every time."
          highlight="Every time."
          intro="Side-by-side: what you get from a govt-licensed agency vs. unlicensed agents vs. doing the visa yourself."
          columns={{ us: "Shiva Manpower", middle: "Unlicensed Agents", right: "DIY Visa" }}
          rows={[
            { criterion: "MEA RA License", us: "RA B-1794, valid till 2027", middle: "None", right: "Not applicable" },
            { criterion: "E-Migrate Filing", us: "Under our RA registration", middle: "Often fake or skipped", right: "You file yourself" },
            { criterion: "Employer Verification", us: "Before any contract signed", middle: "Rarely ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â fake jobs common", right: "Up to you to verify" },
            { criterion: "Charges", us: "Minimal & transparent, in writing", middle: "Hidden + 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Å“5ÃƒÆ’— higher", right: "Govt visa fee only" },
            { criterion: "Pre-Departure Briefing", us: "Free, in-person at Nakodar", middle: "None", right: "None" },
            { criterion: "Post-Arrival Support", us: "We stay in touch", middle: "Vanish after payment", right: "On your own" },
            { criterion: "Refund If Visa Fails", us: "Refund policy in writing", middle: "Money lost", right: "Not applicable" },
            { criterion: "Legal Recourse", us: "MEA + Indian courts", middle: "Agent disappears", right: "Minimal" },
          ]}
        />

        <EmployerLogoWall
          kicker="Verified Employers"
          title="Where our workers actually go."
          highlight="actually go."
          intro="A partial list of employer types currently hosting workers we placed. We verify every employer before sending a single CV ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â contract terms, accommodation, and compliance with destination labour law."
          employers={[
            { name: "Construction Contractor", sector: "Infrastructure", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Âª" },
            { name: "Hospitality Group", sector: "Hotels & F&B", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Âª" },
            { name: "Logistics Operator", sector: "Warehousing", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Âª" },
            { name: "MEP Contractor", sector: "Mechanical & Plumbing", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Âª" },
            { name: "Oil & Gas EPC", sector: "Energy", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¸ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Steel Manufacturer", sector: "Heavy Industry", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¸ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Food Processing Group", sector: "Manufacturing", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¸ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Building Contractor", sector: "Construction", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¸ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Energy Contractor", sector: "Oil & Gas", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¶ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Hospitality Chain", sector: "Hotels", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¶ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¦" },
            { name: "Industrial Group", sector: "Manufacturing", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â°ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¼" },
            { name: "Engineering Firm", sector: "Mechanical", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â°ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¼" },
            { name: "Steel Works", sector: "Heavy Industry", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â§ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â­" },
            { name: "Logistics Company", sector: "Warehouse", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚ÂµÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â±" },
            { name: "Factory Operator", sector: "Production", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚ÂµÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â±" },
            { name: "Steel Mill", sector: "Manufacturing", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚ÂµÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â±" },
            { name: "Auto Plant", sector: "Automotive", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â·ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â´" },
            { name: "Aerospace Plant", sector: "Aerospace", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â·ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â´" },
            { name: "Marine Services", sector: "Shipping", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â­ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â·" },
            { name: "Manufacturing Group", sector: "Industrial", country: "ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â§ÃƒÂ°Ã…Â¸Ã¢€Â¡Ã‚Â¬" },
          ]}
        />

        {/* ===== SALARY CALCULATOR CTA ===== */}
        <section style={{ padding: "0 24px 64px", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Link href="/salary-calculator" style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
                borderRadius: 20, padding: "36px 40px", display: "flex", alignItems: "center",
                gap: 24, flexWrap: "wrap", cursor: "pointer",
                transition: "transform 200ms, box-shadow 200ms",
              }}>
                <div style={{ flex: "0 0 56px", width: 56, height: 56, borderRadius: 14, backgroundColor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="16" y2="18" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#6ee7b7", textTransform: "uppercase", marginBottom: 4 }}>FREE TOOL</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>How much will you earn abroad?</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>Use our salary calculator to see estimated earnings by country, trade &amp; experience level ÃƒÂ¢Ã¢â€šÂ¬Ã¢€Â in INR.</p>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700 }}>
                    Calculate Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", backgroundColor: "#f8f9ff", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0b1c30", lineHeight: 1.15, marginBottom: 16 }}>
              Ready to Start Your Global Career?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Join thousands of successful professionals from Punjab who have built their future with our trusted migration services.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Inquire Now
              </Link>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                Visit Office
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
