import React from "react";
import BrandSidebar from "@/components/brand/BrandSidebar";
import BrandGrid from "@/components/brand/BrandGrid";

interface BrandMainProps {
  data?: {
    heading?: string;
    description?: string;
  };
  brandName?: string;
}

const BrandMain = ({ data, brandName }: BrandMainProps) => {
  // Fallback content if no data is provided
  const heading = data?.heading || `${brandName || 'Luxury'} Hotels, Lodges & more`;
  const description = data?.description || "Handpicked for their setting, silence, and soul";

  return (
    <div className="flex flex-col md:flex-col">
      {/* Heading and Description Section */}
      <div className="w-full bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] font-bold mb-6">
            {heading}
          </h2>
          <p className="text-lg md:text-xl text-[#23263a] font-inter font-bold">
            {description}
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full">
        <BrandSidebar />
        <BrandGrid />
      </div>
    </div>
  );
};

export default BrandMain; 