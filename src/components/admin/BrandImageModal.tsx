"use client";
import { useState, useRef } from "react";
import { X, Upload, Link } from "lucide-react";
import { supabase } from "@/lib/supabase";
import ImageCropModal from "./ImageCropModal";

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
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full bg-white rounded-lg shadow-2xl">
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
          {/* Current Image Preview */}
          {brand.brand_image && (
            <div className="mb-6">
              <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                Current Image
              </label>
              <div className="relative w-full h-32 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={brand.brand_image}
                  alt={`${brand.name} hero image`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex mb-4">
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-2 px-4 text-sm font-inter font-bold transition-colors ${
                activeTab === 'url'
                  ? 'bg-[#A5C8CE] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Link className="w-4 h-4 inline mr-2" />
              Image URL
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-2 px-4 text-sm font-inter font-bold transition-colors ${
                activeTab === 'upload'
                  ? 'bg-[#A5C8CE] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Upload File
            </button>
          </div>

          {/* URL Tab */}
          {activeTab === 'url' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#A5C8CE] focus:border-transparent"
                />
              </div>
              
              {imageUrl && (
                <div>
                  <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className="w-full h-32 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm" style={{display: 'none'}}>
                      Invalid image URL
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleSaveUrl}
                  disabled={!imageUrl.trim() || saving}
                  className="flex-1 px-4 py-2 bg-[#A5C8CE] text-white hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Saving...' : 'Save URL'}
                </button>
                {brand.brand_image && (
                  <button
                    onClick={handleRemoveImage}
                    disabled={saving}
                    className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-inter font-bold text-gray-700 mb-2">
                  Choose Image File
                </label>
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

              {brand.brand_image && (
                <button
                  onClick={handleRemoveImage}
                  disabled={uploading || saving}
                  className="w-full px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Removing...' : 'Remove Current Image'}
                </button>
              )}
            </div>
          )}
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
          aspectRatio={16 / 9} // Hero image aspect ratio
          currentImageUrl={brand.brand_image} // Pass current image URL for deletion
        />
      )}
    </div>
  );
}
