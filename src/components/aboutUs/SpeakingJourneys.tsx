'use client'

import React, { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from '../aboutUs/TestimonialCard';

const blogPosts = [
  {
    category: "DESTINATIONS",
    title: "The Allure of the Amalfi Coast",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/amalfi/800/600"
  },
  {
    category: "EXPERIENCES",
    title: "A Culinary Journey Through Japan",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/japan-food/800/600"
  }
];

export default function SpeakingJourneys() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? blogPosts.length - 1 : prev - 1);
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => prev === blogPosts.length - 1 ? 0 : prev + 1);
  }, []);

  return (
    <section className="my-24 h-screen">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full items-center relative">
          {/* Left Content Section */}
          <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80')] bg-cover bg-center lg:col-span-12 h-full text-center lg:text-left p-6 lg:p-24 flex items-center">
          <div className="w-3/7">
              <h2 className="text-5xl font-arpona font-bold text-white my-6">
                Inspiration for the discerning traveller
              </h2>
              <p className="mb-10 lg:w-5/6 font-inter font-bold text-white">
                Explore expert insights, curated guides, and insider tips to elevate your travel experiences. 
                Discover the world's finest destinations, luxury stays, and bespoke journeys, all designed to 
                inspire your next adventure.
              </p>
              
            </div>
          </div>

          {/* Right Carousel Section - Overlapping */}
          <div className="col-span-7 col-start-7 lg:absolute lg:right-0 lg:top-0 h-full flex items-center relative">
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out m-10 gap-10"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <div className="flex-[0_0_70%]" key={index}>
                    <TestimonialCard quote="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." supporting="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna." avatar="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" name="John Doe" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute flex flex-col gap-6 top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2  pointer-events-none z-10">
              <button 
                onClick={scrollPrev} 
                className="bg-white rounded-full p-6 shadow-md hover:bg-white transition pointer-events-auto "
              >
                <ArrowLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white rounded-full p-6 shadow-md hover:bg-white transition pointer-events-auto"
              >
                <ArrowRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}