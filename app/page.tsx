import type { Metadata } from "next";
import Navbar from "@/components/own/Navbar";
import HeroSection from "@/components/own/HeroSection";
import TrustBar from "@/components/own/TrustBar";
import CareerDestinations from "@/components/own/CareerDestinations";
import CTASection from "@/components/own/CTASection";
import PartnersBar from "@/components/own/PartnersBar";
import LocalCTA from "@/components/own/LocalCTA";
import FounderTimeline from "@/components/own/FounderTimeline";
import WhyChooseUs from "@/components/own/WhyChooseUs";
import Testimonials from "@/components/own/Testimonials";
import ClientVideos from "@/components/own/ClientVideos";
import VisaProcess from "@/components/own/VisaProcess";
import WhatMakesUsDifferent from "@/components/own/WhatMakesUsDifferent";
import ContactForm from "@/components/own/ContactForm";
import Footer from "@/components/own/Footer";

export const metadata: Metadata = {
  title: "Shiva Travel & Manpower Consultants Nakodar | Overseas Recruitment Agency Punjab",
  description:
    "Government licensed manpower consultancy in Nakodar, Punjab. 25+ years placing workers from Jalandhar and Doaba region in UAE, Saudi Arabia, Qatar, Poland, Romania. Zero candidate fees. Walk in office on Golden Avenue, Nakodar.",
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
        text: "We specialize in placements across the UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain. Our 25+ years of experience span construction, hospitality, healthcare, oil & gas, and logistics sectors in these countries.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any fees for candidates to apply for a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We charge zero fees to candidates. Our services are funded entirely by the hiring employers. This is our commitment to ethical, transparent recruitment.",
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
      <Navbar />
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
      <Footer />
    </>
  );
}
