"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import EmployerQuoteForm from "./EmployerQuoteForm";

export default function EmployerInquiryForm() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      id="inquiry-form-bottom"
      ref={ref}
      className="reveal"
      style={{
        maxWidth: 1088,
        margin: m ? "40px 16px" : "80px auto",
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
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15,
          backgroundImage: "url('/office image .webp')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.25,
          }}>
            Partner With Us
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6, marginBottom: 32, maxWidth: 340,
          }}>
            Tell us about your manpower needs and our team will create a customized
            recruitment plan for your organization within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              "Free consultation & manpower audit",
              "Customized recruitment plan within 24 hours",
              "Dedicated account manager assigned",
              "Full compliance & documentation support",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  backgroundColor: "rgba(96,165,250,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>+91 98148-20432</span>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div style={{ flex: "1 1 400px", backgroundColor: "#fff", padding: m ? "32px 20px" : "48px 40px" }}>
        <EmployerQuoteForm />
      </div>
    </div>
  );
}
