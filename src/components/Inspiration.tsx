'use client'

import React, { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard';

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

export default function Inspiration() {
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
          <div className="lg:col-span-8 h-full text-center lg:text-left p-6 lg:p-24 bg-gray-50 flex items-center">
            <div className="w-3/5">
              <h3 className="text-5xl font-medium text-gray-600 italic mb-2 font-bellarina">
                Stories & insights
              </h3>
              <h2 className="text-5xl font-arpona font-bold text-gray-800 my-6">
                Inspiration for the discerning traveller
              </h2>
              <p className="mb-10 text-gray-600 lg:w-5/6 font-inter font-bold">
                Explore expert insights, curated guides, and insider tips to elevate your travel experiences. 
                Discover the world's finest destinations, luxury stays, and bespoke journeys, all designed to 
                inspire your next adventure.
              </p>
              <button className="group flex items-center gap-2 text-sm font-inter font-bold tracking-widest border border-gray-400 justify-center py-4 px-8 hover:bg-gray-800 hover:text-white transition-colors mx-auto lg:mx-0">
                FIND INSPIRATION
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
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
                    <BlogCard {...post} />
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