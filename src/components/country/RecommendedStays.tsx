"use client";
import React, { useState, useEffect } from "react";
import { Hotel } from "@/lib/database";
import { getHotelHeroImage } from "@/lib/database";
import Image from "next/image";

interface RecommendedStaysProps {
  hotels: Hotel[];
}

const RecommendedStays = ({ hotels }: RecommendedStaysProps) => {
  const [hotelImages, setHotelImages] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelImages = async () => {
      const imagePromises = hotels.slice(0, 9).map(async (hotel) => {
        try {
          const heroImage = await getHotelHeroImage(hotel.hotel_name);
          return {
            hotelName: hotel.hotel_name,
            image: heroImage || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
          };
        } catch (error) {
          console.error(`Error fetching image for ${hotel.hotel_name}:`, error);
          return {
            hotelName: hotel.hotel_name,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
          };
        }
      });

      const results = await Promise.all(imagePromises);
      const imageMap: { [key: string]: string } = {};
      results.forEach(result => {
        imageMap[result.hotelName] = result.image;
      });
      
      setHotelImages(imageMap);
      setLoading(false);
    };

    if (hotels.length > 0) {
      fetchHotelImages();
    } else {
      setLoading(false);
    }
  }, [hotels]);

  // Get country name from the first hotel (all hotels should be from the same country)
  const countryName = hotels.length > 0 ? hotels[0].country : "Country";
  
  // Show first 9 hotels
  const displayHotels = hotels.slice(0, 6);
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-normal mb-12">Recommended Stays</h2>
      
      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {loading ? (
          // Loading state
          Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="relative w-full h-[420px] rounded-none overflow-hidden shadow-lg flex flex-col justify-end bg-gray-200 animate-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-400 via-gray-200 to-transparent" />
              <div className="relative z-20 p-6 text-left">
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          ))
        ) : (
          displayHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="relative w-full h-[420px] rounded-none overflow-hidden shadow-lg flex flex-col justify-end group cursor-pointer"
              onClick={() => window.location.href = `/product/${encodeURIComponent(hotel.hotel_name)}`}
            >
              <img
                src={hotelImages[hotel.hotel_name] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"}
                alt={hotel.hotel_name}
                className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <span className="absolute top-6 left-6 z-20 text-xs border-b border-gray-300 font-inter text-white tracking-widest opacity-90">VIEW THIS HOTEL</span>
              <div className="relative z-20 p-6 text-left">
                <h3 className="text-white text-2xl font-arpona font-normal mb-1 drop-shadow-lg">{hotel.hotel_name}</h3>
                <p className="text-white text-xs font-inter font-bold">{hotel.city.toUpperCase()}, {hotel.country.toUpperCase()}</p>
              </div>
            </div>
          ))
        )}
      </div>
      
      {displayHotels.length > 0 && (
        <div className="flex items-center gap-2 justify-center mt-8">
          <button className="border-2 border-gray-300 px-8 py-4 bg-white text-[#23263a] font-inter font-semibold text-xs tracking-widest hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            ALL ACCOMMODATIONS IN {countryName.toUpperCase()} <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="h-3 w-3 md:h-4 md:w-4" />
          </button>
        </div>
      )}
    </section>
  );
};

export default RecommendedStays; 