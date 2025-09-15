"use client";
import React from "react";
import { Building, MapPin, List } from "lucide-react";
import { useRouter } from "next/navigation";

// Continent data with images and display order
const CONTINENTS = [
  {
    name: "Africa",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    displayName: "Africa"
  },
  {
    name: "Antarctica",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=800&q=80",
    displayName: "Antarctica"
  },
  {
    name: "North America",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    displayName: "North America"
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=800&q=80",
    displayName: "Europe"
  },
  {
    name: "Asia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    displayName: "Asia"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    displayName: "Australia & New Zealand"
  },
  {
    name: "South America",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    displayName: "South America"
  }
];

interface ContinentStats {
  [continent: string]: {
    hotelCount: number;
    countryCount: number;
  };
}

interface MasonryProps {
  continentStats: ContinentStats;
}

function ContinentCard({ continent, stats, className = "" }: { 
  continent: typeof CONTINENTS[0]; 
  stats: { hotelCount: number; countryCount: number };
  className?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    const slug = continent.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/regions/${slug}`);
  };
  return (
    <div className={`relative group overflow-hidden bg-gray-200 cursor-pointer ${className}`} onClick={handleClick}>
      <img
        src={continent.image}
        alt={continent.displayName}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex flex-col justify-end h-full">
          <h3 className="text-white text-xl md:text-2xl font-arpona font-bold mb-4">{continent.displayName}</h3>
          
          {/* Statistics */}
          <div className="flex items-center gap-6 mb-4 text-white">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span className="font-inter text-sm font-bold">{stats.hotelCount} Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <List className="w-4 h-4" />
              <span className="font-inter text-sm font-bold">0 Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-inter text-sm font-bold">{stats.countryCount} Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Masonry({ continentStats }: MasonryProps) {
  // Filter continents that have data
  const continentsWithData = CONTINENTS.filter(continent => 
    continentStats[continent.name] && continentStats[continent.name].hotelCount > 0
  );

  console.log('🔍 Available continents with data:', continentsWithData.map(c => c.name));
  console.log('🔍 Continent stats:', continentStats);

  // Split continents into rows
  const firstRowContinents = continentsWithData.slice(0, 3); // First 3 continents
  const secondRowContinents = continentsWithData.slice(3); // Remaining continents

  return (
    <section className="w-full max-w-8xl mx-auto px-14 mb-20">
      <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] mb-24">Discover Destinations</h2>
      <div className="flex flex-col gap-6">
        {/* Row 1: Flexible layout based on available continents */}
        {firstRowContinents.length > 0 && (
          <div className="flex gap-6 h-[800px]">
            {/* First continent - large */}
            <div className="flex flex-col gap-6 w-1/2 h-full">
              <div className="h-full w-full">
                <ContinentCard 
                  continent={firstRowContinents[0]} 
                  stats={continentStats[firstRowContinents[0].name]}
                  className="h-full shadow-lg" 
                />
              </div>
            </div>
            {/* Remaining continents in right column */}
            <div className="flex flex-col gap-6 w-1/2 h-full">
              {firstRowContinents.slice(1).map((continent, index) => (
                <div key={continent.name} className="h-1/2 w-full">
                  <ContinentCard 
                    continent={continent} 
                    stats={continentStats[continent.name]}
                    className="h-full shadow-lg" 
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Row 2: Grid layout for remaining continents */}
        {secondRowContinents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[550px]">
            {secondRowContinents.map((continent) => (
              <ContinentCard 
                key={continent.name}
                continent={continent} 
                stats={continentStats[continent.name]}
                className="h-full shadow-lg" 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 