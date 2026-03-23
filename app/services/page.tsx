import type { Metadata } from "next";
import ServicesContent from "./content";

export const metadata: Metadata = {
  title: "Our Services – Dubai Visa, Gulf Recruitment, Romania Work Visa & Manpower Solutions",
  description:
    "Overseas placement services Nakodar – Best Dubai visa services, work visa services Punjab, Romania work visa & Gulf jobs consultancy Punjab. Staffing, industrial workforce supply, HR consulting, executive search, overseas placement & skill development. Factory worker jobs in Dubai, labour jobs in UAE from Punjab, CV selection jobs UAE, direct joining jobs abroad.",
  keywords: [
    "Overseas Placement Services Nakodar",
    "Gulf Jobs Consultancy Punjab",
    "Work Visa Services Punjab",
    "Work Abroad Consultants Punjab",
    "Overseas Job Consultancy Punjab",
    "best Dubai visa services",
    "Dubai work visa agent Punjab",
    "Romania work visa from India",
    "Factory Worker Jobs in Dubai",
    "Labour Jobs in UAE from Punjab",
    "CV Selection Jobs UAE",
    "Direct Joining Jobs Abroad",
    "International Job Consultancy Nakodar",
    "Best consultancy for UAE jobs in Nakodar",
  ],
  openGraph: {
    title: "Our Services – Dubai Visa, Gulf Recruitment & Romania Work Visa Solutions",
    description:
      "Best Dubai visa services, Gulf recruitment & Romania work visa. Staffing, industrial workforce, executive search, overseas placement & skill development training.",
    url: "/services",
  },
  twitter: {
    card: "summary",
    title: "Services – Dubai Visa, Gulf Recruitment & Romania Manpower Solutions",
    description:
      "Dubai visa, Gulf recruitment & Romania work visa. Construction, driver, electrician, nursing & hotel job placements from Punjab.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
