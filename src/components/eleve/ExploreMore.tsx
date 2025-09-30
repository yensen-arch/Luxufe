import React from "react";
import Image from "next/image";
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
    <section className="bg-white relative mt-20 md:mt-40 lg:mt-50 xl:mt-60">
      <div className="relative -top-10 md:-top-20 z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-arpona font-bold text-[#23263a] text-center mb-3 md:mb-4 lg:mb-5 xl:mb-6 absolute md:static">{exploreData.title}</h2>
        <p className="hidden md:block text-xs md:text-sm lg:text-base xl:text-md font-inter font-bold text-[#23263a] text-center mb-6 md:mb-8 lg:mb-12 xl:mb-16">{exploreData.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 xl:gap-8">
          {exploreData?.cards?.map((card: any) => (
            <div key={card.title} className="bg-white shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh]">
              <Image src={card?.image?.url} alt={card?.image?.alt} className="w-full h-48 md:h-60 lg:h-80 xl:h-110 object-cover" width={24} height={24} />
              <div className="p-3 md:p-4 lg:p-6 xl:p-8 flex flex-col flex-1">
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-arpona font-bold text-[#23263a] mb-2 md:mb-2 lg:mb-3 xl:mb-4">{card.title}</h3>
                <p className="font-inter font-bold text-slate-500 text-xs md:text-xs lg:text-sm xl:text-base mb-3 md:mb-4 lg:mb-6 xl:mb-8 flex-1">{card.description}</p>
                <a href={card.href} className="font-inter font-bold text-xs md:text-xs lg:text-sm xl:text-sm tracking-wider flex items-center gap-1 md:gap-1 lg:gap-2 text-[#23263a] hover:underline mt-auto">
                  {card.cta}
                  <span className="inline-block transform transition-transform group-hover:translate-x-1">
                    <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 