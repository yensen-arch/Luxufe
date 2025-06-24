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
      "Lively, commercial Oporto is the second largest city in Portugal after Lisbon. Also called Porto for short, the word easily brings to mind the city's most famous product - port wine. Read more...",
  },
  {
    day: "DAY 3:",
    title: "Pinhão",
  },
  {
    day: "DAY 4:",
    title: "Barca d'Alva",
  },
  {
    day: "DAY 5:",
    title: "Pocinho",
  },
];

export default function ItineraryOptions() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-arpona font-light text-gray-900 mb-6">Itinerary Options</h2>
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {departures.map((dep, idx) => (
          <button
            key={dep.label}
            className={`px-8 py-4 text-lg font-inter font-bold tracking-widest uppercase focus:outline-none transition border-b-2 ${
              selectedTab === idx
                ? "border-gray-300 bg-white text-gray-900"
                : "border-transparent bg-gray-50 text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setSelectedTab(idx)}
          >
            {dep.label}
          </button>
        ))}
      </div>
      {/* Accordion */}
      <div className="bg-gray-50 rounded shadow-sm divide-y divide-gray-300">
        {itinerary.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div
              className="flex items-center justify-between px-8 py-8 cursor-pointer"
              onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
                <span className="text-md font-inter font-bold text-gray-500 min-w-[120px]">{item.day}</span>
                <span className="text-3xl font-arpona text-gray-900">{item.title}</span>
                {item.description && openIndex === idx && (
                  <span className="block text-gray-700 text-base font-inter mt-4 md:mt-0 md:ml-8 max-w-2xl">{item.description}</span>
                )}
              </div>
              <span className="ml-auto">
                {openIndex === idx ? (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="10" x2="26" y2="26" stroke="#23263B" strokeWidth="2"/><line x1="26" y1="10" x2="10" y2="26" stroke="#23263B" strokeWidth="2"/></svg>
                ) : (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="10" x2="18" y2="26" stroke="#23263B" strokeWidth="2"/><line x1="10" y1="18" x2="26" y2="18" stroke="#23263B" strokeWidth="2"/></svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 