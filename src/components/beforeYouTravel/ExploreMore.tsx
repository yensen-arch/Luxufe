import React from "react";

interface ExploreMoreProps {
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    title: string
    subtitle: string
    cards: Array<{
      image: {
        url: string
        alt: string
      }
      title: string
      description: string
      cta: string
      href?: string
    }>
  }
}

const defaultCards = [
  {
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Itineraries"
    },
    title: "Itineraries",
    description:
      "Experience bespoke journeys beyond the expected, from private safaris to grand European tours, all crafted for effortless, unforgettable travel.",
    cta: "DISCOVER",
    href: "#",
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      alt: "Destinations"
    },
    title: "Destinations",
    description:
      "Explore extraordinary destinations, from secluded island escapes to vibrant cultural capitals, each seamlessly curated for immersive travel.",
    cta: "EXPLORE",
    href: "#",
  },
  {
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      alt: "Hotels"
    },
    title: "Hotels",
    description:
      "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    cta: "INDULGE",
    href: "#",
  },
];

export default function ExploreMore({ data }: ExploreMoreProps) {
  // Fallback data if no Sanity data is provided
  const exploreData = data || {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1400&q=80',
      alt: 'Peacock'
    },
    title: 'Explore More',
    subtitle: 'Discover more exclusive, luxury travel experiences, tailored to you',
    cards: defaultCards
  }

  return (
    <section className="bg-white relative mt-80">
      <div className="absolute inset-0 z-0">
        <img src={exploreData.backgroundImage.url} alt={exploreData.backgroundImage.alt} className="w-full h-full object-cover" />
      </div>
      <div className="relative -top-70 z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-arpona font-bold text-[#23263a] text-center mb-4 absolute md:static">{exploreData.title}</h2>
        <p className="text-md font-inter font-bold text-[#23263a] text-center mb-16">{exploreData.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreData.cards.map((card) => (
            <div key={card.title} className="bg-white overflow-hidden flex flex-col h-[90vh]">
              <img src={card.image.url} alt={card.image.alt} className="w-full h-110 object-cover" />
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