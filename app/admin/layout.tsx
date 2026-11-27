export default function AdminLayout({ children }: { children: React.ReactNode }) {
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

      {/* The section nav bar is rendered by AdminGuard (in each section's
          layout), only after the session check passes. */}
      {children}
    </>
  );
}
