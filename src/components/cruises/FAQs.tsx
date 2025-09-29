"use client";
import React, { useState } from "react";
import Image from "next/image";

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

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto my-12 md:my-24 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-arpona text-center text-[#23263a] font-bold leading-tight mb-12 md:mb-16">Frequently Asked</h2>
      <div className="divide-y divide-gray-600 border-t border-b border-gray-600">
        {items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            {/* Toggle button */}
            <button
              className="w-full flex justify-between items-center py-6 md:py-8 px-4 md:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-lg md:text-2xl font-arpona font-bold text-gray-600 text-left">
                {item.title}
              </span>
              {/* Icon */}
              <span className="ml-4 text-gray-500 group-hover:text-gray-800">
                <Image
                  src="/luxufe-icon-close-dark.svg"
                  alt={openIndex === idx ? "Close" : "Open"}
                  width={24}
                  height={24}
                  className={`md:w-6 md:h-6 transition-transform duration-300 ease-in-out ${
                    openIndex === idx ? "rotate-0" : "rotate-45"
                  }`}
                />
              </span>
            </button>

            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-6 md:py-8 px-4 md:px-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <p className="font-inter text-slate-600 text-sm md:text-lg font-bold max-w-4xl">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
