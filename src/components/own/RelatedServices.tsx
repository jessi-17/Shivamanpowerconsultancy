import Link from "next/link";

type ServiceSlug = "e-migrate" | "document-attestation" | "gamca-medical" | "passport-assistance" | "embassy-coordination" | "pre-departure-briefing";

const relatedLinks: Record<ServiceSlug, { name: string; href: string; desc: string }[]> = {
  "gamca-medical": [
    { name: "UAE Work Visa", href: "/visa/uae", desc: "GAMCA medical required for UAE employment visa." },
    { name: "Saudi Arabia Visa", href: "/visa/saudi-arabia", desc: "Mandatory medical clearance for Saudi work permits." },
    { name: "Qatar Visa", href: "/visa/qatar", desc: "GAMCA-approved testing for Qatar employment." },
    { name: "Kuwait & Bahrain Visa", href: "/visa/kuwait", desc: "GCC medical certification for all Gulf visas." },
    { name: "E-Migrate Registration", href: "/services/e-migrate", desc: "Pair medical with E-Migrate clearance." },
  ],
  "e-migrate": [
    { name: "UAE Work Visa", href: "/visa/uae", desc: "E-Migrate required for ECR passport-holders going to UAE." },
    { name: "Saudi Arabia Visa", href: "/visa/saudi-arabia", desc: "E-Migrate clearance is mandatory for Saudi work." },
    { name: "Qatar & Kuwait Visa", href: "/visa/qatar", desc: "Gulf work visas need POE clearance via E-Migrate." },
    { name: "GAMCA Medical", href: "/services/gamca-medical", desc: "Required Gulf medical examination — pair with E-Migrate." },
    { name: "Document Attestation", href: "/services/document-attestation", desc: "MEA-attested docs needed before E-Migrate filing." },
  ],
  "document-attestation": [
    { name: "Romania Visa", href: "/visa/romania", desc: "Attested degree/marriage certificates required." },
    { name: "Poland Visa", href: "/visa/poland", desc: "Apostille for educational documents." },
    { name: "Saudi Arabia Visa", href: "/visa/saudi-arabia", desc: "Embassy attestation for all Saudi visas." },
    { name: "UAE Work Visa", href: "/visa/uae", desc: "MOFA-attested certificates for UAE." },
    { name: "E-Migrate Registration", href: "/services/e-migrate", desc: "Attested docs feed into E-Migrate." },
  ],
  "passport-assistance": [
    { name: "All Visa Services", href: "/services", desc: "Valid passport is the first step for any overseas job." },
    { name: "Document Attestation", href: "/services/document-attestation", desc: "Often paired with passport renewal." },
    { name: "E-Migrate Registration", href: "/services/e-migrate", desc: "Passport details needed for emigration clearance." },
  ],
  "embassy-coordination": [
    { name: "Romania Visa", href: "/visa/romania", desc: "Embassy interview & document submission." },
    { name: "Schengen Visa", href: "/visa/schengen", desc: "Schengen embassy appointment coordination." },
    { name: "UAE Visa Stamping", href: "/visa/uae", desc: "UAE consulate document handling." },
    { name: "Pre-Departure Briefing", href: "/services/pre-departure-briefing", desc: "After embassy approval, prepare for departure." },
  ],
  "pre-departure-briefing": [
    { name: "All Gulf Visas", href: "/visa/uae", desc: "Country laws, rights & work expectations." },
    { name: "Europe Work Permits", href: "/visa/romania", desc: "EU labour rights & cultural orientation." },
    { name: "Current Demands", href: "/current-demands", desc: "See open positions for your destination." },
  ],
};

export default function RelatedServices({ currentSlug }: { currentSlug: ServiceSlug }) {
  const items = relatedLinks[currentSlug];
  if (!items) return null;

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>
            Related Visas & Services
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
            Pair this with the visas and services it typically goes with — Punjab&apos;s best one-stop overseas recruitment agency.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb", textDecoration: "none" }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 6 }}>
                {item.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.5, marginBottom: 10 }}>
                {item.desc}
              </p>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#0052dc" }}>
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/punjab" style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc", textDecoration: "none" }}>
            See all services for Punjab &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
