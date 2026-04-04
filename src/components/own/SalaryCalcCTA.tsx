import Link from "next/link";

export default function SalaryCalcCTA({ country }: { country?: string }) {
  const href = country
    ? `/salary-calculator`
    : "/salary-calculator";
  const text = country
    ? `How much will you earn in ${country}?`
    : "How much will you earn abroad?";

  return (
    <section style={{ padding: "0 24px 64px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link href={href} style={{ textDecoration: "none", display: "block" }}>
          <div style={{
            background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
            borderRadius: 20, padding: "32px 36px", display: "flex", alignItems: "center",
            gap: 20, flexWrap: "wrap", cursor: "pointer",
            transition: "transform 200ms, box-shadow 200ms",
          }}>
            <div style={{ flex: "0 0 52px", width: 52, height: 52, borderRadius: 14, backgroundColor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="10" y2="10" /><line x1="14" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="10" y2="14" /><line x1="14" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="16" y2="18" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#6ee7b7", textTransform: "uppercase", marginBottom: 4 }}>FREE TOOL</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{text}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>See estimated salary by trade &amp; experience — in local currency and INR.</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 10, backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>
                Calculate Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
