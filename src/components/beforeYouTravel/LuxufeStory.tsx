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
    <section className="bg-white flex items-center my-40">
      <div className="w-full max-w-none relative">
        <div className="flex">
          {/* Left Content Panel */}
          <div className="w-4/6 bg-slate-800 flex items-center justify-center px-8 py-16 lg:px-16 min-h-screen">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 font-arpona">
                {storyData.title}
              </h1>
              <div className='w-full ml-40'>
                <p className=" w-4/7 mr-12 lg:text-lg my-12 font-inter font-bold">
                  {storyData.description}
                </p>
                <button className=" font-inter font-bold group flex items-center gap-3 border border-gray-400 px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300">
                  {storyData.buttonText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Panel - Offset and overlapping */}
          <div className="absolute right-0 top-26 w-3/7 h-6/6 z-10 min-h-screen">
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