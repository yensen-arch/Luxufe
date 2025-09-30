"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const LOCATIONS = [
  { name: "CANADA", continent: "North America", lng: -106.3468, lat: 56.1304 },
  { name: "NORTH AMERICA", continent: "North America", lng: -100, lat: 40 },
  { name: "GREENLAND", continent: "North America", lng: -42.6043, lat: 71.7069 },
  { name: "EUROPE", continent: "Europe", lng: 10, lat: 50 },
  { name: "RUSSIA", continent: "Europe", lng: 105, lat: 61 },
  { name: "EGYPT & MIDDLE EAST", continent: "Africa", lng: 30, lat: 26 },
  { name: "INDIA", continent: "Asia", lng: 78.9629, lat: 20.5937 },
  { name: "EAST AFRICA", continent: "Africa", lng: 39, lat: -2 },
  { name: "SOUTHERN AFRICA", continent: "Africa", lng: 22, lat: -30 },
  { name: "SOUTH AMERICA", continent: "South America", lng: -60, lat: -15 },
  { name: "AUSTRALIA", continent: "Australia", lng: 133.7751, lat: -25.2744 },
];

type Location = typeof LOCATIONS[number];

interface MapDestinationsProps {
  hotelCounts: {[key: string]: number};
}

export default function MapDestinations({ hotelCounts }: MapDestinationsProps) {
  const [selected, setSelected] = useState<Location | null>(null);
  const router = useRouter();

  // Get hotel count for a specific continent
  const getHotelCount = (continent: string): number => {
    return hotelCounts[continent] || 0;
  };

  // Navigate to continent-specific regions page
  const handleContinentClick = (continent: string) => {
    const slug = continent.toLowerCase().replace(/\s+/g, '-');
    router.push(`/regions/${slug}`);
  };

  return (
    <section className="my-4 md:my-10">
      <div className="max-w-8xl mx-auto p-4 md:p-14">
        <div className="flex flex-col w-full md:w-5/9 mx-auto items-center justify-center text-center text-lg md:text-3xl font-arpona font-semibold text-gray-600 mb-6 md:mb-10">Whether it's a country you've always dreamed of or a region you return to again and again, Luxufe helps you experience it in a way that's deeply personal.
        </div>
        <p className="text-sm md:text-md font-inter text-[#23263a] text-center font-bold mb-8 md:mb-14">Discover regions where our deep knowledge and trusted partners create<br className="hidden md:block" />something truly exceptional</p>
        <div className="w-full h-[400px] md:h-[650px] overflow-hidden shadow-lg relative">
          <Map
            initialViewState={{ longitude: 20, latitude: 20, zoom: 1.1 }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            style={{ width: "100%", height: "100%" }}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            {/* Search box overlay */}
            <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-white shadow-lg px-2 py-1 md:px-4 md:py-2 flex items-center gap-1 md:gap-2 rounded-md">
              <Search className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
              <span className="font-inter text-gray-600 text-xs md:text-sm">Click on a region to explore further</span>
            </div>
            {LOCATIONS.map((loc) => {
              const hotelCount = getHotelCount(loc.continent);
              const showCount = hotelCount > 0;
              
              // Dynamic circle size based on number (like in the image)
              const getCircleSize = (count: number) => {
                if (count >= 200) return 'w-16 h-16 md:w-24 md:h-24 text-sm md:text-lg'; // Large circles for 200+
                if (count >= 100) return 'w-14 h-14 md:w-20 md:h-20 text-sm md:text-lg'; // Medium circles for 100-199
                if (count >= 50) return 'w-12 h-12 md:w-16 md:h-16 text-sm md:text-lg'; // Medium circles for 50-99
                return 'w-10 h-10 md:w-12 md:h-12 text-sm md:text-lg'; // Small circles for <50
              };
              
              return (
                <div key={loc.name}>
                  {/* Hotel Count Circle - Large and prominent like in image */}
                  {showCount && (
                    <Marker longitude={loc.lng} latitude={loc.lat} anchor="center">
                      <button
                        className={`bg-white ${getCircleSize(hotelCount)} rounded-full shadow-lg flex items-center justify-center border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105 relative z-10`}
                        onClick={() => handleContinentClick(loc.continent)}
                      >
                        <span className="text-black">
                          {hotelCount}
                        </span>
                      </button>
                    </Marker>
                  )}
                  
                  
                  {/* Popup */}
                  {selected && selected.name === loc.name && (
                    <Popup
                      longitude={loc.lng}
                      latitude={loc.lat}
                      anchor="top"
                      onClose={() => setSelected(null)}
                      closeButton={false}
                      className="z-20"
                    >
                      <div className="font-inter text-xs md:text-sm font-bold text-[#23263a] p-1 md:p-2">
                        <div>{loc.name}</div>
                        {showCount && (
                          <div className="text-xs text-gray-600 mt-1">
                            {hotelCount} hotel{hotelCount !== 1 ? 's' : ''}
                          </div>
                        )}
                      </div>
                    </Popup>
                  )}
                </div>
              );
            })}
          </Map>
        </div>
      </div>
    </section>
  );
} 