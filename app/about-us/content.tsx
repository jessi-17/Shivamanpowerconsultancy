"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CTA from "@/components/own/CTA";

/* ─── Data ─────────────────────────────────────────────── */

const timeline = [
  {
    year: "1998",
    title: "Founded in Nakodar",
    desc: "Shiva Travel & Manpower Consultant opened its doors in Nakodar, Jalandhar — driven by a singular vision to connect Punjab's workforce with Gulf opportunities.",
  },
  {
    year: "2002",
    title: "Government Recognition",
    desc: "Received recognition from the Ministry of Overseas Indian Affairs, Govt. of India — cementing our credibility as a licensed overseas recruiter.",
  },
  {
    year: "2008",
    title: "ALMRA Membership",
    desc: "Joined the Association of Licensed Manpower Recruitment Agencies (ALMRA), Punjab — aligning with the highest industry standards.",
  },
  {
    year: "2015",
    title: "Gulf Network Expanded",
    desc: "Established deep employer partnerships in UAE, Saudi Arabia, Qatar, Kuwait, and Bahrain spanning construction, hospitality, and healthcare sectors.",
  },
  {
    year: "2022",
    title: "License Renewed",
    desc: "License No. B-1794/PUN/PER/100/5/10094/2022 renewed — valid through June 2027. A testament to 25 years of compliant, ethical recruitment.",
  },
  {
    year: "Today",
    title: "Thousands Placed & Counting",
    desc: "From a single office in Nakodar, we've helped thousands of families build better futures across the Gulf region.",
  },
];

const values = [
  {
    icon: "mingcute:shield-fill",
    title: "Trust & Transparency",
    desc: "No hidden fees for candidates. Every process — from documentation to deployment — is open, clear, and compliant with Indian emigration law.",
  },
  {
    icon: "mingcute:star-fill",
    title: "Quality First",
    desc: "We don't fill vacancies — we build careers and teams. Every candidate is screened, trade-tested, and verified before presentation.",
  },
  {
    icon: "mingcute:global-fill",
    title: "Gulf Expertise",
    desc: "25 years of on-ground experience understanding the Gulf's unique labour requirements, cultural expectations, and compliance frameworks.",
  },
  {
    icon: "mingcute:heart-fill",
    title: "Candidate Welfare",
    desc: "We support candidates long after placement — from pre-departure orientation to post-arrival follow-up. Your success is our reputation.",
  },
  {
    icon: "mingcute:certificate-fill",
    title: "Fully Licensed",
    desc: "RA License B-1794/PUN/PER/100/5/10094/2022 | Ministry of External Affairs, Govt. of India | ALMRA Member.",
  },
  {
    icon: "mingcute:time-fill",
    title: "Speed & Reliability",
    desc: "Employer shortlists delivered within 72 hours. We've built our reputation on being the agency that delivers — on time, every time.",
  },
];

const team = [
  {
    name: "Founder & Director",
    role: "Shiva Travel & Manpower Consultant",
    bio: "With over 25 years in Gulf recruitment, our founder built this consultancy from a single desk in Nakodar into a government-recognised agency trusted by thousands of workers and employers across India and the Gulf.",
    tag: "Founder",
    initials: "SD",
    color: "#C1121F",
  },
  {
    name: "Operations Head",
    role: "Visa & Documentation",
    bio: "Oversees end-to-end E-Migrate processing, visa coordination, and medical clearance — ensuring every candidate reaches their destination smoothly and on schedule.",
    tag: "Operations",
    initials: "RS",
    color: "#1E3A5F",
  },
  {
    name: "Recruitment Lead",
    role: "Talent Sourcing & Screening",
    bio: "Manages our candidate pipeline — from trade testing at our Nakodar centre to final shortlisting for Gulf employers across construction, hospitality, and healthcare.",
    tag: "Recruitment",
    initials: "PK",
    color: "#065F46",
  },
  {
    name: "Client Relations",
    role: "Gulf Employer Partnerships",
    bio: "Manages our employer relationships in UAE, Saudi Arabia, Qatar, and Kuwait — understanding hiring needs deeply and ensuring every mobilisation is seamless.",
    tag: "Partnerships",
    initials: "AK",
    color: "#92400E",
  },
];

