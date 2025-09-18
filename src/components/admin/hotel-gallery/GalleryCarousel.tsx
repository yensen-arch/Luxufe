"use client";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GalleryImage from "./GalleryImage";

interface GalleryCarouselProps {
  galleryImages: string[];
  hotelName: string;
  selectedIndex: number;
  deleteMode: boolean;
  swapMode: boolean;
  selectedImagesToDelete: string[];
  selectedImageForSwap: string | null;
  isImageInCard: (imageUrl: string) => boolean;
  onImageClick: (imageUrl: string, index: number) => void;
  onImageSelectForDeletion: (imageUrl: string) => void;
  onImageSelectForSwap: (imageUrl: string, index: number) => void;
}

export default function GalleryCarousel({
  galleryImages,
  hotelName,
  selectedIndex,
  deleteMode,
  swapMode,
  selectedImagesToDelete,
  selectedImageForSwap,
  isImageInCard,
  onImageClick,
  onImageSelectForDeletion,
  onImageSelectForSwap
}: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    skipSnaps: swapMode, // Disable carousel dragging in swap mode
    watchDrag: !swapMode, // Disable drag detection in swap mode
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      {galleryImages.length > 4 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div 
        className={`overflow-hidden ${swapMode ? 'pointer-events-none' : ''}`} 
        ref={emblaRef}
        style={swapMode ? { touchAction: 'none' } : {}}
      >
        <div className="flex gap-2 p-2 pointer-events-auto">
          {galleryImages.map((imageUrl, index) => (
            <GalleryImage
              key={`${imageUrl}-${index}`}
              imageUrl={imageUrl}
              index={index}
              hotelName={hotelName}
              isSelected={selectedIndex === index}
              isInCard={isImageInCard(imageUrl)}
              deleteMode={deleteMode}
              swapMode={swapMode}
              isSelectedForDeletion={selectedImagesToDelete.includes(imageUrl)}
              isSelectedForSwap={selectedImageForSwap === imageUrl}
              onImageClick={onImageClick}
              onImageSelectForDeletion={onImageSelectForDeletion}
              onImageSelectForSwap={onImageSelectForSwap}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
