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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] mb-16 flex flex-wrap items-end">
          <span className="mr-3 font-bold">What</span>
          <span className="font-bellarina text-4xl md:text-6xl" style={{fontFamily: 'Bellarina, serif'}}>{displaySubtitle}</span>
          <span className="ml-3 font-bold">means at Luxufe</span>
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src={displayImageUrl}
              alt={displayImageAlt}
              className="w-full w-[540px] h-[500px] object-cover rounded"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            <h3 className="text-2xl md:text-3xl font-arpona font-bold text-[#23263a] mb-6">
              {displayTitle}
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="font-inter text-[#23263a] text-md font-bold mb-4 w-5/6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 