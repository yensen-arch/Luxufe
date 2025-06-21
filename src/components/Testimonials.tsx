'use client'

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star } from 'lucide-react';

const testimonialsData = [
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
    <div className={`transition-all duration-500 p-8 ${isActive ? 'bg-white shadow-2xl scale-100' : 'bg-gray-50 scale-90'}`}>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${isActive ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <blockquote className="text-center text-gray-600">
        “{quote}”
      </blockquote>
      <p className="text-center font-semibold mt-6 text-gray-800">{author} - {location}</p>
    </div>
  )
}


export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center mb-16">
          <h2 className="text-4xl lg:text-5xl w-1/2 font-light text-gray-900 leading-tight">
             Journeys that speak for themselves
          </h2>
          <p className=" text-gray-700 w-1/2  max-w-md">
            At Luxufe, our clients’ experiences define us. But don’t take our word for it. Explore their experiences of effortless journeys, impeccable service, and unforgettable moments.
          </p>
        </div>


        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonialsData.map((testimonial, index) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
                <TestimonialCard {...testimonial} isActive={index === selectedIndex} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
           <span className="text-gray-400">{String(selectedIndex + 1).padStart(2, '0')}</span>
           <div className="w-24 h-px bg-gray-300">
              <div 
                className="h-px bg-gray-800" 
                style={{ width: `${((selectedIndex + 1) / scrollSnaps.length) * 100}%` }}
              />
           </div>
           <span className="text-gray-400">{String(scrollSnaps.length).padStart(2, '0')}</span>
        </div>

      </div>
    </section>
  );
} 