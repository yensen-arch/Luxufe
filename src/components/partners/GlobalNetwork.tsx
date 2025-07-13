import React from "react";

export default function GlobalNetwork() {
  return (
    <section className="bg-white flex justify-center items-stretch mt-60 mb-20 h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative ">
        {/* Left: Image */}
        <div className="w-[56%] z-10 absolute -top-30 h-[120vh]">
          <img
            src="https://picsum.photos/seed/resort-pool/1000/1200"
            alt="Effortless Travel"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-6/8 bg-[#f5f6f7] flex flex-col ml-auto px-8 py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="absolute md:static ml-auto z-10 mt-20">
            <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] text-start mr-40 font-bold leading-tight mb-6">
              A Global Network of <br /> Elite Excellence
            </h2>
          </div>
          {/* Body Text */}
          <div className="mt-44 md:mt-0 w-3/7 z-10 ml-auto mr-20">
            <p className="text-base md:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
              More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence.<br/>
              Our philosophy is built on three core pillars: Care, Comfort, and Consistency.
            </p>
            <button className="w-fit border-2 border-gray-300 text-xs py-4 px-6 mt-10 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition text-left">VIEW ALL PARTNERS <span>&rarr;</span></button>
          </div>
          {/* Watermark */}
          <div className="absolute -bottom-18 -right-20">
            <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[235px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
} 