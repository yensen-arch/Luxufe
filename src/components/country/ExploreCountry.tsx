import React from "react";
import { User, MapPin, Train, Briefcase, CircleDollarSign, Clock, Building2 } from "lucide-react";
import { Hotel } from "@/lib/database";

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
    { icon: <Building2 className="w-6 h-6" />, text: `${hotels.length} Luxury Properties` },
    { icon: <MapPin className="w-6 h-6" />, text: `Must Visit: ${topCities || 'Various Cities'}` },
    { icon: <Train className="w-6 h-6" />, text: "Luxury Experiences" },
    { icon: <Briefcase className="w-6 h-6" />, text: "Premium Hospitality" },
    { icon: <CircleDollarSign className="w-6 h-6" />, text: "Luxury Travel Destination" },
    { icon: <Clock className="w-6 h-6" />, text: "Year-Round Destination" },
  ];
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-2xl font-arpona text-[#23263a] font-bold mb-12 leading-snug">
        {countryName} is a land of striking contrasts—where untamed wilderness meets world-class refinement. From exclusive luxury experiences to award-winning hospitality and chic retreats, it offers a distinctly luxurious take on adventure, culture, and natural beauty.
      </h2>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mt-8">
        {info.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-gray-500 text-xs font-bold font-inter min-w-[260px] justify-center">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCountry; 