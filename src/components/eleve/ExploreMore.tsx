import React from "react";

interface ExploreMoreProps {
  data?: {
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

export default function ExploreMore({ data }: ExploreMoreProps) {
  // Fallback data
  const fallbackData = {
    title: 'Explore More',
    subtitle: 'Discover more exclusive, luxury travel experiences, tailored to you',
    cards: [
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
    ]
  }

  const exploreData = data || fallbackData

  return (
    <section className="bg-white relative mt-40 md:mt-50 lg:mt-60">
      <div className="relative -top-20 z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold text-[#23263a] text-center mb-4 md:mb-5 lg:mb-6 absolute md:static">{exploreData.title}</h2>
        <p className="text-sm md:text-base lg:text-md font-inter font-bold text-[#23263a] text-center mb-8 md:mb-12 lg:mb-16">{exploreData.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {exploreData.cards.map((card) => (
            <div key={card.title} className="bg-white shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[60vh] md:h-[70vh] lg:h-[90vh]">
              <img src={card.image.url} alt={card.image.alt} className="w-full h-60 md:h-80 lg:h-110 object-cover" />
              <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-arpona font-bold text-[#23263a] mb-2 md:mb-3 lg:mb-4">{card.title}</h3>
                <p className="font-inter font-bold text-slate-500 text-xs md:text-sm lg:text-base mb-4 md:mb-6 lg:mb-8 flex-1">{card.description}</p>
                <a href={card.href} className="font-inter font-bold text-xs md:text-sm tracking-wider flex items-center gap-1 md:gap-2 text-[#23263a] hover:underline mt-auto">
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