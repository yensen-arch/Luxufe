"use client";
import { Move } from "lucide-react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface GalleryImageProps {
  imageUrl: string;
  index: number;
  hotelName: string;
  isSelected: boolean;
  isInCard: boolean;
  deleteMode: boolean;
  rearrangeMode: boolean;
  isSelectedForDeletion: boolean;
  onImageClick: (imageUrl: string, index: number) => void;
  onImageSelectForDeletion: (imageUrl: string) => void;
}

export default function GalleryImage({
  imageUrl,
  index,
  hotelName,
  isSelected,
  isInCard,
  deleteMode,
  rearrangeMode,
  isSelectedForDeletion,
  onImageClick,
  onImageSelectForDeletion
}: GalleryImageProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: imageUrl });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getRingClasses = () => {
    if (isSelected) return 'ring-2 ring-[#A5C8CE] ring-opacity-80';
    if (isInCard) return 'ring-2 ring-green-500 ring-opacity-80';
    return 'hover:ring-2 hover:ring-gray-300';
  };

  const handleClick = () => {
    if (!deleteMode) {
      onImageClick(imageUrl, index);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex-shrink-0 w-20 h-16 overflow-hidden transition-all duration-200 relative ${getRingClasses()}`}
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

      {/* Rearrange Mode Drag Handle */}
      {rearrangeMode && (
        <div 
          {...attributes}
          {...listeners}
          className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 cursor-move hover:bg-opacity-100 transition-all"
        >
          <Move className="w-3 h-3 text-gray-600" />
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
