import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";

export const metadata: Metadata = {
  title: "Contact Shiva Travel Manpower Consultants Nakodar",
  description: "Visit our office at Golden Avenue, Nakodar or call +91 98148-20432. Government licensed overseas recruitment agency. Walk in consultations available Monday to Saturday.",
};

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
        backgroundColor: "var(--surface)",
      }}>
        <div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--on-surface)",
            marginBottom: 16,
          }}>
            Contact Us
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--on-surface-variant)",
            maxWidth: 480,
            lineHeight: 1.6,
          }}>
            This page is coming soon. For now, reach us on WhatsApp or visit our office at Golden Avenue, Near Time Cafe, Nakodar, Jalandhar.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
