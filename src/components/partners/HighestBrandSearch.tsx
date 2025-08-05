import React from "react";
import { Calendar, Search, Bed, Lock } from "lucide-react";

const cruises = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Silversea_Cruises_logo.svg",
    suites: 50,
    itineraries: 12,
  },
];

export default function HighestBrandSearch() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f7f7fa]">
      {/* Sidebar */}
      <aside className="w-full max-w-xs bg-[#f7f7fa] border-r border-gray-300 flex flex-col gap-8 p-8">
        {/* Travel Dates */}
        <div className="mb-8">
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
        <div className="mb-8">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">CRUISE LINE</h3>
          <select className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
            <option>Select a brand...</option>
          </select>
        </div>
        {/* Ship Name */}
        <div className="mb-8">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">SHIP NAME</h3>
          <select className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400">
            <option>Select a ship...</option>
          </select>
        </div>
        {/* Destination */}
        <div className="mb-8">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">DESTINATION</h3>
          <div className="flex flex-wrap gap-2">
            {["South Africa", "Antarctica", "Alaska", "Arctic Circle & Greenland", "Asia", "Australia & New Zealand", "Caribbean Islands", "Central America & Mexico"].map((dest, i) => (
              <button key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-2">
                {dest}
                {i === 0 && <span className="ml-1 text-gray-400">×</span>}
              </button>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">EXPERIENCE</h3>
          <div className="flex flex-wrap gap-2">
            {["Family Friendly", "Adults Only", "Villas", "Beach & Resorts", "Safari & Wilderness", "Ski Resorts", "Sport & Hobbies", "Hotels"].map((exp, i) => (
              <button key={i} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-inter font-bold text-gray-400 flex items-center gap-2">
                {exp}
              </button>
            ))}
          </div>
        </div>
        {/* Special Offers */}
        <div className="mb-8">
          <h3 className="text-xs font-inter font-bold text-gray-500 mb-2 tracking-widest">SPECIAL OFFERS</h3>
          <div className="flex items-center gap-2">
            <span className="text-xs font-inter font-bold text-gray-400">Trips that offer exceptional value or discounted rates</span>
            <input type="checkbox" className="form-checkbox h-4 w-4 text-[#23263a]" />
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Search Bar */}
        <div className="flex items-center mb-8 bg-white border border-gray-200 rounded-full px-6 py-2 text-sm font-inter font-bold text-gray-500 mr-4 placeholder:text-gray-500">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 "
          />
          <button className="bg-[#23263a] text-white rounded-full p-1 flex items-center justify-center">
            <Search className="w-5 h-5" />
          </button>
        </div>
        {/* Results Count */}
        <div className="mb-6 text-gray-400 text-sm font-inter font-bold">Showing 3 of 10 Results</div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {cruises.map((cruise, idx) => (
            <div key={idx} className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-64 w-full">
                <img src={cruise.image} alt="Cruise" className="w-full h-full object-cover" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
                  <div className="bg-white px-8 py-3 rounded-t shadow flex flex-col items-center">
                    <img src={cruise.logo} alt="Brand Logo" className="h-8 mb-2 object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 items-center justify-between px-4 pt-10 pb-6">
                <div className="flex justify-center gap-8 w-full border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 text-gray-700 font-inter font-bold text-base">
                    <Bed className="w-5 h-5 mr-1" />
                    {cruise.suites} suites
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-inter font-bold text-base">
                    <Lock className="w-5 h-5 mr-1" />
                    {cruise.itineraries} itineraries
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 my-8 text-gray-500 font-inter font-bold text-xs">
          <button className="hover:underline">&lt; Previous</button>
          {[1, 2, 3, 4].map((page) => (
            <button key={page} className={`px-2 ${page === 1 ? "text-[#23263a] font-bold" : ""}`}>{String(page).padStart(2, "0")}</button>
          ))}
          <button className="hover:underline">Next &gt;</button>
        </div>
      </main>
    </div>
  );
} 