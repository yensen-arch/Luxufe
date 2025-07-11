import React from "react";

export default function WaysToTravelReflectsYou() {
  return (
    <section className="bg-white flex justify-center items-center py-32">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Cheers"
            className="w-[480px] h-[480px] object-cover rounded-none shadow-lg"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
          <h2 className="text-5xl md:text-6xl font-arpona text-[#23263a] font-normal leading-tight mb-8">
            Travel That Reflects <span className="font-bellarina text-5xl md:text-6xl font-normal align-middle">You</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-arpona text-[#23263a] font-normal mb-8">
            Experience-led travel begins with a feeling: the desire to rest, to connect, to taste, to explore.
          </h3>
          <p className="text-lg font-inter text-[#23263a] font-normal mb-6 max-w-xl">
            From meditative wellness retreats to adrenaline-filled adventures, these journeys are guided by what excites and restores you.
          </p>
          <p className="text-lg font-inter text-[#23263a] font-normal mb-10 max-w-xl">
            Each itinerary is crafted to reflect your priorities, not just your destination. Whether you’re chasing the perfect wave, sourcing rare wines, or reconnecting with ancient history, the experience becomes the journey.
          </p>
          <button className="border border-gray-400 text-[#23263a] px-8 py-4 font-inter font-bold text-md tracking-widest flex items-center gap-3 hover:bg-[#23263a] hover:text-white transition w-max">
            VIEW JOURNEYS <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
} 