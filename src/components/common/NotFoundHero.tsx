import React from "react";

export default function NotFoundHero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="404 background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay for readability (optional, can be removed if not needed) */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-4xl text-white mb-4 block">Error - 404</span>
        <h1 className="text-white text-5xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          You’ve taken a wrong turn, but we’ll<br />get you back on course
        </h1>
        <p className="text-white text-md md:text-lg font-inter font-bold mb-10 max-w-2xl mx-auto">
          Just like in travel, sometimes the path isn’t quite what you expected. But not to worry, we’re here to guide you back. Explore some of our curated journeys below or let us help you find exactly what you’re after.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
          <a href="/" className="border-2 border-white text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            RETURN TO HOME
          </a>
          <a href="/ways-to-travel" className="border-2 border-white text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            WAYS TO TRAVEL
          </a>
          <a href="/contact-us" className="border-2 border-white text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            SPEAK TO AN EXPERT <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 