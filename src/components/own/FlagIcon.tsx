import type { CSSProperties } from "react";

/* ============================================================
   FlagIcon — renders a country flag image from a flag emoji,
   using the Iconify "flagpack" set (same set CareerDestinations
   already uses). Needed because Windows browsers don't render
   flag emojis — visitors see plain letters like "AE" instead.
   Data keeps storing the emoji (admin panel / DB unchanged);
   conversion happens at render time.
   ============================================================ */

const RI_A = 0x1f1e6; // regional indicator "A"

/** "🇦🇪" -> "ae"; null when the string isn't a two-letter flag emoji */
function emojiToCode(flag: string): string | null {
  const cps = Array.from(flag.trim(), (c) => c.codePointAt(0) as number);
  if (cps.length !== 2 || cps.some((cp) => cp < RI_A || cp > RI_A + 25)) return null;
  return cps.map((cp) => String.fromCharCode(cp - RI_A + 97)).join("");
}

export interface FlagIconProps {
  /** Flag emoji, e.g. "🇦🇪" */
  flag: string;
  /** Rendered width in px (flagpack flags are 4:3) */
  size?: number;
  alt?: string;
  style?: CSSProperties;
}

export default function FlagIcon({ flag, size = 18, alt = "", style }: FlagIconProps) {
  const code = emojiToCode(flag);
  if (!code) return <span style={style}>{flag}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://api.iconify.design/flagpack:${code}.svg`}
      alt={alt}
      width={size}
      height={Math.round(size * 0.75)}
      loading="lazy"
      style={{ display: "inline-block", verticalAlign: "-0.12em", borderRadius: Math.max(2, size * 0.1), ...style }}
    />
  );
}
