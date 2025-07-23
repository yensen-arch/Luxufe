"use client";
import React, { useState } from "react";

interface PaymentsAccordionProps {
  data?: {
    heading?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    items: Array<{
      title: string;
      content: string;
    }>;
  };
}

const defaultData = {
  heading: "Before you travel",
  description:
    "Once your booking is complete, you’ll receive a confirmation email along with your personalized itinerary, documentation, and destination-specific guidance. Our team will also share travel tips, visa info if needed, and suggestions for enhancements or experiences to consider.",
  buttonText: "TRAVEL FAQS",
  buttonLink: "#",
  items: [
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
  ],
};

export default function PaymentsAccordion({ data }: PaymentsAccordionProps) {
  const accordionData = data || defaultData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto my-24">
      {/* Header row: left-aligned heading/desc, right-aligned button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-8 md:gap-0">
        <div className="text-left md:w-3/4">
          <h2 className="text-5xl md:text-6xl font-arpona font-normal mb-4 text-[#23263a] leading-tight">
            {accordionData.heading}
          </h2>
          <p className="max-w-2xl text-lg md:text-xl font-inter font-normal text-[#23263a]">
            {accordionData.description}
          </p>
        </div>
        <div className="flex md:w-1/4 md:justify-end items-center">
          <a
            href={accordionData.buttonLink || "#"}
            className="inline-flex items-center justify-center border border-gray-300 text-[#23263a] bg-transparent px-8 py-4 text-sm font-inter font-semibold tracking-widest rounded-none hover:bg-gray-100 transition-all duration-200 min-w-[180px] text-center"
            style={{ letterSpacing: "0.08em" }}
          >
            {accordionData.buttonText}
            <span className="ml-3">
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L21 6L15 11" stroke="#23263a" strokeWidth="2"/>
                <line x1="21" y1="6" x2="1" y2="6" stroke="#23263a" strokeWidth="2"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
        {accordionData.items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            {/* Toggle button */}
            <button
              className="w-full flex justify-between items-center py-8 px-0 md:px-2 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-2xl md:text-3xl font-arpona font-normal text-[#23263a] text-left">
                {item.title}
              </span>
              {/* Icon */}
              <span className="ml-4 text-[#23263a] group-hover:text-gray-800">
                {openIndex === idx ? (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#23263a" strokeWidth="2">
                    <line x1="10" y1="10" x2="30" y2="30" />
                    <line x1="30" y1="10" x2="10" y2="30" />
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#23263a" strokeWidth="2">
                    <line x1="20" y1="10" x2="20" y2="30" />
                    <line x1="10" y1="20" x2="30" y2="20" />
                  </svg>
                )}
              </span>
            </button>
            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <p className="font-inter text-[#23263a] text-md md:text-lg font-normal max-w-4xl">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 