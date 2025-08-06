import React from "react";
import { Hotel } from "@/lib/database";

interface OtherAmanHotelsProps {
  hotel: Hotel;
}

function StarRow() {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4l3.09 6.26L24 11.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 16.14l-5-4.87 6.91-1.01L14 4z" stroke="#fff" strokeWidth="1.5" fill="none"/>
        </svg>
      ))}
    </div>
  );
}

const hotels = [
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
    name: "Hotel Name here",
    location: "Location · Country",
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    name: "Hotel Name here",
    location: "Location · Country",
  },
  {
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    name: "Hotel Name here",
    location: "Location · Country",
  },
];

export default function OtherAmanHotels({ hotel }: OtherAmanHotelsProps) {
  return (
    <section className="w-full bg-[#f7f7fa] py-24 flex flex-col items-center justify-center">
      {/* Script Heading */}
      <div className="mb-2">
        <span className="font-bellarina text-4xl text-[#23263a]">Keep exploring</span>
      </div>
      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl font-arpona text-[#23263a] font-medium text-center mb-16">Other Aman Hotels</h2>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 w-full max-w-6xl">
        {hotels.map((hotel, i) => (
          <div key={i} className="relative group overflow-hidden rounded-none shadow-lg h-[320px] flex items-end justify-center">
            <img src={hotel.image} alt={hotel.name} className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 z-10" />
            <div className="relative z-20 p-6 w-full text-center flex flex-col items-center justify-end">
              <StarRow />
              <h3 className="text-white text-2xl font-arpona font-normal mb-1 drop-shadow-lg">{hotel.name}</h3>
              <p className="text-white text-sm font-inter opacity-90">{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Button */}
      <button className="mt-4 px-12 py-5 border-2 border-gray-300 font-inter font-bold text-[#23263a] text-base flex items-center justify-center gap-2 tracking-widest hover:bg-gray-100 transition-all" style={{ minWidth: 320 }}>
        EXPLORE ALL AMAN HOTELS <span className="ml-2">→</span>
      </button>
    </section>
  );
} 