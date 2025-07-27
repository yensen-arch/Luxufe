import React from "react";

interface EffortlessLuxuryProps {
  data?: {
    title: string
    subtitle: string
    paragraph1: string
    paragraph2: string
    buttonText: string
    image: {
      url: string
      alt: string
    }
  }
}

export default function EffortlessLuxury({ data }: EffortlessLuxuryProps) {
  // Fallback data
  const fallbackData = {
    title: 'The Art of Effortless Luxury Travel',
    subtitle: 'Seamless luxury travel,\ntailored to you - effortless,\npersonal, unforgettable',
    paragraph1: 'We believe that true luxury is felt, not just seen. It is the ease of knowing every detail has been anticipated, the quiet confidence of seamless transitions, and the joy of experiencing something truly personal. Travel should never feel complicated or transactional, but rather it should unfold naturally.',
    paragraph2: 'From the first touchpoint to the final farewell, our ethos ensures that luxury is not just what you experience, but how effortlessly you experience it',
    buttonText: 'EXPLORE LUXURY',
    image: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury travel experience'
    }
  }

  const luxuryData = data || fallbackData

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-8xl font-arpona font-bold text-[#23263a] mb-8 md:mb-12 lg:mb-16">
          {luxuryData.title}
        </h2>
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-12">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0 order-1 lg:order-1">
            <img
              src={luxuryData.image.url}
              alt={luxuryData.image.alt}
              className="w-full h-[250px] md:h-[300px] lg:h-[340px] xl:h-[500px] object-cover"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center my-auto lg:ml-10 order-2 lg:order-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-arpona font-bold text-[#23263a] mb-4 md:mb-6 lg:mb-8">
              {luxuryData.subtitle}
            </h3>
            <p className="font-inter text-[#23263a] text-sm md:text-base lg:text-md mb-3 md:mb-4 w-full lg:w-6/8 font-bold">
              {luxuryData.paragraph1}
            </p>
            <p className="font-inter text-[#23263a] text-sm md:text-base lg:text-md mb-6 md:mb-7 lg:mb-8 w-full lg:w-6/8 font-bold">
              {luxuryData.paragraph2}
            </p>
            <button className="border text-xs border-slate-300 px-4 md:px-6 lg:px-8 py-3 md:py-4 font-inter font-semibold text-[#23263a] flex items-center gap-2 w-fit hover:bg-black hover:text-white transition-colors">
              {luxuryData.buttonText}
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
} 