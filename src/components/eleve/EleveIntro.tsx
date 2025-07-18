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
    <section className="bg-white py-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-5xl mr-3 md:text-8xl font-bellarina text-[#23263a] ">{introData.brandName}</span>
        <span className="text-3xl md:text-5xl font-arpona font-bold text-[#23263a] align-middle leading-tight">
          {introData.description}
        </span>
      </div>
    </section>
  );
} 