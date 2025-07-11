
import { ArrowRight } from "lucide-react";
import React from "react";

export default function PlanningYourTrip() {
  return (
    <section className="bg-white flex justify-center items-stretch mt-60 mb-20 h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative">
        
        {/* Left: Content */}
        <div className="relative w-6/8 bg-[#f5f6f7] flex flex-col mr-auto px-8 py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="absolute md:static ml-20 z-20 mt-20">
            <h3 className="font-bellarina text-3xl md:text-5xl text-[#23263a] mb-4">Planning your Trip</h3>
            <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-bold leading-tight mb-6">
              Let us refine your ideas into a<br />seamless, bespoke experience
            </h2>
          </div>
          {/* Body Text */}
          <div className="mt-44 md:mt-0 w-3/7 z-10 ml-20 mr-20">
            <p className="text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
            More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.<br/>
            </p>
            
            <button className="flex items-center gap-2 border border-gray-400 px-8 py-4 bg-[#f7f7f8] text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all w-fit"> MAKE AN ENQUIRY <ArrowRight className="w-5 h-5 ml-2" /> </button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-[40%] translate-y-1/2 mr-20 z-10 absolute h-[70vh] right-0">
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