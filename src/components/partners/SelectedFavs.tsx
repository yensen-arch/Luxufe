"use client"
import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ItineraryCard from "./ItineraryCard"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const itineraries = [
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

interface SelectedFavsProps {
  data?: {
    heading?: string;
    description?: string;
    itineraries?: Array<{
      id?: string;
      location?: string;
      nights?: number;
      image?: any;
      name?: string;
      description?: string;
      price?: number;
    }>;
    ctaText?: string;
    ctaLink?: string;
  };
}

export default function SelectedFavs({ data }: SelectedFavsProps) {
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

  // Fallback content if no data is provided
  const heading = data?.heading || "Luxufe Selected Favorites";
  const description = data?.description || "Discover crafted cruise itineraries that blend elegance, adventure, and ease.";
  const ctaText = data?.ctaText || "EXPLORE ALL CRUISES";
  
  // Transform Sanity data to match component expectations
  const itinerariesData = data?.itineraries 
    ? data.itineraries.map(item => ({
        id: item.id || '',
        location: item.location || '',
        nights: item.nights || 0,
        imageUrl: item.image ? `https://picsum.photos/seed/${item.id || 'default'}/800/1000` : `https://picsum.photos/seed/${item.id || 'default'}/800/1000`,
        name: item.name || '',
        description: item.description || '',
        price: item.price || 0
      }))
    : itineraries;

  // Center the selected card when it changes
  useEffect(() => {
    if (emblaApi && selectedCard) {
      const index = itinerariesData.findIndex((item) => item.id === selectedCard)
      if (index !== -1) {
        emblaApi.scrollTo(index)
      }
    }
  }, [emblaApi, selectedCard, itinerariesData])

  return (
    <section className="py-20 my-40 bg-white text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-arpona">{heading}</h2>
        <p className="md:max-w-1/4 text-black mx-auto my-6 md:my-12 font-inter font-bold text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="relative py-10">
        <div ref={emblaRef}>
                  <div className="flex">
          {itinerariesData.map((item, index) => (
              <div className="flex-[0_0_auto] min-w-0 " key={item.id}>
                <ItineraryCard
                  {...item}
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
        <button className="border-2 text-xs border-gray-300 text-gray-800 px-5 font-inter font-bold py-5 hover:bg-gray-800 hover:text-white transition flex items-center gap-2">
          {ctaText} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
