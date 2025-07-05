import React from "react";

export default function ExperienceMoreHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      <div className="relative z-10 p-4 w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-arpona font-bold leading-tight mb-8">
          Experience More with<br />Exclusive Travel Offers
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter text-lg md:text-xl font-normal">
          Indulge with bespoke upgrades, VIP perks, and limited-time promotions<br />designed to elevate your next journey.
        </p>
      </div>
    </section>
  );
} 