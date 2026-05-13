"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/own/Footer";
import CookieBanner from "@/components/own/CookieBanner";
import LeadPopup from "@/components/own/LeadPopup";
import FloatingCTA from "@/components/own/FloatingCTA";
import MobilePageEnhancer from "@/components/own/MobilePageEnhancer";

const NO_CHROME_PATHS = ["/offer", "/current-demands", "/admin"];

// Home already renders MobileCredibilityTop / MobileVisitUs / MobileInlineCta
// inline within the page, so we skip the global enhancer there to avoid
// duplication. Every other public page gets the bottom credibility block.
const NO_ENHANCER_PATHS = ["/"];

export default function SiteChrome() {
  const pathname = usePathname();
  const hide = NO_CHROME_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (hide) return null;

  const showEnhancer = !NO_ENHANCER_PATHS.includes(pathname);

  return (
    <>
      {showEnhancer && <MobilePageEnhancer />}
      <Footer />
      <CookieBanner />
      <LeadPopup />
      <FloatingCTA />
    </>
  );
}
