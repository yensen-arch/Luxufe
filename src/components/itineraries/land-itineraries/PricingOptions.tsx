"use client";
import React, { useState, useEffect } from "react";
import { LandItineraryDate } from "@/lib/database";

interface PricingOptionsProps {
  itineraryDates: LandItineraryDate[];
}

export default function PricingOptions({ itineraryDates }: PricingOptionsProps) {
  const [selectedDate, setSelectedDate] = useState<LandItineraryDate | null>(itineraryDates[0] || null);

  // Debug logging
  useEffect(() => {
    console.log('PricingOptions - itineraryDates received:', itineraryDates);
    console.log('PricingOptions - selectedDate:', selectedDate);
  }, [itineraryDates, selectedDate]);

  // Extract unique pricing categories from the first date
  const pricingCategories = selectedDate ? Object.keys(selectedDate.pricing) : [];

  console.log('PricingOptions - pricingCategories:', pricingCategories);

  // Don't render if no data
  if (!itineraryDates || itineraryDates.length === 0) {
    return (
      <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4">
          Pricing & Options
        </h2>
        <div className="text-gray-500 font-inter font-bold">No pricing data available</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4">
        Pricing & Options
      </h2>

      {/* Date Selection */}
      <div className="mb-8">
        <div className="text-gray-900 font-inter font-bold text-sm mb-3">Available departure dates:</div>
        <div className="flex flex-wrap gap-2">
          {itineraryDates.map((date) => (
            <button
              key={date.id}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full border font-inter font-bold text-sm transition-all duration-300 ${
                selectedDate?.id === date.id
                  ? "bg-white text-[#A5C8CE] border-[#A5C8CE]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              {date.date}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="overflow-hidden max-w-4xl">
        {/* Table Header */}
        <div className="grid grid-cols-3 border-b-2 border-gray-300">
          <div className="py-4 md:py-6">
            <p className="text-gray-700 font-inter font-bold text-xs">
              Land Arrangements, Per Person (2025)
            </p>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-gray-700 font-inter font-bold text-xs uppercase tracking-wider">
              {selectedDate?.date || "Select Date"}
            </h3>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-gray-700 font-inter font-bold text-xs uppercase tracking-wider">
              {selectedDate?.date || "Select Date"}
            </h3>
          </div>
        </div>

        {/* Table Rows */}
        {selectedDate && pricingCategories.map((category, index) => (
          <div key={index} className={'grid grid-cols-3 border-b-2 border-gray-300'}>
            <div className="p-4 md:p-6 flex items-center">
              <span className="text-gray-900 font-inter font-bold text-sm md:text-xl">
                {category}
              </span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                ${selectedDate.pricing[category as keyof typeof selectedDate.pricing].toLocaleString()}
              </span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                ${selectedDate.pricing[category as keyof typeof selectedDate.pricing].toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 md:mt-12 w-full">
        <button className="inline-flex w-full items-center justify-center gap-2 border-2 border-gray-300 px-6 md:px-8 py-3 md:py-4 font-inter font-bold text-gray-900 hover:bg-gray-50 transition-colors duration-300 text-xs">
          CONTACT US FOR DETAILS
          <img src="/luxufe-icon-button-arrow-dark.svg" alt="arrow-right" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
