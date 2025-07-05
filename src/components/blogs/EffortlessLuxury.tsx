import React from "react";

export default function EffortlessLuxury() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto ml-10">
            <h3 className="text-5xl md:text-3xl font-arpona font-bold text-[#23263a] mb-8">
              The Art of Effortless Travel
            </h3>
            <p className="font-inter text-[#23263a] md:text-md mb-4 w-6/8 font-bold">
              We believe that true luxury is felt, not just seen. It is the ease of knowing every detail has been anticipated, the quiet confidence of seamless transitions, and the joy of experiencing something truly personal. Travel should never feel complicated or transactional, but rather it should unfold naturally.
            </p>
            <p className="font-inter text-[#23263a] md:text-md mb-8 w-6/8 font-bold">
              From the first touchpoint to the final farewell, our ethos ensures that luxury is not just what you experience, but how effortlessly you experience it
            </p>
            <button className="border text-xs border-slate-300 px-8 py-4 font-inter font-semibold text-[#23263a] flex items-center gap-2 w-fit hover:bg-black hover:text-white transition-colors">
              EXPLORE LUXURY
              <span className="ml-2">&rarr;</span>
            </button>
          </div>
          {/* Left: Image */}
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Santorini"
              className="w-[450px] h-[340px] md:h-[450px] mx-auto object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
} 