import React from "react";

interface GlobalNetworkProps {
  data?: {
    heading?: string;
    description?: string;
    backgroundImage?: any;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function GlobalNetwork({ data }: GlobalNetworkProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "A Global Network of Elite Excellence";
  const description = data?.description || "More than just a travel service, we are curators of experience, ensuring that each trip is tailored with precision, care, and an uncompromising commitment to excellence. Our philosophy is built on three core pillars: Care, Comfort, and Consistency.";
  const ctaText = data?.ctaText || "VIEW ALL PARTNERS";

  return (
    <section className="bg-white flex justify-center items-stretch mt-20 md:mt-60 mb-10 md:mb-20 h-[80vh] md:h-[120vh]">
      <div className="flex flex-col md:flex-row w-full mx-auto h-full relative ">
        {/* Left: Image */}
        <div className="w-full md:w-[56%] z-10 absolute md:-top-30 top-0 h-full md:h-[120vh]">
          <img
            src={data?.backgroundImage ? `https://picsum.photos/seed/global-network/1000/1200` : "https://picsum.photos/seed/resort-pool/1000/1200"}
            alt="Effortless Travel"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="relative w-full md:w-6/8 bg-[#f5f6f7] flex flex-col ml-auto px-4 md:px-8 py-8 md:py-12 md:pl-16 md:pr-20">
          {/* Overlapping Heading/Subheading */}
          <div className="absolute md:static ml-auto z-10 mt-16 md:mt-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-arpona text-[#23263a] text-start mr-4 md:mr-40 font-bold leading-tight mb-4 md:mb-6">
              {heading}
            </h2>
          </div>
          {/* Body Text */}
          <div className="mt-32 md:mt-44 lg:mt-0 w-full md:w-3/7 z-10 ml-auto mr-4 md:mr-20">
            <p className="text-sm md:text-base lg:text-md font-inter text-[#23263a] font-bold leading-relaxed mb-4">
              {description}
            </p>
            <button className="w-fit border-2 border-gray-300 text-xs py-3 md:py-4 px-4 md:px-6 mt-6 md:mt-10 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition text-left">{ctaText} <span>&rarr;</span></button>
          </div>
          {/* Watermark */}
          <div className="absolute -bottom-8 md:-bottom-18 -right-8 md:-right-20">
            <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[120px] md:w-[235px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
} 