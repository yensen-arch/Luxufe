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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl w-8xl font-arpona font-bold text-[#23263a] mb-16">
          {luxuryData.title}
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0">
            <img
              src={luxuryData.image.asset.url}
              alt={luxuryData.image.alt}
              className="w-full h-[340px] md:h-[500px] object-cover "
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto ml-10">
            <h3 className="text-4xl md:text-3xl font-arpona font-bold text-[#23263a] mb-8">
              {luxuryData.subtitle}
            </h3>
            <p className="font-inter text-[#23263a] md:text-md mb-4 w-6/8 font-bold">
              {luxuryData.paragraph1}
            </p>
            <p className="font-inter text-[#23263a] md:text-md mb-8 w-6/8 font-bold">
              {luxuryData.paragraph2}
            </p>
            <button className="border text-xs border-slate-300 px-8 py-4 font-inter font-semibold text-[#23263a] flex items-center gap-2 w-fit hover:bg-black hover:text-white transition-colors">
              {luxuryData.buttonText}
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
} 