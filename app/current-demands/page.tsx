import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Current Job Openings | Overseas Opportunities for Indian Workers",
  description:
    "Browse current overseas job openings in UAE, Saudi Arabia, Qatar, Poland, Romania. Apply through Shiva Travel & Manpower Consultants. Zero fees.",
};

export default function CurrentDemands() {
  return (
    <>
      <main>
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
          <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20,
            }}>
              Current Opportunities
            </h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, marginBottom: 32,
            }}>
              We are currently updating our job listings. Contact us directly for the latest openings.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/919814820432" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-block", padding: "14px 36px", backgroundColor: "#fff",
                color: "var(--primary)", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                WhatsApp Us
              </a>
              <Link href="/contactus" style={{
                display: "inline-block", padding: "14px 36px",
                backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff", fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 700, borderRadius: 10, textDecoration: "none",
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
