"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ============================================================
   Mobile-only credibility stack
   Renders below 768px only (via .mobile-only CSS in global.css).
   Each subsection is its own horizontal-snap row to keep
   vertical scroll under control. Desktop is untouched.

   Visa stamps / deployed feed / airport photos / destination reels
   are admin-editable via /admin/credibility. Module-scope arrays
   below stay as fallbacks for when the API is slow or down.
   ============================================================ */

const SECTION_PADDING = "32px 0";

interface LiveCredibility {
  visaStamps?: typeof visaStamps;
  deployedFeed?: typeof deployedFeed;
  airportPhotos?: typeof airportPhotos;
  destinationReels?: typeof destinationReels;
}

function useCredibilityData() {
  const [live, setLive] = useState<LiveCredibility | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/credibility")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data === "object") setLive(data);
      })
      .catch(() => {
        // Network/API failure — silently fall back to module-scope arrays.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    visaStamps: live?.visaStamps?.length ? live.visaStamps : visaStamps,
    deployedFeed: live?.deployedFeed?.length ? live.deployedFeed : deployedFeed,
    airportPhotos: live?.airportPhotos?.length ? live.airportPhotos : airportPhotos,
    destinationReels: live?.destinationReels?.length ? live.destinationReels : destinationReels,
  };
}

