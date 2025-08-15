"use client";
import React from "react";

const pricingData = [
  {
    item: "Double Occupancy",
    lowSeason: "$18,550",
    highSeason: "$18,550"
  },
  {
    item: "Single Supplement",
    lowSeason: "$3,050",
    highSeason: "$3,050"
  },
  {
    item: "Internal Flights",
    lowSeason: "$750",
    highSeason: "$750"
  }
];

export default function PricingOptions() {
  return (
    <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-4">
        Pricing & Options
      </h2>


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
              Low Season
            </h3>
          </div>
          <div className="p-4 md:p-6 text-center">
            <h3 className="text-gray-700 font-inter font-bold text-xs uppercase tracking-wider">
              High Season
            </h3>
          </div>
        </div>

        {/* Table Rows */}
        {pricingData.map((row, index) => (
          <div key={index} className={'grid grid-cols-3 border-b-2 border-gray-300'}>
            <div className="p-4 md:p-6 flex items-center">
              <span className="text-gray-900 font-inter font-bold text-sm md:text-xl">
                {row.item}
              </span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                {row.lowSeason}
              </span>
            </div>
            <div className="p-4 md:p-6 text-center">
              <span className="text-gray-900 font-arpona font-bold text-lg md:text-xl">
                {row.highSeason}
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
