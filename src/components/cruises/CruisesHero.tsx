"use client";
import React, { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview", sectionId: "curated-for-you" },
  { id: "itineraries", label: "Itineraries", sectionId: "curated-for-you" },
  { id: "partners", label: "Cruise Partners", sectionId: "trusted-cruise-partners" },
  { id: "destinations", label: "Cruise Destinations", sectionId: "travel-the-world" },
  { id: "book", label: "Book a Cruise", sectionId: "set-sail-with-luxufe" },
];

export default function CruisesHero() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tabId: string, sectionId: string) => {
    setActiveTab(tabId);
    
    // Scroll to the corresponding section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full  border-b border-gray-300 shadow-lg">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] shadow-lg flex flex-col justify-end">
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
        </div>
      </section>

      {/* Tab Navigation - Hidden on mobile */}
      <div className="hidden md:block w-full bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto md:overflow-x-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`flex-shrink-0 md:flex-1 py-3 md:py-3 px-3 md:px-6 text-sm md:text-base rounded-t-xl mt-3 font-inter font-bold transition-all duration-200${
                  activeTab === tab.id
                    ? "bg-[#a8d1cf] text-[#23263a] border-b-4 border-[#a8d1cf]"
                    : "bg-white text-[#23263a] hover:bg-[#a8d1cf]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 