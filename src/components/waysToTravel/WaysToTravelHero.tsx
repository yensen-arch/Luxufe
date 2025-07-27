import React from "react";

interface WaysToTravelHeroProps {
  data?: {
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    subtitle: string;
    title: string;
  };
}

export default function WaysToTravelHero({ data }: WaysToTravelHeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Ways to Travel with Luxufe";
  const displayTitle = data?.title || "Let an experience grab you and let the journey follow";

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${displayBackgroundImage}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bellarina italic mb-4 md:mb-6 mt-16 md:mt-20">{displaySubtitle}</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-arpona font-normal leading-tight px-2 md:px-0">
          {displayTitle}
        </h1>
      </div>
    </section>
  );
} 