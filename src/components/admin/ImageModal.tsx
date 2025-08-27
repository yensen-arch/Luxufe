"use client";
import { useState } from "react";
import { X } from "lucide-react";
import HotelGalleryStrip from "./HotelGalleryStrip";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  hotelName: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, imageAlt, hotelName, onClose }: ImageModalProps) {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [currentImageAlt, setCurrentImageAlt] = useState(imageAlt);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageSelect = (imageUrl: string, imageIndex: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageAlt(`${hotelName} image ${imageIndex + 1}`);
    setSelectedImageIndex(imageIndex);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] bg-white overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-arpona font-bold text-gray-900">
            {hotelName} - {currentImageAlt}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Main Image */}
        <div className="relative p-4">
          <img
            src={currentImageUrl}
            alt={currentImageAlt}
            className="w-full h-auto max-h-[50vh] object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>

        {/* Gallery Strip */}
        <div className="p-4 border-t border-gray-200">
          <HotelGalleryStrip
            hotelName={hotelName}
            onImageSelect={handleImageSelect}
            selectedImageIndex={selectedImageIndex}
          />
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#A5C8CE] text-white font-inter font-bold hover:bg-[#A5C8CE]/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
