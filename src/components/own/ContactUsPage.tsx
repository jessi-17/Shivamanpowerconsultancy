"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactUsPage() {
  const m = useIsMobile();
  const heroRef = useScrollReveal();
  const trustRef = useScrollReveal();
  const officeRef = useScrollReveal();
  const interviewRef = useScrollReveal();
  const journeyRef = useScrollReveal();

  const [form, setForm] = useState({ yourname: "", phone: "", email: "", interest: "", experience: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ yourname: "", phone: "", email: "", interest: "", experience: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 700,
    color: "#43474d",
    letterSpacing: "0.55px",
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 12px",
    backgroundColor: "#eff4ff",
    border: "none",
    borderRadius: 8,
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "#0b1c30",
    outline: "none",
    transition: "box-shadow 150ms",
  };

  const journeySteps = ["Initial Inquiry", "Profiling", "Interview", "Visa Process", "Deployment"];

  const cities = [
    {
      name: "Nakodar (HQ)",
      subtitle: "Primary Office & Visa Processing Centre",
      address: "Golden Avenue, Near Time Cafe, Nakodar",
      email: "info@shivamanpower.com",
      image: "/Office desk.webp",
    },
    {
      name: "Jalandhar",
      subtitle: "Regional Recruitment Office",
      address: "GT Road, Jalandhar, Punjab",
      email: "info@shivamanpower.com",
      image: "/Office desk.webp",
    },
    {
      name: "Punjab Region",
      subtitle: "Outreach & Candidate Support Centre",
      address: "Multiple locations across Punjab",
      email: "info@shivamanpower.com",
      image: "/Office desk.webp",
    },
  ];

  return (
    <main className="contact-page" style={{ backgroundColor: "#f8f9ff" }}>
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="reveal"
        style={{
          position: "relative",
          backgroundColor: "#001f5d",
          overflow: "hidden",
          paddingTop: m ? 120 : 140,
          paddingBottom: m ? 80 : 128,
        }}
      >
        {/* Background overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/Office desk.webp')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        {/* Wavy bottom */}
        <div style={{
          position: "absolute", bottom: -1, left: 0, right: 0,
          lineHeight: 0,
        }}>
          <svg viewBox="0 0 1280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
            <path d="M0 60C320 120 640 0 960 60C1120 90 1200 100 1280 80V120H0V60Z" fill="#f8f9ff" />
          </svg>
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 var(--spacing-8)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: m ? 40 : 48,
        }}>
          {/* Left text */}
          <div style={{ flex: m ? "1 1 100%" : "1 1 500px", maxWidth: m ? "100%" : 600 }}>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: m ? 13 : 16,
              fontWeight: 700,
              color: "#dbe1ff",
              letterSpacing: "1.6px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}>
              Your Global Journey Starts Here
            </p>
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: m ? "clamp(2rem, 8vw, 2.5rem)" : 60,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-1.5px",
              marginBottom: 20,
            }}>
              Contact the Best<br />in Punjab.
            </h1>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: m ? 16 : 20,
              color: "#dbeafe",
              lineHeight: "28px",
              marginBottom: 24,
              maxWidth: 520,
            }}>
              Shiva Manpower is your gateway to international careers.
              Reach out to our expert consultants for personalized
              guidance on visas and global recruitment.
            </p>
            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: "12px 20px",
                backdropFilter: "blur(12px)",
              }}>
                <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="#dbe1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "#fff" }}>
                  MEA Licensed Agency
                </span>
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 8,
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: "12px 20px",
                backdropFilter: "blur(12px)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dbe1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "#fff" }}>
                  25+ Countries Served
                </span>
              </div>
            </div>
          </div>

          {/* Right — Inquiry Form */}
          <div style={{
            flex: m ? "1 1 100%" : "0 0 500px",
            backgroundColor: "#ffffff",
            borderRadius: 12,
            padding: m ? "32px 20px" : "40px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.10), 0 10px 15px rgba(0,0,0,0.10)",
            border: "1px solid #c4c6ce",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 700,
              color: "#000c2f",
              marginBottom: 24,
            }}>
              Inquiry Form
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Name + Phone */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Ex. Rahul Singh"
                    value={form.yourname}
                    onChange={(e) => setForm({ ...form, yourname: e.target.value })}
                    required
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px #0052dc33"; }}
                    onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                  />
                </div>
                <div style={{ flex: "1 1 200px" }}>
                  <label style={labelStyle}>Phone Number</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{
                      backgroundColor: "#eff4ff",
                      borderRadius: 8,
                      padding: "14px 12px",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#43474d",
                      whiteSpace: "nowrap",
                    }}>
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{ ...inputStyle, flex: 1 }}
                      onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px #0052dc33"; }}
                      onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px #0052dc33"; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>

              {/* Destination Interest */}
              <div>
                <label style={labelStyle}>Destination Interest</label>
                <div style={{ position: "relative" }}>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      cursor: "pointer",
                      paddingRight: 36,
                    }}
                    onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px #0052dc33"; }}
                    onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <option value="">Select Destination</option>
                    <option value="UAE">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Poland">Poland</option>
                    <option value="Romania">Romania</option>
                    <option value="Other">Other</option>
                  </select>
                  <svg
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="#43474d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Additional Message</label>
                <textarea
                  placeholder="Briefly describe your career goals..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px #0052dc33"; }}
                  onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: "linear-gradient(135deg, #000c2f, #001f5d)",
                  color: "#fff",
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                  border: "none",
                  borderRadius: 8,
                  cursor: status === "loading" ? "wait" : "pointer",
                  boxShadow: "0 8px 10px rgba(0,31,93,0.20), 0 20px 25px rgba(0,31,93,0.20)",
                  transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,31,93,0.30), 0 24px 32px rgba(0,31,93,0.20)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 10px rgba(0,31,93,0.20), 0 20px 25px rgba(0,31,93,0.20)";
                }}
              >
                {status === "loading" ? "Submitting..." : status === "success" ? "Sent! We'll contact you soon." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== TRUST INDICATORS ===== */}
      <section
        ref={trustRef}
        className="reveal"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #c4c6ce",
          padding: m ? "40px 0" : "64px 0",
        }}
      >
        <div style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 var(--spacing-8)",
          display: "grid",
          gridTemplateColumns: m ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: m ? 32 : 16,
          textAlign: "center",
        }}>
          {[
            { value: "15+", label: "Years Exp" },
            { value: "10k+", label: "Deployments" },
            { value: "98%", label: "Visa Success" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: m ? 24 : 30,
                fontWeight: 800,
                color: "#001f5d",
                lineHeight: "36px",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                color: "#43474d",
                letterSpacing: "0.7px",
                marginTop: 4,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OFFICE + CONTACT PANEL ===== */}
      <section
        ref={officeRef}
        className="reveal"
        style={{
          padding: m ? "40px 0" : "64px 0",
        }}
      >
        <div style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: m ? "0 20px" : "0 50px",
          display: "flex",
          flexWrap: "wrap",
          gap: m ? 32 : 48,
        }}>
        {/* Left — Office Card */}
        <div style={{
          flex: "1 1 400px",
          backgroundColor: "#ffffff",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        }}>
          {/* Office Image */}
          <div style={{
            height: 192,
            position: "relative",
            backgroundColor: "#001f5d",
            backgroundImage: "url('/Office desk.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, #000c2f)",
              padding: 24,
            }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
              }}>
                Nakodar Hub
              </span>
            </div>
          </div>
          {/* Office Details */}
          <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5784ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d", lineHeight: "22px" }}>
                Golden Avenue, Near Time Cafe / Sukhjeet Hospital, Nakodar, Jalandhar, Punjab 144040
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5784ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#43474d" }}>
                info@shivatravelconsultant.in
              </span>
            </div>
            {/* Map embed placeholder */}
            <div style={{
              backgroundColor: "#dce9ff",
              borderRadius: 8,
              height: 128,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              <iframe
                src="https://www.google.com/maps/place/Shiva+Travel+%26+Manpower+Consultants+-Best+Travel+Agent,+Visa+And+Work+Permit+Consultants,+Travel+Agency/@31.1353763,75.4815797,21z/data=!4m6!3m5!1s0x391a69fabdbdae21:0xf30a21ac23d4724a!8m2!3d31.135376!4d75.4817507!16s%2Fg%2F11l1p0zx6s?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nakodar Office Location"
              />
            </div>
          </div>
        </div>

        {/* Right — Quick Contact Panel */}
        <div style={{
          flex: "1 1 400px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}>
          {/* Immediate Support */}
          <div style={{
            backgroundColor: "#eff4ff",
            border: "1px solid #c4c6ce",
            borderRadius: 12,
            padding: 32,
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "#0b1c30",
              marginBottom: 20,
            }}>
              Immediate Support
            </h3>
            {/* WhatsApp */}
            <a
              href="https://wa.me/919814820432"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "#ffffff",
                borderRadius: 8,
                padding: 16,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                marginBottom: 12,
                textDecoration: "none",
                transition: "transform 150ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "#dcfce7",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#16a34a">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0b1c30", letterSpacing: "0.6px", textTransform: "uppercase" }}>
                  WhatsApp
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, color: "#0b1c30" }}>
                  +91 98148-20432
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            {/* Call Center */}
            <a
              href="tel:+919814920432"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                backgroundColor: "#ffffff",
                borderRadius: 8,
                padding: 16,
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                textDecoration: "none",
                transition: "transform 150ms",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                backgroundColor: "#dbeafe",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, color: "#0b1c30", letterSpacing: "0.6px", textTransform: "uppercase" }}>
                  Call Centre
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 700, color: "#0b1c30" }}>
                  +91 98149-20432
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Visit Headquarters */}
          <div style={{
            backgroundColor: "#000c2f",
            borderRadius: 12,
            padding: 32,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative map pin */}
            <svg
              width="106" height="133" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"
              style={{ position: "absolute", top: -10, right: -10 }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 12,
              position: "relative",
            }}>
              Visit our Headquarters
            </h3>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "#bfdbfe",
              lineHeight: "22px",
              marginBottom: 16,
              position: "relative",
            }}>
              Golden Avenue, Near Time Cafe / Sukhjeet Hospital,<br />
              Nakodar, Jalandhar, Punjab 144040
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dbe1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 700,
                color: "#dbe1ff",
              }}>
                Mon - Sat: 9:00 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ===== UPCOMING INTERVIEWS ===== */}
      {/* <section
        ref={interviewRef}
        className="reveal"
        style={{
          padding: m ? "40px 0" : "64px 0",
        }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? "0 20px" : "0 var(--spacing-8)" }}>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 700,
          color: "#0052dc",
          letterSpacing: "1.6px",
          textTransform: "uppercase",
          marginBottom: 12,
        }}>
          Upcoming Interviews
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: m ? 28 : 36,
          fontWeight: 700,
          color: "#0b1c30",
          lineHeight: "40px",
          marginBottom: 12,
        }}>
          Upcoming Interviews in Nakodar
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: m ? 16 : 18,
          color: "#43474d",
          lineHeight: "28px",
          marginBottom: 40,
          maxWidth: 600,
        }}>
          Strategically located to serve the youth of Punjab with localized support and visa assistance.
        </p>

        {/* Pagination dots */}
        {/* <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          <div style={{ width: 96, height: 4, backgroundColor: "#0052dc", borderRadius: 2 }} />
          <div style={{ width: 48, height: 4, backgroundColor: "#c4c6ce", borderRadius: 2 }} />
          <div style={{ width: 48, height: 4, backgroundColor: "#c4c6ce", borderRadius: 2 }} />
        </div>

        {/* City Cards */}
        {/* <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
          gap: 24,
        }}>
          {cities.map((city) => (
            <div key={city.name} style={{
              backgroundColor: "#ffffff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}>
              {/* Card Image */}
              {/* <div style={{
                height: 192,
                backgroundColor: "#001f5d",
                backgroundImage: `url('${city.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }} /> */}
              {/* Card Content */}
              {/* <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0b1c30",
                }}>
                  {city.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "#43474d",
                  lineHeight: "20px",
                }}>
                  {city.subtitle}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30" }}>
                    {city.address}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#0b1c30" }}>
                    {city.email}
                  </span>
                </div>
                <button
                  style={{
                    marginTop: 8,
                    padding: "12px",
                    backgroundColor: "transparent",
                    border: "1px solid #c4c6ce",
                    borderRadius: 8,
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0b1c30",
                    cursor: "pointer",
                    transition: "all 150ms",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#eff4ff";
                    e.currentTarget.style.borderColor = "#0052dc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#c4c6ce";
                  }}
                >
                  View on Map
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      // </section> */}

      {/* ===== JOURNEY TRACKER ===== */}
      <section
        ref={journeyRef}
        className="reveal"
        style={{
          padding: m ? "40px 0 80px" : "16px 0 80px",
        }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? "0 20px" : "0 32px", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: 700,
          color: "#000c2f",
          marginBottom: 8,
        }}>
          Your Journey with Us
        </h2>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          color: "#43474d",
          marginBottom: 40,
        }}>
          Transparent recruitment, every step of the way.
        </p>

        {/* Progress tracker */}
        <div style={{
          maxWidth: 896,
          margin: "0 auto",
          position: "relative",
          padding: "40px 0",
        }}>
          {/* Line */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: m ? 20 : "5%",
            right: m ? 20 : "5%",
            height: 2,
            backgroundColor: "#c4c6ce",
            transform: "translateY(-50%)",
          }} />
          {/* Steps */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            flexWrap: m ? "wrap" : "nowrap",
            gap: m ? 16 : 0,
          }}>
            {journeySteps.map((step, i) => (
              <div key={step} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                backgroundColor: "#f8f9ff",
                padding: "0 16px",
                flex: m ? "1 1 40%" : undefined,
              }}>
                <div style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: i === 0 ? "#000c2f" : "#c4c6ce",
                  boxShadow: i === 0 ? "0 0 12px rgba(0,12,47,0.40)" : "none",
                }} />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 700,
                  color: i === 0 ? "#000c2f" : "#74777e",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
