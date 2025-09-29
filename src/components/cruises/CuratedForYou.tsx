"use client"

import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import ItineraryCard from "./ItineraryCard" // Cruise itinerary card
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { getFeaturedCruiseItineraries } from "@/lib/database"

interface CruiseItinerary {
  id: number;
  name: string;
  header_subtitle?: string;
  map_image?: string;
  hero_image?: string;
  thumbnail_image?: string;
  earliest_departure_date?: string;
  latest_departure_date?: string;
  brand_name: string;
  ship_name?: string;
  lowest_price?: string;
  embark_port?: string;
  debark_port?: string;
  duration_nights?: number;
}

export default function CuratedForYou() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [itineraries, setItineraries] = useState<CruiseItinerary[]>([])
  const [loading, setLoading] = useState(true)
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

  // Fetch cruise itineraries
  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        setLoading(true)
        const data = await getFeaturedCruiseItineraries(6)
        setItineraries(data)
      } catch (error) {
        console.error('Error fetching cruise itineraries:', error)
        // Fallback to empty array on error
        setItineraries([])
      } finally {
        setLoading(false)
      }
    }

    fetchItineraries()
  }, [])

  // Center the selected card when it changes
  useEffect(() => {
    if (emblaApi && selectedCard && itineraries.length > 0) {
      const index = itineraries.findIndex((item) => item.id.toString() === selectedCard)
      if (index !== -1) {
        emblaApi.scrollTo(index)
      }
    }
  }, [emblaApi, selectedCard, itineraries])

  return (
    <section className="py-12 md:py-20 my-20 md:my-40 bg-white text-gray-800 relative overflow-hidden">
      <div className="absolute top-40 left-10 -translate-y-1/2 -translate-x-1/2 opacity-30">
        <img src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750523100/LUXUFE_-_Badge_Logo_5_cgreed.png" alt="Luxufe Badge" className="w-[150px] md:w-[300px] h-auto" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-arpona">The world,</h2>
        <h3 className="text-4xl md:text-6xl mb-4 md:mb-6 font-arpona font-medium">
          curated for <span className="font-bellarina font-medium text-6xl md:text-8xl">you</span>
        </h3>
        <p className="max-w-xl text-black mx-auto my-8 md:my-12 font-inter font-bold text-sm md:text-base">
          From iconic landmarks to hidden retreats, Luxufe takes you beyond the expected. Discover travel experiences
          designed around your desires, where every journey is effortless and immersive.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 mb-12 md:mb-16 text-gray-500 font-inter font-bold">
          <div className="flex items-center gap-2 border-b-2 md:border-r-2 md:border-b-0 px-6 md:px-12 py-2 border-amber-400/50">
            <Star className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-sm md:text-base">Personalised Itineraries</span>
          </div>
          <div className="flex items-center gap-2 border-b-2 md:border-r-2 md:border-b-0 px-6 md:px-12 py-2 border-amber-400/50">
            <Star className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-sm md:text-base">Insider secrets guaranteed</span>
          </div>
          <div className="flex items-center gap-2 px-6 md:px-12 py-2">
            <Star className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-sm md:text-base">World-class Service</span>
          </div>
        </div>
      </div>

      <div className="relative py-6 md:py-10">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg font-inter">Loading featured cruise itineraries...</div>
          </div>
        ) : itineraries.length > 0 ? (
          <div ref={emblaRef}>
            <div className="flex">
              {itineraries.map((item, index) => {
                // Transform cruise data to match ItineraryCard expected format
                const cardData = {
                  id: item.id.toString(),
                  location: item.header_subtitle || `${item.embark_port || 'Unknown'} to ${item.debark_port || 'Unknown'}`,
                  nights: item.duration_nights || 7, // Default to 7 nights if not available
                  imageUrl: item.map_image || item.hero_image || item.thumbnail_image || "https://picsum.photos/seed/cruise/800/1000",
                  name: item.name,
                  description: item.header_subtitle || `Experience luxury cruising with ${item.brand_name}. ${item.ship_name ? `Sailing aboard the ${item.ship_name}.` : ''} ${item.embark_port && item.debark_port ? `From ${item.embark_port} to ${item.debark_port}.` : ''}`,
                  price: item.lowest_price ? parseInt(item.lowest_price.replace(/[^0-9]/g, '')) || 25000 : 25000
                };
                
                return (
                  <div className="flex-[0_0_auto] min-w-0 " key={item.id}>
                    <ItineraryCard
                      {...cardData}
                      isExpanded={selectedCard === item.id.toString()}
                      onClick={() => handleCardClick(item.id.toString())}
                      onMoreInfoClick={() => {
                        // Navigate to individual cruise itinerary page
                        window.location.href = `/itineraries/cruise/${item.id}`;
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg font-inter">No cruise itineraries available at the moment.</div>
          </div>
        )}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/80 rounded-full p-3 md:p-5 shadow-md hover:bg-white z-0 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/80 rounded-full p-3 md:p-5 shadow-md hover:bg-white z-0 transition-colors"
        >
          <ArrowRight className="h-4 w-4 md:h-6 md:w-6 text-gray-800" />
        </button>
      </div>

      <div className="text-center mt-12 md:mt-16 flex flex-col md:flex-row justify-center gap-4 px-4 md:px-0">
        <button className="border border-gray-800 text-gray-800 px-4 md:px-6 py-2 md:py-3 hover:bg-gray-800 hover:text-white transition flex items-center justify-center gap-2 text-xs">
          JOURNEYS & TOURS <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
        </button>
        <button className="border border-gray-800 text-gray-800 px-4 md:px-6 py-2 md:py-3 hover:bg-gray-800 hover:text-white transition flex items-center justify-center gap-2 text-xs">
          MORE WAYS TO TRAVEL <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      </div>
    </section>
  )
}
