import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Best Manpower Consultancy in Jalandhar | Shiva Travel & Manpower Consultants",
  description:
    "Looking for overseas jobs from Jalandhar? Shiva Travel & Manpower Consultants — government licensed (RA B-1794), 25+ years experience. Jobs in Dubai, Saudi Arabia, Qatar, Poland, Romania. Zero candidate fees. Office near Jalandhar on Jalandhar Road, Nakodar.",
  keywords: [
    "manpower consultancy Jalandhar",
    "overseas recruitment agency Jalandhar",
    "Gulf jobs from Jalandhar",
    "Dubai jobs Jalandhar Punjab",
    "Europe work visa Jalandhar",
    "best recruitment agency near Jalandhar",
    "Saudi Arabia jobs Jalandhar",
    "Qatar jobs from Jalandhar",
    "Poland work permit Jalandhar",
    "Romania jobs Jalandhar Punjab",
  ],
  alternates: {
    canonical: "/jalandhar",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shiva Travel & Manpower Consultants — Jalandhar Region",
  description:
    "Government licensed overseas recruitment agency serving Jalandhar, Punjab. Specializing in Gulf & European placements since 2002.",
  url: "https://shivamanpowerconsultants.com/jalandhar",
  telephone: "+91-9814820432",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
    addressLocality: "Nakodar",
    addressRegion: "Punjab",
    postalCode: "144040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.12,
    longitude: 75.47,
  },
  areaServed: {
    "@type": "City",
    name: "Jalandhar",
    containedInPlace: { "@type": "State", name: "Punjab" },
  },
};

const destinations = [
  { country: "UAE / Dubai", roles: "Construction, Hospitality, Driving, Factory", href: "/jobs/uae" },
  { country: "Saudi Arabia", roles: "Welding, Electrical, NEOM Projects, Oil & Gas", href: "/jobs/saudi-arabia" },
  { country: "Qatar", roles: "Construction, Transport, Maintenance, Hospitality", href: "/jobs/qatar" },
  { country: "Poland", roles: "Factory, Food Processing, Packaging, Agriculture", href: "/jobs/poland" },
  { country: "Romania", roles: "Construction, Manufacturing, Industrial Work", href: "/jobs/romania" },
  { country: "Europe", roles: "Croatia, Bulgaria, Malta — Skilled & Semi-skilled", href: "/jobs/europe" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5,000+", label: "Workers Placed" },
  { value: "20+", label: "Countries" },
  { value: "0", label: "Fees Charged" },
];

const testimonials = [
  { name: "Ajit Singh Rawat", location: "Jalandhar", text: "The service is great. Owner is so friendly and patient. Very helpful staff and from here the work of sending people abroad gets done quickly." },
  { name: "Naveen Kumar", location: "Jalandhar", text: "I had a great experience with Shiva Travel & Manpower Consultants. The team is very professional, knowledgeable, and supportive throughout the entire process." },
  { name: "Gurpreet Singh", location: "Kapurthala", text: "My family has been using Shiva Travel for years. My father went to Dubai through them and now my brother is in Saudi Arabia. We trust them completely." },
];

export default function JalandharPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Jalandhar", href: "/jalandhar" },
        ])) }}
      />

      <main className="full-width-page">
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0b1c30 0%, #162d50 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.15em", color: "#60a5fa", textTransform: "uppercase",
            marginBottom: 16,
          }}>
            SERVING JALANDHAR & DOABA REGION SINCE 2002
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16,
          }}>
            Best Overseas Recruitment Agency{" "}
            <span style={{ color: "#60a5fa" }}>Near Jalandhar</span>
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px",
          }}>
            Shiva Travel & Manpower Consultants is a government-licensed recruitment agency on Jalandhar Road, Nakodar — just 20 minutes from Jalandhar city. We have placed 5,000+ workers from the Doaba region in premium jobs across the Gulf & Europe.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contactus" style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              backgroundColor: "#2563eb", color: "#fff",
              padding: "12px 28px", borderRadius: 8, textDecoration: "none",
            }}>
              Book Free Consultation
            </Link>
            <Link href="/current-demands" style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              backgroundColor: "transparent", color: "#60a5fa",
              padding: "12px 28px", borderRadius: 8, textDecoration: "none",
              border: "1px solid rgba(96,165,250,0.3)",
            }}>
              View Current Openings
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        backgroundColor: "#fff",
        padding: "48px 24px",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24,
          textAlign: "center",
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#0b1c30" }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Jalandhar trusts us */}
      <section style={{
        backgroundColor: "#f8fafc", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 32,
          }}>
            Why Families from Jalandhar Trust Shiva Travel
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { title: "Government Licensed", desc: "RA License B-1794 issued by Ministry of External Affairs. E-Migrate registered. ALMRA Punjab member." },
              { title: "Zero Candidate Fees", desc: "We never charge candidates. All costs are borne by the hiring employers. 100% transparent process." },
              { title: "25+ Years of Trust", desc: "Founded in 1998, serving Jalandhar, Nakodar, Kapurthala, and the entire Doaba belt for over two decades." },
              { title: "Just 20 Min from Jalandhar", desc: "Our office on Jalandhar Road, Nakodar is easily accessible. Walk-in consultations Monday to Saturday, 9am-6pm." },
              { title: "Direct Employer Ties", desc: "We work directly with 500+ employers across UAE, Saudi Arabia, Qatar, Poland, Romania — no middlemen." },
              { title: "End-to-End Support", desc: "From skill testing to visa stamping to airport send-off. We handle everything so you don't have to worry." },
            ].map((item) => (
              <div key={item.title} style={{
                backgroundColor: "#fff", borderRadius: 12, padding: 24,
                border: "1px solid #e5e7eb",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                  color: "#0b1c30", marginBottom: 8,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section style={{
        backgroundColor: "#fff", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700, color: "#0b1c30", textAlign: "center", marginBottom: 8,
          }}>
            Overseas Jobs Available from Jalandhar
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
            textAlign: "center", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px",
          }}>
            We recruit for 20+ countries. Here are the most popular destinations for workers from the Jalandhar-Doaba region.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {destinations.map((d) => (
              <Link key={d.country} href={d.href} style={{
                display: "block", padding: 20, borderRadius: 12,
                border: "1px solid #e5e7eb", textDecoration: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                  color: "#0b1c30", marginBottom: 6,
                }}>
                  {d.country}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 12, color: "#64748b", lineHeight: 1.5,
                }}>
                  {d.roles}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from Jalandhar */}
      <section style={{
        backgroundColor: "#0b1c30", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: 32,
          }}>
            What Jalandhar & Doaba Families Say
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{
                padding: 24, borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14,
                  color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 16,
                }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff",
                }}>
                  {t.name}
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)",
                }}>
                  {t.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: "#fff", padding: "64px 24px", textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 700, color: "#0b1c30", marginBottom: 12,
          }}>
            Ready to Start Your Overseas Career?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
            lineHeight: 1.6, marginBottom: 24,
          }}>
            Visit our office at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar — just 20 minutes from Jalandhar city centre. Walk-in consultations available Monday to Saturday, 9am to 6pm.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+919814820432" style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              backgroundColor: "#2563eb", color: "#fff",
              padding: "12px 28px", borderRadius: 8, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Call +91 98148-20432
            </a>
            <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              backgroundColor: "#16a34a", color: "#fff",
              padding: "12px 28px", borderRadius: 8, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              WhatsApp Us
            </a>
          </div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8", marginTop: 16,
          }}>
            Government Licensed | RA B-1794 | Zero Candidate Fees
          </p>
        </div>
      </section>
      </main>
    </>
  );
}
