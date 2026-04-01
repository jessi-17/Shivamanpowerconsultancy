import type { Metadata } from "next";
import ContactUsPage from "@/components/own/ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Shiva Travel Manpower Consultants Nakodar",
  description: "Visit our office at Golden Avenue, Nakodar or call +91 98148-20432. Government licensed overseas recruitment agency. Walk in consultations available Monday to Saturday.",
};

export default function ContactUs() {
  return <ContactUsPage />;
}
