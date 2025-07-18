import React from "react";

interface WaysToTravelTailorMadeProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
}

export default function WaysToTravelTailorMade({ data }: WaysToTravelTailorMadeProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Tailor-made Journeys, Crafted for You";
  const displaySubtitle = data?.subtitle || "Bespoke itineraries that reflect who you are, and how you love to travel";
  const displayDescription = data?.description || "No two travellers are the same, and no Luxufe journey ever should be. Our tailor-made itineraries are designed around your vision, blending flexibility with thoughtful detail. Whether you're planning a multi-country escape or a quiet retreat, we create seamless experiences that feel entirely your own.";
  const displayButtonText = data?.buttonText || "FIND OUT MORE";
  const displayImageUrl = data?.image?.asset?.url || "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80";
  const displayImageAlt = data?.image?.alt || "Peacock";

  return (
    <section className="w-full bg-[#23263a] flex flex-col md:flex-row items-stretch h-[120vh] mb-200">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center items-center px-10 md:px-24 py-20 md:w-1/2 w-full text-white">
        <h2 className="text-5xl md:text-5xl font-arpona  font-bold mb-8 leading-tight">
          {displayTitle}
        </h2>
        <h3 className="text-2xl w-2/3 ml-auto md:text-xl font-inter font-bold mb-8 text-gray-200">
          {displaySubtitle}
        </h3>
        <p className="text-md md:text-md font-inter font-bold mb-12 w-2/3 ml-auto text-gray-200">
          <span className="font-bold">{displayDescription}</span>
        </p>
        <button className="mt-2 border border-gray-500 text-white px-6 py-4 font-inter font-bold text-xs tracking-widest flex  gap-3 hover:bg-white hover:text-[#23263a] transition w-max">
          {displayButtonText} <span className="ml-2">&rarr;</span>
        </button>
      </div>
      {/* Right: Image */}
      <div className="md:w-1/2 w-full flex items-center justify-end bg-[#23263a]">
        <img
          src={displayImageUrl}
          alt={displayImageAlt}
          className="w-full h-full object-cover max-w-[650px] max-h-[650px]"
        />
      </div>
    </section>
  );
} 