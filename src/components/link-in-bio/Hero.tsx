import React from "react";
import QuickLinks from "./QuickLinks";


export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-center items-center mb-250">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-auto">
        <img
          src="https://picsum.photos/seed/picsum/1920/1080"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Centered Text */}
      <div className="relative z-10 flex top-5/6 flex-col items-center justify-center flex-1 pt-20">
        <span className="font-bellarina text-5xl text-white mb-2">Quick Links</span>
        <h1 className="text-white text-5xl font-bold md:text-6xl font-arpona text-center mb-8">Where would you like to go?</h1>
        {/* Connected Section: QuickLinks */}
        <QuickLinks />
      </div>
    </section>
  );
} 