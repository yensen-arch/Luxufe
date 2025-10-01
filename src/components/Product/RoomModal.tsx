"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
interface RoomModalProps {
  room: {
    id: string;
    room_name: string;
    accommodation_type: string;
  };
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const RoomModal = ({ room, images, isOpen, onClose }: RoomModalProps) => {
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

  // Use validated images
  const displayImages = cleanImages(images);
  const finalImages = displayImages.length > 0 ? displayImages : [getPlaceholderImage(0)];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-7xl w-full max-h-[100vh] overflow-y-auto rounded-none">
        {/* Image Carousel */}
          <div className="relative">  
            <div ref={emblaRef} className="overflow-hidden">
              
              <div className="flex">
                {finalImages.map((image, index) => (
                  <div className="flex-[0_0_100%] min-w-0" key={index}>
                    <div className="relative">
                    <button
                  onClick={onClose}
            className="absolute top-4 right-4 z-10 cursor-pointer bg-white rounded-full p-4"
          >
            <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} />
          </button>
                      <Image 
                        src={image} 
                        width={1000}
                        height={1000}
                        alt={`${room.room_name} - Image ${index + 1}`}
                        className="w-full h-[600px] lg:h-[700px] object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = getPlaceholderImage(index);
                        }}
                      />
                      <div className="absolute bottom-4 right-4 text-black px-3 py-1 text-sm font-inter">
                        {index + 1} / {finalImages.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full py-6 px-5 shadow-lg hover:bg-white transition-colors z-10"
            >
              <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="Left" width={20} height={20} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full py-6 px-5 shadow-lg hover:bg-white transition-colors z-10"
            >
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Right" width={20} height={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
