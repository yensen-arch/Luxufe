import React from "react";

interface WhatTailorMadeMeansProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
}

export default function WhatTailorMadeMeans({ data }: WhatTailorMadeMeansProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Crafted with care, curated with precision, and designed entirely for you";
  const displaySubtitle = data?.subtitle || "Tailor-made";
  const displayDescription = data?.description || "Tailor-made travel is about starting with a blank page, then filling it with the places, experiences, and details that matter most to you. Whether it's travelling with family, celebrating a milestone, or simply escaping the everyday, we begin with what you value and build from there.\n\nOur approach combines world-class insight with highly personal service. You'll have one point of contact from start to finish, access to our most trusted partners, and the peace of mind that every step has been thoughtfully considered and perfectly timed.";
  const displayImageUrl = data?.image?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
  const displayImageAlt = data?.image?.alt || "Yacht from above";

  // Split description into paragraphs
  const paragraphs = displayDescription.split('\n\n');

  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-arpona text-[#23263a] mb-6 sm:mb-8 md:mb-12 lg:mb-16 flex flex-wrap items-end">
          <span className="mr-1 sm:mr-2 md:mr-3 font-bold text-4xl sm:text-5xl md:text-6xl">What</span>
          <span className="font-bellarina text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl" style={{fontFamily: 'Bellarina, serif'}}>{displaySubtitle}</span>
          <span className="ml-1 sm:ml-2 md:ml-3 font-bold text-4xl sm:text-5xl md:text-6xl">means at Luxufe</span>
        </h2>
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center order-1 lg:order-1">
            <img
              src={displayImageUrl}
              alt={displayImageAlt}
              className="w-full lg:w-[650px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center my-auto lg:ml-10 order-2 lg:order-2">
            <h3 className="w-full sm:w-4/5 lg:w-3/4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-arpona font-bold text-[#23263a] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              {displayTitle}
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="font-inter text-[#23263a] text-xs sm:text-sm md:text-base lg:text-md font-bold mb-2 sm:mb-3 md:mb-4 w-full lg:w-5/6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 