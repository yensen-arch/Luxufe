import React from "react";
import Link from "next/link";

interface NotFoundHeroProps {
  data?: {
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    subtitle: string;
    title: string;
    description: string;
    buttons: {
      homeButton: {
        text: string;
        link: string;
      };
      waysToTravelButton: {
        text: string;
        link: string;
      };
      contactButton: {
        text: string;
        link: string;
      };
    };
  };
}

export default function NotFoundHero({ data }: NotFoundHeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Error - 404";
  const displayTitle = data?.title || "You've taken a wrong turn, but we'll get you back on course";
  const displayDescription = data?.description || "Just like in travel, sometimes the path isn't quite what you expected. But not to worry, we're here to guide you back. Explore some of our curated journeys below or let us help you find exactly what you're after.";
  
  const homeButtonText = data?.buttons?.homeButton?.text || "RETURN TO HOME";
  const homeButtonLink = data?.buttons?.homeButton?.link || "/";
  const waysToTravelButtonText = data?.buttons?.waysToTravelButton?.text || "WAYS TO TRAVEL";
  const waysToTravelButtonLink = data?.buttons?.waysToTravelButton?.link || "/ways-to-travel";
  const contactButtonText = data?.buttons?.contactButton?.text || "SPEAK TO AN EXPERT";
  const contactButtonLink = data?.buttons?.contactButton?.link || "/contact-us";

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={displayBackgroundImage}
        alt="404 background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay for readability (optional, can be removed if not needed) */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-6xl text-white mb-4 block">{displaySubtitle}</span>
        <h1 className="text-white text-5xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          {displayTitle}
        </h1>
        <p className="text-white text-md md:text-md font-inter font-bold mb-10 max-w-xl mx-auto">
          {displayDescription}
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
          <Link href={homeButtonLink} className="border-2 border-gray-500 text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            {homeButtonText}
            <span className="ml-2">→</span>
          </Link>
          <Link href={waysToTravelButtonLink} className="border-2 border-gray-500 text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            {waysToTravelButtonText}
            <span className="ml-2">→</span>
          </Link>
          <a href={contactButtonLink} className="border-2 border-gray-500 text-white font-inter font-bold px-8 py-4 bg-transparent hover:bg-white hover:text-gray-900 transition text-xs flex items-center justify-center gap-2 tracking-widest min-w-[220px] text-center">
            {contactButtonText} <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 