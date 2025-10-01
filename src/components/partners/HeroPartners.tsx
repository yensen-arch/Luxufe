import React from "react";

interface HeroPartnersProps {
  data?: {
    heading?: string;
    description?: string;
    backgroundImage?: any;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function HeroPartners({ data }: HeroPartnersProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={data?.backgroundImage ? `https://picsum.photos/seed/partners-hero/1920/1080` : "https://picsum.photos/seed/picsum/1920/1080"}
        alt="Partners Resort"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full md:px-4 text-center md:mb-20">
        <span className="font-bellarina text-3xl md:text-5xl text-white mb-4 block">
          {data?.description || "Handpicked Global Partners"}
        </span>
        <h1 className="md:w-3/5 text-white text-4xl md:text-5xl lg:text-6xl font-arpona font-light mb-0 leading-tight">
          {data?.heading || "Elevated Travel, Powered by Extraordinary Partnerships"}
        </h1>
      </div>
      {/* Breadcrumb and image credit */}
      <div className="absolute left-6 bottom-6 z-30 text-white text-xs md:text-xs font-inter">
        Home &gt; Journeys &gt; Travel Type: Cruises
      </div>
    </section>
  );
} 