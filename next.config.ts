import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,

  // Vercel edge caching + security headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // Force HTTPS for 2 years, incl. subdomains (browsers ignore HSTS on plain HTTP, so this is safe to send everywhere)
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
      ],
    },
    {
      // Admin pages and APIs must never be cached by browsers or proxies
      source: "/admin/:path*",
      headers: [{ key: "Cache-Control", value: "no-store" }],
    },
    {
      source: "/api/admin/:path*",
      headers: [{ key: "Cache-Control", value: "no-store" }],
    },
    {
      source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff|woff2)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
