import React from "react";
import Link from "next/link";
import { LandItinerary } from "@/lib/database";

interface LandItineraryCardProps {
  itinerary: LandItinerary;
}

export default function LandItineraryCard({ itinerary }: LandItineraryCardProps) {
  // Parse gallery to get hero image
  const getHeroImage = () => {
    try {
      if (itinerary.gallery) {
        const galleryImages = JSON.parse(itinerary.gallery.replace(/'/g, '"'));
        return galleryImages.length > 0 ? galleryImages[0] : null;
      }
    } catch (error) {
      console.error('Error parsing gallery:', error);
    }
    return null;
  };

  const heroImage = getHeroImage();

  return (
    <Link 
      href={`/itineraries/land/${itinerary.id}`}
      className="group block bg-white h-[350px] md:h-[350px] lg:h-[350px] w-[400px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="bg-gray-200 w-full h-48">
        {heroImage ? (
          <img
            src={heroImage}
            alt={itinerary.itinerary_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-arpona font-bold text-gray-900 mb-2 group-hover:text-[#A5C8CE] transition-colors">
          {itinerary.itinerary_name}
        </h3>
        <p className="text-sm text-gray-600 font-inter mb-3">
          {itinerary.destinations}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-inter font-bold text-gray-700">
            {itinerary.duration}
          </span>
          <span className="text-xs font-inter text-gray-500">
            Land Journey
          </span>
        </div>
      </div>
    </Link>
  );
}
