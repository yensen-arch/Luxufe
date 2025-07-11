"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const hotels = [
  {
    name: "Arusha Coffee Lodge",
    location: "ARUSHA, TANZANIA",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tarangire Treetops Lodge",
    location: "TARANGIRE NATIONAL PARK, TANZANIA",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aman-i-Khas",
    location: "INDIA",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
  },
];

const RecommendedStays = () => {
  const [index, setIndex] = useState(0);
  const visibleHotels = hotels.slice(index, index + 3);

  const prev = () => setIndex((i) => (i === 0 ? 0 : i - 1));
  const next = () => setIndex((i) => (i + 3 >= hotels.length ? i : i + 1));

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-normal mb-12">Recommended Stays</h2>
      <div className="flex items-center justify-center gap-6 mb-10">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="rounded-full bg-white shadow-lg w-16 h-16 flex items-center justify-center text-2xl border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
          disabled={index === 0}
          aria-label="Previous"
        >
          <ChevronLeft className="w-8 h-8 text-[#23263a]" />
        </button>
        {/* Cards */}
        <div className="flex gap-8">
          {visibleHotels.map((hotel, i) => (
            <div
              key={hotel.name}
              className="relative w-[340px] h-[420px] rounded-none overflow-hidden shadow-lg flex flex-col justify-end group"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <span className="absolute top-6 left-6 z-20 text-xs font-inter text-white tracking-widest opacity-90">VIEW THIS HOTEL</span>
              <div className="relative z-20 p-6 text-left">
                <h3 className="text-white text-2xl font-arpona font-normal mb-1 drop-shadow-lg">{hotel.name}</h3>
                <p className="text-white text-sm font-inter opacity-80">{hotel.location}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={next}
          className="rounded-full bg-white shadow-lg w-16 h-16 flex items-center justify-center text-2xl border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50"
          disabled={index + 3 >= hotels.length}
          aria-label="Next"
        >
          <ChevronRight className="w-8 h-8 text-[#23263a]" />
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-gray-400 px-8 py-4 bg-white text-[#23263a] font-inter font-semibold text-sm tracking-widest hover:bg-gray-100 transition-all">
          ALL ACCOMMODATION IN SOUTH AFRICA &rarr;
        </button>
      </div>
    </section>
  );
};

export default RecommendedStays; 