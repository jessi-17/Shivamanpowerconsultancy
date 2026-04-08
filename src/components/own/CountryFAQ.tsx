"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
  countryName: string;
  faqs: { q: string; a: string }[];
}

export default function CountryFAQ({ countryName, faqs }: Props) {
  const ref = useScrollReveal();
  const m = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 16px" : "80px 0",
        backgroundColor: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: 768, margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: m ? 28 : 44 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", color: "var(--surface-tint)",
            textTransform: "uppercase", marginBottom: 10,
          }}>
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", lineHeight: 1.25,
          }}>
            Hiring Indian Workers for {countryName}
          </h2>
        </div>

        {/* FAQ items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: isOpen ? "#f8f9ff" : "#ffffff",
                  borderRadius: 12,
                  border: `1px solid ${isOpen ? "rgba(0,82,220,0.15)" : "rgba(0,0,0,0.06)"}`,
                  overflow: "hidden",
                  transition: "all 200ms ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    padding: m ? "14px 16px" : "18px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: m ? 14 : 15,
                    fontWeight: 600, color: "var(--on-surface)", lineHeight: 1.4,
                  }}>
                    {faq.q}
                  </span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="var(--on-surface-variant)" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div style={{
                    padding: m ? "0 16px 14px" : "0 24px 20px",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14,
                      color: "var(--on-surface-variant)", lineHeight: 1.7,
                    }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
