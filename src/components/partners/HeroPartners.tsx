import React from "react";

export default function HeroPartners() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/picsum/1920/1080"
        alt="Partners Resort"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-2xl md:text-4xl text-white mb-4 block">Handpicked Global Partners</span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-arpona font-light mb-0 leading-tight">
          Elevated Travel, Powered by <br /> Extraordinary Partnerships
        </h1>
      </div>
      {/* Breadcrumb and image credit */}
      <div className="absolute left-6 bottom-6 z-30 text-white text-xs md:text-sm font-inter opacity-90">
        Home &gt; Journeys &gt; Travel Type: Cruises
      </div>
      <div className="absolute right-6 bottom-6 z-30 text-white text-xs md:text-sm font-inter opacity-80">
        Image: details for the featured image here
      </div>
    </section>
  );
} 