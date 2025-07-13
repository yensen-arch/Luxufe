import React from "react";

export default function PartnerHighlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl w-8xl font-arpona font-bold text-[#23263a] mb-16">
          Essential Travel Information<br />for Luxury Voyagers
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Santorini"
              className="w-full h-[340px] md:h-[420px] object-cover "
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto ml-10">
            <h3 className="text-2xl md:text-3xl font-arpona font-bold text-[#23263a] mb-6">
              Every journey begins long<br />before takeoff.
            </h3>
            <p className="font-inter text-[#23263a] font-bold md:text-md mb-4 w-5/7">
              At Luxufe, we ensure that every detail is meticulously arranged, from visa requirements to cultural etiquette, allowing you to travel with confidence and ease.
            </p>
            <p className="font-inter text-[#23263a] font-bold md:text-md w-5/7">
              With expert guidance, thoughtful preparation, and seamless execution, we help you prepare for the ultimate luxury experience so you can focus on what truly matters: immersing yourself in the journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 