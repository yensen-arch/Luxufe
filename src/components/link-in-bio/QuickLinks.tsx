import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Luxufe Journeys",
    img: "/placeholder.svg",
  },
  {
    title: "Experiences",
    img: "/placeholder.svg",
  },
  {
    title: "Destinations",
    img: "/placeholder.svg",
  },
];

const buttons = [
  "Try the Trip Wizard",
  "Contact Us",
  "More About Luxufe",
];

export default function QuickLinks() {
  return (
    <div className="relative w-full md:w-5xl mx-auto bg-white shadow-2xl p-4 md:p-15 flex flex-col items-center z-20">
      {/* Cards */}
      <div className="w-full flex flex-col gap-3 md:gap-6 mb-4 md:mb-8">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className="relative w-full h-28 md:h-48 overflow-hidden group cursor-pointer"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={100}
              height={100}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
            <div className="absolute left-0 bottom-0 p-3 md:p-6 flex items-center w-full justify-between">
              <span className="text-white text-base md:text-2xl font-arpona font-normal drop-shadow-lg">
                {card.title}
              </span>
              <Image src="/luxufe-icon-button-arrow-light.svg" alt="arrow right" width={20} height={20} className="w-4 h-4 md:w-7 md:h-7" />
            </div>
          </div>
        ))}
      </div>
      {/* Buttons */}
      <div className="w-full flex flex-col gap-3 md:gap-5 mt-1">
        {buttons.map((label) => (
          <button
            key={label}
            className="w-full bg-[#23263a] text-white font-inter font-semibold text-xs md:text-xs py-2.5 md:py-4 flex items-center justify-center gap-2 tracking-wider uppercase hover:bg-[#35395a] transition-colors"
          >
            {label} <Image src="/luxufe-icon-button-arrow-light.svg" alt="arrow right" width={20} height={20} className="w-3 h-3 md:w-6 md:h-6 ml-1" />
          </button>
        ))}
      </div>
    </div>
  );
}