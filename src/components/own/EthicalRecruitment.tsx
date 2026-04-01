"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "No Hidden Commissions",
    desc: "Total transparency in fee structures. We operate based on employer service models to reduce the burden on workers.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Skill-Based Counseling",
    desc: "Personalized career roadmaps. We don't just send you abroad, we place you where you'll succeed and grow.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Pre-Departure Orientation",
    desc: "Intensive cultural and legal training to ensure a smooth transition into your new international workplace.",
  },
];

export default function EthicalRecruitment() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".ethic-item");
    gsap.fromTo(items,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
    gsap.fromTo(ref.current.querySelector(".ethic-image"),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "var(--surface-container-low)",
        padding: "80px 0",
      }}
    >
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)",
        display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap",
      }}>
        {/* Left — text content */}
        <div style={{ flex: "1 1 480px" }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)", marginBottom: 36, lineHeight: 1.25,
          }}>
            Setting New Standards in<br />Ethical Recruitment from Nakodar
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {features.map((f) => (
              <div
                key={f.title}
                className="ethic-item"
                style={{
                  display: "flex",
                  gap: 16,
                  cursor: "default",
                  padding: 16,
                  borderRadius: 12,
                  transition: "background-color 200ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0,82,220,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: "rgba(0,82,220,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
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
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              backgroundColor: "#001f5d",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              borderRadius: 10,
              textDecoration: "none",
              marginTop: 32,
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

        {/* Right — image + certified card */}
        <div className="ethic-image" style={{ flex: "1 1 400px", position: "relative", minHeight: 480 }}>
          <div style={{
            width: "100%", height: 480, borderRadius: 20, overflow: "hidden", position: "relative",
          }}>
            <Image src="/Professional Indian executive.webp" alt="Professional workplace" fill sizes="(max-width: 640px) 100vw, 45vw" loading="lazy" style={{ objectFit: "cover" }} />
          </div>
          {/* Floating "Certified Hub" card */}
          <div style={{
            position: "absolute", bottom: 24, left: -20,
            backgroundColor: "#fff", borderRadius: 16, padding: "20px 24px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)", maxWidth: 260,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0052dc" stroke="#0052dc" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" stroke="#fff" />
              </svg>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--on-surface)" }}>
                Certified Hub
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)", lineHeight: 1.5 }}>
              Official Registration: RA B-1794/PUN/2022. Recognized as a Top Employer Service in the North Region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
