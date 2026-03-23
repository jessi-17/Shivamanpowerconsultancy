import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://shivamanpowerconsultants.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Shiva Manpower Consultants | Best Dubai Visa Services & Gulf Recruitment Agency Nakodar, Punjab",
    template: "%s | Shiva Manpower Consultants",
  },
  description:
    "Shiva Travels Manpower Consultants Nakodar – Best manpower consultancy in Nakodar Punjab & overseas job consultancy Punjab. Dubai jobs from Punjab, UAE job consultancy Nakodar, visa consultancy Nakodar Punjab. Gulf jobs, Romania work visa. Factory worker jobs in Dubai, labour jobs in UAE from Punjab. Trusted, government-licensed (RA B-1794). Zero candidate fees.",
  keywords: [
    // Primary Keywords
    "Shiva Travels Manpower Consultants Nakodar",
    "Manpower Consultancy in Nakodar Punjab",
    "Overseas Job Consultancy Punjab",
    "Dubai Jobs from Punjab",
    "UAE Job Consultancy Nakodar",
    "Work Abroad Consultants Punjab",
    "Visa Consultancy Nakodar Punjab",
    // Secondary Keywords
    "Best Manpower Consultants in Punjab",
    "Overseas Placement Services Nakodar",
    "Gulf Jobs Consultancy Punjab",
    "Factory Worker Jobs in Dubai",
    "Labour Jobs in UAE from Punjab",
    "CV Selection Jobs UAE",
    "Direct Joining Jobs Abroad",
    "Work Visa Services Punjab",
    "International Job Consultancy Nakodar",
    "Abroad Job Consultants Jalandhar Nakodar",
    // Local SEO Keywords
    "Nakodar Job Consultancy",
    "Jalandhar Job Consultants",
    "Kapurthala Overseas Jobs",
    "Doaba Work Abroad Services",
    "Punjab to Dubai Jobs",
    "Jobs in UAE from Nakodar Punjab",
    // Long-Tail Keywords
    "How to get job in Dubai from Punjab",
    "Best consultancy for UAE jobs in Nakodar",
    "Work abroad opportunities for Punjab youth",
    "Direct company jobs in UAE without interview",
    "Fast visa process for Dubai jobs from India",
    "Trusted manpower consultancy in Nakodar Punjab",
    // Dubai / UAE visa keywords
    "best Dubai visa services",
    "Dubai visa services from India",
    "Dubai work visa agent Punjab",
    "Dubai visa consultancy near me",
    "best Dubai visa agent in Jalandhar",
    "UAE employment visa from India",
    "Dubai work permit services",
    "jobs in Dubai for Indians",
    // Saudi Arabia
    "Saudi Arabia visa agent Punjab",
    "Saudi Arabia jobs for Indian workers",
    "best manpower agency for Saudi Arabia",
    "Saudi work visa from India",
    "Saudi Arabia recruitment agency Punjab",
    // General Gulf
    "Gulf job consultancy in Punjab",
    "overseas manpower consultancy India",
    "best overseas recruitment agency Punjab",
    "Gulf recruitment agency near me",
    "overseas placement consultancy Jalandhar",
    "manpower consultancy for Gulf countries",
    "foreign job consultancy Punjab",
    "Gulf jobs from India",
    // Romania
    "Romania work visa from India",
    "Romania jobs for Indians",
    "Romania recruitment agency Punjab",
    "Romania work permit agent",
    // Trade-specific
    "construction jobs in Dubai from India",
    "driver jobs in Gulf countries",
    "electrician jobs in Saudi Arabia",
    "nursing jobs in Qatar from India",
    "hotel jobs in UAE from Punjab",
    "plumber jobs Gulf countries",
    "welder jobs Saudi Arabia from India",
    "oil and gas jobs Gulf from India",
    // Trust / Compliance
    "government licensed recruitment agency India",
    "licensed overseas placement agency Punjab",
    "E-Migrate registered agency Punjab",
    "genuine Gulf job consultancy",
    "no fee recruitment agency Gulf jobs",
    "free visa Gulf jobs from India",
    // Additional Local
    "visa agent Nakodar Jalandhar",
    "Gulf job agency Jalandhar",
    "overseas recruitment agency near Nakodar",
    "Shiva Travel Manpower Consultants",
    // Additional Long-tail
    "how to get Dubai work visa from Punjab",
    "best Gulf recruitment agency with zero fees",
    "government approved manpower agency Punjab",
    "overseas job placement without fees India",
    "Gulf country jobs for 10th pass from Punjab",
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
    title: "Shiva Manpower Consultants | Best Dubai Visa Services & Gulf Recruitment Agency Punjab",
    description:
      "Best Dubai visa services & government-licensed overseas recruitment agency in Nakodar, Punjab. 25+ years placing workers in UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Romania. Zero fees.",
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
    title: "Shiva Manpower Consultants | Best Dubai Visa & Gulf Recruitment Agency",
    description:
      "Best Dubai visa services & Gulf recruitment agency in Nakodar, Punjab. 25+ years placing workers in UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Romania. Zero candidate fees.",
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
  telephone: "+91-9815358832",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script id="gallabox-whatsapp" strategy="afterInteractive">
          {`
            (function (w, d, s, u) {
              w.gbwawc = {
                url: u,
                options: {
                  waId: "919815358832",
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
