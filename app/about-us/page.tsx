import type { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
  title: "About Us – Government Licensed Recruitment Agency | 25+ Years Gulf & Romania Placements",
  description:
    "Shiva Travels Manpower Consultants Nakodar — best manpower consultants in Punjab & overseas job consultancy Punjab. Government-licensed (RA B-1794), ALMRA member, E-Migrate registered. 25+ years trusted Gulf & Romania placements. Nakodar job consultancy, Jalandhar job consultants, Kapurthala overseas jobs, Doaba work abroad services. Zero candidate fees.",
  keywords: [
    "Shiva Travels Manpower Consultants Nakodar",
    "Best Manpower Consultants in Punjab",
    "Overseas Job Consultancy Punjab",
    "Trusted manpower consultancy in Nakodar Punjab",
    "government licensed recruitment agency India",
    "E-Migrate registered agency Punjab",
    "genuine Gulf job consultancy",
    "ALMRA member Punjab",
    "Nakodar Job Consultancy",
    "Jalandhar Job Consultants",
    "Kapurthala Overseas Jobs",
    "Doaba Work Abroad Services",
  ],
  openGraph: {
    title: "About Us – Government Licensed Recruitment Agency | 25+ Years Gulf & Romania Placements",
    description:
      "Government-licensed overseas recruitment agency in Nakodar, Punjab. 25+ years of trusted Gulf & Romania placements. ALMRA member, E-Migrate registered. Zero candidate fees.",
    url: "/about-us",
  },
  twitter: {
    card: "summary",
    title: "About Us – Government Licensed Gulf & Romania Recruitment Agency",
    description:
      "25+ years trusted Gulf & Romania placements. Government-licensed, ALMRA member, E-Migrate registered. Zero candidate fees.",
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
