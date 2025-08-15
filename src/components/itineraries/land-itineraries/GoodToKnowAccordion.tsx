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
    <div className="w-full max-w-4xl px-4 md:px-8 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-arpona font-bold text-gray-900 mb-8">Good to Know</h2>
      
      <div className="space-y-4">
        {goodToKnow.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-inter font-bold text-gray-900 text-sm md:text-base">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-700 font-inter text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 