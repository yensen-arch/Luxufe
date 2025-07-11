import React from "react";

export default function WaysToTravelTailorMade() {
  return (
    <section className="w-full bg-[#23263a] flex flex-col md:flex-row items-stretch h-[120vh]">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center items-center px-10 md:px-24 py-20 md:w-1/2 w-full text-white">
        <h2 className="text-5xl md:text-5xl font-arpona  font-bold mb-8 leading-tight">
          Tailor-made Journeys,<br />Crafted for You
        </h2>
        <h3 className="text-2xl w-2/3 ml-auto md:text-xl font-inter font-bold mb-8 text-gray-200">
          Bespoke itineraries that reflect who you are, and how you love to travel
        </h3>
        <p className="text-md md:text-md font-inter font-bold mb-12 w-2/3 ml-auto text-gray-200">
          <span className="font-bold">No two travellers are the same, and no Luxufe journey ever should be.</span> Our tailor-made itineraries are designed around your vision, blending flexibility with thoughtful detail. Whether you’re planning a multi-country escape or a quiet retreat, we create seamless experiences that feel entirely your own.
        </p>
        <button className="mt-2 border border-gray-500 text-white px-6 py-4 font-inter font-bold text-xs tracking-widest flex  gap-3 hover:bg-white hover:text-[#23263a] transition w-max">
          FIND OUT MORE <span className="ml-2">&rarr;</span>
        </button>
      </div>
      {/* Right: Image */}
      <div className="md:w-1/2 w-full flex items-center justify-end bg-[#23263a]">
        <img
          src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80"
          alt="Peacock"
          className="w-full h-full object-cover max-w-[650px] max-h-[650px]"
        />
      </div>
    </section>
  );
} 