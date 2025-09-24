"use client";
import { useState, useRef, useEffect } from "react";
import { X, Upload, Link, Crop, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";
import ImageCropModal from "./ImageCropModal";
import BrandGalleryGrid from "./BrandGalleryGrid";

interface Brand {
  id: string;
  name: string;
  description?: string;
  brand_image?: string;
}

interface BrandImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: Brand;
  onImageUpdate: (imageUrl: string) => void;
}

export default function BrandImageModal({ isOpen, onClose, brand, onImageUpdate }: BrandImageModalProps) {
  const [activeTab, setActiveTab] = useState<'url' | 'upload'>('url');
  const [imageUrl, setImageUrl] = useState(brand.brand_image || '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showCropExistingModal, setShowCropExistingModal] = useState(false);
  const [showGalleryGrid, setShowGalleryGrid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset imageUrl when brand changes
  useEffect(() => {
    setImageUrl(brand.brand_image || '');
    setActiveTab('url');
    setShowGalleryGrid(false);
    setShowCropModal(false);
    setShowCropExistingModal(false);
    setSelectedFile(null);
  }, [brand.id, brand.brand_image]);

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setImageUrl(brand.brand_image || '');
      setActiveTab('url');
      setShowGalleryGrid(false);
      setShowCropModal(false);
      setShowCropExistingModal(false);
      setSelectedFile(null);
      setSaving(false);
      setUploading(false);
    }
  }, [isOpen, brand.brand_image]);

  const handleSaveUrl = async () => {
    if (!imageUrl.trim()) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('brands')
        .update({ brand_image: imageUrl.trim() })
        .eq('id', brand.id);

      if (error) {
        console.error('Error updating brand image:', error);
        alert('Failed to update brand image. Please try again.');
        return;
      }

      onImageUpdate(imageUrl.trim());
      onClose();
      alert('Brand hero image updated successfully!');
    } catch (error) {
      console.error('Error updating brand image:', error);
      alert('Error updating brand image. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.');
      return;
    }

    // Set the selected file and show crop modal
    setSelectedFile(file);
    setShowCropModal(true);
  };

  const handleCroppedImageUploaded = async (imageUrl: string) => {
    try {
      // Update brand record with new image URL
      const { error: updateError } = await supabase
        .from('brands')
        .update({ brand_image: imageUrl })
        .eq('id', brand.id);

      if (updateError) {
        console.error('Error updating brand image:', updateError);
        alert('Failed to update brand image. Please try again.');
        return;
      }

      onImageUpdate(imageUrl);
      onClose();
      alert('Brand hero image uploaded successfully!');
    } catch (error) {
      console.error('Error updating brand image:', error);
      alert('Error updating brand image. Please try again.');
    }
  };

  const handleRemoveImage = async () => {
    if (!brand.brand_image) return;
    
    if (!confirm('Are you sure you want to remove the brand hero image?')) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('brands')
        .update({ brand_image: null })
        .eq('id', brand.id);

      if (error) {
        console.error('Error removing brand image:', error);
        alert('Failed to remove brand image. Please try again.');
        return;
      }

      onImageUpdate('');
      onClose();
      alert('Brand hero image removed successfully!');
    } catch (error) {
      console.error('Error removing brand image:', error);
      alert('Error removing brand image. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleCropExistingImage = async () => {
    if (!brand.brand_image) return;
    
    try {
      // Fetch the existing image as a blob
      const response = await fetch(brand.brand_image);
      const blob = await response.blob();
      
      // Create a File object from the blob
      const file = new File([blob], 'existing-image.jpg', { type: blob.type });
      
      // Set the file and show crop modal
      setSelectedFile(file);
      setShowCropExistingModal(true);
    } catch (error) {
      console.error('Error loading existing image for cropping:', error);
      alert('Error loading existing image. Please try again.');
    }
  };

  const handleGalleryImageSelect = async (imageUrl: string) => {
    try {
      // Set the selected image URL
      setImageUrl(imageUrl);
      setActiveTab('url');
      setShowGalleryGrid(false);
      
      // No need for alert - the preview will show the selected image
    } catch (error) {
      console.error('Error selecting gallery image:', error);
      alert('Error selecting image. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className={`relative max-w-md w-full bg-white shadow-2xl transition-all duration-300 ${
        showGalleryGrid ? 'mr-96' : ''
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-arpona font-bold text-gray-900">
            Edit Brand Hero Image
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors rounded-full"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Current Image Preview with Crop Button */}
          {brand.brand_image && !imageUrl && (
            <div className="mb-6">
              <div className="relative w-full h-48 bg-gray-100 border border-gray-200 overflow-hidden">
                <img
                  src={brand.brand_image}
                  alt={`${brand.name} hero image`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleCropExistingImage}
                  className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs font-inter font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                >
                  <Crop className="w-3 h-3" />
                  Crop
                </button>
              </div>
            </div>
          )}

          {/* Selected Image Preview (from gallery or URL) */}
          {imageUrl && (
            <div className="mb-6">
              <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                Selected Image Preview
              </label>
              <div className="relative w-full h-48 bg-gray-100 border border-gray-200 overflow-hidden">
                <img
                  src={imageUrl}
                  alt="Selected image preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm bg-gray-100" style={{display: 'none'}}>
                  Invalid image URL
                </div>
                <button
                  onClick={async () => {
                    try {
                      // Fetch the image as a blob
                      const response = await fetch(imageUrl);
                      const blob = await response.blob();
                      
                      // Create a File object from the blob
                      const file = new File([blob], 'selected-image.jpg', { type: blob.type });
                      
                      // Set the file and show crop modal
                      setSelectedFile(file);
                      setShowCropModal(true);
                    } catch (error) {
                      console.error('Error loading selected image for cropping:', error);
                      alert('Error loading image for cropping. Please try again.');
                    }
                  }}
                  className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-xs font-inter font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                >
                  <Crop className="w-3 h-3" />
                  Crop
                </button>
              </div>
            </div>
          )}

          {/* Options */}
          <div className="space-y-4">
            {/* Image URL Option */}
            <div>
              <button
                onClick={() => setActiveTab('url')}
                className={`w-full py-3 px-4 text-sm font-inter font-bold transition-colors ${
                  activeTab === 'url'
                    ? 'bg-[#A5C8CE] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Link className="w-4 h-4 inline mr-2" />
                Image URL
              </button>
              
              {activeTab === 'url' && (
                <div className="mt-3">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                  />
                </div>
              )}
            </div>

            {/* Upload File Option */}
            <div>
              <button
                onClick={() => setActiveTab('upload')}
                className={`w-full py-3 px-4 text-sm font-inter font-bold transition-colors ${
                  activeTab === 'upload'
                    ? 'bg-[#A5C8CE] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Upload className="w-4 h-4 inline mr-2" />
                Upload File
              </button>
              
              {activeTab === 'upload' && (
                <div className="mt-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full py-3 border-2 border-dashed border-gray-300 hover:border-[#A5C8CE] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Click to select image file
                    </span>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Supported formats: JPG, PNG, GIF. Max size: 5MB
                  </p>
                </div>
              )}
            </div>

            {/* Upload from Brand Gallery Option */}
            <div>
              <button
                onClick={() => setShowGalleryGrid(true)}
                className="w-full py-3 px-4 text-sm font-inter font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ImageIcon className="w-4 h-4 inline mr-2" />
                Upload from Brand Gallery
              </button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 text-sm font-inter font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            <button
              onClick={imageUrl.trim() ? handleSaveUrl : undefined}
              disabled={!imageUrl.trim() || saving}
              className="flex-1 px-4 py-2 text-sm font-inter font-bold text-white bg-[#A5C8CE] hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            </div>
            
            {/* Remove Current Image Button */}
            {brand.brand_image && (
              <button
                onClick={handleRemoveImage}
                disabled={saving}
                className="w-full mt-3 px-4 py-2 text-sm font-inter font-bold text-white bg-red-500 hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Removing...' : 'Remove Image'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Image Crop Modal for new uploads */}
      {selectedFile && showCropModal && (
        <ImageCropModal
          isOpen={showCropModal}
          onClose={() => {
            setShowCropModal(false);
            setSelectedFile(null);
          }}
          imageFile={selectedFile}
          onImageUploaded={handleCroppedImageUploaded}
          aspectRatio={16 / 9} // Hero image aspect ratio
          currentImageUrl={brand.brand_image} // Pass current image URL for deletion
        />
      )}

      {/* Image Crop Modal for existing images */}
      {selectedFile && showCropExistingModal && (
        <ImageCropModal
          isOpen={showCropExistingModal}
          onClose={() => {
            setShowCropExistingModal(false);
            setSelectedFile(null);
          }}
          imageFile={selectedFile}
          onImageUploaded={handleCroppedImageUploaded}
          aspectRatio={16 / 9} // Hero image aspect ratio
          currentImageUrl={brand.brand_image} // Pass current image URL for deletion
        />
      )}

      {/* Brand Gallery Grid */}
      {showGalleryGrid && (
        <BrandGalleryGrid
          brandName={brand.name}
          onImageSelect={handleGalleryImageSelect}
          onClose={() => setShowGalleryGrid(false)}
        />
      )}
    </div>
  );
}
