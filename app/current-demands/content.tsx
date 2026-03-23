"use client";

import { useState } from "react";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ─── Data ─────────────────────────────────────────────── */
const demands = [
  {
    id: "JD-001",
    title: "Site Civil Engineer",
    company: "Leading Construction Group",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    salary: "SAR 4,500 – 6,500 / month",
    positions: 8,
    deadline: "30 July 2025",
    category: "Construction",
    type: "Full-time",
    urgent: true,
    experience: "3–5 years",
    skills: ["AutoCAD", "Site Supervision", "BOQ Estimation", "Safety Compliance"],
    benefits: ["Accommodation", "Transport", "Medical", "Annual Flight"],
    description:
      "Supervise civil construction activities on large residential & commercial projects. Coordinate with contractors, manage daily reports, and ensure safety compliance on-site.",
  },
  {
    id: "JD-002",
    title: "Electrical Technician",
    company: "Gulf Infra Corp",
    country: "UAE",
    flag: "🇦🇪",
    salary: "AED 2,200 – 3,000 / month",
    positions: 15,
    deadline: "15 July 2025",
    category: "Technical",
    type: "Full-time",
    urgent: true,
    experience: "2–4 years",
    skills: ["Wiring", "Panel Installation", "Fault Diagnosis", "ITI/Diploma"],
    benefits: ["Accommodation", "Transport", "Medical", "OT Allowance"],
    description:
      "Install, maintain, and repair electrical systems in commercial buildings. Trade test required. ITI or Diploma in Electrical Engineering preferred.",
  },
  {
    id: "JD-003",
    title: "Hotel Steward / Waiter",
    company: "5-Star Hotel Chain",
    country: "Qatar",
    flag: "🇶🇦",
    salary: "QAR 1,500 – 2,000 / month",
    positions: 25,
    deadline: "20 July 2025",
    category: "Hospitality",
    type: "Full-time",
    urgent: false,
    experience: "1–3 years",
    skills: ["F&B Service", "English Communication", "Customer Handling", "POS Systems"],
    benefits: ["Accommodation", "Meals", "Medical", "Uniform"],
    description:
      "Serve guests in a 5-star hotel dining environment. Strong communication skills and a professional demeanor required. Prior Gulf experience preferred.",
  },
  {
    id: "JD-004",
    title: "Heavy Vehicle Driver",
    company: "Logistics & Transport LLC",
    country: "UAE",
    flag: "🇦🇪",
    salary: "AED 1,800 – 2,500 / month",
    positions: 20,
    deadline: "10 Aug 2025",
    category: "Logistics",
    type: "Full-time",
    urgent: false,
    experience: "2+ years",
    skills: ["HMV License", "Route Knowledge", "Load Safety", "Arabic/English Basic"],
    benefits: ["Accommodation", "Transport", "Medical"],
    description:
      "Drive heavy goods vehicles across UAE for a leading logistics company. Valid HMV license and clean driving record mandatory.",
  },
  {
    id: "JD-005",
    title: "Mechanical Fitter",
    company: "Oil & Gas Maintenance Co.",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    salary: "SAR 3,500 – 5,000 / month",
    positions: 10,
    deadline: "5 Aug 2025",
    category: "Oil & Gas",
    type: "Full-time",
    urgent: false,
    experience: "4–6 years",
    skills: ["Pipe Fitting", "ASME Standards", "Welding Awareness", "Safety Cert"],
    benefits: ["Accommodation", "Food", "Medical", "Annual Leave"],
    description:
      "Work on mechanical maintenance and installation of pipelines and equipment in oil & gas facilities. Relevant trade certificate and experience in industrial plants essential.",
  },
  {
    id: "JD-006",
    title: "General Nurse (Male/Female)",
    company: "Private Healthcare Group",
    country: "Kuwait",
    flag: "🇰🇼",
    salary: "KWD 250 – 350 / month",
    positions: 12,
    deadline: "25 July 2025",
    category: "Healthcare",
    type: "Full-time",
    urgent: true,
    experience: "2+ years",
    skills: ["BSc Nursing", "OET / English", "Clinical Skills", "Dataflow Clearance"],
    benefits: ["Accommodation", "Medical", "Annual Ticket", "Gratuity"],
    description:
      "Provide patient care in a private hospital setting. BSc Nursing required. Dataflow credential verification will be conducted. English proficiency essential.",
  },
  {
    id: "JD-007",
    title: "Scaffolding Supervisor",
    company: "Construction & Contracting WLL",
    country: "Bahrain",
    flag: "🇧🇭",
    salary: "BHD 280 – 380 / month",
    positions: 6,
    deadline: "12 Aug 2025",
    category: "Construction",
    type: "Full-time",
    urgent: false,
    experience: "5+ years",
    skills: ["Scaffolding Cert", "COSH", "Team Management", "HSE Awareness"],
    benefits: ["Accommodation", "Transport", "Medical", "Return Ticket"],
    description:
      "Supervise scaffolding activities on a large industrial project. CISRS or equivalent scaffolding certification required. Leadership experience essential.",
  },
  {
    id: "JD-008",
    title: "Kitchen Helper / Commis Chef",
    company: "Restaurant Group",
    country: "UAE",
    flag: "🇦🇪",
    salary: "AED 1,200 – 1,600 / month",
    positions: 30,
    deadline: "1 Aug 2025",
    category: "Hospitality",
    type: "Full-time",
    urgent: false,
    experience: "0–2 years",
    skills: ["Food Prep", "Hygiene Standards", "Team Player", "Willingness to Learn"],
    benefits: ["Accommodation", "Meals", "Medical", "Visa"],
    description:
      "Assist chefs in food preparation, kitchen maintenance, and hygiene standards. Freshers with culinary interest welcome. Immediate joining available.",
  },
];

