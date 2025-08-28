"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import HotelGalleryStrip from "./HotelGalleryStrip";
import { getHotelCardImages, updateHotelCardImages, getHotelHeroImage, updateHotelHeroImage } from "@/lib/database";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  hotelName: string;
  position: 'top' | 'left' | 'right' | 'hero';
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

  // Fetch current card images or hero image on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (position === 'hero') {
          // Fetch current hero image
          const heroImage = await getHotelHeroImage(hotelName);
          if (heroImage) {
            setCurrentImageUrl(heroImage);
            setCurrentImageAlt(`${hotelName} hero image`);
          } else {
            // If no hero image exists, fetch the first image from gallery
            const { getHotelGallery } = await import("@/lib/database");
            const galleryImages = await getHotelGallery(hotelName);
            if (galleryImages.length > 0) {
              setCurrentImageUrl(galleryImages[0]);
              setCurrentImageAlt(`${hotelName} hero image (from gallery)`);
            }
          }
        } else {
          // Fetch current card images
          const cardImages = await getHotelCardImages(hotelName);
          if (cardImages) {
            setCurrentCardImages(cardImages);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [hotelName, position]);

  const handleImageSelect = (imageUrl: string, imageIndex: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageAlt(`${hotelName} image ${imageIndex + 1}`);
    setSelectedImageIndex(imageIndex);
  };

  const handleSave = async (cardImages: { top: string | null; left: string | null; right: string | null } | string) => {
    setSaving(true);
    try {
      let success = false;
      
      if (position === 'hero') {
        // Handle hero image save
        const heroImageUrl = cardImages as string;
        success = await updateHotelHeroImage(hotelName, heroImageUrl);
        if (success) {
          alert('Hero image saved successfully! The hotel page will now display your selected hero image.');
        } else {
          alert('Failed to save hero image. Please try again.');
        }
      } else {
        // Handle card images save
        const cardImagesData = cardImages as { top: string | null; left: string | null; right: string | null };
        success = await updateHotelCardImages(hotelName, cardImagesData);
        if (success) {
          setCurrentCardImages(cardImagesData);
          alert('Card images saved successfully! The brand card will now display your selected images.');
        } else {
          alert('Failed to save card images. Please try again.');
        }
      }
      
      if (success) {
        onClose(); // Auto-close the modal after successful save
      }
    } catch (error) {
      console.error('Error saving images:', error);
      alert('Error saving images. Please try again.');
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
      </div>
    </div>
  );
}
