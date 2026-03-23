import type { Metadata } from "next";
import ContactContent from "./content";

export const metadata: Metadata = {
  title: "Contact Us – Best Dubai Visa & Gulf Job Consultancy in Nakodar, Jalandhar",
  description:
    "Contact Shiva Travels Manpower Consultants Nakodar for Dubai visa services, Gulf job placements, Romania work visa & employer partnerships. Nakodar job consultancy, Jalandhar job consultants, Kapurthala overseas jobs. Visit our office in Nakodar near Jalandhar, Punjab. Call +91-9815358832. Trusted manpower consultancy in Nakodar Punjab.",
  keywords: [
    "Nakodar Job Consultancy",
    "Jalandhar Job Consultants",
    "Kapurthala Overseas Jobs",
    "Doaba Work Abroad Services",
    "visa agent Nakodar Jalandhar",
    "Jobs in UAE from Nakodar Punjab",
    "Abroad Job Consultants Jalandhar Nakodar",
    "International Job Consultancy Nakodar",
    "Visa Consultancy Nakodar Punjab",
    "Trusted manpower consultancy in Nakodar Punjab",
  ],
  openGraph: {
    title: "Contact Us – Best Dubai Visa & Gulf Job Consultancy Nakodar, Jalandhar",
    description:
      "Contact Shiva Manpower for Dubai visa, Gulf jobs & Romania work visa. Office in Nakodar, Jalandhar. Call +91-9815358832. Zero candidate fees.",
    url: "/contactus",
  },
  twitter: {
    card: "summary",
    title: "Contact Shiva Manpower – Dubai Visa & Gulf Recruitment Nakodar",
    description:
      "Best Dubai visa & Gulf recruitment consultancy in Nakodar, Jalandhar. Call +91-9815358832. Zero fees.",
  },
  alternates: {
    canonical: "/contactus",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
