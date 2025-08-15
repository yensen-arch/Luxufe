"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin } from "lucide-react";

interface MapLocation {
  latitude: string;
  longitude: string;
  key_dates: string;
  day_number?: number;
}

interface ItineraryMapProps {
  mapData: MapLocation[];
  itineraryName: string;
}

export default function ItineraryMap({ mapData, itineraryName }: ItineraryMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  // Parse coordinates and determine initial view state
  const getInitialViewState = () => {
    if (mapData.length > 0) {
      const firstLocation = mapData[0];
      return {
        longitude: parseFloat(firstLocation.longitude),
        latitude: parseFloat(firstLocation.latitude),
        zoom: 6 // Zoom level to show the journey area
      };
    }
    // Fallback to default view
    return {
      longitude: 73.2207,
      latitude: 3.2028,
      zoom: 6
    };
  };

  // Calculate bounds for all locations
  const getBounds = () => {
    if (mapData.length === 0) return null;

    const lats = mapData.map(loc => parseFloat(loc.latitude));
    const lngs = mapData.map(loc => parseFloat(loc.longitude));

    return {
      north: Math.max(...lats) + 0.1,
      south: Math.min(...lats) - 0.1,
      east: Math.max(...lngs) + 0.1,
      west: Math.min(...lngs) - 0.1
    };
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-lg relative">
      <Map
        initialViewState={getInitialViewState()}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: "100%", height: "100%" }}
        bounds={getBounds()}
        fitBoundsOptions={{ padding: 50 }}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        
        {/* Journey Title Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white shadow-lg px-4 py-2 rounded-md">
          <div className="font-inter text-gray-700 text-sm font-bold">
            {itineraryName} Journey
          </div>
          <div className="font-inter text-gray-500 text-xs">
            {mapData.length} locations • {mapData.length} days
          </div>
        </div>

        {/* Journey Markers */}
        {mapData.map((location, index) => {
          const lat = parseFloat(location.latitude);
          const lng = parseFloat(location.longitude);
          const dayNumber = location.day_number || index + 1;
          const date = new Date(location.key_dates).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          });

          return (
            <Marker 
              key={`location-${index}`}
              longitude={lng} 
              latitude={lat} 
              anchor="bottom"
            >
              <button
                className="bg-[#A5C8CE] px-3 py-2 rounded-full shadow-lg flex items-center gap-2 font-inter text-sm font-bold text-white hover:bg-[#8bb3b8] border-2 border-white transition-colors"
                onClick={() => setSelectedLocation(location)}
              >
                <MapPin className="w-4 h-4" />
                Day {dayNumber}
              </button>
              
              {selectedLocation === location && (
                <Popup
                  longitude={lng}
                  latitude={lat}
                  anchor="top"
                  onClose={() => setSelectedLocation(null)}
                  closeButton={true}
                  className="z-20"
                  maxWidth="250px"
                >
                  <div className="font-inter text-sm">
                    <div className="font-bold text-[#23263a] mb-1">
                      Day {dayNumber}
                    </div>
                    <div className="text-gray-600 text-xs mb-1">
                      {date}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {lat.toFixed(4)}, {lng.toFixed(4)}
                    </div>
                  </div>
                </Popup>
              )}
            </Marker>
          );
        })}
      </Map>
    </div>
  );
}
