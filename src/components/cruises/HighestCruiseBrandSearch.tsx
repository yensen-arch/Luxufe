"use client"
import React, { useState, useEffect } from "react";
import HighestCruiseBrandSearchSidebar from "@/components/cruises/HighestCruiseBrandSearchSidebar";
import HighestCruiseBrandSearchGrid from "@/components/cruises/HighestCruiseBrandSearchGrid";

interface HighestCruiseBrandSearchProps {
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

const HighestCruiseBrandSearch = ({ data }: HighestCruiseBrandSearchProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || "Luxufe's Complete Cruise Brand Search";
  const description = data?.description || "Find your perfect luxury cruise experience";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    travelType: "cruises", // Set cruises as default
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

  // Mock cruise brands data for UI demonstration
  const mockCruiseBrands = [
    {
      id: 1,
      name: "Silversea Cruises",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
      suites: 50,
      itineraries: 12,
      location: "Worldwide"
    },
    {
      id: 2,
      name: "Seabourn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Seabourn_Cruise_Line_logo.svg/200px-Seabourn_Cruise_Line_logo.svg.png",
      suites: 45,
      itineraries: 15,
      location: "Worldwide"
    },
    {
      id: 3,
      name: "Regent Seven Seas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Regent_Seven_Seas_Cruises_logo.svg/200px-Regent_Seven_Seas_Cruises_logo.svg.png",
      suites: 60,
      itineraries: 18,
      location: "Worldwide"
    },
    {
      id: 4,
      name: "Crystal Cruises",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Crystal_Cruises_logo.svg/200px-Crystal_Cruises_logo.svg.png",
      suites: 40,
      itineraries: 10,
      location: "Worldwide"
    }
  ];

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setBrandData(mockCruiseBrands);
        setTotalCount(mockCruiseBrands.length);
        setTotalPages(1);
      } catch (error) {
        console.error('Error fetching cruise brands:', error);
        setBrandData([]);
        setTotalCount(0);
        setTotalPages(0);
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
      travelType: "cruises", // Keep cruises as default
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
        <HighestCruiseBrandSearchSidebar 
          onFiltersChange={handleFiltersChange}
          loading={loading}
        />
        <HighestCruiseBrandSearchGrid 
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
          onSearchChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default HighestCruiseBrandSearch;
