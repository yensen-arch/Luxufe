import React, { useState } from "react";
import DiscoverItineraryCard from "@/components/itineraries/DiscoverItineraryCard";
import Image from "next/image";
interface DiscoverItinerariesGridProps {
  filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
    travelDates: {
      departure: string;
      arrival: string;
    };
    cruiseLine: string;
    shipName: string;
  };
  onFiltersChange: (filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
    travelDates: {
      departure: string;
      arrival: string;
    };
    cruiseLine: string;
    shipName: string;
  }) => void;
  onClearFilter: (filterType: 'destinations' | 'experiences', value: string) => void;
  onClearAllFilters: () => void;
}

// Mock data for itineraries
const mockItineraries = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    location: "KENYA, TANZANIA",
    duration: "12 Nights",
    title: "Journey title will go right here",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
    flightsIncluded: true,
    price: "USD 27,756 per person"
  }
];

export default function DiscoverItinerariesGrid({ filters, onFiltersChange, onClearFilter, onClearAllFilters }: DiscoverItinerariesGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(filters.search);
  const cardsPerPage = 3; // Show 3 cards per page as in the image
  
  // Filter itineraries based on active filters
  const filteredItineraries = mockItineraries.filter(itinerary => {
    // For now, just return all itineraries since this is dummy UI
    // In real implementation, you would filter based on the filters
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItineraries.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentItineraries = filteredItineraries.slice(startIndex, endIndex);

  const handleSearch = () => {
    onFiltersChange({
      ...filters,
      search: searchTerm
    });
  };

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <section className="flex-1 max-h-[250vh] bg-gray-100">
      {/* Search Section */}
      <div className="px-8 py-6 md:px-10 md:w-5xl border-b-2 border-gray-300">
        <h2 className="text-sm font-arpona font-bold text-gray-700 mb-4">SEARCH</h2>
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 pl-12 pr-12 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-700 placeholder-gray-400"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <Image src="/luxufe-icon-ai-send-arrow-light.svg" alt="Search" width={20} height={20} className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="px-8 py-6 md:px-10 md:w-5xl">
        <p className="text-sm font-inter font-bold text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredItineraries.length)} of {filteredItineraries.length} Results
        </p>
      </div>

      {/* Itinerary Cards Grid */}
      {filteredItineraries.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <p className="text-gray-600 font-inter text-lg mb-2">No itineraries found</p>
            <p className="text-gray-500 font-inter text-sm">Try adjusting your filters to see more results</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 px-4 md:px-10 md:w-5xl pb-8">
          {currentItineraries.map((itinerary) => (
            <DiscoverItineraryCard
              key={itinerary.id}
              image={itinerary.image}
              location={itinerary.location}
              duration={itinerary.duration}
              title={itinerary.title}
              description={itinerary.description}
              flightsIncluded={itinerary.flightsIncluded}
              price={itinerary.price}
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
