"use client";
import { useState } from "react";

const ITEMS = [
  {
    title: "When to visit South Africa - weather & seasons",
    content:
      "Luxury travel should never be hindered by logistics. Luxufe provides personalized visa assistance and takes care of every entry requirement, from fast-track immigration services to VIP airport lounges. Travel with confidence, knowing that your journey has been expertly arranged down to the finest detail."
  },
  {
    title: "Luxufe's top tips for this country",
    content: "Top tips content goes here."
  },
  {
    title: "Passports, Visas and paperwork",
    content: "Passport and visa info goes here."
  },
  {
    title: "Currency & payments",
    content: "Currency and payment info goes here."
  },
  {
    title: "Other information",
    content: "Other useful info goes here."
  }
];

export default function GoodToKnowAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="w-full border-t border-gray-200 pt-12 pb-20">
      <h2 className="text-3xl md:text-4xl font-arpona font-light text-gray-900 mb-8">Good to know</h2>
      <div className="divide-y divide-gray-300">
        {ITEMS.map((item, idx) => (
          <div key={item.title}>
            <button
              className="w-full flex items-center justify-between py-8 focus:outline-none text-left"
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              aria-expanded={openIdx === idx}
            >
              <span className="text-2xl md:text-2xl font-arpona text-gray-900">{item.title}</span>
              <span className="ml-4">
                {openIdx === idx ? (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><line x1="10" y1="10" x2="30" y2="30" stroke="#23263B" strokeWidth="2"/><line x1="30" y1="10" x2="10" y2="30" stroke="#23263B" strokeWidth="2"/></svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><line x1="20" y1="10" x2="20" y2="30" stroke="#23263B" strokeWidth="2"/><line x1="10" y1="20" x2="30" y2="20" stroke="#23263B" strokeWidth="2"/></svg>
                )}
              </span>
            </button>
            {openIdx === idx && (
              <div className="text-gray-700 text-base font-inter pl-1 pr-8 pb-8 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 