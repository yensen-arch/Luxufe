"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface AdminBrandSidebarProps {
  onFiltersChange: (filters: any) => void;
  availableCountries?: string[];
  loading?: boolean;
  loadingCountries?: boolean;
  filters: any;
  editMode?: boolean;
}

export default function AdminBrandSidebar({ 
  onFiltersChange, 
  availableCountries, 
  loading, 
  loadingCountries,
  filters,
  editMode
}: AdminBrandSidebarProps) {
  const [searchTerm, setSearchTerm] = useState(filters.search);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(filters.typeOfTravel);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(filters.region);

  const typeOfTravelOptions = [
    "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
    "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels", "Food & Wine"
  ];

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
    <aside className="w-full lg:w-80 bg-[#f7f7fa] border-b-2 lg:border-b-0 lg:border-r-2 border-gray-300 flex flex-col h-auto lg:h-[calc(220vh)] overflow-y-auto">
      {/* Search */}
      <div className="border-b-2 border-gray-300 p-4 lg:p-6">
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 lg:px-4 py-2 lg:py-3 shadow-xl">
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 bg-transparent outline-none text-sm font-inter text-gray-700 placeholder:text-gray-400 font-bold"
          />
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-[#23263a] text-white rounded-full p-2 flex items-center justify-center hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-white"></div>
            ) : (
              <span className="text-xs lg:text-sm"><SearchIcon className="w-4 h-4" /></span>
            )}
          </button>
        </div>
      </div>

      {/* Type of Travel */}
      <div className="border-b-2 border-gray-300 p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-arpona font-bold text-gray-700 mb-3 lg:mb-4">
          Type of Travel
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
      <div className="p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-arpona font-bold text-gray-700 mb-3 lg:mb-4">
          Region
        </h3>
        {loadingCountries ? (
          <div className="flex items-center justify-center py-6 lg:py-8">
            <div className="animate-spin rounded-full h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-[#23263a]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
      </div>
    </aside>
  );
}
