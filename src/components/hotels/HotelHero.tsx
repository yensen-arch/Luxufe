"use client";
import React from "react";
import HotelMap from "./HotelMap";

interface HotelHeroData {
  tagline: string;
  mainHeading: string;
  subHeading: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
}

interface HotelHeroProps {
  data?: HotelHeroData;
}

export default function HotelHero({ data }: HotelHeroProps) {
  // Fallback to hardcoded content if no data is provided
  const heroData = data || {
    tagline: "Exceptional Stays. Handpicked for You",
    mainHeading: "Discover the world's finest hotels,",
    subHeading: "selected for elegance, service, and soul",
    backgroundImage: {
      url: "https://picsum.photos/seed/hotel-hero/1920/1080",
      alt: "Luxury hotel on golf course overlooking ocean"
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center mb-160">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 md:mb-3 lg:mb-4 font-bellarina">
          {heroData.tagline}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-arpona mb-2 md:mb-3">
          {heroData.mainHeading}
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona">
          {heroData.subHeading}
        </p>
      </div>

      {/* Map Overlay - Positioned absolutely over the hero */}
      <div className="absolute -bottom-140">
        <div className="relative w-full h-full">
          {/* Map Container */}
            <HotelMap />
        </div>
      </div>
    </section>
  );
} 