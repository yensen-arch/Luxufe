"use client";
import { useState, useEffect } from "react";
import { X, Crop } from "lucide-react";
import HotelGalleryStrip from "./HotelGalleryStrip";
import ImageCropModal from "./ImageCropModal";
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
  const [loading, setLoading] = useState(true);
  const [showCropModal, setShowCropModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fetch current card images or hero image on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hotelName, position]);

  const handleImageSelect = (imageUrl: string, imageIndex: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageAlt(`${hotelName} image ${imageIndex + 1}`);
    setSelectedImageIndex(imageIndex);
  };

  const handleCropImage = async () => {
    if (!currentImageUrl) return;
    
    try {
      // Fetch the current image as a blob
      const response = await fetch(currentImageUrl);
      const blob = await response.blob();
      
      // Create a File object from the blob
      const file = new File([blob], 'hotel-image.jpg', { type: blob.type });
      
      // Set the file and show crop modal
      setSelectedFile(file);
      setShowCropModal(true);
    } catch (error) {
      console.error('Error loading image for cropping:', error);
      alert('Error loading image for cropping. Please try again.');
    }
  };

  const handleCroppedImageUploaded = async (imageUrl: string) => {
    try {
      // Update the current image URL with the cropped version
      setCurrentImageUrl(imageUrl);
      
      // Auto-save the cropped image
      if (position === 'hero') {
        const success = await updateHotelHeroImage(hotelName, imageUrl);
        if (success) {
          alert('Hero image cropped and saved successfully!');
          onClose();
        } else {
          alert('Failed to save cropped hero image. Please try again.');
        }
      } else {
        const updatedCardImages = { ...currentCardImages };
        updatedCardImages[position] = imageUrl;
        const success = await updateHotelCardImages(hotelName, updatedCardImages);
        if (success) {
          setCurrentCardImages(updatedCardImages);
          alert('Card image cropped and saved successfully!');
          onClose();
        } else {
          alert('Failed to save cropped card image. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error saving cropped image:', error);
      alert('Error saving cropped image. Please try again.');
    }
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
          // Fetch the latest card images from database to get the merged result
          const latestCardImages = await getHotelCardImages(hotelName);
          if (latestCardImages) {
            setCurrentCardImages(latestCardImages);
          } else {
            setCurrentCardImages(cardImagesData);
          }
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
          {loading ? (
            <div className="w-full h-[50vh] bg-gray-100 animate-pulse flex items-center justify-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 border-4 border-[#A5C8CE] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm text-gray-600 font-inter">Loading image...</span>
              </div>
            </div>
          ) : (
            <div className="relative">
              <img
                src={currentImageUrl}
                alt={currentImageAlt}
                className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <button
                onClick={handleCropImage}
                className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs font-inter font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
              >
                <Crop className="w-3 h-3" />
                Crop
              </button>
            </div>
          )}
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

      {/* Image Crop Modal */}
      {selectedFile && (
        <ImageCropModal
          isOpen={showCropModal}
          onClose={() => {
            setShowCropModal(false);
            setSelectedFile(null);
          }}
          imageFile={selectedFile}
          onImageUploaded={handleCroppedImageUploaded}
          aspectRatio={position === 'hero' ? 16 / 9 : 1} // Hero images are 16:9, card images are square
          currentImageUrl={currentImageUrl}
          bucketName="hotel_images"
          fileNamePrefix={position === 'hero' ? `hotel-hero-${hotelName.replace(/\s+/g, '-')}` : `hotel-card-${hotelName.replace(/\s+/g, '-')}-${position}`}
        />
      )}
    </div>
  );
}
