"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";

const announcements = [
  {
    id: 1,
    title: "Construction Workers — Saudi Arabia",
    roles: "Mason, Carpenter, Steel Fixer, Painter, Electrician",
    salary: "SAR 1,500 – 2,500/month",
    tag: "Urgent",
    link: "/jobs/saudi-arabia",
  },
  {
    id: 2,
    title: "Factory Workers — UAE (Dubai)",
    roles: "Machine Operator, Helper, Packing, Quality Check",
    salary: "AED 1,500 – 2,500/month",
    tag: "Hot",
    link: "/jobs/uae",
  },
  {
    id: 3,
    title: "Warehouse & Logistics — Poland",
    roles: "Warehouse Helper, Forklift Operator, Sorter",
    salary: "PLN 4,500 – 6,000/month",
    tag: "New",
    link: "/jobs/poland",
  },
  {
    id: 4,
    title: "Hospitality Staff — Qatar",
    roles: "Cook, Waiter, Room Boy, Kitchen Helper",
    salary: "QAR 1,500 – 3,000/month",
    tag: "Open",
    link: "/jobs/qatar",
  },
  {
    id: 5,
    title: "Agriculture Workers — Romania",
    roles: "Farm Worker, Greenhouse Helper, Fruit Picker",
    salary: "RON 3,500 – 5,000/month",
    tag: "Seasonal",
    link: "/jobs/romania",
  },
  {
    id: 6,
    title: "Drivers (HMV/LMV) — Gulf Countries",
    roles: "Heavy Vehicle Driver, Light Vehicle Driver, Taxi Driver",
    salary: "AED 2,000 – 4,000/month",
    tag: "High Demand",
    link: "/jobs/uae",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  Urgent: { bg: "rgba(220,38,38,0.1)", text: "#dc2626" },
  Hot: { bg: "rgba(234,88,12,0.1)", text: "#ea580c" },
  New: { bg: "rgba(0,82,220,0.1)", text: "#0052dc" },
  Open: { bg: "rgba(22,163,74,0.1)", text: "#16a34a" },
  Seasonal: { bg: "rgba(124,58,237,0.1)", text: "#7c3aed" },
  "High Demand": { bg: "rgba(202,138,4,0.1)", text: "#ca8a04" },
};

export default function LatestJobAnnouncements() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        padding: m ? "48px 20px" : "80px 0",
        backgroundColor: "var(--surface-container-low)",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: m ? 24 : 40, flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
              color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Latest Openings
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 700, color: "var(--on-surface)",
              marginTop: 8, lineHeight: 1.25,
            }}>
              Current Job Announcements
            </h2>
          </div>
          <Link
            href="/current-demands"
            style={{
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
              color: "#0052dc", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 4,
            }}
          >
            View All Openings &rarr;
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
          gap: m ? 12 : 20,
        }}>
          {announcements.map((job) => {
            const colors = tagColors[job.tag] || tagColors.Open;
            return (
              <Link key={job.id} href={job.link} style={{ textDecoration: "none", color: "inherit" }}>
                <div
                  style={{
                    padding: m ? 16 : 24,
                    backgroundColor: "#fff",
                    borderRadius: 16,
                    border: "1px solid rgba(0,0,0,0.06)",
                    transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex", flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,12,47,0.1)";
                    e.currentTarget.style.borderColor = "#0052dc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                      color: "var(--on-surface)", lineHeight: 1.3, flex: 1,
                    }}>
                      {job.title}
                    </h3>
                    <span style={{
                      padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                      fontFamily: "var(--font-body)",
                      backgroundColor: colors.bg, color: colors.text,
                      whiteSpace: "nowrap", marginLeft: 8,
                    }}>
                      {job.tag}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: "var(--on-surface-variant)", lineHeight: 1.5, marginBottom: 12, flex: 1,
                  }}>
                    {job.roles}
                  </p>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    paddingTop: 12, borderTop: "1px solid rgba(0,0,0,0.06)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                      color: "#0052dc",
                    }}>
                      {job.salary}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
                      color: "var(--on-surface-variant)",
                    }}>
                      Apply &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
