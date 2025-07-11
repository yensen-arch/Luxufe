"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search, ArrowRight } from "lucide-react";

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

export default function MapRegions() {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-8">Luxufe, Worldwide</h2>
        <p className="text-md font-inter text-[#23263a] text-center font-bold mb-10">Discover regions where our deep knowledge and trusted partners create<br />something truly exceptional</p>
       <button className="flex items-center gap-2 border border-gray-400 px-5 mx-auto py-4 text-[#23263a] font-inter font-bold text-xs tracking-widest hover:bg-gray-100 transition-all w-fit mb-10" >
        EXPLORE AFRICA JOURNEYS <ArrowRight className="w-5 h-5 ml-2" />
       </button>
        <div className="w-full h-[650px]  mt-20 overflow-hidden shadow-lg relative">
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
            {LOCATIONS.map((loc) => (
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
                    <div className="font-inter text-sm font-bold text-[#23263a]">{loc.name}</div>
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