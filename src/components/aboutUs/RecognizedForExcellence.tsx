import React from "react";

interface RecognizedForExcellenceProps {
  data?: {
    title: string
    logos: Array<{
      image: {
        url: string
        altText?: string
      }
    }>
  }
}

export default function RecognizedForExcellence({ data }: RecognizedForExcellenceProps) {
  // Fallback data if no Sanity data is provided
  const excellenceData = data || {
    title: 'Recognized for Excellence',
    logos: Array(8).fill(null).map((_, i) => ({
      image: {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        altText: `Logo ${i + 1}`
      }
    }))
  }

  return (
    <section className="bg-[#f7f8fa] py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-arpona font-bold text-[#23263a] text-center mb-16">{excellenceData.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {excellenceData.logos.slice(0, 5).map((logo, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-gray-200 flex items-center justify-center"
            >
              <img src={logo.image.url} alt={logo.image.altText || `Logo ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-7">
          {excellenceData.logos.slice(5, 8).map((logo, i) => (
            <div
              key={i + 5}
              className="w-40 h-40 bg-gray-200 flex items-center justify-center"
            >
              <img src={logo.image.url} alt={logo.image.altText || `Logo ${i + 6}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 