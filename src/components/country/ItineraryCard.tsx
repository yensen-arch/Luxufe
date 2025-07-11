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
  return (
    <div
      className={`
        relative flex-shrink-0 group overflow-hidden mx-2 cursor-pointer transition-all duration-500 ease-out
        ${isExpanded 
          ? 'h-[550px] sm:w-86 bg-white shadow-xl transform' 
          : 'w-full sm:w-86 h-[550px] hover:shadow-2xl'
        }
      `}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className={`
          bg-cover bg-center transition-all duration-500
          ${isExpanded 
            ? 'h-[180px]' 
            : 'absolute inset-0 transition-transform duration-700 group-hover:scale-110'
          }
        `}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay - only for collapsed state */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70 transition-opacity duration-500
          ${isExpanded ? 'opacity-0' : 'opacity-100'}
        `} 
      />

      {/* Content Container */}
      <div className={`
        relative flex flex-col h-full text-center transition-all duration-500
        ${isExpanded 
          ? 'p-6 text-gray-800 bg-white' 
          : 'p-6 text-white'
        }
      `}>
        
        {/* Top Section - Location and Nights */}
        <div className={`
          flex justify-between items-start
          ${isExpanded ? 'relative' : ''}
        `}>
          <div className={`
            flex items-center gap-2 rounded-full px-3 py-1 font-medium font-inter
            ${isExpanded 
              ? 'text-xs text-white absolute top-4 left-4' 
              : 'text-sm'
            }
          `}>
            <MapPin className={isExpanded ? "h-3 w-3" : "h-4 w-4"} />
            <span>{location}</span>
          </div>
          <div className={`
            rounded-full px-3 py-1 font-medium font-inter
            ${isExpanded 
              ? 'text-xs text-white absolute top-4 right-4' 
              : 'text-sm'
            }
          `}>
            {nights} Nights
          </div>
        </div>

        {/* Main Content */}
        <div className={`
          space-y-3
          ${isExpanded ? 'mt-3' : 'mt-auto'}
        `}>
          
          {/* Title */}
          <h3 className={`
            font-medium leading-tight font-arpona
            ${isExpanded 
              ? 'text-xl mb-3 text-gray-900' 
              : 'text-2xl'
            }
          `}>
            Name of Itinerary here
          </h3>

          {/* Description - only for expanded state */}
          {isExpanded && (
            <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-4 font-inter transition-opacity duration-500 opacity-100">
              {description ||
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"}
            </p>
          )}

          {/* Flights Included */}
          <div className={`
            flex items-center gap-3 font-bold font-inter
            ${isExpanded 
              ? 'text-sm justify-center' 
              : 'text-sm justify-center'
            }
          `}>
            <Plane className={`
              ${isExpanded ? 'h-4 w-4' : 'h-4 w-4 text-gray-300'}
            `} />
            <span>Flights Included</span>
          </div>

          {/* Price */}
          {price && (
            <div className={`
              flex items-center gap-3 font-inter
              ${isExpanded 
                ? 'text-sm justify-center' 
                : 'font-semibold text-lg justify-center'
              }
            `}>
              {isExpanded && <Wallet className="h-4 w-4" />}
              <p className={isExpanded ? "text-sm font-bold" : "font-bold text-lg"}>
                {isExpanded ? 'From ' : ''}USD {price.toLocaleString()} per person
              </p>
            </div>
          )}

          {/* More Information Button - only for expanded state */}
          {isExpanded && (
            <button className="border-t-2 border-gray-300 w-full py-4 flex items-center justify-center font-inter font-bold text-sm text-gray-400 gap-2 mt-4 group opacity-100">
              MORE INFORMATION
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItineraryCard