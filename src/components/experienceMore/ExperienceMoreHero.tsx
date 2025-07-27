import React from "react";

interface ExperienceMoreHeroProps {
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    title: string
    description: string
  }
}

export default function ExperienceMoreHero({ data }: ExperienceMoreHeroProps) {
  // Fallback data
  const fallbackData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80',
      alt: 'Luxury travel experience background'
    },
    title: 'Experience More with\nExclusive Travel Offers',
    description: 'Indulge with bespoke upgrades, VIP perks, and limited-time promotions\ndesigned to elevate your next journey.'
  }

  const heroData = data || fallbackData

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      <div className="relative z-10 p-4 md:p-6 lg:p-8 w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-arpona font-bold leading-tight mb-4 md:mb-6 lg:mb-8 px-4">
          {heroData.title}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter text-sm md:text-base lg:text-lg xl:text-xl font-normal px-4">
          {heroData.description}
        </p>
      </div>
    </section>
  );
} 