import React from "react";
import { Star } from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  image: string;
  rating?: number;
  className?: string;
}

export default function PropertyCard({ 
  name, 
  location, 
  image, 
  rating = 5, 
  className = "" 
}: PropertyCardProps) {
  return (
    <div className={`relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}>
      {/* Background Image */}
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        {/* Star Rating */}
        <div className="flex justify-center mb-2 md:mb-3">
          {[...Array(rating)].map((_, index) => (
            <Star 
              key={index} 
              className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" 
            />
          ))}
        </div>
        
        {/* Property Name */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-arpona font-bold text-center mb-1 md:mb-2">
          {name}
        </h3>
        
        {/* Location */}
        <p className="text-sm md:text-base font-inter text-center text-white/90">
          {location}
        </p>
      </div>
    </div>
  );
} 