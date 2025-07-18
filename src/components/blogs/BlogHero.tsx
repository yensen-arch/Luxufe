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
    <section className="flex flex-col items-center w-full pt-50 pb-12">
      {/* Back Link */}
      <button
        className="mb-8 text-xs text-gray-400 font-bold font-inter flex items-center gap-2 hover:underline"
        onClick={onBack}
        aria-label="Back to all"
      >
        <span className="mr-2">&larr;</span> BACK TO ALL
      </button>
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-arpona font-bold text-[#23263a] text-center mb-6">
        {displayTitle}
      </h1>
      {/* Tags */}
      <div className="flex gap-2 mb-12">
        {displayTags.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1 border border-gray-500 text-xs font-inter font-bold bg-white"
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
          className="w-[80vw] h-[600px] object-cover"
        />
      </div>
    </section>
  );
} 