import React from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

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
                  Book Your Consultation Now
                  </h6>
            </div>
          <h2 className="font-bold text-[42px] leading-[140%] !font-medium-hel uppercase tracking-wider ">
            TAKE THE FIRST STEP TOWARDS A BRIGHTER FUTURE
          </h2>
          <h4 className="text-[18px] text-(--color-bland-300) !font-hel-light leading-[150%]  ">
            Discover new opportunities and build a successful career with Shiva
            Travel Manpower & Consultancy. Schedule a call today and let our
            experts guide you toward a better, more rewarding future.
          </h4>
          <div className="w-full flex-wrap flex  flex-col md:flex-row gap-6 items-center justify-center mt-6">
            <Button className="px-5 py-5 bg-(--primary-color) text-(--color-bland-25) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color)">
              Book a call Now{" "}
              <span className="!text-(--color-bland-25)">
                {" "}
                <Icon icon="gg:phone" width="24" height="24" />
              </span>
            </Button>
            <Button className="px-5 py-5  text-(--color-bland-400) rounded-[32px] text-base !font-light leading-[150%] cursor-pointer hover:scale-95 border-(--primary-color) flex gap-1 hover:font-bold">
              Know more{" "}
              <Icon
                icon="si:arrow-right-duotone"
                className="!h-[30px] !w-[24px]"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
