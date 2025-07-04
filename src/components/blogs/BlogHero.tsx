import React from "react";

interface BlogHeroProps {
  title: string;
  tags: string[];
  imageUrl: string;
  onBack?: () => void;
}

export default function BlogHero({ title, tags, imageUrl, onBack }: BlogHeroProps) {
  return (
    <section className="flex flex-col items-center w-full pt-24 pb-12">
      {/* Back Link */}
      <button
        className="mb-8 text-xs text-gray-400 font-inter flex items-center gap-2 hover:underline"
        onClick={onBack}
        aria-label="Back to all"
      >
        <span className="mr-2">&larr;</span> BACK TO ALL
      </button>
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-arpona font-bold text-[#23263a] text-center mb-6">
        {title}
      </h1>
      {/* Tags */}
      <div className="flex gap-2 mb-8">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1 border border-gray-300 rounded-full text-xs font-inter text-[#23263a] bg-white"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Hero Image */}
      <div className="w-full flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-[80vw] max-w-5xl h-[450px] object-cover rounded"
        />
      </div>
    </section>
  );
} 