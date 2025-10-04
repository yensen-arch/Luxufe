import React from "react";
import Image from "next/image";

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
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
  return (
    <div className="w-full bg-blue-500 relative border border-gray-200 shadow-xl overflow-hidden">
      {/* Image will occupy the full top space */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 sm:h-66 lg:h-120 object-cover"
      />

      <div
        className="absolute inset-x-0 bottom-0"
        style={{ top: "calc(100% - 350px)", zIndex: 0, left: 0, right: 0 }}
      >
        <Image src="/custom_curve.svg" alt="Curve" width={200} height={700} className="w-full h-full object-cover" />
      </div>
      <div className="relative p-4 sm:p-6 lg:p-10 text-left" style={{ zIndex: 20, marginTop: "-200px" }}>
        <p className="text-xs text-gray-500 tracking-widest uppercase font-inter font-bold">
          {category}
        </p>
        <h3 className="text-lg sm:text-xl font-arpona font-bold text-gray-800 mt-2 mb-3 h-auto sm:h-16 w-full sm:w-2/4">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 w-full sm:w-3/4 leading-relaxed h-auto sm:h-24 font-inter font-bold mb-3 sm:mb-4">
          {description}
        </p>
        <a
          href={buttonLink}
          className="mt-3 sm:mt-4 text-xs inline-flex items-center gap-1 sm:gap-2 font-inter font-bold text-gray-800 hover:underline"
        >
          {buttonText}{" "}
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
