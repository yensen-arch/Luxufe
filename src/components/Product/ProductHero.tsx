import React from "react";
import { MapPin, Building2, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#" },
  { label: "Countries", href: "#" },
  { label: "Ways to travel", href: "#" },
  { label: "Information", href: "#" },
];

import { Hotel } from "@/lib/database";

interface ProductHeroProps {
  hotel: Hotel;
}

const ProductHero = ({ hotel }: ProductHeroProps) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-10">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-8">
        <div>
          <h1 className="text-5xl md:text-7xl w-full font-arpona text-white font-bold mb-8 gap-4 text-center">
            {hotel.hotel_name}
          </h1>
          <p className="text-lg md:text-sm uppercase text-white font-bold font-inter mb-12 max-w-2xl text-center">
            {hotel.city}, {hotel.country}
          </p>
          {/* Stats Row replaced with buttons */}
          <div className="flex items-center gap-8 mb-2 ">
            <button className="border-2 border-gray-400 text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest">
              BOOK THIS HOTEL <span className="ml-2">→</span>
            </button>
            <button className="border-2 border-gray-400 text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest">
              ADD TO MY JOURNEY <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Row */}
      {/* <nav className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full z-30 ">
        <div className="bg-white flex justify-center items-center gap-8 py-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#23263a] font-inter font-semibold text-sm px-2 transition-colors hover:text-[#6c6f7b]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav> */}
    </section>
  );
};

export default ProductHero; 