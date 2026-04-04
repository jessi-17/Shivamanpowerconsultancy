import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";
import CookieBanner from "@/components/own/CookieBanner";
import LeadPopup from "@/components/own/LeadPopup";
import ExitIntentPopup from "@/components/own/ExitIntentPopup";
import FloatingCTA from "@/components/own/FloatingCTA";
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

const baseUrl = "https://shivatravelconsultant.in";

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
    languages: {
      "en-IN": baseUrl,
    },
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

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${baseUrl}/#localbusiness`,
  name: "Shiva Travel & Manpower Consultants",
  image: `${baseUrl}/logo.jpg`,
  telephone: "+91-9814820432",
  email: "shivatravelnakodar@gmail.com",
  url: baseUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "Free for candidates",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "14",
    ratingCount: "14",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${baseUrl}/#organization`,
  name: "Shiva Travel & Manpower Consultants",
  alternateName: "Shiva Manpower Consultants Nakodar",
  description:
    "Government-licensed overseas recruitment agency offering Dubai visa services and specializing in Gulf & European placements for skilled Indian workers across UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Poland, Romania, and Croatia.",
  url: baseUrl,
  logo: `${baseUrl}/logo.jpg`,
  image: `${baseUrl}/logo.jpg`,
  telephone: "+91-9814820432",
  email: "shivatravelnakodar@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road",
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
  founder: {
    "@type": "Person",
    name: "Tarsem Lal",
    jobTitle: "Founder & Managing Director",
  },
  foundingDate: "1998",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/shivatravelnakodar/",
    "https://www.instagram.com/shiva.travels.consultants/",
    "https://www.youtube.com/@ShivaTravelNakodar",
  ],
  priceRange: "Free for candidates",
  areaServed: [
    { "@type": "City", name: "Nakodar", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "City", name: "Jalandhar", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "City", name: "Kapurthala", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "City", name: "Phagwara", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "City", name: "Nawanshahr", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "City", name: "Hoshiarpur", containedInPlace: { "@type": "State", name: "Punjab" } },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Kuwait" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Poland" },
    { "@type": "Country", name: "Romania" },
    { "@type": "Country", name: "Croatia" },
  ],
  knowsAbout: [
    "Overseas recruitment",
    "Gulf manpower supply",
    "Dubai visa services",
    "Romania work visa",
    "Poland work permit",
    "E-Migrate processing",
    "Visa and documentation assistance",
    "Trade testing and skill screening",
    "Construction jobs in Gulf",
    "Industrial workforce supply",
    "Overseas placement from India",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Recruitment & Visa Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Work Visa Processing", description: "End-to-end work visa processing for Gulf and European countries" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Attestation", description: "Educational and experience certificate attestation for overseas employment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Coordination", description: "GAMCA and embassy-approved medical examination coordination" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Migrate Compliance", description: "Full E-Migrate registration and emigration clearance processing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Departure Orientation", description: "Comprehensive briefing on destination country laws, rights, and procedures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employer Verification & Job Matching", description: "Verified employer matching with skill-based job placement" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "14",
    ratingCount: "14",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: "Shiva Travel & Manpower Consultants",
  url: baseUrl,
  publisher: { "@id": `${baseUrl}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000c2f" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://waw.gallabox.com" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <LeadPopup />
        <ExitIntentPopup />
        <FloatingCTA />
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

        {/* Facebook Pixel — replace YOUR_PIXEL_ID with your actual pixel ID from Meta Business Suite */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Ads Conversion Tag — replace AW-XXXXXXXXX with your Google Ads ID */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX" strategy="lazyOnload" />
        <Script id="google-ads-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXX');
          `}
        </Script>

        {/* Gallabox WhatsApp — afterInteractive for reliability */}
        <Script id="gallabox-whatsapp" strategy="afterInteractive">
          {`
            (function (w, d, s, u) {
              w.gbwawc = {
                url: u,
                options: {
                  waId: "919815358832",
                  siteName: "Shiva Travel & Manpower Consultants Nakodar",
                  siteTag: "Usually replies within minutes",
                  siteLogo: "https://shivamanpowerconsultants.com/logo.jpg",
                  widgetPosition: "RIGHT",
                  welcomeMessage: "Welcome to Shiva Travel & Manpower Consultants Nakodar! How can we help you today?",
                  brandColor: "#25D366",
                  messageText: "Hi, I'd like to know more about overseas job opportunities",
                  replyOptions: ["Gulf Jobs Info", "Europe Jobs Info", "Visa Process", "Current Openings"],
                  version: "v1",
                  widgetPositionMarginX: 16,
                  widgetPositionMarginY: 16,
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
