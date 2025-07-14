import React from "react";

export default function WhyWeTravel() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-bold text-start mb-16">
          Why we travel
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12 justify-center">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Seven Seas Navigator"
              className="w-[420px] h-[340px] md:w-[620px] md:h-[500px] object-cover object-center border border-gray-200 shadow"
            />
          </div>
          {/* Right: Logo, Text, Button */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            {/* Large Heading */}
            <h3 className="text-2xl w-4/5 md:text-3xl font-arpona text-[#23263a] font-bold mb-4 text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </h3>
            {/* Paragraph */}
            <p className="font-inter w-4/5 text-[#23263a] text-base md:text-md font-bold mb-8 text-left max-w-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 