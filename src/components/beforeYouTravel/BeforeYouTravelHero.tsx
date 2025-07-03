import React from "react";

export default function BeforeYouTravelHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 w-6xl mx-auto flex flex-col items-center justify-center">
        <p className="text-4xl md:text-5xl italic mb-4 font-bellarina">Before you travel</p>
        <h1 className="text-5xl md:text-6xl font-arpona font-bold mb-8 leading-tight">
          Luxury Travel Starts Before You Depart
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter font-bold text-md text-white/90">
          Prepare for your luxury journey with expert insights, from visas to packing, ensuring a seamless and unforgettable experience.
        </p>
      </div>
    </section>
  );
} 