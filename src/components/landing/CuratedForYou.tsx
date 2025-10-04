"use client"
import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ItineraryCard from "./ItineraryCard"
import Image from "next/image"

interface Itinerary {
  id: string;
  location: string;
  nights: number;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

interface CuratedForYouData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  itineraries: Itinerary[];
  ctaButtons: Array<{
    text: string;
    link: string;
  }>;
}

interface CuratedForYouProps {
  data?: CuratedForYouData;
}

const defaultItineraries = [
  {
    id: "egypt",
    location: "EGYPT",
    nights: 9,
    imageUrl: "https://picsum.photos/seed/egypt/800/1000",
    name: "Pyramids & Nile Cruise",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 25756,
  },
  {
    id: "antarctica",
    location: "ANTARCTICA",
    nights: 12,
    imageUrl: "https://picsum.photos/seed/antarctica/800/1000",
    name: "Journey to the Ice Kingdom",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 27756,
  },
  {
    id: "south-america",
    location: "SOUTH AMERICA",
    nights: 8,
    imageUrl: "https://picsum.photos/seed/samerica/800/1000",
    name: "Inca Trails & Machu Picchu",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 18756,
  },
  {
    id: "south-africa",
    location: "SOUTH AFRICA",
    nights: 9,
    imageUrl: "https://picsum.photos/seed/safrica/800/1000",
    name: "Cape Town & Safari",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 22756,
  },
  {
    id: "greece",
    location: "GREECE",
    nights: 7,
    imageUrl: "https://picsum.photos/seed/greece/800/1000",
    name: "Islands of the Aegean",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no",
    price: 19756,
  },
]

export default function CuratedForYou({ data }: CuratedForYouProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    title: "The world,",
    subtitle: "curated for you",
    description: "From iconic landmarks to hidden retreats, Luxufe takes you beyond the expected. Discover travel experiences designed around your desires, where every journey is effortless and immersive.",
    features: ["Personalised Itineraries", "Insider secrets guaranteed", "World-class Service"],
    itineraries: defaultItineraries.map(item => ({
      ...item,
      image: {
        url: item.imageUrl,
        alt: item.name
      }
    })),
    ctaButtons: [
      { text: "JOURNEYS & TOURS", link: "#" },
      { text: "MORE WAYS TO TRAVEL", link: "#" }
    ]
  };

  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const handleCardClick = useCallback((cardId: string) => {
    setSelectedCard(cardId)
  }, [])

  // Center the selected card when it changes
  useEffect(() => {
    if (emblaApi && selectedCard) {
      const index = sectionData.itineraries.findIndex((item) => item.id === selectedCard)
      if (index !== -1) {
        emblaApi.scrollTo(index)
      }
    }
  }, [emblaApi, selectedCard, sectionData.itineraries])

  return (
    <section className="py-12 md:py-16 lg:py-20 my-20 md:my-32 lg:my-40 bg-white text-gray-800 relative overflow-hidden">
      {/* Badge Logo - Hidden on mobile for cleaner look */}
      <div className="hidden lg:block absolute top-50 left-10 -translate-y-1/2 -translate-x-1/2 opacity-40">
        <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[250px] h-auto -rotate-20" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-arpona font-semibold">{sectionData.title}</h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl mb-0 md:mb-0 font-arpona font-semibold">
          {sectionData.subtitle.split(' ').map((word, index) => (
            <span key={index}>
              {word === 'you' ? (
                <span className="font-bellarina font-medium text-4xl md:text-6xl lg:text-9xl">{word}</span>
              ) : (
                word
              )}
              {index < sectionData.subtitle.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h3>
        <p className="max-w-xl text-black mx-auto my-6 md:my-6 lg:my-6 font-inter font-bold text-sm md:text-base">
          {sectionData.description}
        </p>
        {/* Features - Hidden on mobile for cleaner look */}
        <div className="hidden md:flex justify-center items-center gap-0 my-12 lg:my-16 text-gray-500 font-inter font-bold">
          {sectionData.features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-2 ${index < sectionData.features.length - 1 ? 'border-r-1 px-8 lg:px-12 py-2 border-amber-600' : 'px-8 lg:px-12 py-2'}`}>
              <Image src="/luxufe-icon-star-grey.svg" alt="Star" width={30} height={30} className="h-5 w-5 opacity-50" />
              <span className="text-sm lg:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-6 md:py-8 lg:py-10">
        <div ref={emblaRef}>
          <div className="flex">
            {sectionData.itineraries.map((item, index) => (
              <div className="flex-[0_0_auto] min-w-0" key={item.id}>
                <ItineraryCard
                  {...item}
                  imageUrl={item.image.url}
                  isExpanded={selectedCard === item.id}
                  onClick={() => handleCardClick(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Navigation arrows - Hidden on mobile for cleaner look */}
        <button
          onClick={scrollPrev}
          className="hidden md:block absolute top-1/2 left-30 -translate-y-1/2 bg-white rounded-full p-4 md:p-5 lg:p-7 shadow-md hover:bg-white z-0 transition-colors"
        >
          <img src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:block absolute top-1/2 right-30 -translate-y-1/2 bg-white rounded-full p-4 md:p-5 lg:p-7 shadow-md hover:bg-white z-0 transition-colors"
        >
          <img src="luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-800" />
        </button>
      </div>

      <div className="text-center mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row justify-center gap-3 md:gap-4 px-4">
        {sectionData.ctaButtons.map((button, index) => (
          <button key={index} className="border-2 border-gray-300 text-gray-800 px-4 md:px-8 py-3 md:py-4 hover:bg-gray-800 hover:text-white transition flex items-center justify-center gap-2 text-sm md:text-xs">
            {button.text} <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="h-3 w-3 md:h-6 md:w-6" />
          </button>
        ))}
      </div>
    </section>
  )
}
