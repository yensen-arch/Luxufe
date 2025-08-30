"use client";

interface GalleryFooterProps {
  selectedPosition: 'top' | 'left' | 'right' | 'hero';
  selectedIndex: number;
  galleryImagesLength: number;
  onSave?: () => void;
}

export default function GalleryFooter({
  selectedPosition,
  selectedIndex,
  galleryImagesLength,
  onSave
}: GalleryFooterProps) {
  const getPositionText = () => {
    if (selectedPosition === 'hero') {
      return 'Updating Hero Image';
    }
    return `Updating ${selectedPosition.charAt(0).toUpperCase() + selectedPosition.slice(1)} position`;
  };

  return (
    <div className="mt-3 px-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-600 font-inter font-bold">
          {getPositionText()}
        </span>
        {onSave && (
          <button
            onClick={onSave}
            className="px-3 py-1 bg-[#A5C8CE] text-white text-xs font-inter font-bold hover:bg-[#A5C8CE]/90 transition-colors"
          >
            {selectedPosition === 'hero' ? 'Save Hero Image' : 'Save'}
          </button>
        )}
      </div>
      
      {/* Image Counter */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500 font-inter">
          {selectedIndex + 1} of {galleryImagesLength} images
        </span>
      </div>
    </div>
  );
}
