import React from "react";
import Image from "next/image";
const brandPartners = [
  "Aman Hotels", "Brand here", "Another brand here", "Brand", "Another Brand", "Brand Here", "Brand", "Another Brand goes here"
];
const destinations = [
  "South Africa", "Antarctica", "Alaska", "Arctic Circle & Greenland", "Asia", "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico"
];
const experiences = [
  "Family Friendly", "Adults Only", "Villas", "Beach & Resorts", "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels"
];

export default function OffersFilterSidebar() {
  return (
    <aside className="w-full lg:max-w-sm bg-gray-100 lg:border-r-2 border-gray-300 flex flex-col gap-4 lg:gap-8">
      {/* Travel Dates */}
      <div className="border-b-2 border-gray-300 px-4 lg:px-8 py-4 lg:py-6">
        <h3 className="text-xs font-inter font-bold text-gray-700 mb-2 tracking-widest">TRAVEL DATES</h3>
        <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 mb-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 lg:px-5 py-2 text-xs font-inter font-bold text-gray-400">
            <Image src="/luxufe-icon-calendar.svg" alt="Departure" width={14} height={14} /> Departure
          </button>
          <span className="text-gray-400 flex items-center justify-center sm:justify-start"><Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={14} height={14} /></span>
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 lg:px-5 py-2 text-xs font-inter font-bold text-gray-400">
            <Image src="/luxufe-icon-calendar.svg" alt="Return" width={14} height={14} /> Return
          </button>
        </div>
      </div>
      {/* Brand Partner */}
      <div className="border-b-2 border-gray-300 px-4 lg:px-8 py-4 lg:py-6">
        <h3 className="text-xs font-inter font-bold text-gray-700 mb-2 tracking-widest">BRAND PARTNER</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2 mb-2">
          {brandPartners.map((brand, i) => (
            <button key={i} className="border border-gray-300 bg-gray-200 rounded-full px-2 lg:px-4 py-1 lg:py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-1 lg:gap-2">
              {brand}
              {i === 0 && <span className="ml-1 text-gray-400"><Image src="/luxufe-icon-close-dark.svg" alt="Close" width={12} height={12} /></span>}
            </button>
          ))}
        </div>
        <button className="text-xs font-inter font-bold text-gray-700 mt-2 lg:mt-4">LOAD MORE +</button>
      </div>
      {/* Destination */}
      <div className="border-b-2 border-gray-300 px-4 lg:px-8 py-4 lg:py-6">
        <h3 className="text-xs font-inter font-bold text-gray-700 mb-2 tracking-widest">DESTINATION</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          {destinations.map((dest, i) => (
            <button key={i} className={`border border-gray-300 bg-gray-200 rounded-full px-2 lg:px-4 py-1 lg:py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-1 lg:gap-2`}>
              {dest}
              {i === 0 && <span className="ml-1 text-gray-400"><Image src="/luxufe-icon-close-dark.svg" alt="Close" width={12} height={12} /></span>}
            </button>
          ))}
        </div>
      </div>
      {/* Experience */}
      <div className="border-b-2 border-gray-300 px-4 lg:px-8 py-4 lg:py-6">
        <h3 className="text-xs font-inter font-bold text-gray-700 mb-2 tracking-widest">EXPERIENCE</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          {experiences.map((exp, i) => (
            <button key={i} className="border border-gray-300 bg-gray-200 rounded-full px-2 lg:px-4 py-1 lg:py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-1 lg:gap-2">
              {exp}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
} 