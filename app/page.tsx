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
export default function Home() {
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
              <h2 className="text-(--color-bland-700) leading-[150%] text-left md:text-left">
                As a government-recognized consultancy, For over 25 years, we've
                connected <br className="hidden md:block" /> leading companies
                in the UAE, Saudi Arabia, Qatar, and across the Gulf with a{" "}
                <br className="hidden md:block" /> world-class, vetted
                workforce. We build careers and bridge opportunities.
              </h2>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="flex items-start gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <h4> Registered Overseas Recruitment (RA) Compliance </h4>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <h4>E-Migrate Process Support </h4>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <h4>Trade Testing & Skill Screening </h4>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <h4>Visa, Medical & Document Assistance </h4>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 relative w-full z-0">
              <Image
                src={pattern}
                alt="img"
                className="absolute -top-5 md:-top-12  right-20  md:right-50 z-30"
              />
              <Image
                src={heroimg1}
                alt="img1"
                className="w-[400px] md:w-[527px] h-[320px] relative z-99 md:h-[353px] rounded-[10px] object-cover"
              />
              <Image
                src={heroimg2}
                alt="img2"
                className=" hidden md:block w-[527px] h-[295px] z-99 rounded-[10px] object-cover"
              />
              <Image
                src={pattern}
                alt="img"
                className="absolute bottom-5 md:bottom-30  left-0  md:left-12 z-30"
              />
            </div>
            <div className="md:absolute bottom-10  z-0 w-full">
              <Contactcard />
            </div>
          </section>
          {/* marqueesection */}
          <div className="flex flex-col gap-4 text-center top-margins px-4">
            <h1 className="text-xl font-black tracking-wide text-(--primary-color-500) uppercase">
              Our Clients go to ..
            </h1>
            <Marqueesection />
          </div>

          {/* services section */}
          <div className="!bg-[#F5F5F5] py-16 top-margins">
            <section className="px-4">
              <div className="flex flex-col md:flex-row flex-wrap gap-6">
                <div className="flex flex-1 flex-col gap-8">
                  <h6
                    className="border-1 px-4.5 py-1.5 rounded-4xl w-fit text-(--primary-color-900) !font-bold tracking-wide  bg-[#ffffffa1]  text-sm border-[#0000001b] shadow inset-4 inset-shadow-2xs cursor-pointer  
                  hover:border-(--primary-color) hover:scale-95"
                  >
                    Our Services
                  </h6>
                  <div className="flex flex-col gap-4 md:max-w-[80%]">
                    <h2 className="text-3xl font-bold leadin-[120%] tracking-wider">
                      Tailored Recruitment Solutions for Every Business Need{" "}
                    </h2>
                    <h4 className="tracking-wide">
                      We don't believe in one-size-fits-all staffing. Whether
                      you're a small business or a large enterprise, we provide
                      manpower that's reliable, skilled, and ready to perform
                      from day one.
                    </h4>
                    <div className="w-full flex-wrap flex  flex-col md:flex-row gap-6">
                      <Button className="px-5 py-5 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color)">
                        Book a call Now{" "}
                        <span className="!text-(--color-bland-25)">
                          {" "}
                          <Icon icon="gg:phone" width="24" height="24" />
                        </span>
                      </Button>
                      <Button className="px-5 py-5  text-(--primary-color) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color) flex gap-1 hover:font-bold">
                        Know more{" "}
                        <Icon
                          icon="si:arrow-right-duotone"
                          className="!h-[30px] !w-[24px]"
                        />
                     
                      </Button>
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
                          alt="img"
                          className="rounded-md object-fit drop-shadow-2xl"
                          width={180}
                          height={150}
                        />
                        <div className="flex flex-col items-center gap-4">
                          <p className="text-2xl text-center">
                            Recruitment & Staffing
                          </p>
                          <h2 className="text-center text-base text-(--color-bland-700)">
                            From temporary staff to long-term employees, we
                            connect businesses with talent that fits their
                            requirements and culture.
                          </h2>
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
                          alt="img"
                          className="rounded-md object-fit drop-shadow-2xl"
                          width={180}
                          height={150}
                        />
                        <div className="flex flex-col items-center gap-4">
                          <p className="text-2xl text-center">
                            Industrial Workforce Supply
                          </p>
                          <h2 className="text-center text-base text-(--color-bland-700)">
                            From temporary staff to long-term employees, we
                            connect businesses with talent that fits their
                            requirements and culture.
                          </h2>
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
                            alt="img"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-2xl text-center">
                              HR Consulting
                            </p>
                            <h2 className="text-center text-base text-(--color-bland-700)">
                              From temporary staff to long-term employees, we
                              connect businesses with talent that fits their
                              requirements and culture.
                            </h2>
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
                            alt="img"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-2xl text-center">
                              Executive Search
                            </p>
                            <h2 className="text-center text-base text-(--color-bland-700)">
                              From temporary staff to long-term employees, we
                              connect businesses with talent that fits their
                              requirements and culture.
                            </h2>
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
                            alt="img"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-2xl text-center">
                              Overseas Placement
                            </p>
                            <h2 className="text-center text-base text-(--color-bland-700)">
                              From temporary staff to long-term employees, we
                              connect businesses with talent that fits their
                              requirements and culture.
                            </h2>
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
                            alt="img"
                            className="rounded-md object-fit drop-shadow-2xl"
                            width={180}
                            height={150}
                          />
                          <div className="flex flex-col items-center gap-4">
                            <p className="text-[24px] !font-normal text-center">
                              Skill Development & Training
                            </p>
                            <h2 className="text-center text-base text-(--color-bland-700)">
                              From temporary staff to long-term employees, we
                              connect businesses with talent that fits their
                              requirements and culture.
                            </h2>
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
                        alt="img"
                        className="rounded-[16px] h-auto sm:h-[320px] object-cover"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-5 flex flex-col gap-4 md:w-[450px] md:px-4">
                      <p className="font-bold text-2xl text-(--color-bland-800)">
                        {industry.title}
                      </p>
                      <h2 className="font-normal tracking-wider leading-[150%]">
                        {industry.description}
                      </h2>
                    </div>
                    <div className="flex justify-end col-span-1">
                      <Link  href={industry.link} className="flex justify-end border-2 w-fit rounded-4xl text-(--color-bland-600) h-fit -rotate-45 hover:rotate-0 link">
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
                        alt="img"
                        className="rounded-[16px] h-auto sm:h-[320px] object-cover"
                      />
                    </div>
                    <div className="col-span-4 md:col-span-5 flex flex-col gap-4 md:w-[450px] md:px-4">
                      <p className="font-bold text-2xl text-(--color-bland-800)">
                        {industry.title}
                      </p>
                      <h2 className="font-normal tracking-wider leading-[150%]">
                        {industry.description}
                      </h2>
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

          {/* Testimonials section */}
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
                    <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
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
                 <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
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
                 <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
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
                  <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    Which countries in the Gulf do you specialize in?
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="hover:no-underline font-medium text-lg leading-[120%] text-(--color-bland-800) cursor-pointer py-6">
                    {" "}
                    <p>
                    Are there any fees for candidates to apply for a job?{" "}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                 <h2 className="text-base font-medium leading-[150%]">
                      Our rigorous process includes multi-stage interviews,
                      skill assessments, background checks, and verification of
                      all credentials to ensure you only meet with qualified,
                      reliable professionals.
                    </h2 >
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
