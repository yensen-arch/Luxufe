"use client"
import { useState } from "react";

const departures = [
  { label: "OCTOBER DEPARTURE" },
  { label: "JANUARY 2026 DEPARTURE" },
  { label: "ANOTHER DEPARTURE" },
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
    <div className="w-full border-t border-l border-gray-300 py-12 px-12">
      <h2 className="text-3xl font-arpona font-bold text-black mb-6">Itinerary Options</h2>
      {/* Tabs */}
      <div className="flex">
        {departures.map((dep, idx) => (
          <button
            key={dep.label}
            className={`px-8 py-4 text-lg font-inter font-bold tracking-widest uppercase focus:outline-none transition ${
              selectedTab === idx
                ? "bg-gray-50 text-black font-bold text-xs"
                : "border-transparent bg-white text-gray-500 hover:text-black font-bold text-xs"
            }`}
            onClick={() => setSelectedTab(idx)}
          >
            {dep.label}
          </button>
        ))}
      </div>
      {/* Accordion */}
      <div className="bg-gray-50 divide-y divide-gray-600">
        {itinerary.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="flex flex-col">
              <div
                className="flex items-center justify-between px-8 py-8 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
                  <span className="text-sm font-inter font-bold text-gray-500 min-w-[120px]">{item.day}</span>
                  <div className="flex flex-col gap-2">
                    <div className="text-2xl font-arpona text-black">{item.title}</div>
                  </div>
                </div>
                <span className={`ml-auto transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                  {isOpen ? (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="10" x2="26" y2="26" stroke="black" strokeWidth="2"/><line x1="26" y1="10" x2="10" y2="26" stroke="black" strokeWidth="2"/></svg>
                  ) : (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="10" x2="18" y2="26" stroke="black" strokeWidth="2"/><line x1="10" y1="18" x2="26" y2="18" stroke="black" strokeWidth="2"/></svg>
                  )}
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
                <div className="text-black font-inter font-bold text-sm pl-8 pr-8 pb-8 leading-relaxed">
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