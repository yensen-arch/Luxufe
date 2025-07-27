import React from "react";

interface WaysToTravelIntroProps {
  data?: {
    description: string;
  };
}

export default function WaysToTravelIntro({ data }: WaysToTravelIntroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayDescription = data?.description || "Whether you're drawn to the wild, the serene, the cultural, or the indulgent, Luxufe curates experiences around what matters most to you. Start with what you love, and we'll build the journey around it.";

  return (
    <section className="bg-white flex flex-col items-center w-full pt-12 md:pt-20">
      {/* Top: Logo and Text */}
      <div className="flex flex-col items-center mb-16 md:mb-24 px-4 md:px-0">
        <div className="mb-4 md:mb-6">
          {/* Placeholder for logo - kept hardcoded as requested */}
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-xl md:text-3xl font-bold">Logo</span>
          </div>
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-arpona text-[#23263a] font-bold text-center w-full md:w-1/2">
          {displayDescription}
        </p>
      </div>
    </section>
  );
} 