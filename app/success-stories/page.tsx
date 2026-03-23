import type { Metadata } from "next";
import SuccessStoriesContent from "./content";

export const metadata: Metadata = {
  title: "Success Stories – Real Gulf & Romania Placement Stories from Punjab",
  description:
    "Read real success stories of workers placed in Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Romania through Shiva Travels Manpower Consultants Nakodar. Punjab to Dubai jobs success stories. Factory workers, nurses, drivers, hotel staff & engineers — lives changed. Best consultancy for UAE jobs in Nakodar. Work abroad opportunities for Punjab youth.",
  keywords: [
    "Punjab to Dubai Jobs",
    "Best consultancy for UAE jobs in Nakodar",
    "Work abroad opportunities for Punjab youth",
    "Trusted manpower consultancy in Nakodar Punjab",
    "Dubai Jobs from Punjab",
    "Jobs in UAE from Nakodar Punjab",
    "genuine Gulf job consultancy",
    "best overseas recruitment agency Punjab",
    "overseas job placement without fees India",
    "Doaba Work Abroad Services",
  ],
  openGraph: {
    title: "Success Stories – Real Gulf & Romania Placement Stories from Punjab",
    description:
      "Real stories of workers placed in Dubai, Gulf countries & Romania. Construction, nursing, driving & hospitality placements. Zero fees charged.",
    url: "/success-stories",
  },
  twitter: {
    card: "summary",
    title: "Success Stories – Gulf & Romania Placements from Punjab",
    description:
      "Real success stories: workers placed in Dubai, Saudi Arabia, Qatar & Romania. Genuine, no-fee recruitment from Nakodar.",
  },
  alternates: {
    canonical: "/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesContent />;
}
