import React from "react";

interface HeroEleveProps {
  onBecomeMember?: () => void
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    subtitle: string
    title: string
    buttonText: string
  }
}

export default function HeroEleve({ onBecomeMember, data }: HeroEleveProps) {
  // Fallback data
  const fallbackData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80',
      alt: 'Luxury travel background'
    },
    subtitle: 'Elevé by Luxufe',
    title: 'Travel should feel as rewarding as the journeys themselves',
    buttonText: 'BECOME A MEMBER →'
  }

  const heroData = data || fallbackData

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
      <div className="relative z-10 p-4 md:p-6 lg:p-8 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 md:mb-3 lg:mb-4 font-bellarina">{heroData.subtitle}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold mb-4 md:mb-6 lg:mb-8 leading-tight">
          {heroData.title}
        </h1>
        <button
          className="mt-4 md:mt-5 lg:mt-6 px-6 md:px-8 lg:px-10 py-3 md:py-4 border border-slate-300 text-white font-inter font-bold bg-transparent hover:bg-white hover:text-black transition-all text-xs"
          onClick={onBecomeMember || (() => {})}
        >
          {heroData.buttonText}
        </button>
      </div>
    </section>
  );
} 