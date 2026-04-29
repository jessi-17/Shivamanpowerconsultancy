"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key || !host) return;
    if (typeof window === "undefined") return;

    // Only init once across hot reloads
    const w = window as Window & { __posthog_inited?: boolean };
    if (w.__posthog_inited) return;
    w.__posthog_inited = true;

    posthog.init(key, {
      api_host: host,
      capture_pageview: false, // SPA pageviews handled manually
      capture_pageleave: true,
      // Only build a person profile for users we explicitly identify (none yet) —
      // anonymous visitors stay anonymous, smaller event volume, GDPR-friendlier.
      person_profiles: "identified_only",
      // Respect the existing cookie banner: don't capture until user accepts.
      opt_out_capturing_by_default: localStorage.getItem("cookie-consent") !== "accepted",
    });

    // The CookieBanner dispatches this event on accept. Mirror that into PostHog.
    const onConsent = () => posthog.opt_in_capturing();
    window.addEventListener("cookie-consent-accepted", onConsent);
    return () => window.removeEventListener("cookie-consent-accepted", onConsent);
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
