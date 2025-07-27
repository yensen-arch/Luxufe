"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search } from "lucide-react";

const LOCATIONS = [
  { name: "CANADA", lng: -106.3468, lat: 56.1304 },
  { name: "NORTH AMERICA", lng: -100, lat: 40 },
  { name: "GREENLAND", lng: -42.6043, lat: 71.7069 },
  { name: "EUROPE", lng: 10, lat: 50 },
  { name: "RUSSIA", lng: 105, lat: 61 },
  { name: "EGYPT & MIDDLE EAST", lng: 30, lat: 26 },
  { name: "INDIA", lng: 78.9629, lat: 20.5937 },
  { name: "EAST AFRICA", lng: 39, lat: -2 },
  { name: "SOUTHERN AFRICA", lng: 22, lat: -30 },
  { name: "SOUTH AMERICA", lng: -60, lat: -15 },
  { name: "AUSTRALIA", lng: 133.7751, lat: -25.2744 },
];

type Location = typeof LOCATIONS[number];

export default function WorldwideMap() {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-arpona font-bold text-[#23263a] text-center mb-4 md:mb-6 lg:mb-8 px-4">Luxufe, Worldwide</h2>
        <p className="text-sm md:text-base lg:text-md font-inter text-[#23263a] text-center font-bold mb-6 md:mb-8 lg:mb-10 px-4">Discover regions where our deep knowledge and trusted partners create<br className="hidden md:block" />something truly exceptional</p>
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] overflow-hidden shadow-lg relative">
          <Map
            initialViewState={{ longitude: 20, latitude: 20, zoom: 1.1 }}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            style={{ width: "100%", height: "100%" }}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            {/* Search box overlay */}
            <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 z-10 bg-white shadow-lg px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 md:gap-3">
              <Search className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-inter text-gray-700 text-xs font-bold">Click on a region to explore further</span>
            </div>
            {LOCATIONS.map((loc) => (
              <Marker longitude={loc.lng} latitude={loc.lat} anchor="bottom" key={loc.name}>
                <button
                  className="bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-full shadow-lg flex items-center gap-1 md:gap-2 font-inter text-xs md:text-sm font-bold text-gray-900 hover:bg-gray-100 border border-gray-200"
                  onClick={() => setSelected(loc)}
                >
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{loc.name}</span>
                  <span className="sm:hidden">{loc.name.split(' ')[0]}</span>
                </button>
                {selected && selected.name === loc.name && (
                  <Popup
                    longitude={loc.lng}
                    latitude={loc.lat}
                    anchor="top"
                    onClose={() => setSelected(null)}
                    closeButton={false}
                    className="z-20"
                  >
                    <div className="font-inter text-xs md:text-sm font-bold text-[#23263a]">{loc.name}</div>
                  </Popup>
                )}
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </section>
  );
} 