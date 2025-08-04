"use client"
import React, { useState } from "react";
import { Search, Send } from "lucide-react";

interface BrandSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    typeOfTravel: string[];
    region: string[];
  }) => void;
}

const typeOfTravelOptions = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
  "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels", "Food & Wine"
];

const regionOptions = [
  "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico", "Asia"
];

export default function BrandSidebar({ onFiltersChange }: BrandSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

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
    <aside className="w-full max-w-md bg-[#f7f7fa] border-r-2 border-gray-300 flex flex-col">
      {/* Search */}
      <div className="border-b-2 border-gray-300 p-6">
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
            className="ml-2 bg-[#23263a] text-white rounded-full p-3 flex items-center justify-center hover:bg-black transition"
          >
            <Send className="w-5 h-5" />
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
              className='px-2 py-2 rounded-full text-xs font-inter font-bold transition bg-gray-200 cursor-pointer text-gray-400 hover:bg-gray-300'
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {regionOptions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionToggle(region)}
              className='px-2 py-2 rounded-full text-xs font-inter font-bold transition bg-gray-200 cursor-pointer text-gray-400 hover:bg-gray-300'
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
} 