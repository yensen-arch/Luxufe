"use client"
import type React from "react"
import Image from "next/image"

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
  onMoreInfoClick?: () => void
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
  onMoreInfoClick,
}) => {
  return (
    <div
      className={`
        relative flex-shrink-0 group overflow-hidden mx-1 md:mx-4 cursor-pointer transition-all duration-500 ease-out
        ${isExpanded 
          ? 'h-[450px] md:h-[550px] lg:h-[650px] sm:w-80 md:w-84 lg:w-94 bg-white transform shadow-xl' 
          : 'w-full sm:w-80 md:w-84 lg:w-94 h-[450px] md:h-[550px] lg:h-[650px]'
        }
      `}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className={`
          bg-cover bg-center transition-all duration-500
          ${isExpanded 
            ? 'h-[150px] md:h-[160px] lg:h-[250px]' 
            : 'absolute inset-0 transition-transform duration-700 group-hover:scale-110'
          }
        `}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay*/}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black transition-opacity duration-500
          ${isExpanded ? 'opacity-60' : 'opacity-100'}
        `} 
      />

      {/* Top Section - Location and Nights - Always on image */}
      <div className="absolute top-4 md:top-5 lg:top-6 left-4 md:left-5 lg:left-6 right-4 md:right-5 lg:right-6 z-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1 md:gap-2 rounded-full px-2 md:px-3 py-1 font-medium font-inter text-xs md:text-sm text-white">
            <Image src="/luxufe-icon-location-pin-white.svg" alt="Location" width={20} height={20} className="h-3 w-3 md:h-4 md:w-4" />
            <span>{location}</span>
          </div>
          <div className="rounded-full px-2 md:px-3 py-1 font-medium font-inter text-xs md:text-sm text-white">
            {nights} Nights
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className={`
        relative flex flex-col h-full text-center transition-all duration-500
        ${isExpanded 
          ? 'p-4 md:p-5 lg:p-6 text-gray-800 bg-white' 
          : 'p-4 md:p-5 lg:p-6 text-white'
        }
      `}>

        {/* Main Content */}
        <div className={`
          space-y-2 md:space-y-3
          ${isExpanded ? 'mt-2 md:mt-3' : 'mt-auto'}
        `}>
          
          {/* Title */}
          <h3 className={`
            leading-tight font-arpona
            ${isExpanded 
              ? 'text-lg md:text-2xl font-bold mb-2 md:mb-3 text-gray-900' 
              : 'text-lg md:text-xl lg:text-2xl'
            }
          `}>
            {name}
          </h3>

          {/* Description - only for expanded state */}
          {isExpanded && (
            <p className="text-xs px-2 md:text-sm text-gray-700 mb-4 md:mb-6 leading-relaxed line-clamp-4 font-inter transition-opacity duration-500 opacity-100">
              {description ||
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no"}
            </p>
          )}

          {/* Flights Included */}
          <div className={`
            flex items-center gap-2 md:gap-3 font-bold font-inter
            ${isExpanded 
              ? 'text-xs md:text-sm justify-center' 
              : 'text-xs md:text-sm justify-center'
            }
          `}>
            <Image src="/luxufe-icon-flights-dark.svg" alt="Plane" width={20} height={20} className={`
              ${isExpanded ? 'h-3 w-3 md:h-4 md:w-4' : 'h-3 w-3 md:h-4 md:w-4 text-gray-300'}
            `} />
            <span>Flights Included</span>
          </div>

          {/* Price */}
          {price && (
            <div className={`
              flex items-center gap-2 md:gap-3 font-inter
              ${isExpanded 
                ? 'text-xs md:text-sm justify-center' 
                : 'font-semibold text-base md:text-lg justify-center'
              }
            `}>
              {isExpanded && <Image src="/luxufe-icon-cost-dark.svg" alt="Wallet" width={20} height={20} className="h-3 w-3 md:h-4 md:w-4" />}
              <p className={isExpanded ? "text-xs md:text-sm font-bold" : "font-bold text-base md:text-lg"}>
                {isExpanded ? 'From ' : ''}USD {price.toLocaleString()} per person
              </p>
            </div>
          )}

          {/* More Information Button - only for expanded state */}
          {isExpanded && (
            <button 
              className="border-t-2 border-gray-200 w-full py-3 md:py-4 flex items-center justify-center font-inter font-bold text-xs md:text-sm text-gray-400 gap-2 mt-3 md:mt-4 group opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onMoreInfoClick?.();
              }}
            >
              MORE INFORMATION
              <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="h-3 w-3 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItineraryCard