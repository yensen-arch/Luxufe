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
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-32 pb-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-arpona leading-tight mb-6 max-w-4xl">
          {heading} <span className="font-bellarina">{brandName || 'Luxury'}</span>
        </h1>
        <p className="text-lg font-inter font-bold md:text-xl mb-8 max-w-2xl opacity-90">
          {description}
        </p>
      </div>
      
      {/* Breadcrumb and Image Credit */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-8 pb-6 text-white text-xs font-inter">
        <div>Home &gt; Brands &gt; {brandName || 'Brand'}</div>
        <div>Image: {brandName || 'Luxury'} Brand</div>
      </div>
      
      {/* Tab Bar */}
      <div className="absolute bottom-0 pt-4 left-0 w-full bg-white flex justify-center items-center border-t border-gray-200">
        <div className="flex w-full max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-1 py-3 cursor-pointer text-sm rounded-t-xl font-inter font-bold transition-colors ${
                activeTab === tab.id 
                  ? "bg-[#a8d1cf]/60 text-[#23263a]" 
                  : "bg-white text-[#23263a] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 