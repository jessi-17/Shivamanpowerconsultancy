"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ------------------------------------------------------------------ */
/*  Salary data by country & job category                              */
/* ------------------------------------------------------------------ */

const salaryData: Record<string, Record<string, { min: number; max: number; currency: string; symbol: string; accommodation: string; food: string; overtime: string }>> = {
  "UAE": {
    "Construction Worker": { min: 1500, max: 2500, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "Electrician": { min: 2000, max: 3500, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "Plumber": { min: 1800, max: 3000, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "Welder": { min: 2000, max: 3500, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "AC Technician": { min: 2200, max: 3800, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "Driver": { min: 2500, max: 4000, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x hourly" },
    "Carpenter": { min: 1800, max: 3000, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Allowance ~300 AED/mo", overtime: "1.25x-1.5x hourly" },
    "Security Guard": { min: 1800, max: 2800, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Included", overtime: "1.25x hourly" },
    "Cleaner / Housekeeping": { min: 1200, max: 2000, currency: "AED", symbol: "AED", accommodation: "Provided", food: "Included", overtime: "1.25x hourly" },
  },
  "Saudi Arabia": {
    "Construction Worker": { min: 1200, max: 2200, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Electrician": { min: 1800, max: 3200, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Plumber": { min: 1500, max: 2800, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Welder": { min: 1800, max: 3200, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Driver": { min: 2000, max: 3500, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Carpenter": { min: 1500, max: 2800, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Allowance ~200 SAR/mo", overtime: "1.5x hourly" },
    "Security Guard": { min: 1500, max: 2500, currency: "SAR", symbol: "SAR", accommodation: "Provided", food: "Included", overtime: "1.5x hourly" },
  },
  "Qatar": {
    "Construction Worker": { min: 1400, max: 2500, currency: "QAR", symbol: "QAR", accommodation: "Provided", food: "Allowance ~250 QAR/mo", overtime: "1.25x-1.5x hourly" },
    "Electrician": { min: 2000, max: 3500, currency: "QAR", symbol: "QAR", accommodation: "Provided", food: "Allowance ~250 QAR/mo", overtime: "1.25x-1.5x hourly" },
    "Plumber": { min: 1800, max: 3000, currency: "QAR", symbol: "QAR", accommodation: "Provided", food: "Allowance ~250 QAR/mo", overtime: "1.25x-1.5x hourly" },
    "Welder": { min: 2000, max: 3500, currency: "QAR", symbol: "QAR", accommodation: "Provided", food: "Allowance ~250 QAR/mo", overtime: "1.25x-1.5x hourly" },
    "Driver": { min: 2200, max: 3800, currency: "QAR", symbol: "QAR", accommodation: "Provided", food: "Allowance ~250 QAR/mo", overtime: "1.25x hourly" },
  },
  "Kuwait": {
    "Construction Worker": { min: 100, max: 180, currency: "KWD", symbol: "KWD", accommodation: "Provided", food: "Allowance ~20 KWD/mo", overtime: "1.25x-1.5x hourly" },
    "Electrician": { min: 150, max: 250, currency: "KWD", symbol: "KWD", accommodation: "Provided", food: "Allowance ~20 KWD/mo", overtime: "1.25x-1.5x hourly" },
    "Driver": { min: 120, max: 200, currency: "KWD", symbol: "KWD", accommodation: "Provided", food: "Allowance ~20 KWD/mo", overtime: "1.25x hourly" },
  },
  "Poland": {
    "Construction Worker": { min: 3500, max: 5500, currency: "PLN", symbol: "PLN", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Welder": { min: 4000, max: 7000, currency: "PLN", symbol: "PLN", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Electrician": { min: 4000, max: 6500, currency: "PLN", symbol: "PLN", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Factory Worker": { min: 3200, max: 4800, currency: "PLN", symbol: "PLN", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Driver": { min: 4500, max: 7000, currency: "PLN", symbol: "PLN", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
  },
  "Romania": {
    "Construction Worker": { min: 2800, max: 4500, currency: "RON", symbol: "RON", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Factory Worker": { min: 2500, max: 4000, currency: "RON", symbol: "RON", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Welder": { min: 3500, max: 5500, currency: "RON", symbol: "RON", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
    "Driver": { min: 3500, max: 5500, currency: "RON", symbol: "RON", accommodation: "Employer arranged", food: "Self", overtime: "1.5x-2x hourly" },
  },
};

// Approximate exchange rates to INR
const toINR: Record<string, number> = {
  AED: 22.7, SAR: 22.2, QAR: 22.9, KWD: 271, PLN: 21.1, RON: 18.5,
};

export default function SalaryCalculator() {
  const m = useIsMobile();
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");
  const [experience, setExperience] = useState("fresher");

  const countries = Object.keys(salaryData);
  const jobs = country ? Object.keys(salaryData[country]) : [];
  const data = country && job ? salaryData[country][job] : null;

  // Adjust salary based on experience
  const expMultiplier = experience === "3-5" ? 1.15 : experience === "5+" ? 1.3 : 1;
  const minSalary = data ? Math.round(data.min * expMultiplier) : 0;
  const maxSalary = data ? Math.round(data.max * expMultiplier) : 0;
  const rate = data ? toINR[data.currency] || 1 : 1;
  const minINR = Math.round(minSalary * rate);
  const maxINR = Math.round(maxSalary * rate);

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: m ? "12px 14px" : "14px 16px",
    backgroundColor: "#f8f9ff", border: "1.5px solid rgba(0,0,0,0.08)",
    borderRadius: 12, fontFamily: "var(--font-body)", fontSize: 15,
    color: "#0b1c30", outline: "none", appearance: "none", cursor: "pointer",
    transition: "border-color 150ms",
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1c30 0%, #0a2540 100%)",
          padding: m ? "120px 20px 48px" : "140px 60px 64px",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 14px", borderRadius: 20,
            backgroundColor: "rgba(37,99,235,0.15)", color: "#60a5fa",
            fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.04em", marginBottom: 16,
          }}>
            FREE TOOL
          </span>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 12,
            letterSpacing: "-0.02em",
          }}>
            Gulf & Europe Salary Calculator
          </h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: 500, margin: "0 auto",
          }}>
            Estimate your monthly earnings abroad. Select your destination and trade to see salary ranges, benefits, and take-home pay in INR.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ backgroundColor: "#f8fafc", padding: m ? "40px 16px 60px" : "64px 24px 80px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Inputs */}
          <div style={{
            backgroundColor: "#fff", borderRadius: 20, padding: m ? "24px 20px" : "36px 40px",
            boxShadow: "0 4px 24px rgba(0,12,47,0.08)", marginBottom: 24,
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Country */}
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>
                  DESTINATION COUNTRY
                </label>
                <select value={country} onChange={(e) => { setCountry(e.target.value); setJob(""); }} style={selectStyle}>
                  <option value="">Choose a country</option>
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              {/* Job */}
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>
                  JOB / TRADE
                </label>
                <select value={job} onChange={(e) => setJob(e.target.value)} style={selectStyle} disabled={!country}>
                  <option value="">{country ? "Select your trade" : "Select country first"}</option>
                  {jobs.map((j) => <option key={j} value={j}>{j}</option>)}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "#64748b", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8, display: "block" }}>
                  EXPERIENCE LEVEL
                </label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {[
                    { val: "fresher", label: "Fresher / 0-2 yrs" },
                    { val: "3-5", label: "3-5 years" },
                    { val: "5+", label: "5+ years" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setExperience(opt.val)}
                      style={{
                        padding: "10px 18px", borderRadius: 10, cursor: "pointer",
                        border: experience === opt.val ? "2px solid #2563eb" : "1.5px solid rgba(0,0,0,0.08)",
                        backgroundColor: experience === opt.val ? "rgba(37,99,235,0.08)" : "#f8f9ff",
                        color: experience === opt.val ? "#2563eb" : "#374151",
                        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                        transition: "all 150ms",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {data && (
            <div style={{
              backgroundColor: "#fff", borderRadius: 20, padding: m ? "24px 20px" : "36px 40px",
              boxShadow: "0 4px 24px rgba(0,12,47,0.08)",
              animation: "fadeInUp 0.3s ease-out",
            }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
                color: "#0b1c30", marginBottom: 24,
              }}>
                Estimated Monthly Salary — {job} in {country}
              </h2>

              {/* Salary range */}
              <div style={{
                display: "grid", gridTemplateColumns: m ? "1fr" : "1fr 1fr", gap: 16, marginBottom: 24,
              }}>
                <div style={{
                  padding: 20, borderRadius: 14,
                  background: "linear-gradient(135deg, #001233, #001845)",
                  textAlign: "center",
                }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em" }}>
                    SALARY RANGE ({data.symbol})
                  </p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>
                    {minSalary.toLocaleString()} — {maxSalary.toLocaleString()}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                    per month
                  </p>
                </div>
                <div style={{
                  padding: 20, borderRadius: 14,
                  background: "linear-gradient(135deg, #064e3b, #065f46)",
                  textAlign: "center",
                }}>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 6, fontWeight: 600, letterSpacing: "0.05em" }}>
                    IN INDIAN RUPEES
                  </p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, color: "#fff" }}>
                    {minINR.toLocaleString()} — {maxINR.toLocaleString()}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>
                    per month (approx)
                  </p>
                </div>
              </div>

              {/* Benefits table */}
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>
                  Additional Benefits
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "Accommodation", value: data.accommodation },
                    { label: "Food", value: data.food },
                    { label: "Overtime Pay", value: data.overtime },
                    { label: "Income Tax", value: ["UAE", "Qatar", "Kuwait", "Saudi Arabia"].includes(country) ? "Tax-free" : "Applicable" },
                    { label: "Annual Leave", value: "21-30 days paid" },
                    { label: "Flight Tickets", value: "Annual return ticket (employer)" },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "10px 14px", borderRadius: 10, backgroundColor: "#f8fafc",
                    }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b" }}>{item.label}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#0b1c30" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yearly estimate */}
              <div style={{
                padding: 20, borderRadius: 14, backgroundColor: "#fffbeb",
                border: "1px solid #fde68a", marginBottom: 24, textAlign: "center",
              }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#92400e", marginBottom: 4 }}>
                  Estimated Annual Savings (after expenses)
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, color: "#92400e" }}>
                  {(Math.round(minINR * 0.6 * 12)).toLocaleString()} — {(Math.round(maxINR * 0.7 * 12)).toLocaleString()} INR
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#b45309", marginTop: 4 }}>
                  *Approximate, based on typical spending patterns. Actual savings depend on lifestyle.
                </p>
              </div>

              {/* CTA */}
              <div style={{
                padding: 24, borderRadius: 14,
                background: "linear-gradient(135deg, #001233, #001845)",
                textAlign: "center",
              }}>
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800,
                  color: "#fff", marginBottom: 8,
                }}>
                  Ready to earn this salary?
                </p>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.6)",
                  marginBottom: 16, lineHeight: 1.6,
                }}>
                  We have verified {job} openings in {country} right now. Apply today — minimal charges, no hidden fees.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <a
                    href={`https://wa.me/919815358832?text=${encodeURIComponent(`Hi, I used your salary calculator. I'm interested in ${job} jobs in ${country}. Please share current openings.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 24px", borderRadius: 10,
                      backgroundColor: "#25D366", color: "#fff",
                      fontFamily: "var(--font-display)", fontSize: 14,
                      fontWeight: 700, textDecoration: "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    WhatsApp — Apply Free
                  </a>
                  <a
                    href="/contactus"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 24px", borderRadius: 10,
                      backgroundColor: "#2563eb", color: "#fff",
                      fontFamily: "var(--font-display)", fontSize: 14,
                      fontWeight: 700, textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8",
            textAlign: "center", marginTop: 24, lineHeight: 1.6, maxWidth: 500, marginLeft: "auto", marginRight: "auto",
          }}>
            Salary figures are estimates based on market data and may vary by employer, location, and contract terms. Exchange rates are approximate. Contact us for exact figures for your specific job offer.
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
