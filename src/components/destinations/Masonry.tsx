import React from "react";
import { Building, MapPin, List } from "lucide-react";

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
    displayName: "Alaska"
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=800&q=80",
    displayName: "Greenland"
  },
  {
    name: "Asia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    displayName: "Asia"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    displayName: "Australia & Newzealand"
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
  return (
    <div className={`relative group overflow-hidden bg-gray-200 ${className}`}>
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
          
          <button className="bg-white text-black font-inter font-bold px-4 py-2 text-xs shadow hover:bg-gray-100 w-fit">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Masonry({ continentStats }: MasonryProps) {
  // Filter continents that have data and match the layout from the image
  const continentsWithData = CONTINENTS.filter(continent => 
    continentStats[continent.name] && continentStats[continent.name].hotelCount > 0
  );

  return (
    <section className="w-full max-w-8xl mx-auto px-14 mb-20">
      <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] mb-24">Discover Destinations</h2>
      <div className="flex flex-col gap-6">
        {/* Row 1: 2 cols - matching the image layout */}
        <div className="flex gap-6 h-[800px]">
          {/* Left col - Africa (large horizontal) */}
          <div className="flex flex-col gap-6 w-1/2 h-full">
            <div className="h-full w-full">
              {continentsWithData[0] && (
                <ContinentCard 
                  continent={continentsWithData[0]} 
                  stats={continentStats[continentsWithData[0].name]}
                  className="h-full shadow-lg" 
                />
              )}
            </div>
          </div>
          {/* Right col - Antarctica and Alaska (vertical) */}
          <div className="flex flex-col gap-6 w-1/2 h-full">
            {continentsWithData[1] && (
              <div className="h-1/2 w-full">
                <ContinentCard 
                  continent={continentsWithData[1]} 
                  stats={continentStats[continentsWithData[1].name]}
                  className="h-full shadow-lg" 
                />
              </div>
            )}
            {continentsWithData[2] && (
              <div className="h-1/2 w-full">
                <ContinentCard 
                  continent={continentsWithData[2]} 
                  stats={continentStats[continentsWithData[2].name]}
                  className="h-full shadow-lg" 
                />
              </div>
            )}
          </div>
        </div>
        {/* Row 2: 3 col grid - Greenland, Asia, Australia & New Zealand */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[550px]">
          {continentsWithData.slice(3, 6).map((continent, index) => (
            <ContinentCard 
              key={continent.name}
              continent={continent} 
              stats={continentStats[continent.name]}
              className="h-full shadow-lg" 
            />
          ))}
        </div>
      </div>
    </section>
  );
} 