const categories = ["All", "Construction", "Technical", "Hospitality", "Logistics", "Oil & Gas", "Healthcare"];
const countries = ["All Countries", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain"];

const categoryColor: Record<string, string> = {
  Construction: "#92400E",
  Technical: "#1E3A5F",
  Hospitality: "#065F46",
  Logistics: "#5B21B6",
  "Oil & Gas": "#374151",
  Healthcare: "#9A0E19",
};

/* ─── Component ─────────────────────────────────────────── */
export default function DemandsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCountry, setActiveCountry] = useState("All Countries");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = demands.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchCountry = activeCountry === "All Countries" || d.country === activeCountry;
    const matchSearch =
      search === "" ||
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.category.toLowerCase().includes(search.toLowerCase()) ||
      d.country.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchCountry && matchSearch;
  });

  return (
    <div className="overflow-x-hidden">
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* ── HERO ── */}
      <section className="top-margins px-4 relative">
        <div
          className="pointer-events-none absolute -top-10 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)" }}
        />
        <div className="flex flex-col gap-4 max-w-[700px]">
          <span
            className="text-sm font-semibold tracking-[0.2em] uppercase"
            style={{ color: "var(--primary-color)" }}
          >
            Open Positions
          </span>
          <h1 className="font-extrabold text-4xl md:text-6xl leading-[115%] text-(--color-bland-800)">
            Current <span>Gulf Demands</span>
          </h1>
          <p className="text-(--color-bland-600) text-lg leading-[165%]">
            Active vacancies from verified Gulf employers — updated regularly.
            All positions are through our government-licensed agency.
            <strong className="text-(--color-bland-700)"> Zero fees for candidates.</strong>
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex flex-wrap gap-4 mt-8">
          {[
            { icon: "mingcute:briefcase-fill", num: `${demands.length}`, label: "Active openings" },
            { icon: "mingcute:fire-fill", num: `${demands.filter((d) => d.urgent).length}`, label: "Urgent positions" },
            { icon: "mingcute:user-group-fill", num: `${demands.reduce((a, d) => a + d.positions, 0)}+`, label: "Total vacancies" },
            { icon: "mingcute:global-fill", num: "5", label: "Gulf countries" },
          ].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#00000010] shadow-sm"
            >
              <Icon
                icon={s.icon}
                width="18"
                height="18"
                style={{ color: "var(--primary-color)" }}
              />
              <span
                className="font-black text-base"
                style={{ color: "var(--primary-color)" }}
              >
                {s.num}
              </span>
              <span className="text-sm text-(--color-bland-500)">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="mt-10 px-4">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative max-w-[460px]">
            <Icon
              icon="mingcute:search-fill"
              width="18"
              height="18"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              style={{ color: "var(--color-bland-400)" }}
            />
            <input
              type="text"
              placeholder="Search by role, category, country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#00000015] bg-white text-sm text-(--color-bland-700) outline-none focus:border-(--primary-color) transition-colors"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer ${
                  activeCategory === c
                    ? "bg-(--primary-color) text-white border-(--primary-color)"
                    : "border-[#00000015] text-(--color-bland-600) bg-white hover:border-(--primary-color) hover:text-(--primary-color)"
                }`}
              >
                {c}
              </button>
            ))}
            <div className="w-px h-6 self-center bg-[#00000010] mx-2 hidden md:block" />
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCountry(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer ${
                  activeCountry === c
                    ? "bg-(--color-bland-800) text-white border-(--color-bland-800)"
                    : "border-[#00000015] text-(--color-bland-600) bg-white hover:border-(--color-bland-800)"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB CARDS ── */}
      <section className="mt-8 px-4 pb-20">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <Icon icon="mingcute:search-fill" width="48" height="48" style={{ color: "var(--color-bland-300)" }} />
            <p className="text-(--color-bland-500)">No positions found matching your filters.</p>
            <Button
              onClick={() => { setActiveCategory("All"); setActiveCountry("All Countries"); setSearch(""); }}
              className="px-5 py-4 bg-(--primary-color) text-white rounded-[32px] text-sm cursor-pointer hover:scale-95 transition-transform"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((job) => {
              const isExpanded = expandedCard === job.id;
              const accentColor = categoryColor[job.category] || "var(--primary-color)";
              return (
                <div
                  key={job.id}
                  className="group flex flex-col bg-white border border-[#00000010] rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Card top strip */}
                  <div
                    className="h-2 w-full"
                    style={{ background: accentColor }}
                  />

                  {/* Card body */}
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {job.urgent && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                              style={{ background: "var(--primary-color)" }}>
                              🔥 Urgent
                            </span>
                          )}
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                            style={{ background: accentColor }}
                          >
                            {job.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-(--color-bland-800) mt-1 leading-[125%]">
                          {job.title}
                        </h3>
                        <p className="text-sm text-(--color-bland-500)">{job.company}</p>
                      </div>
                      <div className="text-3xl shrink-0">{job.flag}</div>
                    </div>

                    {/* Meta row */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: "mingcute:map-pin-fill", val: job.country },
                        { icon: "mingcute:user-group-fill", val: `${job.positions} vacancies` },
                        { icon: "mingcute:time-fill", val: job.experience },
                        { icon: "mingcute:calendar-fill", val: `Close: ${job.deadline}` },
                      ].map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <Icon
                            icon={m.icon}
                            width="14"
                            height="14"
                            style={{ color: accentColor }}
                          />
                          <span className="text-xs text-(--color-bland-500) truncate">{m.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Salary */}
                    <div
                      className="px-4 py-3 rounded-xl flex items-center gap-2"
                      style={{ background: `${accentColor}12` }}
                    >
                      <Icon icon="mingcute:currency-dollar-fill" width="16" height="16" style={{ color: accentColor }} />
                      <span className="text-sm font-semibold" style={{ color: accentColor }}>
                        {job.salary}
                      </span>
                    </div>

                    {/* Expandable details */}
                    {isExpanded && (
                      <div
                        className="flex flex-col gap-4 border-t border-[#00000008] pt-4"
                        style={{ animation: "fadeSlideIn 0.25s ease" }}
                      >
                        <p className="text-sm text-(--color-bland-600) leading-[165%]">
                          {job.description}
                        </p>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-bland-400) mb-2">
                            Skills Required
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skills.map((s, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 rounded-full text-xs border border-[#00000012] text-(--color-bland-600) bg-(--color-bland-50)"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-(--color-bland-400) mb-2">
                            Benefits
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.benefits.map((b, i) => (
                              <div key={i} className="flex items-center gap-1 text-xs text-(--color-bland-600)">
                                <Icon icon="mingcute:check-2-fill" width="12" height="12" style={{ color: accentColor }} />
                                {b}
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-(--color-bland-400)">Ref: {job.id}</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto pt-2">
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : job.id)}
                        className="flex-1 py-2.5 rounded-[32px] border border-[#00000015] text-sm text-(--color-bland-600) hover:border-(--primary-color) hover:text-(--primary-color) transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        {isExpanded ? "Show less" : "View details"}
                        <Icon
                          icon="si:arrow-right-duotone"
                          width="16"
                          height="16"
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-[270deg]" : "rotate-90"}`}
                        />
                      </button>
                      <Link href="/contact" className="flex-1">
                        <Button
                          className="w-full py-5 text-white rounded-[32px] text-sm cursor-pointer hover:scale-95 transition-transform"
                          style={{ background: accentColor }}
                        >
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-[#00000010] bg-white">
          <div className="flex items-center gap-3">
            <Icon icon="mingcute:shield-fill" width="22" height="22" style={{ color: "var(--primary-color)" }} />
            <div>
              <p className="text-sm font-semibold text-(--color-bland-800)">
                100% Legitimate — Zero Candidate Fees
              </p>
              <p className="text-xs text-(--color-bland-500)">
                Licensed under RA B-1794/PUN/PER/100/5/10094/2022, Govt. of India
              </p>
            </div>
          </div>
          <Link href="/contact">
            <Button className="bg-(--primary-color) text-white rounded-[32px] px-6 py-5 text-sm cursor-pointer hover:scale-95 transition-transform whitespace-nowrap">
              Register Your Profile
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4">
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
