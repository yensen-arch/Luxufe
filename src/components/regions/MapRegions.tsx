"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import {  Search } from "lucide-react";
import Image from "next/image";

interface MapRegionsProps {
  continentName: string;
  continentData?: {
    hotelCount: number;
    countryCount: number;
  };
  countriesData?: Array<{
    country: string;
    hotelCount: number;
    sampleImage?: string;
  }>;
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

// Country coordinates for mapping
const COUNTRY_COORDINATES: { [key: string]: { lng: number; lat: number } } = {
  // Africa
  "South Africa": { lng: 22, lat: -30 },
  "Kenya": { lng: 39, lat: -2 },
  "Tanzania": { lng: 35, lat: -6 },
  "Botswana": { lng: 24, lat: -22 },
  "Morocco": { lng: -7, lat: 31 },
  "Egypt": { lng: 30, lat: 26 },
  "Seychelles": { lng: 55, lat: -4 },
  "Namibia": { lng: 18, lat: -22 },
  "Zambia": { lng: 27, lat: -13 },
  "Zimbabwe": { lng: 29, lat: -19 },
  
  // Asia
  "Japan": { lng: 138, lat: 36 },
  "Thailand": { lng: 100, lat: 15 },
  "India": { lng: 78, lat: 20 },
  "China": { lng: 104, lat: 35 },
  "Singapore": { lng: 103, lat: 1 },
  "Indonesia": { lng: 113, lat: -5 },
  "Malaysia": { lng: 101, lat: 4 },
  "Vietnam": { lng: 108, lat: 16 },
  "Philippines": { lng: 121, lat: 13 },
  "South Korea": { lng: 127, lat: 36 },
  
  // Europe
  "France": { lng: 2, lat: 46 },
  "Italy": { lng: 12, lat: 41 },
  "Spain": { lng: -3, lat: 40 },
  "United Kingdom": { lng: -3, lat: 55 },
  "Germany": { lng: 10, lat: 51 },
  "Switzerland": { lng: 8, lat: 46 },
  "Austria": { lng: 14, lat: 47 },
  "Netherlands": { lng: 5, lat: 52 },
  "Portugal": { lng: -8, lat: 39 },
  "Greece": { lng: 21, lat: 39 },
  
  // North America
  "United States": { lng: -100, lat: 40 },
  "Canada": { lng: -106, lat: 56 },
  "Mexico": { lng: -102, lat: 23 },
  
  // South America
  "Brazil": { lng: -60, lat: -15 },
  "Argentina": { lng: -65, lat: -35 },
  "Chile": { lng: -70, lat: -30 },
  "Peru": { lng: -75, lat: -10 },
  "Colombia": { lng: -74, lat: 4 },
  "Ecuador": { lng: -78, lat: -1 },
  
  // Australia
  "Australia": { lng: 133, lat: -25 },
  "New Zealand": { lng: 174, lat: -40 },
  
  // Antarctica
  "Antarctica": { lng: 0, lat: -80 }
};

type Location = {
  name: string;
  lng: number;
  lat: number;
};

export default function MapRegions({ continentName, continentData, countriesData }: MapRegionsProps) {
  const [selected, setSelected] = useState<Location | null>(null);
  
  // Get continent-specific view state
  const viewState = CONTINENT_VIEW_STATES[continentName as keyof typeof CONTINENT_VIEW_STATES] || { longitude: 0, latitude: 0, zoom: 2 };
  
  // Create locations from countries data
  const locations = countriesData?.map(country => {
    const coords = COUNTRY_COORDINATES[country.country];
    return coords ? {
      name: country.country,
      lng: coords.lng,
      lat: coords.lat,
      hotelCount: country.hotelCount
    } : null;
  }).filter(Boolean) as Array<Location & { hotelCount: number }> || [];
  
  // Dynamic circle size based on hotel count
  const getCircleSize = (count: number) => {
    if (count >= 20) return 'w-22 h-22 text-lg'; // Large circles for 20+
    if (count >= 10) return 'w-18 h-18 text-lg'; // Medium circles for 10-19
    if (count >= 5) return 'w-14 h-14 text-lg'; // Medium circles for 5-9
    return 'w-10 h-10 text-lg'; // Small circles for <5
  };

  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto md:px-10 px-4">
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-8">Luxufe in {continentName}</h2>
        <p className="text-md font-inter text-[#23263a] text-center font-bold mb-10">Discover regions where our deep knowledge and trusted partners create<br />something truly exceptional in {continentName}</p>
        <button className="flex items-center gap-2 border-2 border-gray-300 px-5 mx-auto py-4 text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all w-fit mb-10" >EXPLORE AFRICA JOURNEYS <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow Right" width={16} height={16} className="w-5 h-5 ml-2" /></button>
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
              <Marker longitude={loc.lng} latitude={loc.lat} anchor="center" key={loc.name}>
                <button
                  className={`bg-white ${getCircleSize(loc.hotelCount)} rounded-full shadow-lg flex items-center justify-center border border-gray-200 cursor-pointer hover:shadow-xl transition-all duration-200`}
                  onClick={() => setSelected(loc)}
                >
                  <span className="text-black">
                    {loc.hotelCount}
                  </span>
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
                    <div className="font-inter text-sm font-bold text-[#23263a] p-2">
                      <div>{loc.name}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {loc.hotelCount} hotel{loc.hotelCount !== 1 ? 's' : ''}
                      </div>
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