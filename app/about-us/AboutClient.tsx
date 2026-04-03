"use client";

interface Value {
  icon: string;
  title: string;
  desc: string;
}

function ValueCard({ v }: { v: Value }) {
  return (
    <div
      style={{
        padding: 32,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,12,47,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0052dc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginBottom: 16 }}
      >
        <path d={v.icon} />
      </svg>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 17,
          fontWeight: 700,
          color: "#0b1c30",
          marginBottom: 8,
        }}
      >
        {v.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "#43474d",
          lineHeight: 1.7,
        }}
      >
        {v.desc}
      </p>
    </div>
  );
}

export default function AboutClient({ values }: { values: Value[] }) {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 700,
            color: "#0b1c30",
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          What We Stand For
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 20,
          }}
        >
          {values.map((v) => (
            <ValueCard key={v.title} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
