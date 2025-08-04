import React from "react";
import { getImageUrl } from "@/lib/sanity/brandPage";

interface WhyWeTravelProps {
  data?: {
    heading?: string;
    subheading?: string;
    paragraph1?: string;
    paragraph2?: string;
    image?: any;
  };
  brandName?: string;
}

export default function WhyWeTravel({ data, brandName }: WhyWeTravelProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Why We Travel With";
  const subheading = data?.subheading || "A rare calm in a busy world. Aman is less a hotel brand and more a state of being.";
  const paragraph1 = data?.paragraph1 || "Whether in the mountains of Bhutan or on a private beach in Indonesia, every Aman property feels intimate, elemental, and deeply attuned to its surroundings. Their service is quiet and intuitive, seemingly always present but never overdone.";
  const paragraph2 = data?.paragraph2 || "We work closely with Aman to secure exclusive access, enhancements, and tailor-made experiences that allow our travelers to connect with the soul of each location.";
  const image = data?.image ? getImageUrl(data.image) : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-arpona text-[#23263a] font-bold text-start mb-16">
          {heading} <span className="font-bellarina text-7xl font-normal ml-4">{brandName || 'Aman'}</span>
        </h2>
        
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12 justify-center">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src={image}
              alt={`${brandName || 'Luxury'} Travel Experience`}
              className="w-[420px] h-[340px] md:w-[620px] md:h-[500px] object-cover object-center border border-gray-200 shadow"
            />
          </div>
          
          {/* Right: Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-start my-auto md:ml-10 space-y-6">
            {/* Subheading */}
            <h3 className="text-xl md:text-2xl font-arpona text-[#23263a] font-bold leading-tight">
              {subheading}
            </h3>
            
            {/* First Paragraph */}
            <p className="text-[#23263a] text-base md:text-lg leading-relaxed">
              {paragraph1}
            </p>
            
            {/* Second Paragraph */}
            <p className="text-[#23263a] text-base md:text-lg leading-relaxed">
              {paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 