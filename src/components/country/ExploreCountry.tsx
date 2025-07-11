import React from "react";
import { User, MapPin, Train, Briefcase, CircleDollarSign, Clock } from "lucide-react";

const info = [
  { icon: <User className="w-6 h-6" />, text: "Population: 64.7 million" },
  { icon: <MapPin className="w-6 h-6" />, text: "Must Visit: Cape Town & Kruger" },
  { icon: <Train className="w-6 h-6" />, text: "Luxury Train journeys" },
  { icon: <Briefcase className="w-6 h-6" />, text: "Luxury Safaris & Expeditions" },
  { icon: <CircleDollarSign className="w-6 h-6" />, text: "Currency: South African Rand (ZAR)" },
  { icon: <Clock className="w-6 h-6" />, text: "Time Zone: GMT+2 (SAST)" },
];

const ExploreCountry = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-4 text-center">
      <h2 className="text-4xl md:text-2xl font-arpona text-[#23263a] font-bold mb-12 leading-snug">
        South Africa is a land of striking contrasts—where untamed wilderness meets world-class refinement. From exclusive Big Five safaris to award-winning vineyards and chic coastal retreats, it offers a distinctly luxurious take on adventure, culture, and natural beauty.
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