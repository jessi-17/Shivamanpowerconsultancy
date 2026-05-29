"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import UnifiedContactForm from "@/components/own/UnifiedContactForm";

export default function ContactForm() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        maxWidth: 1088,
        margin: m ? "0 16px" : "0 auto",
        borderRadius: 24,
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 12px 48px rgba(0,12,47,0.12)",
      }}
    >
      {/* Left — dark side */}
      <div style={{
        flex: "1 1 400px",
        backgroundColor: "#000c2f",
        padding: m ? "32px 20px" : "48px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.18,
          backgroundImage: "url('/passport-documents-nakodar-office.webp')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.25,
          }}>
            Ready to Start?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6, marginBottom: 32, maxWidth: 340,
          }}>
            Book a free 1-on-1 session with our senior recruitment consultants. We&apos;ll
            assess your profile and suggest the best countries for you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>+91 98148-20432</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>info@shivatravelconsultant.in</span>
            </div>
          </div>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 32,
          }}>
            Visit us: Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div style={{ flex: "1 1 400px", backgroundColor: "#fff", padding: m ? "32px 20px" : "48px 40px" }}>
        <UnifiedContactForm
          source="homepage-footer"
          submitLabel="Request Call Back"
          posthogContext={{ source: "homepage_footer" }}
        />
      </div>
    </div>
  );
}
