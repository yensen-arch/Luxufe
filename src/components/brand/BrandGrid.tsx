import React from "react";
import { X } from "lucide-react";
import BrandCard from "./BrandCard";

interface BrandGridProps {
  filters: {
    search: string;
    typeOfTravel: string[];
    region: string[];
  };
  onClearFilter: (filterType: 'typeOfTravel' | 'region', value: string) => void;
  onClearAllFilters: () => void;
}

const dummyHotels = [
  {
    name: "Amanera",
    location: "PLAYA GRANDE . DOMINICAN REPUBLIC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aman_Resorts_logo.svg/1200px-Aman_Resorts_logo.svg.png",
    images: {
      top: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      bottomLeft: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
      bottomRight: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80"
    },
    description: "Backed by jungle, fronted by a sweep of Atlantic Ocean, Amanera is a sanctuary of natural beauty and refined luxury."
  },
  {
    name: "Amangani",
    location: "JACKSON HOLE . USA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aman_Resorts_logo.svg/1200px-Aman_Resorts_logo.svg.png",
    images: {
      top: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      bottomLeft: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      bottomRight: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80"
    },
    description: "In the foothills of the Tetons, near the year-round mountain resort of Jackson Hole, Amangani offers a serene retreat."
  },
  {
    name: "Amangiri",
    location: "CANYON POINT . USA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aman_Resorts_logo.svg/1200px-Aman_Resorts_logo.svg.png",
    images: {
      top: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      bottomLeft: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      bottomRight: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80"
    },
    description: "Set in the dramatic landscape of Canyon Point, Amangiri and its satellite, Camp Sarika, offer a unique desert experience."
  },
  {
    name: "Aman New York",
    location: "NEW YORK . USA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aman_Resorts_logo.svg/1200px-Aman_Resorts_logo.svg.png",
    images: {
      top: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      bottomLeft: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
      bottomRight: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80"
    },
    description: "Reimagining Manhattan's Crown Building, Aman New York brings the brand's philosophy of luxury and tranquility to the heart of the city."
  }
];

export default function BrandGrid({ filters, onClearFilter, onClearAllFilters }: BrandGridProps) {
  const allSelectedFilters = [...filters.typeOfTravel, ...filters.region];
  const hasFilters = allSelectedFilters.length > 0;

  return (
    <section className="flex-1 bg-[#f7f7fa] min-h-screen">
      {/* Selected Filters - Always visible */}
      <div className="border-b border-gray-200 px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.typeOfTravel.map((type) => (
              <span
                key={type}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {type}
                <button
                  onClick={() => onClearFilter('typeOfTravel', type)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.region.map((region) => (
              <span
                key={region}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-inter font-bold flex items-center gap-2"
              >
                {region}
                <button
                  onClick={() => onClearFilter('region', region)}
                  className="hover:text-gray-900"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          {hasFilters && (
            <>
              <div className="border-l border-gray-300 h-6"></div>
              <button
                onClick={onClearAllFilters}
                className="text-xs font-inter font-bold text-gray-500 hover:text-gray-700"
              >
                Clear all filters
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-8 py-6">
        <p className="text-sm font-inter font-bold text-gray-500">
          Showing {dummyHotels.length} of {dummyHotels.length} Results
        </p>
      </div>

      {/* Hotel Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
        {dummyHotels.map((hotel, index) => (
          <BrandCard
            key={index}
            name={hotel.name}
            location={hotel.location}
            logo={hotel.logo}
            images={hotel.images}
            description={hotel.description}
          />
        ))}
      </div>
    </section>
  );
} 