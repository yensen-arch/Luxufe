import React from "react";
import { ChevronDown, Search } from "lucide-react";

const filters = [
  { label: "Explore", active: true },
  { label: "Themed Journeys", dropdown: true },
  { label: "Travel Advice" },
  { label: "Itineraries" },
  { label: "Inspiration" },
  { label: "News" },
  { label: "All" },
];

export default function ExploreBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative -mt-24 z-30 w-full max-w-5xl">
        <div className="bg-white shadow-2xl flex flex-col md:flex-row items-center px-6 py-4 md:py-0 md:h-20">
          {/* Filters */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 flex-1">
            {filters.map((filter, i) => (
              <button
                key={filter.label}
                className={`flex items-center gap-1 px-4 py-2 rounded font-inter text-base transition-all ${
                  filter.active
                    ? "bg-gray-100 text-[#23263a] font-bold"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {filter.label}
                {filter.dropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>
          {/* Search */}
          <form className="flex items-center ml-0 md:ml-6 mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-transparent font-inter text-base px-2 py-2 w-32 md:w-24 lg:w-32"
            />
            <button type="submit" className="text-gray-500 hover:text-[#23263a] ml-2">
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 