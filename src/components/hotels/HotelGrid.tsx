import React, { useState, useMemo } from "react";
import { X } from "lucide-react";
import HotelCard from "./HotelCard";
import { Hotel } from "@/lib/database";

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
  
  const allSelectedFilters = [...filters.typeOfTravel, ...filters.region];
  const hasFilters = allSelectedFilters.length > 0;

  // Calculate pagination
  const totalPages = Math.ceil(hotels.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentHotels = hotels.slice(startIndex, endIndex);

  // Reset to first page when hotels change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [hotels.length]);

  // Loading state
  if (loading) {
    return (
      <section className="flex-1 bg-[#f7f7fa] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading hotels...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 bg-[#f7f7fa] max-h-[250vh]">
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
                  <X className="w-3 h-3" />
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
                  <X className="w-3 h-3" />
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
      <div className="px-8 py-6">
        <p className="text-sm font-inter font-bold text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, hotels.length)} of {hotels.length} Results
        </p>
      </div>

      {/* Hotel Cards Grid */}
      {hotels.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-lg mb-2">No hotels found</p>
            <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-16 pb-8">
          {currentHotels.map((hotel, index) => (
            <HotelCard
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
        <div className="flex justify-center items-center py-12">
          <div className="flex items-center gap-8">
            {/* Previous Link */}
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`font-inter text-sm transition ${
                currentPage === 1 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              &lt; Previous
            </button>
            
            {/* Page Numbers */}
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`flex flex-col items-center ${
                    pageNum === currentPage ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className={`font-inter text-sm ${pageNum === currentPage ? 'font-medium' : ''}`}>
                    {pageNum.toString().padStart(2, '0')}
                  </span>
                  {pageNum === currentPage && (
                    <div className="w-full h-0.5 bg-gray-500 mt-1"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Next Link */}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`font-inter text-sm transition ${
                currentPage === totalPages 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-800 hover:text-gray-600'
              }`}
            >
              Next &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 