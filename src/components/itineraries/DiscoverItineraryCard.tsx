import React from "react";
import Image from "next/image";

interface DiscoverItineraryCardProps {
  image: string;
  location: string;
  duration: string;
  title: string;
  description: string;
  flightsIncluded: boolean;
  price: string;
}

export default function DiscoverItineraryCard({
  image,
  location,
  duration,
  title,
  description,
  flightsIncluded,
  price
}: DiscoverItineraryCardProps) {
  return (
    <div className="flex bg-white shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className="w-1/2 relative">
        <Image 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
          width={400} 
          height={300} 
        />
        {/* Image dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        {/* Header with location and duration */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Image src="/luxufe-map-icon-large-location-pin-dark.svg" alt="Map pin" width={14} height={14} className="w-4 h-4 text-black" />
            <span className="text-sm font-inter font-bold text-black">{location}</span>
          </div>
          <span className="text-xs font-inter font-bold text-gray-600">{duration}</span>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-arpona font-bold text-black mb-3">{title}</h3>
          <p className="text-sm font-inter text-gray-600 leading-relaxed font-bold">{description}</p>
        </div>

        {/* Separator line */}
        <div className="border-t-2 border-gray-300 mb-4"></div>

        {/* Inclusions and Price */}
        <div className="space-y-2 mb-6">
          {flightsIncluded && (
            <div className="flex items-center gap-2">
              <Image src="/luxufe-icon-flights-dark.svg" alt="Plane" width={14} height={14} className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-inter text-gray-600 font-bold">Flights Included</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Image src="/luxufe-icon-cost-dark.svg" alt="Credit card" width={14} height={14} className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-inter text-gray-600 font-bold">{price}</span>
          </div>
        </div>

        {/* Explore Button */}
        <button className="flex items-center gap-2 text-xs font-inter font-bold text-gray-700 border-2 border-gray-300 px-6 py-4 hover:bg-gray-50 transition-colors self-end">
          EXPLORE ITINERARY
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={14} height={14} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
