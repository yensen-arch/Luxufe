'use client'

import React, { useState } from "react";
import { getImageUrl } from "@/lib/sanity/brandPage";
import { Brand } from "@/lib/database";

interface BrandHeroProps {
  data?: {
    heading?: string;
    description?: string;
    backgroundImage?: any;
  };
  brandName?: string;
  brandData?: Brand | null;
}

const tabs = [
  { label: "Philosophy", id: "philosophy", active: true },
  { label: "Why We Travel", id: "why-we-travel" },
  { label: "Benefits", id: "benefits" },
  { label: "Itineraries", id: "itineraries" },
  { label: "Contact", id: "contact" },
];

export default function BrandHero({ data, brandName, brandData }: BrandHeroProps) {
  const [activeTab, setActiveTab] = useState("philosophy");

  // Fallback content if no data is provided
  const heading = data?.heading || `Experience the pinnacle of luxury with`;
  const description = data?.description || "Discover unparalleled service, exceptional amenities, and unforgettable experiences that define true luxury hospitality.";
  
  // Use brand image from database as priority, then Sanity data, then fallback
  const backgroundImage = brandData?.brand_image || 
                         (data?.backgroundImage ? getImageUrl(data.backgroundImage) : null) ||
                         "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80";

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    // Smooth scroll to the relevant section
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative w-full h-[110vh] shadow-lg flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt={`${brandName || 'Luxury Brand'} Hero`}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-2 pb-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-arpona font-bold leading-tight mb-6 max-w-4xl">
          {heading} <span className="font-bellarina font-light">{brandName || 'Luxury'}</span>
        </h1>
        <p className="text-lg font-inter font-bold md:text-lg mb-8 max-w-2xl opacity-90">
          {description}
        </p>
      </div>
      
      {/* Breadcrumb and Image Credit */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-8 pb-6 text-white text-xs font-inter">
        <div>Home &gt; Brands &gt; {brandName || 'Brand'}</div>
        <div>Image: {brandName || 'Luxury'} Brand</div>
      </div>
      
      {/* Tab Bar - Hidden on mobile */}
      <div className="absolute hidden md:block bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30">
        <div className="max-w-5xl mx-auto">
          <div className="flex overflow-x-auto md:overflow-x-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
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