import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] mb-20 flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Sydney Opera House and Harbour Bridge"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-4xl md:text-5xl text-white mb-4 block">Contact Us</span>
        <h1 className="text-white text-5xl md:text-7xl font-arpona font-medium mb-8 leading-tight">
          Here for You, Wherever You Are
        </h1>
        <button
          className="border border-white text-white px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition font-inter font-bold text-base flex items-center justify-center gap-2 tracking-widest mt-4"
        >
          JUMP TO QUIZ <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
} 