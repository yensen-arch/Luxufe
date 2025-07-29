"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search, ZoomIn, ZoomOut } from "lucide-react";

const LOCATIONS = [
  { name: "CANADA", lng: -106.3468, lat: 56.1304 },
  { name: "GREENLAND", lng: -42.6043, lat: 71.7069 },
  { name: "RUSSIA", lng: 105, lat: 61 },
];

type Location = typeof LOCATIONS[number];

interface HotelHeroData {
  tagline: string;
  mainHeading: string;
  subHeading: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
}

interface HotelHeroProps {
  data?: HotelHeroData;
}

export default function HotelHero({ data }: HotelHeroProps) {
  const [selected, setSelected] = useState<Location | null>(null);

  // Fallback to hardcoded content if no data is provided
  const heroData = data || {
    tagline: "Exceptional Stays. Handpicked for You",
    mainHeading: "Discover the world's finest hotels,",
    subHeading: "selected for elegance, service, and soul",
    backgroundImage: {
      url: "https://picsum.photos/seed/hotel-hero/1920/1080",
      alt: "Luxury hotel on golf course overlooking ocean"
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 md:mb-3 lg:mb-4 font-bellarina">
          {heroData.tagline}
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-arpona mb-2 md:mb-3">
          {heroData.mainHeading}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-arpona font-medium">
          {heroData.subHeading}
        </p>
      </div>

      {/* Map Overlay - Positioned absolutely over the hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[65%] lg:h-[70%] z-20">
        <div className="relative w-full h-full">
          {/* Map Container */}
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-white/95 to-white/80 backdrop-blur-sm">
            <div className="w-full h-full relative">
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
                <div className="absolute top-4 left-4 z-10 bg-white shadow-lg px-3 md:px-4 py-2 md:py-3 rounded-lg border border-gray-200 flex items-center gap-2 md:gap-3">
                  <Search className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
                  <span className="font-inter text-gray-700 text-xs md:text-sm font-bold">
                    Click on a region to explore further
                  </span>
                </div>

                {/* View All Properties Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button className="bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-inter text-xs md:text-sm font-bold hover:bg-gray-900 transition-colors shadow-lg">
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
                      <MapPin className="w-3 h-3 md:w-4 md:h-4" />
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
          </div>
        </div>
      </div>
    </section>
  );
} 