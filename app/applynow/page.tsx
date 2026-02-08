// import svgPaths from "@/imports/svg-3gnmwgkkik";
// import imgLogo from "figma:asset/b5bc4090ab22c724180131ac6da0e88f31f05752.png";
// import imgSmilingCoupleWithTabletHome2 from "figma:asset/926d5c14a1a04b696d9a046892399a868a4a01d6.png";
// import img1197181 from "figma:asset/089b3a9cd4e72858bab0f19057c9b35e19df1648.png";
// import img3922437172681 from "figma:asset/1c5620b9ff743b83b38f7e42fb99c1fd693fb1f0.png";
// import imgBackground from "figma:asset/2e8afeaba9ac4f547ddbd7122adc986d1ba11251.png";
// import imgImage22RemovebgPreview from "figma:asset/b44e6595b29de368fb8dc431452dec8020b3fb9c.png";
// import imgRectangle6 from "figma:asset/58f2234c6d1f70c5d26c425f6518a1651ab6c260.png";
// import imgFrame2147225242 from "figma:asset/390187ff1cc1de993beeed1ce3e1c8471e990cb3.png";
// import imgBnpsInternationalGlobalGuardiansForOverseasEducation14 from "figma:asset/5e5fa9c9a83ce1c387a1ac521164721ca218cff4.png";
// // import { imgSmilingCoupleWithTabletHome1, imgGroup } from "@/imports/svg-lomwf";
// import { useState } from "react";

