"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search, ArrowRight } from "lucide-react";

interface MapRegionsProps {
  continentName: string;
  continentData?: {
    hotelCount: number;
    countryCount: number;
  };
}

// Continent-specific locations and view states
const CONTINENT_VIEW_STATES = {
  "Africa": { longitude: 20, latitude: 0, zoom: 2.5 },
  "Asia": { longitude: 100, latitude: 30, zoom: 2 },
  "Europe": { longitude: 10, latitude: 55, zoom: 3 },
  "North America": { longitude: -100, latitude: 40, zoom: 2.5 },
  "South America": { longitude: -60, latitude: -15, zoom: 2.5 },
  "Australia": { longitude: 133, latitude: -25, zoom: 3 },
  "Antarctica": { longitude: 0, latitude: -80, zoom: 2 }
};

const CONTINENT_LOCATIONS = {
  "Africa": [
    { name: "SOUTHERN AFRICA", lng: 22, lat: -30 },
    { name: "EAST AFRICA", lng: 39, lat: -2 },
    { name: "WEST AFRICA", lng: -2, lat: 8 },
    { name: "NORTH AFRICA", lng: 10, lat: 25 }
  ],
  "Asia": [
    { name: "SOUTHEAST ASIA", lng: 110, lat: 10 },
    { name: "EAST ASIA", lng: 120, lat: 35 },
    { name: "SOUTH ASIA", lng: 80, lat: 25 },
    { name: "CENTRAL ASIA", lng: 70, lat: 45 }
  ],
  "Europe": [
    { name: "WESTERN EUROPE", lng: 5, lat: 50 },
    { name: "EASTERN EUROPE", lng: 25, lat: 55 },
    { name: "NORTHERN EUROPE", lng: 10, lat: 65 },
    { name: "SOUTHERN EUROPE", lng: 15, lat: 40 }
  ],
  "North America": [
    { name: "CANADA", lng: -106.3468, lat: 56.1304 },
    { name: "UNITED STATES", lng: -100, lat: 40 },
    { name: "MEXICO", lng: -102, lat: 23 }
  ],
  "South America": [
    { name: "BRAZIL", lng: -60, lat: -15 },
    { name: "ARGENTINA", lng: -65, lat: -35 },
    { name: "CHILE", lng: -70, lat: -30 },
    { name: "PERU", lng: -75, lat: -10 }
  ],
  "Australia": [
    { name: "AUSTRALIA", lng: 133.7751, lat: -25.2744 },
    { name: "NEW ZEALAND", lng: 174, lat: -40 }
  ],
  "Antarctica": [
    { name: "ANTARCTICA", lng: 0, lat: -80 }
  ]
};

type Location = {
  name: string;
  lng: number;
  lat: number;
};

export default function MapRegions({ continentName, continentData }: MapRegionsProps) {
  const [selected, setSelected] = useState<Location | null>(null);
  
  // Get continent-specific data
  const locations = CONTINENT_LOCATIONS[continentName as keyof typeof CONTINENT_LOCATIONS] || [];
  const viewState = CONTINENT_VIEW_STATES[continentName as keyof typeof CONTINENT_VIEW_STATES] || { longitude: 0, latitude: 0, zoom: 2 };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-8">Luxufe in {continentName}</h2>
        <p className="text-md font-inter text-[#23263a] text-center font-bold mb-10">Discover regions where our deep knowledge and trusted partners create<br />something truly exceptional in {continentName}</p>
        <div className="w-full h-[650px] mt-20 overflow-hidden shadow-lg relative">
          <Map
            initialViewState={viewState}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            style={{ width: "100%", height: "100%" }}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            {/* Search box overlay */}
            <div className="absolute top-8 left-8 z-10 bg-white shadow-lg px-4 py-3 flex items-center gap-3">
              <Search className="w-4 h-4" />
              <span className="font-inter text-gray-700 text-xs font-bold">Click on a region to explore further</span>
            </div>
            {locations.map((loc) => (
              <Marker longitude={loc.lng} latitude={loc.lat} anchor="bottom" key={loc.name}>
                <button
                  className="bg-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 font-inter text-sm font-bold text-gray-900 hover:bg-gray-100 border border-gray-200"
                  onClick={() => setSelected(loc)}
                >
                  <MapPin className="w-4 h-4" />
                  {loc.name}
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
                    <div className="font-inter text-sm font-bold text-[#23263a]">
                      <div>{loc.name}</div>
                      {continentData && (
                        <div className="text-xs text-gray-600 mt-1">
                          {continentData.countryCount} countries, {continentData.hotelCount} properties
                        </div>
                      )}
                    </div>
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