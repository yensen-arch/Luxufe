import React from "react";

export default function RecognizedForExcellence() {
  return (
    <section className="bg-[#f7f8fa] py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-5xl font-arpona font-bold text-[#23263a] text-center mb-16">Recognized for Excellence</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-gray-200  flex items-center justify-center"
            >
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Logo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-7">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-40 h-40 bg-gray-200  flex items-center justify-center"
            >
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Logo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 