// // Navbar Component - Responsive
// function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white relative shrink-0 w-full shadow-sm" data-name="navbar">
//       <div className="flex flex-row items-center size-full">
//         <div className="content-stretch flex items-center justify-between px-4 md:px-8 lg:px-[100px] py-4 relative w-full">
//           {/* Logo */}
//           <div className="h-[48px] md:h-[58px] lg:h-[68px] relative shrink-0 w-[54px] md:w-[65px] lg:w-[77px]" data-name="logo">
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//               <img alt="Logo" className="absolute h-[170.38%] left-[-24.85%] max-w-none top-[-32.95%] w-[149.71%]" src={imgLogo} />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             <nav className="flex font-['Plus_Jakarta_Sans',sans-serif] font-normal items-center gap-6 xl:gap-8">
//               <a href="#" className="text-[#484848] text-[14px] xl:text-[16px] hover:text-[#d71818] transition-colors">Home</a>
//               <a href="#" className="text-[#d71818] text-[14px] xl:text-[16px] underline">About us</a>
//               <a href="#" className="text-[#484848] text-[14px] xl:text-[16px] hover:text-[#d71818] transition-colors">Services</a>
//               <a href="#" className="text-[#484848] text-[14px] xl:text-[16px] hover:text-[#d71818] transition-colors">Current Demands</a>
//             </nav>
//             <div className="flex gap-6 items-center">
//               <button className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#484848] text-[14px] xl:text-[16px] hover:text-[#d71818] transition-colors">
//                 Apply Now
//               </button>
//               <button className="bg-[#c1121f] px-4 xl:px-[16px] py-2 xl:py-[8px] rounded-[50px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] xl:text-[18px] text-white hover:bg-[#a00f1a] transition-colors">
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden p-2 text-[#484848]"
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
//           <nav className="flex flex-col p-4 gap-4">
//             <a href="#" className="text-[#484848] text-[16px] py-2 hover:text-[#d71818] transition-colors">Home</a>
//             <a href="#" className="text-[#d71818] text-[16px] py-2 underline">About us</a>
//             <a href="#" className="text-[#484848] text-[16px] py-2 hover:text-[#d71818] transition-colors">Services</a>
//             <a href="#" className="text-[#484848] text-[16px] py-2 hover:text-[#d71818] transition-colors">Current Demands</a>
//             <button className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#484848] text-[16px] py-2 text-left hover:text-[#d71818] transition-colors">
//               Apply Now
//             </button>
//             <button className="bg-[#c1121f] px-4 py-2 rounded-[50px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-white hover:bg-[#a00f1a] transition-colors">
//               Contact Us
//             </button>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// // Hero Section - Responsive
// function HeroSection() {
//   return (
//     <div className="content-stretch flex flex-col items-center px-4 md:px-8 lg:px-0 relative shrink-0 w-full max-w-[1240px] mx-auto">
//       <div className="w-full relative mb-8 lg:mb-0">
//         {/* Title */}
//         <div className="relative z-10 mb-6 lg:mb-0">
//           <h1 className="font-['Helvetica_Neue',sans-serif] font-medium text-[32px] sm:text-[42px] md:text-[52px] lg:text-[67px] leading-[1.2] text-black">
//             <span>Our Story The Journey That Built </span>
//             <span className="text-[#c1121f]">Our Success</span>
//           </h1>
//         </div>

//         {/* Image Container */}
//         <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-[566px] mt-4 lg:mt-12">
//           <div className="absolute right-0 top-0 w-full lg:w-[849px] h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat rounded-[24px] lg:rounded-[39px]" style={{ maskImage: `url('${imgSmilingCoupleWithTabletHome1}')` }}>
//             <img alt="Couple with tablet" className="absolute inset-0 w-full h-full object-cover rounded-[24px] lg:rounded-[39px]" src={imgSmilingCoupleWithTabletHome2} />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Content */}
//       <div className="content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 w-full mt-8 lg:mt-[-171px] relative z-10">
//         {/* Left Side - Story */}
//         <div className="content-stretch flex flex-col gap-4 items-start">
//           <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[14px] text-[#484848] leading-[1.5] max-w-[409px]">
//             Shivamanpower Consultancy began with a mission to connect exceptional talent with world-class opportunities. From humble beginnings, we've grown into a trusted recruitment partner for global businesses, bridging skill gaps and transforming careers across industries.
//           </p>
//           <button className="bg-[#c1121f] px-4 py-2 rounded-[50px] font-['Helvetica_Neue',sans-serif] font-bold text-[14px] md:text-[15px] text-white uppercase hover:bg-[#a00f1a] transition-colors">
//             let's start your journey
//           </button>
//         </div>

//         {/* Right Side - Rating */}
//         <div className="content-stretch flex flex-col gap-3 items-start lg:items-end w-full lg:w-auto">
//           <div className="flex gap-2 items-center">
//             <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] md:text-[42px] text-black leading-[1.5]">4.9/5</p>
//             <div className="flex gap-1 items-center">
//               <svg className="w-4 h-4" fill="#FFB612" viewBox="0 0 16 15">
//                 <path d={svgPaths.p2adb7280} />
//               </svg>
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14px] md:text-[16px] text-black">(10,000+ Reviews)</p>
//             </div>
//           </div>
//           <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[#484848] leading-[1.5] max-w-[294px]">
//             Trusted by top enterprises and professionals worldwide.
//           </p>
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((_, idx) => (
//               <div key={idx} className="w-7 h-7 md:w-9 md:h-9">
//                 <svg className="block size-full" fill="none" viewBox="0 0 36 36">
//                   <rect fill="#C1121F" height="36" width="36" />
//                   <path d={svgPaths.p19a10370} fill="#FCF3F4" />
//                 </svg>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Who We Are Section - Responsive
// function WhoWeAreSection() {
//   return (
//     <div className="content-stretch flex flex-col gap-4 md:gap-[16px] items-center px-4 md:px-8 relative shrink-0 w-full max-w-[1206px] mx-auto">
//       <div className="content-stretch flex gap-1 items-start justify-center px-5 py-2 rounded-[16px] border border-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
//         <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#404040] tracking-[-0.64px]">
//           Who we are
//         </p>
//       </div>
//       <p className="font-['Helvetica_Neue',sans-serif] text-[18px] md:text-[20px] lg:text-[24px] text-[#404040] text-center leading-[1.9] px-4 max-w-[976px]">
//         From humble beginnings to becoming one of the most trusted names in overseas recruitment and trade testing, our journey has been built on trust, transparency, and talent empowerment. Our mission is simple — to bridge the gap between talent and opportunity by providing end-to-end manpower solution
//       </p>
//     </div>
//   );
// }

// // Form Section - Responsive
// function FormSection() {
//   return (
//     <div className="bg-white content-stretch flex items-center justify-center p-4 md:p-6 lg:p-[32px] rounded-[24px] shadow-[0px_0px_14px_0px_rgba(0,0,0,0.08)] shrink-0 w-full max-w-[1134px] mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 w-full">
//         {/* Name */}
//         <div className="flex flex-col gap-2">
//           <label className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[#484848]">Name</label>
//           <input
//             type="text"
//             placeholder="enter your name"
//             className="bg-[#faf9f6] h-[36px] px-2 py-1 rounded-[8px] font-['Plus_Jakarta_Sans',sans-serif] font-light text-[12px] text-[#878787] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.2)]"
//           />
//         </div>

//         {/* Phone */}
//         <div className="flex flex-col gap-2">
//           <label className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[#484848]">Phone Number</label>
//           <input
//             type="tel"
//             placeholder="Enter your phone no."
//             className="bg-[#faf9f6] h-[36px] px-2 py-1 rounded-[8px] font-['Plus_Jakarta_Sans',sans-serif] font-light text-[12px] text-[#878787] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.2)]"
//           />
//         </div>

//         {/* City */}
//         <div className="flex flex-col gap-2">
//           <label className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[#484848]">City</label>
//           <input
//             type="text"
//             placeholder="enter your City"
//             className="bg-[#faf9f6] h-[36px] px-2 py-1 rounded-[8px] font-['Plus_Jakarta_Sans',sans-serif] font-light text-[12px] text-[#878787] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.2)]"
//           />
//         </div>

//         {/* Interest */}
//         <div className="flex flex-col gap-2">
//           <label className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[#484848]">You're Interested In</label>
//           <select className="bg-[#faf9f6] h-[36px] px-2 py-1 rounded-[8px] font-['Plus_Jakarta_Sans',sans-serif] font-light text-[12px] text-[#878787] shadow-[inset_0px_0px_2px_0px_rgba(0,0,0,0.2)]">
//             <option>Construction</option>
//             <option>Healthcare</option>
//             <option>IT</option>
//           </select>
//         </div>

//         {/* Button */}
//         <div className="flex items-end sm:col-span-2 lg:col-span-1">
//           <button className="bg-[#c1121f] w-full px-4 py-2 rounded-[50px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] md:text-[18px] text-white hover:bg-[#a00f1a] transition-colors">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Why Choose Us Section - Responsive
// function WhyChooseUsSection() {
//   const features = [
//     {
//       icon: (
//         <svg className="block size-[42px]" fill="none" viewBox="0 0 42 42">
//           <path d={svgPaths.p2b5c3080} fill="#404040" />
//         </svg>
//       ),
//       title: "Expert Guidance",
//       description: "From document verification to visa assistance, our experts guide you at every step of your overseas journey.",
//       bgColor: "bg-[rgba(249,231,233,0.77)]"
//     },
//     {
//       icon: (
//         <svg className="block size-[42px]" fill="none" viewBox="0 0 42 42">
//           <path d={svgPaths.p2f74e700} fill="#404040" />
//           <path d={svgPaths.p1ac1a980} fill="#404040" />
//         </svg>
//       ),
//       title: "Certified Trade Testing",
//       description: "Through Shiva Trade Test Center, candidates undergo globally recognized trade assessments to ensure skill accuracy and international readiness.",
//       bgColor: "bg-[rgba(255,255,255,0.68)]"
//     },
//     {
//       icon: (
//         <svg className="block size-[42px]" fill="none" viewBox="0 0 42 42">
//           <path d={svgPaths.p3726f550} fill="#404040" />
//         </svg>
//       ),
//       title: "Global Network",
//       description: "We collaborate with reputed employers across the Middle East, Europe, and Asia — connecting you to the right job, at the right place.",
//       bgColor: "bg-[rgba(255,255,255,0.68)]"
//     },
//     {
//       icon: (
//         <svg className="block size-[42px]" fill="none" viewBox="0 0 42 42">
//           <path d={svgPaths.p2a814600} fill="#404040" />
//         </svg>
//       ),
//       title: "Complete Travel Support",
//       description: "From flight bookings to pre-departure orientations, we ensure a smooth and stress-free relocation process.",
//       bgColor: "bg-[rgba(255,255,255,0.68)]"
//     },
//     {
//       icon: (
//         <svg className="block size-[42px]" fill="none" viewBox="0 0 42 42">
//           <path d={svgPaths.p34cd38f0} fill="#404040" />
//         </svg>
//       ),
//       title: "Transparent Process",
//       description: "No hidden charges, no false promises — only honest consultancy and clear communication.",
//       bgColor: "bg-[rgba(255,255,255,0.68)]"
//     }
//   ];

//   return (
//     <div className="content-stretch flex flex-col gap-6 md:gap-[39px] items-start px-4 md:px-8 relative shrink-0 w-full max-w-[1208px] mx-auto">
//       <h2 className="font-['Helvetica_Neue',sans-serif] font-bold text-[32px] md:text-[42px] text-black leading-[1.2]">
//         <span>Why </span>
//         <span className="text-[#c1121f]">Choose Us?</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className={`${feature.bgColor} content-stretch flex flex-col gap-[18px] p-6 md:p-[32px] rounded-[16px] shadow-[0px_0px_11px_0px_rgba(0,0,0,0.08),inset_0px_0px_4px_0px_rgba(0,0,0,0.25)]`}
//           >
//             <div className="flex flex-col gap-2 items-start">
//               {feature.icon}
//               <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[18px] md:text-[20px] text-[#1a1a1a] leading-[1.2]">
//                 {feature.title}
//               </h3>
//             </div>
//             <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[12px] text-[#575757] leading-[1.9]">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Impact Section - Responsive
// function ImpactSection() {
//   return (
//     <div className="content-stretch flex flex-col lg:flex-row items-start justify-between gap-8 px-4 md:px-8 relative shrink-0 w-full max-w-[1238px] mx-auto">
//       {/* Left Side */}
//       <div className="content-stretch flex flex-col gap-6 md:gap-[35px] w-full lg:max-w-[702px]">
//         <div className="flex gap-1 items-start justify-center px-5 py-2 rounded-[16px] border border-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] w-fit">
//           <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] md:text-[16px] text-[#404040] tracking-[-0.64px]">
//             Our Impact
//           </p>
//         </div>

//         <h2 className="font-['Libre_Franklin',sans-serif] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-black leading-[1.32]">
//           <span>Because the Future Belongs to </span>
//           <span className="text-[#c1121f]">Skilled Hands</span>
//         </h2>

//         <div className="flex flex-col gap-6 md:gap-[32px]">
//           <div className="flex flex-col gap-4 md:gap-[24px]">
//             <p className="font-['Libre_Franklin',sans-serif] font-medium text-[14px] md:text-[16px] text-black leading-[1.5]">
//               Our mission is to uplift lives through ethical recruitment, professional guidance, and continuous support before and after deployment.
//             </p>
//             <div className="h-[1px] bg-black opacity-24"></div>
//           </div>

//           <div className="flex flex-col gap-4">
//             {[
//               "Government-approved Consultancy",
//               "Strong Employer Partnerships",
//               "Fast & Hassle-free Processing",
//               "24/7 Support & Assistance"
//             ].map((item, idx) => (
//               <div key={idx} className="flex gap-4 md:gap-[18px] items-center">
//                 <svg className="block size-[20px] md:size-[24px] shrink-0" fill="none" viewBox="0 0 24 24">
//                   <path d={svgPaths.p6649300} fill="#E51B17" />
//                 </svg>
//                 <p className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-[16px] md:text-[20px] text-black leading-[1.5]">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="relative w-full lg:w-[521px] h-[300px] md:h-[400px] lg:h-[564px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-white">
//         <img alt="Impact" className="absolute inset-0 w-full h-full object-cover" src={img1197181} />
//       </div>
//     </div>
//   );
// }

// // CTA Section - Responsive
// function CTASection() {
//   return (
//     <div className="bg-[#f3d0d2] content-stretch flex flex-col gap-4 md:gap-[10px] items-center justify-center overflow-hidden p-8 md:p-12 lg:p-[48px] relative rounded-[24px] shrink-0 w-full max-w-[1238px] mx-auto">
//       <div className="absolute inset-0 opacity-23 pointer-events-none">
//         <img alt="Background pattern" className="absolute w-full h-full object-cover" src={img3922437172681} />
//       </div>
//       <div className="content-stretch flex flex-col gap-2 items-center text-center relative z-10">
//         <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] md:text-[28px] lg:text-[32px] text-[#c1121f] leading-[1.5]">
//           Ready to begin your overseas career?
//         </h2>
//         <p className="font-['Proxima_Nova',sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-black leading-[1.9]">
//           Start your journey with Shiva Man Power Consultancy today! 👇
//         </p>
//       </div>
//       <button className="bg-[#c1121f] px-6 md:px-8 lg:px-[32px] py-3 md:py-[12px] rounded-[50px] font-['Helvetica_Neue',sans-serif] font-bold text-[14px] md:text-[15px] text-white uppercase hover:bg-[#a00f1a] transition-colors relative z-10">
//         Apply Now
//       </button>
//     </div>
//   );
// }

// // Success Stories Section - Responsive
// function SuccessStoriesSection() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const stories = Array(10).fill({
//     name: "Jessi Bhagat",
//     location: "U.A.E",
//     image: imgRectangle6
//   });

//   const scroll = (direction: 'left' | 'right') => {
//     const container = document.getElementById('stories-container');
//     if (container) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="content-stretch flex flex-col gap-6 md:gap-[32px] items-center px-4 md:px-8 relative shrink-0 w-full">
//       <div className="flex flex-col gap-4 items-center">
//         <div className="flex gap-4 md:gap-[24px] items-center justify-center">
//           <h2 className="font-['Helvetica_Neue',sans-serif] font-bold text-[24px] md:text-[28px] lg:text-[32px] text-black leading-[1.2]">
//             <span>Our </span>
//             <span className="text-[#c1121f]">Success </span>
//             <span className="text-[#181717]">Stories</span>
//           </h2>
//           <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//             <path d={svgPaths.p183f600} fill="#2859C5" />
//             <path d={svgPaths.p10f7e880} fill="#8FBFFA" />
//           </svg>
//         </div>
//         <p className="font-['Libre_Franklin',sans-serif] font-light text-[14px] md:text-[16px] text-black text-center leading-[1.5] max-w-[554px]">
//           Our mission is to uplift lives through ethical recruitment, professional guidance, and continuous support before and after deployment.
//         </p>
//       </div>

//       <div className="content-stretch flex gap-4 md:gap-[32px] items-center justify-center w-full max-w-[1238px]">
//         {/* Left Arrow */}
//         <button
//           onClick={() => scroll('left')}
//           className="hidden md:flex bg-[#c1121f] h-[64px] items-center p-[16px] rounded-[50px] hover:bg-[#a00f1a] transition-colors shrink-0"
//           aria-label="Previous"
//         >
//           <svg className="block w-[32px] h-[64px] -scale-y-100 rotate-180" fill="none" viewBox="0 0 32 64">
//             <path d={svgPaths.p3052f500} fill="#FFF1F1" />
//           </svg>
//         </button>

//         {/* Stories Container */}
//         <div
//           id="stories-container"
//           className="flex gap-4 md:gap-6 lg:gap-[32px] overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {stories.map((story, idx) => (
//             <div
//               key={idx}
//               className="bg-[rgba(223,223,223,0.38)] flex flex-col gap-6 md:gap-[32px] min-w-[260px] md:min-w-[292px] p-6 md:p-[28px_28px_36px] rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25),inset_0px_0px_8px_0px_rgba(0,0,0,0.16)] snap-start"
//             >
//               <div className="relative">
//                 <img
//                   alt={story.name}
//                   className="w-full h-[180px] md:h-[204px] object-cover rounded-[12px]"
//                   src={story.image}
//                 />
//                 <div className="absolute right-4 top-4 bg-white flex items-center justify-center rounded-full size-[50px] md:size-[60px] shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.18)]">
//                   <img alt="UAE Flag" className="w-[24px] md:w-[36px] h-[14px] md:h-[21.6px]" src={imgBackground} />
//                 </div>
//               </div>
//               <div className="flex items-end justify-between">
//                 <div className="flex flex-col gap-2">
//                   <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[16px] md:text-[18px] text-black">
//                     {story.name}
//                   </p>
//                   <div className="flex gap-2 items-center">
//                     <p className="font-['Plus_Jakarta_Sans',sans-serif] font-light text-[14px] md:text-[16px] text-black">
//                       {story.location}
//                     </p>
//                     <img alt="Flag" className="w-[24px] md:w-[30px] h-[14px] md:h-[18px]" src={imgBackground} />
//                   </div>
//                 </div>
//                 <img alt="Rating" className="h-[28px] md:h-[32px] w-auto" src={imgImage22RemovebgPreview} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => scroll('right')}
//           className="hidden md:flex bg-[#c1121f] h-[64px] items-center p-[16px] rounded-[50px] hover:bg-[#a00f1a] transition-colors shrink-0"
//           aria-label="Next"
//         >
//           <svg className="block w-[32px] h-[64px]" fill="none" viewBox="0 0 32 64">
//             <path d={svgPaths.p3052f500} fill="#FFF1F1" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// // FAQ Section - Responsive
// function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const faqs = [
//     {
//       question: "What is your process for vetting candidates?",
//       answer: "Our rigorous process includes multi-stage interviews, skill assessments, background checks, and verification of all credentials to ensure you only meet with qualified, reliable professionals."
//     },
//     {
//       question: "Which countries in the Gulf do you specialize in?",
//       answer: ""
//     },
//     {
//       question: "Are there any fees for candidates to apply for a job?",
//       answer: ""
//     },
//     {
//       question: "What support do you offer after I get a job offer?",
//       answer: ""
//     },
//     {
//       question: "Which countries in the Gulf do you specialize in?",
//       answer: ""
//     },
//     {
//       question: "Are there any fees for candidates to apply for a job?",
//       answer: ""
//     }
//   ];

//   return (
//     <div className="content-stretch flex flex-col lg:flex-row gap-8 lg:gap-[232px] items-start px-4 md:px-8 relative shrink-0 w-full max-w-[1240px] mx-auto">
//       <div className="flex flex-col gap-4 w-full lg:w-[446px]">
//         <h2 className="font-['Helvetica_Neue',sans-serif] font-bold text-[32px] md:text-[36px] lg:text-[42px] text-black leading-[1.2]">
//           <span>Got </span>
//           <span className="text-[#c1121f]">Questions?</span>
//           <br />
//           We're Here to Help.
//         </h2>
//       </div>

//       <div className="flex flex-col gap-4 w-full lg:flex-1">
//         {faqs.map((faq, idx) => (
//           <div
//             key={idx}
//             className={`relative w-full ${
//               openIndex === idx ? 'bg-[#f2f2f2] rounded-[8px]' : ''
//             } border-b-[0.4px] border-black ${openIndex === idx ? '' : 'shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.25)]'}`}
//           >
//             <button
//               onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
//               className="flex items-center justify-between px-3 md:px-[12px] py-3 md:py-[16px] w-full text-left"
//             >
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal md:font-semibold text-[16px] md:text-[18px] text-black leading-[1.2] pr-4">
//                 {faq.question}
//               </p>
//               <svg
//                 className={`block size-[20px] md:size-[24px] shrink-0 transition-transform ${
//                   openIndex === idx ? 'rotate-180' : ''
//                 }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path d={svgPaths.p1d223700} fill="black" />
//               </svg>
//             </button>
//             {openIndex === idx && faq.answer && (
//               <div className="px-3 md:px-[12px] pb-3 md:pb-[16px]">
//                 <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] md:text-[16px] text-[rgba(0,0,0,0.6)] leading-[1.2]">
//                   {faq.answer}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Footer - Responsive
// function Footer() {
//   return (
//     <div className="content-stretch flex flex-col gap-6 md:gap-[32px] py-6 md:py-[32px] px-4 md:px-8 relative rounded-[32px] shrink-0 w-full bg-white/20">
//       <div className="absolute inset-0 opacity-20 overflow-hidden rounded-[32px] pointer-events-none">
//         <img alt="Footer background" className="absolute w-full h-full object-cover" src={imgFrame2147225242} />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-[31px] pt-8 md:pt-[64px] px-4 md:px-[80px] relative">
//         {/* Logo & Contact */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           <div className="flex gap-2 items-center">
//             <div className="h-[58px] md:h-[68px] w-[65px] md:w-[77px] relative">
//               <img alt="Logo" className="absolute h-[170.38%] left-[-24.85%] top-[-32.95%] w-[149.71%]" src={imgLogo} />
//             </div>
//             <div className="flex flex-col">
//               <p className="font-['Helvetica_Neue',sans-serif] font-black text-[14px] md:text-[16px] text-black tracking-[1.6px] uppercase">
//                 shivaManPower
//               </p>
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] md:text-[15px] text-black tracking-[-0.6px] uppercase">
//                 legal consultancy
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <div className="flex gap-2 items-center">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p33218b70} fill="#270406" />
//               </svg>
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] md:text-[18px] text-[#270406]">
//                 contact@gmail.com
//               </p>
//             </div>
//             <div className="flex gap-2 items-center">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p35106c00} fill="#270406" stroke="#270406" strokeWidth="2" />
//               </svg>
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] md:text-[18px] text-[#270406]">
//                 9914390432
//               </p>
//             </div>
//             <div className="flex gap-2 items-center">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p3aac8400} fill="#270406" />
//               </svg>
//               <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] md:text-[18px] text-[#270406]">
//                 Golden Avenue, Nakodar
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Sitemap */}
//         <div className="flex flex-col gap-3">
//           <h3 className="font-['Libre_Franklin',sans-serif] font-medium text-[18px] md:text-[22px] text-[#0a0a0a]">
//             Sitemap
//           </h3>
//           <nav className="flex flex-col gap-3 md:gap-[16px] font-['Libre_Franklin',sans-serif] font-normal text-[14px] text-[#2d2d2d]">
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Home</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">About us</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Services</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Testimonials</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Current Demands</a>
//           </nav>
//         </div>

