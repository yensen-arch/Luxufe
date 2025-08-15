"use client"
import { useState } from "react";

interface DailyItineraryItem {
  days?: string;
  title: string;
  description: string;
}

interface ItineraryOptionsProps {
  dailyItinerary: DailyItineraryItem[];
}

export default function ItineraryOptions({ dailyItinerary }: ItineraryOptionsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-black mb-6">Itinerary Options</h2>
      {/* Accordion */}
      <div className="bg-[#f5f6f7] divide-y divide-gray-600">
        {dailyItinerary.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="flex flex-col">
              <div
                className="flex items-center justify-between px-8 py-8 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full">
                  <span className="text-sm font-inter font-bold text-gray-500 min-w-[120px]">{item.days || `DAY ${idx + 1}:`}</span>
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