import React from "react";
import Image from "next/image";

interface BlogCardProps {
  category?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  category,
  title,
  description,
  imageUrl,
  buttonText = "READ MORE",
  buttonLink = "#",
}) => {
  // Fallback/dummy values when data doesn't exist
  const fallbackCategory = category || "TRAVEL";
  const fallbackTitle = title || "Discover Amazing Destinations";
  const fallbackDescription = description || "Explore the world's most beautiful places and create unforgettable memories with our curated travel experiences.";
  const fallbackImageUrl = imageUrl || "/placeholder-blog.jpg";
  const fallbackButtonText = buttonText || "READ MORE";
  const fallbackButtonLink = buttonLink || "#";
  return (
    <div className="w-110 h-170 bg-blue-500 relative border border-gray-200 shadow-xl overflow-hidden">
      {/* Image will occupy the full top space */}
      <img
        src={fallbackImageUrl}
        alt={fallbackTitle}
        className="w-122 h-48 sm:h-66 lg:h-170 object-cover"
      />

      <div
        className="absolute inset-x-0 bottom-0"
        style={{ top: "calc(100% - 350px)", zIndex: 0, left: 0, right: 0 }}
      >
        <Image src="/custom_curve.svg" alt="Curve" width={200} height={700} className="w-full h-full object-cover" />
      </div>
      <div className="relative px-4 sm:px-6 lg:px-5 py-0 text-left" style={{ zIndex: 20, marginTop: "-280px" }}>
        <p className="text-xs text-gray-500 tracking-widest uppercase font-inter font-bold">
          {fallbackCategory}
        </p>
        <h3 className="text-2xl sm:text-md font-arpona font-bold text-gray-800 mt-4 mb-6 h-auto sm:h-16 w-full sm:w-2/4">
          {fallbackTitle}
        </h3>
        <p className="text-xs text-gray-500 w-2/3 leading-relaxed h-auto sm:h-24 font-inter font-bold mb-1 sm:mb-1">
          {fallbackDescription}
        </p>
        <a
          href={fallbackButtonLink}
          className="mt-3 sm:mt-4 text-xs inline-flex items-center gap-1 sm:gap-2 font-inter font-bold text-gray-800 hover:underline"
        >
          {fallbackButtonText}{" "}
          <img
            src="/luxufe-icon-button-arrow-dark.svg"
            alt="Arrow right"
            className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0"
          />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
