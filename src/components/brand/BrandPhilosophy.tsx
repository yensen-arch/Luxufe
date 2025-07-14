import React from "react";

export default function BrandPhilosophy() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-32 bg-white">
      {/* Aman Logo (SVG recreation) */}
      <div className="mb-10 flex flex-col items-center">
        LOGO
      </div>
      {/* Headline */}
      <h2 className="text-3xl md:text-3xl font-arpona text-[#23263a] font-bold text-center w-2/5 mb-6">
        Luxufe proudly partners with Aman to offer clients access to some of the world’s most discreet and inspiring luxury retreats.
      </h2>
      {/* Subheadline */}
      <p className="font-inter text-lg md:text-md text-[#23263a] font-bold text-center max-w-xl mb-10">
        With a philosophy grounded in space, peace, and personalized care, Aman creates rare sanctuaries where time slows and every detail is instinctive.
      </p>
      {/* Button */}
      <a
        href="#"
        className="mt-4 px-4 py-4 border-2 border-gray-300 font-inter font-bold text-[#23263a] text-xs flex items-center justify-center gap-2 tracking-widest hover:bg-gray-100 transition-all"
        style={{ minWidth: 220 }}
      >
        AMAN HOTELS
        <span className="ml-2">→</span>
      </a>
    </section>
  );
} 