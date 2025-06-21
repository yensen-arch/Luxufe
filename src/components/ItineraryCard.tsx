import { ArrowRight, MapPin, X } from 'lucide-react';
import React from 'react';

interface ItineraryCardProps {
  location: string;
  nights: number;
  imageUrl: string;
  name: string;
  price?: number;
  description?: string;
  isFeatured?: boolean;
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  location,
  nights,
  imageUrl,
  name,
  price,
  description,
  isFeatured = false,
}) => {
  if (isFeatured) {
    return (
      <div className="flex-shrink-0 w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden mx-2">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="p-4 flex justify-between items-start text-white">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3 py-1 text-xs">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="bg-black/40 rounded-full px-3 py-1 text-xs">
              {nights} Nights
            </div>
          </div>
        </div>
        <div className="p-6 text-gray-800 text-left">
          <h3 className="text-xl font-serif mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-4 h-24">{description}</p>
          <div className="flex items-center gap-2 text-sm mb-1">
            <X className="h-4 w-4 text-blue-500" />
            <span>Flights Included</span>
          </div>
          <p className="text-sm font-semibold mb-4">From USD {price?.toLocaleString()}</p>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-2">
            MORE INFORMATION <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex-shrink-0 w-full sm:w-80 h-[500px] group overflow-hidden mx-2">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 p-6 flex flex-col h-full text-white text-left">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="text-sm">
            {nights} Nights
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="text-2xl font-serif mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-sm">
            <X className="h-4 w-4 text-gray-300" />
            <span>Flights Included</span>
          </div>
          {price && <p className="font-semibold mt-1">USD {price.toLocaleString()} per person</p>}
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard; 