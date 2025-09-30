"use client";
import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const planeImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80"
];

const jetFeatures = {
  leftColumn: [
    "Seats in a customized 2×2 configuration",
    "Comfortable VIP-style leather seating with adjustable leg and headrests and a 45-degree recline",
    "Roomy cabin with plenty of legroom and convenient storage for personal items",
    "Plush, sleek interior design"
  ],
  rightColumn: [
    "A seasoned and specially-trained flight crew — including 3 pilots, an expedition chef, a catering officer, multiple flight attendants, an engineer, and a dedicated luggage handler",
    "A dedicated expedition physician who accompanies the group on the jet and on land",
    "In-seat power outlets and storage space for laptops, digital cameras, and other personal devices"
  ]
};

export default function PlaneView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center"
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="w-full max-w-4xl px-4 md:px-12 py-8 md:py-12 border-b-2 border-gray-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4 md:mb-0">The Jet: Boeing 757</h2>
        <button className="border-2 border-gray-300 px-4 md:px-6 py-2 md:py-4 font-inter font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-100 transition text-xs md:text-xs w-fit">
          MORE ABOUT THIS JET 
         <Image src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" width={24} height={24} />
        </button>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-12 md:mb-16">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {planeImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  alt={`Boeing 757 Jet - Image ${index + 1}`}
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Navigation Arrows */}
        <button
          className="absolute left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 md:w-20 md:h-20 flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
          onClick={scrollPrev}
          aria-label="Previous image"
        >
          <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="arrow-left" width={24} height={24} />
        </button>
        <button
          className="absolute right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-12 h-12 md:w-20 md:h-20 flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
          onClick={scrollNext}
          aria-label="Next image"
        >
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" width={24} height={24} />
        </button>
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-2xl font-arpona font-bold text-gray-900">Details</h3>
        <p className="text-gray-800 font-inter  md:text-md font-bold">
          The VIP-configured Boeing 757 private jet provides:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-4">
            {jetFeatures.leftColumn.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 font-inter text-xs md:text-sm font-bold leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {jetFeatures.rightColumn.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 font-inter text-xs md:text-sm font-bold leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 