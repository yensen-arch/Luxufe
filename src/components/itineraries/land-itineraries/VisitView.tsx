"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface VisitViewProps {
  gallery?: string;
}

export default function VisitView({ gallery }: VisitViewProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Parse gallery string to get images
  const galleryImages = gallery ? JSON.parse(gallery.replace(/'/g, '"')) : [];
  
  // Fallback images if no gallery data
  const fallbackImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const images = galleryImages.length > 0 ? galleryImages : fallbackImages;

  return (
    <div className="w-full max-w-4xl px-4 md:px-12 py-8 md:py-12 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4 md:mb-0">The Journey</h2>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-12 md:mb-16">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {images.map((image: string, index: number) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img
                  src={image}
                  alt={`Journey image ${index + 1}`}
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
    </div>
  );
} 