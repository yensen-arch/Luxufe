import React from "react";
import { ChevronDown } from "lucide-react";

interface LatestGreatestFilterProps {
  data?: {
    title: string
    description: string
  }
}

export default function LatestGreatestFilter({ data }: LatestGreatestFilterProps) {
  // Fallback data
  const fallbackData = {
    title: 'The Latest from The Greatest',
    description: 'We always want our clients to experience more. Here are the latest, and greatest, luxury travel offers, promotions and itineraries from our elite partners.'
  }

  const filterData = data || fallbackData

  return (
    <section className="w-full flex flex-col items-center py-20 bg-white">
      <h2 className="text-6xl font-arpona font-bold text-center text-[#23263a] mb-6">{filterData.title}</h2>
      <p className="text-lg font-bold font-inter text-[#23263a] text-center mb-14 max-w-3xl">
        {filterData.description}
      </p>
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-2xl">
          <div className="bg-white shadow-xl flex items-center px-8 py-7">
            {/* Left: Filter label */}
            <div className="flex items-center pr-8 h-full">
              <span className="text-2xl font-arpona text-[#23263a] font-normal">Filter</span>
            </div>
            {/* Divider */}
            <div className="h-8 w-px bg-gray-300 mx-6" />
            {/* Filters */}
            <div className="flex items-center gap-6 flex-1">
              <button className="flex items-center gap-2 text-sm font-inter text-[#23263a] focus:outline-none">
                By Brand <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button className="flex items-center gap-2 font-inter text-[#23263a] focus:outline-none">
                By Destination <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <button className="flex items-center gap-2 font-inter text-[#23263a] focus:outline-none">
                By Itinerary <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <label className="flex items-center gap-2 font-inter text-[#23263a] cursor-pointer">
                <input type="radio" name="filter" className="accent-[#23263a]" defaultChecked />
                All
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 