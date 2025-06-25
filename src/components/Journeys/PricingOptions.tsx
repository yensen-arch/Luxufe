"use client"
import React, { useState } from "react";

const years = [2025, 2026];
const months = [
  "JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const availableDates: Record<string, Record<string, string[]>> = {
  "2025": {
    APRIL: ["November 18, 2025", "November 25, 2025"],
    JULY: ["July 10, 2025"],
    NOV: ["November 18, 2025", "November 25, 2025"]
  },
  "2026": {
    APRIL: [],
    JULY: ["July 10, 2026"]
  }
};

export default function PricingOptions() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState("NOV");

  const monthsAvailable = Object.keys(availableDates[String(selectedYear)] || {});
  const dates = availableDates[String(selectedYear)][selectedMonth] || [];

  return (
    <div className="p-8 border-t border-gray-300 min-w-[320px]">
      <h2 className="text-3xl font-arpona font-bold text-gray-900 mb-2">Pricing & Options</h2>
      <div className="text-gray-700 font-inter text-sm mb-4 font-bold">Select year & month. Unavailable dates are greyed out</div>
      <div className="flex gap-4">
        {years.map((year) => (
          <button
            key={year}
            className={`px-4 py-1 rounded font-inter font-bold text-lg ${selectedYear === year ? "bg-gray-50" : "bg-white"}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 mb-6 bg-gray-50 p-4">
        {months.map((month) => {
          const isAvailable = monthsAvailable.includes(month);
          const isSelected = selectedMonth === month;
          return (
            <button
              key={month}
              className={`px-3 py-1 rounded-full text-xs font-inter font-bold border ${isSelected ? "border-black bg-[#A5C8CE] text-black" : isAvailable ? "border-black bg-gray-200 text-gray-700" : "border-gray-100 bg-gray-100 text-gray-400"}`}
              onClick={() => isAvailable && setSelectedMonth(month)}
              disabled={!isAvailable}
            >
              {month}
            </button>
          );
        })}
      </div>
      <div className="text-gray-700 mb-2">Available departure dates:</div>
      <div className="flex gap-2 flex-wrap">
        {dates.length === 0 ? (
          <span className="text-gray-400 text-sm">No available dates</span>
        ) : (
          dates.map((date: string, idx: number) => (
            <button
              key={date}
              className={`px-4 py-1 rounded-full border font-inter font-bold text-sm ${idx === 0 ? "bg-[#A5C8CE] text-black border-black" : "bg-gray-100 text-gray-500 border-gray-400"}`}
            >
              {date}
            </button>
          ))
        )}
      </div>
    </div>
  );
} 