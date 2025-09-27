import React from "react";

interface EleveIntroProps {
  data?: {
    brandName: string
    description: string
  }
}

export default function EleveIntro({ data }: EleveIntroProps) {
  // Fallback data
  const fallbackData = {
    brandName: 'Elevé',
    description: 'by Luxufe is designed for discerning travelers who seek more than just points.'
  }

  const introData = data || fallbackData

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center px-4 md:px-6 lg:px-8">
        <span className="text-3xl md:text-5xl lg:text-6xl xl:text-9xl font-bellarina text-[#23263a] mr-2 md:mr-3">{introData.brandName}</span>
        <span className="text-lg md:text-2xl lg:text-4xl xl:text-6xl font-arpona font-bold text-[#23263a] align-middle leading-tight">
          {introData.description}
        </span>
      </div>
    </section>
  );
} 