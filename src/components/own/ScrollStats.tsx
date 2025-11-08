import React from "react";

const ScrollStats = () => {
  return (
    <>
      <div className=" flex  flex-col md:flex-row gap-4 items-start justify-center top-margins relative ps-[160px] scrollstate">
        <div className="h-[50vh] flex-1 md:sticky top-0 flex flex-col gap-6 p-8 lg:p-0">
          <h6
            className="border-1 px-4.5 py-1.5 rounded-4xl w-fit text-(--primary-color-900) !font-bold tracking-wide  bg-[#ffffffa1]  text-sm border-[#0000001b] shadow inset-4 inset-shadow-2xs cursor-pointer  
                  hover:border-(--primary-color) hover:scale-95 md:mt-10"
          >
            Why Trust Shiva trade
          </h6>
          <h2 className="text-[42px] font-black leading-[120%] md:max-w-[80%]">
            Trusted for <span>25 years</span> in Overseas Hiring
          </h2>
        </div>
        <div className="flex-1 md:flex-2 flex flex-col items-stretch justify-between gap-0 w-full">
          <div className="flex-1 h-auto flex items-end p-[60px] bg-(--primary-color-100) min-h-[500px] max-w-[100%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-[94px] font-bold font-bold-hel leading-[120%] text-white text-shadow-lg">98.5%</h1>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-4xl text-(--primary-color-900) Leading-[150%]">Placement Success Rate</p>
                <h2 className="text-xl leading-[120%]  text-(--color-bland-300)">
                  We keep a sharp eye on all recruitment processes from start to
                  finish and ensure our candidates land the right jobs with top
                  companies.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex-1 h-auto flex items-end p-[60px] bg-[#E66C6C] min-h-[500px] max-w-[100%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-[50px] md:text-[94px] font-bold font-bold-hel leading-[120%] text-white text-shadow-lg">$2,500,000+</h1>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-4xl text-(--primary-color-900) Leading-[150%]">Salary Packages</p>
                <h2 className="text-xl leading-[120%]  text-(--color-bland-300)">
                 The total value of salaries our candidates have received across placements with various companies, backed by expert guidance and support.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex-1 h-auto flex items-end p-[60px] bg-[#CD414C] min-h-[500px] max-w-[100%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-[94px] font-bold font-bold-hel leading-[120%] text-white text-shadow-lg">$300+</h1>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-4xl text-(--primary-color-900) Leading-[150%]">Companies & Industries</p>
                <h2 className="text-xl leading-[120%]  text-(--color-bland-300)">
                    Our organization has successfully placed 2000+ candidates in reputed companies across multiple sectors.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex-1 h-auto flex items-end p-[60px] bg-[#910D17] min-h-[500px] max-w-[100%]">
            <div className="flex flex-col gap-8">
              <h1 className="text-[94px] font-bold font-bold-hel leading-[120%] text-white text-shadow-lg">5000+</h1>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-4xl !text-(--color-bland-400) Leading-[150%]">Candidates Placed</p>
                <h2 className="text-xl leading-[120%]  text-(--color-bland-300)">
                 From skilled workers to managerial staff, we guide candidates to roles that match their career goals and growth aspirations.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>ScrollStats</div> */}
    </>
  );
};

export default ScrollStats;
