"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import RoomSelectionModal from "./RoomSelectionModal";
import RoomGalleryStrip from "./RoomGalleryStrip";

interface RoomImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
}

export default function RoomImageModal({ isOpen, onClose, hotelName }: RoomImageModalProps) {
  const [currentView, setCurrentView] = useState<'selection' | 'gallery'>('selection');
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [currentImageAlt, setCurrentImageAlt] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentView('selection');
      setSelectedRoom('');
      setCurrentImageUrl('');
      setCurrentImageAlt('');
      setSelectedImageIndex(0);
    }
  }, [isOpen]);

  const handleRoomSelect = (roomName: string) => {
    setSelectedRoom(roomName);
    setCurrentView('gallery');
    setCurrentImageAlt(`${roomName} room images`);
  };

  const handleImageSelect = (imageUrl: string, imageIndex: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageAlt(`${selectedRoom} image ${imageIndex + 1}`);
    setSelectedImageIndex(imageIndex);
  };

  const handleBackToSelection = () => {
    setCurrentView('selection');
    setSelectedRoom('');
    setCurrentImageUrl('');
    setCurrentImageAlt('');
    setSelectedImageIndex(0);
  };

  const handleClose = () => {
    setCurrentView('selection');
    setSelectedRoom('');
    setCurrentImageUrl('');
    setCurrentImageAlt('');
    setSelectedImageIndex(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] bg-white overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            {currentView === 'gallery' && (
              <button
                onClick={handleBackToSelection}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Back to Rooms
              </button>
            )}
            <h3 className="text-lg font-arpona font-bold text-gray-900">
              {currentView === 'selection' 
                ? `Manage Room Images - ${hotelName}`
                : `${selectedRoom} - ${currentImageAlt}`
              }
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        {/* Main Content */}
        <div className="relative p-4">
          {currentView === 'selection' ? (
            <RoomSelectionModal
              isOpen={true}
              onClose={handleClose} // Close the main modal when room selection modal closes
              hotelName={hotelName}
              onRoomSelect={handleRoomSelect}
            />
          ) : (
            <div className="space-y-4">
              {/* Main Image Display */}
              <div className="relative">
                {currentImageUrl ? (
                  <img
                    src={currentImageUrl}
                    alt={currentImageAlt}
                    className="w-full h-auto max-h-[50vh] object-contain mx-auto"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                ) : (
                  <div className="w-full h-[50vh] bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 font-inter">Select an image to view</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Room Gallery Strip */}
              <div className="border-t border-gray-200 pt-4">
                <RoomGalleryStrip
                  roomName={selectedRoom}
                  hotelName={hotelName}
                  onImageSelect={handleImageSelect}
                  selectedImageIndex={selectedImageIndex}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
