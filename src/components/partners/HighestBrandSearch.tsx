"use client"
import React, { useState, useEffect, useCallback } from "react";
import HighestBrandSearchSidebar from "@/components/partners/HighestBrandSearchSidebar";
import HighestBrandSearchGrid from "@/components/partners/HighestBrandSearchGrid";
import { fetchBrands, dummyCruiseBrands, dummyPrivateJetBrands, Brand } from "@/lib/database";

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

interface HighestBrandSearchProps {
  data?: {
    heading?: string;
    description?: string;
  };
}

interface Filters {
  search: string;
  travelType: string;
  cruiseLine: string;
  shipName: string;
  destinations: string[];
  experiences: string[];
  specialOffers: boolean;
}

const HighestBrandSearch = ({ data }: HighestBrandSearchProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || "Highest Brand Search";
  const description = data?.description || "Find your perfect luxury experience";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    travelType: "",
    cruiseLine: "",
    shipName: "",
    destinations: [],
    experiences: [],
    specialOffers: false
  });

  const [brandData, setBrandData] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Debounce search term to prevent too many API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Fetch brands based on travel type and filters
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        if (filters.travelType === 'hotels') {
          // Fetch hotel brands from database with pagination
          const response = await fetchBrands(currentPage, 4, debouncedSearch);
          setBrandData(response.data);
          setTotalCount(response.count);
          setTotalPages(Math.ceil(response.count / 4));
        } else if (filters.travelType === 'cruises') {
          // Use dummy cruise data
          const filtered = dummyCruiseBrands.filter(brand => 
            !debouncedSearch || 
            brand.brand_name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            brand.hotel_name.toLowerCase().includes(debouncedSearch.toLowerCase())
          );
          setBrandData(filtered);
          setTotalCount(filtered.length);
          setTotalPages(Math.ceil(filtered.length / 4));
        } else if (filters.travelType === 'private-jets') {
          // Use dummy private jet data
          const filtered = dummyPrivateJetBrands.filter(brand => 
            !debouncedSearch || 
            brand.brand_name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            brand.hotel_name.toLowerCase().includes(debouncedSearch.toLowerCase())
          );
          setBrandData(filtered);
          setTotalCount(filtered.length);
          setTotalPages(Math.ceil(filtered.length / 4));
        } else {
          // No travel type selected
          setBrandData([]);
          setTotalCount(0);
          setTotalPages(0);
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
        setBrandData([]);
        setTotalCount(0);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters.travelType, debouncedSearch, filters.destinations, filters.experiences, filters.specialOffers, currentPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters.travelType, debouncedSearch, filters.destinations, filters.experiences, filters.specialOffers]);

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleClearFilter = (filterType: 'destinations' | 'experiences', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      travelType: "",
      cruiseLine: "",
      shipName: "",
      destinations: [],
      experiences: [],
      specialOffers: false
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {/* Heading and Description Section */}
      <div className="w-full bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-arpona text-[#23263a] font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#23263a] font-inter font-bold">
            {description}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full">
        <HighestBrandSearchSidebar 
          onFiltersChange={handleFiltersChange}
          loading={loading}
        />
        <HighestBrandSearchGrid 
          brands={brandData}
          loading={loading}
          filters={filters}
          travelType={filters.travelType}
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

export default HighestBrandSearch; 