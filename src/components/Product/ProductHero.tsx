"use client";

import React, { useState } from "react";
import { getHotelGallery, getHotelHeroImage } from "@/lib/database";
import { Hotel } from "@/lib/database";
import Image from "next/image";
interface ProductHeroProps {
  hotel: Hotel;
}

const tabs = [
  { label: "Overview", id: "overview" },
  { label: "Activities", id: "what-to-do" },
  { label: "Rooms & Suites", id: "rooms-and-suites" },
  { label: "Gallery", id: "gallery" },
  { label: "Itineraries", id: "itineraries" },
];

const ProductHero = ({ hotel }: ProductHeroProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [backgroundImage, setBackgroundImage] = React.useState<string>(
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
  );
  const [isLoading, setIsLoading] = React.useState(true);

  // Fetch images on component mount
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const [heroImage, galleryImages] = await Promise.all([
          getHotelHeroImage(hotel.hotel_name),
          getHotelGallery(hotel.hotel_name),
        ]);

        // Use hero image if available, otherwise fall back to first gallery image
        const image =
          heroImage ||
          (galleryImages.length > 0
            ? galleryImages[0]
            : "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80");

        setBackgroundImage(image);
      } catch (error) {
        console.error("Error fetching images:", error);
        setBackgroundImage(
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [hotel.hotel_name]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    // Smooth scroll to the relevant section
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full h-[110vh] shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {!isLoading && backgroundImage && (
        <Image
          src={backgroundImage}
          alt={`${hotel.hotel_name} - ${hotel.city}, ${hotel.country}`}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          width={1000}
          height={1000}
          priority
        />
      )}
      
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 w-full h-full bg-gray-200 z-0 animate-pulse" />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full md:px-4 text-center md:mb-20">
        <h1 className="md:w-3/5 text-white text-4xl md:text-5xl lg:text-6xl font-arpona font-light mb-0 leading-tight">
          {hotel.hotel_name}
        </h1>
        <span className="font-inter font-bold uppercase text-sm md:text-md text-white mb-4 block">
          {hotel.city}, {hotel.country}
        </span>
      </div>

      {/* Breadcrumb and image credit */}
      <div className="absolute left-10 bottom-30 z-30 text-white text-xs md:text-xs font-bold font-inter">
        Home &gt; Hotels &gt; {hotel.brand} &gt; {hotel.hotel_name}
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
};

export default ProductHero;
