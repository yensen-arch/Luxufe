import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DiscoverLuxuryData {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: {
    url: string;
    alt: string;
  };
}

interface DiscoverLuxuryProps {
  data?: DiscoverLuxuryData;
}

export default function DiscoverLuxury({ data }: DiscoverLuxuryProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Unmatched care,\neffortless experiences",
    description: "Luxury travel is defined by the peace of mind it brings. Where every detail is thoughtfully arranged, allowing you to focus solely on the journey ahead. From seamless transitions to exceptional customer care, every aspect of your trip is designed to provide an effortless and unforgettable experience.",
    ctaText: "DISCOVER LUXURY",
    ctaLink: "#",
    image: {
      url: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=800&h=1000&fit=crop&crop=face",
      alt: "Happy older couple enjoying travel together"
    }
  };

  return (
    <section className="bg-white flex items-center">
      <div className="w-full max-w-none relative">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content Panel */}
          <div className="w-full lg:w-6/6 bg-slate-800 flex items-center justify-center px-6 md:px-8 py-12 md:py-16 lg:px-16 min-h-[60vh] md:min-h-[70vh] lg:min-h-screen order-2 lg:order-1">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl md:text-3xl w-full lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight mb-6 md:mb-8 font-arpona">
                {sectionData.heading.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < sectionData.heading.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <div className='w-full lg:ml-40'>
                <p className="w-full lg:w-5/7 lg:mr-12 text-sm md:text-base lg:text-lg my-8 md:my-10 lg:my-12 font-inter font-bold">
                  {sectionData.description}
                </p>
                <button className="font-inter cursor-pointer font-bold group flex items-center gap-2 md:gap-3 border border-gray-400 px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-wider hover:bg-white hover:text-slate-800 hover:border-white transition-all duration-300">
                  {sectionData.ctaText}
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image Panel - Offset and overlapping */}
          <div className="absolute z-10 border border-black lg:relative lg:right-20 lg:top-26 w-full lg:w-6/7 h-[40vh] md:h-[50vh] lg:h-6/6 lg:min-h-screen order-1 lg:order-2">
            <img 
              src={sectionData.image.url}
              alt={sectionData.image.alt}
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}