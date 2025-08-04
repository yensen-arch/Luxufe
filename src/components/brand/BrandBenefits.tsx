import React from "react";

// Star icon SVG (outline style)
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4l3.09 6.26L24 11.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 16.14l-5-4.87 6.91-1.01L14 4z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
    </svg>
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
  const description = data?.description || "";
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
          <div key={i} className="flex items-center justify-center gap-3 text-[#6B7280] font-inter text-sm font-bold">
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
        <span className="ml-2">→</span>
      </a>
    </section>
  );
} 