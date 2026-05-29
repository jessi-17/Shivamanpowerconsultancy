"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export type Stat = { value: string; label: string };

interface StatsRibbonProps {
  stats: Stat[];
  /** Negative number to overlap the section above, 0 for no overlap. Defaults to -56. */
  overlap?: number;
  /** Max width in px. Defaults to 1080. */
  maxWidth?: number;
  className?: string;
}

const ANIM_DURATION_MS = 1600;
const STAGGER_PER_STAT_MS = 110;

type ParsedValue = {
  num: number;
  decimals: number;
  suffix: string;
  hasComma: boolean;
};

function parseAnimatable(value: string): ParsedValue | null {
  const match = /^([\d,]+(?:\.\d+)?)([a-zA-Z]+)?([+%])?$/.exec(value.trim());
  if (!match) return null;
  const [, numStr, magnitude = "", modifier = ""] = match;
  const cleanNum = numStr.replace(/,/g, "");
  const num = parseFloat(cleanNum);
  if (!isFinite(num)) return null;
  const decimals = cleanNum.includes(".") ? cleanNum.split(".")[1]!.length : 0;
  return {
    num,
    decimals,
    suffix: magnitude + modifier,
    hasComma: numStr.includes(","),
  };
}

function formatNumber(n: number, decimals: number, hasComma: boolean): string {
  const fixed = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
  if (!hasComma) return fixed;
  const parts = fixed.split(".");
  parts[0] = parts[0]!.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function CountUp({
  value,
  start,
  delay,
}: {
  value: string;
  start: boolean;
  delay: number;
}) {
  const parsed = useMemo(() => parseAnimatable(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed ? formatNumber(0, parsed.decimals, parsed.hasComma) + parsed.suffix : value,
  );
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!parsed || !start || hasAnimatedRef.current) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplay(formatNumber(parsed.num, parsed.decimals, parsed.hasComma) + parsed.suffix);
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;
    let raf = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const t = Math.min(elapsed / ANIM_DURATION_MS, 1);
      const eased = easeOutCubic(t);
      const current = parsed.num * eased;
      setDisplay(formatNumber(current, parsed.decimals, parsed.hasComma) + parsed.suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const timeoutId = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [start, parsed, delay]);

  return <>{display}</>;
}

export default function StatsRibbon({
  stats,
  overlap = -56,
  maxWidth = 1080,
  className,
}: StatsRibbonProps) {
  const m = useIsMobile();
  const mobileOverlap = overlap === 0 ? 0 : Math.max(overlap, -32);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "calc(100% - 32px)",
        maxWidth,
        margin: `${m ? mobileOverlap : overlap}px auto 0`,
        position: "relative",
        zIndex: 10,
        backgroundColor: "#ffffff",
        borderRadius: 18,
        padding: m ? "22px 18px" : "30px 40px",
        boxShadow:
          "0 24px 48px -12px rgba(11,28,48,0.18), 0 2px 8px rgba(11,28,48,0.05)",
        border: "1px solid rgba(11,28,48,0.06)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: m
            ? "repeat(2, 1fr)"
            : `repeat(${stats.length}, 1fr)`,
          rowGap: m ? 18 : 0,
        }}
      >
        {stats.map((stat, i) => {
          const isFirstInRow = m ? i % 2 === 0 : i === 0;
          return (
            <div
              key={stat.label}
              style={{
                position: "relative",
                padding: m ? "4px 8px" : "4px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                alignItems: "flex-start",
              }}
            >
              {!isFirstInRow && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "#0052dc",
                    opacity: 0.55,
                  }}
                  aria-hidden="true"
                />
              )}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: m ? 26 : 36,
                  fontWeight: 800,
                  color: "#0b1c30",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <CountUp value={stat.value} start={inView} delay={i * STAGGER_PER_STAT_MS} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: m ? 12 : 13,
                  fontWeight: 500,
                  color: "#5a6478",
                  marginTop: 2,
                }}
              >
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
