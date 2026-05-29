"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

/* ============================================================
   VsThemComparison — sales-weapon comparison table.
   Inspired by theinklusive.com section 7.
   "Us vs. Them" row-based grid. Us column subtly highlighted.
   No checkbox icon spam — just confident copy + thin dividers.
   ============================================================ */

type Cell = string;

export interface ComparisonRow {
  criterion: string;
  us: Cell;
  middle: Cell;
  right: Cell;
}

export interface VsThemComparisonProps {
  kicker?: string;
  title: string;
  highlight?: string;
  intro?: string;
  columns: { us: string; middle: string; right: string };
  rows: ComparisonRow[];
}

export default function VsThemComparison({
  kicker = "Why Us",
  title,
  highlight,
  intro,
  columns,
  rows,
}: VsThemComparisonProps) {
  const m = useIsMobile();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    // Mobile uses .vt-row (real boxes). Desktop uses .vt-cell because rows
    // are display:contents wrappers and can't be animated directly.
    const els = root.querySelectorAll<HTMLElement>(".vt-row, .vt-cell");
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 14 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.03,
              ease: "power2.out",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return <>{title}</>;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span style={{ color: "#001f5d", position: "relative", whiteSpace: "nowrap" }}>
          {highlight}
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: m ? -2 : -4,
              height: m ? 6 : 10,
              backgroundColor: "#facc15",
              zIndex: -1,
              opacity: 0.55,
            }}
          />
        </span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  // Mobile-friendly: render as stacked cards instead of horizontal table
  if (m) {
    return (
      <div
        ref={rootRef}
        role="region"
        aria-label="Comparison"
        style={{ width: "100%", backgroundColor: "#fff", padding: "80px 0" }}
      >
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: "#001f5d", borderRadius: 2 }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 800, color: "#001f5d", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {kicker}
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 7vw, 2.5rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, marginBottom: 16 }}>
              {renderTitle()}
            </h2>
            {intro && (
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.6, margin: 0 }}>
                {intro}
              </p>
            )}
          </div>

          {rows.map((row) => (
            <div key={row.criterion} className="vt-row" style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(11,28,48,0.10)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#0b1c30", marginBottom: 14, letterSpacing: "0.01em" }}>
                {row.criterion}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ padding: "12px 14px", borderRadius: 10, backgroundColor: "#001f5d", color: "#fff" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#bfdbfe", marginBottom: 4 }}>
                    {columns.us}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5 }}>{row.us}</div>
                </div>
                <div style={{ padding: "12px 14px", borderRadius: 10, backgroundColor: "#f3f4f6" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 4 }}>
                    {columns.middle}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.5 }}>{row.middle}</div>
                </div>
                <div style={{ padding: "12px 14px", borderRadius: 10, backgroundColor: "#f3f4f6" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 4 }}>
                    {columns.right}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#43474d", lineHeight: 1.5 }}>{row.right}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Comparison"
      style={{ width: "100%", backgroundColor: "#fff", padding: "140px 0" }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div style={{ maxWidth: 820, marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ display: "inline-block", width: 36, height: 3, backgroundColor: "#001f5d", borderRadius: 2 }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 800, color: "#001f5d", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {kicker}
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)", fontWeight: 800, color: "#0b1c30", lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0, marginBottom: intro ? 24 : 0 }}>
            {renderTitle()}
          </h2>
          {intro && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: 19, color: "#43474d", lineHeight: 1.6, margin: 0, maxWidth: 640 }}>
              {intro}
            </p>
          )}
        </div>

        {/* Comparison grid — single grid; Us column highlight is per-cell bg, not a spanning overlay */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr",
            columnGap: 0,
            rowGap: 0,
          }}
        >
          {/* HEADER ROW */}
          <div
            style={{
              padding: "20px 16px 24px",
              borderBottom: "2px solid #0b1c30",
            }}
          />
          <div
            style={{
              padding: "20px 16px 24px",
              borderBottom: "2px solid #0b1c30",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(0,31,93,0.05)",
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 800,
                color: "#001f5d",
                letterSpacing: "-0.01em",
              }}
            >
              {columns.us}
            </div>
            <div
              style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: 999,
                backgroundColor: "#001f5d",
                fontSize: 10,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Recommended
            </div>
          </div>
          <div
            style={{
              padding: "20px 16px 24px",
              borderBottom: "2px solid #0b1c30",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 600,
              color: "#64748b",
              alignSelf: "end",
            }}
          >
            {columns.middle}
          </div>
          <div
            style={{
              padding: "20px 16px 24px",
              borderBottom: "2px solid #0b1c30",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 600,
              color: "#64748b",
              alignSelf: "end",
            }}
          >
            {columns.right}
          </div>

          {/* ROWS — each row contributes 4 cells to the same grid */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            const cellBase: React.CSSProperties = {
              padding: "28px 16px",
              borderBottom: isLast ? "none" : "1px solid rgba(11,28,48,0.10)",
              display: "flex",
              alignItems: "center",
            };
            const usCellExtra: React.CSSProperties = {
              backgroundColor: "rgba(0,31,93,0.05)",
              borderBottom: isLast ? "none" : "1px solid rgba(0,31,93,0.10)",
              ...(isLast && {
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }),
            };
            return (
              <div key={row.criterion} style={{ display: "contents" }}>
                <div
                  className="vt-cell"
                  style={{
                    ...cellBase,
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#0b1c30",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {row.criterion}
                </div>
                <div
                  className="vt-cell"
                  style={{
                    ...cellBase,
                    ...usCellExtra,
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#0b1c30",
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {row.us}
                </div>
                <div
                  className="vt-cell"
                  style={{
                    ...cellBase,
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#94a3b8",
                    lineHeight: 1.5,
                  }}
                >
                  {row.middle}
                </div>
                <div
                  className="vt-cell"
                  style={{
                    ...cellBase,
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#94a3b8",
                    lineHeight: 1.5,
                  }}
                >
                  {row.right}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
