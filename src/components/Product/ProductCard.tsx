"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface ProductCardProps {
  name: string;
  type: string;
  bed: string | null;
  image: string;
  images?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, type, bed, image, images = [] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Helper function to validate and clean URLs
  const isValidUrl = (url: string): boolean => {
    if (!url || url.trim() === '') return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Helper function to get placeholder image
  const getPlaceholderImage = (index: number): string => {
    return `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80&seed=${index}`;
  };

  // Clean and validate images
  const cleanImages = (imgArray: string[]): string[] => {
    return imgArray
      .filter(isValidUrl)
      .map((img, index) => isValidUrl(img) ? img : getPlaceholderImage(index));
  };

  // Use provided images array or fallback to single image, with validation
  const rawImages = images.length > 0 ? images : [image];
  const displayImages = cleanImages(rawImages);
  
  // If no valid images, use placeholder
  const finalImages = displayImages.length > 0 ? displayImages : [getPlaceholderImage(0)];

  return (
    <div className="relative rounded-none overflow-hidden shadow-lg h-[500px] flex flex-col justify-between group cursor-pointer">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div ref={emblaRef} className="overflow-hidden h-full">
          <div className="flex h-full">
            {finalImages.map((img, index) => (
              <div className="flex-[0_0_100%] min-w-0 h-full" key={index}>
                <Image
                  src={img}
                  width={1000}
                  height={1000}
                  alt={`${name} - Image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = getPlaceholderImage(index);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Show on hover */}
      {finalImages.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              scrollPrev();
            }}
            className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-white rounded-full py-4 px-3 shadow-lg hover:bg-white transition-colors z-30 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="Left" width={16} height={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              scrollNext();
            }}
            className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-white rounded-full py-4 px-3 shadow-lg hover:bg-white transition-colors z-30 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Right" width={16} height={16} />
          </button>
        </>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      
      {/* Top Section - Room Type Badge */}
      <div className="relative z-20 p-6">
        <div className="inline-block px-3 py-1">
          <span className="text-white text-xs font-inter font-semibold tracking-widest uppercase">
            {type}
          </span>
        </div>
      </div>
      
      {/* Bottom Section - Room Info and Button */}
      <div className="relative z-20 p-6">
        {/* Room Name */}
        <h3 className="text-white text-2xl font-arpona font-normal mb-2 drop-shadow-lg">
          {name}
        </h3>
        
        {/* Sleep Capacity */}
        <div className="flex items-center gap-2 text-white text-xs font-inter mb-4 font-bold">
          <span>SLEEPS 2 ADULTS</span>
        </div>
        
        {/* Action Button */}
        <button className="cursor-pointer bg-white text-black font-inter font-semibold px-6 py-3 text-xs rounded-none shadow hover:bg-gray-100 transition-all tracking-widest">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 