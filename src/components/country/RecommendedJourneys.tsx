"use client"

import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ItineraryCard from "./ItineraryCard"
import Image from "next/image"


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

export default function CuratedForYou() {
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
      const index = itineraries.findIndex((item) => item.id === selectedCard)
      if (index !== -1) {
        emblaApi.scrollTo(index)
      }
    }
  }, [emblaApi, selectedCard])

  return (
    <section className="py-8 md:py-20 my-12 md:my-40 bg-white text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-bold font-arpona">Recommended Journeys</h2>
        <p className="md:max-w-1/4 text-black mx-auto my-6 md:my-12 font-inter font-bold text-sm md:text-base">
          From iconic landmarks to hidden retreats
        </p>
      </div>

      <div className="relative py-4 md:py-10">
        <div ref={emblaRef}>
          <div className="flex">
            {itineraries.map((item, index) => (
              <div className="flex-[0_0_auto] min-w-0 " key={item.id}>
                <ItineraryCard
                  {...item}
                  isExpanded={selectedCard === item.id}
                  onClick={() => handleCardClick(item.id)}
                  onMoreInfoClick={() => {
                    // Navigate to individual itinerary page
                    window.location.href = `/itineraries/${item.id}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-1 md:left-25 -translate-y-1/2 bg-white rounded-full p-2 md:p-7 shadow-md hover:bg-white z-10 transition-colors"
        >
          <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow left" width={24} height={24} className="h-3 w-3 md:h-7 md:w-7 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-1 md:right-25 -translate-y-1/2 bg-white rounded-full p-2 md:p-7 shadow-md hover:bg-white z-10 transition-colors"
        >
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="h-4 w-4 md:h-7 md:w-7 text-gray-800" />
        </button>
      </div>

      <div className="text-center mt-8 md:mt-16 flex flex-col md:flex-row justify-center gap-3 md:gap-4 px-4 md:px-0">
        <button className="border-2 border-gray-400 text-gray-800 px-3 md:px-6 py-2 md:py-3 hover:bg-gray-800 hover:text-white transition flex items-center justify-center gap-2 text-xs">
          JOURNEYS & TOURS <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      </div>
    </section>
  )
}
