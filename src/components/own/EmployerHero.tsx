"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import gsap from "gsap";

const stats = [
  { num: "5,000+", label: "Workers Deployed" },
  { num: "12+", label: "Countries" },
  { num: "25+", label: "Years" },
  { num: "98%", label: "Retention" },
];

export default function EmployerHero() {
  const m = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".emp-hero-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
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
        position: "relative",
        width: "100%",
        minHeight: m ? "auto" : "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#000c2f",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/Professional Punjab office environment.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.2, mixBlendMode: "overlay" }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(0,12,47,0.95) 0%, rgba(0,31,93,0.85) 50%, rgba(0,12,47,0.9) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative", zIndex: 3, width: "100%",
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: m ? "120px 20px 60px" : "160px 60px 100px",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div className="emp-hero-animate" style={{ marginBottom: 24 }}>
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
            LICENSED BY GOVT OF INDIA (MEA) &bull; RA B-1794
          </span>
        </div>

        {/* Headline */}
        <h1
          className="emp-hero-animate"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "#ffffff", margin: "0 auto 24px", maxWidth: 800,
          }}
        >
          Your Trusted Recruitment{" "}
          <span style={{ color: "#60a5fa" }}>Partner in India</span>
        </h1>

        {/* Subtext */}
        <p
          className="emp-hero-animate"
          style={{
            maxWidth: 640, margin: "0 auto 40px",
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            fontWeight: 400, lineHeight: 1.6, color: "#b4c5ff",
          }}
        >
          Shiva Travel &amp; Manpower Consultants provides ethically-sourced, pre-screened
          skilled workforce from India to employers across the Gulf, Europe, and beyond.
          25+ years of reliable manpower deployment with zero compliance issues.
        </p>

        {/* CTA buttons */}
        <div
          className="emp-hero-animate"
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: m ? 40 : 64 }}
        >
          <a
            href="#inquiry-form"
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
            Partner With Us
          </a>
          <a
            href="tel:+919814820432"
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
            Call Us: +91 98148-20432
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="emp-hero-animate"
          style={{
            display: "flex", justifyContent: "center", gap: m ? 16 : 48,
            flexWrap: "wrap",
            padding: m ? "24px 16px" : "32px 40px",
            backgroundColor: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: "center",
              padding: m ? "0 8px" : "0 16px",
              borderRight: i < stats.length - 1 && !m ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: m ? 24 : 32,
                fontWeight: 800, color: "#60a5fa", display: "block",
              }}>{s.num}</span>
              <span style={{
                fontFamily: "var(--font-body)", fontSize: 12,
                color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
