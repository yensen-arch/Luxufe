import React, { useState } from "react";
import { MapPin, Plane, ArrowRight } from "lucide-react";

interface ItineraryCardProps {
  image: string;
  location: string;
  duration: string;
  title: string;
  description: string;
  flightsIncluded: boolean;
  price: string;
}

export default function ItineraryCard({ 
  image, 
  location, 
  duration, 
  title, 
  description, 
  flightsIncluded, 
  price 
}: ItineraryCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock multiple images for carousel
  const images = [
    image,
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  ];

  const handleCardClick = () => {
    // Handle card click - navigate to itinerary details
    console.log("Navigate to itinerary details");
  };

  return (
    <div className="bg-white shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={handleCardClick}>
      {/* Image Section with Carousel */}
      <div className="relative h-80 w-full">
        <img 
          src={images[currentImageIndex]} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        
        {/* Image Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Location and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black" />
            <span className="text-sm font-inter font-bold text-black uppercase">
              {location}
            </span>
          </div>
          <span className="text-sm font-inter font-bold text-gray-500">
            {duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-arpona font-bold text-[#23263a] mb-4 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm font-inter text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Separator */}
        <div className="border-t border-gray-200 mb-4"></div>

        {/* Price and Action Section */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {flightsIncluded && (
              <div className="flex items-center gap-2 mb-2">
                <Plane className="w-4 h-4 text-black" />
                <span className="text-sm font-inter font-bold text-black">
                  Flights Included
                </span>
              </div>
            )}
            <span className="text-lg font-inter font-bold text-[#23263a]">
              {price}
            </span>
          </div>
          
          {/* Action Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="border-2 border-gray-300 bg-white text-gray-600 px-6 py-3 flex items-center gap-2 hover:bg-gray-50 transition font-inter font-bold text-sm"
          >
            EXPLORE ITINERARY
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
