"use client"
import React, { useState, useEffect, useCallback } from "react";
import HotelSidebar from "@/components/hotels/HotelSidebar";
import HotelGrid from "@/components/hotels/HotelGrid";
import { getHotelsWithFiltersAndGallery, getBrandCountries, getBrands } from "@/lib/database";
import { Hotel, Brand } from "@/lib/database";

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

interface HotelsMainProps {
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
  brand: string;
}

const HotelsMain = ({ data, brandName }: HotelsMainProps) => {
  // Set default brand to "Aman" if no brand is provided
  const defaultBrand = brandName || "Aman";
  
  // Fallback content if no data is provided
  const heading = data?.heading || `${defaultBrand} Hotels, Lodges & more`;
  const description = data?.description || "Handpicked for their setting, silence, and soul";

  const [filters, setFilters] = useState<Filters>({
    search: "",
    typeOfTravel: [],
    region: [],
    brand: defaultBrand
  });

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [availableBrands, setAvailableBrands] = useState<Brand[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const cardsPerPage = 4;

  // Debounce search term to prevent too many API calls
  const debouncedSearch = useDebounce(filters.search, 500);

  // Fetch available brands for search
  useEffect(() => {
    const fetchBrands = async () => {
      setLoadingBrands(true);
      try {
        const brands = await getBrands();
        setAvailableBrands(brands);
      } catch (error) {
        console.error('Error fetching brands:', error);
        setAvailableBrands([]);
      } finally {
        setLoadingBrands(false);
      }
    };

    fetchBrands();
  }, []);

  // Fetch available countries for the selected brand
  useEffect(() => {
    const fetchBrandCountries = async () => {
      if (!filters.brand) {
        setAvailableCountries([]);
        setLoadingCountries(false);
        return;
      }

      setLoadingCountries(true);
      try {
        const countries = await getBrandCountries(filters.brand);
        setAvailableCountries(countries);
      } catch (error) {
        console.error('Error fetching brand countries:', error);
        setAvailableCountries([]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchBrandCountries();
  }, [filters.brand]);

  // Fetch hotels based on filters with debounced search and pagination
  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const hotelData = await getHotelsWithFiltersAndGallery({
          brand: filters.brand,
          search: debouncedSearch,
          countries: filters.region.length > 0 ? filters.region : undefined,
          typeOfTravel: filters.typeOfTravel.length > 0 ? filters.typeOfTravel : undefined,
          page: currentPage,
          pageSize: cardsPerPage
        });
        
        setHotels(hotelData.data || []);
        setTotalCount(hotelData.count || 0);
        setTotalPages(Math.ceil((hotelData.count || 0) / cardsPerPage));
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]);
        setTotalCount(0);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [filters.brand, debouncedSearch, filters.region, filters.typeOfTravel, currentPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters.brand, debouncedSearch, filters.region, filters.typeOfTravel]);

  const handleFiltersChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
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
      region: [],
      brand: defaultBrand
    });
  };

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
        <HotelSidebar 
          onFiltersChange={handleFiltersChange}
          availableCountries={availableCountries}
          availableBrands={availableBrands}
          loading={loading}
          loadingCountries={loadingCountries}
          loadingBrands={loadingBrands}
          currentBrand={filters.brand}
        />
        <HotelGrid 
          hotels={hotels}
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

export default HotelsMain; 