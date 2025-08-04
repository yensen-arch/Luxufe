import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  location: string;
  logo: string;
  images: {
    top: string;
    bottomLeft: string;
    bottomRight: string;
  };
  description: string;
}

export default function BrandCard({ name, location, logo, images, description }: BrandCardProps) {
  const [imageLoading, setImageLoading] = useState({
    top: true,
    bottomLeft: true,
    bottomRight: true
  });
  const [imageError, setImageError] = useState({
    top: false,
    bottomLeft: false,
    bottomRight: false
  });

  const handleImageLoad = (imageType: 'top' | 'bottomLeft' | 'bottomRight') => {
    setImageLoading(prev => ({ ...prev, [imageType]: false }));
  };

  const handleImageError = (imageType: 'top' | 'bottomLeft' | 'bottomRight') => {
    setImageLoading(prev => ({ ...prev, [imageType]: false }));
    setImageError(prev => ({ ...prev, [imageType]: true }));
  };

  return (
    <div className="bg-white shadow-lg overflow-hidden">
      {/* Image Section - Three images layout */}
      <div className="relative">
        {/* Large Top Image */}
        <div className="h-44 w-full mb-0.5 relative">
          {imageLoading.top && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a8d1cf]"></div>
            </div>
          )}
          {!imageError.top && (
            <img 
              src={images.top} 
              alt={`${name} main view`} 
              className={`w-full h-full object-cover ${imageLoading.top ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              onLoad={() => handleImageLoad('top')}
              onError={() => handleImageError('top')}
            />
          )}
          {imageError.top && (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image unavailable</span>
            </div>
          )}
        </div>
        
        {/* Two Smaller Bottom Images - Side by side */}
        <div className="flex h-44">
          <div className="flex-1 mr-0.5 relative">
            {imageLoading.bottomLeft && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#a8d1cf]"></div>
              </div>
            )}
            {!imageError.bottomLeft && (
              <img 
                src={images.bottomLeft} 
                alt={`${name} view 1`} 
                className={`w-full h-full object-cover ${imageLoading.bottomLeft ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => handleImageLoad('bottomLeft')}
                onError={() => handleImageError('bottomLeft')}
              />
            )}
            {imageError.bottomLeft && (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image unavailable</span>
              </div>
            )}
          </div>
          <div className="flex-1 relative">
            {imageLoading.bottomRight && (
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#a8d1cf]"></div>
              </div>
            )}
            {!imageError.bottomRight && (
              <img 
                src={images.bottomRight} 
                alt={`${name} view 2`} 
                className={`w-full h-full object-cover ${imageLoading.bottomRight ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => handleImageLoad('bottomRight')}
                onError={() => handleImageError('bottomRight')}
              />
            )}
            {imageError.bottomRight && (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image unavailable</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hotel Information Section */}
      <div className="px-6 py-4 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-arpona font-bold text-gray-800 mb-1">
              {name}
            </h3>
            <p className="text-xs font-inter font-bold text-gray-500 tracking-widest uppercase">
              {location}
            </p>
          </div>
          <img 
            src={logo} 
            alt={`${name} Logo`} 
            className="h-8 object-contain"
          />
        </div>
      </div>
      
      {/* Description Section */}
      <div className="px-6 py-4 bg-white">
        <p className="text-sm font-inter text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Call-to-Action Button Section */}
      <div className="px-6 py-4 bg-white">
        <button className="w-full border border-gray-800 bg-white text-gray-800 font-inter font-bold text-sm py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          EXPLORE HOTEL
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 