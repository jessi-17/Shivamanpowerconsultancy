import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import EmployerHero from "@/components/own/EmployerHero";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import { gulfCountries, europeCountries } from "../_lib/data/employerCountries";

const IndustriesServed = dynamic(() => import("@/components/own/IndustriesServed"));
const WhyPartnerWithUs = dynamic(() => import("@/components/own/WhyPartnerWithUs"));
const RecruitmentProcess = dynamic(() => import("@/components/own/RecruitmentProcess"));
const Testimonials = dynamic(() => import("@/components/own/Testimonials"));
const EmployerInquiryForm = dynamic(() => import("@/components/own/EmployerInquiryForm"));

export const metadata: Metadata = {
  title: "For Employers – Hire Skilled Workers from India | Shiva Manpower Consultants",
  description:
    "Partner with Shiva Travel & Manpower Consultants to source pre-screened, skilled workers from India. Government-licensed (MEA), 25+ years experience, 5,000+ workers deployed across 12+ countries. Zero compliance issues.",
  keywords: [
    "hire workers from India",
    "Indian manpower supplier",
    "overseas recruitment agency India",
    "skilled labour from Punjab",
    "manpower consultancy for employers",
    "Gulf recruitment agency",
    "European workforce supplier India",
  ],
  alternates: {
    canonical: "/employers",
  },
  openGraph: {
    title: "For Employers – Hire Skilled Workers from India | Shiva Manpower Consultants",
    description: "Government-licensed recruitment agency supplying pre-screened skilled workers from India. 25+ years, 5,000+ deployments, zero compliance issues.",
    url: "https://shivatravelconsultant.in/employers",
    type: "website",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", href: "/" },
  { name: "For Employers", href: "/employers" },
]);

export default function EmployersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <EmployerHero />

      {/* Country selector grid */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--surface)" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.1em", color: "var(--surface-tint)",
              textTransform: "uppercase", marginBottom: 10,
            }}>
              HIRE WORKERS BY COUNTRY
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 700, color: "var(--on-surface)", lineHeight: 1.25,
            }}>
              Countries We Deploy To
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15,
              color: "var(--on-surface-variant)", lineHeight: 1.6,
              maxWidth: 520, margin: "12px auto 0",
            }}>
              We provide dedicated recruitment services for each country with local compliance expertise.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[...gulfCountries, ...europeCountries].map((c) => {
              const countryImages: Record<string, string> = {
                uae: "/UAE.webp",
                "saudi-arabia": "/Saudi arabia job.webp",
                qatar: "/Blog-7.jpg",
                kuwait: "/Blog-8.jpg",
                bahrain: "/Blog-9.jpg",
                oman: "/Blog-10.jpg",
                poland: "/poland job.webp",
                romania: "/Romania jobs.webp",
                croatia: "/Blog-11.jpg",
                malta: "/Blog-12.jpg",
                hungary: "/Blog-3.jpg",
                "czech-republic": "/Blog-5.jpg",
              };
              const sectorColors: Record<string, string> = {
                uae: "#22c55e",
                "saudi-arabia": "#f59e0b",
                qatar: "#3b82f6",
                kuwait: "#ef4444",
                bahrain: "#a855f7",
                oman: "#14b8a6",
                poland: "#f97316",
                romania: "#06b6d4",
                croatia: "#ec4899",
                malta: "#84cc16",
                hungary: "#8b5cf6",
                "czech-republic": "#f43f5e",
              };
              return (
                <Link
                  key={c.slug}
                  href={`/employers/${c.slug}`}
                  className="country-card"
                  style={{
                    position: "relative",
                    display: "block",
                    borderRadius: 16,
                    overflow: "hidden",
                    aspectRatio: "4/3",
                    textDecoration: "none",
                  }}
                >
                  <Image
                    src={countryImages[c.slug] || "/Blog-4.jpg"}
                    alt={`Hire workers for ${c.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "20px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                      fontWeight: 700, color: "#fff", display: "block", lineHeight: 1.2,
                    }}>
                      {c.name}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.05em", textTransform: "uppercase",
                      color: sectorColors[c.slug] || "#22c55e",
                      marginTop: 4, display: "block",
                    }}>
                      {c.topIndustries[0]?.title || "Multiple Sectors"}
                    </span>
                  </div>
                </Link>
              );
            })}
            {/* Summary card */}
            <div style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "4/3",
              backgroundColor: "#0f172a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                fontWeight: 700, color: "#fff",
              }}>
                12+ Countries
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,0.6)", textAlign: "center", maxWidth: 180,
              }}>
                Global workforce deployment
              </span>
            </div>
          </div>
        </div>
      </section>

      <IndustriesServed />
      <WhyPartnerWithUs />
      <RecruitmentProcess />
      <Testimonials />

      {/* CTA Banner */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 420,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 48,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "calc(var(--max-width) - 48px)",
        borderRadius: 24,
      }}>
        {/* Background image */}
        <Image src="/Blog-4.jpg" alt="Indian construction workers abroad" fill sizes="100vw" style={{ objectFit: "cover" }} />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 32px", maxWidth: 800 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: 40, maxWidth: 700, margin: "0 auto 40px" }}>
            If your company needs Indian workers for Construction, Oil &amp; Gas, Hospitality, or Industrial sectors — look no further. Send in a request and we&apos;ll get back to you within 24 Hours.
          </p>
          <Link
            href="/contactus"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              backgroundColor: "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <EmployerInquiryForm />
    </>
  );
}
