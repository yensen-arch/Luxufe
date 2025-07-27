import { ArrowRight } from "lucide-react";
import React from "react";

interface TravelInsuranceInfoProps {
  data?: {
    title: string;
    subtitle: string;
    description: string;
    additionalInfo: string;
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    buttonText: string;
  };
}

export default function TravelInsuranceInfo({ data }: TravelInsuranceInfoProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Travel with Confidence with insurance";
  const displaySubtitle = data?.subtitle || "";
  const displayDescription = data?.description || "Luxufe offers comprehensive travel insurance through our trusted partner, Travelex, ensuring that every journey is protected against the unexpected.";
  const displayAdditionalInfo = data?.additionalInfo || "True luxury means traveling without worry. From last-minute itinerary changes to unforeseen medical emergencies, having the right insurance ensures that your journey remains seamless, no matter what happens. Luxufe partners with Travelex to offer tailored coverage, including trip cancellations, medical assistance, lost luggage protection, and exclusive emergency support.\n\nWhen you book with Luxufe, remember to add comprehensive travel insurance and enjoy the world's finest travel experiences with complete peace of mind.";
  const displayImageUrl = data?.image?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
  const displayImageAlt = data?.image?.alt || "Woman with hat by water";
  const displayButtonText = data?.buttonText || "Explore Luxury";

  // Split additional info into paragraphs
  const paragraphs = displayAdditionalInfo.split('\n\n');

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-arpona font-bold text-[#23263a] text-left mb-8 md:mb-15 mx-2 md:mx-5">
          {displayTitle}
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-10">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src={displayImageUrl}
              alt={displayImageAlt}
              className="w-full max-w-lg h-[280px] md:h-[340px] lg:h-[550px] object-cover"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <p className="w-full md:w-5/8 font-arpona text-[#23263a] text-lg md:text-2xl font-bold mb-6 md:mb-8">
              {displayDescription}
            </p>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="w-full md:w-5/8 font-inter text-[#23263a] font-bold text-sm md:text-sm mb-4 md:mb-6">
                {paragraph}
              </p>
            ))}
            <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-xs w-full md:w-[200px] mt-6 md:mt-10 font-inter text-gray-700 font-bold px-3 py-3 uppercase hover:bg-gray-100">
              {displayButtonText} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 