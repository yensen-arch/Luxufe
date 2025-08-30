"use client";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import GalleryImage from "./GalleryImage";

interface GalleryCarouselProps {
  galleryImages: string[];
  hotelName: string;
  selectedIndex: number;
  deleteMode: boolean;
  rearrangeMode: boolean;
  selectedImagesToDelete: string[];
  isImageInCard: (imageUrl: string) => boolean;
  onImageClick: (imageUrl: string, index: number) => void;
  onImageSelectForDeletion: (imageUrl: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
}

export default function GalleryCarousel({
  galleryImages,
  hotelName,
  selectedIndex,
  deleteMode,
  rearrangeMode,
  selectedImagesToDelete,
  isImageInCard,
  onImageClick,
  onImageSelectForDeletion,
  onDragEnd
}: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    skipSnaps: rearrangeMode, // Disable carousel dragging in rearrange mode
    watchDrag: !rearrangeMode, // Disable drag detection in rearrange mode
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Update carousel options when rearrange mode changes
  useEffect(() => {
    if (emblaApi) {
      if (rearrangeMode) {
        // Disable carousel dragging in rearrange mode
        emblaApi.reInit({
          loop: false,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: false, // Disable drag free in rearrange mode
          skipSnaps: true, // Skip snaps in rearrange mode
          watchDrag: false, // Disable drag detection
        });
      } else {
        // Re-enable normal carousel behavior
        emblaApi.reInit({
          loop: false,
          align: "start",
          containScroll: "trimSnaps",
          dragFree: true,
          skipSnaps: false,
          watchDrag: true,
        });
      }
    }
  }, [rearrangeMode, emblaApi]);

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
        className={`overflow-hidden ${rearrangeMode ? 'pointer-events-none' : ''}`} 
        ref={emblaRef}
        style={rearrangeMode ? { touchAction: 'none' } : {}}
      >
        {rearrangeMode ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              items={galleryImages}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex gap-2 p-2 pointer-events-auto">
                {galleryImages.map((imageUrl, index) => (
                  <GalleryImage
                    key={imageUrl}
                    imageUrl={imageUrl}
                    index={index}
                    hotelName={hotelName}
                    isSelected={selectedIndex === index}
                    isInCard={isImageInCard(imageUrl)}
                    deleteMode={deleteMode}
                    rearrangeMode={rearrangeMode}
                    isSelectedForDeletion={selectedImagesToDelete.includes(imageUrl)}
                    onImageClick={onImageClick}
                    onImageSelectForDeletion={onImageSelectForDeletion}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        ) : (
          <div className="flex gap-2 p-2">
            {galleryImages.map((imageUrl, index) => (
              <GalleryImage
                key={index}
                imageUrl={imageUrl}
                index={index}
                hotelName={hotelName}
                isSelected={selectedIndex === index}
                isInCard={isImageInCard(imageUrl)}
                deleteMode={deleteMode}
                rearrangeMode={rearrangeMode}
                isSelectedForDeletion={selectedImagesToDelete.includes(imageUrl)}
                onImageClick={onImageClick}
                onImageSelectForDeletion={onImageSelectForDeletion}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
