"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

// Dynamically import the map components to avoid SSR issues
const Map = dynamic(() => import("react-map-gl/maplibre").then(mod => mod.Map), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 flex items-center justify-center">Loading map...</div>
});

const Marker = dynamic(() => import("react-map-gl/maplibre").then(mod => mod.Marker), {
  ssr: false
});

const Popup = dynamic(() => import("react-map-gl/maplibre").then(mod => mod.Popup), {
  ssr: false
});

const NavigationControl = dynamic(() => import("react-map-gl/maplibre").then(mod => mod.NavigationControl), {
  ssr: false
});

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
  const [isClient, setIsClient] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);

  // Ensure component is mounted on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Validate and parse map data
  const validMapData = React.useMemo(() => {
    if (!mapData || !Array.isArray(mapData)) return [];
    
    return mapData.filter(location => 
      location && 
      location.latitude && 
      location.longitude && 
      !isNaN(parseFloat(location.latitude)) && 
      !isNaN(parseFloat(location.longitude))
    );
  }, [mapData]);

  // Parse coordinates and determine initial view state
  const getInitialViewState = React.useMemo(() => {
    if (validMapData.length > 0) {
      const firstLocation = validMapData[0];
      const lat = parseFloat(firstLocation.latitude);
      const lng = parseFloat(firstLocation.longitude);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        return {
          longitude: lng,
          latitude: lat,
          zoom: 6
        };
      }
    }
    // Fallback to default view (Maldives area)
    return {
      longitude: 73.2207,
      latitude: 3.2028,
      zoom: 6
    };
  }, [validMapData]);

  // Don't render map until client-side and we have valid data
  if (!isClient) {
    return (
      <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-lg relative bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500 font-inter font-bold">Loading map...</div>
      </div>
    );
  }

  // Don't render if no valid data
  if (validMapData.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-lg relative bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500 font-inter font-bold">No map data available</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-lg relative">
      <Map
        initialViewState={getInitialViewState}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: "100%", height: "100%" }}
        onLoad={() => setIsMapReady(true)}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        
        {/* Journey Title Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white shadow-lg px-4 py-2 rounded-md">
          <div className="font-inter text-gray-700 text-sm font-bold">
            {itineraryName} Journey
          </div>
          <div className="font-inter text-gray-500 text-xs">
            {validMapData.length} locations • {validMapData.length} days
          </div>
        </div>

        {/* Journey Markers */}
        {isMapReady && validMapData.map((location, index) => {
          const lat = parseFloat(location.latitude);
          const lng = parseFloat(location.longitude);
          const dayNumber = location.day_number || index + 1;
          
          // Skip invalid coordinates
          if (isNaN(lat) || isNaN(lng)) return null;

          let date;
          try {
            date = new Date(location.key_dates).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            });
          } catch (error) {
            date = `Day ${dayNumber}`;
          }

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
