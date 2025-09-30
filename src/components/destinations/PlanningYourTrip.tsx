import Image from "next/image";
import React from "react";

export default function PlanningYourTrip() {
  return (
    <section className="bg-white flex justify-center items-stretch mt-20 md:mt-60 mb-10 md:mb-20 h-auto md:h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative">
        
        {/* Mobile: Image First */}
        <div className="w-full md:hidden h-[300px] relative">
          <img
            src="https://picsum.photos/seed/resort-pool/1000/1200"
            alt="Effortless Travel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Left: Content */}
        <div className="relative w-full md:w-6/8 bg-[#f5f6f7] flex flex-col mr-auto px-6 py-8 md:px-8 md:py-12 md:pl-16 md:pr-20">
          {/* Mobile: Simple Layout */}
          <div className="md:hidden">
            <h3 className="font-bellarina text-2xl text-[#23263a] mb-3">Planning your Trip</h3>
            <h2 className="text-2xl font-arpona text-[#23263a] font-bold leading-tight mb-6">
              Let us refine your ideas into a seamless, bespoke experience
            </h2>
            <p className="text-sm font-inter text-[#23263a] font-bold leading-relaxed mb-6">
              More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.
            </p>
            <button className="flex items-center gap-2 border-2 border-gray-300 px-6 py-3 bg-[#f7f7f8] text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all w-fit">
              MAKE AN ENQUIRY 
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden md:block">
              {/* Overlapping Heading/Subheading */}
              <div className="relative ml-20 z-20 mt-30 -mr-[45%]">
              <h3 className="font-bellarina text-3xl md:text-5xl text-[#23263a] mb-4">Planning your Trip</h3>
              <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] font-bold leading-tight mb-6">
                Let us refine your ideas into a<br />seamless, bespoke experience
              </h2>
            </div>
            {/* Body Text */}
            <div className="mt-44 md:mt-0 w-3/7 z-10 ml-20 mr-20">
              <p className="text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
              More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.<br/>
              </p>
              
              <button className="flex items-center gap-2 border-2 border-gray-300 px-8 py-4 bg-[#f7f7f8] text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all w-fit"> MAKE AN ENQUIRY <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-5 h-5 ml-2" /> </button>
            </div>
          </div>
        </div>
        
        {/* Desktop: Right Image */}
        <div className="hidden md:block w-[45%] translate-y-1/2 mr-20 z-10 absolute h-[80vh] -top-40 right-0">
          <img
            src="https://picsum.photos/seed/resort-pool/1000/1200"
            alt="Effortless Travel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
} 