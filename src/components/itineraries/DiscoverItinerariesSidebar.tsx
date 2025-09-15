"use client"
import React, { useState } from "react";
import { Search, Send, Filter, X } from "lucide-react";

interface DiscoverItinerariesSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
  }) => void;
  filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
  };
}

const destinationOptions = [
  "South Africa", "Antarctica", "Alaska", "Arctic Circle & Greenland", 
  "Asia", "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico"
];

const experienceOptions = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
  "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels"
];

export default function DiscoverItinerariesSidebar({ onFiltersChange, filters }: DiscoverItinerariesSidebarProps) {
  const [searchTerm, setSearchTerm] = useState(filters.search);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    onFiltersChange({
      ...filters,
      search: searchTerm
    });
  };

  const handleDestinationToggle = (destination: string) => {
    const newDestinations = filters.destinations.includes(destination)
      ? filters.destinations.filter(d => d !== destination)
      : [...filters.destinations, destination];
    
    onFiltersChange({
      ...filters,
      destinations: newDestinations
    });
  };

  const handleExperienceToggle = (experience: string) => {
    const newExperiences = filters.experiences.includes(experience)
      ? filters.experiences.filter(e => e !== experience)
      : [...filters.experiences, experience];
    
    onFiltersChange({
      ...filters,
      experiences: newExperiences
    });
  };

  const handleSpecialOffersToggle = () => {
    onFiltersChange({
      ...filters,
      specialOffers: !filters.specialOffers
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
        
        {/* Search Section */}
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

        {/* Destinations Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            DESTINATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {destinationOptions.map((destination) => (
              <button
                key={destination}
                onClick={() => handleDestinationToggle(destination)}
                className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer flex items-center justify-between ${
                  filters.destinations.includes(destination)
                    ? 'bg-gray-400 text-white'
                    : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                }`}
              >
                <span>{destination}</span>
                {filters.destinations.includes(destination) && (
                  <X className="w-3 h-3 ml-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            EXPERIENCE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {experienceOptions.map((experience) => (
              <button
                key={experience}
                onClick={() => handleExperienceToggle(experience)}
                className={`px-2 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                  filters.experiences.includes(experience)
                    ? 'bg-gray-400 text-white'
                    : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                }`}
              >
                {experience}
              </button>
            ))}
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="p-6">
          <h3 className="text-2xl font-arpona font-bold text-gray-700 mb-4">
            SPECIAL OFFERS
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm font-inter text-gray-600">
              Trips that offer exceptional value or discounted rates
            </p>
            <button
              onClick={handleSpecialOffersToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                filters.specialOffers ? 'bg-[#23263a]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  filters.specialOffers ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
