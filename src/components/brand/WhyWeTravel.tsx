import React from "react";
import { getImageUrl } from "@/lib/sanity/brandPage";

interface WhyWeTravelProps {
  data?: {
    heading?: string;
    description?: string;
    reasons?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
}

export default function WhyWeTravel({ data }: WhyWeTravelProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Why we travel";
  const description = data?.description || "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum";
  const reasons = data?.reasons || [];

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-bold text-start mb-16">
          {heading}
        </h2>
        
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12 justify-center">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Travel"
              className="w-[420px] h-[340px] md:w-[620px] md:h-[500px] object-cover object-center border border-gray-200 shadow"
            />
          </div>
          
          {/* Right: Content */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            {/* Description */}
            <p className="font-inter w-4/5 text-[#23263a] text-base md:text-md font-bold mb-8 text-left max-w-xl">
              {description}
            </p>
            
            {/* Reasons */}
            {reasons.length > 0 && (
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {reason.icon && (
                      <div className="flex-shrink-0 w-8 h-8 bg-[#a8d1cf] rounded-full flex items-center justify-center">
                        <span className="text-[#23263a] text-sm font-bold">{reason.icon}</span>
                      </div>
                    )}
                    <div>
                      {reason.title && (
                        <h4 className="text-lg font-arpona text-[#23263a] font-semibold mb-2">
                          {reason.title}
                        </h4>
                      )}
                      {reason.description && (
                        <p className="text-[#23263a] text-sm opacity-80">
                          {reason.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 