import React from "react";
import Image from "next/image";

interface WaysToTravelReflectsYouProps {
  data?: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    buttonText: string;
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
}

export default function WaysToTravelReflectsYou({ data }: WaysToTravelReflectsYouProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Travel That Reflects You";
  const displaySubtitle = data?.subtitle || "Experience-led travel begins with a feeling: the desire to rest, to connect, to taste, to explore.";
  const displayDescription1 = data?.description1 || "From meditative wellness retreats to adrenaline-filled adventures, these journeys are guided by what excites and restores you.";
  const displayDescription2 = data?.description2 || "Each itinerary is crafted to reflect your priorities, not just your destination. Whether you're chasing the perfect wave, sourcing rare wines, or reconnecting with ancient history, the experience becomes the journey.";
  const displayButtonText = data?.buttonText || "VIEW JOURNEYS";
  const displayImageUrl = data?.image?.asset?.url || "/placeholder.svg";
  const displayImageAlt = data?.image?.alt || "Cheers";

  return (
    <section className="bg-white flex justify-center items-center py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-center px-4 lg:px-0">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 items-center">
          <div className="flex flex-col items-start mb-6 lg:mb-8">
            <h2 className="text-3xl lg:text-5xl font-arpona text-[#23263a] font-bold">
              {displayTitle}
            </h2>
          </div>
          <Image
            src={displayImageUrl || "/placeholder.svg"}
            alt={displayImageAlt}
            className="w-full max-w-[650px] lg:w-[550px] h-[400px] lg:h-[550px] object-cover rounded-none shadow-lg"
            width={550}
            height={550}
          />
        </div>
        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <h3 className="text-xl lg:text-2xl xl:text-3xl w-full lg:w-2/3 font-arpona text-[#23263a] font-bold mb-6 lg:mb-8">
            {displaySubtitle}
          </h3>
          <p className="text-sm lg:text-md font-inter text-[#23263a] font-bold mb-4 lg:mb-6 w-full lg:w-2/3">
            {displayDescription1}
          </p>
          <p className="text-sm lg:text-md font-inter text-[#23263a] font-bold mb-8 lg:mb-10 w-full lg:w-2/3">
            {displayDescription2}
          </p>
          <button className="flex items-start border border-gray-400 text-[#23263a] px-4 lg:px-6 py-3 lg:py-4 font-inter font-bold text-xs flex gap-3 hover:bg-[#23263a] hover:text-white transition w-max">
            {displayButtonText} <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
} 