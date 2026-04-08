import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { employerCountries, getCountryBySlug } from "../../_lib/data/employerCountries";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import CountryEmployerHero from "@/components/own/CountryEmployerHero";

const CountryCompliance = dynamic(() => import("@/components/own/CountryCompliance"));
const CountryFAQ = dynamic(() => import("@/components/own/CountryFAQ"));
const WhyPartnerWithUs = dynamic(() => import("@/components/own/WhyPartnerWithUs"));
const RecruitmentProcess = dynamic(() => import("@/components/own/RecruitmentProcess"));
const WhyChooseUs = dynamic(() => import("@/components/own/WhyChooseUs"));
const ClientVideos = dynamic(() => import("@/components/own/ClientVideos"));

export function generateStaticParams() {
  return employerCountries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/employers/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://shivatravelconsultant.in/employers/${data.slug}`,
      type: "website",
    },
  };
}

// Industry icon map
function IndustryIcon({ type }: { type: string }) {
  const s = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "#0052dc", strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "building":
      return <svg {...s}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" /></svg>;
    case "oil":
      return <svg {...s}><path d="M2 22L16 8" /><path d="m3.47 12.53 5 5" /><path d="m7.5 10.5 2 2" /><circle cx="18" cy="6" r="3" /></svg>;
    case "hotel":
      return <svg {...s}><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" /><circle cx="12" cy="11" r="2" /></svg>;
    case "factory":
      return <svg {...s}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>;
    case "retail":
      return <svg {...s}><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>;
    case "truck":
      return <svg {...s}><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>;
    case "healthcare":
      return <svg {...s}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>;
    default:
      return <svg {...s}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>;
  }
}

export default async function EmployerCountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "For Employers", href: "/employers" },
    { name: `Hire Workers for ${data.name}`, href: `/employers/${data.slug}` },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Indian Worker Recruitment for ${data.fullName}`,
    description: data.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
      url: "https://shivatravelconsultant.in",
    },
    areaServed: { "@type": "Country", name: data.fullName },
    serviceType: "Recruitment / Manpower Supply",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. Hero with embedded form */}
      <CountryEmployerHero
        name={data.name}
        fullName={data.fullName}
        flag={data.flag}
        heroHeadline={data.heroHeadline}
        heroSubtext={data.heroSubtext}
        stats={data.stats}
        defaultCountry={data.name}
      />

      {/* 2. Industries section */}
      <IndustriesSection data={data} />

      {/* 3. Why Partner With Us (reused) */}
      <WhyPartnerWithUs />

      {/* 4. Compliance */}
      <CountryCompliance countryName={data.name} points={data.compliancePoints} />

      {/* 5. Recruitment Process (reused) */}
      <RecruitmentProcess />

      {/* 6. Why Choose Us / Our Values (reused) */}
      <WhyChooseUs />

      {/* 7. Instagram Videos (reused) */}
      <ClientVideos />

      {/* 8. FAQ */}
      <CountryFAQ countryName={data.name} faqs={data.faqs} />

      {/* 9. Related pages */}
      {(data.relatedVisaPage || data.relatedJobsPage) && (
        <RelatedPages data={data} />
      )}

      {/* 10. Bottom CTA */}
      <BottomCTA countryName={data.name} />
    </>
  );
}

/* ─── Inline sub-components ─── */

function IndustriesSection({ data }: { data: ReturnType<typeof getCountryBySlug> & {} }) {
  return (
    <div style={{ padding: "80px 0", backgroundColor: "var(--surface)" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", color: "var(--surface-tint)",
            textTransform: "uppercase", marginBottom: 10,
          }}>
            INDUSTRIES WE SERVE IN {data.name.toUpperCase()}
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", lineHeight: 1.25,
            maxWidth: 600, margin: "0 auto",
          }}>
            Skilled Workers for Every {data.name} Industry
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}>
          {data.topIndustries.map((ind) => (
            <div
              key={ind.title}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: 16,
                padding: "28px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 200ms ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  backgroundColor: "rgba(0,82,220,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <IndustryIcon type={ind.icon} />
                </div>
                {ind.workerCount && (
                  <span style={{
                    padding: "4px 12px", borderRadius: 999,
                    backgroundColor: "rgba(0,82,220,0.08)",
                    fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                    color: "#0052dc",
                  }}>
                    {ind.workerCount} placed
                  </span>
                )}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                color: "var(--on-surface)", marginBottom: 8,
              }}>
                {ind.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--on-surface-variant)", lineHeight: 1.6,
              }}>
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RelatedPages({ data }: { data: ReturnType<typeof getCountryBySlug> & {} }) {
  const links = [
    data.relatedVisaPage && {
      href: data.relatedVisaPage,
      title: `${data.name} Visa Process`,
      desc: `Complete visa requirements, documentation, and processing guide for ${data.name}.`,
    },
    data.relatedJobsPage && {
      href: data.relatedJobsPage,
      title: `Jobs in ${data.name}`,
      desc: `Current job openings and career opportunities for workers in ${data.name}.`,
    },
  ].filter(Boolean) as { href: string; title: string; desc: string }[];

  return (
    <div style={{ padding: "60px 0", backgroundColor: "#f8f9ff" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
          fontWeight: 700, color: "var(--on-surface)", marginBottom: 24,
          textAlign: "center",
        }}>
          Related Resources for {data.name}
        </h2>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                flex: "1 1 280px", maxWidth: 380,
                backgroundColor: "#ffffff", borderRadius: 16, padding: "24px",
                border: "1px solid rgba(0,0,0,0.06)",
                textDecoration: "none",
                transition: "all 200ms ease",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#0052dc", marginBottom: 8,
              }}>
                {link.title} &rarr;
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--on-surface-variant)", lineHeight: 1.6,
              }}>
                {link.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomCTA({ countryName }: { countryName: string }) {
  return (
    <div style={{
      padding: "80px 0",
      background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 800, color: "#ffffff", lineHeight: 1.2, marginBottom: 16,
        }}>
          Ready to Hire Skilled Workers for {countryName}?
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 16,
          color: "#b4c5ff", lineHeight: 1.6, marginBottom: 32,
        }}>
          Get a free consultation and customized recruitment plan. No obligation, no hidden fees.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#inquiry-form"
            style={{
              padding: "16px 36px", backgroundColor: "#0052dc", color: "#fff",
              fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
              borderRadius: 12, textDecoration: "none",
              boxShadow: "0 0 20px rgba(0,82,220,0.5)",
              transition: "all 150ms ease",
            }}
          >
            Get Free Quote
          </a>
          <a
            href="tel:+919814820432"
            style={{
              padding: "16px 36px",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "#fff",
              fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
              borderRadius: 12, textDecoration: "none",
              transition: "all 150ms ease",
            }}
          >
            Call: +91 98148-20432
          </a>
        </div>
      </div>
    </div>
  );
}
