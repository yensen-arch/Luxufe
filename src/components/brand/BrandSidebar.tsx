"use client"
import React, { useState } from "react";
import Image from "next/image";

interface BrandSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    typeOfTravel: string[];
    region: string[];
  }) => void;
  availableCountries?: string[];
  loading?: boolean;
  loadingCountries?: boolean;
}

const typeOfTravelOptions = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
  "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels", "Food & Wine"
];

const regionOptions = [
  "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico", "Asia"
];

export default function BrandSidebar({ onFiltersChange, availableCountries, loading, loadingCountries }: BrandSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: newTypes,
      region: selectedRegions
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
      region: newRegions
    });
  };

  const handleSearch = () => {
    onFiltersChange({
      search: searchTerm,
      typeOfTravel: selectedTypes,
      region: selectedRegions
    });
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-gray-100 text-white p-3 rounded-full shadow-lg"
        >
          {isMobileMenuOpen ? <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-5 h-5" /> : <Image src="/luxufe-icon-filter-dark.svg" alt="Filter" width={20} height={20} className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`w-full min-h-[250vh] max-w-md bg-gray-100 border-r-2 border-gray-300 flex flex-col transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative fixed md:static top-0 left-0 h-full z-50`}>
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={20} height={20} className="w-6 h-6" />
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
            className="ml-2 bg-gray-900 text-white rounded-full p-3 flex items-center justify-center hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <Image src="/luxufe-icon-ai-send-arrow-light.svg" alt="Send" width={20} height={20} className="w-5 h-5" />
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
                  ? 'bg-gray-100 text-white'
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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-100"></div>
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