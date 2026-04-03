"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import industries from "../../../app/_lib/data/industriesweserve";

export default function IndustriesServed() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ padding: m ? "48px 20px" : "80px 0", backgroundColor: "var(--surface)" }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        <div style={{ textAlign: "center", marginBottom: m ? 32 : 48 }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            Sectors We Serve
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)",
            marginTop: 8, lineHeight: 1.25,
          }}>
            Manpower Solutions Across Key Industries
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15,
            color: "var(--on-surface-variant)", maxWidth: 560,
            margin: "12px auto 0", lineHeight: 1.6,
          }}>
            We supply skilled and semi-skilled workforce across the industries that drive your economy.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(4, 1fr)",
          gap: m ? 16 : 24,
        }}>
          {industries.map((ind) => (
            <div
              key={ind.id}
              style={{
                borderRadius: 16, overflow: "hidden",
                backgroundColor: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,12,47,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", width: "100%", height: m ? 160 : 180 }}>
                <Image
                  src={ind.src}
                  alt={ind.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: m ? "16px" : "20px" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                  color: "var(--on-surface)", marginBottom: 8,
                }}>
                  {ind.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13,
                  color: "var(--on-surface-variant)", lineHeight: 1.6,
                }}>
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
