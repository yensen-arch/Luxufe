"use client";
import { useState } from "react";

interface GoodToKnowItem {
  question: string;
  answer: string;
}

interface GoodToKnowAccordionProps {
  goodToKnow: GoodToKnowItem[];
}

export default function GoodToKnowAccordion({ goodToKnow }: GoodToKnowAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-4/5 py-12 px-12">
      <h2 className="text-3xl font-arpona font-bold text-gray-900 mb-8">Good to know</h2>
      <div className="divide-y divide-gray-600">
        {goodToKnow.map((item, idx) => {
          const isOpen = openIndex === idx;
          
          return (
            <div key={idx}>
              <button
                className="w-full cursor-pointer flex items-center justify-between py-8 focus:outline-none text-left"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="text-xl font-arpona text-gray-900 font-bold">{item.question}</span>
                <span className={`ml-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    {isOpen ? (
                      <>
                        <line x1="10" y1="10" x2="30" y2="30" stroke="#23263B" strokeWidth="2" />
                        <line x1="30" y1="10" x2="10" y2="30" stroke="#23263B" strokeWidth="2" />
                      </>
                    ) : (
                      <>
                        <line x1="20" y1="10" x2="20" y2="30" stroke="#23263B" strokeWidth="2" />
                        <line x1="10" y1="20" x2="30" y2="20" stroke="#23263B" strokeWidth="2" />
                      </>
                    )}
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0
                }}
                aria-hidden={!isOpen}
              >
                <div className="font-bold text-sm font-inter pl-1 pr-8 pb-8 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 