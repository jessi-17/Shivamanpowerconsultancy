import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories | Workers Placed by Shiva Travel & Manpower Consultants",
  description:
    "Real success stories from workers placed overseas by Shiva Travel & Manpower Consultants Nakodar. Read testimonials from workers in UAE, Saudi Arabia, Qatar, Poland, Romania.",
};

const stories = [
  {
    name: "Harnek Singh",
    from: "Nakodar, Punjab",
    destination: "Bulgaria",
    role: "Factory Worker",
    year: "2024",
    quote: "I was working in a local shop earning ₹12,000/month. Shiva Travel helped me get a factory job in Bulgaria. Now I earn 5x more and my family's life has completely changed. My children go to a good school now.",
    highlight: "5x salary increase",
  },
  {
    name: "Gurpreet Singh",
    from: "Kapurthala, Punjab",
    destination: "Dubai, UAE",
    role: "Electrician",
    year: "2023",
    quote: "I was skeptical about agencies because I heard bad stories. But Shiva Travel didn't charge me a single rupee. They helped with everything — passport, medical, visa. I've been working in Dubai for over a year now and I'm very happy.",
    highlight: "Zero fees paid",
  },
  {
    name: "Manpreet Kaur",
    from: "Nawanshahr, Punjab",
    destination: "Poland",
    role: "Food Processing Worker",
    year: "2024",
    quote: "As a woman, I was worried about going abroad alone. The team at Shiva Travel explained everything about Poland — the laws, my rights, accommodation. They even connected me with other Punjabi women already working there. I feel safe and confident.",
    highlight: "Women-friendly placement",
  },
  {
    name: "Rajveer Singh",
    from: "Jalandhar, Punjab",
    destination: "Saudi Arabia",
    role: "Welder (NEOM Project)",
    year: "2024",
    quote: "I'm working on the NEOM mega project in Saudi Arabia. The salary is great — SAR 4,500/month with free food and accommodation. Shiva Travel matched me with the right employer. The interview was smooth and visa came in 3 weeks.",
    highlight: "NEOM mega project",
  },
  {
    name: "Amrit Pal",
    from: "Hoshiarpur, Punjab",
    destination: "Qatar",
    role: "Heavy Vehicle Driver",
    year: "2023",
    quote: "I had my heavy vehicle license but couldn't find good-paying work in India. Through Shiva Travel, I got a driving job in Doha. QAR 3,500/month with overtime. I've already saved enough to buy land back home.",
    highlight: "Bought land back home",
  },
  {
    name: "Sukhwinder Singh",
    from: "Nakodar, Punjab",
    destination: "Romania",
    role: "Construction Worker",
    year: "2024",
    quote: "Romania wasn't my first choice — I wanted Dubai. But the team convinced me to try Europe. Best decision ever. I have an EU work permit now, I can travel across Europe on weekends, and the work-life balance is amazing.",
    highlight: "EU work permit",
  },
  {
    name: "Jaspreet Singh",
    from: "Phagwara, Punjab",
    destination: "Dubai, UAE",
    role: "Chef at 5-Star Hotel",
    year: "2023",
    quote: "I was a cook at a local dhaba. Shiva Travel helped me get a chef position at a 5-star hotel in Dubai. The training I've received here is world-class. I'm now planning to open my own restaurant when I return.",
    highlight: "Dhaba cook to 5-star chef",
  },
  {
    name: "Balwinder Kaur",
    from: "Nakodar, Punjab",
    destination: "Poland",
    role: "Packaging Operator",
    year: "2024",
    quote: "My husband works in Poland too — he went through Shiva Travel first, then helped me apply. Now we both work in the same city. The agency helped with both our visas and made sure we got placement nearby.",
    highlight: "Family placement",
  },
];

const stats = [
  { number: "5,000+", label: "Workers Placed" },
  { number: "12+", label: "Countries" },
  { number: "25+", label: "Years Experience" },
  { number: "0", label: "Fees Charged" },
];

export default function SuccessStories() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{
          background: "linear-gradient(135deg, var(--primary) 0%, #0052dc 100%)",
          padding: "160px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.05,
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
          <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.15em", color: "#60a5fa", textTransform: "uppercase", marginBottom: 16,
            }}>
              REAL PEOPLE. REAL RESULTS.
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Success Stories
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 560, margin: "0 auto",
            }}>
              Hear from workers who found their future through Shiva Travel & Manpower Consultants.
              These are real placements, real stories, from real people in Punjab.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "48px 24px", backgroundColor: "var(--surface-container-low)" }}>
          <div style={{
            maxWidth: 800, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center",
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 800, color: "var(--surface-tint)",
                }}>{s.number}</p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13, color: "var(--on-surface-variant)",
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories */}
        <section style={{ padding: "60px 24px 80px", backgroundColor: "var(--surface)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24,
            }}>
              {stories.map((s) => (
                <div key={s.name} style={{
                  padding: 28, borderRadius: 16,
                  backgroundColor: "var(--surface-container-lowest)",
                  border: "1px solid var(--outline-variant)",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{
                    display: "inline-block", alignSelf: "flex-start",
                    padding: "3px 10px", borderRadius: 12, marginBottom: 14,
                    backgroundColor: "var(--surface-container)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700,
                      color: "var(--surface-tint)",
                    }}>{s.highlight}</span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface-variant)",
                    lineHeight: 1.8, flex: 1, marginBottom: 20,
                    fontStyle: "italic",
                  }}>
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <div style={{ borderTop: "1px solid var(--outline-variant)", paddingTop: 14 }}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                      color: "var(--on-surface)",
                    }}>{s.name}</p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)",
                    }}>
                      {s.role} — {s.destination} ({s.year})
                    </p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)",
                    }}>
                      From: {s.from}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: "80px 24px",
          background: "linear-gradient(135deg, var(--primary), #0052dc)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700, color: "#fff", marginBottom: 16,
            }}>
              Your Story Could Be Next
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              Join thousands from Punjab who found their future through us. Visit our office at Golden Avenue, Nakodar
              or call us today. Zero fees. Government licensed.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Contact Us
              </Link>
              <Link href="/current-demands" style={{
                display: "inline-block", padding: "14px 36px",
                backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                View Open Positions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
