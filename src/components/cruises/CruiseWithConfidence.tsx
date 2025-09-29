import React from "react";
import Image from "next/image";
const features = [
  {
    icon: <Image src="/luxufe-icon-pencil.svg" alt="Pencil" width={24} height={24} className="w-6 h-6 text-[#23263a]" />,
    title: "Tailored Expertise",
    description:
      "Our cruise experts handpick the best itineraries, cabins, and experiences to suit your tastes—so your journey begins with confidence and ends in unforgettable moments.",
  },
  {
    icon: <Image src="/luxufe-icon-metro-trophy.svg" alt="Trophy" width={24} height={24} className="w-6 h-6 text-[#23263a]" />,
    title: "Luxury Assured",
    description:
      "Enjoy priority access, exclusive onboard privileges, and price transparency across the world’s most prestigious cruise lines—because luxury should never come with compromise.",
  },
  {
    icon: <Image src="/luxufe-icon-plane-grey.svg" alt="Plane" width={24} height={24} className="w-6 h-6 text-[#23263a]" />,
    title: "Seamless Service",
    description:
      "We take care of every detail—flights, transfers, and bespoke requests—so you can simply step on board and savour the voyage.",
  },
];

export default function CruiseWithConfidence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="font-bellarina text-3xl md:text-4xl text-[#23263a] mb-4">Cruise with confidence</h3>
        <h2 className="w-4/5 mx-auto text-3xl md:text-4xl font-arpona font-medium text-[#23263a] mb-12">
          Effortless luxury, expert guidance, and exclusive advantages—every step of the way.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="flex items-center border-1 border-gray-400 justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6">
                {feature.icon}
              </span>
              <h4 className="text-xl font-arpona font-bold mb-4 text-[#23263a]">{feature.title}</h4>
              <p className="text-sm font-inter font-bold text-[#23263a] max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 