import type { Metadata } from "next";
import ContactUsPage from "@/components/own/ContactUsPage";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "Contact Best Travel Agent in Nakodar | +91 98148-20432" },
  description: "Visit Punjab's best immigration office & overseas recruitment agency — Golden Avenue, Nakodar. Call +91 98148-20432. Walk-in Mon–Sat 9 AM–6:30 PM. Govt-licensed since 2002.",
  alternates: { canonical: "/contactus" },
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
