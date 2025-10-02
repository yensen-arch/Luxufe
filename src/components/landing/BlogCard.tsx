import React from "react";

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
    <div className="w-full relative border border-gray-200 shadow-xl overflow-hidden">
      {/* Image will occupy the full top space */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 sm:h-66 lg:h-100 object-cover"
      />

      {/* This container will hold the white curve SVG and the text content */}
      {/* Position it absolutely at the bottom of the image, or covering a section of it */}
      {/* The 'top' value will control how much of the image the curve overlays */}
      <div className="absolute inset-x-0 bottom-0" style={{ top: 'calc(100% - 200px)', zIndex: 10 }}> 
          {/* SVG for the white curved shape */}
          <svg 
            viewBox="0 0 1000 250" // Adjust viewBox height to focus on the curve itself
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* This path starts at the bottom left (0, 250), 
              draws up to the curve's starting point (0, ~100-150), 
              then makes the curve, and finally draws down to the bottom right.
              The coordinates are relative to this SVG's viewBox.
            */}
            <path
              // M0 250: Start at bottom-left of SVG viewport
              // L0 100: Move up the left edge to the start of the curve
              // C...: Create the curve that goes up and then down
              // L1000 250: Draw down to the bottom-right of SVG viewport
              // Z: Close the path
              d="M0 250 L0 100 C 150 0, 350 0, 500 100 C 650 200, 850 200, 1000 100 L1000 250 Z"
              fill="black"
            />
          </svg>
      </div>


      {/* Text content needs to be positioned within the white curve area. */}
      {/* Its z-index must be higher than the SVG. */}
      <div className="relative p-4 sm:p-6 lg:p-10 text-left" style={{ zIndex: 20, marginTop: '-150px' }}> 
          {/* The negative margin-top pulls the text content up to sit on the white curve */}
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