import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LuxufeStoryProps {
  data?: {
    title: string
    description: string
    buttonText: string
    buttonLink?: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function LuxufeStory({ data }: LuxufeStoryProps) {
  // Fallback data if no Sanity data is provided
  const storyData = data || {
    title: 'Luxufe & The Story\nof Ati Jain',
    description: 'Luxury travel is not just about extravagance for Luxufe\'s founder Ati Jain. It is about removing friction and creating experiences that feel instinctively effortless.\n\nAfter years of witnessing inconsistencies in high-end travel, Ati founded Luxufe with a singular mission: to ensure every journey is planned to perfection and seamlessly executed, leaving no room for uncertainty.',
    buttonText: 'DISCOVER LUXURY',
    buttonLink: '#',
    image: {
      url: 'https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&h=1000&fit=crop&crop=face',
      alt: 'Happy older couple enjoying travel together'
    }
  }

  return (
    <section className="bg-white flex items-center my-20 md:my-32 lg:my-40">
      <div className="w-full max-w-none relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Panel */}
          <div className="w-full lg:w-4/6 bg-slate-800 flex items-center justify-center px-6 md:px-8 py-12 md:py-16 lg:px-16 min-h-[60vh] md:min-h-[70vh] lg:min-h-screen order-2 lg:order-1">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight mb-6 md:mb-8 font-arpona">
                {storyData.title}
              </h1>
              <div className='w-full lg:ml-40'>
                <p className="w-full lg:w-4/7 lg:mr-12 text-sm md:text-base lg:text-lg my-8 md:my-10 lg:my-12 font-inter font-bold">
                  {storyData.description}
                </p>
                <button className="font-inter font-bold group flex items-center gap-2 md:gap-3 border border-gray-400 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-wider hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300">
                  {storyData.buttonText}
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Panel - Offset and overlapping */}
          <div className="lg:absolute lg:right-0 lg:top-26 w-full lg:w-3/7 h-[40vh] md:h-[50vh] lg:h-6/6 lg:z-10 lg:min-h-screen order-1 lg:order-2">
            <img 
              src={storyData.image.url}
              alt={storyData.image.alt}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}