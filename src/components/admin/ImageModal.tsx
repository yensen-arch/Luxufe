"use client";
import { X } from "lucide-react";

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  hotelName: string;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, imageAlt, hotelName, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl max-h-[90vh] bg-white overflow-hidden shadow-2xl">

        {/* Image */}
        <div className="relative">
          <div className="flex flex-col items-end">
            <button
              onClick={onClose}
              className="p-2 "
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
            <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}
