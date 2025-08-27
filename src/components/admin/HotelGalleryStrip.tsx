"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HotelGalleryStripProps {
  hotelName: string;
  onImageSelect?: (imageUrl: string, imageIndex: number) => void;
  selectedImageIndex?: number;
  onSave?: (cardImages: { top: string | null; left: string | null; right: string | null }) => void;
  currentCardImages?: { top: string | null; left: string | null; right: string | null };
  selectedPosition?: 'top' | 'left' | 'right';
}

export default function HotelGalleryStrip({ 
  hotelName, 
  onImageSelect, 
  selectedImageIndex = 0,
  onSave,
  currentCardImages,
  selectedPosition = 'top'
}: HotelGalleryStripProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(selectedImageIndex);
  const [cardImages, setCardImages] = useState<{
    top: string | null;
    left: string | null;
    right: string | null;
  }>(currentCardImages || { top: null, left: null, right: null });

  // Import the function dynamically to avoid circular dependencies
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        // Dynamic import to avoid circular dependency
        const { getHotelGallery } = await import("@/lib/database");
        const images = await getHotelGallery(hotelName);
        setGalleryImages(images);
        setSelectedIndex(selectedImageIndex);
      } catch (error) {
        console.error('Error fetching hotel gallery:', error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    };

    if (hotelName) {
      fetchGallery();
    }
  }, [hotelName, selectedImageIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedIndex(index);
    if (onImageSelect) {
      onImageSelect(imageUrl, index);
    }
  };

  // Find the index of the currently displayed image in the modal
  const getCurrentImageIndex = () => {
    if (!currentCardImages) return selectedIndex;
    
    // Check if the current modal image matches any of the card images
    const currentImageUrl = galleryImages[selectedIndex];
    if (currentImageUrl === currentCardImages.top) return selectedIndex;
    if (currentImageUrl === currentCardImages.left) return selectedIndex;
    if (currentImageUrl === currentCardImages.right) return selectedIndex;
    
    return selectedIndex;
  };



  const handleSave = () => {
    if (onSave) {
      // Update the card images with the currently selected image
      const updatedCardImages = { ...cardImages };
      
      // Update the selected position with the current image
      updatedCardImages[selectedPosition] = galleryImages[selectedIndex];
      
      onSave(updatedCardImages);
    }
  };

  // Check if an image is currently used in the brand card
  const isImageInCard = (imageUrl: string) => {
    return cardImages.top === imageUrl || cardImages.left === imageUrl || cardImages.right === imageUrl;
  };

  if (loading) {
    return (
      <div className="w-full h-20 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">Loading gallery...</div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="w-full h-20 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">No images available</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Gallery Strip */}
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
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2 p-2">
                         {galleryImages.map((imageUrl, index) => (
               <div
                 key={index}
                 className={`flex-shrink-0 w-20 h-16 overflow-hidden cursor-pointer transition-all duration-200 ${
                   selectedIndex === index 
                     ? 'ring-2 ring-[#A5C8CE] ring-opacity-80' 
                     : isImageInCard(imageUrl)
                     ? 'ring-2 ring-green-500 ring-opacity-80'
                     : 'hover:ring-2 hover:ring-gray-300'
                 }`}
                 onClick={() => handleImageClick(imageUrl, index)}
               >
                <img
                  src={imageUrl}
                  alt={`${hotelName} image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=200&q=80";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Position Selection and Save */}
              <div className="mt-3 px-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-inter font-bold">
              Updating {selectedPosition.charAt(0).toUpperCase() + selectedPosition.slice(1)} position
            </span>
            {onSave && (
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-[#A5C8CE] text-white text-xs font-inter font-bold hover:bg-[#A5C8CE]/90 transition-colors"
              >
                Save to {selectedPosition}
              </button>
            )}
          </div>
        
        
        {/* Image Counter */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500 font-inter">
            {selectedIndex + 1} of {galleryImages.length} images
          </span>
        </div>
      </div>
    </div>
  );
}
