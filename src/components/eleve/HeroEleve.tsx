import React from "react";

export default function HeroEleve() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <p className="text-4xl md:text-5xl italic mb-4 font-bellarina">Elevé by Luxufe</p>
        <h1 className="text-5xl md:text-6xl font-arpona font-bold mb-8 leading-tight">
          Travel should feel as rewarding as the journeys themselves
        </h1>
        <button className="mt-6 px-10 py-4 border border-slate-300 text-white font-inter font-bold bg-transparent hover:bg-white hover:text-black transition-all text-sm">
          BECOME A MEMBER &rarr;
        </button>
      </div>
    </section>
  );
} 