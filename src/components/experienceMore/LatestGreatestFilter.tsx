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
    <section className="w-full flex flex-col items-center py-12 md:py-16 lg:py-20 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold text-center text-[#23263a] mb-4 md:mb-5 lg:mb-6 px-4">{filterData.title}</h2>
      <p className="text-sm md:text-base lg:text-lg font-bold font-inter text-[#23263a] text-center mb-8 md:mb-10 lg:mb-14 max-w-3xl px-4">
        {filterData.description}
      </p>
      <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
        <div className="relative w-full max-w-2xl">
          <div className="bg-white shadow-xl flex flex-col md:flex-row items-center px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-7">
            {/* Left: Filter label */}
            <div className="flex items-center pr-0 md:pr-4 lg:pr-8 h-full mb-4 md:mb-0">
              <span className="text-lg md:text-xl lg:text-2xl font-arpona text-[#23263a] font-normal">Filter</span>
            </div>
            {/* Divider */}
            <div className="hidden md:block h-8 w-px bg-gray-300 mx-3 md:mx-4 lg:mx-6" />
            {/* Filters */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-6 flex-1 w-full md:w-auto">
              <button className="flex items-center gap-2 text-xs md:text-sm font-inter text-[#23263a] focus:outline-none w-full md:w-auto justify-center md:justify-start">
                By Brand <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </button>
              <button className="flex items-center gap-2 text-xs md:text-sm font-inter text-[#23263a] focus:outline-none w-full md:w-auto justify-center md:justify-start">
                By Destination <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </button>
              <button className="flex items-center gap-2 text-xs md:text-sm font-inter text-[#23263a] focus:outline-none w-full md:w-auto justify-center md:justify-start">
                By Itinerary <ChevronDown className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </button>
              <label className="flex items-center gap-2 text-xs md:text-sm font-inter text-[#23263a] cursor-pointer w-full md:w-auto justify-center md:justify-start">
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