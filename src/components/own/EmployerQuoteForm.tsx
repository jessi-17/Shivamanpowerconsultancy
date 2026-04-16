"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
  defaultCountry?: string;
  compact?: boolean;
}

const countries = [
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman",
  "Poland", "Romania", "Croatia", "Malta", "Hungary", "Czech Republic",
];

export default function EmployerQuoteForm({ defaultCountry = "", compact = false }: Props) {
  const m = useIsMobile();
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: defaultCountry,
    message: "",
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
        setForm({ companyName: "", contactPerson: "", email: "", phone: "", country: defaultCountry, message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const pad = compact ? (m ? "10px 12px" : "11px 14px") : (m ? "12px 14px" : "13px 16px");
  const fontSize = compact ? (m ? 13 : 14) : (m ? 14 : 15);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: pad,
    backgroundColor: "#f8f9ff",
    border: "1.5px solid rgba(0,0,0,0.08)",
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontSize,
    color: "var(--on-surface)",
    outline: "none",
    transition: "border-color 150ms",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: 11,
    fontWeight: 600,
    color: "var(--on-surface-variant)",
    marginBottom: 5,
    display: "block",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#0052dc";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: compact ? 10 : 14 }}>
      <div>
        <label style={labelStyle}>Company Name *</label>
        <input
          type="text"
          placeholder="Your company"
          value={form.companyName}
          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
          required
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div>
        <label style={labelStyle}>Contact Person *</label>
        <input
          type="text"
          placeholder="Your full name"
          value={form.contactPerson}
          onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
          required
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 180px" }}>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            placeholder="company@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={inputStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div style={{ flex: "1 1 180px" }}>
          <label style={labelStyle}>Phone / WhatsApp *</label>
          <input
            type="tel"
            placeholder="+971 / +966 / +91"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            style={inputStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Country of Operation *</label>
        <select
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          required
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="">Select country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>Requirements *</label>
        <textarea
          placeholder="Job roles, number of workers, timeline, salary range, benefits you offer..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={compact ? 3 : 4}
          required
          style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: m ? "13px" : "15px",
          backgroundColor: "#0052dc",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontSize: m ? 14 : 15,
          fontWeight: 700,
          border: "none",
          borderRadius: 10,
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
          opacity: status === "loading" ? 0.7 : 1,
          marginTop: 4,
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
        {status === "loading"
          ? "Submitting..."
          : status === "success"
          ? "Submitted! We'll contact you within 24 hours."
          : status === "error"
          ? "Something went wrong. Try again."
          : "Get Free Quote"}
      </button>

      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: 11,
        color: "var(--on-surface-variant)",
        textAlign: "center",
        lineHeight: 1.5,
        marginTop: 2,
      }}>
        No obligation. Free consultation. We respond within 24 hours.
      </p>
    </form>
  );
}
