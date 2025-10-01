import React, { useState } from "react";
import BrandCard from "./BrandCard";
import Image from "next/image";

interface Brand {
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
}

interface HighestBrandSearchGridProps {
  brands: Brand[];
  loading: boolean;
  filters: {
    search: string;
    travelType: string;
    cruiseLine: string;
    shipName: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
  };
  travelType: string;
  onClearFilter: (filterType: 'destinations' | 'experiences', value: string) => void;
  onClearAllFilters: () => void;
  currentPage?: number;
  totalPages?: number;
  totalCount?: number;
  onPageChange?: (page: number) => void;
  hotelCounts?: Record<string, number>;
  loadingHotelCounts?: boolean;
  onSearchChange?: (searchTerm: string) => void;
}

export default function HighestBrandSearchGrid({ 
  brands, 
  loading, 
  filters, 
  travelType,
  onClearFilter, 
  onClearAllFilters,
  currentPage: serverCurrentPage,
  totalPages: serverTotalPages,
  totalCount: serverTotalCount,
  onPageChange: serverOnPageChange,
  hotelCounts,
  loadingHotelCounts,
  onSearchChange
}: HighestBrandSearchGridProps) {
  // Client-side pagination state for dummy data
  const [clientCurrentPage, setClientCurrentPage] = useState(1);
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.search);
  const cardsPerPage = 4;
  
  // Use server pagination for hotels, client pagination for dummy data
  const isServerPaginated = travelType === 'hotels';
  const currentPage = isServerPaginated ? (serverCurrentPage || 1) : clientCurrentPage;
  const totalPages = isServerPaginated ? (serverTotalPages || 0) : Math.ceil(brands.length / cardsPerPage);
  const totalCount = isServerPaginated ? (serverTotalCount || 0) : brands.length;
  
  const allSelectedFilters = [...filters.destinations, ...filters.experiences];
  const hasFilters = allSelectedFilters.length > 0;

  // Calculate pagination for client-side data
  const startIndex = isServerPaginated ? 0 : (clientCurrentPage - 1) * cardsPerPage;
  const endIndex = isServerPaginated ? brands.length : startIndex + cardsPerPage;
  const currentBrands = isServerPaginated ? brands : brands.slice(startIndex, endIndex);

  // Reset to first page when brands change (for client-side pagination)
  React.useEffect(() => {
    if (!isServerPaginated) {
      setClientCurrentPage(1);
    }
  }, [brands.length, isServerPaginated]);

  // Update local search term when filters.search changes
  React.useEffect(() => {
    setLocalSearchTerm(filters.search);
  }, [filters.search]);

  const handlePageChange = (page: number) => {
    if (isServerPaginated && serverOnPageChange) {
      serverOnPageChange(page);
    } else {
      setClientCurrentPage(page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(localSearchTerm);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSearchChange) {
        onSearchChange(localSearchTerm);
      }
    }
  };

  // Skeleton component for loading state
  const BrandCardSkeleton = () => (
    <div className="shadow-lg overflow-hidden flex flex-col">
      {/* Logo area skeleton - white background with centered logo placeholder */}
      <div className="relative h-48 md:h-64 w-full bg-white flex items-center justify-center">
        <div className="h-16 md:h-24 w-24 md:w-32 bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="bg-white flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="text-center mb-4">
          <div className="h-6 md:h-7 w-32 md:w-40 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
          <div className="h-4 md:h-5 w-24 md:w-28 bg-gray-200 animate-pulse rounded mx-auto mb-2"></div>
        </div>
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

  return (
    <section className="flex-1 bg-[#f5f6f7] max-h-[170vh] py-3 md:py-5">
      {/* Search Bar - Always visible */}
      <p className="text-gray-900 font-inter font-bold text-xs mx-4 mb-3">SEARCH</p>
      <form onSubmit={handleSearchSubmit} className="flex items-center mb-1.5 bg-white border border-gray-200 rounded-full px-4 md:px-6 py-2 text-sm font-inter font-bold text-gray-500 mx-4 placeholder:text-gray-500">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={localSearchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          className="flex-1 focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-[#23263a] text-white rounded-full p-2 flex items-center justify-center"
        >
          <Image src="/luxufe-icon-ai-send-arrow-light.svg" alt="Search" width={20} height={20} className="w-4 h-4 md:w-4 md:h-4" />
        </button>
      </form>

      {/* Selected Filters - Always visible */}
      <div className="border-b-2 border-gray-300 pb-4 mb-4 md:mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.destinations.map((destination) => (
              <span
                key={destination}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {destination}
                <button
                  onClick={() => onClearFilter('destinations', destination)}
                  className="hover:text-gray-900"
                >
                  <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.experiences.map((experience) => (
              <span
                key={experience}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {experience}
                <button
                  onClick={() => onClearFilter('experiences', experience)}
                  className="hover:text-gray-900"
                >
                  <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          {hasFilters && (
            <>
              <div className="border-l-2 border-gray-700 h-6 hidden sm:block"></div>
              <button
                onClick={onClearAllFilters}
                className="text-xs font-inter font-bold text-gray-700 hover:text-gray-700"
              >
                Clear all filters
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 md:mb-6 text-gray-400 text-sm font-inter font-bold mx-4 md:mx-14">
        {isServerPaginated ? (
          `Showing ${((currentPage - 1) * cardsPerPage) + 1}-${Math.min(currentPage * cardsPerPage, totalCount)} of ${totalCount} Results`
        ) : (
          `Showing ${startIndex + 1}-${Math.min(endIndex, brands.length)} of ${brands.length} Results`
        )}
      </div>

      {/* Content Area */}
      <div className="mx-4 md:mx-14">
        {loading ? (
          // Show skeleton loading state
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
            {[...Array(4)].map((_, i) => <BrandCardSkeleton key={i} />)}
          </div>
        ) : brands.length === 0 ? (
          // Show empty state
          <div className="flex items-center justify-center py-8 md:py-16">
            <div className="text-center">
              <p className="text-gray-600 font-inter text-base md:text-lg mb-2">No brands found</p>
              <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
            </div>
          </div>
        ) : (
          // Show actual brand cards
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
            {currentBrands.map((brand, idx) => (
              <BrandCard 
                key={brand.id || idx} 
                brand={brand} 
                travelType={travelType as 'hotels' | 'cruises' | 'private-jets'} 
                index={idx} 
                hotelCounts={hotelCounts}
                loadingHotelCounts={loadingHotelCounts}
                isLoading={false}
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
                onClick={() => handlePageChange(page)}
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
                onClick={() => handlePageChange(page)}
                className={`text-xs font-inter cursor-pointer transition-colors ${
                  page === currentPage ? 'text-[#23263a] font-bold' : 'text-gray-400 font-light hover:text-gray-600'
                }`}
              >
                {String(page).padStart(2, "0")}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 