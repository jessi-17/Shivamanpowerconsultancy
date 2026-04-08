import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://shivatravelconsultant.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/*?utm_*",
        "/content.php",
        "/instructors/",
        "/four-slots-*",
        "/pin-up-*",
        "/browse-conditions-*",
        "/strategies-for-*",
        "/ein-aufregendes-*",
        "/wp-*",
        "/wp-admin/",
        "/wp-content/",
        "/wp-includes/",
        "/*.php$",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
