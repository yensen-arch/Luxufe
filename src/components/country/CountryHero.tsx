"use client";
import React, { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "overview", label: "Overview", sectionId: "overview-section" },
  { id: "itineraries", label: "Itineraries", sectionId: "itineraries-section" },
  { id: "hotels", label: "Hotels", sectionId: "hotels-section" },
  { id: "information", label: "Information", sectionId: "information-section" },
];

interface CountryHeroProps {
  countryName: string;
  countryStats: {
    hotelCount: number;
    cityCount: number;
    brandCount: number;
  };
}

export default function CountryHero({
  countryName,
  countryStats,
}: CountryHeroProps) {
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
    <section className="relative w-full h-[100vh] md:h-[110vh] shadow-lg flex flex-col justify-end mb-6 md:mb-10">
      {/* Background Image */}
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        alt="Africa Landscape"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Content */}
      <div className="md:pt-0 pt-62 relative z-20 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:mt-24 mt-0">
          <div className="px-2 md:px-0">
            <div className="text-white text-xs font-bold mb-4 md:mb-4 font-inter">
              Home &gt; Destinations &gt; Regions &gt; Africa &gt; {countryName}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-arpona text-white font-bold mb-4 md:mb-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <span>Discover</span>{" "}
              <span className="font-bellarina text-4xl md:text-5xl lg:text-7xl">
                {countryName}
              </span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white font-inter mb-8 md:mb-8 max-w-2xl leading-relaxed">
              From iconic landscapes to legendary hospitality, {countryName}{" "}
              redefines luxury through experience
            </p>
            {/* Stats Row */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-white text-base md:text-lg font-inter font-semibold mb-4">
              <span className="flex items-center gap-3">
                <Image
                  src="/luxufe-icon-location-pin-white.svg"
                  alt="Map Pin"
                  width={14}
                  height={14}
                />{" "}
                {countryStats.cityCount} Cit
                {countryStats.cityCount === 1 ? "y" : "ies"}
              </span>
              <span className="flex items-center gap-3">
                <Image
                  src="/luxufe-icon-destination-properties-white.svg"
                  alt="Building"
                  width={14}
                  height={14}
                />{" "}
                {countryStats.hotelCount} Propert
                {countryStats.hotelCount === 1 ? "y" : "ies"}
              </span>
              <span className="flex items-center gap-3">
                <Image
                  src="/luxufe-icon-destinations-itineraries-white.svg"
                  alt="List"
                  width={14}
                  height={14}
                />{" "}
                {countryStats.brandCount} Brand
                {countryStats.brandCount === 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Bar - Hidden on mobile */}
      <div className="absolute hidden md:block bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto md:overflow-x-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id, tab.sectionId)}
                className={`cursor-pointer flex-shrink-0 md:flex-1 py-3 md:py-3 px-3 md:px-6 text-sm md:text-base rounded-t-xl mt-3 font-inter font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#a8d1cf] text-[#23263a] border-b-4 border-[#a8d1cf]"
                    : "bg-white text-[#23263a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
