import React from "react";

export default function WaysToTravelIntro() {
  return (
    <section className="bg-white flex flex-col items-center w-full pt-20">
      {/* Top: Logo and Text */}
      <div className="flex flex-col items-center mb-24">
        <div className="mb-6">
          {/* Placeholder for logo */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-3xl font-bold">Logo</span>
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-arpona text-[#23263a] font-bold text-center max-w-3xl">
        Whether you’re drawn to the wild, the serene, the cultural, or the indulgent, Luxufe curates experiences around what matters most to you. Start with what you love, and we’ll build the journey around it.
        </p>
      </div>
    </section>
  );
} 