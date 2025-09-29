import React from "react";

export default function TravelTheWorld() {
  return (
    <section className="bg-white flex justify-center items-stretch mt-20 md:mt-60 mb-20 h-auto md:h-[140vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative">
        {/* Left: Image */}
        <div className="w-full md:w-[56%] z-10 md:absolute md:-top-30 md:h-[120vh] h-[50vh] md:h-auto">
          <img
            src="https://picsum.photos/seed/resort-pool/1000/1200"
            alt="Effortless Travel"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-full md:w-6/8 bg-[#f5f6f7] flex flex-col md:ml-auto px-6 md:px-8 py-8 md:py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="md:absolute md:static md:ml-auto z-10 mt-0 md:mt-20">
            <h2 className="text-3xl md:text-6xl font-arpona text-[#23263a] font-bold leading-tight mb-4 md:mb-6">
              The Art of Effortless Travel
            </h2>
            <p className="text-lg md:text-2xl font-inter text-slate-700 font-bold leading-snug max-w-3xl mb-6 md:mb-10">
              We believe that true luxury lies in the details, where every moment is seamlessly orchestrated and every journey is as effortless as it is extraordinary.
            </p>
          </div>
          {/* Body Text */}
          <div className="mt-0 md:mt-0 w-full md:w-3/7 md:z-10 md:ml-auto md:mr-20">
            <p className="text-sm md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
              More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.<br/>
              Our philosophy is built on three core pillars: Care, Comfort, and Consistency.
            </p>
            <p className="text-sm md:text-md font-inter text-[#23263a] font-bold leading-relaxed">
              From anticipating a client's needs before they arise to ensuring smooth transitions between destinations, we want to eliminate friction and enhance the joy of discovery in every journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 