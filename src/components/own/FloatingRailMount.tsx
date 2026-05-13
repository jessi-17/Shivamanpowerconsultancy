"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FloatingCredibilityRail from "./FloatingCredibilityRail";
import MobileSocialProofToast from "./MobileSocialProofToast";

export default function FloatingRailMount() {
  const pathname = usePathname();
  const [nearFooter, setNearFooter] = useState(false);

  // Fade the desktop rail when the footer enters the viewport so it doesn't overlap
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const obs = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, [pathname]);

  // Hidden on admin and the immersive /offer page
  if (pathname.startsWith("/admin") || pathname.startsWith("/offer")) return null;

  return (
    <>
      {/* Desktop: fixed sidebar rail (hidden below 1400px via CSS) */}
      <div
        className="floating-rail-wrapper"
        style={{
          position: "fixed",
          right: 16,
          top: 100,
          width: 200,
          zIndex: 5,
          pointerEvents: nearFooter ? "none" : "auto",
          opacity: nearFooter ? 0 : 1,
          transform: nearFooter ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 350ms ease, transform 350ms ease",
        }}
      >
        <FloatingCredibilityRail />
      </div>

      {/* Mobile: bottom-left social proof toast (hidden above 768px via CSS) */}
      <div className="social-proof-wrapper">
        <MobileSocialProofToast />
      </div>
    </>
  );
}
