import Link from "next/link";

type VisaSlug =
  | "uae"
  | "saudi-arabia"
  | "qatar"
  | "kuwait"
  | "bahrain"
  | "romania"
  | "poland"
  | "croatia"
  | "schengen";

type Region = "gulf" | "europe";

const visaInfo: Record<VisaSlug, { name: string; region: Region; desc: string }> = {
  uae: { name: "UAE / Dubai Visa", region: "gulf", desc: "Construction, hospitality, driving & factory work permits." },
  "saudi-arabia": { name: "Saudi Arabia Visa", region: "gulf", desc: "NEOM, oil & gas, welding, electrical & construction." },
  qatar: { name: "Qatar Visa", region: "gulf", desc: "Construction, transport, maintenance & hospitality." },
  kuwait: { name: "Kuwait Visa", region: "gulf", desc: "Skilled trades, oil & gas, hospitality & retail." },
  bahrain: { name: "Bahrain Visa", region: "gulf", desc: "Construction, hospitality & service-sector roles." },
  romania: { name: "Romania Visa", region: "europe", desc: "Construction, manufacturing & industrial work permits." },
  poland: { name: "Poland Visa", region: "europe", desc: "Factory, food processing, packaging & agriculture." },
  croatia: { name: "Croatia Visa", region: "europe", desc: "Skilled & semi-skilled — construction & tourism." },
  schengen: { name: "Schengen Visa", region: "europe", desc: "27 Schengen countries — tourist, business & work." },
};

export default function RelatedVisas({ currentSlug }: { currentSlug: VisaSlug }) {
  const region = visaInfo[currentSlug].region;
  const related = (Object.entries(visaInfo) as [VisaSlug, typeof visaInfo[VisaSlug]][])
    .filter(([slug, info]) => slug !== currentSlug && info.region === region);

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 10 }}>
            Related {region === "gulf" ? "Gulf" : "European"} Visas
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#43474d", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
            Explore other {region === "gulf" ? "Gulf" : "European"} work visa options we process from Punjab.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {related.map(([slug, info]) => (
            <Link
              key={slug}
              href={`/visa/${slug}`}
              style={{ display: "block", backgroundColor: "#ffffff", borderRadius: 12, padding: 20, border: "1px solid #e5e7eb", textDecoration: "none" }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 6 }}>
                {info.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.5, marginBottom: 10 }}>
                {info.desc}
              </p>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#0052dc" }}>
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/punjab" style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "#0052dc", textDecoration: "none" }}>
            See all visa services for Punjab &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
