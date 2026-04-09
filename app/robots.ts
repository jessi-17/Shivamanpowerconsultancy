import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://shivatravelconsultant.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*?utm_*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
