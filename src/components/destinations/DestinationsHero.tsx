import React from "react";

export default function DestinationsHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Mountain landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-3xl md:text-5xl text-white mb-4 block">Travel by Destination</span>
        <h1 className="text-white text-5xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          Start with a place that calls to you and<br />we’ll handle the rest
        </h1>
      </div>
      {/* Breadcrumb and image credit */}
      <div className="absolute left-6 bottom-6 z-30 text-white text-xs font-inter">
        Home &gt; Travel by Destination
      </div>
      <div className="absolute right-6 bottom-6 z-30 text-white text-xs font-inter">
        Image: details for the featured image here
      </div>
    </section>
  );
} 