//         {/* Clients */}
//         <div className="flex flex-col gap-3">
//           <h3 className="font-['Libre_Franklin',sans-serif] font-medium text-[18px] md:text-[22px] text-[#0a0a0a]">
//             Clients
//           </h3>
//           <nav className="flex flex-col gap-3 md:gap-[16px] font-['Libre_Franklin',sans-serif] font-normal text-[14px] text-[#2d2d2d]">
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Intercom</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Zendesk</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Front App</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Gorgias</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">hubspot</a>
//           </nav>
//         </div>

//         {/* Solutions */}
//         <div className="flex flex-col gap-3">
//           <h3 className="font-['Libre_Franklin',sans-serif] font-medium text-[18px] md:text-[22px] text-[#0a0a0a]">
//             Solutions
//           </h3>
//           <nav className="flex flex-col gap-3 md:gap-[16px] font-['Libre_Franklin',sans-serif] font-normal text-[14px] text-[#2d2d2d]">
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Business AI</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Smart Calling</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">HealthTech</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">Industrial AI</a>
//             <a href="#" className="hover:text-[#c1121f] transition-colors">GovTech</a>
//           </nav>
//         </div>

//         {/* Social */}
//         <div className="flex flex-col gap-6 md:gap-[32px]">
//           <div className="flex gap-3 md:gap-[16px] items-center">
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p24edac00} fill="url(#paint0_radial_1_2190)" />
//                 <path d={svgPaths.p3f139100} fill="white" />
//                 <defs>
//                   <radialGradient id="paint0_radial_1_2190">
//                     <stop stopColor="#FFDD55" />
//                     <stop offset="0.5" stopColor="#FF543E" />
//                     <stop offset="1" stopColor="#C837AB" />
//                   </radialGradient>
//                 </defs>
//               </svg>
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p3e3ab00} fill="black" />
//               </svg>
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <svg className="block size-[28px] md:size-[32px]" fill="none" viewBox="0 0 32 32">
//                 <path d={svgPaths.p223ecd00} fill="#2D2D2D" />
//                 <path d={svgPaths.p27885270} fill="#2D2D2D" />
//               </svg>
//             </a>
//             <a href="#" className="hover:opacity-80 transition-opacity">
//               <svg className="block size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
//                 <path d={svgPaths.p32410600} fill="#3D5A98" />
//                 <path d={svgPaths.p2640c770} fill="white" />
//               </svg>
//             </a>
//           </div>

