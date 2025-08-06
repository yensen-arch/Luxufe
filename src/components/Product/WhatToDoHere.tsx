'use client'
import React, { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const defaultImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel pool area at dusk"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury bedroom with wooden headboard"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel interior with mountain views"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel spa and wellness area"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    alt: "Hotel dining experience"
  }
];

export default function WhatToDoHere() {
  // Fallback data if no Sanity data is provided
  const journeysData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      alt: 'Background'
    },
    title: 'What You Can Do Here',
    description: 'Tailored experiences that enhance your stay',
    images: defaultImages
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? journeysData.images.length - 1 : prev - 1);
  }, [journeysData.images.length]);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => prev === journeysData.images.length - 1 ? 0 : prev + 1);
  }, [journeysData.images.length]);

  return (
    <section className="my-12 md:my-16 lg:my-24 h-auto md:h-screen ">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center relative">
          {/* Left Content Section */}
          <div 
            className="bg-[#F8F8F8] w-5/7 bg-cover bg-center lg:col-span-12 h-[50vh] md:h-[50vh] lg:h-full text-center lg:text-left p-6 md:p-12 lg:p-24 flex items-center order-2 lg:order-1"
          >
            <div className=" w-full flex flex-col items-center lg:items-start justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl lg:w-sm font-bellarina text-[#212121] my-4 md:my-5 lg:my-6">Experiences</h1>
              <h2 className="text-3xl md:text-4xl lg:text-6xl lg:w-sm font-arpona font-bold text-[#212121] my-4 md:my-5 lg:my-6">
                {journeysData.title}
              </h2>
              <p className="mb-6 md:mb-8 lg:mb-10 w-full lg:w-5/7 font-inter font-bold text-[#212121] text-sm md:text-base">
                {journeysData.description}
              </p>
              {/* Navigation Buttons */}
              <div className="flex gap-4 md:gap-5 lg:gap-6 mt-6 md:mt-7 lg:mt-8 mx-auto lg:mx-0">
                <button 
                  onClick={scrollPrev} 
                  className="bg-white rounded-full p-4 md:p-5 lg:p-6 shadow-md hover:bg-white transition"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-800" />
                </button>
                <button 
                  onClick={scrollNext} 
                  className="bg-white rounded-full p-4 md:p-5 lg:p-6 shadow-md hover:bg-white transition"
                >
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Carousel Section - Overlapping */}
          <div className="col-span-1 lg:col-span-7 lg:col-start-7 lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex items-center relative order-1 lg:order-2">
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out m-4 md:m-6 lg:m-10 gap-4 md:gap-6 lg:gap-10"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {journeysData.images.map((image, index) => (
                  <div className="flex-[0_0_70%]" key={image.id}>
                    <div className="bg-white mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-64 md:h-88 lg:h-100 object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}