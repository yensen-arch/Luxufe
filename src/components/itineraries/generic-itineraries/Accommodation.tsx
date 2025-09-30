"use client";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
const hotels = [
  {
    name: "The Fullerton Bay Hotel",
    location: "SINGAPORE",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "The Fullerton Bay Hotel in Singapore with Marina Bay Sands in background"
  },
  {
    name: "Sukau Rainforest Lodge",
    location: "BORNEO",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    alt: "Sukau Rainforest Lodge in Borneo rainforest"
  },
  {
    name: "Aman-i-Khas",
    location: "INDIA",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Aman-i-Khas luxury tent accommodation in India"
  },
  {
    name: "Raffles Hotel",
    location: "SINGAPORE",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    alt: "Raffles Hotel Singapore"
  },
  {
    name: "The Ritz-Carlton",
    location: "HONG KONG",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
    alt: "The Ritz-Carlton Hong Kong"
  }
];

export default function Accommodation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-8 md:mb-12">Accommodation</h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 md:gap-6">
            {hotels.map((hotel, index) => (
              <div key={index} className="flex-[0_0_300px] md:flex-[0_0_400px] min-w-0">
                <div className="relative group cursor-pointer">
                  {/* Hotel Image */}
                  <Image
                    width={1000}
                    height={1000}
                    src={hotel.image}
                    alt={hotel.alt}
                    className="w-full h-[200px] md:h-[480px] object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                    {/* View This Hotel Button */}
                    <div className="absolute top-4 left-4">
                      <button className="text-white font-inter font-bold text-xs px-3 py-1">
                        VIEW THIS HOTEL
                      </button>
                    </div>
                    
                    {/* Hotel Info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-arpona font-bold text-lg md:text-xl mb-1">
                        {hotel.name}
                      </h3>
                      <p className="font-inter font-bold text-sm">
                        {hotel.location}
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
          className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-lg rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous hotel"
        >
          <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="arrow-left" width={24} height={24} />
        </button>
        
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-lg rounded-full w-10 h-10 md:w-20 md:h-20 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next hotel"
        >
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
