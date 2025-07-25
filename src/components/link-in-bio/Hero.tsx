import React from "react";
import QuickLinks from "./QuickLinks";

interface HeroProps {
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

export default function Hero({ data }: HeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://picsum.photos/seed/picsum/1920/1080";
  const displaySubtitle = data?.subtitle || "Quick Links";
  const displayTitle = data?.title || "Where would you like to go?";

  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-center items-center mb-250">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-auto">
        <img
          src={displayBackgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Centered Text */}
      <div className="relative z-10 flex top-5/6 flex-col items-center justify-center flex-1 pt-20">
        <span className="font-bellarina text-5xl text-white mb-2">{displaySubtitle}</span>
        <h1 className="text-white text-5xl font-bold md:text-6xl font-arpona text-center mb-8">{displayTitle}</h1>
        {/* Connected Section: QuickLinks */}
        <QuickLinks />
      </div>
    </section>
  );
} 