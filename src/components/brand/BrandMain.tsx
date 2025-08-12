"use client"
import React, { useState, useEffect, useCallback } from "react";
import BrandSidebar from "@/components/brand/BrandSidebar";
import BrandGrid from "@/components/brand/BrandGrid";
import { getHotelsWithFiltersAndGallery, getBrandCountries } from "@/lib/database";
import { Hotel } from "@/lib/database";

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

interface BrandMainProps {
  data?: {
    heading?: string;
    description?: string;
  };
  brandName?: string;
}

interface Filters {
  search: string;
  typeOfTravel: string[];
  region: string[];
}

const BrandMain = ({ data, brandName }: BrandMainProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || `${brandName || 'Luxury'} Hotels, Lodges & more`;
  const description = data?.description || "Handpicked for their setting, silence, and soul";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    typeOfTravel: [],
    region: []
  });

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Debounce search term to prevent too many API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Fetch available countries for the specific brand
  useEffect(() => {
    const fetchBrandCountries = async () => {
      if (!brandName) {
        setAvailableCountries([]);
        setLoadingCountries(false);
        return;
      }

      setLoadingCountries(true);
      try {
        const countries = await getBrandCountries(brandName);
        setAvailableCountries(countries);
      } catch (error) {
        console.error('Error fetching brand countries:', error);
        setAvailableCountries([]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchBrandCountries();
  }, [brandName]);

  // Fetch hotels based on filters with debounced search
  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const hotelData = await getHotelsWithFiltersAndGallery({
          brand: brandName,
          search: debouncedSearch,
          countries: filters.region.length > 0 ? filters.region : undefined,
          typeOfTravel: filters.typeOfTravel.length > 0 ? filters.typeOfTravel : undefined
        });
        // Ensure hotels is always an array
        const hotelsArray = Array.isArray(hotelData.data) ? hotelData.data : 
                           Array.isArray(hotelData) ? hotelData : [];
        setHotels(hotelsArray);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [brandName, debouncedSearch, filters.region, filters.typeOfTravel]);

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleClearFilter = (filterType: 'typeOfTravel' | 'region', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({
      search: "",
      typeOfTravel: [],
      region: []
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
        <BrandSidebar 
          onFiltersChange={handleFiltersChange}
          availableCountries={availableCountries}
          loading={loading}
          loadingCountries={loadingCountries}
        />
        <BrandGrid 
          hotels={hotels}
          loading={loading}
          filters={filters}
          onClearFilter={handleClearFilter}
          onClearAllFilters={handleClearAllFilters}
        />
      </div>
    </div>
  );
};

export default BrandMain; 