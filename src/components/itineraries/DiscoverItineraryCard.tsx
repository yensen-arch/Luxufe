import React from "react";
import Image from "next/image";
import { MapPin, Plane, CreditCard, ArrowRight } from "lucide-react";

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
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
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
            <MapPin className="w-4 h-4 text-black" />
            <span className="text-sm font-inter font-bold text-black">{location}</span>
          </div>
          <span className="text-sm font-inter font-bold text-black">{duration}</span>
        </div>

        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-xl font-arpona font-bold text-black mb-3">{title}</h3>
          <p className="text-sm font-inter text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* Inclusions and Price */}
        <div className="space-y-2 mb-6">
          {flightsIncluded && (
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-inter text-gray-600">Flights Included</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-inter text-gray-600">{price}</span>
          </div>
        </div>

        {/* Explore Button */}
        <button className="flex items-center gap-2 text-sm font-inter font-bold text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors self-end">
          EXPLORE ITINERARY
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
