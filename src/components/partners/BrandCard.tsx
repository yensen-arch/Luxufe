import React from "react";
import { Bed, Lock, Plane, MapPin } from "lucide-react";

interface BrandCardProps {
  brand: {
    id: number;
    name: string;
    description?: string;
    logo?: string;
    brand_image?: string;
    // Legacy fields for dummy data
    brand_name?: string;
    hotel_name?: string;
    image?: string;
    suites?: number;
    itineraries?: number;
    aircraft?: number;
    destinations?: number;
    location?: string;
  };
  travelType: 'hotels' | 'cruises' | 'private-jets';
  index: number;
}

export default function BrandCard({ brand, travelType, index }: BrandCardProps) {
  // Get the correct brand name and hotel name based on data source
  const brandName = brand.name || brand.brand_name || '';
  const hotelName = brand.hotel_name || '';
  
  const getDefaultImage = () => {
    switch (travelType) {
      case 'hotels':
        return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
      case 'cruises':
        return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
      case 'private-jets':
        return 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80';
      default:
        return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80';
    }
  };

  const getDefaultLogo = () => {
    return 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg';
  };

  const getStats = () => {
    switch (travelType) {
      case 'hotels':
        return (
          <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <Bed className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.suites || 50} rooms
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.location || 'Worldwide'}
            </div>
          </div>
        );
      case 'cruises':
        return (
          <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <Bed className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.suites || 50} suites
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <Lock className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.itineraries || 12} itineraries
            </div>
          </div>
        );
      case 'private-jets':
        return (
          <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <Plane className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.aircraft || 25} aircraft
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {brand.destinations || 200} destinations
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 md:h-64 w-full">
        <img 
          src={brand.brand_image || brand.image || getDefaultImage()} 
          alt={brandName} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
          <div className="bg-white px-4 md:px-8 py-2 md:py-3 rounded-t shadow flex flex-col items-center">
            <img 
              src={brand.logo || getDefaultLogo()} 
              alt={`${brandName} Logo`} 
              className="h-6 md:h-8 mb-1 md:mb-2 object-contain" 
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="text-center mb-4">
          <h3 className="text-lg md:text-xl font-arpona font-bold text-gray-800 mb-1">
            {brandName}
          </h3>
          {hotelName && (
            <p className="text-sm font-inter font-bold text-gray-500 mb-2">
              {hotelName}
            </p>
          )}
          {brand.description && (
            <p className="text-xs font-inter text-gray-600 leading-relaxed">
              {brand.description}
            </p>
          )}
        </div>
        {getStats()}
      </div>
    </div>
  );
} 