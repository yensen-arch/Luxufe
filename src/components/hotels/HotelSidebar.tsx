"use client"
import React, { useState, useEffect } from "react";
import { Send, Filter, X } from "lucide-react";
import { Brand } from "@/lib/database";

interface HotelSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    typeOfTravel: string[];
    region: string[];
    brand: string;
  }) => void;
  availableCountries?: string[];
  availableBrands?: Brand[];
  loading?: boolean;
  loadingCountries?: boolean;
  loadingBrands?: boolean;
  currentBrand?: string;
}

const typeOfTravelOptions = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
  "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels", "Food & Wine"
];

export default function HotelSidebar({ 
  onFiltersChange, 
  availableCountries, 
  availableBrands,
  loading, 
  loadingCountries,
  loadingBrands,
  currentBrand = "Aman"
}: HotelSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandSearchTerm, setBrandSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>(currentBrand);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [matchingBrands, setMatchingBrands] = useState<Brand[]>([]);

  // Fuzzy search function for brands
  const fuzzySearch = (searchTerm: string, brands: Brand[]): Brand[] => {
    if (!searchTerm.trim()) return [];
    
    const searchLower = searchTerm.toLowerCase();
    return brands.filter(brand => {
      const brandName = brand.name.toLowerCase();
      
      // Exact match
      if (brandName === searchLower) return true;
      
      // Starts with search term
      if (brandName.startsWith(searchLower)) return true;
      
      // Contains search term
      if (brandName.includes(searchLower)) return true;
      
      // Word boundary match (e.g., "aman" matches "Aman Resorts")
      const words = brandName.split(/\s+/);
      return words.some(word => word.startsWith(searchLower));
    }).slice(0, 10); // Limit to 10 results
  };

  // Update matching brands when search term changes
  useEffect(() => {
    if (availableBrands && brandSearchTerm.trim()) {
      const matches = fuzzySearch(brandSearchTerm, availableBrands);
      setMatchingBrands(matches);
    } else {
      setMatchingBrands([]);
    }
  }, [brandSearchTerm, availableBrands]);

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: newTypes,
      region: selectedRegions,
      brand: selectedBrand
    });
  };

  const handleRegionToggle = (region: string) => {
    const newRegions = selectedRegions.includes(region)
      ? selectedRegions.filter(r => r !== region)
      : [...selectedRegions, region];
    setSelectedRegions(newRegions);
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: newRegions,
      brand: selectedBrand
    });
  };

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    setBrandSearchTerm("");
    setMatchingBrands([]);
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: selectedRegions,
      brand: brandName
    });
  };

  const handleBrandSearch = () => {
    if (brandSearchTerm.trim()) {
      // If there are matching brands, select the first one
      if (matchingBrands.length > 0) {
        handleBrandSelect(matchingBrands[0].name);
      } else {
        // Otherwise, use the search term as the brand name
        handleBrandSelect(brandSearchTerm.trim());
      }
    }
  };

  const handleSearch = () => {
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: selectedRegions,
      brand: selectedBrand
    });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#23263a] text-white p-3 rounded-full shadow-lg"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`w-full min-h-[250vh] max-w-md bg-[#f7f7fa] border-r-2 border-gray-300 flex flex-col transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative fixed md:static top-0 left-0 h-full z-50`}>
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Search */}
      <div className="border-b-2 border-gray-300 p-6 h-30">
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 shadow-xl">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 bg-transparent outline-none text-sm font-inter text-gray-700 placeholder:text-gray-400 font-bold"
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="ml-2 bg-[#23263a] text-white rounded-full p-3 flex items-center justify-center hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Type of Travel */}
      <div className="border-b-2 border-gray-300 p-6">
        <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4 ">
          Type of Travel
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {typeOfTravelOptions.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeToggle(type)}
              className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                selectedTypes.includes(type)
                  ? 'bg-[#23263a] text-white'
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Region */}
      <div className="border-b-2 border-gray-300 p-6">
        <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4 ">
          Region
        </h3>
        {loadingCountries ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23263a]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {(availableCountries || []).map((region) => (
              <button
                key={region}
                onClick={() => handleRegionToggle(region)}
                className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                  selectedRegions.includes(region)
                    ? 'bg-[#23263a] text-white'
                    : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        )}
        {!loadingCountries && availableCountries && availableCountries.length === 0 && (
          <p className="text-gray-500 text-sm font-inter text-center py-4">
            No countries available for this brand
          </p>
        )}
      </div>

      {/* Brand Search */}
      <div className="p-6">
        <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
          Brand
        </h3>
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 shadow-xl mb-4">
          <input
            type="text"
            placeholder="Search for a brand..."
            value={brandSearchTerm}
            onChange={(e) => setBrandSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleBrandSearch()}
            className="flex-1 bg-transparent outline-none text-sm font-inter text-gray-700 placeholder:text-gray-400 font-bold"
          />
          <button 
            onClick={handleBrandSearch}
            disabled={loading}
            className="ml-2 bg-[#23263a] text-white rounded-full p-3 flex items-center justify-center hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Matching Brands Tags */}
        {matchingBrands.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-inter font-bold text-gray-600 mb-2">
              Matching Brands:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {matchingBrands.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandSelect(brand.name)}
                  className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                    selectedBrand === brand.name
                      ? 'bg-[#23263a] text-white'
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Current Brand Display */}
        {selectedBrand && (
          <div className="mt-4">
            <h4 className="text-sm font-inter font-bold text-gray-600 mb-2">
              Current Brand:
            </h4>
            <div className="bg-[#23263a] text-white px-3 py-2 rounded-full text-xs font-inter font-bold inline-block">
              {selectedBrand}
            </div>
          </div>
        )}
      </div>
      </aside>
    </>
  );
} 