"use client"
import React, { useCallback, useState } from "react";
import Image from "next/image";
const defaultAssistItems = [
  {
    title: "Local & International flights",
    description: "Lorem ipsum dolor sit amet, consetetur",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Travel insurance",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hotel reservations",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
];

const fadeIn = {
  animation: 'fadeIn 0.3s ease-in-out forwards',
  opacity: 0
};
const fadeReset = {
  opacity: 1
};

interface AssistWithMoreProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      image: {
        asset: {
          url: string;
          metadata: {
            dimensions: {
              width: number;
              height: number;
            };
          };
        };
        alt: string | null;
      };
    }>;
  };
}

export default function AssistWithMore({ data }: AssistWithMoreProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "We can assist with more";
  const displaySubtitle = data?.subtitle || "There for you";
  const displayDescription = data?.description || "From flights to hotel reservations, we'll handle it all so you can relax.";
  
  // Use CMS items if available, otherwise use default items
  const assistItems = data?.items?.map((item: any) => ({
    title: item.title,
    description: item.description,
    imageUrl: item.image?.asset?.url,
  })) || defaultAssistItems;

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const scrollPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? assistItems.length - 1 : prev - 1));
  }, [isAnimating, assistItems.length]);

  const scrollNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === assistItems.length - 1 ? 0 : prev + 1));
  }, [isAnimating, assistItems.length]);

  // Simple fade animation style
  const getAnimStyle = () => {
    return isAnimating ? fadeIn : fadeReset;
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
      <section className="w-full my-12 md:my-24 relative">
        <div className="mx-auto gap-0 items-center px-4 flex flex-col md:grid md:grid-cols-12">
          {/* Left Side */}
          <div className="md:col-span-9 flex flex-col items-start justify-center h-auto md:h-[100vh] py-8 md:py-12 bg-[#f8f8fa] w-full md:w-auto">
            <div className="mb-4 md:ml-20 px-4 md:px-0">
              <span className="font-bellarina text-3xl md:text-6xl text-[#23263a] block mb-2">{displaySubtitle}</span>
              <h2 className="text-3xl md:text-6xl w-full md:w-3/4 font-arpona font-bold text-[#23263a] mb-4 leading-tight">{displayTitle}</h2>
              <p className="font-inter text-[#23263a] text-sm md:text-base mb-6 md:mb-8 max-w-xs font-bold">
                {displayDescription}
              </p>
              <div className="flex gap-4 md:gap-6 mt-4">
                <button
                  onClick={scrollPrev}
                  className="bg-white rounded-full p-3 md:p-6 shadow-md border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center"
                  disabled={isAnimating}
                >
                  <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" width={24} height={24} className="h-4 w-4 md:h-6 md:w-6 text-gray-800" />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-white rounded-full p-3 md:p-6 shadow-md border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center"
                  disabled={isAnimating}
                >
                  <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="h-4 w-4 md:h-6 md:w-6 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
          {/* Right Side - Carousel */}
          <div className="flex md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto mt-8 md:mt-0">
            <div className="flex gap-4 md:gap-8 w-full justify-center">
              {assistItems.slice(currentIndex, currentIndex + 2).map((item, idx) => (
                <div
                  key={item.title + currentIndex}
                  className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-white rounded-none overflow-hidden shadow-md flex flex-col justify-end"
                  style={getAnimStyle()}
                  onAnimationEnd={handleAnimationEnd}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div className="relative z-20 p-4 md:p-6 text-center">
                    <h3 className="text-white text-lg md:text-2xl font-arpona mb-2 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-white text-xs font-inter font-bold drop-shadow-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
