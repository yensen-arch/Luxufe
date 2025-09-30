import React from "react";
import ChatWidget from "@/components/landing/ChatWidget";
import Image from "next/image";

interface WaysToTravelFindJourneyProps {
  data?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export default function WaysToTravelFindJourney({ data }: WaysToTravelFindJourneyProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Find the journey for you";
  const displayDescription = data?.description || "Ask Alfred to help you find the journey of your dreams or try our trip wizard for the ultimate on-demand personalised experience.";
  const displayButtonText = data?.buttonText || "TRY THE TRIP WIZARD";

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-22 bg-white px-4 md:px-0">
      <h2 className="text-2xl md:text-5xl lg:text-6xl font-arpona font-bold text-[#23263a] mb-6 md:mb-8 text-center">
        {displayTitle}
      </h2>
      <p className="text-sm md:text-lg lg:text-md font-inter font-bold text-[#23263a] mb-8 md:mb-16 text-center max-w-2xl px-4 md:px-0">
        {displayDescription}
      </p>
      <div className="w-full max-w-5xl mb-8 md:mb-16 px-4 md:px-0">
        <ChatWidget />
      </div>
      <button className="mt-4 md:mt-8 border-2 border-gray-300 text-[#23263a] px-6 md:px-8 py-3 md:py-5 font-inter font-bold text-xs tracking-widest flex items-center gap-2 md:gap-3 hover:bg-[#23263a] hover:text-white transition w-max mx-auto">
        {displayButtonText} <span className="ml-1 md:ml-2">
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="arrow right" width={20} height={20} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        </span>
      </button>
    </section>
  );
} 