"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import gsap from "gsap";
import HeroCredibilityCarousel from "@/components/own/HeroCredibilityCarousel";

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
      const isMobileVp = window.innerWidth <= 767;

      bgRef.current.style.transform = `translateY(${scrollProgress * 60}px) scale(${1 + scrollProgress * 0.04})`;
      if (globeRef.current) {
        globeRef.current.style.transform = `translateY(-48%) rotate(${-84 + scrollProgress * -8}deg) scale(${1 + scrollProgress * 0.03})`;
      }
      if (isMobileVp) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      } else {
        contentRef.current.style.opacity = `${1 - scrollProgress * 1.5}`;
        contentRef.current.style.transform = `translateY(${scrollProgress * -40}px)`;
      }
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
          src="/shiva-manpower-overseas-jobs-hero.webp"
          alt="Indian workers placed abroad by Shiva Travel & Manpower Consultants Nakodar Punjab"
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
          src="/global-recruitment-network.jpg"
          alt="Global recruitment network — overseas job placements from Punjab to Gulf and Europe"
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
            <span className="hero-line" style={{ display: m ? "inline" : "block" }}>{m ? "Punjab's Best Manpower Consultancy" : "Punjab's Best"}</span>
            {!m && <span className="hero-line" style={{ display: "block" }}>Manpower Consultancy</span>}
          </h1>

          {/* Sub-headline — keyword absorber for SEO */}
          <p
            className="hero-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              fontWeight: 600,
              color: "#bfdbfe",
              margin: 0,
              letterSpacing: "0.01em",
              lineHeight: 1.4,
            }}
          >
            Travel Agent · Immigration Office · Overseas Recruitment — Govt-Licensed Since 2002
          </p>

          {/* Subtext */}
          <p
            className="hero-animate"
            style={{
              maxWidth: 576,
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.82rem, 1.1vw, 1rem)",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "rgba(180, 197, 255, 0.65)",
              margin: 0,
            }}
          >
            Shiva Travel &amp; Manpower Consultants is the best travel agent, immigration office and overseas recruitment agency in Punjab. Government-licensed (RA B-1794), trusted by 5,000+ skilled workers across Doaba since 2002 — placing candidates in UAE, Saudi Arabia, Qatar, Kuwait, Poland and Romania.
          </p>

          {/* Quick Inquiry Form */}
          <HeroInquiryForm />
        </div>

        {/* Right — credibility carousel */}
        <HeroCredibilityCarousel />
      </div>
    </div>
  );
}

function HeroInquiryForm() {
  const m = useIsMobile();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    const message = `Hi, I'm ${cleanName}. I'm interested in overseas jobs.`;
    const whatsappUrl = `https://wa.me/919815358832?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setStatus("success");
    setName("");
    setTimeout(() => setStatus("idle"), 3000);
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
      <input
        type="text"
        placeholder="Your name — we'll WhatsApp you"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          flex: m ? "1 1 100%" : "1 1 0",
          minWidth: 0,
          padding: m ? "12px 14px" : "14px 16px",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          borderRadius: 10,
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "#fff",
          outline: "none",
          transition: "border-color 150ms",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#60a5fa"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
      />

      <button
        type="submit"
        style={{
          flex: m ? "1 1 100%" : "0 0 auto",
          padding: "14px 24px",
          backgroundColor: status === "success" ? "#16a34a" : "#0052dc",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontSize: m ? 14 : 15,
          fontWeight: 700,
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
          whiteSpace: "nowrap",
          minWidth: "fit-content",
          boxShadow: status === "success"
            ? "0 0 20px rgba(22,163,74,0.5), 0 0 40px rgba(22,163,74,0.25)"
            : "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          justifyContent: "center",
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
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
        {status === "success" ? "Opening WhatsApp..." : "Send on WhatsApp"}
      </button>
    </form>
  );
}
