"use client";

import { addAPIProvider } from "@iconify/react";

/**
 * Points @iconify/react's <Icon> fetches at our own /api/iconify proxy
 * instead of hitting api.iconify.design directly from the visitor's browser.
 *
 * Runs at module scope so it executes during client bundle evaluation —
 * before any <Icon> mounts and triggers a load — which guarantees no icon
 * request ever leaks to the third-party host. addAPIProvider("", ...)
 * overrides the built-in default provider (it overwrites unconditionally).
 */
if (typeof window !== "undefined") {
  addAPIProvider("", {
    resources: [window.location.origin + "/api/iconify"],
  });
}

export default function IconifyProxy() {
  return null;
}
