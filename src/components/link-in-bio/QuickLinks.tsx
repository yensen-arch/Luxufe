import React from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Luxufe Journeys",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Experiences",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Destinations",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const buttons = [
  "Try the Trip Wizard",
  "Contact Us",
  "More About Luxufe",
];

export default function QuickLinks() {
  return (
    <div className="relative w-5xl mx-auto bg-white shadow-2xl p-15 flex flex-col items-center z-20">
      {/* Cards */}
      <div className="w-full flex flex-col gap-6 mb-8">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className="relative w-full h-48 overflow-hidden group cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
            <div className="absolute left-0 bottom-0 p-6 flex items-center w-full justify-between">
              <span className="text-white text-2xl font-arpona font-normal drop-shadow-lg">
                {card.title}
              </span>
              <ArrowRight className="text-white w-7 h-7" />
            </div>
          </div>
        ))}
      </div>
      {/* Buttons */}
      <div className="w-full flex flex-col gap-5 mt-2">
        {buttons.map((label) => (
          <button
            key={label}
            className="w-full bg-[#23263a] text-white font-inter font-semibold text-xs md:text-xs py-4 flex items-center justify-center gap-2 tracking-wider uppercase hover:bg-[#35395a] transition-colors"
          >
            {label} <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        ))}
      </div>
    </div>
  );
} 