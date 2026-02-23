"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/own/CTA";
import Link from "next/link";

import service1 from "../../public/recruitment.png";
import service2 from "../../public/Industrialworkforce.png";
import service3 from "../../public/HR consulting.png";
import service4 from "../../public/executiveserach.png";
import service5 from "../../public/overseasplacement.png";
import service6 from "../../public/skilldevelopment.png";

const services = [
  {
    id: "01",
    title: "Recruitment & Staffing",
    tagline: "Right person. Right role. Right time.",
    description:
      "We source, screen, and place candidates across every level — from entry-level to senior management. Our multi-stage vetting ensures you meet only the best-fit talent.",
    image: service1,
    color: "#C1121F",
    lightColor: "#F9E7E8",
    features: [
      "Multi-stage interview & screening",
      "Culture & skill fit assessment",
      "Temporary, contract & permanent hiring",
      "Rapid turnaround within 72 hrs",
    ],
    icon: "mingcute:user-search-fill",
  },
  {
    id: "02",
    title: "Industrial Workforce Supply",
    tagline: "Scalable manpower for demanding environments.",
    description:
      "From construction sites to manufacturing plants, we supply trade-tested workers in bulk — vetted, documented, and ready to deploy across Gulf industries.",
    image: service2,
    color: "#374151",
    lightColor: "#F3F4F6",
    features: [
      "Bulk workforce mobilisation",
      "Trade testing & skill screening",
      "Safety-trained candidates",
      "Gulf-region compliance support",
    ],
    icon: "mingcute:hard-hat-fill",
  },
  {
    id: "03",
    title: "HR Consulting",
    tagline: "Strategy, structure, and smarter people ops.",
    description:
      "We partner with HR teams to design hiring frameworks, streamline onboarding, and build compensation strategies that attract and retain top talent.",
    image: service3,
    color: "#065F46",
    lightColor: "#ECFDF5",
    features: [
      "Org structure & job architecture",
      "Compensation benchmarking",
      "Onboarding process design",
      "HR policy & compliance audits",
    ],
    icon: "mingcute:chart-bar-fill",
  },
  {
    id: "04",
    title: "Executive Search",
    tagline: "Senior leadership that drives results.",
    description:
      "Discreet, research-led search for C-suite and senior roles. We engage passive candidates who won't appear on job boards and present only high-calibre shortlists.",
    image: service4,
    color: "#1E3A5F",
    lightColor: "#EFF6FF",
    features: [
      "Confidential headhunting",
      "Deep market mapping",
      "Leadership assessment",
      "Offer negotiation support",
    ],
    icon: "mingcute:briefcase-fill",
  },
  {
    id: "05",
    title: "Overseas Placement",
    tagline: "Your career in the Gulf starts here.",
    description:
      "End-to-end placement support for professionals seeking opportunities in the UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain — including visa, medical, and document assistance.",
    image: service5,
    color: "#92400E",
    lightColor: "#FFFBEB",
    features: [
      "E-Migrate & RA compliance",
      "Visa & medical coordination",
      "Pre-departure orientation",
      "Post-arrival support",
    ],
    icon: "mingcute:plane-fill",
  },
  {
    id: "06",
    title: "Skill Development & Training",
    tagline: "Upskill your workforce for tomorrow.",
    description:
      "Structured training programmes in technical trades, soft skills, and Gulf workplace compliance — improving productivity and reducing turnover.",
    image: service6,
    color: "#5B21B6",
    lightColor: "#F5F3FF",
    features: [
      "Trade & technical certifications",
      "Soft skills & communication",
      "Gulf workplace orientation",
      "Safety & compliance training",
    ],
    icon: "mingcute:book-fill",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We understand your exact requirements — role, culture, timeline, and compliance needs.",
    icon: "mingcute:comment-fill",
  },
  {
    step: "02",
    title: "Talent Sourcing",
    desc: "We tap our 25-year network, databases, and active outreach to find the right candidates.",
    icon: "mingcute:search-fill",
  },
  {
    step: "03",
    title: "Screening & Vetting",
    desc: "Multi-stage interviews, skill tests, background verification, and document checks.",
    icon: "mingcute:filter-fill",
  },
  {
    step: "04",
    title: "Shortlist & Interview",
    desc: "You receive a curated shortlist. We coordinate and facilitate all interviews.",
    icon: "mingcute:user-check-fill",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    desc: "Offer negotiation, visa coordination, documentation, and pre-deployment briefing.",
    icon: "mingcute:hand-fill",
  },
  {
    step: "06",
    title: "Post-Placement Support",
    desc: "Follow-up to ensure satisfaction on both sides. We stay engaged beyond placement.",
    icon: "mingcute:heart-fill",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const active = services[activeService];

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* ── HERO ── */}
      <section className="top-margins px-4 relative">
        <div
          className="pointer-events-none absolute -top-10 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)",
          }}
        />
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            Our Services
          </span>
          <h1 className="font-extrabold text-4xl md:text-6xl leading-[115%] text-(--color-bland-800)">
            Manpower Solutions <span>Built for the Gulf</span>
          </h1>
          <p className="text-(--color-bland-600) text-lg leading-[160%] max-w-[600px]">
            From sourcing a single executive to deploying a 500-strong
            industrial workforce — we've been doing this for 25 years with
            precision and care.
          </p>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            { num: "25+", label: "Years in business" },
            { num: "10,000+", label: "Placements made" },
            { num: "4", label: "Gulf countries served" },
            { num: "6", label: "Core service areas" },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#00000010] bg-white shadow-sm"
            >
              <span
                className="text-xl font-black"
                style={{ color: "var(--primary-color)" }}
              >
                {s.num}
              </span>
              <span className="text-sm text-(--color-bland-500)">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE SERVICE EXPLORER ── */}
      <section className="top-margins px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: tab list */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`group flex items-center gap-3 px-5 py-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal min-w-[200px] lg:min-w-0 ${
                  activeService === i
                    ? "border-(--primary-color) shadow-md scale-[1.01]"
                    : "border-[#00000010] bg-white hover:border-[#00000025] hover:shadow-sm"
                }`}
                style={
                  activeService === i
                    ? {
                        background: `linear-gradient(135deg, ${s.lightColor}, white)`,
                      }
                    : {}
                }
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300`}
                  style={{
                    background:
                      activeService === i ? s.color : "var(--color-bland-100)",
                  }}
                >
                  <Icon
                    icon={s.icon}
                    width="18"
                    height="18"
                    color={activeService === i ? "white" : "var(--color-bland-500)"}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      activeService === i
                        ? "text-(--color-bland-800)"
                        : "text-(--color-bland-600)"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="text-xs text-(--color-bland-400) hidden lg:block">
                    {s.id}
                  </span>
                </div>
                {activeService === i && (
                  <Icon
                    icon="si:arrow-right-duotone"
                    width="18"
                    height="18"
                    className="ml-auto shrink-0"
                    style={{ color: active.color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: active service detail */}
          <div
            key={activeService}
            className="lg:col-span-8 rounded-3xl overflow-hidden border border-[#00000010] bg-white shadow-sm"
            style={{ animation: "fadeSlideIn 0.35s ease" }}
          >
            {/* Image strip */}
            <div className="relative h-[280px] md:h-[360px] overflow-hidden">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-4xl font-black opacity-30">
                  {active.id}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-[120%] mt-1">
                  {active.title}
                </h2>
                <p className="opacity-80 mt-1 text-sm">{active.tagline}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 flex flex-col gap-8">
              <p className="text-(--color-bland-600) text-base leading-[170%]">
                {active.description}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-(--color-bland-400) mb-4">
                  What's included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: active.lightColor }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: active.color }}
                      >
                        <Icon
                          icon="mingcute:check-fill"
                          width="11"
                          height="11"
                          color="white"
                        />
                      </div>
                      <span className="text-sm text-(--color-bland-700) leading-[150%]">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-[#00000008]">
                <Link href="/contactus">
                  <Button
                    className="px-6 py-5 text-white rounded-[32px] text-sm font-medium cursor-pointer hover:scale-95 transition-transform flex gap-2"
                    style={{ background: active.color }}
                  >
                    Get a Free Consultation
                    <Icon icon="gg:phone" width="18" height="18" />
                  </Button>
                </Link>
                <Button className="px-6 py-5 rounded-[32px] text-sm font-medium cursor-pointer hover:scale-95 transition-transform border border-[#00000015] text-(--color-bland-600) bg-white flex gap-2">
                  Learn more
                  <Icon icon="si:arrow-right-duotone" width="18" height="18" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="top-margins px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            How it works
          </span>
          <h2 className="text-4xl font-bold text-(--color-bland-800) leading-[120%]">
            Our <span>6-Step</span> Process
          </h2>
          <p className="text-(--color-bland-500) max-w-[480px]">
            A proven, repeatable process that delivers the right talent — every
            single time.
          </p>
        </div>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#00000010] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {process.map((p, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-16 h-16 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-white transition-all duration-300 group-hover:scale-110"
                  style={{ boxShadow: `0 4px 20px ${i === 0 ? "rgba(193,18,31,0.25)" : "rgba(0,0,0,0.08)"}` }}
                >
                  <Icon
                    icon={p.icon}
                    width="24"
                    height="24"
                    style={{ color: "var(--primary-color)" }}
                  />
                </div>
                <span
                  className="text-xs font-bold tracking-wider"
                  style={{ color: "var(--primary-color)" }}
                >
                  {p.step}
                </span>
                <h3 className="font-semibold text-sm text-(--color-bland-800)">
                  {p.title}
                </h3>
                <p className="text-xs text-(--color-bland-500) leading-[150%]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US STRIP ── */}
      <section className="top-margins px-4">
        <div
          className="rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          style={{ background: "var(--color-bland-100)" }}
        >
          <div className="flex flex-col gap-4">
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary-color)" }}
            >
              Why Shivamanpower
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-bland-800) leading-[125%]">
              A trusted partner, <span>not just a vendor</span>
            </h2>
            <p className="text-(--color-bland-600) leading-[170%]">
              We've spent 25 years building relationships — with employers in
              the Gulf and talent across India. That depth of trust is what sets
              us apart.
            </p>
            <Link href="/contactus">
              <Button className="mt-2 px-6 py-5 bg-(--primary-color) text-white rounded-[32px] text-sm font-medium cursor-pointer hover:scale-95 transition-transform w-fit flex gap-2">
                Start a conversation
                <Icon icon="si:arrow-right-duotone" width="18" height="18" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "mingcute:shield-fill",
                title: "Govt. Registered",
                desc: "Licensed RA agency — fully compliant with Indian emigration laws.",
              },
              {
                icon: "mingcute:time-fill",
                title: "25+ Years",
                desc: "Decades of experience navigating Gulf hiring complexities.",
              },
              {
                icon: "mingcute:global-fill",
                title: "Gulf Specialist",
                desc: "Deep networks in UAE, KSA, Qatar, Kuwait & Bahrain.",
              },
              {
                icon: "mingcute:star-fill",
                title: "End-to-End",
                desc: "From first call to post-placement follow-up — we handle it all.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-5 rounded-2xl bg-white border border-[#00000008] hover:shadow-md transition-shadow"
              >
                <Icon
                  icon={w.icon}
                  width="24"
                  height="24"
                  style={{ color: "var(--primary-color)" }}
                />
                <h4 className="font-bold text-sm text-(--color-bland-800)">
                  {w.title}
                </h4>
                <p className="text-xs text-(--color-bland-500) leading-[150%]">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 top-margins">
        <CTA />
      </section>

      {/* ── Footer ── */}
      <section className="px-4 top-margins">
        <Footer2 />
      </section>

      {/* animation keyframe */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
