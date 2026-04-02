import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import CookieBanner from "@/components/own/CookieBanner";
import LeadPopup from "@/components/own/LeadPopup";
import "./global.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://shivamanpowerconsultants.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shiva Travel & Manpower Consultants Nakodar | Overseas Recruitment Agency Punjab",
    template: "%s | Shiva Manpower Consultants",
  },
  description:
    "Shiva Travel & Manpower Consultants Nakodar. Government licensed overseas recruitment agency in Punjab (RA B-1794). Placing workers in UAE, Saudi Arabia, Qatar, Poland, Romania since 2002. Zero candidate fees. Walk in office in Nakodar, Jalandhar.",
  keywords: [
    "Shiva Travel Manpower Consultants Nakodar",
    "manpower consultancy Nakodar Punjab",
    "overseas recruitment agency Punjab",
    "Gulf jobs from Punjab",
    "government licensed recruitment agency India",
  ],
  authors: [{ name: "Shiva Travel & Manpower Consultants" }],
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Shiva Manpower Consultants",
    title: "Shiva Travel & Manpower Consultants Nakodar | Overseas Recruitment Punjab",
    description:
      "Government licensed manpower consultancy in Nakodar, Punjab. Placing workers in UAE, Saudi Arabia, Qatar, Poland, Romania since 2002. Zero candidate fees.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Shiva Travel & Manpower Consultants Nakodar logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Travel & Manpower Consultants Nakodar | Overseas Recruitment Punjab",
    description:
      "Government licensed manpower consultancy in Nakodar, Punjab. Placing workers in UAE, Saudi Arabia, Qatar, Poland, Romania since 2002. Zero candidate fees.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#organization`,
  name: "Shiva Travel & Manpower Consultants",
  alternateName: "Shiva Manpower Consultants Nakodar",
  description:
    "Best Dubai visa services and government-licensed overseas recruitment agency specializing in Gulf & Romania placements for skilled Indian workers across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Romania.",
  url: baseUrl,
  logo: `${baseUrl}/logo.jpg`,
  image: `${baseUrl}/logo.jpg`,
  telephone: "+91-9814820432",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Time Cafe",
    addressLocality: "Nakodar",
    addressRegion: "Punjab",
    postalCode: "144040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.12,
    longitude: 75.47,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  priceRange: "Free for candidates",
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Romania" },
  ],
  knowsAbout: [
    "Overseas recruitment",
    "Gulf manpower supply",
    "Dubai visa services",
    "Romania work visa",
    "E-Migrate processing",
    "Visa and documentation assistance",
    "Trade testing and skill screening",
    "Construction jobs in Gulf",
    "Industrial workforce supply",
    "Overseas placement from India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://waw.gallabox.com" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <LeadPopup />
        <Analytics />

        {/* Google Analytics — lazyOnload so it doesn't block paint */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6WTP8DK0FM" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6WTP8DK0FM');
          `}
        </Script>

        {/* Gallabox WhatsApp — lazyOnload, not needed for initial render */}
        <Script id="gallabox-whatsapp" strategy="lazyOnload">
          {`
            (function (w, d, s, u) {
              w.gbwawc = {
                url: u,
                options: {
                  waId: "919814820432",
                  siteName: "Shiva Travel & Manpower Consultants Nakodar",
                  siteTag: "Usually reply in 1 minutes",
                  siteLogo: "https://waw.gallabox.com/chatbotavatars/1.png",
                  widgetPosition: "RIGHT",
                  welcomeMessage: "Welcome to Shiva Travel & Manpower Consultants Nakodar !!!",
                  brandColor: "#25D366",
                  messageText: "more Information say hi",
                  replyOptions: [],
                  version: "v1",
                  widgetPositionMarginX: 12,
                  widgetPositionMarginY: 12,
                },
              };
              var h = d.getElementsByTagName(s)[0],
                j = d.createElement(s);
              j.async = true;
              j.src = u + "/whatsapp-widget.min.js";
              h.parentNode.insertBefore(j, h);
            })(window, document, "script", "https://waw.gallabox.com");
          `}
        </Script>
      </body>
    </html>
  );
}
