import React from "react";
import { ArrowRight } from "lucide-react";

export default function ExploreTogetherHero() {
  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden my-20"
      style={{}}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Santorini, Greece"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          Let’s explore what’s<br className="hidden md:block" /> possible together
        </h1>
        <p className="text-white text-md md:text-lg font-bold font-inter mb-10 max-w-lg mx-auto">
          Tell us where you want to go or simply how you want to feel, and our team will guide you through the next steps, from refining the idea to crafting the perfect itinerary.
        </p>
        <button
          className="border border-gray-300 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest"
        >
          ENQUIRE WITH US <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
} 