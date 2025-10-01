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

export default function GoodToKnow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
    <section className="py-12 md:py-24 bg-[#f5f6f7]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl w-full md:w-3/5 font-arpona font-bold text-[#23263a] mb-8 md:mb-16">
          Essential Travel Information for Luxury Voyagers
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Santorini"
              className="w-full h-[340px] md:h-[460px] object-cover "
              width={800}
              height={600}
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-arpona font-bold text-[#23263a] mb-4 md:mb-6">
              Every journey begins long<br />before takeoff.
            </h3>
            <p className="font-inter text-[#23263a] font-bold text-sm md:text-md mb-3 md:mb-4 w-full md:w-5/7">
              At Luxufe, we ensure that every detail is meticulously arranged, from visa requirements to cultural etiquette, allowing you to travel with confidence and ease.
            </p>
            <p className="font-inter text-[#23263a] font-bold text-sm md:text-md w-full md:w-5/7">
              With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.
            </p>
          </div>
        </div>
      </div>


      <section className="max-w-7xl mx-auto my-12 md:my-24 px-4">
      <div className="divide-y divide-gray-600 border-t border-b border-gray-600">
        {items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            {/* Toggle button */}
            <button
              className="w-full flex justify-between items-center py-5 md:py-8 px-4 md:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="text-base md:text-3xl lg:text-3xl font-arpona font-bold text-[#23263a] text-left pr-4">
                {item.title}
              </span>
              {/* Icon */}
              <span className="ml-2 md:ml-4 transition-transform duration-300 flex-shrink-0">
                <Image 
                  src="/luxufe-icon-dropdown-icon-dark.svg" 
                  alt="Toggle" 
                  width={20} 
                  height={20} 
                  className={`h-6 w-6 md:h-8 md:w-8 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : 'rotate-0'}`}
                />
              </span>
            </button>

            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-5 md:py-8 px-4 md:px-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <p className="font-inter text-slate-700 text-sm md:text-lg font-bold max-w-4xl">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
} 

