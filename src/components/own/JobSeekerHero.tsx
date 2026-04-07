"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import gsap from "gsap";

export default function JobSeekerHero() {
  const m = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".js-hero-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.12,
      ease: "power3.out", delay: 0.2,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));
      contentRef.current.style.opacity = `${1 - scrollProgress * 1.5}`;
      contentRef.current.style.transform = `translateY(${scrollProgress * -40}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      data-navbar-theme="dark"
      style={{
        position: "relative", width: "100%",
        minHeight: m ? "auto" : "85vh",
        display: "flex", alignItems: "center",
        overflow: "hidden", backgroundColor: "#001f5d",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/Hero Section.webp" alt="" fill priority sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.25, mixBlendMode: "overlay" }}
        />
      </div>

      {/* Gradient */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(90deg, rgba(0,12,47,1) 0%, rgba(0,12,47,0.8) 40%, rgba(0,12,47,0) 55%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative", zIndex: 3, width: "100%",
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: m ? "120px 20px 60px" : "140px 60px 80px",
        }}
      >
        <div style={{ maxWidth: 700, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Badge */}
          <div className="js-hero-animate">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999,
              backgroundColor: "rgba(0,82,220,0.25)",
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", color: "#bfdbfe",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", backgroundColor: "#60a5fa",
                display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              MINIMAL CHARGES &bull; NO HIDDEN FEES &bull; 100% TRANSPARENT
            </span>
          </div>

          {/* Headline */}
          <h1
            className="js-hero-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em",
              color: "#ffffff", margin: 0,
            }}
          >
            Find Your Dream{" "}
            <span style={{ color: "#60a5fa" }}>Overseas Job</span>
          </h1>

          {/* Subtext */}
          <p
            className="js-hero-animate"
            style={{
              maxWidth: 576, fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
              fontWeight: 400, lineHeight: 1.6, color: "#b4c5ff", margin: 0,
            }}
          >
            Join thousands of workers from Punjab who found premium jobs in Dubai, Saudi Arabia,
            Qatar, Poland &amp; Europe through Shiva Travel &amp; Manpower Consultants.
            Government-licensed, zero fees, complete support.
          </p>

          {/* CTA Buttons */}
          <div className="js-hero-animate" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a
              href="#destinations"
              style={{
                padding: "16px 32px", backgroundColor: "#0052dc", color: "#fff",
                fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                borderRadius: 12, textDecoration: "none",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Browse Jobs by Country
            </a>
            <a
              href="#newsletter"
              style={{
                padding: "16px 32px",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                borderRadius: 12, textDecoration: "none",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
            >
              Get Job Alerts
            </a>
          </div>

          {/* Quick stats */}
          <div className="js-hero-animate" style={{ display: "flex", gap: m ? 16 : 32, marginTop: 16, flexWrap: "wrap" }}>
            {[
              { num: "5,000+", label: "Workers Placed" },
              { num: "12+", label: "Countries" },
              { num: "100%", label: "Transparent Fees" },
            ].map((s) => (
              <div key={s.label}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: m ? 20 : 24,
                  fontWeight: 800, color: "#60a5fa", display: "block",
                }}>{s.num}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 12,
                  color: "rgba(255,255,255,0.5)",
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
