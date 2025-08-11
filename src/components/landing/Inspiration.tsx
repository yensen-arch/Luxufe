'use client'

import React, { useCallback, useState, useEffect } from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  category: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  buttonText: string;
  buttonLink: string;
}

interface InspirationData {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  blogPosts: BlogPost[];
}

interface InspirationProps {
  data?: InspirationData;
}

const defaultBlogPosts = [
  {
    category: "DESTINATIONS",
    title: "The Allure of the Amalfi Coast",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/amalfi/800/600",
    buttonText: "READ MORE",
    buttonLink: "#"
  },
  {
    category: "EXPERIENCES",
    title: "A Culinary Journey Through Japan",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.",
    imageUrl: "https://picsum.photos/seed/japan-food/800/600",
    buttonText: "READ MORE",
    buttonLink: "#"
  }
];

export default function Inspiration({ data }: InspirationProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Inspiration for the discerning traveller",
    description: "Explore expert insights, curated guides, and insider tips to elevate your travel experiences. Discover the world's finest destinations, luxury stays, and bespoke journeys, all designed to inspire your next adventure.",
    ctaText: "FIND INSPIRATION",
    ctaLink: "#",
    blogPosts: defaultBlogPosts.map(post => ({
      category: post.category,
      title: post.title,
      description: post.description,
      image: {
        url: post.imageUrl,
        alt: post.title
      },
      buttonText: post.buttonText,
      buttonLink: post.buttonLink
    }))
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? sectionData.blogPosts.length - 1 : prev - 1);
  }, [sectionData.blogPosts.length]);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => prev === sectionData.blogPosts.length - 1 ? 0 : prev + 1);
  }, [sectionData.blogPosts.length]);

  return (
    <section className="my-12 sm:my-16 lg:my-24 min-h-screen lg:h-screen">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center relative">
          {/* Left Content Section */}
          <div className="lg:col-span-8 h-full text-center lg:text-left p-6 sm:p-8 lg:p-24 bg-gray-50 flex items-center">
            <div className="w-full lg:w-3/5">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-600 italic mb-2 font-bellarina">
                Stories & insights
              </h3>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-arpona font-bold text-gray-800 my-4 sm:my-6">
                {sectionData.heading}
              </h2>
              <p className="mb-6 sm:mb-8 lg:mb-10 lg:w-5/6 font-inter font-bold text-sm sm:text-base">
                {sectionData.description}
              </p>
              <button className="group flex items-center gap-2 text-xs sm:text-sm font-inter font-bold tracking-widest border border-gray-400 justify-center py-3 sm:py-4 px-6 sm:px-8 hover:bg-gray-800 hover:text-white transition-colors mx-auto lg:mx-0">
                {sectionData.ctaText}
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Carousel Section - Mobile: Stacked, Desktop: Overlapping */}
          <div className="lg:col-span-7 lg:col-start-7 lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex items-center relative mt-8 lg:mt-0">
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out m-4 sm:m-6 lg:m-10 gap-4 sm:gap-6 lg:gap-10"
                style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` }}
              >
                {sectionData.blogPosts.map((post, index) => (
                  <div className={`flex-[0_0_${isMobile ? '100%' : '70%'}]`} key={index}>
                    <BlogCard 
                      category={post.category}
                      title={post.title}
                      description={post.description}
                      imageUrl={post.image.url}
                      buttonText={post.buttonText}
                      buttonLink={post.buttonLink}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Hidden on mobile for cleaner look */}
            <div className="hidden lg:flex absolute flex-col gap-6 top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              <button 
                onClick={scrollPrev} 
                className="bg-white rounded-full p-6 shadow-md hover:bg-white transition pointer-events-auto"
              >
                <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-6 w-6 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white rounded-full p-6 shadow-md hover:bg-white transition pointer-events-auto"
              >
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-6 w-6 text-gray-800" />
              </button>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="lg:hidden flex justify-center gap-2 mt-4">
              {sectionData.blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}