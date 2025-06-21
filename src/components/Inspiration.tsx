'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-3xl font-serif text-gray-600 italic mb-2">Stories & insights</h3>
            <h2 className="text-5xl font-serif text-gray-800 mb-6">Inspiration for the discerning traveller</h2>
            <p className="text-gray-600 mb-10">
              Explore expert insights, curated guides, and insider tips to elevate your travel experiences. Discover the world's finest destinations, luxury stays, and bespoke journeys, all designed to inspire your next adventure.
            </p>
            <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest border border-gray-400 px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto lg:mx-0">
              FIND INSPIRATION
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="lg:w-2/3 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {blogPosts.map((post, index) => (
                  <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_50%] min-w-0 pl-4" key={index}>
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 lg:-px-4">
                <button onClick={scrollPrev} className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition -ml-8 z-10">
                    <ArrowLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button onClick={scrollNext} className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition -mr-8 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-800" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 