import React from "react";
import Header from "../../src/components/own/Header";
import "../global.css";
import Image from "next/image";
import aboutUsImage from "../../public/about us heroimg.png";
import stars from "../../public/about-stars.png";
const page = () => {
  return (
    <>
      <div id="mainWrapper">
        <Header />
        <div className="content-wrapper">
          <section className="flex flex-col md:flex-row justify-between mt-20 gap-8">
            <h1 className="text-bland-800 font-semibold text-4xl md:text-[67px] leading-[120%] text-left">
        The Journey  <br className="hidden md:block"/> That Built <span className="text-bland-700">Our <br className="hidden md:block" /> Success</span>
            </h1>
            <Image src={aboutUsImage} alt="About Us" className=" h-auto  w-auto object-cover"/>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
