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
    <section className="bg-white flex justify-center items-center py-20">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0 items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-5xl md:text-5xl font-arpona text-[#23263a] font-bold mb-8">
              {displayTitle}
            </h2>
          </div>
          <Image
            src={displayImageUrl || "/placeholder.svg"}
            alt={displayImageAlt}
            className="w-[550px] h-[550px] object-cover rounded-none shadow-lg"
            width={550}
            height={550}
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <h3 className="text-2xl md:text-3xl w-2/3 font-arpona text-[#23263a] font-bold mb-8">
            {displaySubtitle}
          </h3>
          <p className="text-md font-inter text-[#23263a] font-bold mb-6 w-2/3">
            {displayDescription1}
          </p>
          <p className="text-md font-inter text-[#23263a] font-bold mb-10 w-2/3">
            {displayDescription2}
          </p>
          <button className="flex items-start border border-gray-400 text-[#23263a] px-6 py-4 font-inter font-bold text-xs flex gap-3 hover:bg-[#23263a] hover:text-white transition w-max">
            {displayButtonText} <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
} 