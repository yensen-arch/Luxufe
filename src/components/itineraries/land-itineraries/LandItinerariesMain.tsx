"use client"
import React, { useState, useEffect, useCallback } from "react";
import LandItinerariesSidebar from "./LandItinerariesSidebar";
import LandItinerariesGrid from "./LandItinerariesGrid";
import { 
  getLandItinerariesWithFilters, 
  getLandItineraryRegions, 
  getLandItineraryDurationRanges 
} from "@/lib/database";
import { LandItinerary } from "@/lib/database";

// Debounce hook for search optimization
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

interface LandItinerariesMainProps {
  data?: {
    heading?: string;
    description?: string;
  };
}

const LandItinerariesMain = ({ data }: LandItinerariesMainProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || 'Land Journeys';
  const description = data?.description || 'Discover our curated collection of extraordinary land adventures';

  // State management
  const [itineraries, setItineraries] = useState<LandItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  
  // Filter options
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [availableDurationRanges, setAvailableDurationRanges] = useState<string[]>([]);
  const [availableJourneyTypes] = useState<string[]>([
    'Cultural', 'Adventure', 'Luxury', 'Wildlife', 'Wellness', 'Culinary', 'Photography', 'Family'
  ]);
  
  // Loading states for filter options
  const [loadingRegions, setLoadingRegions] = useState(true);
  const [loadingDurationRanges, setLoadingDurationRanges] = useState(true);
  
  // Filters state
  const [filters, setFilters] = useState({
    search: "",
    regions: [] as string[],
    durationRanges: [] as string[],
    journeyTypes: [] as string[]
  });

  // Debounced search
  const debouncedSearch = useDebounce(filters.search, 500);

  // Fetch itineraries with current filters
  const fetchItineraries = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getLandItinerariesWithFilters({
        search: debouncedSearch,
        regions: filters.regions,
        durationRanges: filters.durationRanges,
        journeyTypes: filters.journeyTypes,
        page: currentPage,
        pageSize: 6
      });
      
      setItineraries(result.data);
      setTotalCount(result.count);
      setTotalPages(Math.ceil(result.count / 6));
    } catch (error) {
      console.error('Error fetching itineraries:', error);
      setItineraries([]);
      setTotalCount(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, filters.regions, filters.durationRanges, filters.journeyTypes, currentPage]);

  // Fetch filter options
  const fetchFilterOptions = useCallback(async () => {
    try {
      const [regions, durationRanges] = await Promise.all([
        getLandItineraryRegions(),
        getLandItineraryDurationRanges()
      ]);
      
      setAvailableRegions(regions);
      setAvailableDurationRanges(durationRanges);
    } catch (error) {
      console.error('Error fetching filter options:', error);
    } finally {
      setLoadingRegions(false);
      setLoadingDurationRanges(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchFilterOptions();
  }, [fetchFilterOptions]);

  // Fetch itineraries when filters change
  useEffect(() => {
    fetchItineraries();
  }, [fetchItineraries]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Handle filter changes
  const handleFiltersChange = (newFilters: {
    search: string;
    regions: string[];
    durationRanges: string[];
    journeyTypes: string[];
  }) => {
    setFilters(newFilters);
  };

  // Handle clearing individual filters
  const handleClearFilter = (filterType: 'regions' | 'durationRanges' | 'journeyTypes', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  // Handle clearing all filters
  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      regions: [],
      durationRanges: [],
      journeyTypes: []
    });
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col md:flex-col">
      {/* Heading and Description Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] font-bold mb-6">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-[#23263a] font-inter font-bold">
            {description}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full">
        <LandItinerariesSidebar 
          onFiltersChange={handleFiltersChange}
          availableRegions={availableRegions}
          availableDurationRanges={availableDurationRanges}
          availableJourneyTypes={availableJourneyTypes}
          loading={loading}
          loadingRegions={loadingRegions}
          loadingDurationRanges={loadingDurationRanges}
          loadingJourneyTypes={false}
        />
        <LandItinerariesGrid 
          itineraries={itineraries}
          loading={loading}
          filters={filters}
          onClearFilter={handleClearFilter}
          onClearAllFilters={handleClearAllFilters}
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default LandItinerariesMain;
