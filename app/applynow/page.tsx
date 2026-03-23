import type { Metadata } from "next";
import React from "react";
import Header from "../../src/components/own/Header";
import "../global.css";
import Image from "next/image";
import aboutUsImage from "../../public/about us heroimg.png";

export const metadata: Metadata = {
  title: "Apply Now – Register for Dubai, Gulf & Romania Jobs | Free Visa Assistance",
  description:
    "Apply for Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Romania job opportunities. Register with Shiva Travels Manpower Consultants Nakodar. Direct joining jobs abroad, CV selection jobs UAE, factory worker jobs in Dubai, labour jobs in UAE from Punjab. Fast visa process for Dubai jobs from India. Direct company jobs in UAE without interview. Zero candidate fees.",
  keywords: [
    "Direct Joining Jobs Abroad",
    "CV Selection Jobs UAE",
    "Factory Worker Jobs in Dubai",
    "Labour Jobs in UAE from Punjab",
    "Direct company jobs in UAE without interview",
    "Fast visa process for Dubai jobs from India",
    "How to get job in Dubai from Punjab",
    "Work abroad opportunities for Punjab youth",
    "Dubai Jobs from Punjab",
    "Punjab to Dubai Jobs",
    "free visa Gulf jobs from India",
    "Romania work visa from India",
  ],
  openGraph: {
    title: "Apply Now – Register for Dubai, Gulf & Romania Jobs",
    description:
      "Register your profile for Dubai, Gulf & Romania job opportunities. Zero candidate fees. Free visa assistance from Shiva Manpower Consultants.",
    url: "/applynow",
  },
  twitter: {
    card: "summary",
    title: "Apply Now – Dubai, Gulf & Romania Jobs | Zero Fees",
    description:
      "Register for Dubai, Gulf & Romania jobs. Construction, driver, nurse & hotel vacancies. Zero candidate fees.",
  },
  alternates: {
    canonical: "/applynow",
  },
};

export default function ApplyNowPage() {
  return (
    <div id="mainWrapper">
      <Header />
      <div className="content-wrapper">
        <section className="flex flex-col md:flex-row justify-between mt-20 gap-8">
          <h1 className="text-bland-800 font-semibold text-4xl md:text-[67px] leading-[120%] text-left">
            Coming Soon
          </h1>
          <Image
            src={aboutUsImage}
            alt="Apply now for Gulf job opportunities through Shiva Manpower Consultants"
            className="h-auto w-auto object-cover"
          />
        </section>
      </div>
    </div>
  );
}
