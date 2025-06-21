'use client'

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShipWheel } from 'lucide-react'; // Using ShipWheel as a placeholder icon

const voyageData = [
  {
    titlePart1: 'Unforgettable voyages,',
    titlePart2: 'unparalleled luxury',
    description: 'Set sail on a journey where every detail is designed for your ultimate comfort and discovery. From elegant ocean liners to intimate yacht charters, Luxufe curates the most exclusive cruise experiences, blending luxurious accommodation with breathtaking destinations.',
    imageUrl: 'https://picsum.photos/seed/yacht-luxury/1200/900',
    buttonText: 'LUXURY CRUISES',
  },
  {
    titlePart1: 'Exclusive rail journeys,',
    titlePart2: 'timeless elegance',
    description: 'Embark on a classic adventure aboard some of the world\'s most iconic trains. Traverse stunning landscapes in unparalleled comfort, enjoying gourmet dining and exquisite service. A journey by rail is a return to the golden age of travel.',
    imageUrl: 'https://picsum.photos/seed/luxury-train/1200/900',
    buttonText: 'CLASSIC TRAINS',
  },
  {
    titlePart1: 'Private jet charters,',
    titlePart2: 'seamless travel',
    description: 'Experience the pinnacle of convenience and luxury with our private jet charters. Skip the queues and travel on your own schedule to any destination worldwide. Enjoy personalized service and unmatched comfort from takeoff to landing.',
    imageUrl: 'https://picsum.photos/seed/private-jet/1200/900',
    buttonText: 'PRIVATE JETS',
  },
];

export default function Voyages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? voyageData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === voyageData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentVoyage = voyageData[currentIndex];

  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16">
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <img 
                src={currentVoyage.imageUrl}
                alt={currentVoyage.titlePart1}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="absolute lg:relative -bottom-8 lg:bottom-auto lg:left-0 flex lg:flex-col gap-3 z-10">
            <button onClick={goToPrevious} className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition">
              <ArrowLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button onClick={goToNext} className="bg-white rounded-full p-3 shadow-md hover:bg-gray-200 transition">
              <ArrowRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <div className="inline-block border border-gray-300 rounded-full p-3 mb-6">
              <ShipWheel className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="text-4xl font-serif">
              {currentVoyage.titlePart1}
              <span className="italic"> {currentVoyage.titlePart2}</span>
            </h2>
            <p className="mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0">
              {currentVoyage.description}
            </p>
            <button className="mt-10 group flex items-center gap-3 text-sm font-semibold tracking-widest border border-gray-400 px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto lg:mx-0">
              {currentVoyage.buttonText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
} 