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
    <section className="py-24 bg-[#23263a]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-arpona font-bold text-white mb-10">
          Set Sail with Luxufe
        </h2>
        <p className="text-lg md:text-md font-inter font-bold text-white mb-26">
          Simple steps. Tailored service. Your perfect cruise awaits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-56 object-cover mb-8"
              />
              {/* Dotted line between steps except last */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 border-t-2 border-dotted border-white z-10"
                  style={{ transform: "translateY(-50%)" }}
                ></div>
              )}
              <h4 className="text-sm font-inter font-bold text-white tracking-widest mb-4">
                {step.title}
              </h4>
              <p className="text-sm font-inter text-white max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 border border-gray-400 px-8 py-5 bg-transparent text-white font-inter font-bold text-xs tracking-widest hover:bg-white hover:text-[#23263a] transition-all">
            BOOK AN APPOINTMENT{" "}
            <Image
              src="/luxufe-icon-button-arrow-light.svg"
              alt="Arrow right"
              width={34}
              height={34}
              className="w-5 h-5 ml-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
