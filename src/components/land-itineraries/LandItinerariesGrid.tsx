import React, { useState } from "react";
import { X } from "lucide-react";
import LandItineraryCard from "./LandItineraryCard";
import { LandItinerary } from "@/lib/database";

interface LandItinerariesGridProps {
  itineraries: LandItinerary[];
  loading: boolean;
  filters: {
    search: string;
    regions: string[];
    durationRanges: string[];
    journeyTypes: string[];
  };
  onClearFilter: (filterType: 'regions' | 'durationRanges' | 'journeyTypes', value: string) => void;
  onClearAllFilters: () => void;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function LandItinerariesGrid({ 
  itineraries, 
  loading, 
  filters, 
  onClearFilter, 
  onClearAllFilters,
  currentPage,
  totalPages,
  totalCount,
  onPageChange
}: LandItinerariesGridProps) {
  const cardsPerPage = 6;
  
  // Ensure itineraries is always an array
  const itinerariesArray = Array.isArray(itineraries) ? itineraries : [];
  
  const allSelectedFilters = [...filters.regions, ...filters.durationRanges, ...filters.journeyTypes];
  const hasFilters = allSelectedFilters.length > 0 || filters.search.length > 0;

  // Calculate pagination
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentItineraries = itinerariesArray.slice(startIndex, endIndex);

  // Loading state
  if (loading) {
    return (
      <section className="flex-1 bg-[#f7f7fa] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading itineraries...</p>
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
            {filters.search && (
              <span className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2">
                Search: "{filters.search}"
                <button
                  onClick={() => onClearAllFilters()}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.regions.map((region) => (
              <span
                key={region}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {region}
                <button
                  onClick={() => onClearFilter('regions', region)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.durationRanges.map((duration) => (
              <span
                key={duration}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {duration}
                <button
                  onClick={() => onClearFilter('durationRanges', duration)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.journeyTypes.map((journeyType) => (
              <span
                key={journeyType}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {journeyType}
                <button
                  onClick={() => onClearFilter('journeyTypes', journeyType)}
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
          Showing {startIndex + 1}-{Math.min(endIndex, itinerariesArray.length)} of {totalCount} Results
        </p>
      </div>

      {/* Itinerary Cards Grid */}
      {itinerariesArray.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-lg mb-2">No itineraries found</p>
            <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-8">
          {currentItineraries.map((itinerary) => (
            <LandItineraryCard
              key={itinerary.id}
              itinerary={itinerary}
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
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
                  onClick={() => onPageChange(pageNum)}
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
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
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
