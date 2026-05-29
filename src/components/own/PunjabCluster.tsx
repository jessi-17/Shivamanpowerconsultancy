import Link from "next/link";

type Slug = "punjab" | "nakodar" | "jalandhar" | "kapurthala" | "phagwara" | "hoshiarpur" | "nawanshahr";

const allLocations: { slug: Slug; name: string; desc: string; href: string; featured?: boolean }[] = [
  { slug: "punjab", name: "All of Punjab", desc: "Our state-wide flagship — best travel agent, immigration & manpower consultancy in Punjab.", href: "/punjab", featured: true },
  { slug: "nakodar", name: "Nakodar (Head Office)", desc: "Golden Avenue, Jalandhar Road — walk-in Mon–Sat.", href: "/nakodar" },
  { slug: "jalandhar", name: "Jalandhar", desc: "20 min from our Nakodar office. Serving Kartarpur, Phillaur, Nurmahal.", href: "/jalandhar" },
  { slug: "kapurthala", name: "Kapurthala", desc: "Trusted by Sultanpur Lodhi, Bholath families since 2002.", href: "/kapurthala" },
  { slug: "phagwara", name: "Phagwara", desc: "Serving Phagwara, Banga, Goraya for overseas placements.", href: "/phagwara" },
  { slug: "hoshiarpur", name: "Hoshiarpur", desc: "Dasuya, Mukerian & Mahilpur — Europe & Gulf jobs.", href: "/hoshiarpur" },
  { slug: "nawanshahr", name: "Nawanshahr (SBS Nagar)", desc: "Banga, Balachaur, Garhshankar overseas placements.", href: "/nawanshahr" },
];

export default function PunjabCluster({ currentSlug }: { currentSlug: Slug }) {
  const locations = allLocations.filter((l) => l.slug !== currentSlug);

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
            Punjab&apos;s Best Recruitment Agency — Serving All of Doaba
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
            Headquartered in Nakodar, we serve workers from across Punjab. Explore our other service locations or visit our state-wide page.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={l.href}
              style={{
                display: "block",
                backgroundColor: l.featured ? "#001f5d" : "#ffffff",
                borderRadius: 16,
                padding: 28,
                border: l.featured ? "none" : "1px solid #e8ecf3",
                boxShadow: l.featured ? "0 12px 28px rgba(0,31,93,0.18)" : "0 1px 2px rgba(11,28,48,0.04)",
                textDecoration: "none",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: l.featured ? "#fff" : "#0b1c30", marginBottom: 6 }}>
                {l.name}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: l.featured ? "rgba(255,255,255,0.7)" : "#43474d", lineHeight: 1.5, marginBottom: 12 }}>
                {l.desc}
              </p>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: l.featured ? "#60a5fa" : "#0052dc" }}>
                Visit Page &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
