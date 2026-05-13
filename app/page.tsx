import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/own/HeroSection";
import PortalCardsSection from "@/components/own/PortalCardsSection";
import TrustBar from "@/components/own/TrustBar";
import SubmissionToast from "@/components/own/SubmissionToast";
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
const MobileCredibilityTop = dynamic(() => import("@/components/own/MobileCredibilityStack").then((mod) => mod.MobileCredibilityTop));
const MobileCredibilityBottom = dynamic(() => import("@/components/own/MobileCredibilityStack").then((mod) => mod.MobileCredibilityBottom));
const MobileVisitUs = dynamic(() => import("@/components/own/MobileVisitUs"));
const MobileInlineCta = dynamic(() => import("@/components/own/MobileInlineCta"));

export const metadata: Metadata = {
  title: { absolute: "Best Manpower Consultancy in Punjab | Govt-Licensed Since 2002" },
  description:
    "Best travel agent, immigration office & overseas recruitment agency in Punjab. Govt-licensed (RA B-1794), 20+ years, 4.9★. UAE, Saudi, Romania, Poland.",
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
      <SubmissionToast />
      <HeroSection />
      <TrustBar />
      <MobileCredibilityTop />
      <MobileInlineCta
        kicker="You just saw real visas"
        title="Get yours stamped next."
        sub="Free 5-minute eligibility check on WhatsApp. No fees to ask."
        ctaLabel="Check my eligibility"
        href="https://wa.me/919815358832?text=Hi%2C%20I%20just%20saw%20your%20approved%20visas.%20I%27d%20like%20to%20check%20my%20eligibility."
        variant="whatsapp"
      />
      <div className="desktop-only">
        <PortalCardsSection />
      </div>
      <LocalCTA />
      <FounderTimeline />
      <MobileVisitUs />
      <CareerDestinations />
      <MobileInlineCta
        kicker="Personal reply · within 24 hrs"
        title="Tell us your skill — we'll match it."
        sub="Mr. Tarsem personally reviews every enquiry that comes through the website."
        ctaLabel="Message Mr. Tarsem"
        href="https://wa.me/919815358832?text=Hi%2C%20I%27d%20like%20advice%20on%20which%20country%20suits%20my%20skills"
        variant="primary"
        avatar={{ src: "/founder.webp", name: "Mr. Tarsem Lal", role: "Founder, since 2002" }}
      />
      <PartnersBar />
      <CTASection />
      <div className="desktop-only">
        <WhyChooseUs />
        <VisaProcess />
      </div>
      <div className="desktop-only">
        <WhatMakesUsDifferent />
      </div>
      <MobileCredibilityBottom />
      <Testimonials />
      <ClientVideos />
      <ContactForm />
    </>
  );
}
