"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { recruitmentSteps } from "../../../app/_lib/data/employers";

export default function RecruitmentProcess() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 20px" : "80px 0",
        backgroundColor: "#000c2f",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        <div style={{ textAlign: "center", marginBottom: m ? 32 : 56 }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            color: "#60a5fa", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            How It Works
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "#fff",
            marginTop: 8, lineHeight: 1.25,
          }}>
            Simple, Transparent Recruitment Process
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15,
            color: "rgba(255,255,255,0.6)", maxWidth: 520,
            margin: "12px auto 0", lineHeight: 1.6,
          }}>
            From your first call to worker deployment — here&apos;s how we deliver.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)",
          gap: m ? 16 : 24,
        }}>
          {recruitmentSteps.map((step, i) => (
            <div
              key={step.number}
              style={{
                position: "relative",
                padding: m ? 20 : 28,
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{
                fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 800,
                color: "rgba(96,165,250,0.15)", position: "absolute", top: 12, right: 16,
              }}>
                {step.number}
              </span>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                backgroundColor: "rgba(0,82,220,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#60a5fa",
                }}>
                  {step.number}
                </span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#fff", marginBottom: 8,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,0.6)", lineHeight: 1.6,
              }}>
                {step.desc}
              </p>
              {/* Connector line (desktop only) */}
              {!m && i < recruitmentSteps.length - 1 && (
                <div style={{
                  position: "absolute", top: "50%", right: -12,
                  width: 24, height: 2,
                  backgroundColor: "rgba(96,165,250,0.2)",
                  zIndex: 1,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
