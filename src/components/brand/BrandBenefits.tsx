import React from "react";
import Image from "next/image";
// Star icon SVG (outline style)
function StarIcon({ className }: { className?: string }) {
  return (
    <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={20} height={20} className="w-7 h-7 opacity-50" />
  );
}

interface BrandBenefitsProps {
  data?: {
    heading?: string;
    description?: string;
    benefits?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
}

export default function BrandBenefits({ data }: BrandBenefitsProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Seamless upgrades and insider access";
  const benefits = data?.benefits || [
    { title: "Complimentary Upgrades*" },
    { title: "Daily à la carte breakfast for two" },
    { title: "Wellness or dining credits" },
    { title: "Early check-in/late check-out" },
    { title: "VIP welcome amenities" },
    { title: "Dedicated Luxufe concierge" },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 bg-white">
      {/* Script Heading */}
      <div className="mb-2">
        <span className="font-bellarina text-5xl text-[#23263a]">Benefits</span>
      </div>
      
      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-arpona max-w-2xl text-[#23263a] font-bold text-center mb-16 leading-tight">
        {heading}
      </h2>
    
      
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 mb-16 w-full max-w-5xl px-4">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center justify-start gap-3 text-[#6B7280] font-inter text-sm font-bold">
            <StarIcon className="w-7 h-7" />
            <span>{benefit.title || benefit.description}</span>
          </div>
        ))}
      </div>
      
      {/* Button */}
      <a
        href="#"
        className="mt-4 px-4 py-5 border-2 border-gray-300 font-inter font-bold text-[#23263a] text-xs flex items-center justify-center gap-2 tracking-widest hover:bg-gray-100 transition-all"
      >
        ENQUIRE FOR MORE INFO
        <span className="ml-2"><Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 md:w-7 md:h-7 opacity-50" /></span>
      </a>
    </section>
  );
} 