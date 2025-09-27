"use client";
import React, { useState } from "react";
import BecomeMemberModal from "./BecomeMemberModal";
import Image from "next/image";

interface WhyJoinEleveProps {
  data?: {
    title: string;
    brandName: string;
    items: Array<{
      icon: string;
      title: string;
      content: string;
    }>;
    buttonText: string;
  };
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  PlaneTakeoff: (
    <Image
      src="/luxufe-icon-flights-dark.svg"
      alt="Plane takeoff"
      width={24}
      height={24}
    />
  ),
  Star: (
    <Image src="/Icon-metro-star-full.svg" alt="Star" width={24} height={24} />
  ),
  Bell: (
    <Image
      src="/awesome-concierge-bell.svg"
      alt="Bell"
      width={24}
      height={24}
    />
  ),
  Mail: <Image src="/awesome-envelope.svg" alt="Mail" width={24} height={24} />,
  Trophy: (
    <Image
      src="/Icon-metro-trophy-black.svg"
      alt="Trophy"
      width={24}
      height={24}
    />
  ),
  Gift: (
    <Image src="/Icon-ionic-ios-gift.svg" alt="Gift" width={24} height={24} />
  ),
};

export default function WhyJoinEleve({ data }: WhyJoinEleveProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fallback data
  const fallbackData = {
    title: "Why join",
    brandName: "Elevé",
    items: [
      {
        icon: "PlaneTakeoff",
        title: "Priority Travel Upgrades",
        content:
          "Enjoy complimentary room upgrades, priority boarding, and VIP airport lounge access at select destinations. Travel with ease, knowing that the best seat, suite, or experience has already been secured for you.",
      },
      {
        icon: "Star",
        title: "Exclusive Member-Only Offers",
        content:
          "Access to exclusive member-only offers, including discounts on luxury travel, hotel stays, and more.",
      },
      {
        icon: "Bell",
        title: "Personalized Concierge Service",
        content:
          "Enjoy a personalized concierge service to help you with your travel plans, including booking flights, hotels, and more.",
      },
      {
        icon: "Mail",
        title: "Invitation-Only Events & Experiences",
        content:
          "Attend invitation-only events and experiences, including exclusive travel seminars, workshops, and more.",
      },
      {
        icon: "Trophy",
        title: "Complimentary Travel Enhancements",
        content:
          "Enjoy complimentary travel enhancements, including airport lounge access, priority boarding, and more.",
      },
      {
        icon: "Gift",
        title: "Annual Luxury Travel Gift",
        content:
          "Receive an annual luxury travel gift, including a luxury travel experience, hotel stay, and more.",
      },
    ],
    buttonText: "BECOME A MEMBER →",
  };

  const whyJoinData = data || fallbackData;

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-arpona text-[#23263a] text-center mb-8 md:mb-12 lg:mb-16 px-4 md:px-6 lg:px-8">
        {whyJoinData.title}{" "}
        <span className="font-bellarina font-normal text-3xl md:text-4xl lg:text-6xl xl:text-8xl align-middle mr-1 md:mr-2">
          {whyJoinData.brandName}
        </span>
        by Luxufe?
      </h2>
      {/* Accordion */}
      <div className="w-full max-w-6xl border-y-2 border-gray-300 divide-y-2 divide-gray-300 mb-8 md:mb-12 lg:mb-16">
        {whyJoinData.items.map((item, idx) => (
          <div
            key={item.title}
            className="relative overflow-hidden transition-all duration-500"
          >
            <button
              className="w-full flex justify-between items-center py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="flex items-center gap-2 md:gap-3 lg:gap-4 text-xl md:text-2xl lg:text-3xl font-arpona font-bold text-[#23263a] text-left">
                {iconMap[item.icon] || iconMap.Star}
                {item.title}
              </span>
              <span className="ml-2 md:ml-3 lg:ml-4 text-gray-500 group-hover:text-gray-800">
                <Image
                  src="/luxufe-icon-dropdown-icon-dark.svg"
                  alt={openIndex === idx ? "Close" : "Expand"}
                  width={34}
                  height={34}
                  className={`transition-transform duration-300 ease-in-out ${
                    openIndex === idx ? "rotate-45" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx
                  ? "max-h-[500px] opacity-100 py-4 md:py-6 px-4 md:px-6 lg:px-8"
                  : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              {item.content && (
                <p className="font-inter text-slate-700 text-sm md:text-base lg:text-md font-bold max-w-4xl">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="mt-4 md:mt-5 lg:mt-6 px-6 md:px-8 lg:px-10 py-4 md:py-5 border border-slate-300 text-[#23263a] font-inter font-bold bg-transparent hover:bg-[#23263a] hover:text-white transition-all text-xs"
        onClick={() => setModalOpen(true)}
      >
        {whyJoinData.buttonText}
      </button>
      <BecomeMemberModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
