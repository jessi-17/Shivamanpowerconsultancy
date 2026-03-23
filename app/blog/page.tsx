import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Blog – Dubai Visa Guides, Gulf Job Tips & Overseas Placement Advice",
  description:
    "Expert guides on how to get job in Dubai from Punjab, Dubai visa process, factory worker jobs, driver jobs in Gulf, nursing jobs in Qatar, Romania work visa, and more. Free advice from Shiva Travels Manpower Consultants Nakodar.",
  keywords: [
    "how to get job in Dubai from Punjab",
    "Dubai visa process from India",
    "factory worker jobs in Dubai",
    "driver jobs in Gulf countries",
    "nursing jobs in Qatar from India",
    "Romania work visa from India",
    "work abroad opportunities for Punjab youth",
    "best consultancy for UAE jobs in Nakodar",
    "Gulf jobs blog",
    "overseas placement guides Punjab",
  ],
  openGraph: {
    title: "Blog – Dubai Visa Guides, Gulf Job Tips & Overseas Placement Advice",
    description:
      "Expert guides on Gulf jobs, Dubai visa, Romania work visa & more. Free advice from Shiva Manpower Consultants Nakodar.",
    url: "/blog",
  },
  twitter: {
    card: "summary",
    title: "Blog – Gulf Job Guides & Dubai Visa Tips",
    description:
      "Expert guides on Gulf jobs, Dubai visa process, Romania work visa & overseas placement from Punjab.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
