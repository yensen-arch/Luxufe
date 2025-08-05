"use client"
import React, { useState } from "react";
import { Calendar, Filter, X } from "lucide-react";

interface HighestBrandSearchSidebarProps {
  onFiltersChange: (filters: {
    search: string;
    cruiseLine: string;
    shipName: string;
    destinations: string[];
    experiences: string[];
    specialOffers: boolean;
  }) => void;
  loading?: boolean;
}

const destinationOptions = [
  "South Africa", "Antarctica", "Alaska", "Arctic Circle & Greenland", 
  "Asia", "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico"
];

const experienceOptions = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", 
  "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels"
];

export default function HighestBrandSearchSidebar({ onFiltersChange, loading }: HighestBrandSearchSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cruiseLine, setCruiseLine] = useState("");
  const [shipName, setShipName] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDestinationToggle = (destination: string) => {
    const newDestinations = selectedDestinations.includes(destination)
      ? selectedDestinations.filter(d => d !== destination)
      : [...selectedDestinations, destination];
    setSelectedDestinations(newDestinations);
    updateFilters(newDestinations, selectedExperiences);
  };

  const handleExperienceToggle = (experience: string) => {
    const newExperiences = selectedExperiences.includes(experience)
      ? selectedExperiences.filter(e => e !== experience)
      : [...selectedExperiences, experience];
    setSelectedExperiences(newExperiences);
    updateFilters(selectedDestinations, newExperiences);
  };

  const updateFilters = (destinations: string[], experiences: string[]) => {
    onFiltersChange({
      search: searchTerm,
      cruiseLine,
      shipName,
      destinations,
      experiences,
      specialOffers
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

      <aside className={`w-full min-h-[170vh] max-w-md bg-[#f5f6f7] border-r-2 border-gray-300 flex flex-col transition-transform duration-300 ease-in-out ${
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

        {/* Travel Dates */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">TRAVEL DATES</h3>
          <div className="flex gap-3 mb-2">
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
              <Calendar className="w-4 h-4" /> Departure
            </button>
            <span className="text-gray-400 flex items-center">→</span>
            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
              <Calendar className="w-4 h-4" /> Arrival
            </button>
          </div>
        </div>

        {/* Cruise Line */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">CRUISE LINE</h3>
          <select 
            className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400"
            value={cruiseLine}
            onChange={(e) => {
              setCruiseLine(e.target.value);
              updateFilters(selectedDestinations, selectedExperiences);
            }}
          >
            <option value="">Select a brand...</option>
          </select>
        </div>

        {/* Ship Name */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">SHIP NAME</h3>
          <select 
            className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400"
            value={shipName}
            onChange={(e) => {
              setShipName(e.target.value);
              updateFilters(selectedDestinations, selectedExperiences);
            }}
          >
            <option value="">Select a ship...</option>
          </select>
        </div>

        {/* Destination */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">DESTINATION</h3>
          <div className="flex flex-wrap gap-2">
            {destinationOptions.map((dest) => (
              <button 
                key={dest}
                onClick={() => handleDestinationToggle(dest)}
                className={`px-4 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                  selectedDestinations.includes(dest)
                    ? 'bg-[#23263a] text-white'
                    : 'bg-white border border-gray-200 text-gray-400 hover:bg-gray-50'
                }`}
              >
                {dest}
                {selectedDestinations.includes(dest) && <span className="ml-1">×</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="border-b-2 border-gray-300 p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">EXPERIENCE</h3>
          <div className="flex flex-wrap gap-2">
            {experienceOptions.map((exp) => (
              <button 
                key={exp}
                onClick={() => handleExperienceToggle(exp)}
                className={`px-4 py-2 rounded-full text-xs font-inter font-bold transition cursor-pointer ${
                  selectedExperiences.includes(exp)
                    ? 'bg-[#23263a] text-white'
                    : 'bg-white border border-gray-200 text-gray-400 hover:bg-gray-50'
                }`}
              >
                {exp}
              </button>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="p-6">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">SPECIAL OFFERS</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-inter font-bold text-gray-400">Trips that offer exceptional value or discounted rates</span>
            <input 
              type="checkbox" 
              className="form-checkbox h-4 w-4 text-[#23263a]"
              checked={specialOffers}
              onChange={(e) => {
                setSpecialOffers(e.target.checked);
                updateFilters(selectedDestinations, selectedExperiences);
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
} 