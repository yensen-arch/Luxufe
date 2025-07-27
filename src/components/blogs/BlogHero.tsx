import React from "react";

interface BlogHeroProps {
  title?: string;
  tags?: string[];
  imageUrl?: string;
  data?: {
    image: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
  };
  onBack?: () => void;
}

export default function BlogHero({ title, tags, imageUrl, data, onBack }: BlogHeroProps) {
  // Use hardcoded content for title and tags, CMS data only for image
  const displayTitle = title || "Blog post title will go here";
  const displayTags = tags || ["TRAVEL ADVICE", "TRAVEL ADVICE"];
  const displayImageUrl = data?.image?.asset?.url || imageUrl || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";
  const displayImageAlt = data?.image?.alt || displayTitle;



  return (
    <section className="flex flex-col items-center w-full pt-20 md:pt-30 lg:pt-50 pb-8 md:pb-10 lg:pb-12 px-4 md:px-6 lg:px-8">
      {/* Back Link */}
      <button
        className="mb-4 md:mb-6 lg:mb-8 text-xs text-gray-400 font-bold font-inter flex items-center gap-2 hover:underline"
        onClick={onBack}
        aria-label="Back to all"
      >
        <span className="mr-2">&larr;</span> BACK TO ALL
      </button>
      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-arpona font-bold text-[#23263a] text-center mb-4 md:mb-5 lg:mb-6 px-4">
        {displayTitle}
      </h1>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 md:mb-10 lg:mb-12 justify-center">
        {displayTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 md:px-4 py-1 border border-gray-500 text-xs font-inter font-bold bg-white"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Hero Image */}
      <div className="w-full flex justify-center">
        <img
          src={displayImageUrl}
          alt={displayImageAlt}
          className="w-full md:w-[90vw] lg:w-[80vw] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
        />
      </div>
    </section>
  );
} 