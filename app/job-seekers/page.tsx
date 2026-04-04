import type { Metadata } from "next";
import dynamic from "next/dynamic";
import JobSeekerHero from "@/components/own/JobSeekerHero";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

const PopularDestinations = dynamic(() => import("@/components/own/PopularDestinations"));
const VisaProcess = dynamic(() => import("@/components/own/VisaProcess"));
const CTASection = dynamic(() => import("@/components/own/CTASection"));
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";

export const metadata: Metadata = {
  title: "Jobs Abroad for Indians – UAE, Saudi, Qatar, Europe | Shiva Manpower Consultants",
  description:
    "Find overseas jobs in Dubai, Saudi Arabia, Qatar, Poland & Romania. Zero fees, government-licensed recruitment agency in Punjab. Subscribe for daily/weekly job alerts. 5,000+ workers placed.",
  keywords: [
    "overseas jobs for Indians",
    "Gulf jobs from Punjab",
    "Dubai jobs from India",
    "Saudi Arabia jobs for Indians",
    "Europe work visa India",
    "free job placement agency",
    "job alerts overseas",
    "manpower consultancy Nakodar",
  ],
  alternates: {
    canonical: "/job-seekers",
  },
  openGraph: {
    title: "Jobs Abroad for Indians – UAE, Saudi, Qatar, Europe | Shiva Manpower",
    description: "Find your dream overseas job. Zero fees, government-licensed, 5,000+ workers placed. Subscribe for job alerts.",
    url: "https://shivatravelconsultant.in/job-seekers",
    type: "website",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", href: "/" },
  { name: "For Job Seekers", href: "/job-seekers" },
]);

export default function JobSeekersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <JobSeekerHero />
      <PopularDestinations />
      <VisaProcess />
      <SalaryCalcCTA />
      <CTASection />
    </>
  );
}
