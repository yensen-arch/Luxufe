import { ArrowRight } from "lucide-react";
import React from "react";

export default function TravelInsuranceInfo() {
  return (
    <section className="py-24 bg-white ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl md:text-5xl font-arpona font-bold text-[#23263a] text-left mb-15 mx-5">
          Travel with Confidence with insurance
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Woman with hat by water"
              className="w-full max-w-lg h-[340px] md:h-[550px] object-cover "
            />
          </div>
          {/* Right: Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <p className="w-5/8 font-arpona text-[#23263a] text-2xl md:text-2xl font-bold mb-8">
              Luxufe offers comprehensive travel insurance through our trusted partner, Travelex, ensuring that every journey is protected against the unexpected.
            </p>
            <p className="w-5/8 font-inter text-[#23263a] font-bold md:text-sm mb-6">
              True luxury means traveling without worry. From last-minute itinerary changes to unforeseen medical emergencies, having the right insurance ensures that your journey remains seamless, no matter what happens. Luxufe partners with Travelex to offer tailored coverage, including trip cancellations, medical assistance, lost luggage protection, and exclusive emergency support.
            </p>
            <p className="w-5/8 font-inter text-[#23263a] font-bold md:text-sm">
              When you book with Luxufe, remember to add comprehensive travel insurance and enjoy the world’s finest travel experiences with complete peace of mind.
            </p>
            <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-xs w-[200px] mt-10 font-inter text-gray-700 font-bold px-3 py-3 uppercase hover:bg-gray-100">Explore Luxury <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
} 