//           <button className="bg-[#0a0a0a] px-4 md:px-[18px] py-2 md:py-[8px] rounded-[20px] font-['Alumni_Sans',sans-serif] font-semibold text-[18px] md:text-[20px] text-[#eff6ee] tracking-[0.8px] uppercase hover:bg-[#1a1a1a] transition-colors w-full sm:w-auto">
//             Start Your AI Journey
//           </button>
//         </div>
//       </div>

//       <div className="h-[1px] bg-black opacity-17 w-full"></div>

//       <div className="content-stretch flex flex-col sm:flex-row font-['Libre_Franklin',sans-serif] font-normal items-start sm:items-center justify-between gap-4 text-[14px] md:text-[16px] text-[#737373] px-4 md:px-[80px] relative">
//         <p>@2025 AI dardania . All rights reserved</p>
//         <div className="flex gap-4 md:gap-[32px]">
//           <a href="#" className="hover:text-[#c1121f] transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-[#c1121f] transition-colors">Terms</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main Component
// export default function ResponsiveApplyNow() {
//   return (
//     <div className="bg-[#fafafa] content-stretch flex flex-col gap-12 md:gap-16 lg:gap-[80px] items-center relative w-full min-h-screen overflow-x-hidden" data-name="apply now">
//       <Navbar />
//       <HeroSection />
//       <WhoWeAreSection />
//       <FormSection />
//       <WhyChooseUsSection />
//       <ImpactSection />
//       <CTASection />
//       <SuccessStoriesSection />
//       <FAQSection />
      
//       {/* Bottom Image */}
//       <div className="relative w-full max-w-[1316px] aspect-[16/6] md:aspect-[16/5] px-4 md:px-8">
//         <img
//           alt="Global guardians"
//           className="absolute inset-0 w-full h-full object-cover"
//           src={imgBnpsInternationalGlobalGuardiansForOverseasEducation14}
//         />
//       </div>

//       <Footer />
//     </div>
//   );
// }