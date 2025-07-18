'use client'

import React, { useCallback, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from '../aboutUs/TestimonialCard';

interface SpeakingJourneysProps {
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    title: string
    description: string
    testimonials: Array<{
      quote: string
      supporting: string
      name: string
      avatar?: {
        url: string
        alt: string
      }
    }>
  }
}

export default function SpeakingJourneys({ data }: SpeakingJourneysProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback data
  const fallbackData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury travel background'
    },
    title: 'Journeys that speak for themselves',
    description: 'Luxufe is a travel company that specializes in creating bespoke journeys for discerning travelers.',
    testimonials: [
      {
        quote: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
        supporting: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
        name: 'John Doe',
        avatar: {
          url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
          alt: 'John Doe'
        }
      }
    ]
  }

  const speakingData = data || fallbackData

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? speakingData.testimonials.length - 1 : prev - 1);
  }, [speakingData.testimonials.length]);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => prev === speakingData.testimonials.length - 1 ? 0 : prev + 1);
  }, [speakingData.testimonials.length]);

  return (
    <section className="my-24 h-screen">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full items-center relative">
          {/* Left Content Section */}
          <div 
            className="bg-cover bg-center lg:col-span-12 h-full text-center lg:text-left p-6 lg:p-24 flex items-center"
            style={{ backgroundImage: `url('${speakingData.backgroundImage.url}')` }}
          >
            <div className="w-3/7 flex flex-col items-start justify-center">
              <h2 className="text-5xl font-arpona font-bold text-white my-6">
                {speakingData.title}
              </h2>
              <p className="mb-10 lg:w-5/7 font-inter font-bold text-white">
                {speakingData.description}
              </p>
              {/* Navigation Buttons */}
              <div className="flex gap-6 mt-8 mx-auto lg:mx-0">
                <button 
                  onClick={scrollPrev} 
                  className="bg-white rounded-full p-6 shadow-md hover:bg-white transition"
                >
                  <ArrowLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button 
                  onClick={scrollNext} 
                  className="bg-white rounded-full p-6 shadow-md hover:bg-white transition"
                >
                  <ArrowRight className="h-6 w-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Carousel Section - Overlapping */}
          <div className="col-span-7 col-start-7 lg:absolute lg:right-0 lg:top-0 h-full flex items-center relative">
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out m-10 gap-10"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
              >
                {speakingData.testimonials.map((testimonial, index) => (
                  <div className="flex-[0_0_70%]" key={index}>
                    <TestimonialCard 
                      quote={testimonial.quote} 
                      supporting={testimonial.supporting} 
                      avatar={testimonial.avatar?.url || ''} 
                      name={testimonial.name} 
                    />
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