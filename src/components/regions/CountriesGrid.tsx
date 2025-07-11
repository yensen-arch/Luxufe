import React from "react";
import CountryCard from "./CountryCard";

const countries = [
  {
    name: "South Africa",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
  {
    name: "Kenya",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
  {
    name: "Tanzania",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
  {
    name: "Botswana",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
  {
    name: "Morocco",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
  {
    name: "Seychelles",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    properties: 78,
    itineraries: 15,
  },
];

const CountriesGrid = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <button className="text-[#23263a] font-inter font-semibold text-sm px-6 py-2 bg-transparent border-none hover:underline tracking-widest">LOAD MORE +</button>
      </div>
    </section>
  );
};

export default CountriesGrid; 