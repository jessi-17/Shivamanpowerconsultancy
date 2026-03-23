import type { Metadata } from "next";
import DemandsContent from "./content";

export const metadata: Metadata = {
  title: "Current Job Demands – Dubai, UAE, Saudi Arabia, Qatar, Romania Open Positions",
  description:
    "Browse active job vacancies in Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Romania. Factory worker jobs in Dubai, labour jobs in UAE from Punjab, CV selection jobs UAE, direct joining jobs abroad. Construction, driver, electrician, plumber, welder, nursing & hotel jobs. Direct company jobs in UAE without interview. Fast visa process. Zero candidate fees.",
  keywords: [
    "Factory Worker Jobs in Dubai",
    "Labour Jobs in UAE from Punjab",
    "CV Selection Jobs UAE",
    "Direct Joining Jobs Abroad",
    "Direct company jobs in UAE without interview",
    "Dubai Jobs from Punjab",
    "Punjab to Dubai Jobs",
    "Jobs in UAE from Nakodar Punjab",
    "construction jobs in Dubai from India",
    "driver jobs in Gulf countries",
    "electrician jobs in Saudi Arabia",
    "nursing jobs in Qatar from India",
    "hotel jobs in UAE from Punjab",
    "plumber jobs Gulf countries",
    "welder jobs Saudi Arabia from India",
    "oil and gas jobs Gulf from India",
    "Romania jobs for Indians",
    "Gulf country jobs for 10th pass from Punjab",
    "Work abroad opportunities for Punjab youth",
    "Fast visa process for Dubai jobs from India",
  ],
  openGraph: {
    title: "Current Job Demands – Dubai, UAE, Saudi Arabia, Qatar & Romania Vacancies",
    description:
      "Active job vacancies in Dubai, Gulf countries & Romania. Construction, driver, electrician, nursing, hotel & oil and gas jobs. Zero fees for candidates.",
    url: "/current-demands",
  },
  twitter: {
    card: "summary",
    title: "Gulf & Romania Job Demands – Open Vacancies for Indian Workers",
    description:
      "Construction, driver, electrician, nursing & hotel jobs in Dubai, UAE, Saudi Arabia, Qatar & Romania. Zero candidate fees.",
  },
  alternates: {
    canonical: "/current-demands",
  },
};

export default function DemandsPage() {
  return <DemandsContent />;
}
