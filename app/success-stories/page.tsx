"use client";

import { useState } from "react";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CTA from "@/components/own/CTA";

/* ─── Data ─────────────────────────────────────────────── */
const stories = [
  {
    id: 1,
    name: "Gurpreet Singh",
    hometown: "Nakodar, Punjab",
    destination: "Dubai, UAE",
    role: "Site Engineer",
    employer: "Al Hamra Construction",
    flag: "🇦🇪",
    year: "2022",
    category: "Construction",
    salary_before: "₹18,000/mo",
    salary_after: "AED 4,800/mo",
    quote:
      "I had tried two other agencies before Shiva Travel. They took money and gave nothing. Here, not a single rupee was charged. Within 45 days I had my visa and was on a flight to Dubai. My family's life has completely changed.",
    story:
      "Gurpreet had been working as a junior engineer in Ludhiana for three years, barely making ends meet. His family approached Shiva Travel on a neighbour's recommendation. After document verification and a trade test, he was shortlisted for an Al Hamra project. Today he supervises a team of 40 workers and has built his own house back in Nakodar.",
    tag: "From struggling engineer to site leader",
    initials: "GS",
    color: "#1E3A5F",
    lightBg: "#EBF1F8",
    darkText: "#0F2040",
  },
  {
    id: 2,
    name: "Rajvinder Kaur",
    hometown: "Phillaur, Punjab",
    destination: "Doha, Qatar",
    role: "Staff Nurse",
    employer: "Hamad Medical Corporation",
    flag: "🇶🇦",
    year: "2023",
    category: "Healthcare",
    salary_before: "₹22,000/mo",
    salary_after: "QAR 3,200/mo",
    quote:
      "As a woman from a small town, my family was nervous about me going abroad. The team at Shiva Travel guided every step — even the Dataflow verification process that most agencies don't even know about. I felt safe throughout.",
    story:
      "Rajvinder completed her BSc Nursing in Jalandhar and spent two years in a local clinic. She came to Shiva Travel for Gulf placement and was guided through Dataflow credential verification, OET preparation resources, and the entire Qatar MOPH licensing process. She joined Hamad Medical Corporation in 2023 and now sends money home to fund her younger brother's education.",
    tag: "Nurse who trusted the process",
    initials: "RK",
    color: "#9A0E19",
    lightBg: "#FAEAEB",
    darkText: "#6B0A12",
  },
  {
    id: 3,
    name: "Amrinder Pal",
    hometown: "Kapurthala, Punjab",
    destination: "Riyadh, Saudi Arabia",
    role: "Mechanical Fitter",
    employer: "ARAMCO Contractor",
    flag: "🇸🇦",
    year: "2021",
    category: "Oil & Gas",
    salary_before: "₹14,000/mo",
    salary_after: "SAR 4,200/mo",
    quote:
      "The trade test they organised before my interview was the best preparation I could have. The interviewer was impressed and said I was more prepared than candidates from big cities. Shiva Travel gave me that edge.",
    story:
      "Amrinder had worked in a small garage in Kapurthala as a mechanic. He had no formal certification when he first walked into the Nakodar office. The team enrolled him in skill screening, helped him get an ITI certificate recognised, and arranged a trade test before his ARAMCO contractor interview. He cleared it on the first attempt.",
    tag: "Garage mechanic to ARAMCO fitter",
    initials: "AP",
    color: "#374151",
    lightBg: "#ECEEF1",
    darkText: "#1F2937",
  },
  {
    id: 4,
    name: "Hardeep Maan",
    hometown: "Nakodar, Punjab",
    destination: "Abu Dhabi, UAE",
    role: "Hotel Supervisor",
    employer: "Rotana Hotels",
    flag: "🇦🇪",
    year: "2023",
    category: "Hospitality",
    salary_before: "₹16,000/mo",
    salary_after: "AED 3,600/mo",
    quote:
      "I had zero experience in a 5-star environment. They coached me on interview etiquette, how to dress, how to answer hospitality-specific questions. It sounds small, but it made all the difference. I got the job.",
    story:
      "Hardeep had worked in a local dhaba and a small hotel in Jalandhar for 4 years. His English was limited and he was nervous about international placements. The Shiva Travel team worked on his CV, ran mock interviews, and connected him with a Rotana Hotels HR visit in Chandigarh. He is now a supervisor and has referred three colleagues from Nakodar to the same agency.",
    tag: "Dhaba waiter to 5-star supervisor",
    initials: "HM",
    color: "#065F46",
    lightBg: "#E0F4EE",
    darkText: "#044235",
  },
  {
    id: 5,
    name: "Sukhwinder Dhaliwal",
    hometown: "Shahkot, Punjab",
    destination: "Kuwait City, Kuwait",
    role: "Heavy Vehicle Driver",
    employer: "Gulf Freight Solutions",
    flag: "🇰🇼",
    year: "2022",
    category: "Logistics",
    salary_before: "₹12,000/mo",
    salary_after: "KWD 260/mo",
    quote:
      "No agency in Jalandhar helped me because they said there was no demand for drivers. Shiva Travel had a direct demand from a Kuwait logistics company and my papers were done in 38 days. 38 days — start to finish.",
    story:
      "Sukhwinder had been driving trucks across Punjab for six years. Every agency he visited claimed driver placements were rare or unreliable. Shiva Travel's Gulf employer network had an active driver demand from Kuwait, and Sukhwinder's clean HMV license and driving record meant he was shortlisted immediately. He now supports a family of five and is building a new home.",
    tag: "Punjab trucker to Gulf freight driver",
    initials: "SD",
    color: "#5B21B6",
    lightBg: "#EDE9F8",
    darkText: "#3B0F8A",
  },
  {
    id: 6,
    name: "Manpreet Sandhu",
    hometown: "Shahpur, Punjab",
    destination: "Manama, Bahrain",
    role: "Scaffolding Supervisor",
    employer: "Arabian Contracting Co.",
    flag: "🇧🇭",
    year: "2023",
    category: "Construction",
    salary_before: "₹20,000/mo",
    salary_after: "BHD 370/mo",
    quote:
      "I already had my CISRS scaffolding certificate but didn't know how to convert Gulf demand into an opportunity. Shiva Travel matched my profile with the right employer within two weeks of registration. Professional to the core.",
    story:
      "Manpreet had worked in scaffolding across Indian construction sites for 8 years and had self-funded his international safety certification. He approached Shiva Travel after a Google search and registered his profile. Within two weeks, his profile was shared with an Arabian Contracting Company demand in Bahrain. After a video interview, he was selected and mobilised within 60 days.",
    tag: "Certified professional placed in 60 days",
    initials: "MS",
    color: "#92400E",
    lightBg: "#FBF0E6",
    darkText: "#6B2E08",
  },
];

