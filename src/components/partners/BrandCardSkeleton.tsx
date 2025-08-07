import React from "react";

interface BrandCardSkeletonProps {
  travelType: 'hotels' | 'cruises' | 'private-jets';
}

export default function BrandCardSkeleton({ travelType }: BrandCardSkeletonProps) {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      {/* Image skeleton */}
      <div className="relative h-48 md:h-64 w-full">
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        {/* Logo skeleton positioned at bottom center */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
          <div className="bg-white px-4 md:px-8 py-2 md:py-3 flex flex-col items-center">
            <div className="h-6 md:h-8 w-16 md:w-20 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
      
      {/* Content skeleton */}
      <div className="flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="text-center mb-4 w-full">
          {/* Brand name skeleton */}
          <div className="h-6 md:h-7 w-32 md:w-40 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
          {/* Hotel name skeleton */}
          <div className="h-4 md:h-5 w-24 md:w-28 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
        </div>
        
        {/* Stats skeleton */}
        <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 md:h-5 w-16 md:w-20 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-4 md:h-5 w-20 md:w-24 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
