import React from "react";
import Image from "next/image";

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
        <div className="my-4 md:my-12">
          {/* Logo */}
          <Image src="https://res.cloudinary.com/dqh2tacov/image/upload/v1757920006/LUXUFE_-_Wordmark_Logo_6_dtic34.jpg" alt="Logo" width={180} height={180} />
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-arpona text-[#23263a] font-bold text-center w-full md:w-1/2">
          {displayDescription}
        </p>
      </div>
    </section>
  );
} 