"use client"
import React, { useState } from "react";
import { ArrowUpRight, Star, Bell, Mail, Trophy, Gift, X, Plus, PlaneTakeoff } from 'lucide-react';

const items = [
  {
    icon: <PlaneTakeoff className="w-7 h-7 text-[#23263a]" />,
    title: "Priority Travel Upgrades",
    content: (
      <>
        Enjoy complimentary room upgrades, priority boarding, and VIP airport lounge access at select destinations.<br />
        Travel with ease, knowing that the best seat, suite, or experience has already been secured for you.
      </>
    ),
  },
  {
    icon: <Star className="w-7 h-7 text-[#23263a]" />,
    title: "Exclusive Member-Only Offers",
    content: (
      <>
        Access to exclusive member-only offers, including discounts on luxury travel, hotel stays, and more.
      </>
    ),
  },
  {
    icon: <Bell className="w-7 h-7 text-[#23263a]" />,
    title: "Personalized Concierge Service",
    content: (
      <>
        Enjoy a personalized concierge service to help you with your travel plans, including booking flights, hotels, and more.
      </>
    ),
  },
  {
    icon: <Mail className="w-7 h-7 text-[#23263a]" />,
    title: "Invitation-Only Events & Experiences",
    content: (
      <>
        Attend invitation-only events and experiences, including exclusive travel seminars, workshops, and more.
      </>
    ),
  },
  {
    icon: <Trophy className="w-7 h-7 text-[#23263a]" />,
    title: "Complimentary Travel Enhancements",
    content: (
      <>
        Enjoy complimentary travel enhancements, including airport lounge access, priority boarding, and more.
      </>
    ),
  },
  {
    icon: <Gift className="w-7 h-7 text-[#23263a]" />,
    title: "Annual Luxury Travel Gift",
    content: (
      <>
        Receive an annual luxury travel gift, including a luxury travel experience, hotel stay, and more.
      </>
    ),
  },
];

export default function WhyJoinEleve() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold md:text-5xl font-arpona text-[#23263a] text-center mb-16">
        Why join <span className="font-bellarina font-normal text-6xl mr-2 md:text-8xl align-middle">Elevé</span>by Luxufe?
      </h2>
      {/* Accordion */}
      <div className="w-full max-w-6xl divide-y divide-gray-300 border-t border-b border-gray-300 mb-16">
        {items.map((item, idx) => (
          <div key={item.title} className="relative overflow-hidden transition-all duration-500">
            <button
              className="w-full flex justify-between items-center py-8 px-4 md:px-8 focus:outline-none group hover:cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`accordion-panel-${idx}`}
            >
              <span className="flex items-center gap-4 text-2xl md:text-2xl font-arpona font-bold text-[#23263a] text-left">
                {item.icon}
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
      <button className="mt-6 px-10 py-4 border border-slate-300 text-[#23263a] font-inter font-bold bg-transparent hover:bg-[#23263a] hover:text-white transition-all text-xs">
        BECOME A MEMBER &rarr;
      </button>
    </section>
  );
} 