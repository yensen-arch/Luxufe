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
    className='bg-white shadow-xl p-6 md:p-8 lg:p-12 flex flex-col items-center text-center min-h-[200px] md:min-h-[240px] lg:min-h-[260px] transition-all duration-500 mx-2 md:mx-4'
  >
    <h3 className="text-lg md:text-xl lg:text-2xl font-arpona font-bold mb-3 md:mb-4 text-[#23263a]">
      {title} <span className="font-bellarina italic text-xl md:text-2xl lg:text-3xl align-baseline">{highlightedWord}</span>
    </h3>
    <p className="w-full lg:w-5/6 font-inter text-[#23263a] text-xs md:text-sm font-bold leading-relaxed">{description}</p>
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
    <section className="py-12 md:py-16 lg:py-24 bg-[#fafbfc]">
      <div className="container mx-auto px-4 overflow-hidden">
        {/* Header */}
        <div className="flex max-w-6xl mx-auto flex-col lg:flex-row justify-between items-start mb-12 md:mb-16 lg:mb-24">
          <div className="lg:w-2/3 lg:mb-0 mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold text-[#23263a] leading-tight">
              {guidingData.title}
            </h2>
          </div>
          <div className="lg:w-2/5">
            <p className="text-base md:text-lg font-inter font-bold text-[#23263a]">
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
          <div className="flex justify-center items-center gap-2 mt-12 md:mt-16 lg:mt-24 w-40 mx-auto">
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