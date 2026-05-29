"use client";

import Image from "next/image";

/* ============================================================
   Mobile-only "Visit Us" office card.
   Renders only below 768px via .mobile-only CSS in global.css.
   Shows the office photo, canonical address, hours, and three
   primary CTAs: Get Directions, Call, WhatsApp.
   ============================================================ */

const ADDRESS_FULL = "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040";
const ADDRESS_SHORT = "Golden Avenue, Near Sukhjeet Hospital";
const ADDRESS_LINE2 = "Jalandhar Road, Nakodar, Punjab 144040";
const PHONE_CALL = "+91 98148-20432";
const PHONE_CALL_TEL = "+919814820432";
const PHONE_WA = "919815358832";
const HOURS = "Mon “ Sat Â· 9:00 AM “ 6:30 PM";

const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_FULL + ", India"
)}`;

export default function MobileVisitUs() {
  return (
    <section className="mobile-only" style={{ padding: "32px 0", backgroundColor: "#f8f9ff" }}>
      <div style={{ padding: "0 16px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ display: "inline-block", width: 22, height: 3, backgroundColor: "#0052dc", borderRadius: 999 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 800, color: "#0052dc", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Walk Into Our Office
          </span>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "#0b1c30", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: 6 }}>
          Visit Us in Nakodar
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#3b4858", lineHeight: 1.5 }}>
          Drop in for a free consultation. No appointment needed — we&rsquo;re open 6 days a week.
        </div>
      </div>

      <div
        style={{
          margin: "0 16px",
          borderRadius: 18,
          overflow: "hidden",
          backgroundColor: "#fff",
          border: "1px solid rgba(0,12,47,0.08)",
          boxShadow: "0 8px 24px rgba(11,28,48,0.06)",
        }}
      >
        {/* Office photo */}
        <div style={{ position: "relative", width: "100%", height: 180, backgroundColor: "#0b1c30" }}>
          <Image
            src="/shiva-manpower-support-team.webp"
            alt="Shiva Travel & Manpower Consultants office in Nakodar, Punjab"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,12,47,0) 50%, rgba(0,12,47,0.65) 100%)" }} />
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "5px 11px",
              backgroundColor: "rgba(34,197,94,0.95)",
              borderRadius: 999,
              fontFamily: "var(--font-display)",
              fontSize: 10,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#fff",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Open Now
          </div>
          <p
            style={{
              position: "absolute",
              bottom: 12,
              left: 14,
              right: 14,
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              color: "#facc15",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Our HQ Â· Since 2002
          </p>
        </div>

        {/* Address block */}
        <div style={{ padding: 18 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#0052dc15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#0b1c30", marginBottom: 2 }}>
                {ADDRESS_SHORT}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#64748b", lineHeight: 1.4 }}>
                {ADDRESS_LINE2}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: "#16a34a15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#0b1c30" }}>
                {HOURS}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#16a34a", fontWeight: 600 }}>
                â— Currently open
              </p>
            </div>
          </div>

          {/* CTAs — Get Directions (primary) */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "14px 18px",
              backgroundColor: "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 800,
              borderRadius: 12,
              textDecoration: "none",
              marginBottom: 8,
              boxShadow: "0 6px 18px rgba(0,82,220,0.28)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions on Google Maps
          </a>

          {/* CTAs — Call + WhatsApp side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <a
              href={`tel:${PHONE_CALL_TEL}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "12px 14px",
                backgroundColor: "#fff",
                color: "#0b1c30",
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                border: "1.5px solid #e5e7eb",
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b1c30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}?text=Hi%2C%20I%27d%20like%20to%20visit%20your%20office%20for%20a%20free%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "12px 14px",
                backgroundColor: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 12,
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp
            </a>
          </div>

          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#94a3b8", textAlign: "center", marginTop: 10, lineHeight: 1.4 }}>
            {PHONE_CALL} Â· {`+91 ${PHONE_WA.slice(2, 7)}-${PHONE_WA.slice(7)}`} (WhatsApp)
          </p>
        </div>
      </div>
    </section>
  );
}
