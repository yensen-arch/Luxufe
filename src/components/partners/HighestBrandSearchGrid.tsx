import React, { useState } from "react";
import { Search, Bed, Lock, X } from "lucide-react";

interface Cruise {
  image: string;
  logo: string;
  suites: number;
  itineraries: number;
}

interface HighestBrandSearchGridProps {
  cruises: Cruise[];
  loading: boolean;
  filters: {
    search: string;
    cruiseLine: string;
    shipName: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
  };
  onClearFilter: (filterType: 'destinations' | 'experiences', value: string) => void;
  onClearAllFilters: () => void;
}

export default function HighestBrandSearchGrid({ 
  cruises, 
  loading, 
  filters, 
  onClearFilter, 
  onClearAllFilters 
}: HighestBrandSearchGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const cardsPerPage = 4;
  
  const allSelectedFilters = [...filters.destinations, ...filters.experiences];
  const hasFilters = allSelectedFilters.length > 0;

  // Calculate pagination
  const totalPages = Math.ceil(cruises.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCruises = cruises.slice(startIndex, endIndex);

  // Reset to first page when cruises change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [cruises.length]);

  // Loading state
  if (loading) {
    return (
      <section className="flex-1 bg-[#f5f6f7] max-h-[170vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a8d1cf] mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading cruises...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex-1 bg-[#f5f6f7] max-h-[170vh] p-10">
      {/* Search Bar */}
      <div className="flex items-center mb-8 bg-white border border-gray-200 rounded-full px-6 py-2 text-sm font-inter font-bold text-gray-500 mr-4 placeholder:text-gray-500">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
        <button className="bg-[#23263a] text-white rounded-full p-1 flex items-center justify-center">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Selected Filters - Always visible */}
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <div className="flex items-center gap-4">
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
                  <X className="w-3 h-3" />
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
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          {hasFilters && (
            <>
              <div className="border-l-2 border-gray-700 h-6"></div>
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
      <div className="mb-6 text-gray-400 text-sm font-inter font-bold">
        Showing {startIndex + 1}-{Math.min(endIndex, cruises.length)} of {cruises.length} Results
      </div>

      {/* Cruise Cards Grid */}
      {cruises.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-lg mb-2">No cruises found</p>
            <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {currentCruises.map((cruise, idx) => (
            <div key={idx} className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-64 w-full">
                <img src={cruise.image} alt="Cruise" className="w-full h-full object-cover" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
                  <div className="bg-white px-8 py-3 rounded-t shadow flex flex-col items-center">
                    <img src={cruise.logo} alt="Brand Logo" className="h-8 mb-2 object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center justify-between px-4 pt-10 pb-6">
                <div className="flex justify-center gap-8 w-full border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 text-gray-700 font-inter font-bold text-base">
                    <Bed className="w-5 h-5 mr-1" />
                    {cruise.suites} suites
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-inter font-bold text-base">
                    <Lock className="w-5 h-5 mr-1" />
                    {cruise.itineraries} itineraries
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Component */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-8 my-8 text-gray-500 font-inter font-bold text-xs">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`hover:underline ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : ''}`}
          >
            &lt; Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button 
              key={page} 
              onClick={() => setCurrentPage(page)}
              className={`px-2 ${page === currentPage ? "text-[#23263a] font-bold" : ""}`}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`hover:underline ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : ''}`}
          >
            Next &gt;
          </button>
        </div>
      )}
    </section>
  );
} 