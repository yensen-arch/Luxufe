import React from "react";
import { MapPin, Building2, BookOpen } from "lucide-react";
import { getHotelGallery } from "@/lib/database";

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

const ProductHero = async ({ hotel }: ProductHeroProps) => {
  // Fetch hotel gallery images
  const galleryImages = await getHotelGallery(hotel.hotel_name);
  const backgroundImage = galleryImages.length > 0 
    ? galleryImages[0] 
    : "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80";

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-6 sm:mb-8 md:mb-10">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={`${hotel.hotel_name} - ${hotel.city}, ${hotel.country}`}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-arpona text-white font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
            {hotel.hotel_name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg uppercase text-white font-bold font-inter mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4 tracking-wide">
            {hotel.city}, {hotel.country}
          </p>
          
          {/* Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
            <button className="w-full sm:w-auto border border-white text-white font-inter font-bold px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 text-xs sm:text-sm flex items-center justify-center gap-2 tracking-widest rounded-none">
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