"use client";
import { Move } from "lucide-react";

interface GalleryImageProps {
  imageUrl: string;
  index: number;
  hotelName: string;
  isSelected: boolean;
  isInCard: boolean;
  deleteMode: boolean;
  swapMode: boolean;
  isSelectedForDeletion: boolean;
  isSelectedForSwap: boolean;
  onImageClick: (imageUrl: string, index: number) => void;
  onImageSelectForDeletion: (imageUrl: string) => void;
  onImageSelectForSwap: (imageUrl: string, index: number) => void;
}

export default function GalleryImage({
  imageUrl,
  index,
  hotelName,
  isSelected,
  isInCard,
  deleteMode,
  swapMode,
  isSelectedForDeletion,
  isSelectedForSwap,
  onImageClick,
  onImageSelectForDeletion,
  onImageSelectForSwap
}: GalleryImageProps) {

  const getRingClasses = () => {
    if (isSelectedForSwap) return 'ring-2 ring-orange-500 ring-opacity-80';
    if (isSelected) return 'ring-2 ring-[#A5C8CE] ring-opacity-80';
    if (isInCard) return 'ring-2 ring-green-500 ring-opacity-80';
    return 'hover:ring-2 hover:ring-gray-300';
  };

  const getTransformClasses = () => {
    if (isSelectedForSwap) return 'transform rotate-3 scale-105';
    return '';
  };

  const handleClick = () => {
    if (swapMode) {
      onImageSelectForSwap(imageUrl, index);
    } else if (!deleteMode) {
      onImageClick(imageUrl, index);
    }
  };

  return (
    <div
      className={`flex-shrink-0 w-20 h-16 overflow-hidden transition-all duration-200 relative ${getRingClasses()} ${getTransformClasses()} ${swapMode ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {/* Delete Mode Checkbox */}
      {deleteMode && (
        <div className="absolute top-1 left-1 z-10">
          <input
            type="checkbox"
            checked={isSelectedForDeletion}
            onChange={() => onImageSelectForDeletion(imageUrl)}
            className="w-4 h-4 text-red-500 bg-white border-2 border-red-500 rounded focus:ring-red-500 focus:ring-2"
          />
        </div>
      )}
      
      {/* Delete Mode Overlay */}
      {deleteMode && isSelectedForDeletion && (
        <div className="absolute inset-0 bg-red-500 bg-opacity-30 z-5"></div>
      )}

      {/* Swap Mode Indicator */}
      {swapMode && isSelectedForSwap && (
        <div className="absolute top-1 right-1 bg-orange-500 text-white rounded-full p-1 z-20">
          <Move className="w-3 h-3" />
        </div>
      )}

      <img
        src={imageUrl}
        alt={`${hotelName} image ${index + 1}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=200&q=80";
        }}
      />
    </div>
  );
}
