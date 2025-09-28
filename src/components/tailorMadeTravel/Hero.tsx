import React from "react";

interface HeroProps {
  data?: {
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    subtitle: string;
    title: string;
    description: string;
  };
}

export default function Hero({ data }: HeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Your journey, your way";
  const displayTitle = data?.title || "Tailor-made Travel, Designed Around You";
  const displayDescription = data?.description || "Discover journeys that begin with your vision and end in unforgettable experiences";

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${displayBackgroundImage}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center w-full">
        <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bellarina px-2 sm:px-4" style={{fontFamily: 'Bellarina, serif'}}>{displaySubtitle}</p>
        <h1 className="w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-arpona font-light mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-4">
          {displayTitle}
        </h1>
        <p className="mt-2 max-w-xs sm:max-w-sm md:max-w-xl mx-auto font-inter text-xs sm:text-sm md:text-base lg:text-lg font-bold px-2 sm:px-4">
          {displayDescription}
        </p>
      </div>
    </div>
  );
} 