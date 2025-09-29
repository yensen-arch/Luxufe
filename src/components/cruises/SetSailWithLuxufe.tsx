import React from "react";
import Image from "next/image";
const steps = [
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    title: "EXPLORE OPTIONS",
    description:
      "Start with inspiration—use our curated filters or take the Find Your Journey quiz to uncover the voyages that match your dreams.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "CONNECT WITH AN EXPERT",
    description:
      "Have questions or want a personal recommendation? Our knowledgeable team is just a call or message away, ready to refine your shortlist.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=600&q=80",
    title: "PERSONALISE YOUR JOURNEY",
    description:
      "From the perfect suite to bespoke add-ons, we take care of the finer details that elevate your experience from standard to exceptional.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "BOOK & SET SAIL",
    description:
      "Once everything’s just right, we’ll confirm your trip and remain by your side until departure—and beyond.",
  },
];

export default function SetSailWithLuxufe() {
  return (
    <section className="w-full bg-[#23263a] py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-arpona text-white mb-4">Set Sail with Luxufe</h2>
        <p className="text-md text-white/80 font-inter font-bold my-10 md:max-w-2/7 mx-auto">
          Simple steps. Tailored service. Your perfect cruise awaits.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-0 mb-16 relative">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center flex-1 px-4">
              <div className="w-[250px] h-[250px] mb-6 relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-none shadow-lg"
                />
                {/* Dotted line except for last step */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-[calc(100%+80px)] h-0.5">
                    <svg width="150%" height="8" className="absolute left-full top-1/2 -translate-y-1/2" style={{ minWidth: 80 }}>
                      <line x1="0" y1="4" x2="70" y2="4" stroke="#E5E7EB" strokeDasharray="4,6" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-white text-sm font-inter font-bold tracking-widest mb-3">{step.title}</h3>
              <p className="text-white/80 text-sm font-inter font-bold max-w-xs mb-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
          <button className="border-2 border-gray-400 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-[#23263a] transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest">
            BOOK AN APPOINTMENT <Image src="/luxufe-icon-button-arrow-light.svg" alt="arrow right" width={20} height={20} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </button>
          <button className="border-2 border-gray-400 text-white px-8 py-4 bg-transparent hover:bg-white hover:text-[#23263a] transition font-inter font-bold text-xs flex items-center justify-center gap-2 tracking-widest">
            EXPLORE CRUISE OPTIONS <Image src="/luxufe-icon-button-arrow-light.svg" alt="arrow right" width={20} height={20} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
