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

export const metadata: Metadata = {
  title: "ShivaManpowerConsultants",
  icons: {
    icon: "/logo.jpg",
  },
  description: "Shiva Travel & Manpower Consultants Nakodar is a leading travel and manpower consultancy based in Nakodar, Punjab. We specialize in providing comprehensive travel solutions and manpower services to individuals and businesses. With a commitment to excellence and customer satisfaction, we strive to deliver top-notch services that meet the diverse needs of our clients. Whether you're looking for travel arrangements or seeking skilled manpower, Shiva Travel & Manpower Consultants Nakodar is your trusted partner for all your travel and manpower requirements.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
