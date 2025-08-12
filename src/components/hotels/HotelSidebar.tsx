"use client"
import React, { useState } from "react";
import { Send, Filter, X, Search } from "lucide-react";
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

const regionOptions = [
  "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico", "Asia"
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
  const [showBrandSearch, setShowBrandSearch] = useState(false);

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
    setShowBrandSearch(false);
    setBrandSearchTerm("");
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: selectedRegions,
      brand: brandName
    });
  };

  const handleSearch = () => {
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: selectedRegions,
      brand: selectedBrand
    });
  };

  // Filter brands based on search term
  const filteredBrands = availableBrands?.filter(brand =>
    brand.name.toLowerCase().includes(brandSearchTerm.toLowerCase())
  ) || [];

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

      {/* Brand Selection */}
      <div className="border-b-2 border-gray-300 p-6">
        <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
          Brand
        </h3>
        <div className="relative">
          <button
            onClick={() => setShowBrandSearch(!showBrandSearch)}
            className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 text-left hover:bg-gray-50 transition"
          >
            <span className="text-sm font-inter font-bold text-gray-700">
              {selectedBrand}
            </span>
            <Search className="w-4 h-4 text-gray-400" />
          </button>
          
          {showBrandSearch && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
              <div className="p-3 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={brandSearchTerm}
                  onChange={(e) => setBrandSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#23263a]"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {loadingBrands ? (
                  <div className="p-3 text-center text-sm text-gray-500">
                    Loading brands...
                  </div>
                ) : filteredBrands.length > 0 ? (
                  filteredBrands.map((brand) => (
                    <button
                      key={brand.id}
                      onClick={() => handleBrandSelect(brand.name)}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition ${
                        selectedBrand === brand.name ? 'bg-[#23263a] text-white' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-inter font-bold">
                        {brand.name}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-sm text-gray-500">
                    No brands found
                  </div>
                )}
              </div>
            </div>
          )}
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
      <div className="p-6">
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
      </aside>
    </>
  );
} 