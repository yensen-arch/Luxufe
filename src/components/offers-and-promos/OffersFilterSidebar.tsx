import React from "react";
import { Calendar, Search } from "lucide-react";

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
    <aside className="w-full max-w-xs bg-[#f7f7fa] border-r border-gray-200 p-8 flex flex-col gap-8 min-h-screen">
      {/* Travel Dates */}
      <div>
        <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">TRAVEL DATES</h3>
        <div className="flex gap-3 mb-2">
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
            <Calendar className="w-4 h-4" /> Departure
          </button>
          <span className="text-gray-400 flex items-center">→</span>
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
            <Calendar className="w-4 h-4" /> Return
          </button>
        </div>
      </div>
      {/* Search */}
      <div>
        <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">SEARCH</h3>
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-transparent outline-none text-xs font-inter font-bold text-gray-500"
          />
          <button className="ml-2 bg-[#23263a] text-white rounded-full p-2 flex items-center justify-center">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Brand Partner */}
      <div>
        <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">BRAND PARTNER</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {brandPartners.map((brand, i) => (
            <button key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-2">
              {brand}
              {i === 0 && <span className="ml-1 text-gray-400">×</span>}
            </button>
          ))}
        </div>
        <button className="text-xs font-inter font-bold text-gray-400 mt-2">LOAD MORE +</button>
      </div>
      {/* Destination */}
      <div>
        <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">DESTINATION</h3>
        <div className="flex flex-wrap gap-2">
          {destinations.map((dest, i) => (
            <button key={i} className={`bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold ${i === 0 ? "text-[#23263a] border-[#23263a]" : "text-gray-400"} flex items-center gap-2`}>
              {dest}
              {i === 0 && <span className="ml-1 text-gray-400">×</span>}
            </button>
          ))}
        </div>
      </div>
      {/* Experience */}
      <div>
        <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">EXPERIENCE</h3>
        <div className="flex flex-wrap gap-2">
          {experiences.map((exp, i) => (
            <button key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-2">
              {exp}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
} 