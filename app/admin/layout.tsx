"use client";

import { usePathname } from "next/navigation";
import AdminTopNav from "./_components/AdminTopNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoot = pathname === "/admin";

  return (
    <>
      {/* Safety net: if the Gallabox widget already loaded on a previous public page,
          hide it while the user is anywhere under /admin. */}
      <style>{`
        [id*="gallabox" i],
        [class*="gallabox" i],
        [id*="gbwawc" i],
        [class*="gbwawc" i],
        iframe[src*="gallabox"],
        iframe[src*="whatsapp-widget"] {
          display: none !important;
        }
      `}</style>

      {!isDashboardRoot && <AdminTopNav />}
      {children}
    </>
  );
}
