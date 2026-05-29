import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import SlimHero from "@/components/own/SlimHero";

export const metadata: Metadata = {
  title: { absolute: "Overseas Job Guides for Indian Workers | Shiva Travel" },
  description:
    "In-depth guides on overseas recruitment, work visa processes, GAMCA medical, E-Migrate clearance, and how to verify govt-licensed RA agencies. Authoritative content for Indian workers seeking jobs in UAE, Saudi, Qatar, Poland, Romania.",
  alternates: { canonical: "/guides" },
};

const guides = [
  {
    slug: "how-to-verify-licensed-ra-agency",
    title: "How to Verify a Govt-Licensed RA Agency in India",
    description:
      "Step-by-step guide to verify any overseas recruitment agent's MEA license on the official eMigrate portal. Avoid fraud — check before you pay.",
    readTime: "8 min read",
    category: "Trust & Verification",
  },
  {
    slug: "work-visa-comparison",
    title: "Romania vs Poland vs UAE — Complete Work Visa Comparison",
    description:
      "Side-by-side comparison of work visa salaries, timelines, requirements, accommodation, and contract terms across Gulf and European countries.",
    readTime: "12 min read",
    category: "Country Comparison",
  },
  {
    slug: "gamca-medical-test",
    title: "GAMCA Medical Test — Complete Guide for Indian Workers",
    description:
      "Full procedure of GCC Approved Medical Centres Association examination. What to expect, costs, common rejection reasons, how to prepare, approved centres in Punjab.",
    readTime: "10 min read",
    category: "Process Guide",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Overseas Job Guides for Indian Workers",
  description:
    "Authoritative guides on overseas recruitment, work visas, and emigration processes for Indian workers.",
  url: "https://shivatravelconsultant.in/guides",
  about: { "@id": "https://shivatravelconsultant.in/#organization" },
  publisher: { "@id": "https://shivatravelconsultant.in/#organization" },
  hasPart: guides.map((g) => ({
    "@type": "Article",
    headline: g.title,
    url: `https://shivatravelconsultant.in/guides/${g.slug}`,
  })),
};

export default function GuidesIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ])) }}
      />

      <main style={{ backgroundColor: "#f8f9ff", minHeight: "100vh" }}>
        <SlimHero
          kicker="Authoritative Guides"
          title="Overseas job guides for Indian workers."
          highlight="for Indian workers."
          description="Deep, fact-based guides on overseas recruitment, work visas, GAMCA medical, and licensing verification — written by Punjab's most experienced govt-licensed manpower consultancy."
        />

        <section style={{ padding: "0 0 80px", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 32px", display: "flex", flexDirection: "column", gap: 20 }}>
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb", textDecoration: "none" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase" }}>{g.category}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#64748b" }}>• {g.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "#0b1c30", marginBottom: 10, lineHeight: 1.3 }}>
                  {g.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6, marginBottom: 16 }}>
                  {g.description}
                </p>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc" }}>
                  Read the Guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
