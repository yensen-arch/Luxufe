"use client";
import React, { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface HotelBrandsData {
  title: string;
  subtitle: string;
  description: string;
  brands: Array<{
    name: string;
    logo: string;
  }>;
  destinations: Array<{
    name: string;
    location: string;
    image: string;
  }>;
}

interface HotelBrandsProps {
  data?: HotelBrandsData;
}

const defaultBrands = [
  { name: "BEYOND", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BEYOND" },
  { name: "BELMOND", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=BELMOND" },
  { name: "CAPELLA HOTELS & RESORTS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=CAPELLA" },
  { name: "Dorchester Collection", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=DORCHESTER" },
  { name: "Fairmont HOTELS & RESORTS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=FAIRMONT" },
  { name: "One&Only RESORTS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ONE&ONLY" },
  { name: "ST REGIS", logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=ST+REGIS" },
];

const defaultDestinations = [
  {
    name: "Singita Castleton",
    location: "Greater Kruger, South Africa",
    image: "https://picsum.photos/seed/castleton/800/600"
  },
  {
    name: "Palace Hotel",
    location: "Europe",
    image: "https://picsum.photos/seed/palace/800/600"
  },
  {
    name: "Taj Palace",
    location: "India",
    image: "https://picsum.photos/seed/taj/800/600"
  }
];

export default function HotelBrands({ data }: HotelBrandsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    title: "Where You Stay, Matters",
    subtitle: "More than accommodation, these are destinations in their own right",
    description: "At Luxufe, we curate hotels with the same care we give to every journey. From iconic city landmarks to secluded hideaways, each property is chosen for its character, service, and ability to enhance your overall experience.",
    brands: defaultBrands,
    destinations: defaultDestinations
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Text Content */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona text-gray-800 mb-4 md:mb-6">
            {sectionData.title}
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-arpona text-gray-800 mb-6 md:mb-8">
            {sectionData.subtitle}
          </h3>
          <p className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg font-inter text-gray-700 leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Brand Logos */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-24 flex-wrap">
          {sectionData.brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-8 md:h-10 lg:h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Image Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {sectionData.destinations.map((destination, index) => (
                <div className="flex-[0_0_auto] min-w-0" key={index}>
                  <div className="relative mx-2 md:mx-4 lg:mx-6">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                        <h4 className="text-white font-arpona text-lg md:text-xl lg:text-2xl mb-1">
                          {destination.name}
                        </h4>
                        <p className="text-white/90 font-inter text-sm md:text-base">
                          {destination.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 rounded-full p-3 md:p-4 shadow-lg hover:bg-white transition-colors z-10"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 rounded-full p-3 md:p-4 shadow-lg hover:bg-white transition-colors z-10"
          >
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
} 