import React from "react";

export default function WhatTailorMadeMeans() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] mb-16 flex flex-wrap items-end">
          <span className="mr-3 font-bold">What</span>
          <span className="font-bellarina text-4xl md:text-6xl" style={{fontFamily: 'Bellarina, serif'}}>Tailor-made</span>
          <span className="ml-3 font-bold">means at Luxufe</span>
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Yacht from above"
              className="w-full w-[540px] h-[500px] object-cover rounded"
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            <h3 className="text-2xl md:text-3xl font-arpona font-bold text-[#23263a] mb-6">
              Crafted with care, curated<br />with precision, and designed<br />entirely for you
            </h3>
            <p className="font-inter text-[#23263a] text-md font-bold mb-4 w-5/6">
              Tailor-made travel is about starting with a blank page, then filling it with the places, experiences, and details that matter most to you. Whether it’s travelling with family, celebrating a milestone, or simply escaping the everyday, we begin with what you value and build from there.
            </p>
            <p className="font-inter text-[#23263a] text-md font-bold w-5/6">
              Our approach combines world-class insight with highly personal service. You’ll have one point of contact from start to finish, access to our most trusted partners, and the peace of mind that every step has been thoughtfully considered and perfectly timed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 