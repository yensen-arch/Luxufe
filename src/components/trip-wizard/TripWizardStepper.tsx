'use client'
import React, { useState } from "react";

interface Option {
  label: string;
  iconUrl?: string;
}

interface TripWizardStepperProps {
  question: string;
  options: Option[];
  progress: number; // 0 to 1
  onNext?: (selected: Option | null) => void;
}

const defaultOptions: Option[] = [
  { label: "Exploring new cultures" },
  { label: "Total relaxation and reset" },
  { label: "Epic landscapes and wildlife" },
  { label: "Time with loved ones" },
  { label: "Adventure and movement" },
  { label: "A bit of everything, I'm open" },
];

const TripWizardStepper: React.FC<TripWizardStepperProps> = ({
  question,
  options = defaultOptions,
  progress = 0.2,
  onNext,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

  return (
    <section className="w-full flex justify-center items-center py-16 bg-[#f5f6f7]">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-normal mb-12 text-center">
          {question}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
          {options.map((option, idx) => (
            <button
              key={option.label}
              className={`flex flex-col items-center justify-center border-2 rounded-none bg-white px-8 py-10 shadow-sm transition-all duration-200 text-[#23263a] text-lg font-inter font-semibold min-h-[160px] border-gray-200 hover:border-[#a8d1cf] focus:outline-none ${
                selectedIdx === idx ? 'border-[#a8d1cf] shadow-lg' : ''
              }`}
              onClick={() => setSelectedIdx(idx)}
            >
              <span className="mb-6 flex items-center justify-center">
                {/* Placeholder icon, replace with real icon if available */}
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="22" stroke="#e5e7eb" strokeWidth="3" fill="#fff" />
                  <path d="M24 16l6 12h-12l6-12z" fill="#e5e7eb" />
                </svg>
              </span>
              <span className="text-center font-inter font-semibold text-lg">
                {option.label}
              </span>
            </button>
          ))}
        </div>
        <button
          className="mt-4 px-10 py-4 border border-gray-300 bg-white text-[#23263a] font-inter font-semibold text-base tracking-widest flex items-center gap-2 hover:bg-gray-100 transition-all"
          onClick={() => onNext?.(selectedIdx !== null ? options[selectedIdx] : null)}
        >
          NEXT QUESTION
          <span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 1L21 6L15 11" stroke="#23263a" strokeWidth="2"/>
              <line x1="21" y1="6" x2="1" y2="6" stroke="#23263a" strokeWidth="2"/>
            </svg>
          </span>
        </button>
        <div className="w-full mt-12">
          <div className="w-full h-3 bg-white rounded-full overflow-hidden">
            <div
              className="h-3 bg-[#a8d1cf] rounded-full transition-all duration-300"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripWizardStepper; 