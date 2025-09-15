import React from "react";
import CountryCard from "./CountryCard";

interface CountriesGridProps {
  continentName: string;
  countriesData: Array<{
    country: string;
    hotelCount: number;
    sampleImage?: string;
  }>;
}

// Sample images for different countries (you can expand this)
const COUNTRY_IMAGES: { [key: string]: string } = {
  "South Africa": "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
  "Kenya": "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "Tanzania": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "Botswana": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
  "Morocco": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "Seychelles": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
  "Egypt": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=600&q=80",
  "Japan": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  "Thailand": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  "India": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
  "France": "https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=600&q=80",
  "Italy": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=600&q=80",
  "Spain": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80",
  "United States": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
  "Canada": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  "Mexico": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80",
  "Brazil": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
  "Argentina": "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=600&q=80",
  "Chile": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  "Peru": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
  "Australia": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
  "New Zealand": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
};

const CountriesGrid = ({ continentName, countriesData }: CountriesGridProps) => {
  // Handle case where countriesData might be undefined
  if (!countriesData || !Array.isArray(countriesData)) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-12">
          Explore {continentName || 'Destinations'}
        </h2>
        <div className="text-center text-gray-500">
          No countries data available for this continent.
        </div>
      </section>
    );
  }

  // Transform countries data to match CountryCard interface
  const transformedCountries = countriesData.map(country => ({
    name: country.country,
    image: COUNTRY_IMAGES[country.country] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
    properties: country.hotelCount,
    itineraries: 0 // Placeholder for now
  }));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl md:text-5xl font-arpona font-bold text-[#23263a] text-center mb-12">
        Explore {continentName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {transformedCountries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
      {transformedCountries.length > 6 && (
        <div className="flex justify-center mb-10">
          <button className="text-[#23263a] font-inter font-semibold text-sm px-6 py-2 bg-transparent border-none hover:underline tracking-widest">LOAD MORE +</button>
        </div>
      )}
    </section>
  );
};

export default CountriesGrid; 