"use client"
import React, { useState } from "react";
import { Search, Send, Filter, X } from "lucide-react";

interface LandItinerariesSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    regions: string[];
    durationRanges: string[];
    journeyTypes: string[];
  }) => void;
  availableRegions?: string[];
  availableDurationRanges?: string[];
  availableJourneyTypes?: string[];
  loading?: boolean;
  loadingRegions?: boolean;
  loadingDurationRanges?: boolean;
  loadingJourneyTypes?: boolean;
}

export default function LandItinerariesSidebar({ 
  onFiltersChange, 
  availableRegions, 
  availableDurationRanges,
  availableJourneyTypes,
  loading, 
  loadingRegions,
  loadingDurationRanges,
  loadingJourneyTypes
}: LandItinerariesSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedDurationRanges, setSelectedDurationRanges] = useState<string[]>([]);
  const [selectedJourneyTypes, setSelectedJourneyTypes] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegionToggle = (region: string) => {
    const newRegions = selectedRegions.includes(region)
      ? selectedRegions.filter(r => r !== region)
      : [...selectedRegions, region];
    setSelectedRegions(newRegions);
    onFiltersChange({
      search: searchTerm,
      regions: newRegions,
      durationRanges: selectedDurationRanges,
      journeyTypes: selectedJourneyTypes
    });
  };

  const handleDurationToggle = (duration: string) => {
    const newDurations = selectedDurationRanges.includes(duration)
      ? selectedDurationRanges.filter(d => d !== duration)
      : [...selectedDurationRanges, duration];
    setSelectedDurationRanges(newDurations);
    onFiltersChange({
      search: searchTerm,
      regions: selectedRegions,
      durationRanges: newDurations,
      journeyTypes: selectedJourneyTypes
    });
  };

  const handleJourneyTypeToggle = (journeyType: string) => {
    const newJourneyTypes = selectedJourneyTypes.includes(journeyType)
      ? selectedJourneyTypes.filter(j => j !== journeyType)
      : [...selectedJourneyTypes, journeyType];
    setSelectedJourneyTypes(newJourneyTypes);
    onFiltersChange({
      search: searchTerm,
      regions: selectedRegions,
      durationRanges: selectedDurationRanges,
      journeyTypes: newJourneyTypes
    });
  };

  const handleSearch = () => {
    onFiltersChange({
      search: searchTerm,
      regions: selectedRegions,
      durationRanges: selectedDurationRanges,
      journeyTypes: selectedJourneyTypes
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

        {/* Journey Types */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            Journey Type
          </h3>
          {loadingJourneyTypes ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23263a]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(availableJourneyTypes || []).map((journeyType) => (
                <button
                  key={journeyType}
                  onClick={() => handleJourneyTypeToggle(journeyType)}
                  className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                    selectedJourneyTypes.includes(journeyType)
                      ? 'bg-[#23263a] text-white'
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  {journeyType}
                </button>
              ))}
            </div>
          )}
          {!loadingJourneyTypes && availableJourneyTypes && availableJourneyTypes.length === 0 && (
            <p className="text-gray-500 text-sm font-inter text-center py-4">
              No journey types available
            </p>
          )}
        </div>

        {/* Duration */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            Duration
          </h3>
          {loadingDurationRanges ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23263a]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(availableDurationRanges || []).map((duration) => (
                <button
                  key={duration}
                  onClick={() => handleDurationToggle(duration)}
                  className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                    selectedDurationRanges.includes(duration)
                      ? 'bg-[#23263a] text-white'
                      : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          )}
          {!loadingDurationRanges && availableDurationRanges && availableDurationRanges.length === 0 && (
            <p className="text-gray-500 text-sm font-inter text-center py-4">
              No duration ranges available
            </p>
          )}
        </div>

        {/* Regions */}
        <div className="p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            Region
          </h3>
          {loadingRegions ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23263a]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(availableRegions || []).map((region) => (
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
          {!loadingRegions && availableRegions && availableRegions.length === 0 && (
            <p className="text-gray-500 text-sm font-inter text-center py-4">
              No regions available
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
