'use client'

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ItineraryCard from './ItineraryCard';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const itineraries = [
  { location: 'EGYPT', nights: 9, imageUrl: 'https://picsum.photos/seed/egypt/800/1000', name: 'Pyramids & Nile Cruise', price: 25756 },
  { location: 'ANTARCTICA', nights: 12, imageUrl: 'https://picsum.photos/seed/antarctica/800/1000', name: 'Journey to the Ice Kingdom', price: 27756 },
  { 
    location: 'SOUTH AMERICA', 
    nights: 8, 
    imageUrl: 'https://picsum.photos/seed/samerica/800/1000', 
    name: 'Inca Trails & Machu Picchu',
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 18756,
    isFeatured: true
  },
  { location: 'SOUTH AFRICA', nights: 9, imageUrl: 'https://picsum.photos/seed/safrica/800/1000', name: 'Cape Town & Safari', price: 22756 },
  { location: 'GREECE', nights: 7, imageUrl: 'https://picsum.photos/seed/greece/800/1000', name: 'Islands of the Aegean', price: 19756 },
];

export default function CuratedForYou() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-serif">The world,</h2>
        <h3 className="text-4xl font-serif text-gray-600 italic mb-6">curated for you</h3>
        <p className="max-w-3xl mx-auto mb-12">
          From iconic landmarks to hidden retreats, Luxufe takes you beyond the expected. Discover travel experiences designed around your desires, where every journey is effortless and immersive.
        </p>
        <div className="flex justify-center items-center gap-8 mb-16 text-gray-600">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Personalised Itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>Insider secrets guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>World-class Service</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {itineraries.map((item, index) => (
              <div className="flex-[0_0_auto] min-w-0 pl-4" key={index}>
                <ItineraryCard {...item} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white z-10">
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow-md hover:bg-white z-10">
          <ArrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      <div className="text-center mt-16 flex justify-center gap-4">
        <button className="border border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition flex items-center gap-2">
          JOURNEYS & TOURS <ArrowRight className="h-4 w-4" />
        </button>
        <button className="border border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition">
          + MORE WAYS TO TRAVEL
        </button>
      </div>
    </section>
  )
} 