"use client";
import { useCallback, useEffect, useState } from "react";
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { GalleryActions, GalleryCarousel, GalleryFooter } from './hotel-gallery';

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

  // Rearrange mode states
  const [rearrangeMode, setRearrangeMode] = useState(false);
  const [rearrangedImages, setRearrangedImages] = useState<string[]>([]);
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

  // Update carousel options when rearrange mode changes
  useEffect(() => {
    if (rearrangeMode) {
      setRearrangedImages([...galleryImages]);
    }
  }, [rearrangeMode, galleryImages]);

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

  // Toggle rearrange mode
  const toggleRearrangeMode = () => {
    if (rearrangeMode) {
      setRearrangedImages([]);
      setRearrangeMode(false);
    } else {
      setRearrangedImages([...galleryImages]);
      setRearrangeMode(true);
      if (deleteMode) {
        setDeleteMode(false);
        setSelectedImagesToDelete([]);
      }
    }
  };

  // Handle drag end for rearrange
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setRearrangedImages((items) => {
        const oldIndex = items.findIndex(item => item === active.id);
        const newIndex = items.findIndex(item => item === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Save rearranged order
  const handleSaveOrder = async () => {
    if (rearrangedImages.length === 0) return;

    setSavingOrder(true);
    try {
      const { updateRoomGalleryOrder } = await import("@/lib/database");
      const success = await updateRoomGalleryOrder(roomName, hotelName, rearrangedImages);
      
      if (success) {
        setGalleryImages(rearrangedImages);
        setRearrangeMode(false);
        setRearrangedImages([]);
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
        rearrangeMode={rearrangeMode}
        deleteMode={deleteMode}
        savingOrder={savingOrder}
        deleting={deleting}
        selectedImagesToDelete={selectedImagesToDelete}
        onToggleRearrange={toggleRearrangeMode}
        onToggleDelete={toggleDeleteMode}
        onSaveOrder={handleSaveOrder}
        onDeleteImages={handleDeleteImages}
      />

      {/* Gallery Carousel */}
      <GalleryCarousel
        galleryImages={rearrangeMode ? rearrangedImages : galleryImages}
        hotelName={roomName} // Use room name for display
        selectedIndex={selectedIndex}
        deleteMode={deleteMode}
        rearrangeMode={rearrangeMode}
        selectedImagesToDelete={selectedImagesToDelete}
        isImageInCard={isImageInCard}
        onImageClick={handleImageClick}
        onImageSelectForDeletion={handleImageSelectForDeletion}
        onDragEnd={handleDragEnd}
      />

      {/* Footer with Save and Counter */}
      <GalleryFooter
        selectedPosition="hero" // Use hero for room gallery
        selectedIndex={selectedIndex}
        galleryImagesLength={galleryImages.length}
        onSave={handleSave}
      />
    </div>
  );
}
