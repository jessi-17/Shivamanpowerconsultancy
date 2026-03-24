"use client";

import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

function BiText({ k }: { k: keyof typeof t }) {
  const { lang } = useLanguage();
  const entry = t[k];
  return <>{lang === "pa" ? entry.pa : entry.en}</>;
}

const CTA = () => {
  return (
    <>
      <div className="CTA_bg w-full background-cover bg-no-repeat py-3 rounded-2xl h-full">
        <div className="flex items-center justify-center flex-col max-w-[820px] mx-auto text-center gap-4 py-20 px-4 text-(--color-bland-25)">
          <div className="bg-white rounded-4xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h6
              className="border-1 px-4.5 py-1.5 rounded-4xl w-fit text-(--primary-color-900) !font-bold tracking-wide  bg-transparent  text-sm border-[#0000000f] shadow-2xl inset-4 inset-shadow-xs  cursor-pointer
                  hover:border-(--primary-color) hover:shadow-lg hover:inset-shadow-sm transition-all duration-300"
            >
              <BiText k="ctaBadge" />
            </h6>
          </div>
          <h2 className="font-bold text-[42px] leading-[140%] !font-medium-hel uppercase tracking-wider">
            <BiText k="ctaTitle" />
          </h2>
          <h4 className="text-[18px] text-(--color-bland-300) !font-hel-light leading-[150%]">
            <BiText k="ctaSub" />
          </h4>
          <div className="w-full flex-wrap flex flex-col md:flex-row gap-6 items-center justify-center mt-6">
            <a href="https://wa.me/919815358832?text=Hi%2C%20I%20want%20more%20information" target="_blank" rel="noopener noreferrer">
              <Button className="px-5 py-5 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color)">
                <BiText k="bookCallNow" />{" "}
                <span className="!text-(--color-bland-25)">
                  {" "}
                  <Icon icon="mdi:whatsapp" width="24" height="24" />
                </span>
              </Button>
            </a>

            <Link href="/contactus">
              <Button className="px-5 py-5 text-(--color-bland-400) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color) flex gap-1 hover:font-bold">
                <BiText k="knowMore" />{" "}
                <Icon
                  icon="si:arrow-right-duotone"
                  className="!h-[30px] !w-[24px]"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
