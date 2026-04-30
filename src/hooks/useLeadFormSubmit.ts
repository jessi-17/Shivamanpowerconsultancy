"use client";

import { useState, useCallback } from "react";
import { identifyLead } from "@/lib/identifyLead";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export type LeadFormStatus = "idle" | "loading" | "success" | "error";

interface SubmitOptions<TBody> {
  body: TBody;
  // Pulled out of the body so we can identify in PostHog and skip if absent.
  identify?: { email?: string; phone?: string; name?: string; company?: string };
  // Fires on success in addition to setting status. Use for redirects, resets, etc.
  onSuccess?: () => void;
  // Whether to fire FB Pixel "Lead" track. Defaults to true.
  trackPixel?: boolean;
}

// Shared submit pipeline for lead forms: status state, fetch, identify in PostHog,
// FB Pixel "Lead" event, success callback. Each form keeps its own field shape;
// this hook only handles the side-effects.
export function useLeadFormSubmit<TBody>(endpoint: string) {
  const [status, setStatus] = useState<LeadFormStatus>("idle");

  const submit = useCallback(
    async ({ body, identify, onSuccess, trackPixel = true }: SubmitOptions<TBody>) => {
      setStatus("loading");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          setStatus("error");
          return false;
        }
        if (trackPixel && typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }
        if (identify) identifyLead(identify);
        setStatus("success");
        onSuccess?.();
        return true;
      } catch {
        setStatus("error");
        return false;
      }
    },
    [endpoint]
  );

  return { status, submit, setStatus };
}
