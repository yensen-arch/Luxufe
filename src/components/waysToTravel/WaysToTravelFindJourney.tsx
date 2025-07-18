import React from "react";
import ChatWidget from "@/components/landing/ChatWidget";

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
    <section className="w-full flex flex-col items-center justify-center py-22 bg-white">
      <h2 className="text-5xl md:text-6xl font-arpona font-bold text-[#23263a] mb-8 text-center">
        {displayTitle}
      </h2>
      <p className="text-lg md:text-md font-inter font-bold text-[#23263a] mb-16 text-center max-w-2xl">
        {displayDescription}
      </p>
      <div className="w-full max-w-4xl mb-16">
        <ChatWidget />
      </div>
      <button className="mt-8 border-2 border-gray-300 text-[#23263a] px-8 py-5 font-inter font-bold text-xs tracking-widest flex items-center gap-3 hover:bg-[#23263a] hover:text-white transition w-max mx-auto">
        {displayButtonText} <span className="ml-2">&rarr;</span>
      </button>
    </section>
  );
} 