'use client'

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const values = [
  {
    title: <>
      Anticipate and <span className="font-bellarina italic text-3xl align-baseline">adapt</span>
    </>,
    description:
      "Luxury means never having to ask. We stay ahead, foreseeing needs and evolving for our clients to deliver travel that feels effortless and intuitive.",
  },
  {
    title: <>
      Make the Exceptional <span className="font-bellarina italic text-3xl align-baseline">effortless</span>
    </>,
    description:
      "Luxury is not about complexity but about the ease with which experiences unfold. We refine every journey to feel seamless, intuitive, and flawlessly executed.",
  },
  {
    title: <>
      Putting People <span className="font-bellarina italic text-3xl align-baseline">first</span>
    </>,
    description:
      "Every journey begins with understanding the traveler. We craft experiences with care, each moment is personal, meaningful, thoughtfully designed.",
  },
  {
    title: <>
      Put People <span className="font-bellarina italic text-3xl align-baseline">first</span>
    </>,
    description:
      "Every journey begins with understanding the traveler. We craft experiences with care, each moment is personal, meaningful, thoughtfully designed.",
  }
];

const ValueCard = ({ title, description, isActive }: { title: React.ReactNode, description: string, isActive: boolean }) => (
  <div
    className='bg-white shadow-xl p-12 flex flex-col items-center text-center min-h-[260px] transition-all duration-500 mx-4'
  >
    <h3 className="text-2xl font-arpona font-bold mb-4 text-[#23263a]">{title}</h3>
    <p className="w-5/6 font-inter text-[#23263a] text-sm font-bold leading-relaxed">{description}</p>
  </div>
);

export default function GuidingValues() {
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
        <div className="flex max-w-7xl mx-auto flex-col lg:flex-row justify-between items-start mb-24">
          <div className="lg:w-2/3 lg:mb-0">
            <h2 className="text-5xl lg:text-6xl font-arpona font-bold text-[#23263a] leading-tight">
              What Guides Every<br />Luxufe Journey?
            </h2>
          </div>
          <div className="lg:w-2/5">
            <p className="text-lg font-inter font-bold text-[#23263a]">
              True luxury is more than a destination. Our core values define how we create seamless, meaningful, and unforgettable journeys.
            </p>
          </div>
        </div>
        {/* Carousel Section */}
        <div className="mx-auto">
          <div ref={emblaRef}>
            <div className="flex">
              {values.map((v, index) => (
                <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 cursor-pointer" key={index}>
                  <ValueCard {...v} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>
          {/* Pagination Indicator */}
          <div className="flex justify-center items-center gap-4 mt-24">
            <span className="text-gray-400 text-xs font-light font-inter">
              {String(selectedIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-gray-400 text-xs font-light font-inter">
              {String(selectedIndex + 2).padStart(2, '0')}
            </span>
            <div className="w-32 h-px bg-gray-300 relative">
              <div
                className="h-px bg-[#23263a] transition-all duration-300"
                style={{ width: `${((selectedIndex + 1) / values.length) * 100}%` }}
              />
            </div>
            <span className="text-gray-400 text-xs font-light font-inter">
              {String(values.length-1).padStart(2, '0')}
            </span>
            <span className="text-gray-400 text-xs font-light font-inter">
              {String(values.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 