const whyUsStats = [
  { num: "25+", label: "Years of operation" },
  { num: "4.5★", label: "Justdial rating" },
  { num: "4", label: "Gulf countries" },
  { num: "2027", label: "License valid till" },
];

/* ─── Component ─────────────────────────────────────────── */

export default function AboutContent() {
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* ── HERO ── */}
      <section className="top-margins px-4 relative overflow-hidden">
        {/* background accent */}
        <div
          className="pointer-events-none absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)" }}
        />

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <div className="flex flex-col gap-5 max-w-[620px]">
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary-color)" }}
            >
              Our Story
            </span>
            <h1 className="font-extrabold text-4xl md:text-6xl leading-[115%] text-(--color-bland-800)">
              From a Small Office in Nakodar to the <span>Gulf & Beyond</span>
            </h1>
            <p className="text-(--color-bland-600) text-lg leading-[170%]">
              M/s Shiva Travel & Manpower Consultant was established in Nakodar,
              Jalandhar to serve the growing demand for skilled Indian workers
              across Gulf markets. Today, we are a government-recognised
              recruiting agency — licensed by the Ministry of External Affairs,
              Govt. of India — with a track record built on trust, compliance,
              and care.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {whyUsStats.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center px-5 py-3 rounded-2xl border border-[#00000010] bg-white shadow-sm min-w-[90px]"
                >
                  <span
                    className="text-2xl font-black"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-xs text-(--color-bland-500) text-center mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Credential card */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="bg-white border border-[#00000010] rounded-3xl p-8 shadow-md flex flex-col gap-5 max-w-[360px]">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--primary-color-50)" }}
              >
                <Icon
                  icon="mingcute:certificate-fill"
                  width="28"
                  height="28"
                  style={{ color: "var(--primary-color)" }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-(--color-bland-400)">
                  Government Recognition
                </span>
                <h3 className="text-lg font-bold text-(--color-bland-800)">
                  Ministry of External Affairs
                </h3>
                <p className="text-sm text-(--color-bland-500) leading-[160%]">
                  Recognised Recruiting Agent, Govt. of India
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-3 border-t border-[#00000008]">
                <div className="flex justify-between text-sm">
                  <span className="text-(--color-bland-500)">License No.</span>
                  <span className="font-semibold text-(--color-bland-700) text-right text-xs">
                    B-1794/PUN/PER/100/5/10094/2022
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-(--color-bland-500)">Valid Until</span>
                  <span className="font-semibold text-(--color-bland-700)">
                    27 June 2027
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-(--color-bland-500)">Member</span>
                  <span className="font-semibold text-(--color-bland-700)">
                    ALMRA Punjab
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-(--color-bland-500)">Rating</span>
                  <span className="font-semibold text-(--color-bland-700)">
                    4.5 ★ Justdial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S STORY ── */}
      <section className="top-margins px-4">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ background: "var(--color-bland-100)" }}
        >
          {/* Left — decorative quote block */}
          <div
            className="flex flex-col justify-between p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--primary-color-800), var(--primary-color))",
            }}
          >
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full opacity-10"
              style={{ background: "white" }}
            />
            <Icon
              icon="mingcute:quote-left-fill"
              width="48"
              height="48"
              color="rgba(255,255,255,0.3)"
            />
            <div className="flex flex-col gap-6 mt-8">
              <p className="text-white! text-xl md:text-2xl font-light leading-[160%] italic">
                "I started this consultancy because I saw how difficult it was
                for honest, hardworking people from Punjab to navigate the Gulf
                placement process without being misled. My goal was simple —
                bring integrity to recruitment."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  SD
                </div>
                <div>
                  <p className="text-white! font-semibold">Founder & Director</p>
                  <p className="text-white! opacity-70 text-sm">
                    Shiva Travel & Manpower Consultant, Nakodar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — story text */}
          <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
            <span
              className="text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--primary-color)" }}
            >
              The Founder's Story
            </span>
            <h2 className="text-3xl font-bold text-(--color-bland-800) leading-[125%]">
              Built on a Promise to <span>Serve Honestly</span>
            </h2>
            <p className="text-(--color-bland-600) leading-[175%]">
              Shiva Travel & Manpower Consultant was born out of a deep
              understanding of the struggles faced by job-seekers from Nakodar
              and the surrounding Doaba region of Punjab. Our founder witnessed
              first-hand how unregistered agents would exploit desperate
              workers — charging illegal fees, promising jobs that didn't exist,
              and leaving families in debt.
            </p>
            <p className="text-(--color-bland-600) leading-[175%]">
              Starting from a single office on Golden Avenue, Nakodar, the
              vision was clear: become the most trusted name in Gulf placement
              from Punjab. Today, with a government licence, ALMRA membership,
              and thousands of successful placements, that promise has been
              kept.
            </p>
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-[#00000010] bg-white w-fit">
              <Icon
                icon="mingcute:map-pin-fill"
                width="20"
                height="20"
                style={{ color: "var(--primary-color)" }}
              />
              <span className="text-sm text-(--color-bland-600)">
                Golden Avenue, Near Time Cafe, Nakodar, Jalandhar – 144040
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="top-margins px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            Our Journey
          </span>
          <h2 className="text-4xl font-bold text-(--color-bland-800) leading-[120%]">
            25 Years of <span>Milestones</span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-0">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#00000010] -translate-x-1/2 z-0" />

          {timeline.map((t, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 pb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-white z-10"
                style={{ borderColor: "var(--primary-color)" }}
              />

              {/* content card */}
              <div
                className={`ml-14 md:ml-0 md:w-[44%] ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-white border border-[#00000010] rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <span
                    className="text-sm font-black tracking-widest"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {t.year}
                  </span>
                  <h3 className="text-lg font-bold text-(--color-bland-800) mt-1 mb-2">
                    {t.title}
                  </h3>
                  <p className="text-sm text-(--color-bland-500) leading-[160%]">
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES / WHY CHOOSE US ── */}
      <section className="top-margins px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-(--color-bland-800) leading-[120%]">
            What Makes Us <span>Different</span>
          </h2>
          <p className="text-(--color-bland-500) max-w-[500px] text-base">
            In a market full of unregistered agents and empty promises, we stand
            on 25 years of credentials, compliance, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 p-7 rounded-2xl border border-[#00000010] bg-white hover:border-(--primary-color) hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, var(--primary-color-15), transparent)" }}
              />
              <div
                className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "var(--primary-color-50)" }}
              >
                <Icon
                  icon={v.icon}
                  width="22"
                  height="22"
                  style={{ color: "var(--primary-color)" }}
                />
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-(--color-bland-800)">
                  {v.title}
                </h3>
                <p className="text-sm text-(--color-bland-500) leading-[165%]">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ── BOTTOM CTA STRIP ── */}
      <section className="top-margins px-4">
        <div
          className="rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, var(--primary-color-800), var(--primary-color))",
          }}
        >
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-[120%]">
              Ready to work with us?
            </h2>
            <p className="opacity-80 max-w-[400px] leading-[160%] text-[#ffffffcc]!">
              Whether you're an employer seeking reliable Gulf-ready workers or
              a candidate ready to build a better future — let's talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contactus">
              <Button className="bg-white text-(--primary-color) hover:bg-(--primary-color-25) rounded-[32px] px-8 py-6 text-base font-semibold cursor-pointer hover:scale-95 transition-transform whitespace-nowrap">
                Contact Us
              </Button>
            </Link>
            <Link href="/contactus">
              <Button className="bg-transparent border-2 border-white text-white rounded-[32px] px-8 py-6 text-base font-semibold cursor-pointer hover:scale-95 hover:bg-white hover:text-(--primary-color) transition-all whitespace-nowrap">
                View Current Demands
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 top-margins">
        <CTA />
      </section>

      {/* Footer */}
      <section className="px-4 top-margins">
        <Footer2 />
      </section>
    </div>
  );
}
