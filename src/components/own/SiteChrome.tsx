"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/own/Footer";
import CookieBanner from "@/components/own/CookieBanner";
import LeadPopup from "@/components/own/LeadPopup";
import ExitIntentPopup from "@/components/own/ExitIntentPopup";
import FloatingCTA from "@/components/own/FloatingCTA";

const NO_CHROME_PATHS = ["/offer", "/current-demands", "/admin"];

export default function SiteChrome() {
  const pathname = usePathname();
  const hide = NO_CHROME_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (hide) return null;

  return (
    <>
      <Footer />
      <CookieBanner />
      <LeadPopup />
      <ExitIntentPopup />
      <FloatingCTA />
    </>
  );
}
