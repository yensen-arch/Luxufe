'use client'

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

interface GuidingValuesProps {
  data?: {
    title: string
    subtitle: string
    values: Array<{
      title: string
      highlightedWord: string
      description: string
    }>
  }
}

const defaultValues = [
  {
    title: "Anticipate and",
    highlightedWord: "adapt",
    description: "Luxury means never having to ask. We stay ahead, foreseeing needs and evolving for our clients to deliver travel that feels effortless and intuitive.",
  },
  {
    title: "Make the Exceptional",
    highlightedWord: "effortless",
    description: "Luxury is not about complexity but about the ease with which experiences unfold. We refine every journey to feel seamless, intuitive, and flawlessly executed.",
  },
  {
    title: "Putting People",
    highlightedWord: "first",
    description: "Every journey begins with understanding the traveler. We craft experiences with care, each moment is personal, meaningful, thoughtfully designed.",
  },
  {
    title: "Put People",
    highlightedWord: "first",
    description: "Every journey begins with understanding the traveler. We craft experiences with care, each moment is personal, meaningful, thoughtfully designed.",
  }
];

const ValueCard = ({ title, highlightedWord, description, isActive }: { title: string, highlightedWord: string, description: string, isActive: boolean }) => (
  <div
    className='bg-white shadow-xl p-12 flex flex-col items-center text-center min-h-[260px] transition-all duration-500 mx-4'
  >
    <h3 className="text-2xl font-arpona font-bold mb-4 text-[#23263a]">
      {title} <span className="font-bellarina italic text-3xl align-baseline">{highlightedWord}</span>
    </h3>
    <p className="w-5/6 font-inter text-[#23263a] text-sm font-bold leading-relaxed">{description}</p>
  </div>
);

export default function GuidingValues({ data }: GuidingValuesProps) {
  // Fallback data if no Sanity data is provided
  const guidingData = data || {
    title: 'What Guides Every\nLuxufe Journey?',
    subtitle: 'True luxury is more than a destination. Our core values define how we create seamless, meaningful, and unforgettable journeys.',
    values: defaultValues
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 3 },
      '(min-width: 640px)': { slidesToScroll: 2 },
    },
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateSelectedIndex = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', updateSelectedIndex);
    updateSelectedIndex(emblaApi);
    return () => {
      emblaApi.off('select', updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  return (
    <section className="py-24 bg-[#fafbfc]">
      <div className="container mx-auto px-4 overflow-hidden">
        {/* Header */}
        <div className="flex max-w-6xl mx-auto flex-col lg:flex-row justify-between items-start mb-24">
          <div className="lg:w-2/3 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-arpona font-bold text-[#23263a] leading-tight">
              {guidingData.title}
            </h2>
          </div>
          <div className="lg:w-2/5">
            <p className="text-lg font-inter font-bold text-[#23263a]">
              {guidingData.subtitle}
            </p>
          </div>
        </div>
        {/* Carousel Section */}
        <div className="mx-auto">
          <div ref={emblaRef}>
            <div className="flex">
              {guidingData.values.map((v, index) => (
                <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 cursor-pointer" key={index}>
                  <ValueCard {...v} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Indicator */}
          <div className="flex justify-center items-center gap-2 mt-24 w-40 mx-auto">
            {/* Left numbers */}
            <span className={`text-xs font-inter ${selectedIndex === 0 ? 'text-[#23263a] font-bold' : 'text-gray-400 font-light'}`}>01</span>
            <span className={`text-xs font-inter ${selectedIndex === 1 ? 'text-[#23263a] font-bold' : 'text-gray-400 font-light'}`}>02</span>
            {/* Line */}
            <div className="flex-1 h-px bg-gray-300 mx-2" />
            {/* Right numbers */}
            <span className="text-xs font-inter text-gray-400 font-light">03</span>
            <span className="text-xs font-inter text-gray-400 font-light">04</span>
          </div>
        </div>
      </div>
    </section>
  );
} 