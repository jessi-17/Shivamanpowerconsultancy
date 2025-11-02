"use client";

import Image from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

import brand1 from "../../../public/image 22.png";
import brand2 from "../../../public/image 18.png";
import brand3 from "../../../public/image 19.png";
import brand4 from "../../../public/image 20.png";
import brand5 from "../../../public/image 21.png";
import brand6 from "../../../public/image 22.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
const brandImages = [...brands, ...brands];

const MarqueeSection = () => {
  return (
    <section>
    <div className="flex w-full items-center justify-center py-4 !overflow-hidden">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeContent className="flex items-center justify-center">
          {brandImages.map((src, index) => (
            <MarqueeItem key={index} className="py-2 mr-4">
              <Image
                src={src}
                alt={`Brand logo ${index + 1}`}
                className="h-auto w-28 object-contain mr-5"
              />
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </div>
    </section>
  );
};

export default MarqueeSection;
