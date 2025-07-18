import React from "react";

interface WaysToTravelVideoSectionProps {
  data?: {
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
}

export default function WaysToTravelVideoSection({ data }: WaysToTravelVideoSectionProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayImageUrl = data?.image?.asset?.url || "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80";
  const displayImageAlt = data?.image?.alt || "Video Preview";

  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-180 w-[80vw] z-20 flex flex-col items-center">
      <div className="relative w-full h-[720px] flex items-center justify-center bg-white shadow-xl overflow-hidden">
        <img
          src={displayImageUrl}
          alt={displayImageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
} 