"use client"

import React from "react";

export default function ElevateTravel() {
  return (
    <section className="py-24 bg-[#f7f8fa]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch px-4 gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center md:pr-12">
          <p className="text-2xl md:text-3xl font-bellarina italic text-[#23263a] mb-4">Your next journey awaits</p>
          <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] mb-8 leading-tight">
            Elevate your travel<br />with Elevé by Luxufe.
          </h2>
          <p className="font-inter text-[#23263a] text-lg mb-4">
            Becoming a member of Elevé by Luxufe is effortless. Simply sign up to join and receive exclusive access to luxury perks, curated travel benefits, and insider privileges.
          </p>
          <p className="font-inter text-[#23263a] text-lg mb-10">
            Members will be the first to know about VIP experiences, limited-time offers, and luxury travel enhancements delivered directly to their inbox.
          </p>
          <button className="mt-2 px-8 py-4 border border-slate-300 text-[#23263a] font-inter font-bold bg-transparent hover:bg-[#23263a] hover:text-white transition-all text-sm w-fit">
            ELEVATE YOUR TRAVEL &rarr;
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="Cocktail"
            className="w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
