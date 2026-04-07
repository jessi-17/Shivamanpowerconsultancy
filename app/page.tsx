import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/own/HeroSection";
import TrustBar from "@/components/own/TrustBar";
import { breadcrumbJsonLd } from "./_lib/breadcrumb";

// Lazy load all below-fold components — only HeroSection + TrustBar load immediately
const LocalCTA = dynamic(() => import("@/components/own/LocalCTA"));
const FounderTimeline = dynamic(() => import("@/components/own/FounderTimeline"));
const CareerDestinations = dynamic(() => import("@/components/own/CareerDestinations"));
const PartnersBar = dynamic(() => import("@/components/own/PartnersBar"));
const CTASection = dynamic(() => import("@/components/own/CTASection"));
const WhyChooseUs = dynamic(() => import("@/components/own/WhyChooseUs"));
const VisaProcess = dynamic(() => import("@/components/own/VisaProcess"));
const WhatMakesUsDifferent = dynamic(() => import("@/components/own/WhatMakesUsDifferent"));
const Testimonials = dynamic(() => import("@/components/own/Testimonials"));
const ClientVideos = dynamic(() => import("@/components/own/ClientVideos"));
const ContactForm = dynamic(() => import("@/components/own/ContactForm"));

export const metadata: Metadata = {
  title: "Shiva Travel & Manpower Consultants Nakodar | Overseas Recruitment Agency Punjab",
  description:
    "Government licensed overseas placement agency in Nakodar, Punjab. Shiva Travel & Manpower Consultants — 20+ years placing workers from Jalandhar, Kapurthala, Phagwara & Doaba region in UAE, Saudi Arabia, Qatar, Poland, Romania. No hidden fees. Walk-in office.",
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is your process for vetting candidates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our rigorous process includes multi-stage interviews, skill assessments, background checks, and verification of all credentials to ensure you only meet with qualified, reliable professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Which countries in the Gulf do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in placements across the UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain. Our 20+ years of experience span construction, hospitality, healthcare, oil & gas, and logistics sectors in these countries.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any fees for candidates to apply for a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain minimal and transparent charges with no hidden fees. This is our commitment to ethical, transparent recruitment.",
      },
    },
    {
      "@type": "Question",
      name: "What support do you offer after I get a job offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We assist with visa processing, medical coordination, E-Migrate compliance, pre-departure orientation, and post-arrival follow-up to ensure a smooth transition to your new role.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the placement process typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the role and destination country, our placement process typically takes 30 to 60 days from registration to deployment. Urgent positions can be fast-tracked.",
      },
    },
    {
      "@type": "Question",
      name: "Is Shiva Manpower a government-licensed agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We hold RA License B-1794/PUN/PER/100/5/10094/2022 issued by the Ministry of External Affairs, Government of India, valid through June 2027. We are also members of ALMRA Punjab.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([
          { name: "Home", href: "/" },
        ])) }}
      />
      <HeroSection />
      <TrustBar />
      <LocalCTA />
      <FounderTimeline />
      <CareerDestinations />
      <PartnersBar />
      <CTASection />
      <WhyChooseUs />
      <VisaProcess />
      <WhatMakesUsDifferent />
      <Testimonials />
      <ClientVideos />
      <ContactForm />
    </>
  );
}
