import React from "react";

const tabs = [
  { label: "Overview", active: true },
  { label: "Itineraries" },
  { label: "Cruise Partners" },
  { label: "Cruise Destinations" },
  { label: "Book a Cruise" },
];

export default function CruisesHero() {
  return (
    <section className="relative w-full h-screen shadow-lg flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
          alt="Cruise Ship"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-20 md:pt-32 pb-16 md:pb-24 text-white text-center px-4 md:px-0">
        <p className="text-2xl md:text-3xl lg:text-5xl font-bellarina italic mb-4 md:mb-6">Luxury Cruises. Redefined</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-arpona leading-tight mb-4 md:mb-6">
          Unforgettable voyages across<br />oceans, rivers, and hidden coasts
        </h1>
      </div>
      {/* Breadcrumb and Image Credit */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-4 md:px-8 pb-4 md:pb-6 text-white text-xs font-inter">
        <div className="text-xs md:text-xs">Home &gt; Journeys &gt; Travel Type: Cruises</div>
        <div className="text-xs md:text-xs">Image: details for the featured image here</div>
      </div>
      {/* Tab Bar */}
      <div className="absolute bottom-0 pt-4 left-0 w-full bg-white flex justify-center items-center border-t border-gray-200">
        <div className="flex w-full max-w-5xl mx-auto overflow-x-auto md:overflow-x-visible">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`flex-shrink-0 md:flex-1 py-2 md:py-3 px-2 md:px-0 text-xs md:text-sm rounded-t-xl font-inter font-bold transition-colors ${tab.active ? "bg-[#a8d1cf]/60 text-[#23263a]" : "bg-white text-[#23263a] hover:bg-gray-100"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 