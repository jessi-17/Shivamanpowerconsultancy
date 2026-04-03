"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function HeroSection() {
  const m = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  // GSAP scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      bgRef.current.style.transform = `translateY(${scrollProgress * 60}px) scale(${1 + scrollProgress * 0.04})`;
      if (globeRef.current) {
        globeRef.current.style.transform = `translateY(-48%) rotate(${-84 + scrollProgress * -8}deg) scale(${1 + scrollProgress * 0.03})`;
      }
      contentRef.current.style.opacity = `${1 - scrollProgress * 1.5}`;
      contentRef.current.style.transform = `translateY(${scrollProgress * -40}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glassy blob follows cursor
  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;
    if (!section || !blob) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(blob, {
        x: x - 200,
        y: y - 200,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleEnter = () => {
      gsap.to(blob, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    };

    const handleLeave = () => {
      gsap.to(blob, { opacity: 0, scale: 0.6, duration: 0.5, ease: "power2.out" });
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseenter", handleEnter);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseenter", handleEnter);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    // Badge + subtext + buttons — simple stagger
    const els = document.querySelectorAll<HTMLElement>(".hero-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.2,
    });

    // Headline — split into characters, blur-to-sharp reveal
    const headline = headlineRef.current;
    if (headline) {
      // Get each line from the <br> separated content
      const lines = headline.querySelectorAll<HTMLSpanElement>(".hero-line");
      lines.forEach((line) => {
        const text = line.textContent || "";
        line.textContent = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.willChange = "transform, opacity, filter";
          span.classList.add("hero-char");
          line.appendChild(span);
        });
      });

      const allChars = headline.querySelectorAll(".hero-char");
      gsap.set(allChars, {
        opacity: 0,
        y: 50,
        rotateX: -60,
        filter: "blur(10px)",
        transformOrigin: "50% 100%",
      });

      gsap.to(allChars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: {
          each: 0.02,
          from: "start",
        },
        ease: "power4.out",
        delay: 0.4,
      });
    }

    // Globe entrance — scale + fade in
    if (globeRef.current) {
      gsap.fromTo(
        globeRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.35, scale: 1, duration: 1.6, ease: "power2.out", delay: 0.3 }
      );
    }
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
        backgroundColor: "#001f5d",
        cursor: "default",
      }}
    >
      {/* Glassy blob — follows cursor */}
      <div
        ref={blobRef}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,82,220,0.35) 0%, rgba(0,52,180,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 2,
          opacity: 0,
          transform: "scale(0.6)",
          willChange: "transform, opacity",
        }}
      />

      {/* Layer 1: Corporate skyscraper — 30% opacity, overlay blend */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          willChange: "transform",
        }}
      >
        <Image
          src="/Hero Section.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.3,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Layer 2: Left-to-right gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(0,12,47,1) 0%, rgba(0,12,47,0.8) 40%, rgba(0,12,47,0) 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Layer 3: Globe — values from your DevTools tweaks */}
      <div
        ref={globeRef}
        style={{
          position: "absolute",
          top: "50%",
          right: "-43%",
          transform: "translateY(-48%) rotate(-84deg)",
          width: "151%",
          height: "153%",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/globe.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "120px 20px 60px" : "140px 60px 80px",
          willChange: "transform, opacity",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: m ? 32 : 48,
          flexWrap: m ? "wrap" : "nowrap",
        }}
      >
        {/* Left — text content */}
        <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 24, flex: "1 1 auto" }}>
          {/* Badge */}
          <div className="hero-animate">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(0,82,220,0.25)",
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#bfdbfe",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#60a5fa",
                  display: "inline-block",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              LICENSED BY GOVT OF INDIA (MEA)
            </span>
          </div>

          {/* Headline — split into lines for character animation */}
          <h1
            ref={headlineRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: 0,
              perspective: 600,
            }}
          >
            <span className="hero-line" style={{ display: m ? "inline" : "block" }}>{m ? "Trusted Overseas Partners for Punjab's Talent" : "Trusted Overseas Partners"}</span>
            {!m && <span className="hero-line" style={{ display: "block" }}>for Punjab&apos;s Talent</span>}
          </h1>

          {/* Subtext */}
          <p
            className="hero-animate"
            style={{
              maxWidth: 576,
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#b4c5ff",
              margin: 0,
            }}
          >
            Shiva Travel &amp; Manpower Consultancy is a government-licensed recruitment agency in Nakodar, near Jalandhar. Placing Punjab&apos;s skilled workers in premium jobs across Dubai, Saudi Arabia, Qatar, Kuwait &amp; Europe.
          </p>

          {/* Quick Inquiry Form */}
          <HeroInquiryForm />
        </div>

        {/* Right — glassy portal boxes */}
        <div
          className="hero-animate"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            flex: m ? "1 1 100%" : "0 0 320px",
            width: m ? "100%" : 320,
          }}
        >
          {/* For Employers */}
          <Link href="/employers" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: m ? "20px" : "28px",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 16,
                transition: "all 250ms cubic-bezier(0.16,1,0.3,1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,82,220,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  backgroundColor: "rgba(0,82,220,0.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                  color: "#fff", margin: 0,
                }}>
                  For Employers
                </h3>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,0.7)", lineHeight: 1.55,
                margin: "0 0 14px",
              }}>
                Hire pre-screened skilled workers from India. End-to-end recruitment, visa processing &amp; deployment support.
              </p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                color: "#60a5fa",
              }}>
                Partner With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* For Job Seekers */}
          <Link href="/job-seekers" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: m ? "20px" : "28px",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 16,
                transition: "all 250ms cubic-bezier(0.16,1,0.3,1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.borderColor = "rgba(96,165,250,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,82,220,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  backgroundColor: "rgba(0,82,220,0.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                  color: "#fff", margin: 0,
                }}>
                  For Job Seekers
                </h3>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13,
                color: "rgba(255,255,255,0.7)", lineHeight: 1.55,
                margin: "0 0 14px",
              }}>
                Browse overseas jobs, get salary info &amp; subscribe for daily/weekly job alerts. Zero fees guaranteed.
              </p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                color: "#60a5fa",
              }}>
                Find Jobs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HeroInquiryForm() {
  const m = useIsMobile();
  const [form, setForm] = useState({ destination: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone) return;
    const country = form.destination || "Not selected";
    const message = `Hi, I'm interested in jobs in ${country}. My phone number is ${form.phone}. Please contact me.`;
    const whatsappUrl = `https://wa.me/919815358832?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setStatus("success");
    setForm({ destination: "", phone: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  const fieldStyle: React.CSSProperties = {
    padding: m ? "12px 14px" : "14px 16px",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    transition: "border-color 150ms",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hero-animate"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: m ? "14px" : "14px 18px",
        backgroundColor: "rgba(0,12,47,0.55)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 14,
        flexWrap: m ? "wrap" : "nowrap",
        marginTop: 8,
      }}
    >
      <select
        value={form.destination}
        onChange={(e) => setForm({ ...form, destination: e.target.value })}
        style={{
          ...fieldStyle,
          flex: m ? "1 1 100%" : "0 0 170px",
          appearance: "none",
          WebkitAppearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          paddingRight: 32,
        } as React.CSSProperties}
      >
        <option value="" style={{ color: "#000" }}>Select Country</option>
        <option value="UAE" style={{ color: "#000" }}>UAE (Dubai)</option>
        <option value="Saudi Arabia" style={{ color: "#000" }}>Saudi Arabia</option>
        <option value="Poland" style={{ color: "#000" }}>Poland</option>
        <option value="Romania" style={{ color: "#000" }}>Romania</option>
        <option value="Qatar" style={{ color: "#000" }}>Qatar</option>
        <option value="Kuwait" style={{ color: "#000" }}>Kuwait</option>
        <option value="Other" style={{ color: "#000" }}>Other</option>
      </select>

      <input
        type="tel"
        placeholder="Your Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
        style={{
          ...fieldStyle,
          flex: m ? "1 1 100%" : "0 0 170px",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          flex: m ? "1 1 100%" : "0 0 auto",
          padding: "14px 20px",
          backgroundColor: status === "success" ? "#16a34a" : "#0052dc",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontSize: m ? 13 : 15,
          fontWeight: 700,
          border: "none",
          borderRadius: 10,
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
          whiteSpace: "nowrap",
          minWidth: "fit-content",
          boxShadow: status === "success"
            ? "0 0 20px rgba(22,163,74,0.5), 0 0 40px rgba(22,163,74,0.25)"
            : "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)",
        }}
        onMouseEnter={(e) => {
          if (status === "idle") {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(0,82,220,0.65), 0 0 50px rgba(0,82,220,0.35)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)";
        }}
      >
        {status === "loading" ? "Sending..." : status === "success" ? "We'll Call You!" : m ? "Get Consultation →" : "Get Free Consultation →"}
      </button>
    </form>
  );
}
