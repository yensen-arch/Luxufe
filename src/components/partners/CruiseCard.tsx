import React from "react";
import { Bed, Lock } from "lucide-react";

interface Cruise {
  image: string;
  logo: string;
  suites: number;
  itineraries: number;
}

interface CruiseCardProps {
  cruise: Cruise;
  index: number;
}

export default function CruiseCard({ cruise, index }: CruiseCardProps) {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 md:h-64 w-full">
        <img src={cruise.image} alt="Cruise" className="w-full h-full object-cover" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
          <div className="bg-white px-4 md:px-8 py-2 md:py-3 rounded-t shadow flex flex-col items-center">
            <img src={cruise.logo} alt="Brand Logo" className="h-6 md:h-8 mb-1 md:mb-2 object-contain" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-between px-3 md:px-4 pt-8 md:pt-10 pb-4 md:pb-6">
        <div className="flex justify-center gap-4 md:gap-8 w-full border-t border-gray-200 pt-4 md:pt-6">
          <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
            <Bed className="w-4 h-4 md:w-5 md:h-5 mr-1" />
            {cruise.suites} suites
          </div>
          <div className="flex items-center gap-1 md:gap-2 text-gray-700 font-inter font-bold text-sm md:text-base">
            <Lock className="w-4 h-4 md:w-5 md:h-5 mr-1" />
            {cruise.itineraries} itineraries
          </div>
        </div>
      </div>
    </div>
  );
} 