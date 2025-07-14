import React from "react";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4l3.09 6.26L24 11.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 16.14l-5-4.87 6.91-1.01L14 4z" stroke="#6B7280" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

const features = [
  "Key feature goes right here",
  "Key feature goes right here",
  "Key feature goes right here",
  "Key feature goes right here",
  "Key feature goes right here",
  "Key feature goes right here",
];

export default function ProductOverview() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-white">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-medium text-center max-w-4xl mb-6">
        Blending into untouched red-rock country on over 900 acres of the Colorado Plateau, Amangiri and its satellite, Camp Sarika, reflect dual aspects of this ancient desert landscape.
      </h2>
      {/* Subheading */}
      <p className="font-inter text-lg md:text-md text-[#23263a] font-bold text-center max-w-2xl mb-10">
        A serene sanctuary, Amangiri’s 34 modernist suites, Aman Spa and mesa-embracing pool echo the tranquillity of the canyons. Camp Sarika, with its 10 tented pavilions, answers the region’s call to adventure. An unrivalled base for exhilarating expeditions and fireside connection, the camp has its own restaurant, lounge and spa suites.
      </p>
      {/* Divider */}
      <hr className="w-1/2 border-gray-300 my-16" />
      {/* At a glance */}
      <h3 className="text-2xl font-arpona text-[#23263a] font-medium text-center mb-12">Amangiri at a glance</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 w-full max-w-5xl mb-10">
        {features.slice(0, 3).map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-[#6B7280] font-inter text-md font-bold">
            <StarIcon className="w-7 h-7" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16 w-full max-w-5xl">
        {features.slice(3, 6).map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-[#6B7280] font-inter text-md font-bold">
            <StarIcon className="w-7 h-7" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 