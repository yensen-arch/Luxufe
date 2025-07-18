"use client"
import React, { useState } from "react";
import { ArrowUpRight, Star, Bell, Mail, Trophy, Gift, X, Plus, PlaneTakeoff } from 'lucide-react';

interface WhyJoinEleveProps {
  onBecomeMember?: () => void
  data?: {
    title: string
    brandName: string
    items: Array<{
      icon: string
      title: string
      content: string
    }>
    buttonText: string
  }
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  PlaneTakeoff: <PlaneTakeoff className="w-7 h-7 text-[#23263a]" />,
  Star: <Star className="w-7 h-7 text-[#23263a]" />,
  Bell: <Bell className="w-7 h-7 text-[#23263a]" />,
  Mail: <Mail className="w-7 h-7 text-[#23263a]" />,
  Trophy: <Trophy className="w-7 h-7 text-[#23263a]" />,
  Gift: <Gift className="w-7 h-7 text-[#23263a]" />,
}

export default function WhyJoinEleve({ onBecomeMember, data }: WhyJoinEleveProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fallback data
  const fallbackData = {
    title: 'Why join',
    brandName: 'Elevé',
    items: [
      {
        icon: 'PlaneTakeoff',
        title: "Priority Travel Upgrades",
        content: "Enjoy complimentary room upgrades, priority boarding, and VIP airport lounge access at select destinations. Travel with ease, knowing that the best seat, suite, or experience has already been secured for you.",
      },
      {
        icon: 'Star',
        title: "Exclusive Member-Only Offers",
        content: "Access to exclusive member-only offers, including discounts on luxury travel, hotel stays, and more.",
      },
      {
        icon: 'Bell',
        title: "Personalized Concierge Service",
        content: "Enjoy a personalized concierge service to help you with your travel plans, including booking flights, hotels, and more.",
      },
      {
        icon: 'Mail',
        title: "Invitation-Only Events & Experiences",
        content: "Attend invitation-only events and experiences, including exclusive travel seminars, workshops, and more.",
      },
      {
        icon: 'Trophy',
        title: "Complimentary Travel Enhancements",
        content: "Enjoy complimentary travel enhancements, including airport lounge access, priority boarding, and more.",
      },
      {
        icon: 'Gift',
        title: "Annual Luxury Travel Gift",
        content: "Receive an annual luxury travel gift, including a luxury travel experience, hotel stay, and more.",
      },
    ],
    buttonText: 'BECOME A MEMBER →'
  }

  const whyJoinData = data || fallbackData

  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold md:text-5xl font-arpona text-[#23263a] text-center mb-16">
        {whyJoinData.title} <span className="font-bellarina font-normal text-6xl mr-2 md:text-8xl align-middle">{whyJoinData.brandName}</span>by Luxufe?
      </h2>
      {/* Accordion */}
      <div className="w-full max-w-6xl divide-y divide-gray-300 border-t border-b border-gray-300 mb-16">
        {whyJoinData.items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            <button
              className="w-full flex justify-between items-center py-8 px-4 md:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="flex items-center gap-4 text-2xl md:text-2xl font-arpona font-bold text-[#23263a] text-left">
                {iconMap[item.icon] || iconMap.Star}
                {item.title}
              </span>
              <span className="ml-4 text-gray-500 group-hover:text-gray-800">
                {openIndex === idx ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Plus className="w-8 h-8" />
                )}
              </span>
            </button>
            {/* Expandable panel */}
            <div
              className={`transition-all duration-500 ease-in-out grid ${
                openIndex === idx ? "max-h-[500px] opacity-100 py-4 px-4 md:px-8" : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              {item.content && (
                <p className="font-inter text-slate-700 text-md md:text-md font-bold max-w-4xl">
                  {item.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Button */}
      <button
        className="mt-6 px-10 py-4 border border-slate-300 text-[#23263a] font-inter font-bold bg-transparent hover:bg-[#23263a] hover:text-white transition-all text-xs"
        onClick={onBecomeMember || (() => {})}
      >
        {whyJoinData.buttonText}
      </button>
    </section>
  );
} 