"use client";
import React, { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { Hotel } from "@/lib/database";

interface MapProductProps {
  hotel: Hotel;
}

export default function MapProduct({ hotel }: MapProductProps) {
  const [showHotelPopup, setShowHotelPopup] = useState(false);

  // Parse hotel coordinates
  const hotelLat = hotel.latitude ? parseFloat(hotel.latitude) : null;
  const hotelLng = hotel.longitude ? parseFloat(hotel.longitude) : null;

  // Determine initial view state based on hotel location
  const getInitialViewState = () => {
    if (hotelLat && hotelLng) {
      return {
        longitude: hotelLng,
        latitude: hotelLat,
        zoom: 4 // Closer zoom to show hotel location
      };
    }
    // Fallback to default view
    return {
      longitude: 20,
      latitude: 20,
      zoom: 1.1
    };
  };

  return (
    <section className="py-20">
      <div className="max-w-8xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-8">Luxufe, Worldwide</h2>
        <p className="text-md font-inter text-[#23263a] text-center font-bold mb-10">Discover regions where our deep knowledge and trusted partners create<br />something truly exceptional</p>
        <div className="w-full h-[650px]  mt-20 overflow-hidden shadow-lg relative">
          <Map
            initialViewState={getInitialViewState()}
            mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
            style={{ width: "100%", height: "100%" }}
          >
            <NavigationControl position="bottom-left" showCompass={false} />
            
            {/* Search box overlay */}
            <div className="absolute top-8 left-8 z-10 bg-white shadow-lg px-4 py-3 flex items-center gap-3">
              <Search className="w-4 h-4" />
              <span className="font-inter text-gray-700 text-xs font-bold">
                {hotelLat && hotelLng ? "Hotel location marked on map" : "Hotel location not available"}
              </span>
            </div>

            {/* Hotel Marker */}
            {hotelLat && hotelLng && (
              <Marker 
                longitude={hotelLng} 
                latitude={hotelLat} 
                anchor="bottom"
                key="hotel-marker"
              >
                <button
                  className="bg-[#a8d1cf] px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-inter text-sm font-bold text-white hover:bg-[#8bc1bf] border-2 border-white"
                  onClick={() => setShowHotelPopup(true)}
                >
                  <MapPin className="w-4 h-4" />
                  {hotel.hotel_name}
                </button>
                {showHotelPopup && (
                  <Popup
                    longitude={hotelLng}
                    latitude={hotelLat}
                    anchor="top"
                    onClose={() => setShowHotelPopup(false)}
                    closeButton={true}
                    className="z-20"
                    maxWidth="300px"
                  >
                    <div className="font-inter text-sm">
                      <div className="font-bold text-[#23263a] mb-1">{hotel.hotel_name}</div>
                      <div className="text-gray-600 text-xs">{hotel.city}, {hotel.country}</div>
                      {hotel.address && (
                        <div className="text-gray-500 text-xs mt-1">{hotel.address}</div>
                      )}
                    </div>
                  </Popup>
                )}
              </Marker>
            )}
          </Map>
        </div>
      </div>
    </section>
  );
}   