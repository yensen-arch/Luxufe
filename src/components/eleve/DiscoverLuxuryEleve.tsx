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
    <section className="bg-white flex items-center my-20 md:my-32 lg:my-40">
      <div className="w-full max-w-none relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Panel */}
          <div className="w-full lg:w-4/6 bg-slate-800 flex items-center justify-center px-4 md:px-6 lg:px-8 xl:px-16 py-8 md:py-12 lg:py-16 min-h-[60vh] md:min-h-[70vh] lg:min-h-screen order-2 lg:order-1">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight mb-4 md:mb-6 lg:mb-8 font-arpona">
                {discoverData.title}
              </h1>
              <div className='w-full lg:ml-40'>
              <p className="w-full lg:w-5/7 lg:mr-12 text-sm md:text-base lg:text-lg my-6 md:my-8 lg:my-12 font-inter font-bold">
                {discoverData.description}
              </p>
              <button className="font-inter font-bold group flex items-center gap-2 md:gap-3 border border-slate-400 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs md:text-sm tracking-wider hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300">
                {discoverData.buttonText}
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
              </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Panel - Offset and overlapping */}
          <div className="lg:absolute lg:right-0 lg:top-26 w-full lg:w-3/7 h-[40vh] md:h-[50vh] lg:h-6/6 z-10 lg:min-h-screen order-1 lg:order-2">
            <img 
              src={discoverData.image.url}
              alt={discoverData.image.alt}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}