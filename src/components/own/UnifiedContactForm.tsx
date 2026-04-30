"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { useLeadFormSubmit } from "@/hooks/useLeadFormSubmit";
import FormStatus from "@/components/own/FormStatus";
import { TRADE_OPTIONS, REGION_OPTIONS } from "@/lib/sangamOptions";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid"];

function UTMCollector({ onCollect }: { onCollect: (parts: string[]) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const parts: string[] = [];
    for (const key of UTM_KEYS) {
      const v = searchParams.get(key);
      if (v) parts.push(`${key}=${v}`);
    }
    onCollect(parts);
  }, [searchParams, onCollect]);
  return null;
}

export type ContactFormPrefill = Partial<{
  yourname: string;
  phone: string;
  email: string;
  interest: string;
  trade: string;
  experience: string;
  message: string;
}>;

interface UnifiedContactFormProps {
  /** Prefill values (e.g. region from /offer/[region], country from a demand). */
  prefill?: ContactFormPrefill;
  /** Tag attached to the message before submission, e.g. "/current-demands/123" or "homepage-footer". Used for source tracking. */
  source?: string;
  /** Optional context tag added to the message body (e.g. "Applying for: Pipe Fitter Saudi"). */
  contextTag?: string;
  /** Submit button label. */
  submitLabel?: string;
  /** PostHog event metadata. */
  posthogContext?: Record<string, unknown>;
  /** Called after a successful submission. */
  onSuccess?: () => void;
  /** Compact spacing for narrower containers. */
  compact?: boolean;
  /** Make email required (default: false — falls back to a placeholder address). */
  requireEmail?: boolean;
}

export default function UnifiedContactForm({
  prefill,
  source,
  contextTag,
  submitLabel = "Submit Inquiry",
  posthogContext,
  onSuccess,
  compact = false,
  requireEmail = false,
}: UnifiedContactFormProps) {
  const [form, setForm] = useState({
    yourname: prefill?.yourname || "",
    phone: prefill?.phone || "",
    email: prefill?.email || "",
    interest: prefill?.interest || "",
    trade: prefill?.trade || "",
    experience: prefill?.experience || "",
    message: prefill?.message || "",
  });
  const utmRef = useRef<string[]>([]);
  const { status, submit } = useLeadFormSubmit("/api/submit-form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tagBits: string[] = [];
    if (contextTag) tagBits.push(contextTag);
    if (source) tagBits.push(`source: ${source}`);
    if (utmRef.current.length) tagBits.push(utmRef.current.join(" "));
    const tag = tagBits.length ? `\n\n--- ${tagBits.join(" — ")}` : "";

    await submit({
      body: {
        ...form,
        email: form.email || `noemail+${Date.now()}@web.local`,
        message: (form.message || contextTag || "Web inquiry") + tag,
      },
      identify: { email: form.email, phone: form.phone, name: form.yourname },
      onSuccess: () => {
        if (posthogContext) {
          posthog.capture("lead_form_submitted", {
            interest: form.interest,
            trade: form.trade,
            experience: form.experience,
            ...posthogContext,
          });
        }
        setForm({ yourname: "", phone: "", email: "", interest: "", trade: "", experience: "", message: "" });
        onSuccess?.();
      },
    });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: compact ? "12px 14px" : "14px 16px",
    backgroundColor: "#f8f9ff",
    border: "1.5px solid rgba(0,0,0,0.06)",
    borderRadius: 10,
    fontFamily: "var(--font-body)",
    fontSize: 14,
    color: "var(--on-surface)",
    outline: "none",
    transition: "border-color 150ms",
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

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#0052dc";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: compact ? 12 : 16 }}>
      <Suspense fallback={null}>
        <UTMCollector onCollect={(parts) => { utmRef.current = parts; }} />
      </Suspense>
      {/* Name + Phone */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            placeholder="Ex. Rahul Singh"
            required
            value={form.yourname}
            onChange={(e) => setForm({ ...form, yourname: e.target.value })}
            style={inputStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="+91 98XXX XXXXX"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>Email {requireEmail ? "" : "(optional)"}</label>
        <input
          type="email"
          placeholder="you@email.com"
          required={requireEmail}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      {/* Trade */}
      <div>
        <label style={labelStyle}>Trade / Skill</label>
        <select
          value={form.trade}
          onChange={(e) => setForm({ ...form, trade: e.target.value })}
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="">Select your trade</option>
          {TRADE_OPTIONS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Interested In — Gulf / Europe */}
      <div>
        <label style={labelStyle}>Interested In</label>
        <div style={{ display: "flex", gap: 12 }}>
          {REGION_OPTIONS.map((region) => {
            const selected = form.interest === region;
            return (
              <button
                key={region}
                type="button"
                onClick={() => setForm({ ...form, interest: region })}
                style={{
                  flex: 1,
                  padding: compact ? "12px" : "14px",
                  backgroundColor: selected ? "#0052dc" : "#f8f9ff",
                  border: `1.5px solid ${selected ? "#0052dc" : "rgba(0,0,0,0.06)"}`,
                  borderRadius: 10,
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: selected ? "#fff" : "var(--on-surface)",
                  cursor: "pointer",
                  transition: "all 150ms",
                }}
              >
                {region}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label style={labelStyle}>Experience</label>
        <select
          value={form.experience}
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
          style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <option value="">Select experience</option>
          <option value="Fresher">Fresher</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Message {compact ? "(optional)" : ""}</label>
        <textarea
          placeholder="Tell us about your background..."
          rows={compact ? 3 : 4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: "vertical", minHeight: compact ? 80 : 100 }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          width: "100%",
          padding: "16px",
          backgroundColor: "#0052dc",
          color: "#fff",
          fontFamily: "var(--font-display)",
          fontSize: 15,
          fontWeight: 700,
          border: "none",
          borderRadius: 10,
          cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
          boxShadow: "0 8px 24px rgba(0,82,220,0.25)",
          transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
        }}
        onMouseEnter={(e) => {
          if (status !== "loading") {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,82,220,0.35)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,82,220,0.25)";
        }}
      >
        {status === "loading" ? "Submitting..." : status === "success" ? "Sent! We'll contact you soon." : submitLabel}
      </button>

      {status === "error" && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#dc2626", textAlign: "center" }}>
          Something went wrong. Please try again or call +91 98148-20432.
        </p>
      )}

      <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8", textAlign: "center" }}>
        By submitting, you agree to be contacted by our team.
      </p>
      <FormStatus status={status} successText="Inquiry sent. We will contact you soon." />
    </form>
  );
}
