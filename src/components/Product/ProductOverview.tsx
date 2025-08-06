import React from "react";
import { Hotel, Brand } from "@/lib/database";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4l3.09 6.26L24 11.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 16.14l-5-4.87 6.91-1.01L14 4z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

interface ProductOverviewProps {
  hotel?: Hotel;
  brand?: Brand | null;
}

const defaultFeatures = [
  "Luxury accommodations",
  "World-class amenities",
  "Exceptional service",
  "Prime location",
  "Fine dining",
  "Spa and wellness"
];

export default function ProductOverview({ hotel, brand }: ProductOverviewProps) {
  // Use default features since the brand table doesn't have key_features
  const features = defaultFeatures;

  // Get hotel description (limited to 7 lines)
  const hotelDescription = hotel?.description || "Experience luxury and tranquility in this exceptional destination.";
  
  // Get brand description - use brand name since description doesn't exist
  const brandDescription = brand?.brand_name ? `${brand.brand_name} - A serene sanctuary offering unparalleled luxury and exceptional service.` : "A serene sanctuary offering unparalleled luxury and exceptional service.";

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-white">
      {/* Main Heading - Hotel description limited to 7 lines */}
      <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-medium text-center max-w-4xl mb-6 line-clamp-7">
        {hotelDescription}
      </h2>
      {/* Subheading - Brand description */}
      <p className="font-inter text-lg md:text-md text-[#23263a] font-bold text-center max-w-2xl mb-10">
        {brandDescription}
      </p>
      {/* Divider */}
      <hr className="w-1/2 border-gray-300 my-16" />
      {/* At a glance */}
      <h3 className="text-2xl font-arpona text-[#23263a] font-medium text-center mb-12">
        {hotel?.hotel_name || "Hotel"} at a glance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 w-full max-w-5xl mb-10">
        {features.slice(0, 3).map((feature: string, i: number) => (
          <div key={i} className="flex items-center gap-3 text-[#6B7280] font-inter text-md font-bold">
            <StarIcon className="w-7 h-7" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 w-full max-w-5xl">
        {features.slice(3, 6).map((feature: string, i: number) => (
          <div key={i} className="flex items-center gap-3 text-[#6B7280] font-inter text-md font-bold">
            <StarIcon className="w-7 h-7" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 