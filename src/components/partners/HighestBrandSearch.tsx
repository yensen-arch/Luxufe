"use client"
import React, { useState, useEffect, useCallback } from "react";
import HighestBrandSearchSidebar from "@/components/partners/HighestBrandSearchSidebar";
import HighestBrandSearchGrid from "@/components/partners/HighestBrandSearchGrid";
import { fetchBrands, fetchHotelCounts, dummyCruiseBrands, dummyPrivateJetBrands, Brand } from "@/lib/database";

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
  const heading = data?.heading || "Luxufe's Complete Brand Search";
  const description = data?.description || "Find your perfect luxury experience";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    travelType: "hotels", // Set hotels as default
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
  const [hotelCounts, setHotelCounts] = useState<Record<string, number>>({});
  const [loadingHotelCounts, setLoadingHotelCounts] = useState(false);

  // Fetch hotel counts for brands
  const fetchHotelCountsForBrands = async (brands: Brand[]) => {
    if (filters.travelType !== 'hotels' || brands.length === 0) {
      setHotelCounts({});
      return;
    }

    setLoadingHotelCounts(true);
    try {
      const brandNames = brands.map(brand => brand.name);
      const counts = await fetchHotelCounts(brandNames);
      setHotelCounts(counts);
    } catch (error) {
      console.error('Error fetching hotel counts:', error);
      setHotelCounts({});
    } finally {
      setLoadingHotelCounts(false);
    }
  };

  // Fetch brands based on travel type and filters
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        if (filters.travelType === 'hotels') {
          // Fetch hotel brands from database with pagination
          const response = await fetchBrands(currentPage, 4, filters.search);
          setBrandData(response.data);
          setTotalCount(response.count);
          setTotalPages(Math.ceil(response.count / 4));
          
          // Fetch hotel counts for the brands
          await fetchHotelCountsForBrands(response.data);
        } else if (filters.travelType === 'cruises') {
          // Show empty state for cruises (not populated yet)
          setBrandData([]);
          setTotalCount(0);
          setTotalPages(0);
          setHotelCounts({});
        } else if (filters.travelType === 'private-jets') {
          // Show empty state for private jets (not populated yet)
          setBrandData([]);
          setTotalCount(0);
          setTotalPages(0);
          setHotelCounts({});
        } else {
          // No travel type selected
          setBrandData([]);
          setTotalCount(0);
          setTotalPages(0);
          setHotelCounts({});
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
        setBrandData([]);
        setTotalCount(0);
        setTotalPages(0);
        setHotelCounts({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters.travelType, filters.search, filters.destinations, filters.experiences, filters.specialOffers, currentPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters.travelType, filters.search, filters.destinations, filters.experiences, filters.specialOffers]);

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
      travelType: "hotels", // Keep hotels as default
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

  const handleSearchChange = (searchTerm: string) => {
    setFilters(prev => ({
      ...prev,
      search: searchTerm
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Heading and Description Section */}
      <div className="w-full bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-arpona text-[#23263a] font-bold mb-4 md:mb-6">
            {heading}
          </h2>
          <p className="text-base md:text-md lg:text-lg text-[#23263a] font-inter font-bold">
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
          hotelCounts={hotelCounts}
          loadingHotelCounts={loadingHotelCounts}
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default HighestBrandSearch; 