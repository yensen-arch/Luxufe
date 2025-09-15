"use client";
import React, { useState, useEffect } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search } from "lucide-react";
import { getHotelCountsByContinent } from "@/lib/database";

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

export default function MapDestinations() {
  const [selected, setSelected] = useState<Location | null>(null);
  const [hotelCounts, setHotelCounts] = useState<{[key: string]: number}>({});
  const [loading, setLoading] = useState(true);

  // Fetch hotel counts by continent
  useEffect(() => {
    const fetchHotelCounts = async () => {
      try {
        setLoading(true);
        const counts = await getHotelCountsByContinent();
        setHotelCounts(counts);
      } catch (error) {
        console.error('Error fetching hotel counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelCounts();
  }, []);

  // Get hotel count for a specific continent
  const getHotelCount = (continent: string): number => {
    return hotelCounts[continent] || 0;
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col w-3/5 mx-auto items-center justify-center text-center text-3xl md:text-3xl font-arpona font-semibold text-gray-500 mb-10">Whether it's a country you've always dreamed of or a region you return to again and again, Luxufe helps you experience it in a way that's deeply personal.
        </div>
        <p className="text-md font-inter text-[#23263a] text-center font-bold mb-10">Discover regions where our deep knowledge and trusted partners create<br />something truly exceptional</p>
        <div className="w-full h-[650px] overflow-hidden shadow-lg relative">
          <Map
            initialViewState={{ longitude: 20, latitude: 20, zoom: 1.1 }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            style={{ width: "100%", height: "100%" }}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            {/* Search box overlay */}
            <div className="absolute top-8 left-8 z-10 bg-white shadow-lg px-4 py-3 flex items-center gap-3">
              <Search className="w-4 h-4" />
              <span className="font-inter text-gray-700 text-xs font-bold">Click on a region to explore further</span>
            </div>
            {LOCATIONS.map((loc) => {
              const hotelCount = getHotelCount(loc.continent);
              const showCount = hotelCount > 0;
              
              return (
                <div key={loc.name}>
                  {/* Hotel Count Circle */}
                  {showCount && (
                    <Marker longitude={loc.lng} latitude={loc.lat} anchor="center">
                      <div className="bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center border border-gray-200 cursor-pointer hover:shadow-xl transition-shadow">
                        <span className="text-black font-bold text-lg">
                          {loading ? '...' : hotelCount}
                        </span>
                      </div>
                    </Marker>
                  )}
                  
                  {/* Location Label */}
                  <Marker longitude={loc.lng} latitude={loc.lat + (showCount ? 0.8 : 0)} anchor="bottom">
                    <button
                      className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1 font-inter text-xs font-bold text-gray-900 hover:bg-gray-100 border border-gray-200"
                      onClick={() => setSelected(loc)}
                    >
                      <MapPin className="w-3 h-3" />
                      {loc.name}
                    </button>
                  </Marker>
                  
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
                      <div className="font-inter text-sm font-bold text-[#23263a]">
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