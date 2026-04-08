"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import gsap from "gsap";

interface CountryHeroProps {
  name: string;
  fullName: string;
  flag: string;
  heroHeadline: string;
  heroSubtext: string;
  stats: { value: string; label: string }[];
  defaultCountry: string;
}

const countries = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Poland", "Romania", "Croatia", "Malta", "Hungary", "Czech Republic",
];

export default function CountryEmployerHero({
  name, fullName, flag, heroHeadline, heroSubtext, stats, defaultCountry,
}: CountryHeroProps) {
  const m = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    companyName: "", country: defaultCountry, industry: "", workersNeeded: "",
    contactPerson: "", email: "", phone: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ceh-animate");
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.2 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      contentRef.current.style.opacity = `${1 - progress * 1.5}`;
      contentRef.current.style.transform = `translateY(${progress * -40}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/employer-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ companyName: "", country: defaultCountry, industry: "", workersNeeded: "", contactPerson: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: m ? "8px 10px" : "12px 14px",
    backgroundColor: "#f8f9ff",
    border: "1.5px solid rgba(0,0,0,0.06)",
    borderRadius: 8,
    fontFamily: "var(--font-body)",
    fontSize: m ? 12 : 13,
    color: "var(--on-surface)",
    outline: "none",
    transition: "border-color 150ms",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
    color: "var(--on-surface-variant)", marginBottom: 4, display: "block",
    textTransform: "uppercase" as const, letterSpacing: "0.03em",
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#0052dc";
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
  };

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
        <div style={{
          width: "100%", height: "100%",
          backgroundImage: "url('/Professional Punjab office environment.webp')",
          backgroundSize: "cover", backgroundPosition: "center 30%",
          opacity: 0.15, mixBlendMode: "overlay",
        }} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(0,12,47,0.97) 0%, rgba(0,31,93,0.88) 50%, rgba(0,12,47,0.93) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative", zIndex: 3, width: "100%",
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: m ? "120px 16px 48px" : "140px 60px 80px",
          display: "flex",
          flexDirection: m ? "column" : "row",
          gap: m ? 32 : 48,
          alignItems: m ? "stretch" : "center",
        }}
      >
        {/* LEFT — Content */}
        <div style={{ flex: "1 1 55%" }}>
          {/* Badge */}
          <div className="ceh-animate" style={{ marginBottom: 20 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 999,
              backgroundColor: "rgba(0,82,220,0.25)",
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.05em", color: "#bfdbfe",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", backgroundColor: "#60a5fa",
                display: "inline-block", animation: "pulse-dot 2s ease-in-out infinite",
              }} />
              LICENSED BY GOVT OF INDIA (MEA) &bull; RA B-1794
            </span>
          </div>

          {/* Flag & Country */}
          <div className="ceh-animate" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: m ? 28 : 36 }}>{flag}</span>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
              color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              {fullName}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="ceh-animate"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#ffffff", marginBottom: 20, maxWidth: 600,
            }}
          >
            {heroHeadline.split(name).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span style={{ color: "#60a5fa" }}>{name}</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          {/* Subtext */}
          <p
            className="ceh-animate"
            style={{
              maxWidth: 540, marginBottom: 28,
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              fontWeight: 400, lineHeight: 1.65, color: "#b4c5ff",
            }}
          >
            {heroSubtext}
          </p>

          {/* Trust points */}
          <div className="ceh-animate" style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              "Free consultation & manpower audit",
              "Customized recruitment plan in 24 hours",
              "Dedicated account manager assigned",
              "Full compliance & documentation support",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  backgroundColor: "rgba(96,165,250,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="ceh-animate"
            style={{
              display: "flex", gap: m ? 12 : 32, flexWrap: "wrap",
              padding: m ? "16px 12px" : "20px 28px",
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{
                textAlign: "center",
                padding: m ? "0 4px" : "0 12px",
                borderRight: i < stats.length - 1 && !m ? "1px solid rgba(255,255,255,0.1)" : "none",
                flex: m ? "1 1 40%" : undefined,
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: m ? 20 : 26,
                  fontWeight: 800, color: "#60a5fa", display: "block",
                }}>{s.value}</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 11,
                  color: "rgba(255,255,255,0.6)", textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Inquiry Form */}
        <div
          className="ceh-animate"
          id="inquiry-form"
          style={{
            flex: "1 1 400px",
            maxWidth: m ? "100%" : 460,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            padding: m ? "24px 16px" : "32px 28px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: m ? 18 : 20, fontWeight: 700,
              color: "var(--on-surface)", marginBottom: 6,
            }}>
              Get a Free Recruitment Quote
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--on-surface-variant)", lineHeight: 1.5,
            }}>
              Tell us your requirements — we&apos;ll respond within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: m ? 8 : 12 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Company Name *</label>
                <input type="text" placeholder="Your company" value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Country</label>
                <select value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={focusHandler} onBlur={blurHandler}>
                  <option value="">Select Country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Industry</label>
                <select value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={focusHandler} onBlur={blurHandler}>
                  <option value="">Select Industry</option>
                  <option value="Construction">Construction</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Oil & Gas">Oil &amp; Gas</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Workers Needed</label>
                <select value={form.workersNeeded}
                  onChange={(e) => setForm({ ...form, workersNeeded: e.target.value })}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={focusHandler} onBlur={blurHandler}>
                  <option value="">Select Range</option>
                  <option value="1-10">1 – 10</option>
                  <option value="10-50">10 – 50</option>
                  <option value="50-100">50 – 100</option>
                  <option value="100-500">100 – 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Contact Person *</label>
              <input type="text" placeholder="Your name" value={form.contactPerson}
                onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Email *</label>
                <input type="email" placeholder="company@email.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
              <div style={{ flex: "1 1 180px" }}>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+971 / +966" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Requirements</label>
              <textarea placeholder="Describe roles, skills, and specifics..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={2}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={focusHandler} onBlur={blurHandler} />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%", padding: m ? "10px" : "14px",
                backgroundColor: "#0052dc", color: "#fff",
                fontFamily: "var(--font-display)", fontSize: m ? 13 : 15, fontWeight: 700,
                border: "none", borderRadius: 10,
                cursor: status === "loading" ? "wait" : "pointer",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
                opacity: status === "loading" ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (status !== "loading") {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,82,220,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {status === "loading" ? "Submitting..." : status === "success" ? "Submitted! We'll contact you in 24 hours." : status === "error" ? "Something went wrong. Try again." : "Get Free Quote"}
            </button>

            <p style={{
              fontFamily: "var(--font-body)", fontSize: 11,
              color: "var(--on-surface-variant)", textAlign: "center", lineHeight: 1.5,
            }}>
              No obligation. 100% free consultation. We respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
