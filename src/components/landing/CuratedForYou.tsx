"use client"
import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ItineraryCard from "./ItineraryCard"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

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
    <section className="py-20 my-40 bg-white text-gray-800 relative overflow-hidden">
      <div className="absolute top-30 left-10 -translate-y-1/2 -translate-x-1/2 opacity-30">
        <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[300px] h-auto" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl font-arpona ">{sectionData.title}</h2>
        <h3 className="text-6xl mb-6 font-arpona font-medium">
          {sectionData.subtitle.split(' ').map((word, index) => (
            <span key={index}>
              {word === 'you' ? (
                <span className="font-bellarina font-medium text-8xl">{word}</span>
              ) : (
                word
              )}
              {index < sectionData.subtitle.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h3>
        <p className="max-w-xl text-black mx-auto my-12 font-inter font-bold">
          {sectionData.description}
        </p>
        <div className="flex justify-center items-center gap-0 mb-16 text-gray-500 font-inter font-bold">
          {sectionData.features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-2 ${index < sectionData.features.length - 1 ? 'border-r-2 px-12 py-2 border-amber-400/50' : 'px-12 py-2'}`}>
              <Star className="h-4 w-4" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-10">
        <div ref={emblaRef}>
          <div className="flex">
            {sectionData.itineraries.map((item, index) => (
              <div className="flex-[0_0_auto] min-w-0 " key={item.id}>
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
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-5 shadow-md hover:bg-white z-0 transition-colors"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-5 shadow-md hover:bg-white z-0 transition-colors"
        >
          <ArrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      <div className="text-center mt-16 flex justify-center gap-4">
        {sectionData.ctaButtons.map((button, index) => (
          <button key={index} className="border border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition flex items-center gap-2">
            {button.text} <ArrowRight className="h-4 w-4" />
          </button>
        ))}
      </div>
    </section>
  )
}
