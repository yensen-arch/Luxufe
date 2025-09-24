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
    
    const filtered = mapData.filter(location => 
      location && 
      location.latitude && 
      location.longitude && 
      !isNaN(parseFloat(location.latitude)) && 
      !isNaN(parseFloat(location.longitude))
    );
    
    // Debug logging
    console.log('Map data received:', mapData);
    console.log('Valid map data:', filtered);
    
    return filtered;
  }, [mapData]);

  // Parse coordinates and determine initial view state
  const getInitialViewState = React.useMemo(() => {
    if (validMapData.length > 0) {
      const firstLocation = validMapData[0];
      const lat = parseFloat(firstLocation.latitude);
      const lng = parseFloat(firstLocation.longitude);
      
      if (!isNaN(lat) && !isNaN(lng)) {
        console.log('Setting initial view state:', { longitude: lng, latitude: lat, zoom: 6 });
        return {
          longitude: lng,
          latitude: lat,
          zoom: 6
        };
      }
    }
    // Fallback to default view (Maldives area)
    console.log('Using fallback view state');
    return {
      longitude: 73.2207,
      latitude: 3.2028,
      zoom: 6
    };
  }, [validMapData]);

  // Don't render map until client-side and we have valid data
  if (!isClient) {
    return (
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg relative bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500 font-inter font-bold">Loading map...</div>
      </div>
    );
  }

  // Don't render if no valid data
  if (validMapData.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg relative bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500 font-inter font-bold">No map data available</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg relative">
      <Map
        initialViewState={getInitialViewState}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        style={{ width: "100%", height: "100%" }}
        onLoad={() => {
          console.log('Map loaded successfully');
          setIsMapReady(true);
        }}
      >
        <NavigationControl position="bottom-left" showCompass={false} />
        
        {/* Journey Title Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white shadow-lg px-4 py-2 rounded">
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
            // Use a consistent date format that works the same on server and client
            const dateObj = new Date(location.key_dates);
            if (isNaN(dateObj.getTime())) {
              date = `Day ${dayNumber}`;
            } else {
              const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              const month = months[dateObj.getMonth()];
              const day = dateObj.getDate();
              date = `${month} ${day}`;
            }
          } catch (error) {
            date = `Day ${dayNumber}`;
          }

          console.log(`Rendering marker ${index + 1}:`, { lat, lng, dayNumber, date });

          return (
            <Marker 
              key={`location-${index}`}
              longitude={lng} 
              latitude={lat} 
              anchor="bottom"
            >
              <div className="relative z-50">
                <button
                  className="bg-[#A5C8CE] px-3 py-2 rounded-full shadow-lg flex items-center gap-2 font-inter text-sm font-bold text-white hover:bg-[#8bb3b8] border-2 border-white transition-colors cursor-pointer"
                  onClick={() => {
                    console.log('Marker clicked:', { lat, lng, dayNumber });
                    setSelectedLocation(location);
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  Day {dayNumber}
                </button>
                
                {selectedLocation === location && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 z-50 min-w-[200px]">
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
                    <button 
                      className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
                      onClick={() => setSelectedLocation(null)}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
}
