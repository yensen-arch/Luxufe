import React from "react";

export default function WaysToTravelHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <p className="text-4xl md:text-5xl font-bellarina italic mb-6 mt-20">Ways to Travel with Luxufe</p>
        <h1 className="text-5xl md:text-6xl font-arpona font-normal leading-tight">
          Let an experience grab you and let the<br className="hidden md:block" /> journey follow
        </h1>
      </div>
    </section>
  );
} 