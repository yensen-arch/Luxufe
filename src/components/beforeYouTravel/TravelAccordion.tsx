"use client";
import React, { useState } from "react";

const items = [
  {
    title: "Visas, Entry Requirements & Exclusive Travel Tips",
    content:
      "Luxury travel should never be hindered by logistics. Luxufe provides personalized visa assistance and takes care of every entry requirement, from fast-track immigration services to VIP airport lounges. Travel with confidence, knowing that your journey has been expertly arranged down to the finest detail.",
  },
  {
    title: "What to Bring for Five-Star Experiences",
    content:
      "Luxufe ensures that every detail is meticulously arranged, from visa requirements to cultural etiquette, allowing you to travel with confidence and ease.",
  },
  {
    title: "Navigating Global Destinations with Style & Respect",
    content:
      "With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.",
  },
  {
    title: "Exclusive Arrival Services",
    content:
      "Luxufe ensures that every detail is meticulously arranged, from visa requirements to cultural etiquette, allowing you to travel with confidence and ease.",
  },
  {
    title: "Personalized Concierge Services",
    content:
      "With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.",
  },
  {
    title: "Health & Wellness Tips",
    content:
      "With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.",
  },
];

export default function TravelAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto my-24">
      <div className="divide-y divide-gray-600 border-t border-b border-gray-600">
        {items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            {/* Toggle button */}
            <button
              className="w-full flex justify-between items-center py-8 px-4 md:px-8 focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-2xl md:text-3xl font-arpona font-bold text-[#23263a] text-left">
                {item.title}
              </span>
              {/* Icon */}
              <span className="ml-4 text-gray-500 group-hover:text-gray-800">
                {openIndex === idx ? (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="8" y1="8" x2="24" y2="24" />
                    <line x1="24" y1="8" x2="8" y2="24" />
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="16" y1="8" x2="16" y2="24" />
                    <line x1="8" y1="16" x2="24" y2="16" />
                  </svg>
                )}
              </span>
            </button>

            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-8 px-4 md:px-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <p className="font-inter text-slate-700 text-md md:text-lg font-bold max-w-4xl">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
