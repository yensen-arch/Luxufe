"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Anchor } from "lucide-react"

interface Voyage {
  titlePart1: string;
  titlePart2: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  buttonText: string;
}

interface VoyagesData {
  voyages: Voyage[];
}

interface VoyagesProps {
  data?: VoyagesData;
}

const defaultVoyageData = [
  {
    titlePart1: "Unforgettable voyages,",
    titlePart2: "luxury",
    description:
      "Set sail on a journey where every detail is designed for your ultimate comfort and discovery. From elegant ocean liners to intimate yacht charters, Luxufe curates the most exclusive cruise experiences, blending luxurious accommodation with breathtaking destinations.",
    imageUrl: "https://picsum.photos/seed/yacht-luxury/1200/900",
    buttonText: "LUXURY CRUISES",
  },
  {
    titlePart1: "Exclusive rail journeys,",
    titlePart2: "elegance",
    description:
      "Embark on a classic adventure aboard some of the world's most iconic trains. Traverse stunning landscapes in unparalleled comfort, enjoying gourmet dining and exquisite service. A journey by rail is a return to the golden age of travel.",
    imageUrl: "https://picsum.photos/seed/luxury-train/1200/900",
    buttonText: "CLASSIC TRAINS",
  },
  {
    titlePart1: "Private jet charters,",
    titlePart2: "travel",
    description:
      "Experience the pinnacle of convenience and luxury with our private jet charters. Skip the queues and travel on your own schedule to any destination worldwide. Enjoy personalized service and unmatched comfort from takeoff to landing.",
    imageUrl: "https://picsum.photos/seed/private-jet/1200/900",
    buttonText: "PRIVATE JETS",
  },
]

export default function Voyages({ data }: VoyagesProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    voyages: defaultVoyageData.map(voyage => ({
      ...voyage,
      image: {
        url: voyage.imageUrl,
        alt: voyage.titlePart1
      }
    }))
  };

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sectionData.voyages.length - 1 : prevIndex - 1))
      setIsTransitioning(false)
    }, 300)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === sectionData.voyages.length - 1 ? 0 : prevIndex + 1))
      setIsTransitioning(false)
    }, 300)
  }

  const currentVoyage = sectionData.voyages[currentIndex]

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0 ">
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-start min-h-[400px] lg:min-h-[850px]">
          {/* Image Section */}
          <div className="w-full lg:w-3/6 h-full z-10 lg:ml-20 order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={currentVoyage.image.url || "/placeholder.svg"}
                alt={currentVoyage.image.alt}
                className={`w-full h-[300px] lg:h-[600px] object-cover transition-all duration-700 ease-in-out ${
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-15 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10 hidden lg:flex">
            <button
              onClick={goToPrevious}
              className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              disabled={isTransitioning}
            >
              <ArrowLeft className="h-5 w-5 text-gray-700 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={goToNext}
              className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              disabled={isTransitioning}
            >
              <ArrowRight className="h-5 w-5 text-gray-700 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Navigation Dots - Only visible on mobile */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden order-3">
            {sectionData.voyages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(index)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gray-900 w-6' : 'bg-gray-300'
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>

          {/* Content Section */}
          <div className="bg-gray-100 w-full h-full lg:w-6/8 mt-6 lg:mt-0 lg:absolute lg:right-0 p-6 lg:p-12 order-1 lg:order-2">
            <div
              className={`transition-all duration-700 ease-in-out  ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="w-full lg:w-1/2 lg:ml-auto">
                {/* Icon - Hidden on mobile for cleaner look */}
                <div className="hidden lg:inline-flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full mb-8">
                  <Anchor className="h-7 w-7 text-gray-600" />
                </div>

                <h2 className="text-2xl lg:text-4xl xl:text-5xl font-light leading-tight mb-4 lg:mb-8 text-gray-900 font-arpona lg:ml-auto">
                  {currentVoyage.titlePart1}
                  <br />
                  unparalleled <span className="italic font-serif text-3xl lg:text-6xl xl:text-7xl font-bellarina ">{currentVoyage.titlePart2}</span>
                </h2>

                <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-10 max-w-full lg:max-w-lg font-inter font-bold">{currentVoyage.description}</p>

                <button className="group inline-flex items-center gap-3 text-xs lg:text-sm font-semibold tracking-widest border border-gray-400 px-6 lg:px-8 py-3 lg:py-4 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-inter font-bold">
                  {currentVoyage.buttonText}
                  <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
