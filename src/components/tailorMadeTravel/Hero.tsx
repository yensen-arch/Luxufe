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
      <div className="relative z-10 p-4 flex flex-col items-center justify-center w-full">
        <p className="text-3xl md:text-4xl mb-6 font-bellarina" style={{fontFamily: 'Bellarina, serif'}}>{displaySubtitle}</p>
        <h1 className="text-4xl md:text-6xl font-arpona font-light mb-6 leading-tight">
          {displayTitle}
        </h1>
        <p className="mt-2 max-w-xl mx-auto font-inter text-lg font-bold">
          {displayDescription}
        </p>
      </div>
    </div>
  );
} 