import React from "react";

interface EffortlessLuxuryProps {
  data?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
}

export default function EffortlessLuxury({ data }: EffortlessLuxuryProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "The Art of Effortless Travel";
  const displayDescription = data?.description || "We believe that true luxury lies in the details, where every moment is seamlessly orchestrated and every journey is as effortless as it is extraordinary.";
  const displayButtonText = data?.buttonText || "MORE ABOUT US";
  const displayButtonLink = data?.buttonLink || "#";
  const displayImageUrl = data?.image?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
  const displayImageAlt = data?.image?.alt || "Santorini";



  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Content Row */}
        <div className="flex flex-col md:flex-row">
          {/* Left: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto ml-20">
            <h3 className="text-5xl md:text-5xl font-arpona font-bold text-[#23263a] mb-8 leading-tight">
              {displayTitle}
            </h3>
            <p className="font-inter text-[#23263a] md:text-md mb-8 w-6/8 font-bold">
              {displayDescription}
            </p>
            <a 
              href={displayButtonLink}
              className="border border-slate-400 px-8 py-4 font-inter font-semibold text-[#23263a] text-xs flex items-center gap-2 w-fit hover:bg-black hover:text-white transition-colors"
            >
              {displayButtonText}
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src={displayImageUrl}
              alt={displayImageAlt}
              className="w-[450px] h-[340px] md:h-[450px] mx-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 