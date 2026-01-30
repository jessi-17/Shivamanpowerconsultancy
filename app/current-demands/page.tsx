import React from 'react'
import Header from "../../src/components/own/Header";
import Image from 'next/image';
import heroimage from "../../public/currentdemands-herobg.png"
import demands from "../_lib/data/currentdemands";
const page = () => {
  return (
    <>
    <div id="mainWrapper">
      <Header />
      <div className="content-wrapper">
    <section className='flex flex-col md:flex-row gap-8 mt-12'>
      <div className='flex-2 flex flex-col gap-4 md:max-w-[800px] mx-auto'>
      <h1 className='text-4xl md:text-5xl font-medium-hel leading-[120%]'>Professional <span>Manpower & Recruitment</span> Services</h1>
      <p className='text-sm sm:text-base md:text-lg'>At Shiva Man Power Consultancy, we specialize in providing skilled and reliable manpower solutions for industries across India and abroad. we connect talent with the right opportunities through a trusted and transparent process.</p>
      </div>
      <Image src={heroimage} alt="Hero Image" className="w-full h-auto md:h-[420px] object-cover shadow-2xl rounded-[24px] flex-1" />
    </section>
    <section className='flex flex-col gap-16 my-12'>
      <h2 className='text-2xl md:text-5xl font-bold text-neutral-800'>Our Agency provides the best job offer <br /> for every person <span>
        Current Demands</span>
      </h2>
      <div className='flex flex-col gap-16'>
            {demands.map((demand,index)=>(
        <div className='flex justify-between gap-16 items-start text-neutral-700' key={index}>
          <h2 className='text-xl font-bold'>{index+1}</h2>
          <h1 className='text-3xl uppercase tracking-tight font-bold text-neutral-700 '>{demand.title}</h1>
          <p className='w-[400px]'>{demand.description}</p>
          <a href={demand.link}>link</a>
        </div>
            ))}
      </div>
    </section>
      </div>
      </div>
    
    </>
  )
}


export default page

