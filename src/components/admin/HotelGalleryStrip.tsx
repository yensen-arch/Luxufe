"use client";
import { useCallback, useEffect, useState } from "react";
import { GalleryActions, GalleryCarousel, GalleryFooter } from './hotel-gallery';

interface HotelGalleryStripProps {
  hotelName: string;
  onImageSelect?: (imageUrl: string, imageIndex: number) => void;
  selectedImageIndex?: number;
  onSave?: (cardImages: { top: string | null; left: string | null; right: string | null } | string) => void;
  currentCardImages?: { top: string | null; left: string | null; right: string | null };
  selectedPosition?: 'top' | 'left' | 'right' | 'hero';
}

export default function HotelGalleryStrip({ 
  hotelName, 
  onImageSelect, 
  selectedImageIndex = 0,
  onSave,
  currentCardImages,
  selectedPosition = 'top'
}: HotelGalleryStripProps) {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(selectedImageIndex);
  const [cardImages, setCardImages] = useState<{
    top: string | null;
    left: string | null;
    right: string | null;
  }>(currentCardImages || { top: null, left: null, right: null });
  
  // Delete mode states
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedImagesToDelete, setSelectedImagesToDelete] = useState<string[]>([]);
  const [deleting, setDeleting] = useState(false);

  // Swap mode states
  const [swapMode, setSwapMode] = useState(false);
  const [swappedImages, setSwappedImages] = useState<string[]>([]);
  const [selectedImageForSwap, setSelectedImageForSwap] = useState<string | null>(null);
  const [savingOrder, setSavingOrder] = useState(false);

  // Fetch gallery images
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const { getHotelGallery } = await import("@/lib/database");
        const images = await getHotelGallery(hotelName);
        setGalleryImages(images);
        setSelectedIndex(selectedImageIndex);
      } catch (error) {
        console.error('Error fetching hotel gallery:', error);
        setGalleryImages([]);
      } finally {
        setLoading(false);
      }
    };

    if (hotelName) {
      fetchGallery();
    }
  }, [hotelName, selectedImageIndex]);

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
      if (selectedPosition === 'hero') {
        onSave(galleryImages[selectedIndex]);
      } else {
        const updatedCardImages = { ...cardImages };
        updatedCardImages[selectedPosition] = galleryImages[selectedIndex];
        onSave(updatedCardImages);
      }
    }
  };

  // Check if an image is currently used in the brand card
  const isImageInCard = (imageUrl: string) => {
    return cardImages.top === imageUrl || cardImages.left === imageUrl || cardImages.right === imageUrl;
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

    const imagesInUse = selectedImagesToDelete.filter(url => isImageInCard(url));
    let warningMessage = `Are you sure you want to permanently delete ${selectedImagesToDelete.length} image${selectedImagesToDelete.length > 1 ? 's' : ''} from the database? This action cannot be undone.`;
    
    if (imagesInUse.length > 0) {
      warningMessage += `\n\n⚠️ WARNING: ${imagesInUse.length} of the selected image${imagesInUse.length > 1 ? 's are' : ' is'} currently being used in the brand card. Deleting them will remove them from the card display.`;
    }
    
    if (!confirm(warningMessage)) return;

    setDeleting(true);
    try {
      const { deleteHotelImages } = await import("@/lib/database");
      const success = await deleteHotelImages(hotelName, selectedImagesToDelete);
      
      if (success) {
        setGalleryImages(prev => prev.filter(url => !selectedImagesToDelete.includes(url)));
        setSelectedImagesToDelete([]);
        setDeleteMode(false);
        
        if (imagesInUse.length > 0) {
          alert(`Images deleted successfully! ${imagesInUse.length} image${imagesInUse.length > 1 ? 's were' : ' was'} removed from the brand card display.`);
        } else {
          alert('Images deleted successfully!');
        }
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
      const { updateHotelGalleryOrder } = await import("@/lib/database");
      const success = await updateHotelGalleryOrder(hotelName, swappedImages);
      
      if (success) {
        setGalleryImages(swappedImages);
        setSwapMode(false);
        setSwappedImages([]);
        setSelectedImageForSwap(null);
        alert('Gallery order saved successfully!');
      } else {
        alert('Failed to save gallery order. Please try again.');
      }
    } catch (error) {
      console.error('Error saving gallery order:', error);
      alert('Error saving gallery order. Please try again.');
    } finally {
      setSavingOrder(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-20 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">Loading gallery...</div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="w-full h-20 bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-sm text-gray-500 font-inter">No images available</div>
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
        hotelName={hotelName}
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

      {/* Footer with Save and Counter */}
      <GalleryFooter
        selectedPosition={selectedPosition}
        selectedIndex={selectedIndex}
        galleryImagesLength={galleryImages.length}
        onSave={handleSave}
      />
    </div>
  );
}
