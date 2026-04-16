"use client";

import Link from "next/link";
import type { Demand } from "../../../app/api/admin/demands/route";

export function DemandCard({ demand }: { demand: Demand }) {
  const href = `/contactus?interest=${encodeURIComponent(demand.country || "")}&demand=${encodeURIComponent(demand.title)}`;

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 20,
        overflow: "hidden",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,12,47,0.05), 0 1px 3px rgba(0,12,47,0.03)",
        transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 48px rgba(0,12,47,0.14), 0 8px 16px rgba(0,12,47,0.06)";
        e.currentTarget.style.borderColor = "#bfdbfe";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,12,47,0.05), 0 1px 3px rgba(0,12,47,0.03)";
        e.currentTarget.style.borderColor = "#e5e7eb";
      }}
    >
      {/* Poster — always fills the space */}
      <div
        style={{
          width: "100%",
          aspectRatio: "4/5",
          backgroundColor: "#f1f5f9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {demand.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={demand.poster}
            alt={demand.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              fontFamily: "var(--font-body)",
              fontSize: 13,
            }}
          >
            No poster
          </div>
        )}

        {demand.country && (
          <span
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              padding: "5px 14px",
              backgroundColor: "rgba(11,28,48,0.9)",
              color: "#fff",
              borderRadius: 999,
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.04em",
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {demand.country}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 700,
            color: "#0b1c30",
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {demand.title}
        </h3>

        {demand.description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              color: "#64748b",
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {demand.description}
          </p>
        )}

        {demand.sectors.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {demand.sectors.slice(0, 3).map((sector) => (
              <span
                key={sector}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#0052dc",
                  backgroundColor: "#eff4ff",
                  padding: "3px 10px",
                  borderRadius: 20,
                }}
              >
                {sector}
              </span>
            ))}
            {demand.sectors.length > 3 && (
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#94a3b8",
                  padding: "3px 4px",
                }}
              >
                +{demand.sectors.length - 3}
              </span>
            )}
          </div>
        )}

        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 700,
            color: "#0052dc",
            marginTop: "auto",
            paddingTop: 10,
            borderTop: "1px solid #f1f5f9",
          }}
        >
          Apply Now &rarr;
        </div>
      </div>
    </Link>
  );
}

export function DemandsEmpty({ message = "New openings will be posted here soon. Contact us for the latest list." }: { message?: string }) {
  return (
    <div
      style={{
        padding: "48px 32px",
        border: "2px dashed #e5e7eb",
        borderRadius: 16,
        textAlign: "center",
        backgroundColor: "#f8f9ff",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "#64748b",
          maxWidth: 420,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        {message}
      </p>
    </div>
  );
}
