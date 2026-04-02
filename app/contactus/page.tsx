import type { Metadata } from "next";
import ContactUsPage from "@/components/own/ContactUsPage";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: "Contact Shiva Travel Manpower Consultants Nakodar",
  description: "Visit our office at Golden Avenue, Nakodar or call +91 98148-20432. Government licensed overseas recruitment agency. Walk in consultations available Monday to Saturday.",
};

export default function ContactUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contactus" },
        ])) }}
      />
      <ContactUsPage />
    </>
  );
}
