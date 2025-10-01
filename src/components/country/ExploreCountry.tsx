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
    { icon: <Image src="/luxufe-icon-country-population.svg" alt="Person" width={16} height={16} className="opacity-50 md:w-[20px] md:h-[20px]" />, text: `${hotels.length} Luxury Properties` },
    { icon: <Image src="/luxufe-icon-country-must-visit.svg" alt="Map Pin" width={14} height={14} className="opacity-50 md:w-[18px] md:h-[18px]" />, text: `Must Visit: ${topCities || 'Various Cities'}` },
    { icon: <Image src="/luxufe-icon-country-train-journeys.svg" alt="Train" width={16} height={16} className="opacity-50 md:w-[20px] md:h-[20px]" />, text: "Luxury Experiences" },
    { icon: <Image src="/luxufe-icon-country-train-adventures.svg" alt="Briefcase" width={16} height={16} className="opacity-50 md:w-[20px] md:h-[20px]" />, text: "Premium Hospitality" },
    { icon: <Image src="/luxufe-icon-country-train-currency.svg" alt="Currency" width={18} height={18} className="opacity-50 md:w-[22px] md:h-[22px]" />, text: "Luxury Travel Destination" },
    { icon: <Image src="/luxufe-icon-country-time-zone.svg" alt="Clock" width={16} height={16} className="opacity-50 md:w-[20px] md:h-[20px]" />, text: "Year-Round Destination" },
  ];
  return (
    <section className="w-full max-w-5xl mx-auto pt-12 md:pt-20 px-4 md:px-4 text-center">
      <h2 className="w-full md:w-4/5 mx-auto text-2xl md:text-3xl font-arpona text-[#23263a] font-bold mb-8 md:mb-18 leading-relaxed md:leading-snug">
        {countryName} is a land of striking contrasts—where untamed wilderness meets world-class refinement. From exclusive luxury experiences to award-winning hospitality and chic retreats, it offers a distinctly luxurious take on adventure, culture, and natural beauty.
      </h2>
      <div className="grid grid-cols-1 md:flex md:flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-8 mt-6 md:mt-8 max-w-sm md:max-w-none mx-auto">
        {info.map((item, idx) => (
          <div key={idx} className="mx-auto flex items-center gap-2 md:gap-2 text-gray-500 text-xs md:text-sm font-bold font-inter md:min-w-[260px] justify-start">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCountry; 