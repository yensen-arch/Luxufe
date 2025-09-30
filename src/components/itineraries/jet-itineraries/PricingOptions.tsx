"use client";
import React, { useState } from "react";
import Image from "next/image";
const years = [2025, 2026];
const months = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const availableDates: Record<string, Record<string, string[]>> = {
  "2025": {
    NOV: ["November 18, 2025", "November 25, 2025"],
  },
  "2026": {
    JULY: ["July 10, 2026"],
  },
};

const inclusions = [
  "Food and beverages",
  "Butler service",
];

const benefits = ["Charter flights", "Hotel"];

export default function PricingOptions() {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState("NOV");
  const [selectedDate, setSelectedDate] = useState("November 18, 2025");
  const [inclusionsOpen, setInclusionsOpen] = useState(true);
  const [cancellationOpen, setCancellationOpen] = useState(false);

  const monthsAvailable = Object.keys(
    availableDates[String(selectedYear)] || {}
  );
  const dates = availableDates[String(selectedYear)][selectedMonth] || [];

  const handleYear = (year: number) => {
    setSelectedYear(year);
    const availableMonths = Object.keys(availableDates[String(year)] || {});
    if (availableMonths.length > 0) {
      setSelectedMonth(availableMonths[0]);
      const firstDates = availableDates[String(year)][availableMonths[0]] || [];
      if (firstDates.length > 0) {
        setSelectedDate(firstDates[0]);
      }
    }
  };

  const handleMonth = (month: string, isAvailable: boolean) => {
    if (isAvailable) {
      setSelectedMonth(month);
      const monthDates = availableDates[String(selectedYear)][month] || [];
      if (monthDates.length > 0) {
        setSelectedDate(monthDates[0]);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl px-4 md:px-12  border-b-2 border-gray-300 pb-8">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-2">
        Pricing & Options
      </h2>
      <div className="text-gray-600 font-inter font-bold text-sm mb-6">
        Select year & month. Unavailable dates are greyed out
      </div>

      {/* Year Selection */}
      <div className="flex">
        {years.map((year) => (
          <button
            key={year}
            className={`px-6 md:px-8 py-2 md:py-3  font-inter font-bold text-base md:text-sm transition-colors duration-300 ${
              selectedYear === year
                ? "bg-gray-100 text-gray-900"
                : "bg-white text-gray-900 cursor-pointer"
            }`}
            onClick={() => handleYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-6">
        {/* Month Selection */}
        <div className="flex flex-wrap gap-2 mb-6 p-4">
          {months.map((month) => {
            const isAvailable = monthsAvailable.includes(month);
            const isSelected = selectedMonth === month;
            return (
              <button
                key={month}
                className={`px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-inter font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-[#A5C8CE] text-black border border-black"
                    : isAvailable
                      ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                onClick={() => handleMonth(month, isAvailable)}
                disabled={!isAvailable}
              >
                {month}
              </button>
            );
          })}
        </div>

        {/* Available Departure Dates */}
        <div className="mb-8 border-t-2 border-gray-300 p-4">
          <div className="text-gray-900 font-inter font-bold text-sm mb-3">
            Available departure dates:
          </div>
          <div className="flex flex-wrap gap-2">
            {dates.length === 0 ? (
              <span className="text-gray-400 text-sm">No available dates</span>
            ) : (
              dates.map((date: string) => (
                <button
                  key={date}
                  className={`px-4 md:px-6 py-1 md:py-1 rounded-full border font-inter font-bold text-sm transition-all duration-300 ${
                    selectedDate === date
                      ? "btext-black border-black bg-[#A5C8CE]"
                      : "bg-gray-200 text-gray-500 border-gray-600 hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Port-to-Port Fare Sections */}
      <div className="space-y-6">
        {/* First Fare Section */}
        <div className="bg-gray-100 p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-arpona font-bold text-gray-900 mb-2">
                Port-to-Port
              </h3>
              <div className="text-gray-900 font-inter text-xs md:text-xs font-bold uppercase mb-6">
                FLEXIBILITY - ALL INCLUSIVE
              </div>
              <p className="text-gray-700 font-inter font-bold text-sm md:text-sm leading-relaxed">
                For those who prefer to manage their own airfare and transfers,
                but still want included shore excursions, this fare is for you.
              </p>
            </div>
            <div className="text-right flex flex-col gap-2">
              <div className="text-2xl md:text-3xl font-arpona font-bold text-gray-900">
                $25,650{" "}
                <span className="text-gray-500 font-inter text-xs">
                  Per Guest
                </span>
                <div className="text-gray-400 font-inter text-xs font-bold mt-1">
                  *Payment non-refundable
                </div>
              </div>

              <button className="w-full mt-3 md:w-auto px-6 py-4 border-2 border-gray-300 text-gray-900 font-inter font-bold text-xs hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                BOOK WITH THIS FARE
                <Image
                  src="/luxufe-icon-button-arrow-dark.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                />
              </button>
            </div>{" "}
          </div>

          {/* Inclusions & Benefits */}
          <div className="mt-6 border-t-2 border-gray-300 pt-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setInclusionsOpen(!inclusionsOpen)}
            >
              <h4 className="text-gray-900 font-inter font-bold text-sm uppercase">
                INCLUSIONS & BENEFITS
              </h4>
              <Image src="/luxufe-icon-dropdown-icon-dark.svg" alt="dropdown" width={24} height={24} className={`transition-transform duration-300 ${inclusionsOpen ? "rotate-45" : ""}`} />
            </div>

            {inclusionsOpen && (
              <div className="mt-4 bg-[#f5f6f7] p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Image src="/luxufe-icon-star-ratings-solid-grey.svg" alt="star" width={24} height={24} />
                      </div>
                      <span className="text-gray-900 font-inter font-bold text-sm">
                        Inclusions
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {inclusions.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 font-inter text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Image src="/luxufe-icon-metro-trophy.svg" alt="star" width={24} height={24} />
                      </div>
                      <span className="text-gray-900 font-inter font-bold text-sm">
                        Benefits
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {benefits.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 font-inter text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cancellation Policy */}
          <div className="mt-4 border-t-2 border-gray-300 pt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setCancellationOpen(!cancellationOpen)}
            >
              <h4 className="text-gray-900 font-inter font-bold text-sm uppercase">
                CANCELLATION POLICY
              </h4>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${cancellationOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {cancellationOpen && (
              <div className="mt-4 text-gray-600 font-inter text-sm leading-relaxed">
                <p>
                  Cancellation policies vary by fare type and booking date.
                  Please refer to the specific terms and conditions for your
                  selected fare option.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Second Fare Section (Duplicate) */}
        <div className="bg-[#f5f6f7] p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1 mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-arpona font-bold text-gray-900 mb-2">
                Port-to-Port
              </h3>
              <div className="text-gray-900 font-inter text-xs md:text-xs font-bold uppercase mb-6">
                FLEXIBILITY - ALL INCLUSIVE
              </div>
              <p className="text-gray-700 font-inter font-bold text-sm md:text-sm leading-relaxed">
                For those who prefer to manage their own airfare and transfers,
                but still want included shore excursions, this fare is for you.
              </p>
            </div>
            <div className="text-right flex flex-col gap-2">
              <div className="text-2xl md:text-3xl font-arpona font-bold text-gray-900">
                $25,650{" "}
                <span className="text-gray-500 font-inter text-xs">
                  Per Guest
                </span>
                <div className="text-gray-400 font-inter text-xs font-bold mt-1">
                  *Payment non-refundable
                </div>
              </div>

              <button className="w-full mt-3 md:w-auto px-6 py-4 border-2 border-gray-300 text-gray-900 font-inter font-bold text-xs hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2">
                BOOK WITH THIS FARE
                <Image
                  src="/luxufe-icon-button-arrow-dark.svg"
                  alt="arrow-right"
                  width={24}
                  height={24}
                />
              </button>
            </div>{" "}
          </div>

          {/* Inclusions & Benefits (Collapsed) */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setInclusionsOpen(!inclusionsOpen)}
            >
              <h4 className="text-gray-900 font-inter font-bold text-sm uppercase">
                INCLUSIONS & BENEFITS
              </h4>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${!inclusionsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Cancellation Policy (Collapsed) */}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setCancellationOpen(!cancellationOpen)}
            >
              <h4 className="text-gray-900 font-inter font-bold text-sm uppercase">
                CANCELLATION POLICY
              </h4>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${!cancellationOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-8 text-gray-400 font-inter font-bold text-xs leading-relaxed">
        All prices and fares are quoted in US dollars and subject to change.
        Transportation by private Boeing 757 and other conveyance, as noted in
        the itinerary, is included in the expedition cost. Airfare to Singapore
        and return from Rome, Italy is not included in the cost. View the Terms
        and Conditions and Operator-Participant Contract for more information.
      </div>
    </div>
  );
}
