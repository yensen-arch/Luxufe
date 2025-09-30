"use client"
import { useState } from "react";
import Image from "next/image";
const departures = [
  { label: "OCTOBER DEPARTURE" },
  { label: "JANUARY 2026 DEPARTURE" },
];

const itinerary = [
  {
    day: "DAY 1 & 2:",
    title: "Porto",
    description:
      "Arrive in Porto and settle into your luxurious suite aboard the Scenic Azure. Enjoy a welcome dinner and an evening stroll along the Douro River, taking in the city's vibrant atmosphere and historic architecture."
  },
  {
    day: "DAY 3:",
    title: "Pinhão",
    description:
      "Cruise to Pinhão, the heart of the Douro Valley. Visit a renowned vineyard for a private wine tasting and explore the charming riverside village."
  },
  {
    day: "DAY 4:",
    title: "Barca d'Alva",
    description:
      "Sail through dramatic gorges to Barca d'Alva, near the Spanish border. Enjoy a guided excursion to the medieval town of Castelo Rodrigo, known for its cobbled streets and panoramic views."
  },
  {
    day: "DAY 5:",
    title: "Pocinho",
    description:
      "Disembark in Pocinho for a scenic drive through the Douro countryside. Visit prehistoric rock art sites and enjoy a gourmet picnic lunch before returning to the ship for a farewell celebration."
  },
];

export default function ItineraryOptions() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full md:w-4/5">
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-black mb-4 md:mb-6 px-4 md:px-0">Daily Itinerary</h2>
      {/* Tabs */}
      <div className="flex flex-col md:flex-row overflow-x-auto md:overflow-visible">
        {departures.map((dep, idx) => (
          <button
            key={dep.label}
            className={`px-4 md:px-8 py-3 md:py-4 text-sm md:text-sm font-inter font-bold tracking-widest uppercase focus:outline-none transition whitespace-nowrap md:whitespace-normal ${
              selectedTab === idx
                ? "bg-gray-100 text-black font-bold text-xs"
                : "border-transparent bg-white text-gray-500 hover:text-black font-bold text-xs"
            }`}
            onClick={() => setSelectedTab(idx)}
          >
            {dep.label}
          </button>
        ))}
      </div>
      {/* Accordion */}
      <div className="bg-gray-100 divide-y divide-gray-600 mt-4 md:mt-0">
        {itinerary.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="flex flex-col">
              <div
                className="flex items-center justify-between px-4 md:px-8 py-6 md:py-8 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
                  <span className="text-xs md:text-sm font-inter font-bold text-gray-500 min-w-[80px] md:min-w-[120px]">{item.day}</span>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg md:text-2xl font-arpona text-black">{item.title}</div>
                  </div>
                </div>
                <span className={`ml-auto transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                  <Image src="/luxufe-icon-dropdown-icon-dark.svg" alt="arrow-down" width={24} height={24} className="md:w-9 md:h-9" />
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0
                }}
                aria-hidden={!isOpen}
              >
                <div className="text-black font-inter font-bold text-sm pl-4 md:pl-8 pr-4 md:pr-8 pb-6 md:pb-8 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 