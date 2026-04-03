"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function EmployerInquiryForm() {
  const ref = useScrollReveal();
  const m = useIsMobile();
  const [form, setForm] = useState({
    companyName: "", country: "", industry: "", workersNeeded: "",
    contactPerson: "", email: "", phone: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        setForm({ companyName: "", country: "", industry: "", workersNeeded: "", contactPerson: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: m ? "8px 10px" : "14px 16px",
    backgroundColor: "#f8f9ff",
    border: "1.5px solid rgba(0,0,0,0.06)",
    borderRadius: m ? 8 : 10,
    fontFamily: "var(--font-body)",
    fontSize: m ? 13 : 14,
    color: "var(--on-surface)",
    outline: "none",
    transition: "border-color 150ms",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
    color: "var(--on-surface-variant)", marginBottom: 6, display: "block",
  };

  const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#0052dc";
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
  };

  return (
    <div
      id="inquiry-form"
      ref={ref}
      className="reveal"
      style={{
        maxWidth: 1088,
        margin: m ? "40px 16px" : "80px auto",
        borderRadius: 24,
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 12px 48px rgba(0,12,47,0.12)",
      }}
    >
      {/* Left — dark side */}
      <div style={{
        flex: "1 1 400px",
        backgroundColor: "#000c2f",
        padding: m ? "32px 20px" : "48px 40px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15,
          backgroundImage: "url('/office image .webp')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.25,
          }}>
            Partner With Us
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6, marginBottom: 32, maxWidth: 340,
          }}>
            Tell us about your manpower needs and our team will create a customized
            recruitment plan for your organization within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: "check", text: "Free consultation & manpower audit" },
              { icon: "check", text: "Customized recruitment plan within 24 hours" },
              { icon: "check", text: "Dedicated account manager assigned" },
              { icon: "check", text: "Full compliance & documentation support" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 24, height: 24, borderRadius: "50%",
                  backgroundColor: "rgba(96,165,250,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>+91 98148-20432</span>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div style={{ flex: "1 1 400px", backgroundColor: "#fff", padding: m ? "32px 20px" : "48px 40px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: m ? 8 : 16 }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>COMPANY NAME</label>
              <input type="text" placeholder="Your company" value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>COUNTRY</label>
              <input type="text" placeholder="e.g. Saudi Arabia, UAE" value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>INDUSTRY</label>
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
                <option value="Retail">Retail</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>WORKERS NEEDED</label>
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
            <label style={labelStyle}>CONTACT PERSON</label>
            <input type="text" placeholder="Your name" value={form.contactPerson}
              onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
              required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>EMAIL</label>
              <input type="email" placeholder="company@email.com" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={labelStyle}>PHONE</label>
              <input type="tel" placeholder="+966 / +971" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle} onFocus={focusHandler} onBlur={blurHandler} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>YOUR REQUIREMENTS</label>
            <textarea placeholder="Describe the roles, skills, and any other specifics..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={focusHandler} onBlur={blurHandler} />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              width: "100%", padding: m ? "10px" : "16px",
              backgroundColor: "#0052dc", color: "#fff",
              fontFamily: "var(--font-display)", fontSize: m ? 14 : 16, fontWeight: 700,
              border: "none", borderRadius: 12,
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
            {status === "loading" ? "Submitting..." : status === "success" ? "Submitted! We'll contact you within 24 hours." : status === "error" ? "Something went wrong. Try again." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
