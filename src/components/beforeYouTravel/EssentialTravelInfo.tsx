import React from "react";

interface EssentialTravelInfoProps {
  data?: {
    title: string
    image: {
      url: string
      alt: string
    }
    subtitle: string
    paragraph1: string
    paragraph2: string
  }
}

export default function EssentialTravelInfo({ data }: EssentialTravelInfoProps) {
  // Fallback data if no Sanity data is provided
  const infoData = data || {
    title: 'Essential Travel Information\nfor Luxury Voyagers',
    image: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      alt: 'Santorini'
    },
    subtitle: 'Every journey begins long\nbefore takeoff.',
    paragraph1: 'At Luxufe, we ensure that every detail is meticulously arranged, from visa requirements to cultural etiquette, allowing you to travel with confidence and ease.',
    paragraph2: 'With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.'
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-8xl font-arpona font-bold text-[#23263a] mb-8 md:mb-12 lg:mb-16">
          {infoData.title}
        </h2>
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
          {/* Left: Image */}
          <div className="w-full lg:md:w-1/2 flex-shrink-0 order-1 lg:order-1">
            <img
              src={infoData?.image?.url}
              alt={infoData?.image?.alt}
              className="w-full h-[250px] md:h-[300px] lg:h-[340px] xl:h-[420px] object-cover"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full lg:md:w-1/2 flex flex-col justify-center my-auto lg:ml-10 order-2 lg:order-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-arpona font-bold text-[#23263a] mb-4 md:mb-5 lg:mb-6">
              {infoData.subtitle}
            </h3>
            <p className="font-inter text-[#23263a] font-bold text-sm md:text-base lg:md:text-md mb-3 md:mb-4 w-full lg:w-5/7">
              {infoData.paragraph1}
            </p>
            <p className="font-inter text-[#23263a] font-bold text-sm md:text-base lg:md:text-md w-full lg:w-5/7">
              {infoData.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 