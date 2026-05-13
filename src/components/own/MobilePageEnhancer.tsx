"use client";

import dynamic from "next/dynamic";

/* ============================================================
   MobilePageEnhancer
   Renders a consistent credibility + contact + CTA footer block
   on the BOTTOM of every public page (just before the real
   <Footer />) on mobile only. Wired in via SiteChrome with route
   filtering — home page is excluded because it already shows
   these components in-flow.
   ============================================================ */

const MobileCredibilityTop = dynamic(() =>
  import("@/components/own/MobileCredibilityStack").then((m) => m.MobileCredibilityTop)
);
const MobileVisitUs = dynamic(() => import("@/components/own/MobileVisitUs"));
const MobileInlineCta = dynamic(() => import("@/components/own/MobileInlineCta"));

export default function MobilePageEnhancer() {
  return (
    <>
      {/* Credibility strip — works on every page; visa stamps speak for themselves */}
      <MobileCredibilityTop />

      {/* Personal-touch WhatsApp CTA */}
      <MobileInlineCta
        kicker="Personal reply · within 24 hrs"
        title="Have a question? Ask Mr. Tarsem directly."
        sub="Founder of Shiva Travel & Manpower Consultants. He personally replies to every WhatsApp."
        ctaLabel="Message on WhatsApp"
        href="https://wa.me/919815358832?text=Hi%2C%20I%20have%20a%20question%20about%20overseas%20jobs"
        variant="primary"
        avatar={{ src: "/founder.webp", name: "Mr. Tarsem Lal", role: "Founder, since 2002" }}
      />

      {/* Office card — works on every page; reinforces local presence */}
      <MobileVisitUs />
    </>
  );
}
