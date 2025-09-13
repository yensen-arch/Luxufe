"use client";
import { useCallback, useEffect, useState } from "react";
import { GalleryActions, GalleryCarousel } from './hotel-gallery';

interface RoomGalleryStripProps {
  roomName: string;
  hotelName: string;
  onImageSelect?: (imageUrl: string, imageIndex: number) => void;
  selectedImageIndex?: number;
  onSave?: (images: string[]) => void;
}

export default function RoomGalleryStrip({ 
  roomName, 
  hotelName,
  onImageSelect, 
  selectedImageIndex = 0,
  onSave
}: RoomGalleryStripProps) {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(selectedImageIndex);
  
  // Delete mode states
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedImagesToDelete, setSelectedImagesToDelete] = useState<string[]>([]);
  const [deleting, setDeleting] = useState(false);

  // Swap mode states
  const [swapMode, setSwapMode] = useState(false);
  const [swappedImages, setSwappedImages] = useState<string[]>([]);
  const [selectedImageForSwap, setSelectedImageForSwap] = useState<string | null>(null);
  const [savingOrder, setSavingOrder] = useState(false);

  // Fetch room gallery images
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const { getRoomGallery } = await import("@/lib/database");
        const images = await getRoomGallery(roomName, hotelName);
        setGalleryImages(images);
        setSelectedIndex(selectedImageIndex);
      } catch (error) {
        console.error('Error fetching room gallery:', error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    };

    if (roomName && hotelName) {
      fetchGallery();
    }
  }, [roomName, hotelName, selectedImageIndex]);

  // Update carousel options when swap mode changes
  useEffect(() => {
    if (swapMode) {
      setSwappedImages([...galleryImages]);
    }
  }, [swapMode, galleryImages]);

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedIndex(index);
    if (onImageSelect) {
      onImageSelect(imageUrl, index);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(galleryImages);
    }
  };

  // Check if an image is currently used (for room gallery, we don't have card images)
  const isImageInCard = (imageUrl: string) => {
    return false; // Room gallery doesn't have card images like hotel gallery
  };

  // Toggle delete mode
  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
    if (deleteMode) {
      setSelectedImagesToDelete([]);
    }
  };

  // Handle image selection for deletion
  const handleImageSelectForDeletion = (imageUrl: string) => {
    setSelectedImagesToDelete(prev => {
      if (prev.includes(imageUrl)) {
        return prev.filter(url => url !== imageUrl);
      } else {
        return [...prev, imageUrl];
      }
    });
  };

  // Handle image deletion
  const handleDeleteImages = async () => {
    if (selectedImagesToDelete.length === 0) return;

    let warningMessage = `Are you sure you want to permanently delete ${selectedImagesToDelete.length} image${selectedImagesToDelete.length > 1 ? 's' : ''} from the room gallery? This action cannot be undone.`;
    
    if (!confirm(warningMessage)) return;

    setDeleting(true);
    try {
      const { deleteRoomImages } = await import("@/lib/database");
      const success = await deleteRoomImages(roomName, hotelName, selectedImagesToDelete);
      
      if (success) {
        setGalleryImages(prev => prev.filter(url => !selectedImagesToDelete.includes(url)));
        setSelectedImagesToDelete([]);
        setDeleteMode(false);
        alert('Images deleted successfully!');
      } else {
        alert('Failed to delete images. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting images:', error);
      alert('Error deleting images. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  // Toggle swap mode
  const toggleSwapMode = () => {
    if (swapMode) {
      setSwappedImages([]);
      setSelectedImageForSwap(null);
      setSwapMode(false);
    } else {
      setSwappedImages([...galleryImages]);
      setSelectedImageForSwap(null);
      setSwapMode(true);
      if (deleteMode) {
        setDeleteMode(false);
        setSelectedImagesToDelete([]);
      }
    }
  };

  // Handle image selection for swap
  const handleImageSelectForSwap = (imageUrl: string, index: number) => {
    if (!selectedImageForSwap) {
      // First selection
      setSelectedImageForSwap(imageUrl);
    } else if (selectedImageForSwap === imageUrl) {
      // Deselect if clicking the same image
      setSelectedImageForSwap(null);
    } else {
      // Second selection - perform swap
      const firstIndex = swappedImages.findIndex(url => url === selectedImageForSwap);
      const secondIndex = swappedImages.findIndex(url => url === imageUrl);
      
      if (firstIndex !== -1 && secondIndex !== -1) {
        const newImages = [...swappedImages];
        // Swap the images
        [newImages[firstIndex], newImages[secondIndex]] = [newImages[secondIndex], newImages[firstIndex]];
        setSwappedImages(newImages);
      }
      
      // Reset selection
      setSelectedImageForSwap(null);
    }
  };

  // Save swapped order
  const handleSaveOrder = async () => {
    if (swappedImages.length === 0) return;

    setSavingOrder(true);
    try {
      const { updateRoomGalleryOrder } = await import("@/lib/database");
      const success = await updateRoomGalleryOrder(roomName, hotelName, swappedImages);
      
      if (success) {
        setGalleryImages(swappedImages);
        setSwapMode(false);
        setSwappedImages([]);
        setSelectedImageForSwap(null);
        alert('Room gallery order saved successfully!');
      } else {
        alert('Failed to save room gallery order. Please try again.');
      }
    } catch (error) {
      console.error('Error saving room gallery order:', error);
      alert('Error saving room gallery order. Please try again.');
    } finally {
      setSavingOrder(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-20 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">Loading room gallery...</div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="w-full h-20 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">No images available for this room</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Action Controls */}
      <GalleryActions
        swapMode={swapMode}
        deleteMode={deleteMode}
        savingOrder={savingOrder}
        deleting={deleting}
        selectedImagesToDelete={selectedImagesToDelete}
        onToggleSwap={toggleSwapMode}
        onToggleDelete={toggleDeleteMode}
        onSaveOrder={handleSaveOrder}
        onDeleteImages={handleDeleteImages}
      />

      {/* Gallery Carousel */}
      <GalleryCarousel
        galleryImages={swapMode ? swappedImages : galleryImages}
        hotelName={roomName} // Use room name for display
        selectedIndex={selectedIndex}
        deleteMode={deleteMode}
        swapMode={swapMode}
        selectedImagesToDelete={selectedImagesToDelete}
        selectedImageForSwap={selectedImageForSwap}
        isImageInCard={isImageInCard}
        onImageClick={handleImageClick}
        onImageSelectForDeletion={handleImageSelectForDeletion}
        onImageSelectForSwap={handleImageSelectForSwap}
      />
    </div>
  );
}
