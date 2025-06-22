"use client"

import { ArrowRight, MapPin, Plane, Wallet } from "lucide-react"
import type React from "react"

interface ItineraryCardProps {
  id: string
  location: string
  nights: number
  imageUrl: string
  name: string
  price?: number
  description?: string
  isExpanded?: boolean
  onClick?: () => void
}

const ItineraryCard: React.FC<ItineraryCardProps> = ({
  id,
  location,
  nights,
  imageUrl,
  name,
  price,
  description,
  isExpanded = false,
  onClick,
}) => {
  if (isExpanded) {
    return (
      <div
        className="flex-shrink-0 h-[500px] sm:w-80 bg-white shadow-xl overflow-hidden mx-2 cursor-pointer transform transition-all duration-500 "
        onClick={onClick}
      >
        <div className="relative ">
          <div
            className="h-[180px] bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white">
                <MapPin className="h-3 w-3" />
                <span className="font-medium font-inter">{location}</span>
              </div>
              <div className="rounded-full px-3 py-1 text-xs text-white font-medium">
                {nights} Nights
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 text-gray-800 text-center bg-white">
          <h3 className="text-xl font-medium mb-3 text-gray-900 font-arpona">Name of Itinerary here</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-4 font-inter">
            {description ||
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"}
          </p>

          <div className="space-y-3 flex items-center justify-center flex-col">
            <div className="flex items-center gap-3 text-sm">
              <Plane className="h-4 w-4 " />
              <span className="font-bold font-inter">Flights Included</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Wallet className="h-4 w-4" />
              <p className="text-sm font-semibold font-inter">From USD {price?.toLocaleString()} per person</p>
            </div>
            <button className="border-t-2 border-gray-300 w-full py-4 flex items-center justify-center font-inter font-bold text-sm text-gray-600 hover:text-gray-900 transition-colors gap-2 mt-4 group">
              MORE INFORMATION
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative flex-shrink-0 w-full sm:w-80 h-[500px] group overflow-hidden mx-2 cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl"
      onClick={onClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70 transition-opacity duration-300" />

      <div className="relative z-10 p-6 flex flex-col h-full text-white text-center">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-sm rounded-full px-3 py-1">
            <MapPin className="h-4 w-4" />
            <span className="font-medium font-inter">{location}</span>
          </div>
          <div className="text-sm rounded-full px-3 py-1 font-medium font-inter">{nights} Nights</div>
        </div>

        <div className="mt-auto space-y-3">
          <h3 className="text-2xl font-medium leading-tight font-arpona">Name of Itinerary here</h3>
          <div className="flex items-center justify-center gap-3 text-sm">
            <Plane className="h-4 w-4 text-gray-300" />
            <span className="font-bold font-inter ">Flights Included</span>
          </div>
          {price && <p className="font-semibold text-lg font-inter">USD {price.toLocaleString()} per person</p>}
        </div>
      </div>
    </div>
  )
}

export default ItineraryCard
