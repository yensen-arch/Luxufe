import React from "react";
import Image from "next/image";
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
      <Image 
        src={image} 
        alt={name}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        {/* Star Rating */}
        <div className="flex justify-center mb-2 md:mb-3">
          {[...Array(rating)].map((_, index) => (
            <Image 
              key={index} 
              src="/luxufe-icon-star-ratings-solid-white.svg" 
              alt="Star" 
              width={16}
              height={16}
              className="w-4 h-3 md:w-5 md:h-4 text-white" 
            />
          ))}
        </div>
        
        {/* Property Name */}
        <h3 className="text-lg md:text-xl lg:text-xl font-arpona text-center mb-1 md:mb-2">
          {name}
        </h3>
        
        {/* Location */}
        <p className="text-sm font-bold font-inter text-center text-white/90">
          {location}
        </p>
      </div>
    </div>
  );
} 