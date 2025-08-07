import React from "react";
import { Bed, Lock, Plane, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { brandNameToSlug } from "@/lib/utils";

interface BrandCardProps {
  brand: {
    id: number;
    name: string;
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
  hotelCounts?: Record<string, number>;
  loadingHotelCounts?: boolean;
  isLoading?: boolean;
}

export default function BrandCard({ brand, travelType, index, hotelCounts, loadingHotelCounts, isLoading = false }: BrandCardProps) {
  const router = useRouter();
  
  // Get the correct brand name and hotel name based on data source
  const brandName = brand.name || brand.brand_name || '';
  const hotelName = brand.hotel_name || '';
  
  const getDefaultLogo = () => {
    return 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg';
  };

  const handleCardClick = () => {
    if (travelType === 'hotels' && brandName) {
      const brandSlug = brandNameToSlug(brandName);
      router.push(`/brand/${brandSlug}`);
    }
  };

  const getStats = () => {
    switch (travelType) {
      case 'hotels':
        const hotelCount = hotelCounts?.[brandName] || 0;
        return (
          <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
            <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
              <Bed className="w-4 h-4 md:w-5 md:h-5 mr-1" />
              {loadingHotelCounts ? (
                <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
              ) : (
                `${hotelCount} Hotels`
              )}
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

  // Skeleton component for loading state
  const BrandCardSkeleton = () => (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 md:h-64 w-full bg-gray-200 animate-pulse">
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
          <div className="bg-white px-4 md:px-8 py-2 md:py-3 flex flex-col items-center">
            <div className="h-6 md:h-8 w-24 md:w-32 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="text-center mb-4 w-full">
          <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2 mx-auto"></div>
        </div>
        <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-20"></div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 bg-gray-200 animate-pulse rounded w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <BrandCardSkeleton />;
  }

  return (
    <div 
      className={`shadow-lg overflow-hidden flex flex-col ${
        travelType === 'hotels' ? 'cursor-pointer hover:shadow-xl transition-shadow duration-300' : ''
      }`}
      onClick={handleCardClick}
    >
      <div className="relative h-48 md:h-64 w-full bg-white flex items-center justify-center">
        <img 
          src={brand.logo || getDefaultLogo()} 
          alt={`${brandName} Logo`} 
          className="h-16 md:h-24  object-cover w-auto" 
        />
      </div>
      <div className="bg-white flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="text-center mb-4">
          <h3 className="text-lg md:text-xl font-arpona font-bold text-gray-800 mb-1">
            {brandName}
          </h3>
          {hotelName && (
            <p className="text-sm font-inter font-bold text-gray-500 mb-2">
              {hotelName}
            </p>
          )}
        </div>
          {getStats()}
      </div>
    </div>
  );
} 