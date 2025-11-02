import Image from "next/image";
import "./global.css";
import Header from "../src/components/own/Header";
import { Icon } from "@iconify/react";
import heroimg1 from "../public/hero img-1.png";
import heroimg2 from "../public/hero img.png";
import pattern from "../public/pattern.svg";
import Marqueesection from "@/components/own/Marquee";
import { Button } from "@/components/ui/button";
import React from "react";

import Card3dDemo from "@/components/own/Cards";
export default function Home() {
  return (
    <>
      <div id="mainWrapper overflow-hidden">
        <div className="bg-(--color-bland-25) px-4">
          <Header />
        </div>
        <div className="content-wrapper">
          <section className="top-margins flex flex-col gap-8 md:flex-row items-start justify-between px-4 ">
            <div className="flex flex-col w-full md:max-w-[670px] gap-4 ">
              <h1 className="font-medium text-left leading-[120%] md:text-left text-4xl lg:text-6xl">
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
                  <p> Registered Overseas Recruitment (RA) Compliance </p>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <p>E-Migrate Process Support </p>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <p>Trade Testing & Skill Screening </p>
                </li>
                <li className="flex items-center gap-4 text-(--color-bland-500) leading-[150%] text-left ">
                  <Icon
                    icon="mingcute:check-2-fill"
                    className="text-(--color-bland-700)"
                    width="18"
                    height="18"
                  />
                  <p>Visa, Medical & Document Assistance </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 relative w-full">
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
                  <h6 className="border-1 px-4.5 py-1.5 rounded-4xl w-fit text-(--primary-color-900) !font-bold tracking-wide  bg-[#ffffffa1]  text-sm border-[#0000001b] shadow inset-4 inset-shadow-2xs cursor-pointer  
                  hover:border-(--primary-color) hover:scale-95">
                    Our Services
                  </h6>
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
                    <Card3dDemo />
                  </div>
                  <div className="flex-1">
                    <Card3dDemo />
                  </div>
                </div>
              <div className="flex flex-wrap gap-6">
                <div className="flex-2 flex flex-wrap gap-6">
                <div className="flex-1">
                  <Card3dDemo />
                </div>
                <div className="flex-1">
                  <Card3dDemo />
                </div>
                </div>
                <div className="flex-2 flex flex-wrap gap-6">
                <div className="flex-1">
                  <Card3dDemo />
                </div>
                <div className="flex-1">
                  <Card3dDemo />
                </div>
                </div>
              </div>
              </div>
            </section>
          </div>

          {/* industries we serve */}
          
        </div>
      </div>
    </>
  );
}
