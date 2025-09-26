'use client'

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

interface TestimonialsData {
  heading: string;
  description: string;
  testimonials: Testimonial[];
}

interface TestimonialsProps {
  data?: TestimonialsData;
}

const defaultTestimonialsData = [
  {
    quote: "At Luxufe, our clients' experiences define us. But don't take our word for it. Explore their experiences of effortless journeys, impeccable service, and unforgettable moments.",
    author: "Name Here",
    location: "USA"
  },
  {
    quote: "The attention to detail was simply extraordinary. From the private transfers to the curated daily excursions, every aspect of our trip was seamless. We felt truly cared for.",
    author: "Jane & John Smith",
    location: "UK"
  },
  {
    quote: "A journey that surpassed all expectations. The insider access Luxufe provided gave us a perspective we never would have gotten on our own. Unforgettable.",
    author: "Samantha Bee",
    location: "Canada"
  },
  {
    quote: "Impeccable service from start to finish. The team was responsive, knowledgeable, and genuinely passionate about creating the perfect trip for us. We'll be back!",
    author: "Carlos Rodriguez",
    location: "Spain"
  }
];

const TestimonialCard = ({ quote, author, location, isActive }: { quote: string, author: string, location: string, isActive: boolean }) => {
  return (
    <div className={`transition-all duration-500 p-6 sm:p-8 lg:p-12 mx-2 sm:mx-4 ${isActive ? 'shadow-2xl' : 'shadow-xl'} min-h-[300px] sm:min-h-[350px] lg:min-h-[360px] flex flex-col justify-center`}>
      <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
        {[...Array(5)].map((_, i) => (
          <img src="/luxufe-icon-star-ratings-solid-grey.svg" alt="Star" key={i} className="h-4 w-4 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mx-1 text-gray-300 fill-current" />
        ))}
      </div>
      <blockquote className={`text-center leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
        "{quote}"
      </blockquote>
      <p className={`text-center font-medium text-xs sm:text-sm lg:text-base ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>
        {author} - {location}
      </p>
    </div>
  )
}

export default function Testimonials({ data }: TestimonialsProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Journeys that speak for themselves",
    description: "At Luxufe, our clients' experiences define us. But don't take our word for it. Explore their experiences of effortless journeys, impeccable service, and unforgettable moments.",
    testimonials: defaultTestimonialsData
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: 'trimSnaps'
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
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          <div className="lg:w-1/2 mb-6 sm:mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-light text-gray-900 font-arpona font-bold">
              {sectionData.heading}
            </h2>
          </div>
          <div className="lg:w-3/8 lg:pl-10">
            <p className="text-sm sm:text-base lg:text-lg font-bold font-inter">
              {sectionData.description}
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto">
          <div ref={emblaRef}>
            <div className="flex">
              {sectionData.testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] lg:flex-[0_0_50%] min-w-0 cursor-pointer" key={index}>
                  <TestimonialCard {...testimonial} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
            <span className="text-gray-400 text-sm sm:text-base lg:text-lg font-light">
              {String(selectedIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-24 sm:w-28 lg:w-32 h-px bg-gray-300 relative">
              <div 
                className="h-px bg-gray-800 transition-all duration-300" 
                style={{ width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` }}
              />
            </div>
            <span className="text-gray-400 text-sm sm:text-base lg:text-lg font-light">
              {String(scrollSnaps.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}