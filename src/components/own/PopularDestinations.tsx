"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { popularDestinations } from "../../../app/_lib/data/jobseekers";

export default function PopularDestinations() {
  const ref = useScrollReveal();
  const m = useIsMobile();

  return (
    <div
      id="destinations"
      ref={ref}
      className="reveal"
      style={{ padding: m ? "48px 20px" : "80px 0", backgroundColor: "var(--surface)" }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: m ? 0 : "0 var(--spacing-8)" }}>
        <div style={{ textAlign: "center", marginBottom: m ? 32 : 48 }}>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            color: "#0052dc", letterSpacing: "0.1em", textTransform: "uppercase",
          }}>
            Popular Destinations
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700, color: "var(--on-surface)",
            marginTop: 8, lineHeight: 1.25,
          }}>
            Choose Your Dream Destination
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15,
            color: "var(--on-surface-variant)", maxWidth: 520,
            margin: "12px auto 0", lineHeight: 1.6,
          }}>
            We place workers in the world&apos;s most in-demand countries. Click to explore job categories and salary ranges.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: m ? "1fr" : "repeat(3, 1fr)",
          gap: m ? 16 : 24,
        }}>
          {popularDestinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/jobs/${dest.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  borderRadius: 16, overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 200ms cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,12,47,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "relative", width: "100%", height: m ? 180 : 200 }}>
                  <Image
                    src={dest.image}
                    alt={`Jobs in ${dest.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Overlay gradient */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "50%",
                    background: "linear-gradient(to top, rgba(0,12,47,0.7), transparent)",
                  }} />
                  <span style={{
                    position: "absolute", bottom: 12, left: 16,
                    fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
                    color: "#fff",
                  }}>
                    {dest.name}
                  </span>
                </div>
                <div style={{ padding: m ? "14px 16px" : "16px 20px" }}>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14,
                    color: "#0052dc", fontWeight: 600, marginBottom: 4,
                  }}>
                    {dest.subtitle}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 13,
                    color: "var(--on-surface-variant)", lineHeight: 1.5,
                  }}>
                    {dest.roles}
                  </p>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                    color: "#0052dc", marginTop: 8,
                  }}>
                    View Jobs &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
