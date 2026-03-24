"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(() => import("@/components/own/CookieBanner"), { ssr: false });

export default function ClientOnlyComponents() {
  return <CookieBanner />;
}
