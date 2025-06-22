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
  },
  {
    category: "HOTELS",
    title: "Sleeping Under the Stars in the Sahara",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/sahara-stars/800/600"
  },
  {
    category: "JOURNEYS",
    title: "The Ultimate Scottish Highlands Road Trip",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/scotland-roadtrip/800/600"
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
    <section className="my-24 lg:h-screen">
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
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:absolute lg:right-0 lg:top-0 lg:h-full flex items-center relative">
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out -ml-4"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {blogPosts.map((post, index) => (
                  <div className="flex-[0_0_100%] sm:flex-[0_0_50%] pl-4" key={index}>
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 lg:px-0 pointer-events-none z-10">
              <button 
                onClick={scrollPrev} 
                className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition pointer-events-auto -ml-8"
              >
                <ArrowLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition pointer-events-auto -mr-8"
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