"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { partnerBenefits } from "../../../app/_lib/data/employers";

const icons = [
  // Shield - Licensed
  <svg key="shield" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Heart - Ethical
  <svg key="heart" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  // Briefcase - Support
  <svg key="briefcase" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  // Check circle - Verified
  <svg key="check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  // Users - Scalable
  <svg key="users" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  // File text - Compliance
  <svg key="file" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
];

export default function WhyPartnerWithUs() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 20px" : "80px 0",
        backgroundColor: "var(--surface-container-low)",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        <div style={{ textAlign: "center", marginBottom: m ? 32 : 48 }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            Why Partner With Us
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)",
            marginTop: 8, lineHeight: 1.25,
          }}>
            Built for Employer Confidence
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
          gap: m ? 16 : 24,
        }}>
          {partnerBenefits.map((b, i) => (
            <div
              key={b.title}
              style={{
                padding: m ? 20 : 28,
                backgroundColor: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,12,47,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                backgroundColor: "rgba(0,82,220,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                {icons[i]}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "var(--on-surface)", marginBottom: 8,
              }}>
                {b.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--on-surface-variant)", lineHeight: 1.6,
              }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
