import React from "react";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Itineraries",
    description:
      "Experience bespoke journeys beyond the expected, from private safaris to grand European tours, all crafted for effortless, unforgettable travel.",
    cta: "DISCOVER",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    title: "Destinations",
    description:
      "Explore extraordinary destinations, from secluded island escapes to vibrant cultural capitals, each seamlessly curated for immersive travel.",
    cta: "EXPLORE",
    href: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    title: "Hotels",
    description:
      "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    cta: "INDULGE",
    href: "#",
  },
];

export default function ExploreMore() {
  return (
    <section className="bg-white relative mt-60">
      <div className="relative -top-20 z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-arpona font-bold text-[#23263a] text-center mb-4 absolute md:static">Explore More</h2>
        <p className="text-md font-inter font-bold text-[#23263a] text-center mb-16">Discover more exclusive, luxury travel experiences, tailored to you</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[90vh]">
              <img src={card.image} alt={card.title} className="w-full h-110 object-cover" />
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-arpona font-bold text-[#23263a] mb-4">{card.title}</h3>
                <p className="font-inter font-bold text-slate-500 text-base text-sm mb-8 flex-1">{card.description}</p>
                <a href={card.href} className="font-inter font-bold text-sm tracking-wider flex items-center gap-2 text-[#23263a] hover:underline mt-auto">
                  {card.cta}
                  <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 