"use client";
import { useState } from "react";
import { X, Upload, Check, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface GalleryUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageFiles: File[];
  onImagesUploaded: (imageUrls: string[]) => void;
  bucketName: string;
  fileNamePrefix: string;
}

export default function GalleryUploadModal({
  isOpen,
  onClose,
  imageFiles,
  onImagesUploaded,
  bucketName,
  fileNamePrefix
}: GalleryUploadModalProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleUpload = async () => {
    setUploading(true);
    setUploadProgress({});
    setUploadedUrls([]);
    setErrors([]);

    const urls: string[] = [];
    const errorMessages: string[] = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const fileName = `${fileNamePrefix}-${Date.now()}-${i}.jpg`;
      
      try {
        setUploadProgress(prev => ({ ...prev, [fileName]: 0 }));

        // Convert file to blob and compress if needed
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            // Calculate new dimensions (max 1920px width, maintain aspect ratio)
            const maxWidth = 1920;
            const maxHeight = 1080;
            let { width, height } = img;
            
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
            
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            // Draw and compress
            ctx?.drawImage(img, 0, 0, width, height);
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to compress image'));
              }
            }, 'image/jpeg', 0.8); // 80% quality
          };
          
          img.onerror = () => reject(new Error('Failed to load image'));
          img.src = URL.createObjectURL(file);
        });

        const compressedBlob = await new Promise<Blob>((resolve, reject) => {
          img.onload = () => {
            const maxWidth = 1920;
            const maxHeight = 1080;
            let { width, height } = img;
            
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
            
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            ctx?.drawImage(img, 0, 0, width, height);
            canvas.toBlob((blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to compress image'));
              }
            }, 'image/jpeg', 0.8);
          };
          
          img.onerror = () => reject(new Error('Failed to load image'));
          img.src = URL.createObjectURL(file);
        });

        setUploadProgress(prev => ({ ...prev, [fileName]: 50 }));

        // Upload to Supabase storage
        const { data, error } = await supabase.storage
          .from(bucketName)
          .upload(fileName, compressedBlob, {
            contentType: 'image/jpeg',
            upsert: false
          });

        if (error) {
          throw error;
        }

        setUploadProgress(prev => ({ ...prev, [fileName]: 100 }));

        // Get public URL
        const { data: urlData } = supabase.storage
          .from(bucketName)
          .getPublicUrl(fileName);

        urls.push(urlData.publicUrl);
        setUploadedUrls(prev => [...prev, urlData.publicUrl]);

      } catch (error) {
        console.error(`Error uploading ${file.name}:`, error);
        errorMessages.push(`Failed to upload ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        setErrors(prev => [...prev, `Failed to upload ${file.name}`]);
      }
    }

    setUploading(false);

    if (urls.length > 0) {
      onImagesUploaded(urls);
    }

    if (errorMessages.length > 0) {
      alert(`Upload completed with ${errorMessages.length} errors:\n${errorMessages.join('\n')}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-arpona font-bold text-gray-900">
            Upload Gallery Images
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
          {/* File List */}
          <div className="mb-6">
            <h4 className="text-md font-arpona font-bold text-gray-900 mb-3">
              Selected Files ({imageFiles.length})
            </h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {imageFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <Upload className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm font-inter font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  
                  {/* Upload Progress */}
                  {uploading && (
                    <div className="flex items-center gap-2">
                      {uploadProgress[`${fileNamePrefix}-${Date.now()}-${index}.jpg`] === 100 ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-[#A5C8CE] border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Upload Info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h5 className="text-sm font-inter font-bold text-blue-900 mb-1">
                  Upload Information
                </h5>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Images will be automatically compressed and optimized</li>
                  <li>• Maximum resolution: 1920x1080 pixels</li>
                  <li>• Format: JPEG with 80% quality</li>
                  <li>• Compressed & WebP images are preferred for better performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Uploaded URLs Preview */}
          {uploadedUrls.length > 0 && (
            <div className="mb-6">
              <h4 className="text-md font-arpona font-bold text-gray-900 mb-3">
                Successfully Uploaded ({uploadedUrls.length})
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {uploadedUrls.map((url, index) => (
                  <div key={index} className="relative w-full h-20 bg-gray-100 border border-gray-200 overflow-hidden rounded">
                    <img
                      src={url}
                      alt={`Uploaded image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1">
                      <Check className="w-4 h-4 text-green-500 bg-white rounded-full p-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h5 className="text-sm font-inter font-bold text-red-900 mb-2">
                Upload Errors ({errors.length})
              </h5>
              <ul className="text-xs text-red-800 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-inter font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {uploading ? 'Uploading...' : 'Cancel'}
            </button>
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="flex-1 px-4 py-2 text-sm font-inter font-bold text-white bg-[#A5C8CE] hover:bg-[#8bb3b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : `Upload ${imageFiles.length} Images`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