function SectionHeader({
  kicker,
  title,
  sub,
  accent = "#0052dc",
  onDark = false,
}: {
  kicker: string;
  title: string;
  sub?: string;
  accent?: string;
  onDark?: boolean;
}) {
  const titleColor = onDark ? "#ffffff" : "#0b1c30";
  const subColor = onDark ? "rgba(255,255,255,0.72)" : "#3b4858";
  return (
    <div style={{ padding: "0 16px", marginBottom: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <span
          style={{
            display: "inline-block",
            width: 22,
            height: 3,
            backgroundColor: accent,
            borderRadius: 999,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 800,
            color: accent,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: 800,
          color: titleColor,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          marginBottom: sub ? 6 : 0,
        }}
      >
        {title}
      </div>
      {sub && (
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: subColor,
            lineHeight: 1.5,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

const HSCROLL_STYLE: React.CSSProperties = {
  display: "flex",
  gap: 12,
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
  padding: "4px 16px 12px",
  scrollPaddingLeft: 16,
};

/* ============================================================
   1. VISA STAMPS & WORK PERMITS
   ============================================================ */
const visaStamps = [
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (15).jpeg", name: "Vijay K.", country: "Dubai", flag: "🇦🇪", month: "May 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (5).jpeg", name: "Manjit S.", country: "Poland", flag: "🇵🇱", month: "May 2026", type: "Work Permit" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.06 PM.jpeg", name: "Narinder P.", country: "Romania", flag: "🇷🇴", month: "Apr 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (8).jpeg", name: "Harpreet S.", country: "Saudi Arabia", flag: "🇸🇦", month: "Apr 2026", type: "Iqama" },
  { img: "/WhatsApp Image 2026-05-09 at 5.04.42 PM.jpeg", name: "Sukhdev S.", country: "Bulgaria", flag: "🇧🇬", month: "Apr 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (11).jpeg", name: "Jaspreet S.", country: "Qatar", flag: "🇶🇦", month: "Mar 2026", type: "QID Approval" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (2).jpeg", name: "Karamjit S.", country: "Kuwait", flag: "🇰🇼", month: "Mar 2026", type: "Work Visa" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (13).jpeg", name: "Balwinder S.", country: "UAE", flag: "🇦🇪", month: "Mar 2026", type: "Employment Visa" },
];

function VisaStamps({ items = visaStamps }: { items?: typeof visaStamps }) {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface)" }}>
      <SectionHeader
        kicker="Verified Placements"
        title="Real Visas. Real Workers."
        sub="Stamped this season. Names shown with first-name only for privacy."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {items.map((v, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 78%",
              maxWidth: "78%",
              height: 280,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              scrollSnapAlign: "start",
              backgroundColor: "#000c2f",
              boxShadow: "0 6px 18px rgba(0,12,47,0.12)",
            }}
          >
            <Image
              src={v.img}
              alt={`${v.type} for ${v.name} to ${v.country}`}
              fill
              sizes="78vw"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,12,47,0) 40%, rgba(0,12,47,0.85) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                padding: "4px 9px",
                backgroundColor: "rgba(250, 204, 21, 0.95)",
                borderRadius: 8,
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 700,
                color: "#000c2f",
                letterSpacing: "0.04em",
              }}
            >
              {v.type.toUpperCase()}
            </div>
            <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                {v.name} → {v.country} {v.flag}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.75)" }}>
                Stamped {v.month}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   2. THIS WEEK WE DEPLOYED — marquee ticker
   ============================================================ */
const deployedFeed = [
  { day: "Mon", name: "Vijay K.", country: "Dubai", role: "Construction", flag: "🇦🇪" },
  { day: "Tue", name: "Manjit S.", country: "Poland", role: "Welding", flag: "🇵🇱" },
  { day: "Tue", name: "Harpreet S.", country: "Saudi Arabia", role: "Engineering", flag: "🇸🇦" },
  { day: "Wed", name: "Narinder P.", country: "Romania", role: "Logistics", flag: "🇷🇴" },
  { day: "Wed", name: "Karamjit S.", country: "Kuwait", role: "Driver", flag: "🇰🇼" },
  { day: "Thu", name: "Jaspreet S.", country: "Qatar", role: "Oil & Gas", flag: "🇶🇦" },
  { day: "Thu", name: "Balwinder S.", country: "UAE", role: "Hospitality", flag: "🇦🇪" },
  { day: "Fri", name: "Sukhdev S.", country: "Bulgaria", role: "Factory", flag: "🇧🇬" },
];

function DeployedTicker({ feed = deployedFeed }: { feed?: typeof deployedFeed }) {
  const items = [...feed, ...feed];
  return (
    <section
      style={{
        padding: "24px 0",
        background: "linear-gradient(135deg, #001233 0%, #001845 100%)",
        overflow: "hidden",
      }}
    >
      <SectionHeader
        kicker="● Live This Week"
        title="People We Deployed"
        accent="#facc15"
        onDark
      />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: 10,
            width: "fit-content",
            animation: "mc-marquee 40s linear infinite",
            paddingLeft: 16,
          }}
        >
          {items.map((d, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: 10, fontWeight: 700, color: "#facc15", letterSpacing: "0.06em" }}>
                {d.day.toUpperCase()}
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#fff", fontWeight: 600 }}>
                {d.name}
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                → {d.country} {d.flag} · {d.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. AIRPORT / DEPARTURE PHOTOS
   ============================================================ */
const airportPhotos = [
  { img: "/WhatsApp Image 2026-05-09 at 5.07.06 PM (1).jpeg", name: "Vijay K.", to: "Dubai", flag: "🇦🇪" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.06 PM (2).jpeg", name: "Manjit S.", to: "Warsaw", flag: "🇵🇱" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.06 PM (3).jpeg", name: "Harpreet S.", to: "Riyadh", flag: "🇸🇦" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM.jpeg", name: "Narinder P.", to: "Bucharest", flag: "🇷🇴" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (1).jpeg", name: "Karamjit S.", to: "Kuwait City", flag: "🇰🇼" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (3).jpeg", name: "Jaspreet S.", to: "Doha", flag: "🇶🇦" },
  { img: "/WhatsApp Image 2026-05-09 at 5.07.07 PM (4).jpeg", name: "Balwinder S.", to: "Abu Dhabi", flag: "🇦🇪" },
];

function AirportPhotos({ items = airportPhotos }: { items?: typeof airportPhotos }) {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface-container-low)" }}>
      <SectionHeader
        kicker="Departure Day"
        title="The Moment They Fly Out"
        sub="Photos sent from IGI Airport — bags packed, visa in hand, family at the gate."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {items.map((p, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 65%",
              maxWidth: "65%",
              height: 340,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              scrollSnapAlign: "start",
              backgroundColor: "#000c2f",
            }}
          >
            <Image src={p.img} alt={`${p.name} departing for ${p.to}`} fill sizes="65vw" style={{ objectFit: "cover" }} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.8) 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                {p.name}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#facc15", fontWeight: 600 }}>
                ✈ {p.to} {p.flag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   4. LICENSE / EMBASSY DOCUMENTATION
   ============================================================ */
const docs = [
  {
    title: "RA License",
    number: "B-1794",
    issuer: "Ministry of External Affairs, Govt. of India",
    validity: "Valid till June 2027",
    color: "#0052dc",
    icon: "🛡",
  },
  {
    title: "MEA Registration",
    number: "PUN/PER/100/5/10094/2022",
    issuer: "Protector General of Emigrants",
    validity: "Active",
    color: "#006d3a",
    icon: "🏛",
  },
  {
    title: "ALMRA Punjab",
    number: "Member",
    issuer: "Association of Licensed Manpower Recruiting Agents",
    validity: "Punjab Chapter",
    color: "#c9a227",
    icon: "✓",
  },
  {
    title: "20+ Years Operating",
    number: "Since 2002",
    issuer: "Shiva Manpower Consultants, Nakodar",
    validity: "Govt-licensed since day one",
    color: "#8b1a3a",
    icon: "★",
  },
];

function LicenseDocs() {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface)" }}>
      <SectionHeader
        kicker="Verified & Licensed"
        title="The Paper Trail"
        sub="Every claim on this site is backed by a government document. Tap a card to verify."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {docs.map((d, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 78%",
              maxWidth: "78%",
              scrollSnapAlign: "start",
              padding: 18,
              borderRadius: 16,
              backgroundColor: "#fff",
              border: `1px solid rgba(0,12,47,0.08)`,
              boxShadow: "0 4px 14px rgba(0,12,47,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minHeight: 180,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${d.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {d.icon}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--on-surface)" }}>
                {d.title}
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: d.color, marginTop: 2 }}>
                {d.number}
              </p>
            </div>
            <div style={{ marginTop: "auto" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--on-surface-variant)", lineHeight: 1.4 }}>
                {d.issuer}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#22c55e", fontWeight: 600, marginTop: 4 }}>
                ✓ {d.validity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   5. PAY SLIP — BEFORE / AFTER
   ============================================================ */
const payslips = [
  { role: "Construction Worker", before: "₹16,000", after: "AED 4,200", afterInr: "≈ ₹95,000", country: "Dubai", flag: "🇦🇪", multiple: "6×" },
  { role: "Welder", before: "₹20,000", after: "PLN 5,800", afterInr: "≈ ₹1,28,000", country: "Poland", flag: "🇵🇱", multiple: "6.4×" },
  { role: "Factory Operator", before: "₹14,000", after: "RON 4,500", afterInr: "≈ ₹85,000", country: "Romania", flag: "🇷🇴", multiple: "6×" },
  { role: "Driver", before: "₹18,000", after: "SAR 3,500", afterInr: "≈ ₹78,000", country: "Saudi Arabia", flag: "🇸🇦", multiple: "4.3×" },
  { role: "Hospitality", before: "₹15,000", after: "QAR 3,200", afterInr: "≈ ₹73,000", country: "Qatar", flag: "🇶🇦", multiple: "4.9×" },
];

function PayslipComparison() {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface-container-low)" }}>
      <SectionHeader
        kicker="What Actually Changes"
        title="From Punjab to Abroad"
        sub="Real take-home, real roles. Lodging + food often paid on top — not shown here."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {payslips.map((p, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 78%",
              maxWidth: "78%",
              scrollSnapAlign: "start",
              padding: 16,
              borderRadius: 16,
              backgroundColor: "#fff",
              border: "1px solid rgba(0,12,47,0.08)",
              boxShadow: "0 4px 14px rgba(0,12,47,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {/* Top row: role + multiplier chip */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--on-surface)" }}>
                {p.role}
              </p>
              <div
                style={{
                  padding: "3px 9px",
                  borderRadius: 999,
                  backgroundColor: "#dcfce7",
                  color: "#15803d",
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                {p.multiple} salary
              </div>
            </div>

            {/* Before block */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 12,
                backgroundColor: "#f3f4f6",
              }}
            >
              <p style={{ fontSize: 10, fontFamily: "var(--font-body)", color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontWeight: 700 }}>
                In Punjab
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#9ca3af", textDecoration: "line-through" }}>
                  {p.before}
                </p>
                <p style={{ fontSize: 11, fontFamily: "var(--font-body)", color: "#9ca3af" }}>/ month</p>
              </div>
            </div>

            {/* Down arrow */}
            <div style={{ textAlign: "center", color: "#16a34a", fontSize: 16, fontWeight: 700, lineHeight: 1, marginTop: -2, marginBottom: -2 }}>
              ↓
            </div>

            {/* After block — solid green, no gradient */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 12,
                backgroundColor: "#dcfce7",
                border: "1px solid #86efac",
              }}
            >
              <p style={{ fontSize: 10, fontFamily: "var(--font-body)", color: "#15803d", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontWeight: 700 }}>
                In {p.country} {p.flag}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "#15803d" }}>
                  {p.after}
                </p>
                <p style={{ fontSize: 11, fontFamily: "var(--font-body)", color: "#15803d", fontWeight: 600 }}>/ month</p>
              </div>
              <p style={{ fontSize: 11, fontFamily: "var(--font-body)", color: "#16a34a", fontWeight: 600, marginTop: 4 }}>
                {p.afterInr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   6. DESTINATION-SHOT VIDEOS (filtered, mobile only)
   ============================================================ */
const destinationReels = [
  { id: "DYAOpKwmmdm", label: "Success Story", country: "Overseas", type: "p" as const },
  { id: "DX68mgIyUGh", label: "Live Update", country: "Overseas", type: "reel" as const },
  { id: "DFUZ2gJNj2d", label: "Bulgaria Placement", country: "Europe", type: "reel" as const },
  { id: "DWNzMiVFbzb", label: "Factory Worker", country: "Dubai", type: "reel" as const },
  { id: "DUffhPTkf0C", label: "KFC Dubai Visa", country: "UAE", type: "reel" as const },
  { id: "DUDr71Bksev", label: "Work Permit Approved", country: "Bulgaria", type: "reel" as const },
];

function DestinationVideos({ items = destinationReels }: { items?: typeof destinationReels }) {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface)" }}>
      <SectionHeader
        kicker="Filmed Abroad"
        title="Workers, From The Site"
        sub="Not actors. Not stock footage. Clips workers sent us from their job site."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {items.map((r, i) => (
          <a
            key={i}
            href={`https://www.instagram.com/${r.type}/${r.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: "0 0 65%",
              maxWidth: "65%",
              height: 380,
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              scrollSnapAlign: "start",
              textDecoration: "none",
              backgroundColor: "var(--surface-container)",
              display: "block",
            }}
          >
            <iframe
              src={`https://www.instagram.com/${r.type}/${r.id}/embed/`}
              style={{
                width: 300,
                height: 660,
                border: "none",
                position: "absolute",
                top: -60,
                left: -20,
                pointerEvents: "none",
              }}
              scrolling="no"
              allow="encrypted-media"
              loading="lazy"
              tabIndex={-1}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 60%, transparent)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, zIndex: 3 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff" }}>
                {r.label}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.7)" }}>
                {r.country}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   7. PROCESS TRANSPARENCY — behind the scenes
   ============================================================ */
const process = [
  {
    step: "01",
    title: "GAMCA Medical",
    desc: "We coordinate appointments at approved medical centres for Gulf-bound candidates.",
    img: "/industry.webp",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "E-Migrate Filing",
    desc: "Filed on the official MEA E-Migrate portal under our RA-1794 registration.",
    img: "/Office desk.webp",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Embassy Submission",
    desc: "Document submission, attestation, and visa stamping handled in-house.",
    img: "/Professional Punjab office environment.webp",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Pre-Departure Briefing",
    desc: "Cultural orientation + paperwork check, 48 hours before flight.",
    img: "/Professional Indian executive.webp",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Post-Arrival Follow-up",
    desc: "We stay in touch after deployment — most agencies don't.",
    img: "/globe.jpg",
    badge: "Step 5",
  },
];

function ProcessTransparency() {
  return (
    <section style={{ padding: SECTION_PADDING, background: "var(--surface-container-low)" }}>
      <SectionHeader
        kicker="Behind The Scenes"
        title="The Unglamorous Part"
        sub="Most agencies hide this. We show it because doing it right is what takes 20 years."
      />
      <div className="mobile-hscroll" style={HSCROLL_STYLE}>
        {process.map((p, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 78%",
              maxWidth: "78%",
              scrollSnapAlign: "start",
              borderRadius: 16,
              overflow: "hidden",
              backgroundColor: "#fff",
              border: "1px solid rgba(0,12,47,0.08)",
              boxShadow: "0 4px 14px rgba(0,12,47,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 140, backgroundColor: "#000c2f" }}>
              <Image src={p.img} alt={p.title} fill sizes="78vw" style={{ objectFit: "cover" }} />
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  padding: "4px 9px",
                  backgroundColor: "rgba(0,12,47,0.85)",
                  borderRadius: 999,
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#facc15",
                  letterSpacing: "0.06em",
                }}
              >
                {p.badge.toUpperCase()}
              </div>
            </div>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 6 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 11, color: "var(--surface-tint)", fontWeight: 700, letterSpacing: "0.08em" }}>
                {p.step}
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--on-surface)" }}>
                {p.title}
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--on-surface-variant)", lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 16px 0", textAlign: "center" }}>
        <Link
          href="/contactus"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "12px 22px",
            borderRadius: 10,
            backgroundColor: "#001f5d",
            color: "#fff",
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Start your application — Free →
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
   STACK — exported wrapper. Mobile-only via CSS class.
   ============================================================ */
/* Top half — runs right after the hero so credibility lands in the first
   ~2 screens of scroll. Just the two punchiest blocks. */
export function MobileCredibilityTop() {
  const live = useCredibilityData();
  return (
    <div className="mobile-only">
      <VisaStamps items={live.visaStamps} />
    </div>
  );
}

/* Bottom half — deeper proof (departure photos, license docs, payslips,
   destination videos, behind-the-scenes process). Lives lower in the page. */
export function MobileCredibilityBottom() {
  const live = useCredibilityData();
  return (
    <div className="mobile-only">
      <AirportPhotos items={live.airportPhotos} />
      <PayslipComparison />
      <DestinationVideos items={live.destinationReels} />
      <ProcessTransparency />
    </div>
  );
}

/* Default export kept for backward compatibility — renders all 7 in order. */
export default function MobileCredibilityStack() {
  const live = useCredibilityData();
  return (
    <div className="mobile-only">
      <VisaStamps items={live.visaStamps} />
      <DeployedTicker feed={live.deployedFeed} />
      <AirportPhotos items={live.airportPhotos} />
      <LicenseDocs />
      <PayslipComparison />
      <DestinationVideos items={live.destinationReels} />
      <ProcessTransparency />
    </div>
  );
}
