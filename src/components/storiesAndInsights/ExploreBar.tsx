import React from "react";
import { ChevronDown, Search } from "lucide-react";

const filters = [
  { label: "Themed Journeys", dropdown: true },
  { label: "Travel Advice", active: true },
  { label: "Itineraries" },
  { label: "Inspiration" },
  { label: "News" },
  { label: "All" },
];

export default function ExploreBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative -mt-16 md:-mt-20 lg:-mt-24 z-30 w-full max-w-6xl">
        <div className="bg-white shadow-2xl flex items-center px-4 md:px-6 lg:px-8 py-0 h-16 md:h-18 lg:h-20">
          {/* Left: Explore label */}
          <div className="flex items-center pr-4 md:pr-6 lg:pr-8 h-full">
            <span className="text-lg md:text-xl lg:text-2xl font-arpona text-[#23263a] font-bold">Explore</span>
          </div>
          {/* Divider */}
          <div className="h-8 md:h-10 w-px bg-gray-500 mx-2 md:mx-3 lg:mx-4" />
          {/* Filters */}
          <div className="hidden md:flex items-center justify-around flex-1">
            {filters.map((filter, i) => (
              <button
                key={filter.label}
                className="flex items-center gap-2 py-2 font-inter text-xs text-[#23263a] focus:outline-none"
              >
                {/* Radio indicator - only for non-dropdown filters */}
                {!filter.dropdown && (
                  <span className={`inline-block w-4 h-4 rounded-full border-2 border-gray-500 flex items-center justify-center`}>
                    {filter.active && <span className="w-2 h-2 bg-gray-500 rounded-full" />}
                  </span>
                )}
                <span className="text-xs font-inter font-bold">{filter.label}</span>
                {filter.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
            ))}
          </div>
          {/* Mobile: Simplified filters */}
          <div className="md:hidden flex items-center flex-1">
            <button className="flex items-center gap-2 py-2 font-inter text-xs text-[#23263a] focus:outline-none">
              <span className="inline-block w-3 h-3 rounded-full border-2 border-gray-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
              </span>
              <span className="text-xs font-inter font-bold">Travel Advice</span>
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>
          </div>
          {/* Search */}
          <form className="flex items-center ml-3 md:ml-4 lg:ml-6 w-auto">
            <span className="hidden md:inline text-[#23263a] text-xs font-inter font-bold mr-2">Search</span>
            <input
              type="text"
              placeholder=""
              className="border-none outline-none bg-transparent font-inter text-xs px-1 py-2 w-1"
            />
            <button type="submit" className="text-[#23263a] hover:text-black">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 