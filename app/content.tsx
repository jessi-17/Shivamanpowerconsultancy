"use client";

import Image from "next/image";
import "./global.css";
import Header from "../src/components/own/Header";
import { Icon } from "@iconify/react";
import heroimg1 from "../public/hero img-1.png";
import heroimg2 from "../public/hero img.png";
import pattern from "../public/pattern.svg";
import Marqueesection from "@/components/own/Marquee";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import service1 from "../public/recruitment.png";
import service6 from "../public/skilldevelopment.png";
import service5 from "../public/overseasplacement.png";
import service4 from "../public/executiveserach.png";
import service3 from "../public/HR consulting.png";
import service2 from "../public/Industrialworkforce.png";
import industry from "../public/industry.png";

import { useEffect, useRef } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface CardTransform {
  rotateX: number;
  rotateY: number;
  scale: number;
}

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer2 } from "@/components/own/Footer";
import industries from "./_lib/data/industriesweserve";
import Link from "next/link";
import CTA from "@/components/own/CTA";
import Contactcard from "@/components/own/contactcard";
import ScrollStats from "@/components/own/ScrollStats";
export default function HomeContent() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div id="mainWrapper overflow-hidden">
        <div className="bg-(--color-bland-25) px-4">
          <Header />
        </div>
        <div className="content-wrapper">
          <section className="top-margins flex flex-col gap-8 md:flex-row items-start justify-between px-4 pb-40 relative">
            <div className="flex flex-col w-full md:max-w-[670px] gap-4 ">
              <h1 className="font-extrabold text-left leading-[120%] md:text-left text-4xl lg:text-6xl">
                Your Strategic <span>Manpower Partner</span> for the Gulf Region
              </h1>
              <p className="text-(--color-bland-700) leading-[150%] text-left md:text-left">
                As a government-recognized consultancy, For over 25 years, we've
                connected <br className="hidden md:block" /> leading companies
                in the UAE, Saudi Arabia, Qatar, and across the Gulf with a{" "}
                <br className="hidden md:block" /> world-class, vetted
                workforce. We build careers and bridge opportunities.
              </p>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="flex items-start gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <span> Registered Overseas Recruitment (RA) Compliance </span>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <span>E-Migrate Process Support </span>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <span>Trade Testing & Skill Screening </span>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <span>Visa, Medical & Document Assistance </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 relative w-full z-0">
              <Image
                src={pattern}
                alt=""
                aria-hidden="true"
                className="absolute -top-5 md:-top-12  right-20  md:right-50 z-30"
              />
              <Image
                src={heroimg1}
                alt="Gulf workers at a construction site managed by Shiva Manpower Consultants"
                className="w-[400px] md:w-[527px] h-[320px] relative z-99 md:h-[353px] rounded-[10px] object-cover"
              />
              <Image
                src={heroimg2}
                alt="Skilled workforce deployed to UAE and Saudi Arabia through Shiva Travel Consultants"
                className=" hidden md:block w-[527px] h-[295px] z-99 rounded-[10px] object-cover"
              />
              <Image
                src={pattern}
                alt=""
                aria-hidden="true"
                className="absolute bottom-5 md:bottom-30  left-0  md:left-12 z-30"
              />
            </div>
            <div className="md:absolute bottom-10  z-0 w-full">
              <Contactcard />
            </div>
          </section>
          {/* marqueesection */}
          <div className="flex flex-col gap-4 text-center top-margins px-4">
            <h2 className="text-xl font-black tracking-wide text-(--primary-color-500) uppercase">
              Our Clients go to ..
            </h2>
            <Marqueesection />
          </div>

          {/* services section */}
          <div className="!bg-[#F5F5F5] py-16 top-margins">
            <section className="px-4">
              <div className="flex flex-col md:flex-row flex-wrap gap-6">
                <div className="flex flex-1 flex-col gap-8">
                  <span
                    className="border-1 px-4.5 py-1.5 rounded-4xl w-fit text-(--primary-color-900) !font-bold tracking-wide  bg-[#ffffffa1]  text-sm border-[#0000001b] shadow inset-4 inset-shadow-2xs cursor-pointer
                  hover:border-(--primary-color) hover:scale-95"
                  >
                    Our Services
                  </span>
                  <div className="flex flex-col gap-4 md:max-w-[80%]">
                    <h2 className="text-3xl font-bold leadin-[120%] tracking-wider">
                      Tailored Recruitment Solutions for Every Business Need{" "}
                    </h2>
                    <p className="tracking-wide">
                      We don't believe in one-size-fits-all staffing. Whether
                      you're a small business or a large enterprise, we provide
                      manpower that's reliable, skilled, and ready to perform
                      from day one.
                    </p>
                    <div className="w-full flex-wrap flex  flex-col md:flex-row gap-6">
                      <a href="https://wa.me/919815358832?text=Hi%2C%20I%20want%20more%20information" target="_blank" rel="noopener noreferrer">
                      <Button className="px-5 py-5 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color)">
                        Book a call Now{" "}
                        <span className="!text-(--color-bland-25)">
                          {" "}
                          <Icon icon="mdi:whatsapp" width="24" height="24" />
                        </span>
                      </Button>
                      </a>
                      <Link href="/contactus">
                      <Button className="px-5 py-5  text-(--primary-color) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color) flex gap-1 hover:font-bold">
                        Know more{" "}
                        <Icon
                          icon="si:arrow-right-duotone"
                          className="!h-[30px] !w-[24px]"
                        />

                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 gap-6 flex-wrap">
                  <div className="flex-1">
                    <Card
                      onMouseMove={(e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        const rotateX = -((y - centerY) / 10);
                        const rotateY = (x - centerX) / 10;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform =
                          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                      }}
                      className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                    >
                      <CardHeader className="flex justify-end items-center w-full">
                        <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                          <Icon
                            icon="si:arrow-right-duotone"
                            width="32"
                            height="32"
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm items-center flex flex-col px-4">
                        <Image
                          src={service1}
                          alt="Recruitment and staffing services for Gulf employers"
                          className="rounded-md object-fit drop-shadow-2xl"
                          width={180}
                          height={150}
                        />
                        <div className="flex flex-col items-center gap-4">
                          <h3 className="text-2xl text-center">
                            Recruitment & Staffing
                          </h3>
                          <p className="text-center text-base text-(--color-bland-700)">
                            From temporary staff to long-term employees, we
                            connect businesses with talent that fits their
                            requirements and culture.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <Card
                      onMouseMove={(e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        const rotateX = -((y - centerY) / 10);
                        const rotateY = (x - centerX) / 10;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform =
                          "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                      }}
                      className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                    >
                      <CardHeader className="flex justify-end  items-center w-full ">
                        <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                          <Icon
                            icon="si:arrow-right-duotone"
                            width="32"
                            height="32"
                          />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm items-center flex flex-col px-4">
                        <Image
                          src={service2}
                          alt="Industrial workforce supply for construction and manufacturing"
                          className="rounded-md object-fit drop-shadow-2xl"
                          width={180}
                          height={150}
                        />
                        <div className="flex flex-col items-center gap-4">
                          <h3 className="text-2xl text-center">
                            Industrial Workforce Supply
                          </h3>
                          <p className="text-center text-base text-(--color-bland-700)">
                            Scalable manpower for construction sites,
                            manufacturing plants, and demanding industrial
                            environments across the Gulf.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="flex-2 flex flex-wrap gap-6">
                    <div className="flex-1">
                      <Card
                        onMouseMove={(e) => {
                          const card = e.currentTarget;
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;

                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;

                          const rotateX = -((y - centerY) / 10);
                          const rotateY = (x - centerX) / 10;

                          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform =
                            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                        }}
                        className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                      >
                        <CardHeader className="flex justify-end  items-center w-full ">
                          <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                            <Icon
                              icon="si:arrow-right-duotone"
                              width="32"
                              height="32"
                            />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm items-center flex flex-col px-4">
                          <Image
                            src={service3}
                            alt="HR consulting services for hiring frameworks and compliance"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <h3 className="text-2xl text-center">
                              HR Consulting
                            </h3>
                            <p className="text-center text-base text-(--color-bland-700)">
                              Strategic HR partnership to design hiring
                              frameworks, streamline onboarding, and build
                              compensation strategies.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex-1">
                      <Card
                        onMouseMove={(e) => {
                          const card = e.currentTarget;
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;

                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;

                          const rotateX = -((y - centerY) / 10);
                          const rotateY = (x - centerX) / 10;

                          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform =
                            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                        }}
                        className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                      >
                        <CardHeader className="flex justify-end  items-center w-full ">
                          <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                            <Icon
                              icon="si:arrow-right-duotone"
                              width="32"
                              height="32"
                            />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm items-center flex flex-col px-4">
                          <Image
                            src={service4}
                            alt="Executive search and senior leadership recruitment"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <h3 className="text-2xl text-center">
                              Executive Search
                            </h3>
                            <p className="text-center text-base text-(--color-bland-700)">
                              Discreet, research-led search for C-suite and
                              senior roles with high-calibre shortlists from
                              passive candidates.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="flex-2 flex flex-wrap gap-6">
                    <div className="flex-1">
                      <Card
                        onMouseMove={(e) => {
                          const card = e.currentTarget;
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;

                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;

                          const rotateX = -((y - centerY) / 10);
                          const rotateY = (x - centerX) / 10;

                          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform =
                            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                        }}
                        className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                      >
                        <CardHeader className="flex justify-end  items-center w-full ">
                          <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                            <Icon
                              icon="si:arrow-right-duotone"
                              width="32"
                              height="32"
                            />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm items-center flex flex-col px-4">
                          <Image
                            src={service5}
                            alt="Overseas placement assistance for Gulf country jobs"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <h3 className="text-2xl text-center">
                              Overseas Placement
                            </h3>
                            <p className="text-center text-base text-(--color-bland-700)">
                              End-to-end placement support including visa,
                              medical, and document assistance for UAE, Saudi
                              Arabia, Qatar, Kuwait, and Bahrain.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="flex-1">
                      <Card
                        onMouseMove={(e) => {
                          const card = e.currentTarget;
                          const rect = card.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;

                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;

                          const rotateX = -((y - centerY) / 10);
                          const rotateY = (x - centerX) / 10;

                          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                        }}
                        onMouseLeave={(e) => {
                          const card = e.currentTarget;
                          card.style.transform =
                            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                        }}
                        className="border border-[#00000017] inset-shadow-2xl inset-2 bg-(--color-bland-25) cursor-pointer flex gap-2 h-[420px] sm:h-full transition-transform duration-200"
                      >
                        <CardHeader className="flex justify-end  items-center w-full ">
                          <CardTitle className="border-2 w-fit rounded-4xl !text-(--color-bland-600)">
                            <Icon
                              icon="si:arrow-right-duotone"
                              width="32"
                              height="32"
                            />
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm items-center flex flex-col px-4">
                          <Image
                            src={service6}
                            alt="Skill development and vocational training programmes"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <h3 className="text-[24px] !font-normal text-center">
                              Skill Development & Training
                            </h3>
                            <p className="text-center text-base text-(--color-bland-700)">
                              Structured training in technical trades, soft
                              skills, and Gulf workplace compliance to boost
                              productivity and reduce turnover.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>


          {/* industries we serve */}
        <section className="top-margins px-4">
         <div className="flex flex-col items-center justify-center gap-2 pb-8 md:pb-20">
              <h2 className="text-[42px] font-black leading-[120%]">
                Industries we <span>serve</span>
              </h2>
              <p className="text-center ">
                Tailored manpower solutions for every sector, delivered with
                trust and expertise.
              </p>
            </div>


            <div className="flex flex-col gap-8 md:gap-2">
            {industries.map((industry,index) => {
              return (
                <div key={index} className="p-4 sm:p-8 rounded-[16px] hover:shadow-xl link-trigger">
                  <div className="grid grid-cols-5 md:grid-cols-12 gap-6">
                    <div className="max-w-fit col-span-1 font-semibold text-[#000]">
                      {industry.id.toString().padStart(2, "0")}
                    </div>
                    <div className="w-full h-full col-span-4 md:col-span-5">
                      <Image
                        src={industry.src}
                        alt={`${industry.title} industry manpower services`}
                        className="rounded-[16px] h-auto sm:h-[320px] object-cover"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-5 flex flex-col gap-4 md:w-[450px] md:px-4">
                      <h3 className="font-bold text-2xl text-(--color-bland-800)">
                        {industry.title}
                      </h3>
                      <p className="font-normal tracking-wider leading-[150%]">
                        {industry.description}
                      </p>
                    </div>
                    <div className="flex justify-end col-span-1">
                      <Link  href="/contactus" className="flex justify-end border-2 w-fit rounded-4xl text-(--color-bland-600) h-fit -rotate-45 hover:rotate-0 link">
                        <Icon
                          icon="si:arrow-right-duotone"
                          width="32"
                          height="32"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}


              <Collapsible open={open} onOpenChange={setopen}>
                <CollapsibleContent>
             {industries.map((industry,index) => {
              return (
                <div key={index} className="p-4 sm:p-8 rounded-[16px] hover:shadow-xl link-trigger">
                  <div className="grid grid-cols-5 md:grid-cols-12 gap-6">
                    <div className="max-w-fit col-span-1 font-semibold text-[#000]">
                      {industry.id.toString().padStart(2, "0")}
                    </div>
                    <div className="w-full h-full col-span-4 md:col-span-5">
                      <Image
                        src={industry.src}
                        alt={`${industry.title} industry manpower services`}
                        className="rounded-[16px] h-auto sm:h-[320px] object-cover"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-5 flex flex-col gap-4 md:w-[450px] md:px-4">
                      <h3 className="font-bold text-2xl text-(--color-bland-800)">
                        {industry.title}
                      </h3>
                      <p className="font-normal tracking-wider leading-[150%]">
                        {industry.description}
                      </p>
                    </div>
                    <div className="flex justify-end col-span-1">
                      <div className="flex justify-end border-2 w-fit rounded-4xl text-(--color-bland-600) h-fit -rotate-45 hover:rotate-0 link">
                        <Icon
                          icon="si:arrow-right-duotone"
                          width="32"
                          height="32"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
                </CollapsibleContent>
                <CollapsibleTrigger
                  asChild
                  className="flex items-center justify-center mt-4 w-full mx-auto"
                >
                  <Button
                    onClick={() => setopen(!open)}
                    className="px-6 py-4 text-(--primary-color) rounded-[32px] text-base !font-light leading-[150%] border-1 cursor-pointer hover:scale-95 border-(--primary-color) flex gap-1 hover:font-bold hover:bg-(--primary-color) hover:text-(--color-bland-25) w-fit mx-auto"
                  >
                    {open ? "View less" : "View all"}{" "}
                    <Icon
                      icon="si:arrow-right-duotone"
                      className={`!h-[30px] !w-[24px] transition-transform ${
                        open ? "rotate-270" : "rotate-90"
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
              </Collapsible>
            </div>
        </section>

        {/* scroll statts section */}
        <ScrollStats />

          {/* JustDial Reviews section */}
          <section className="top-margins px-4">
            <div className="flex flex-col items-center gap-3 text-center mb-10">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--primary-color)" }}>
                Customer Reviews
              </span>
              <h2 className="text-[42px] font-black leading-[120%]">
                What Our <span>Clients Say</span>
              </h2>
              <p className="text-(--color-bland-500) max-w-[500px]">
                Real reviews from candidates and employers who trust Shiva Manpower Consultants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Gurpreet Singh",
                  location: "Nakodar, Punjab",
                  rating: 5,
                  text: "Very genuine and trustworthy agency. They helped me get a construction job in Dubai within 45 days. No fees charged at all. Highly recommended for anyone looking for Gulf jobs from Punjab.",
                  date: "2024",
                  placed: "Dubai, UAE",
                },
                {
                  name: "Rajvinder Kaur",
                  location: "Phillaur, Punjab",
                  rating: 5,
                  text: "As a female nurse, I was nervous about going abroad. Shiva Travel guided me through every step — Dataflow, visa, medical. I'm now working in Qatar. Best consultancy in Nakodar.",
                  date: "2023",
                  placed: "Doha, Qatar",
                },
                {
                  name: "Amrinder Pal",
                  location: "Kapurthala, Punjab",
                  rating: 5,
                  text: "I visited many agencies in Jalandhar but none were genuine. Shiva Travel is government licensed and they proved it. Got my Saudi Arabia visa in 38 days. Zero fees, 100% genuine.",
                  date: "2023",
                  placed: "Riyadh, Saudi Arabia",
                },
                {
                  name: "Hardeep Maan",
                  location: "Nakodar, Punjab",
                  rating: 4,
                  text: "Good experience with Shiva Manpower. They prepared me for the interview and helped with all documentation. Now working in a 5-star hotel in Abu Dhabi. Thank you team!",
                  date: "2024",
                  placed: "Abu Dhabi, UAE",
                },
                {
                  name: "Sukhwinder Dhaliwal",
                  location: "Shahkot, Punjab",
                  rating: 5,
                  text: "Best manpower consultancy in Nakodar. Other agencies said no demand for drivers but Shiva Travel had direct demand from Kuwait. Papers done in 38 days. My family is very happy now.",
                  date: "2022",
                  placed: "Kuwait City, Kuwait",
                },
                {
                  name: "Manpreet Sandhu",
                  location: "Shahpur, Punjab",
                  rating: 5,
                  text: "Professional to the core. I had my scaffolding certificate but didn't know how to find Gulf employers. They matched my profile within 2 weeks. Placed in Bahrain in 60 days. Highly recommend.",
                  date: "2023",
                  placed: "Manama, Bahrain",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border border-[#00000010] bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon
                        key={s}
                        icon="mingcute:star-fill"
                        width="16"
                        height="16"
                        className={s < review.rating ? "text-[#F59E0B]" : "text-[#E5E7EB]"}
                      />
                    ))}
                    <span className="ml-2 text-xs text-(--color-bland-400)">via JustDial</span>
                  </div>

                  <p className="text-sm text-(--color-bland-600) leading-[170%] italic">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#00000008]">
                    <div>
                      <p className="text-sm font-semibold text-(--color-bland-800)">{review.name}</p>
                      <p className="text-xs text-(--color-bland-400)">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium" style={{ color: "var(--primary-color)" }}>
                        Placed in {review.placed}
                      </p>
                      <p className="text-xs text-(--color-bland-400)">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="https://www.justdial.com/Jalandhar/Shiva-Travel-Manpower-Consultant-Back-Side-Income-Tax-Office-Golden-Anenue-Nakodar-Nakodar/0181PX181-X181-160819152141-Y9Z7_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#2CAF4F] text-[#2CAF4F] font-semibold text-sm hover:bg-[#2CAF4F] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <Icon icon="mingcute:star-fill" width="16" height="16" />
                See All Reviews on JustDial
                <Icon icon="si:arrow-right-duotone" width="18" height="18" />
              </a>
              <a
                href="https://www.justdial.com/Jalandhar/Shiva-Travel-Manpower-Consultant-Back-Side-Income-Tax-Office-Golden-Anenue-Nakodar-Nakodar/0181PX181-X181-160819152141-Y9Z7_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#00000015] text-(--color-bland-600) text-sm hover:border-(--primary-color) hover:text-(--primary-color) transition-all duration-300 cursor-pointer"
              >
                <Icon icon="mingcute:edit-fill" width="16" height="16" />
                Write a Review
              </a>
            </div>
          </section>

          {/* FAQ section */}
          <section className=" px-4 top-margins flex flex-col md:flex-row gap-8 items-start ">
            <div className=" flex-1 flex items-start  w-full">
              <h2 className="text-[42px] font-black leading-[120%]">
                Got <span>Questions?</span>
                <br />
                We're Here to Help.
              </h2>
            </div>
            <div className="flex-1 mt-4  w-full md:max-w-[60%]">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    What is your process for vetting candidates?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    Which countries in the Gulf do you specialize in?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <p className="text-base font-medium leading-[150%]">
                      We specialize in placements across the UAE, Saudi Arabia,
                      Qatar, Kuwait, and Bahrain. Our 25+ years of experience
                      span construction, hospitality, healthcare, oil & gas,
                      and logistics sectors in these countries.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    Are there any fees for candidates to apply for a job?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <p className="text-base font-medium leading-[150%]">
                      No. We charge zero fees to candidates. Our services are
                      funded entirely by the hiring employers. This is our
                      commitment to ethical, transparent recruitment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    What support do you offer after I get a job offer?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                  <p className="text-base font-medium leading-[150%]">
                      We assist with visa processing, medical coordination,
                      E-Migrate compliance, pre-departure orientation, and
                      post-arrival follow-up to ensure a smooth transition
                      to your new role.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    How long does the placement process typically take?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <p className="text-base font-medium leading-[150%]">
                      Depending on the role and destination country, our
                      placement process typically takes 30 to 60 days from
                      registration to deployment. Urgent positions can be
                      fast-tracked.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    Is Shiva Manpower a government-licensed agency?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <p className="text-base font-medium leading-[150%]">
                      Yes. We hold RA License B-1794/PUN/PER/100/5/10094/2022
                      issued by the Ministry of External Affairs, Government of
                      India, valid through June 2027. We are also members of
                      ALMRA Punjab.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          {/* CTA section  */}
          <section className="px-4 top-margins ">
            <CTA />
          </section>
          {/* Footer */}
          <section className="px-4 top-margins ">
            <Footer2 />
          </section>
        </div>
      </div>
    </>
  );
}
