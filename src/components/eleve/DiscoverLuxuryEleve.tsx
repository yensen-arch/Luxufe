import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DiscoverLuxuryEleveProps {
  data?: {
    title: string
    description: string
    buttonText: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function DiscoverLuxuryEleve({ data }: DiscoverLuxuryEleveProps) {
  // Fallback data
  const fallbackData = {
    title: 'Unmatched care,\neffortless experiences',
    description: 'Luxury travel is defined by the peace of mind it brings. Where every detail is thoughtfully arranged, allowing you to focus solely on the journey ahead. From seamless transitions to exceptional customer care, every aspect of your trip is designed to provide an effortless and unforgettable experience.',
    buttonText: 'DISCOVER LUXURY',
    image: {
      url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1000&fit=crop&crop=face',
      alt: 'Luxury travel experience'
    }
  }

  const discoverData = data || fallbackData

  return (
    <section className="bg-white flex items-center my-40">
      <div className="w-full max-w-none relative">
        <div className="flex">
          {/* Left Content Panel */}
          <div className="w-4/6 bg-slate-800 flex items-center justify-center px-8 py-16 lg:px-16 min-h-screen">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 font-arpona">
                {discoverData.title}
              </h1>
              <div className='w-full ml-40'>
              <p className=" w-5/7 mr-12 lg:text-lg my-12 font-inter font-bold">
                {discoverData.description}
              </p>
              <button className=" font-inter font-bold group flex items-center gap-3 border border-slate-400 px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300">
                {discoverData.buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Panel - Offset and overlapping */}
          <div className="absolute right-0 top-26 w-3/7 h-6/6 z-10 min-h-screen">
            <img 
              src={discoverData.image.asset.url}
              alt={discoverData.image.alt}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}