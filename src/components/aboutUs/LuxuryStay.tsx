import React from "react";

interface LuxuryStayProps {
  data?: {
    title: string
    description: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function LuxuryStay({ data }: LuxuryStayProps) {
  // Fallback data if no Sanity data is provided
  const luxuryData = data || {
    title: 'Luxury is not just about where you stay. It is about how you feel at every step of the way.',
    description: 'We envision a future where travel is defined not by excess but by effortlessness and personalization. By blending cutting-edge technology with a concierge-level human touch, Luxufe is shaping a new standard of luxury. Every experience should feel instinctive, immersive, and entirely your own.',
    image: {
      url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      alt: 'Luxury Experience'
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl h-120 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl w-6/7 font-arpona text-[#23263a] font-bold mb-8 leading-snug">
            {luxuryData.title}
          </h2>
          <p className="text-base md:text-md w-5/7 font-inter text-[#23263a] font-bold leading-relaxed">
            {luxuryData.description}
          </p>
        </div>
        {/* Right: Image */}
        <div className="w-1/2 h-full flex justify-center">
          <img
            src={luxuryData.image.asset.url}
            alt={luxuryData.image.alt}
            className="w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
} 