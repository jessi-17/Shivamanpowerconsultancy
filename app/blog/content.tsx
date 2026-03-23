"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/own/Header";
import { Footer2 } from "@/components/own/Footer";
import { Icon } from "@iconify/react";
import CTA from "@/components/own/CTA";
import blogs from "../_lib/data/blogs";

const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogs.filter((b) => {
    const matchCat = activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      search === "" ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="overflow-x-hidden">
      <div className="bg-(--color-bland-25) px-4">
        <Header />
      </div>

      {/* Hero */}
      <section className="top-margins px-4">
        <div className="rounded-3xl overflow-hidden relative bg-white border border-[#00000010] shadow-sm">
          {/* Background accent */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, var(--primary-color) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-14">
            {/* Left: Text */}
            <div className="flex flex-col justify-center gap-5">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--primary-color)" }}>
                Blog & Guides
              </span>
              <h1 className="font-extrabold text-4xl md:text-[56px] leading-[115%] text-(--color-bland-800)">
                Gulf Jobs<br />
                <span>Knowledge Hub</span>
              </h1>
              <p className="text-(--color-bland-500) text-lg leading-[170%] max-w-[480px]">
                Expert guides on Dubai visa process, Gulf jobs, Romania work permits,
                and everything Punjab workers need to know about working abroad.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { num: `${blogs.length}+`, label: "Guides", icon: "mingcute:book-fill" },
                  { num: "6+", label: "Countries", icon: "mingcute:global-fill" },
                  { num: "Free", label: "Advice", icon: "mingcute:heart-fill" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-[#00000010] bg-[#f9f9f9]"
                  >
                    <Icon icon={s.icon} width="16" height="16" style={{ color: "var(--primary-color)" }} />
                    <span className="text-base font-black text-(--color-bland-800)">{s.num}</span>
                    <span className="text-xs text-(--color-bland-400)">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Search inside hero */}
              <div className="relative max-w-[420px] mt-2">
                <Icon
                  icon="mingcute:search-fill"
                  width="18"
                  height="18"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-(--color-bland-400)"
                />
                <input
                  type="text"
                  placeholder="Search guides... e.g. Dubai visa, driver jobs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm text-(--color-bland-700) placeholder:text-(--color-bland-400) outline-none border border-[#00000015] bg-[#f9f9f9] transition-colors focus:border-(--primary-color)"
                />
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="hidden lg:grid grid-cols-2 gap-3 h-[420px]">
              {/* Large card */}
              <Link href={`/blog/${blogs[0].slug}`} className="col-span-1 row-span-2 group relative rounded-2xl overflow-hidden bg-[#f0f0f0]">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}>
                    {blogs[0].category}
                  </span>
                  <h3 className="text-white text-sm font-bold mt-2 leading-[140%] line-clamp-2 group-hover:underline">
                    {blogs[0].title}
                  </h3>
                </div>
              </Link>

              {/* Top right */}
              <Link href={`/blog/${blogs[1].slug}`} className="group relative rounded-2xl overflow-hidden bg-[#f0f0f0]">
                <Image
                  src={blogs[1].image}
                  alt={blogs[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}>
                    {blogs[1].category}
                  </span>
                  <h3 className="text-white text-xs font-bold mt-1.5 leading-[140%] line-clamp-2 group-hover:underline">
                    {blogs[1].title}
                  </h3>
                </div>
              </Link>

              {/* Bottom right */}
              <Link href={`/blog/${blogs[2].slug}`} className="group relative rounded-2xl overflow-hidden bg-[#f0f0f0]">
                <Image
                  src={blogs[2].image}
                  alt={blogs[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-sm" style={{ background: "rgba(0,0,0,0.5)", color: "#fff" }}>
                    {blogs[2].category}
                  </span>
                  <h3 className="text-white text-xs font-bold mt-1.5 leading-[140%] line-clamp-2 group-hover:underline">
                    {blogs[2].title}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mt-10 px-4">
        <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mt-10 px-4">
        <Link href={`/blog/${blogs[0].slug}`}>
          <div className="group rounded-3xl overflow-hidden border border-[#00000010] bg-white hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[250px] lg:h-[400px] overflow-hidden">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "var(--primary-color)", color: "#fff" }}>
                  Featured
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-[#00000015] text-(--color-bland-600)">
                  {blogs[0].category}
                </span>
                <span className="text-xs text-(--color-bland-400)">{blogs[0].readTime}</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-(--color-bland-800) leading-[130%] group-hover:text-(--primary-color) transition-colors">
                {blogs[0].title}
              </h2>
              <p className="text-(--color-bland-500) leading-[170%]">
                {blogs[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--primary-color)" }}>
                Read full guide
                <Icon icon="si:arrow-right-duotone" width="18" height="18" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Blog Grid */}
      <section className="mt-10 px-4 pb-10">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <Icon icon="mingcute:search-fill" width="48" height="48" style={{ color: "var(--color-bland-300)" }} />
            <p className="text-(--color-bland-500)">No articles found matching your search.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearch(""); }}
              className="px-5 py-3 bg-(--primary-color) text-white rounded-full text-sm cursor-pointer hover:scale-95 transition-transform"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <article className="group flex flex-col bg-white border border-[#00000010] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "var(--primary-color)", color: "#fff" }}
                      >
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div className="flex items-center gap-3 text-xs text-(--color-bland-400)">
                      <span>{blog.date}</span>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-(--color-bland-800) leading-[135%] group-hover:text-(--primary-color) transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-(--color-bland-500) leading-[165%] line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1 mt-auto pt-3 text-sm font-semibold" style={{ color: "var(--primary-color)" }}>
                      Read more
                      <Icon icon="si:arrow-right-duotone" width="16" height="16" className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
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
