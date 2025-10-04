'use client'

import React, { useCallback, useState, useEffect } from 'react';

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

const BlogCard = ({ category, title, description, imageUrl, buttonText, buttonLink }) => {
  return (
    <div className="w-110 h-170 bg-blue-500 relative border border-gray-200 shadow-xl overflow-hidden flex-shrink-0">
      <img
        src={imageUrl}
        alt={title}
        className="w-122 h-48 sm:h-66 lg:h-170 object-cover"
      />

      <div
        className="absolute inset-x-0 bottom-0"
        style={{ top: "calc(100% - 350px)", zIndex: 0, left: 0, right: 0 }}
      >
        <img src="/custom_curve.svg" alt="Curve" className="w-full h-full object-cover" />
      </div>
      <div className="relative px-4 sm:px-6 lg:px-5 py-0 text-left" style={{ zIndex: 20, marginTop: "-280px" }}>
        <p className="text-xs text-gray-500 tracking-widest uppercase font-inter font-bold">
          {category}
        </p>
        <h3 className="text-2xl sm:text-md font-arpona font-bold text-gray-800 mt-4 mb-6 h-auto sm:h-16 w-full sm:w-2/4">
          {title}
        </h3>
        <p className="text-xs text-gray-500 w-2/3 leading-relaxed h-auto sm:h-24 font-inter font-bold mb-1 sm:mb-1">
          {description}
        </p>
        <a
          href={buttonLink}
          className="mt-3 sm:mt-4 text-xs inline-flex items-center gap-1 sm:gap-2 font-inter font-bold text-gray-800 hover:underline"
        >
          {buttonText}{" "}
          <img
            src="/luxufe-icon-button-arrow-dark.svg"
            alt="Arrow right"
            className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0"
          />
        </a>
      </div>
    </div>
  );
};

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
    <section className="my-12 sm:my-16 lg:my-24 min-h-screen lg:h-[120vh] overflow-hidden">
      <div className="relative h-full">
        {/* Left Content Section - Absolute positioned */}
        <div className="absolute left-0 top-0 h-full w-full lg:w-[55%] text-center lg:text-left px-6 py-12 sm:px-8 sm:py-16 lg:p-24 bg-gray-100 flex items-center z-10">
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

        {/* Mobile: Stack all cards */}
        {isMobile && (
          <div className="lg:hidden w-full px-6 py-8 space-y-6 pt-96">
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
        )}

        {/* Desktop: Carousel positioned from center-right */}
        {!isMobile && (
          <>
            <div className="hidden lg:block absolute left-[45%] top-1/2 -translate-y-1/2 overflow-visible z-20">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-10"
                style={{ transform: `translateX(-${currentIndex * 10}%)` }}
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
                className="bg-white rounded-full p-7 shadow-lg hover:bg-white transition"
              >
                <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-8 w-8 text-gray-800" />
              </button>
              <button 
                onClick={scrollNext} 
                className="bg-white rounded-full p-7 shadow-lg hover:bg-white transition"
              >
                <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-8 w-8 text-gray-800" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}