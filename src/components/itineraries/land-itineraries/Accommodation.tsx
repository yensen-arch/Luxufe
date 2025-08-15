"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface HotelData {
  types: Array<{
    category: string;
    hotels: Array<{
      name: string;
      city: string;
      country: string;
    }>;
  }>;
}

interface AccommodationProps {
  hotelData: HotelData;
}

export default function Accommodation({ hotelData }: AccommodationProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Flatten all hotels from all categories
  const allHotels = hotelData.types.flatMap(category => 
    category.hotels.map(hotel => ({
      ...hotel,
      category: category.category
    }))
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-8 md:mb-12">Accommodation</h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4 md:gap-6">
            {allHotels.map((hotel, index) => (
              <div key={index} className="flex-[0_0_300px] md:flex-[0_0_400px] min-w-0">
                <div className="relative group cursor-pointer">
                  {/* Hotel Image - Using a placeholder for now */}
                  <img
                    src={`https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?auto=format&fit=crop&w=800&q=80`}
                    alt={`${hotel.name} in ${hotel.city}`}
                    className="w-full h-[200px] md:h-[480px] object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                    {/* View This Hotel Button */}
                    <div className="absolute top-4 left-4">
                      <button className="text-gray-900 font-inter font-bold text-xs px-3 py-1">
                        VIEW THIS HOTEL
                      </button>
                    </div>
                    
                    {/* Hotel Info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-arpona font-bold text-lg md:text-xl mb-1">
                        {hotel.name}
                      </h3>
                      <p className="font-inter font-bold text-sm">
                        {hotel.city}, {hotel.country}
                      </p>
                      <p className="font-inter text-xs opacity-80 mt-1">
                        {hotel.category}
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
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-all duration-300"
          onClick={scrollPrev}
          aria-label="Previous hotel"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-all duration-300"
          onClick={scrollNext}
          aria-label="Next hotel"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
