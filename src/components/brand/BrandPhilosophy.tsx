import React from "react";
import { getImageUrl } from "@/lib/sanity/brandPage";

interface BrandPhilosophyProps {
  data?: {
    heading?: string;
    description?: string;
    image?: any;
  };
}

export default function BrandPhilosophy({ data }: BrandPhilosophyProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Luxufe proudly partners with luxury brands to offer clients access to some of the world's most discreet and inspiring luxury retreats.";
  const description = data?.description || "With a philosophy grounded in space, peace, and personalized care, our partners create rare sanctuaries where time slows and every detail is instinctive.";
  const image = data?.image ? getImageUrl(data.image) : null;

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 bg-white">
      {/* Brand Image/Logo */}
      <div className="mb-10 flex flex-col items-center">
        {image ? (
          <img 
            src={image} 
            alt="Brand Philosophy" 
            className="max-w-xs h-auto"
          />
        ) : (
          <div className="text-4xl font-bold text-[#23263a]">LOGO</div>
        )}
      </div>
      
      {/* Headline */}
      <h2 className="text-3xl md:text-3xl font-arpona text-[#23263a] font-bold text-center w-full max-w-4xl mb-6 px-4">
        {heading}
      </h2>
      
      {/* Subheadline */}
      <p className="font-inter text-lg md:text-md text-[#23263a] font-bold text-center max-w-xl mb-10 px-4">
        {description}
      </p>
      
      {/* Button */}
      <a
        href="#"
        className="mt-4 px-4 py-4 border-2 border-gray-300 font-inter font-bold text-[#23263a] text-xs flex items-center justify-center gap-2 tracking-widest hover:bg-gray-100 transition-all"
        style={{ minWidth: 220 }}
      >
        EXPLORE HOTELS
        <span className="ml-2">→</span>
      </a>
    </section>
  );
} 