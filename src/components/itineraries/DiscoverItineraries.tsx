"use client"
import React, { useState } from "react";
import DiscoverItinerariesSidebar from "./DiscoverItinerariesSidebar";
import DiscoverItinerariesGrid from "./DiscoverItinerariesGrid";

interface DiscoverItinerariesProps {
  data?: {
    heading?: string;
    description?: string;
  };
}

export default function DiscoverItineraries({ data }: DiscoverItinerariesProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Discover where Luxufe can take you";
  
  // State for filters
  const [filters, setFilters] = useState({
    search: "",
    destinations: [] as string[],
    experiences: [] as string[],
    specialOffers: false,
    travelDates: {
      departure: "",
      arrival: "",
    },
    cruiseLine: "",
    shipName: "",
  });

  // Handle filter changes
  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // Clear individual filter
  const handleClearFilter = (filterType: 'destinations' | 'experiences', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  // Clear all filters
  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      destinations: [],
      experiences: [],
      specialOffers: false,
      travelDates: {
        departure: "",
        arrival: "",
      },
      cruiseLine: "",
      shipName: "",
    });
  };

  return (
    <section className="bg-white py-0 border-b border-gray-300">
      {/* Heading Section */}
      <div className=" mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-bold mb-6">
          {heading}
        </h2>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full">
        <DiscoverItinerariesSidebar 
          onFiltersChange={handleFiltersChange}
          filters={filters}
        />
        <DiscoverItinerariesGrid 
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onClearFilter={handleClearFilter}
          onClearAllFilters={handleClearAllFilters}
        />
      </div>
    </section>
  );
}
