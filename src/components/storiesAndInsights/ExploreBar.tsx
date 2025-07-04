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
      <div className="relative -mt-24 z-30 w-full max-w-6xl">
        <div className="bg-white shadow-2xl flex items-center px-8 py-0 h-20">
          {/* Left: Explore label */}
          <div className="flex items-center pr-8 h-full">
            <span className="text-2xl font-arpona text-[#23263a] font-bold">Explore</span>
          </div>
          {/* Divider */}
          <div className="h-10 w-px bg-gray-500 mx-4" />
          {/* Filters */}
          <div className="flex items-center justify-around flex-1">
            {filters.map((filter, i) => (
              <button
                key={filter.label}
                className="flex items-center gap-2 py-2 font-inter text-xs text-[#23263a] focus:outline-none"
              >
                {/* Radio indicator */}
                <span className={`inline-block w-4 h-4 rounded-full border-2 border-gray-500 flex items-center justify-center`}>
                  {filter.active && <span className="w-2 h-2 bg-gray-500 rounded-full" />}
                </span>
                <span className="text-xs font-inter font-bold">{filter.label}</span>
                {filter.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
              </button>
            ))}
          </div>
          {/* Search */}
          <form className="flex items-center ml-6 w-auto">
            <span className="text-[#23263a] text-xs font-inter font-bold mr-2">Search</span>
            <input
              type="text"
              placeholder=""
              className="border-none outline-none bg-transparent font-inter text-xs px-1 py-2 w-1"
            />
            <button type="submit" className="text-[#23263a] hover:text-black">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 