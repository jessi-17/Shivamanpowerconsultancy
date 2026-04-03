import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import EmployerHero from "@/components/own/EmployerHero";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";

const IndustriesServed = dynamic(() => import("@/components/own/IndustriesServed"));
const WhyPartnerWithUs = dynamic(() => import("@/components/own/WhyPartnerWithUs"));
const RecruitmentProcess = dynamic(() => import("@/components/own/RecruitmentProcess"));
const Testimonials = dynamic(() => import("@/components/own/Testimonials"));
const EmployerInquiryForm = dynamic(() => import("@/components/own/EmployerInquiryForm"));

export const metadata: Metadata = {
  title: "For Employers – Hire Skilled Workers from India | Shiva Manpower Consultants",
  description:
    "Partner with Shiva Travel & Manpower Consultants to source pre-screened, skilled workers from India. Government-licensed (MEA), 25+ years experience, 5,000+ workers deployed across 12+ countries. Zero compliance issues.",
  keywords: [
    "hire workers from India",
    "Indian manpower supplier",
    "overseas recruitment agency India",
    "skilled labour from Punjab",
    "manpower consultancy for employers",
    "Gulf recruitment agency",
    "European workforce supplier India",
  ],
  alternates: {
    canonical: "/employers",
  },
  openGraph: {
    title: "For Employers – Hire Skilled Workers from India | Shiva Manpower Consultants",
    description: "Government-licensed recruitment agency supplying pre-screened skilled workers from India. 25+ years, 5,000+ deployments, zero compliance issues.",
    url: "https://shivamanpowerconsultants.com/employers",
    type: "website",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", href: "/" },
  { name: "For Employers", href: "/employers" },
]);

export default function EmployersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <EmployerHero />
      <IndustriesServed />
      <WhyPartnerWithUs />
      <RecruitmentProcess />
      <Testimonials />

      {/* CTA Banner */}
      <section style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 420,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -1,
      }}>
        {/* Background image */}
        <Image src="/Blog-4.jpg" alt="Indian construction workers abroad" fill sizes="100vw" style={{ objectFit: "cover" }} />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 32px", maxWidth: 800 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: 40, maxWidth: 700, margin: "0 auto 40px" }}>
            If your company needs Indian workers for Construction, Oil &amp; Gas, Hospitality, or Industrial sectors — look no further. Send in a request and we&apos;ll get back to you within 24 Hours.
          </p>
          <Link
            href="/contactus"
            style={{
              display: "inline-block",
              padding: "18px 44px",
              backgroundColor: "#0052dc",
              color: "#fff",
              fontFamily: "var(--font-display)",
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(0,82,220,0.5), 0 0 40px rgba(0,82,220,0.25)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <EmployerInquiryForm />
    </>
  );
}
