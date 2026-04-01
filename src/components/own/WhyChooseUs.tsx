"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Zero Fraud Guarantee",
    desc: "Our processes are documented and verified at every step. We are government-licensed (RA B-1794) with zero fraud complaints in 25+ years.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "No Hidden Commissions",
    desc: "Total transparency in fee structures. We operate on an employer funded service model. Zero charges to candidates.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Expert Career Counseling",
    desc: "Personalized career roadmaps based on global market trends and your individual skill set. We place you where you'll succeed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Pre-Departure Training",
    desc: "Intensive orientation on cultural norms, labor laws, and work ethics of the destination country for a smooth transition.",
  },
];

const stats = [
  { num: "25+", label: "Years serving Punjab" },
  { num: "5,000+", label: "Workers placed" },
  { num: "Zero", label: "Fraud complaints" },
  { num: "3 Gen", label: "Families trust us" },
];

export default function WhyChooseUs() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const m = useIsMobile();

  return (
    <div style={{ padding: m ? "40px 0" : "80px 0", backgroundColor: "var(--surface-container-low)" }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)",
        display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap",
      }}>

        {/* Left — content */}
        <div ref={leftRef} className="reveal-left" style={{ flex: "1 1 480px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", marginBottom: 36, lineHeight: 1.25,
          }}>
            Why Families Across Punjab Choose Us for Overseas Recruitment
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: m ? 10 : 24 }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  display: "flex", gap: m ? 12 : 16, padding: m ? 10 : 16, borderRadius: 12,
                  transition: "background-color 200ms", cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,82,220,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: "rgba(0,82,220,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                    color: "var(--on-surface)", marginBottom: 4,
                  }}>{f.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14,
                    color: "var(--on-surface-variant)", lineHeight: 1.6,
                  }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contactus"
            style={{
              display: "inline-flex", alignItems: "center", padding: "14px 28px",
              backgroundColor: "#001f5d", color: "#fff",
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              borderRadius: 10, textDecoration: "none", marginTop: 32,
              transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,12,47,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Apply For Active Vacancies →
          </a>
        </div>

        {/* Right — image + stats card + certified badge */}
        <div ref={rightRef} className="reveal-right" style={{ flex: "1 1 400px", position: "relative" }}>
          <div style={{ width: "100%", height: m ? 280 : 480, borderRadius: 20, overflow: "hidden", position: "relative" }}>
            <Image src="/Professional Indian executive.png" alt="Professional workplace" fill style={{ objectFit: "cover" }} />
            {/* Certified Hub badge — overlaid on image */}
            {!m && (
              <div style={{
                position: "absolute", top: 24, left: -16,
                backgroundColor: "#fff", borderRadius: 16, padding: "16px 20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)", maxWidth: 240, zIndex: 2,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0052dc" stroke="#0052dc" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" stroke="#fff" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--on-surface)" }}>
                    MEA Licensed
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--on-surface-variant)", lineHeight: 1.5 }}>
                  RA B-1794/PUN/2022, Ministry of External Affairs, Govt. of India
                </p>
              </div>
            )}
          </div>

          {/* Stats — on mobile: inline grid below image. On desktop: floating card */}
          {m ? (
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16,
            }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  padding: "14px 16px", borderRadius: 12,
                  backgroundColor: "#001f5d",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
                    color: "#60a5fa", display: "block", marginBottom: 2,
                  }}>{stat.num}</span>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 12,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.4,
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              position: "absolute", bottom: -20, right: -16,
              width: 300, backgroundColor: "#001f5d", borderRadius: 16, padding: "22px 20px",
              display: "flex", flexDirection: "column", gap: 14,
              boxShadow: "0 16px 48px rgba(0,12,47,0.3)", zIndex: 2,
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#ffffff",
              }}>
                Our track record
              </p>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  borderTop: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  paddingTop: i > 0 ? 12 : 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
                    color: "#60a5fa", minWidth: 64,
                  }}>{stat.num}</span>
                  <span style={{
                    fontFamily: "var(--font-body)", fontSize: 12,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.4,
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