const stats = [
  { num: "4.5★", label: "Average rating", icon: "mingcute:star-fill" },
  { num: "10,000+", label: "Successful placements", icon: "mingcute:user-check-fill" },
  { num: "25+", label: "Years of trust", icon: "mingcute:time-fill" },
  { num: "₹0", label: "Candidate fees charged", icon: "mingcute:shield-fill" },
];

const categories = ["All", "Construction", "Healthcare", "Oil & Gas", "Hospitality", "Logistics"];

/* ─── Component ─────────────────────────────────────────── */
export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const filtered = stories.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <div className="overflow-x-hidden">
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* ── HERO ── */}
      <section className="top-margins px-4 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-20 -top-20 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)" }}
        />

        <div className="flex flex-col gap-5 max-w-[680px]">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            Real Lives Changed
          </span>
          <h1 className="font-extrabold text-4xl md:text-6xl leading-[115%] text-(--color-bland-800)">
            Success Stories from <span>Nakodar to the Gulf</span>
          </h1>
          <p className="text-lg leading-[165%]" style={{ color: "#374151" /* gray-700, was --color-bland-600 */ }}>
            Behind every placement is a family whose life has changed for the
            better. These are a few of the thousands of stories we're proud to
            have been part of.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-sm"
              style={{
                background: "#ffffff",
                border: "1px solid #D1D5DB", /* gray-300 — was #00000010 (4% opacity) */
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#FDECEA" /* warm tinted bg instead of near-invisible primary-50 */ }}
              >
                <Icon
                  icon={s.icon}
                  width="18"
                  height="18"
                  style={{ color: "var(--primary-color)" }}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-black leading-none"
                  style={{ color: "var(--primary-color)" }}
                >
                  {s.num}
                </span>
                <span className="text-xs" style={{ color: "#4B5563" /* gray-600 was --color-bland-500 */ }}>
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED STORY (first story, full width) ── */}
      <section className="top-margins px-4">
        <div
          className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{ border: "1px solid #D1D5DB" }}
        >
          {/* Left: person */}
          <div
            className="relative flex flex-col justify-end p-10 md:p-14 min-h-[380px]"
            style={{
              background: `linear-gradient(135deg, ${stories[0].color}f0, ${stories[0].color}cc)`,
            }}
          >
            {/* pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl font-black">
                {stories[0].initials}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "rgba(255,255,255,0.25)" }}
                  >
                    Featured Story
                  </span>
                  <span className="text-2xl">{stories[0].flag}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{stories[0].name}</h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {stories[0].role} · {stories[0].employer}
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {stories[0].hometown} → {stories[0].destination}
                </p>
              </div>
              {/* salary uplift */}
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <span
                  className="px-3 py-1 rounded-full text-xs line-through"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}
                >
                  {stories[0].salary_before}
                </span>
                <Icon icon="si:arrow-right-duotone" width="16" color="white" />
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                >
                  {stories[0].salary_after}
                </span>
              </div>
            </div>
          </div>

          {/* Right: quote + story */}
          <div className="flex flex-col gap-6 p-10 md:p-14 bg-white">
            <Icon
              icon="mingcute:quote-left-fill"
              width="40"
              height="40"
              style={{ color: "var(--primary-color)" }}
            />
            <p
              className="text-xl leading-[175%] italic"
              style={{ color: "#1F2937" /* gray-800 was --color-bland-700 */ }}
            >
              "{stories[0].quote}"
            </p>
            <p
              className="text-sm leading-[175%] pt-6"
              style={{
                color: "#374151", /* gray-700 was --color-bland-500 */
                borderTop: "1px solid #E5E7EB",
              }}
            >
              {stories[0].story}
            </p>
            <div
              className="flex items-center justify-between mt-auto pt-4"
              style={{ borderTop: "1px solid #E5E7EB" }}
            >
              <span className="text-xs" style={{ color: "#6B7280" }}>
                Placed in {stories[0].year}
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} icon="mingcute:star-fill" width="16" height="16" style={{ color: "#F59E0B" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="mt-12 px-4">
        <div className="flex flex-col gap-3">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#374151" /* was --color-bland-500 */ }}
          >
            Filter by industry
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-2 rounded-full text-sm transition-all duration-200 cursor-pointer font-medium"
                style={
                  activeCategory === c
                    ? {
                        background: "var(--primary-color)",
                        color: "#ffffff",
                        border: "1px solid var(--primary-color)",
                      }
                    : {
                        background: "#ffffff",
                        color: "#374151", /* was --color-bland-600 */
                        border: "1px solid #9CA3AF", /* gray-400 was near-invisible #00000015 */
                      }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY CARDS ── */}
      <section className="mt-8 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((story) => {
            const isOpen = expandedStory === story.id;
            return (
              <div
                key={story.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ border: "1px solid #D1D5DB" /* gray-300 was near-invisible #00000010 */ }}
              >
                {/* Coloured header — now uses solid lightBg for legibility */}
                <div
                  className="relative p-6 flex flex-col gap-4"
                  style={{
                    background: story.lightBg, /* solid tint instead of ${color}06 / ${color}18 */
                    borderBottom: `2px solid ${story.color}40`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-md"
                      style={{ background: story.color }}
                    >
                      {story.initials}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-3xl">{story.flag}</span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: story.color }}
                      >
                        {story.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: story.darkText }}
                    >
                      {story.name}
                    </h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: story.color }}>
                      {story.role}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#4B5563" /* gray-600 was --color-bland-400 */ }}
                    >
                      {story.hometown} → {story.destination} · {story.year}
                    </p>
                  </div>

                  {/* Salary uplift pill */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium line-through"
                      style={{
                        background: "#F3F4F6", /* gray-100, was near-invisible */
                        color: "#6B7280",       /* gray-500, was color-bland-400 + opacity-70 */
                        border: "1px solid #D1D5DB",
                      }}
                    >
                      {story.salary_before}
                    </span>
                    <Icon icon="si:arrow-right-duotone" width="14" style={{ color: story.color }} />
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: story.color }}
                    >
                      {story.salary_after}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Icon key={s} icon="mingcute:star-fill" width="14" height="14" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-[170%] italic"
                    style={{ color: "#374151" /* gray-700 was --color-bland-600 */ }}
                  >
                    "{story.quote}"
                  </p>

                  {isOpen && (
                    <div
                      className="mt-3 pt-3"
                      style={{
                        borderTop: "1px solid #E5E7EB",
                        animation: "fadeSlideIn 0.25s ease",
                      }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "#6B7280" }}
                      >
                        Full Story
                      </p>
                      <p
                        className="text-sm leading-[170%]"
                        style={{ color: "#374151" /* was --color-bland-500 */ }}
                      >
                        {story.story}
                      </p>
                      <div
                        className="mt-4 px-4 py-3 rounded-xl text-sm italic font-medium"
                        style={{
                          background: story.lightBg, /* solid tint instead of ${color}10 */
                          color: story.darkText,
                          border: `1px solid ${story.color}30`,
                        }}
                      >
                        "{story.tag}"
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedStory(isOpen ? null : story.id)}
                    className="mt-auto pt-4 text-sm font-semibold flex items-center gap-1 cursor-pointer hover:underline"
                    style={{ color: story.darkText /* was story.color which could be light */ }}
                  >
                    {isOpen ? "Show less" : "Read full story"}
                    <Icon
                      icon="si:arrow-right-duotone"
                      width="16"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-[270deg]" : "rotate-90"}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit story CTA */}
        <div
          className="mt-14 rounded-3xl bg-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ border: "1px solid #D1D5DB" }}
        >
          <div className="flex flex-col gap-3">
            <h2
              className="text-2xl md:text-3xl font-bold leading-[125%]"
              style={{ color: "#111827" /* gray-900 was --color-bland-800 */ }}
            >
              Have a story to share?
            </h2>
            <p
              className="max-w-[420px] leading-[165%]"
              style={{ color: "#374151" /* gray-700 was --color-bland-500 */ }}
            >
              If Shiva Travel helped you land a Gulf opportunity, we'd love to
              feature your journey and inspire others from your community.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contactus">
              <Button className="bg-(--primary-color) text-white rounded-[32px] px-7 py-5 text-sm cursor-pointer hover:scale-95 transition-transform whitespace-nowrap">
                Share My Story
              </Button>
            </Link>
            <Link href="/contactus">
              <Button
                className="rounded-[32px] px-7 py-5 text-sm cursor-pointer hover:scale-95 transition-all whitespace-nowrap"
                style={{
                  background: "transparent",
                  border: "1px solid #9CA3AF", /* gray-400 was near-invisible #00000015 */
                  color: "#374151",            /* gray-700 was --color-bland-600 */
                }}
              >
                View Open Demands
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 top-margins">
        <CTA />
      </section>

      <section className="px-4 top-margins">
        <Footer2 />
      </section>

      <style jsx global>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
