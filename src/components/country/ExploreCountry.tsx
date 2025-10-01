import React from "react";
import { Hotel } from "@/lib/database";
import Image from "next/image";

interface ExploreCountryProps {
  countryName: string;
  hotels: Hotel[];
}

const ExploreCountry = ({ countryName, hotels }: ExploreCountryProps) => {
  // Get unique cities from hotels
  const cities = [...new Set(hotels.map(hotel => hotel.city))];
  const topCities = cities.slice(0, 2).join(' & ');
  
  // Get unique brands from hotels
  const brands = [...new Set(hotels.map(hotel => hotel.brand))];

  const info = [
    { icon: <Image src="/luxufe-icon-country-population.svg" alt="Person" width={20} height={20} className="opacity-50" />, text: `${hotels.length} Luxury Properties` },
    { icon: <Image src="/luxufe-icon-country-must-visit.svg" alt="Map Pin" width={18} height={18} className="opacity-50" />, text: `Must Visit: ${topCities || 'Various Cities'}` },
    { icon: <Image src="/luxufe-icon-country-train-journeys.svg" alt="Train" width={20} height={20} className="opacity-50" />, text: "Luxury Experiences" },
    { icon: <Image src="/luxufe-icon-country-train-adventures.svg" alt="Briefcase" width={20} height={20} className="opacity-50" />, text: "Premium Hospitality" },
    { icon: <Image src="/luxufe-icon-country-train-currency.svg" alt="Currency" width={22} height={22} className="opacity-50" />, text: "Luxury Travel Destination" },
    { icon: <Image src="/luxufe-icon-country-time-zone.svg" alt="Clock" width={20} height={20} className="opacity-50" />, text: "Year-Round Destination" },
  ];
  return (
    <section className="w-full max-w-5xl mx-auto pt-20 px-4 text-center">
      <h2 className="w-full md:w-4/5 mx-auto text-4xl md:text-3xl font-arpona text-[#23263a] font-bold mb-18 leading-snug">
        {countryName} is a land of striking contrasts—where untamed wilderness meets world-class refinement. From exclusive luxury experiences to award-winning hospitality and chic retreats, it offers a distinctly luxurious take on adventure, culture, and natural beauty.
      </h2>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-8">
        {info.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-500 text-sm font-bold font-inter min-w-[260px] justify-start">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCountry; 