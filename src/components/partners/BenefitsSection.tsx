import React from "react";
import { Pencil, Trophy, Plane } from "lucide-react";

const features = [
  {
    icon: <Pencil className="w-10 h-10 text-[#23263a]" />,
    title: "Tailored Expertise",
    description:
      "Our cruise experts handpick the best itineraries, cabins, and experiences to suit your tastes—so your journey begins with confidence and ends in unforgettable moments.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-[#23263a]" />,
    title: "Luxury Assured",
    description:
      "Enjoy priority access, exclusive onboard privileges, and price transparency across the world’s most prestigious cruise lines—because luxury should never come with compromise.",
  },
  {
    icon: <Plane className="w-10 h-10 text-[#23263a]" />,
    title: "Seamless Service",
    description:
      "We take care of every detail—flights, transfers, and bespoke requests—so you can simply step on board and savour the voyage.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl w-4/5 mx-auto md:text-4xl font-arpona font-medium text-[#23263a] mb-12">
          Effortless luxury, expert guidance, and exclusive advantages—every step of the way.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-6">
                {feature.icon}
              </span>
              <h4 className="text-xl font-arpona font-medium mb-4 text-[#23263a]">{feature.title}</h4>
              <p className="text-sm font-inter font-bold text-[#23263a] max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 