import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Visa Services | Work Visa Processing for Gulf & Europe | Nakodar & Jalandhar",
  description:
    "Complete visa processing and E-Migrate services from Nakodar, Punjab. Work visa for UAE, Saudi Arabia, Qatar, Poland, Romania. Document attestation, medical coordination, pre-departure orientation. Government licensed agency.",
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
        {/* ===== HERO — Split Layout ===== */}
        <section style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {/* Left */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <div style={{ display: "inline-block", padding: "6px 16px", backgroundColor: "#eff4ff", borderRadius: 20, marginBottom: 24 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Our Expertise
                </span>
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.08, letterSpacing: "-1.5px", marginBottom: 24 }}>
                Global Mobility Solutions for Punjab&apos;s Skilled Workforce
              </h1>

              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#43474d", lineHeight: 1.7, marginBottom: 36, maxWidth: 520 }}>
                Shiva Manpower Consultancy bridges the gap between local ambition and international opportunity. From ethical recruitment to post-departure care, we handle every step of your overseas migration journey.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contactus" style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", backgroundColor: "#0b1c30", color: "#fff", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Get Started Today
                </Link>
                <a href="tel:+919814820432" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", backgroundColor: "#fff", color: "#0b1c30", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", border: "1.5px solid #e5e7eb" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98148-20432
                </a>
              </div>
            </div>

            {/* Right — Image */}
            <div style={{ flex: "1 1 440px", minWidth: 0 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                <Image src="/Blog-4.jpg" alt="Construction workers in Dubai placed by Shiva Manpower" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* ===== END-TO-END RECRUITMENT ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px", display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-start" }}>
            {/* Left Text */}
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 16 }}>
                End-to-End Recruitment
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.7, marginBottom: 28 }}>
                We implement global standards for ethical sourcing. Our methodology ensures that Punjab&apos;s skilled professionals are matched with international employers who value quality and integrity.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["ISO Certified Sourcing Protocol", "Multi-stage Skill Verification", "Direct Employer Liaison"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "#0b1c30" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 4 cards grid */}
            <div style={{ flex: "1 1 560px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {[
                { icon: "M11 19C6.55 16.54 4 12.23 4 8V5l8-3 8 3v3c0 4.23-2.55 8.54-7 11", title: "Strategic Sourcing", desc: "Leveraging a vast network across North India to find candidates that meet specific global demands.", color: "#eff4ff" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Screening & Quality", desc: "Rigorous background checks and technical assessments conducted by industry veterans.", color: "#f0fdf4" },
                { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", title: "Interview Coordination", desc: "Managing physical and virtual interview drives for large-scale international projects.", color: "#f8f9ff" },
                { icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6", title: "Contract Management", desc: "Transparent contract signing following MEA guidelines to protect candidate rights.", color: "#fefce8" },
              ].map((card) => (
                <div key={card.title} style={{ backgroundColor: card.color, borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={card.icon} /></svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISA & DOCUMENTATION SUPPORT — Dark rounded card ===== */}
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
                    { title: "Document Attestation", desc: "Swift handling of degrees, certificates, and legal papers." },
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

        {/* ===== EMPOWERING THE PUNJABI WORKFORCE ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                Where We Place You
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                From the Gulf to Europe, we connect Punjab&apos;s skilled workers with verified employers across 12+ countries.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              {[
                { img: "/carousel 1.webp", title: "Gulf Job Placement", desc: "Direct placements in UAE, Saudi Arabia, Qatar, Kuwait & Bahrain. Construction, hospitality, oil & gas, and industrial roles with verified employers.", link: "View Gulf Jobs" },
                { img: "/carousel 2.webp", title: "Europe Work Permits", desc: "Work permits for Poland, Romania, Croatia & more. Factory, warehouse, agriculture, and skilled trade positions with full legal compliance.", link: "View Europe Jobs" },
                { img: "/carousel 3.webp", title: "Pre-Departure Support", desc: "Complete orientation on destination country laws, workplace rights, cultural norms, airport procedures, and emergency contacts before you fly.", link: "Learn More" },
              ].map((card) => (
                <div key={card.title} style={{ borderRadius: 16, overflow: "hidden", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", transition: "transform 200ms, box-shadow 200ms" }}>
                  <div style={{ position: "relative", height: 200 }}>
                    <Image src={card.img} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: 28 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>{card.title}</h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: 1.7, marginBottom: 16 }}>{card.desc}</p>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#0052dc" }}>{card.link} &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== YOUR PARTNER BEYOND BORDERS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
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
                  <Image src="/office image .webp" alt="Shiva Manpower support team" fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
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
