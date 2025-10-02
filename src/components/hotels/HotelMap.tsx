"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import {  ZoomIn, ZoomOut } from "lucide-react";

const LOCATIONS = [
  { name: "CANADA", lng: -106.3468, lat: 56.1304 },
  { name: "GREENLAND", lng: -42.6043, lat: 71.7069 },
  { name: "RUSSIA", lng: 105, lat: 61 },
];

type Location = typeof LOCATIONS[number];

interface HotelMapProps {
  className?: string;
}

export default function HotelMap({ className = "" }: HotelMapProps) {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <div className={`w-[85vw] h-130 md:h-screen z-10 relative ${className}`}>
      <Map
        initialViewState={{ longitude: 20, latitude: 20, zoom: 1.1 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: "100%", height: "100%" }}
        className="rounded-t-3xl"
      >
        <NavigationControl 
          position="bottom-left" 
          showCompass={false}
          showZoom={false}
        />
        
        {/* Custom Zoom Controls */}
        <div className="absolute bottom-4 left-4 z-10 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ZoomIn className="w-4 h-4 text-gray-700" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ZoomOut className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Instructional Tooltip */}
        <div className="absolute top-8 left-6 z-10 bg-white shadow-lg px-3 md:px-4 py-2 md:py-3 border border-gray-200 flex items-center gap-2 md:gap-3">
          <img src="/luxufe-icon-pointer-dark.svg" alt="Pointer" className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
          <span className="font-inter text-gray-700 text-xs font-bold">
            Click on a region to explore further
          </span>
        </div>

        {/* View All Properties Button */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-4 font-inter text-xs font-bold hover:bg-gray-900 transition-colors shadow-lg">
            View All Properties
          </button>
        </div>

        {/* Location Markers */}
        {LOCATIONS.map((loc) => (
          <Marker longitude={loc.lng} latitude={loc.lat} anchor="bottom" key={loc.name}>
            <button
              className="bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg flex items-center gap-1 md:gap-2 font-inter text-xs md:text-sm font-bold text-gray-900 hover:bg-gray-100 border border-gray-200 transition-colors"
              onClick={() => setSelected(loc)}
            >
              <img src="/luxufe-map-icon-large-location-pin-dark.svg" alt="Map pin" className="w-3 h-3 md:w-4 md:h-4" />
              <span>{loc.name}</span>
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
                <div className="font-inter text-xs md:text-sm font-bold text-gray-900 bg-white p-2 rounded shadow-lg">
                  {loc.name}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </Map>
    </div>
  );
} 