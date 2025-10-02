"use client"
import React, { useState } from "react";
import Image from "next/image";

interface DiscoverItinerariesSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
    travelDates: {
      departure: string;
      arrival: string;
    };
    cruiseLine: string;
    shipName: string;
  }) => void;
  filters: {
    search: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
    travelDates: {
      departure: string;
      arrival: string;
    };
    cruiseLine: string;
    shipName: string;
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

const cruiseLineOptions = [
  "Crystal Cruises", "Regent Seven Seas", "Seabourn", "Silversea", 
  "Oceania Cruises", "Azamara", "Viking Ocean", "Windstar Cruises"
];

const shipNameOptions = [
  "Crystal Symphony", "Regent Seven Seas Explorer", "Seabourn Quest", 
  "Silver Muse", "Oceania Marina", "Azamara Quest", "Viking Star", "Wind Surf"
];

export default function DiscoverItinerariesSidebar({ onFiltersChange, filters }: DiscoverItinerariesSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTravelDateChange = (field: 'departure' | 'arrival', value: string) => {
    onFiltersChange({
      ...filters,
      travelDates: {
        ...filters.travelDates,
        [field]: value
      }
    });
  };

  const handleCruiseLineChange = (cruiseLine: string) => {
    onFiltersChange({
      ...filters,
      cruiseLine
    });
  };

  const handleShipNameChange = (shipName: string) => {
    onFiltersChange({
      ...filters,
      shipName
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
            <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={24} height={24} className="w-6 h-6" />
          </button>
        </div>

        {/* Travel Dates Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
            TRAVEL DATES
          </h3>
          <div className="space-y-4 ">
            <div className="flex items-center gap-2">
              <Image src="/luxufe-icon-calendar.svg" alt="Calendar" width={14} height={14} className="w-4 h-4 text-gray-500" />
              <input
                type="date"
                value={filters.travelDates.departure}
                onChange={(e) => handleTravelDateChange('departure', e.target.value)}
                className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                placeholder="Departure"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={14} height={14} className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <Image src="/luxufe-icon-calendar.svg" alt="Calendar" width={14} height={14} className="w-4 h-4 text-gray-500" />
              <input
                type="date"
                value={filters.travelDates.arrival}
                onChange={(e) => handleTravelDateChange('arrival', e.target.value)}
                className="flex-1 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                placeholder="Arrival"
              />
            </div>
          </div>
        </div>

        {/* Cruise Line Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
            CRUISE LINE
          </h3>
          <div className="relative">
            <select
              value={filters.cruiseLine}
              onChange={(e) => handleCruiseLineChange(e.target.value)}
              className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm appearance-none bg-white"
            >
              <option value="">Select a brand...</option>
              {cruiseLineOptions.map((line) => (
                <option key={line} value={line}>
                  {line}
                </option>
              ))}
            </select>
            <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow down" width={14} height={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Ship Name Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
            SHIP NAME
          </h3>
          <div className="relative">
            <select
              value={filters.shipName}
              onChange={(e) => handleShipNameChange(e.target.value)}
              className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm appearance-none bg-white"
            >
              <option value="">Select a ship...</option>
              {shipNameOptions.map((ship) => (
                <option key={ship} value={ship}>
                  {ship}
                </option>
              ))}
            </select>
            <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow down" width={14} height={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Destinations Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
            DESTINATIONS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {destinationOptions.map((destination) => (
              <button
                key={destination}
                onClick={() => handleDestinationToggle(destination)}
                className={`px-2 py-2 rounded-full text-xs font-inter text-center font-bold transition cursor-pointer ${
                  filters.destinations.includes(destination)
                    ? 'bg-gray-400 text-white'
                    : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                }`}
              >
                {destination}
                {filters.destinations.includes(destination) && (
                  <Image src="/luxufe-icon-close-dark.svg" alt="Close" width={14} height={14} className="w-3 h-3 ml-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
            EXPERIENCE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {experienceOptions.map((experience) => (
              <button
                key={experience}
                onClick={() => handleExperienceToggle(experience)}
                className={`px-2 py-2 rounded-full text-xs font-inter text-center font-bold transition cursor-pointer ${
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
          <h3 className="text-sm font-inter font-bold text-gray-700 mb-4">
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
