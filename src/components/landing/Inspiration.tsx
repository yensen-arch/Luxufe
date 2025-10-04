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
    <section className="my-8 sm:my-12 lg:my-24 min-h-screen lg:h-[120vh] overflow-hidden">
      <div className="relative h-full">
        {/* Left Content Section - Responsive layout */}
        <div className="lg:absolute lg:left-0 lg:top-0 lg:h-full w-full lg:w-[75%] text-center lg:text-left px-4 sm:px-6 lg:px-8 xl:p-24 py-8 sm:py-12 lg:py-16 bg-gray-100 lg:flex lg:items-center z-10">
          <div className="w-full lg:w-3/5 lg:ml-10">
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-600 mb-2 font-bellarina">
              Stories & insights
            </h3>
            <h2 className="text-xl sm:text-3xl lg:text-6xl font-arpona font-bold text-gray-800 my-3 sm:my-4 lg:my-6 leading-tight">
              {sectionData.heading}
            </h2>
            <p className="mb-4 sm:mb-6 lg:mb-10 lg:w-4/6 font-inter font-bold text-sm sm:text-base leading-relaxed">
              {sectionData.description}
            </p>
            <button className="group flex items-center gap-2 text-xs font-inter font-bold tracking-widest border-2 border-gray-300 justify-center py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 hover:bg-gray-800 hover:text-white transition-colors mx-auto lg:mx-0">
              {sectionData.ctaText}
              <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
          </div>
        </div>

        {/* Mobile: Carousel */}
        {isMobile && (
          <div className="lg:hidden w-full px-4 sm:px-6 py-6 sm:py-8">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {sectionData.blogPosts.map((post, index) => (
                  <div className="flex-[0_0_100%] px-2" key={index}>
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
            
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button 
                onClick={scrollPrev} 
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition border border-gray-200"
              >
                <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-5 w-5 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition border border-gray-200"
              >
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop: Carousel positioned from center-right */}
        {!isMobile && (
          <>
            <div className="hidden lg:block absolute left-[55%] top-1/2 -translate-y-1/2 overflow-visible z-20">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-10"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {sectionData.blogPosts.map((post, index) => (
                  <BlogCard 
                    key={index}
                    category={post.category}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.image.url}
                    buttonText={post.buttonText}
                    buttonLink={post.buttonLink}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Desktop only */}
            <div className="hidden lg:flex absolute flex-col gap-6 top-1/2 right-40 -translate-y-1/2 z-30">
              <button 
                onClick={scrollPrev} 
                className="bg-white rounded-full p-7 shadow-lg hover:bg-white transition border border-gray-300"
              >
                <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-7 w-7 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white rounded-full p-7 shadow-lg hover:bg-white transition border border-gray-300"
              >
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-7 w-7 text-gray-800" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}