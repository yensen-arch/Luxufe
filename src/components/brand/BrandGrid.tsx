import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { Hotel } from "@/lib/database";
import Image from "next/image";

interface BrandGridProps {
  hotels: Hotel[];
  loading: boolean;
  filters: {
    search: string;
    typeOfTravel: string[];
    region: string[];
  };
  onClearFilter: (filterType: 'typeOfTravel' | 'region', value: string) => void;
  onClearAllFilters: () => void;
}



export default function BrandGrid({ hotels, loading, filters, onClearFilter, onClearAllFilters }: BrandGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  
  // Ensure hotels is always an array
  const hotelsArray = Array.isArray(hotels) ? hotels : [];
  
  const allSelectedFilters = [...filters.typeOfTravel, ...filters.region];
  const hasFilters = allSelectedFilters.length > 0;

  // Calculate pagination
  const totalPages = Math.ceil(hotelsArray.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentHotels = hotelsArray.slice(startIndex, endIndex);

  // Reset to first page when hotels change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [hotelsArray.length]);

  // Loading state
  if (loading) {
    return (
      <section className="flex-1 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 bg-gray-100 max-h-[250vh]">
      {/* Selected Filters - Always visible */}
      <div className="border-b-2 border-gray-300 px-8 py-4 h-30">
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.typeOfTravel.map((type) => (
              <span
                key={type}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {type}
                <button
                  onClick={() => onClearFilter('typeOfTravel', type)}
                  className="hover:text-gray-900"
                >
                  <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.region.map((region) => (
              <span
                key={region}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {region}
                <button
                  onClick={() => onClearFilter('region', region)}
                  className="hover:text-gray-900"
                >
                  <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          {hasFilters && (
            <>
              <div className="border-l-2 border-gray-700 h-6 mt-6"></div>
              <button
                onClick={onClearAllFilters}
                className="text-xs font-inter font-bold text-gray-700 hover:text-gray-700 mt-6"
              >
                Clear all filters
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-16 py-6">
        <p className="text-xs font-inter font-bold text-gray-400 ">
          Showing {startIndex + 1}-{Math.min(endIndex, hotelsArray.length)} of {hotelsArray.length} Results
        </p>
      </div>

      {/* Hotel Cards Grid */}
      {hotelsArray.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-lg mb-2">No hotels found</p>
            <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-16 pb-8">
          {currentHotels.map((hotel, index) => (
            <BrandCard
              key={hotel.id}
              name={hotel.hotel_name}
              location={`${hotel.city} . ${hotel.country}`.toUpperCase()}
              logo={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aman_Resorts_logo.svg/1200px-Aman_Resorts_logo.svg.png`}
              brand={hotel.brand}
              description={hotel.description || "Experience luxury and tranquility in this exceptional destination."}
            />
          ))}
        </div>
      )}

      {/* Pagination Component */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12 md:mt-16 lg:mt-24 w-auto max-w-md mx-auto">
          {/* First half of pages */}
          {Array.from({ length: Math.ceil(totalPages / 2) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-xs font-inter cursor-pointer transition-colors ${
                page === currentPage ? 'text-[#23263a] font-bold' : 'text-gray-400 font-light hover:text-gray-600'
              }`}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}
          
          {/* Line separator */}
          <div className="flex-1 h-px bg-gray-400 mx-2 min-w-[40px] max-w-[120px]" />
          
          {/* Second half of pages */}
          {Array.from({ length: Math.floor(totalPages / 2) }, (_, i) => Math.ceil(totalPages / 2) + i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-xs font-inter cursor-pointer transition-colors ${
                page === currentPage ? 'text-[#23263a] font-bold' : 'text-gray-400 font-light hover:text-gray-600'
              }`}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}
        </div>
      )}
    </section>
  );
} 