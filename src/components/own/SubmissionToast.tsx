"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ToastInner() {
  const searchParams = useSearchParams();
  const submitted = searchParams.get("submitted") === "1";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    setVisible(true);
    const url = new URL(window.location.href);
    url.searchParams.delete("submitted");
    window.history.replaceState({}, "", url.toString());
    const t = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(t);
  }, [submitted]);

  if (!visible) return null;

  return (
    <div
      role="status"
      style={{
        position: "fixed",
        top: 96,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9995,
        padding: "14px 22px",
        backgroundColor: "#0b1c30",
        color: "#fff",
        borderRadius: 999,
        boxShadow: "0 12px 36px rgba(0,12,47,0.35)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: "calc(100vw - 32px)",
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          backgroundColor: "#22c55e",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span>Thanks! We&rsquo;ll call you back shortly.</span>
      <button
        onClick={() => setVisible(false)}
        style={{
          background: "transparent",
          border: "none",
          color: "rgba(255,255,255,0.5)",
          cursor: "pointer",
          fontSize: 18,
          padding: 0,
          marginLeft: 4,
        }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}

export default function SubmissionToast() {
  return (
    <Suspense fallback={null}>
      <ToastInner />
    </Suspense>
  );
}
