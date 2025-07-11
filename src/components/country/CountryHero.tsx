import { BookOpen, Building2, MapPin } from "lucide-react";
import React from "react";

const tabs = [
  { label: "Overview", active: true },
  { label: "Itineraries" },
  { label: "Cruise Partners" },
  { label: "Cruise Destinations" },
  { label: "Book a Cruise" },
];

export default function CountryHero() {
  return (
    <section className="relative w-full h-screen shadow-lg flex flex-col justify-end">
      {/* Background Image */}
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-8">
        <div className="mt-24">
          <div className="text-white text-sm mb-4 font-inter opacity-80">
            Home &gt; Destinations &gt; Regions &gt; Africa
          </div>
          <h1 className="text-5xl md:text-7xl font-arpona text-white font-bold mb-4 flex items-center gap-4">
            Discover <span className="font-bellarina text-5xl md:text-7xl">Africa</span>
          </h1>
          <p className="text-lg md:text-2xl text-white font-inter mb-8 max-w-2xl">
            From iconic landscapes to legendary hospitality, Africa redefines luxury through experience
          </p>
          {/* Stats Row */}
          <div className="flex items-center gap-8 text-white text-base md:text-lg font-inter font-semibold mb-2">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> 23 Countries
            </span>
            <span className="flex items-center gap-2">
              <Building2 className="w-5 h-5" /> 123 Properties
            </span>
            <span className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> 87 Itineraries
            </span>
          </div>
        </div>
      </div>
      {/* Tab Bar */}
      <div className="absolute bottom-0 pt-4 left-0 w-full bg-white flex justify-center items-center border-t border-gray-200">
        <div className="flex w-full max-w-5xl mx-auto">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`flex-1 py-3 text-sm rounded-t-xl font-inter font-bold transition-colors ${tab.active ? "bg-[#a8d1cf]/60 text-[#23263a]" : "bg-white text-[#23263a] hover:bg-gray-100"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 