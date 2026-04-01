"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

const milestones = [
  { year: "2002", title: "Govt. Licensed" },
  { year: "2008", title: "ALMRA Member" },
  { year: "2015", title: "Gulf & Europe" },
  { year: "2022", title: "License Renewed" },
  { year: "Now", title: "5,000+ Placed" },
];

export default function FounderTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const m = useIsMobile();

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
  }, []);

  return (
    <div ref={ref} style={{ backgroundColor: "#000c2f", padding: "48px 0" }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: "0 var(--spacing-8)",
        display: "flex", alignItems: "center", gap: 40,
        flexWrap: "wrap",
      }}>
        {/* Left — founder quote */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          flex: "1 1 400px", minWidth: 0,
        }}>
          <div style={{
            width: m ? 72 : 120, height: m ? 72 : 120, borderRadius: "50%",
            overflow: "hidden", position: "relative", flexShrink: 0,
            border: "3px solid rgba(96,165,250,0.2)",
            boxShadow: "0 0 0 8px rgba(0,82,220,0.06)",
          }}>
            <Image src="/founder.jpeg" alt="Mr. Tarsem Lal" fill
              style={{ objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              fontStyle: "italic", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5, marginBottom: 6,
            }}>
              &ldquo;Bring integrity to recruitment. That was the only goal.&rdquo;
            </p>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff",
            }}>
              Mr. Tarsem Lal
              <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.4)", marginLeft: 6 }}>
                Founder
              </span>
            </p>
          </div>
        </div>

        {/* Right — timeline dots inline */}
        <div style={{
          display: "flex", alignItems: "center", gap: 0,
          flex: "1 1 400px", minWidth: 0,
          overflowX: m ? "auto" : "visible",
          paddingBottom: m ? 4 : 0,
        }}>
          {milestones.map((ms, i) => {
            const isLast = i === milestones.length - 1;
            return (
              <div key={ms.year} style={{ display: "flex", alignItems: "center", flex: m ? "0 0 auto" : 1, minWidth: m ? 64 : undefined }}>
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  position: "relative",
                }}>
                  <p style={{
                    fontFamily: "var(--font-display)",
                    fontSize: isLast ? 15 : 13,
                    fontWeight: 700,
                    color: isLast ? "#60a5fa" : "rgba(255,255,255,0.55)",
                  }}>
                    {ms.year}
                  </p>
                  <div style={{
                    width: isLast ? 10 : 6,
                    height: isLast ? 10 : 6,
                    borderRadius: "50%",
                    backgroundColor: isLast ? "#0052dc" : "rgba(96,165,250,0.3)",
                    boxShadow: isLast ? "0 0 8px rgba(0,82,220,0.4)" : "none",
                  }} />
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 10,
                    color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap",
                  }}>
                    {ms.title}
                  </p>
                </div>
                {i < milestones.length - 1 && (
                  <div style={{
                    flex: m ? "0 0 24px" : 1, height: 1,
                    backgroundColor: "rgba(96,165,250,0.12)",
                    margin: "0 4px", marginTop: -2,
                    width: m ? 24 : undefined,
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
