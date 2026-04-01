"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ContactForm() {
  const ref = useScrollReveal();
  const m = useIsMobile();
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

  return (
    <div
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.18,
          backgroundImage: "url('/Office desk.webp')",
          backgroundSize: "cover", backgroundPosition: "center",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.25,
          }}>
            Ready to Start?
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6, marginBottom: 32, maxWidth: 340,
          }}>
            Book a free 1-on-1 session with our senior recruitment consultants. We&apos;ll
            assess your profile and suggest the best countries for you.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>+91 98148-20432</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#fff" }}>info@shivamanpower.com</span>
            </div>
          </div>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 32,
          }}>
            Visit us: Golden Avenue, Near Time Cafe, Nakodar, Punjab
          </p>
        </div>
      </div>

      {/* Right — form */}
      <div style={{ flex: "1 1 400px", backgroundColor: "#fff", padding: m ? "32px 20px" : "48px 40px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: m ? 8 : 20 }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
                FULL NAME
              </label>
              <input
                type="text" placeholder="Ex. Rahul Singh"
                value={form.yourname}
                onChange={(e) => setForm({ ...form, yourname: e.target.value })}
                required style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
              />
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
                PHONE NUMBER
              </label>
              <input
                type="tel" placeholder="+91"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
              EMAIL
            </label>
            <input
              type="email" placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required style={inputStyle}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
            />
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
                PREFERRED DESTINATION
              </label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
              >
                <option value="">Select Country</option>
                <option value="UAE">UAE</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Qatar">Qatar</option>
                <option value="Poland">Poland</option>
                <option value="Romania">Romania</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ flex: "1 1 200px" }}>
              <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
                EXPERIENCE
              </label>
              <select
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
              >
                <option value="Fresher">Fresher</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "var(--on-surface-variant)", marginBottom: 6, display: "block" }}>
              YOUR MESSAGE
            </label>
            <textarea
              placeholder="Tell us about your background..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={3}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#0052dc"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}
            />
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
            {status === "loading" ? "Sending..." : status === "success" ? "Sent! We'll call you back." : "Request Call Back"}
          </button>
        </form>
      </div>
    </div>
  );
}
