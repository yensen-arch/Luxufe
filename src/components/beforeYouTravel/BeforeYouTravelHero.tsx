import React from "react";

interface BeforeYouTravelHeroProps {
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    subtitle: string
    title: string
    description: string
  }
}

export default function BeforeYouTravelHero({ data }: BeforeYouTravelHeroProps) {
  // Fallback data if no Sanity data is provided
  const heroData = data || {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80',
      alt: 'Before You Travel Hero Background'
    },
    subtitle: 'Before you travel',
    title: 'Luxury Travel Starts Before You Depart',
    description: 'Prepare for your luxury journey with expert insights, from visas to packing, ensuring a seamless and unforgettable experience.'
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 md:p-6 lg:p-8 w-6xl mx-auto flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 md:mb-3 lg:mb-4 font-bellarina">{heroData.subtitle}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
          {heroData.title}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter font-bold text-sm md:text-base text-white/90 px-4">
          {heroData.description}
        </p>
      </div>
    </section>
  );
} 