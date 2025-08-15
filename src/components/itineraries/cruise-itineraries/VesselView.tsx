"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const vesselImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape with scenic views"
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    alt: "Forest trail and nature scenery"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunset over mountains and valleys"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of mountain ranges"
  }
];

export default function VesselView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-4xl px-4 md:px-12 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4 md:mb-0">The Journey</h2>
        <button className="border border-gray-300 px-4 md:px-6 py-2 md:py-3 font-inter font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition text-xs md:text-sm w-fit">
          MORE ABOUT THIS JOURNEY 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-12 md:mb-16">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {vesselImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Navigation Arrows */}
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Journey Details */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-2xl font-arpona font-bold text-gray-900">Journey Overview</h3>
        <p className="text-gray-800 font-inter md:text-sm font-bold">
          Experience the breathtaking landscapes and cultural wonders of this extraordinary journey:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Scenic mountain passes and breathtaking viewpoints
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Expert local guides sharing cultural insights and history
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Luxury accommodations in stunning natural settings
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Gourmet dining experiences featuring local cuisine
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Exclusive access to hidden gems and off-the-beaten-path locations
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-inter text-xs md:text-xs font-bold leading-relaxed">
                Personalized service and attention to every detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 