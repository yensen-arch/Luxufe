"use client";
import React from "react";

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
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-normal mb-12">Recommended Stays</h2>
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {hotels.map((hotel, i) => (
          <div
            key={hotel.name}
            className="relative w-full h-[420px] rounded-none overflow-hidden shadow-lg flex flex-col justify-end group"
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
              <p className="text-white text-xs font-inter font-bold">{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="border border-gray-400 px-8 py-4 bg-white text-[#23263a] font-inter font-semibold text-xs tracking-widest hover:bg-gray-100 transition-all">
          ALL ACCOMMODATIONS IN SOUTH AFRICA &rarr;
        </button>
      </div>
    </section>
  );
};

export default RecommendedStays; 