"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import HotelGalleryStrip from "./HotelGalleryStrip";
import { getHotelCardImages, updateHotelCardImages } from "@/lib/database";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  hotelName: string;
  position: 'top' | 'left' | 'right';
  onClose: () => void;
}

export default function ImageModal({ imageUrl, imageAlt, hotelName, position, onClose }: ImageModalProps) {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [currentImageAlt, setCurrentImageAlt] = useState(imageAlt);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentCardImages, setCurrentCardImages] = useState<{
    top: string | null;
    left: string | null;
    right: string | null;
  }>({ top: null, left: null, right: null });
  const [saving, setSaving] = useState(false);

  // Fetch current card images on component mount
  useEffect(() => {
    const fetchCardImages = async () => {
      try {
        const cardImages = await getHotelCardImages(hotelName);
        if (cardImages) {
          setCurrentCardImages(cardImages);
        }
      } catch (error) {
        console.error('Error fetching card images:', error);
      }
    };

    fetchCardImages();
  }, [hotelName]);

  const handleImageSelect = (imageUrl: string, imageIndex: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageAlt(`${hotelName} image ${imageIndex + 1}`);
    setSelectedImageIndex(imageIndex);
  };

  const handleSave = async (cardImages: { top: string | null; left: string | null; right: string | null }) => {
    setSaving(true);
    try {
      const success = await updateHotelCardImages(hotelName, cardImages);
      if (success) {
        setCurrentCardImages(cardImages);
        // Show success feedback and close modal
        alert('Card images saved successfully! The brand card will now display your selected images.');
        onClose(); // Auto-close the modal after successful save
      } else {
        alert('Failed to save card images. Please try again.');
      }
    } catch (error) {
      console.error('Error saving card images:', error);
      alert('Error saving card images. Please try again.');
    } finally {
      setSaving(false);
    }
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
            onSave={handleSave}
            currentCardImages={currentCardImages}
            selectedPosition={position}
          />
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 font-inter">
              {saving ? 'Saving...' : 'Click Save in gallery strip to update brand card images'}
            </p>
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
