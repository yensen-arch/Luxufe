'use client'

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const perksData = [
  {
    title: "Elevé",
    description: "Loyalty should feel as effortless as your travels. With Elevé by Luxufe, every journey brings exclusive benefits, personalised perks, and priority access to unforgettable experiences. Because the more you explore with us, the more rewarding it becomes.",
    imageUrl: "https://picsum.photos/seed/resort-pool/1000/1200",
    perks: [
      "Here is a perk that's included",
      "List another perk right here for Elevé",
      "Another one can go right here"
    ],
  },
  {
    title: "Priority Access",
    description: "Gain early access to our most sought-after itineraries and exclusive partner offers. As an Elevé member, you're always at the front of the line for new and unique travel opportunities.",
    imageUrl: "https://picsum.photos/seed/priority-access/1000/1200",
    perks: [
      "Early booking windows",
      "Invitations to exclusive events",
      "First look at new destinations"
    ],
  },
  {
    title: "Personalised Service",
    description: "Your journey is tailored to your preferences. Enjoy complimentary upgrades, bespoke amenities, and a dedicated travel concierge who understands your unique style and desires.",
    imageUrl: "https://picsum.photos/seed/personal-service/1000/1200",
    perks: [
      "Dedicated concierge service",
      "Complimentary room upgrades",
      "Personalized in-room amenities"
    ],
  },
];

const BackgroundPattern = () => (
  <div
    className="absolute inset-0 h-full w-full opacity-[0.5]"
    style={{
      backgroundImage: `url('https://res-console.cloudinary.com/dqh2tacov/thumbnails/v1/image/upload/v1750586718/THV4dWZlX3NlY29uZGFyeV9icmFuZF9wYXR0ZXJuX2JsdWVfbmxiamxt/drilldown')`,
    }}
  />
);

export default function ElevePerks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex(prev => (prev === 0 ? perksData.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === perksData.length - 1 ? 0 : prev + 1));

  const currentPerk = perksData[currentIndex];

  return (
    <section className="bg-[#1a233a] text-white h-[108vh] relative">
      <div className="absolute inset-0 z-0">
                <BackgroundPattern />
            </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-4/7 relative h-[650px] mt-40">
        <div className="z-100  absolute top-0 -right-36 -translate-y-1/2 -translate-x-1/2 ">
       <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[150px] h-auto" />
      </div>
          <img src={currentPerk.imageUrl} alt={currentPerk.title} className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6 text-sm font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(perksData.length).padStart(2, '0')}
          </div>
          <div className="absolute bottom-6 left-6 flex gap-3">
              <button onClick={goToPrevious} className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition">
                  <ArrowLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button onClick={goToNext} className="bg-white/80 rounded-full p-3 shadow-md hover:bg-white transition">
                  <ArrowRight className="h-6 w-6 text-gray-800" />
              </button>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
            
            <div className="relative max-w-md mt-25">
                <h3 className="text-3xl font-arpona font-bold">Experience more with</h3>
                <h2 className="text-6xl font-bellarina mb-6 ">{currentPerk.title} <span className="text-3xl font-arpona font-bold">by Luxufe</span>
                </h2>
                <p className="mb-8 font-inter font-bold w-4/5">{currentPerk.description}</p>
                <ul className="space-y-4 font-inter font-bold text-green-200 opacity-60">
                    {currentPerk.perks.map((perk, index) => (
                        <li key={index} className="flex items-center gap-4 border-b border-white/40 pb-4">
                            <Star className="h-5 w-5 " />
                            <span>{perk}</span>
                        </li>
                    ))}
                </ul>
                <button className="mt-10 group font-inter font-bold flex items-center gap-3 text-sm font-semibold tracking-widest border border-white/40 px-6 py-3 hover:bg-white hover:text-[#1a233a] transition-colors">
                    ELEVATE YOUR TRAVEL
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
      </div>
    </section>
  )
} 