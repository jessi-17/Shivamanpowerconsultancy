"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

const milestones = [
  { year: "2002", title: "Journey Started" },
  { year: "2008", title: "Emigration Expertise" },
  { year: "2014", title: "Own Business" },
  { year: "2017", title: "Govt. Licensed" },
  { year: "2018", title: "Dubai Office" },
  { year: "2022", title: "ALMRA Member" },
];

const trustBadges = [
  { label: "Since 2002", color: "#facc15" },
  { label: "RA-1794 Licensed", color: "#60a5fa" },
  { label: "ALMRA Member", color: "#86efac" },
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
    <div ref={ref} style={{ backgroundColor: "#000c2f", padding: m ? "44px 0" : "48px 0", overflow: "hidden" }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto",
        padding: m ? "0 20px" : "0 var(--spacing-8)",
        display: "flex", alignItems: "center", gap: m ? 28 : 40,
        flexWrap: m ? "nowrap" : "wrap",
        flexDirection: m ? "column" : "row",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {/* Founder section — mobile-only stacked layout with larger image */}
        {m ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
            <div style={{
              width: 170, height: 170, borderRadius: "50%",
              overflow: "hidden", position: "relative", flexShrink: 0,
              border: "4px solid rgba(96,165,250,0.25)",
              boxShadow: "0 0 0 10px rgba(0,82,220,0.08), 0 14px 32px rgba(0,0,0,0.35)",
            }}>
              <Image src="/founder.webp" alt="Mr. Tarsem Lal - Founder of Shiva Travel & Manpower Consultants Nakodar" fill sizes="170px" loading="lazy"
                style={{ objectFit: "cover", objectPosition: "center top" }} />
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  style={{
                    padding: "5px 11px",
                    borderRadius: 999,
                    backgroundColor: `${b.color}1f`,
                    border: `1px solid ${b.color}40`,
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: b.color,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16,
              fontStyle: "italic", color: "rgba(255,255,255,0.85)",
              lineHeight: 1.55, maxWidth: 340,
            }}>
              &ldquo;I started Shiva with one rule — no fake promises. 23 years later, that&rsquo;s still the only rule.&rdquo;
            </p>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "#fff" }}>
                Mr. Tarsem Lal
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                Founder · Shiva Travel & Manpower Consultants
              </p>
            </div>

            {/* CTA: meet the founder / WhatsApp */}
            <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap", justifyContent: "center", maxWidth: "100%" }}>
              <a
                href="https://wa.me/919815358832?text=Hi%2C%20I%27d%20like%20to%20speak%20with%20Mr.%20Tarsem%20Lal%20about%20overseas%20jobs"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "11px 16px", borderRadius: 10,
                  backgroundColor: "#25D366", color: "#fff",
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Message Mr. Tarsem
              </a>
              <Link
                href="/about-us"
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "11px 16px", borderRadius: 10,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Read story →
              </Link>
            </div>
          </div>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", gap: 16,
            flex: "1 1 400px", minWidth: 0,
          }}>
            <div style={{
              width: 120, height: 120, borderRadius: "50%",
              overflow: "hidden", position: "relative", flexShrink: 0,
              border: "3px solid rgba(96,165,250,0.2)",
              boxShadow: "0 0 0 8px rgba(0,82,220,0.06)",
            }}>
              <Image src="/founder.webp" alt="Mr. Tarsem Lal - Founder of Shiva Travel & Manpower Consultants Nakodar" fill sizes="120px" loading="lazy"
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
        )}

        {/* Right — timeline dots inline */}
        <div style={{
          display: "flex", alignItems: "center", gap: 0,
          flex: m ? "0 0 auto" : "1 1 400px",
          width: m ? "100%" : undefined,
          minWidth: 0,
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
