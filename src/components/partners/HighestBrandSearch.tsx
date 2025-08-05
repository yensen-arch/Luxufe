"use client"
import React, { useState, useEffect, useCallback } from "react";
import HighestBrandSearchSidebar from "@/components/partners/HighestBrandSearchSidebar";
import HighestBrandSearchGrid from "@/components/partners/HighestBrandSearchGrid";

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
  cruiseLine: string;
  shipName: string;
  destinations: string[];
  experiences: string[];
  specialOffers: boolean;
}

// Dummy cruise data
const cruises = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
];

const HighestBrandSearch = ({ data }: HighestBrandSearchProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || "Highest Brand Search";
  const description = data?.description || "Find your perfect luxury cruise experience";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    cruiseLine: "",
    shipName: "",
    destinations: [],
    experiences: [],
    specialOffers: false
  });

  const [cruiseData, setCruiseData] = useState(cruises);
  const [loading, setLoading] = useState(false);

  // Debounce search term to prevent too many API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Simulate filtering based on search
  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      if (debouncedSearch) {
        const filtered = cruises.filter(cruise => 
          cruise.suites.toString().includes(debouncedSearch) ||
          cruise.itineraries.toString().includes(debouncedSearch)
        );
        setCruiseData(filtered);
      } else {
        setCruiseData(cruises);
      }
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedSearch, filters.destinations, filters.experiences, filters.specialOffers]);

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
      cruiseLine: "",
      shipName: "",
      destinations: [],
      experiences: [],
      specialOffers: false
    });
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
        <HighestBrandSearchSidebar 
          onFiltersChange={handleFiltersChange}
          loading={loading}
        />
        <HighestBrandSearchGrid 
          cruises={cruiseData}
          loading={loading}
          filters={filters}
          onClearFilter={handleClearFilter}
          onClearAllFilters={handleClearAllFilters}
        />
      </div>
    </div>
  );
};

export default HighestBrandSearch; 