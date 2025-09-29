"use client";

import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const itineraries = [
  {
    id: "kenya-tanzania",
    location: "KENYA, TANZANIA",
    nights: 12,
    imageUrl: "https://picsum.photos/seed/kenya/800/1000",
    name: "Safari & Serengeti Adventure",
    description:
      "Experience the wild beauty of East Africa with luxury safaris and cultural encounters.",
    price: 27756,
  },
  {
    id: "south-africa",
    location: "SOUTH AFRICA",
    nights: 9,
    imageUrl: "https://picsum.photos/seed/safrica2/800/1000",
    name: "Cape Town & Safari",
    description:
      "Discover vibrant cities and breathtaking wildlife in South Africa's top destinations.",
    price: 22756,
  },
  {
    id: "greece",
    location: "GREECE",
    nights: 7,
    imageUrl: "https://picsum.photos/seed/greece2/800/1000",
    name: "Islands of the Aegean",
    description:
      "Sail through the Greek islands and immerse yourself in Mediterranean charm.Sail through the Greek islands and immerse yourself in Mediterranean charm.",
    price: 19756,
  },
  {
    id: "italy",
    location: "ITALY",
    nights: 10,
    imageUrl: "https://picsum.photos/seed/italy/800/1000",
    name: "Rome & Amalfi Coast",
    description:
      "Explore the ancient history and stunning landscapes of Italy's most iconic regions.",
    price: 19756,
  },
  {
    id: "france",
    location: "FRANCE",
    nights: 10,
    imageUrl: "https://picsum.photos/seed/italy/800/1000",
    name: "Paris & Normandy",
    description:
      "Experience the charm of Paris and the beauty of Normandy's countryside.",
    price: 19756,
  },
];

interface TailorMadeItinerariesProps {
  data?: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
}

export default function TailorMadeItineraries({ data }: TailorMadeItinerariesProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleCardClick = useCallback((cardId: string) => {
    setSelectedCard(cardId);
  }, []);

  useEffect(() => {
    if (emblaApi && selectedCard) {
      const index = itineraries.findIndex((item) => item.id === selectedCard);
      if (index !== -1) {
        emblaApi.scrollTo(index);
      }
    }
  }, [emblaApi, selectedCard]);

  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayHeading = data?.heading || "Sample Itineraries - Trips to inspire";
  const displaySubheading = data?.subheading || "Browse a selection of existing itineraries to inspire yours";
  const displayButtonText = data?.buttonText || "GET IN TOUCH TO DESIGN YOURS";

  return (
    <section className="py-20 bg-white text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-arpona font-bold mb-4 md:mb-6">{displayHeading}</h2>
        <p className="max-w-xl text-black mx-auto mb-6 md:mb-8 font-inter font-bold text-sm md:text-base">
          {displaySubheading}
        </p>
      </div>
      <div className="relative py-10">
        <div ref={emblaRef}>
          <div className="flex">
            {itineraries.map((item) => (
              <div className="flex-[0_0_auto] min-w-0 " key={item.id}>
                <div
                  className={`
                    relative flex-shrink-0 group overflow-hidden mx-2 md:mx-4 cursor-pointer transition-all duration-500 ease-out
                    ${selectedCard === item.id
                      ? 'h-[500px] md:h-[600px] w-80 md:sm:w-87 bg-white shadow-xl transform'
                      : 'w-80 md:sm:w-87 h-[500px] md:h-[600px] hover:shadow-2xl'
                    }
                  `}
                  onClick={() => handleCardClick(item.id)}
                >
                  {/* Background Image */}
                  <div
                    className={`
                      bg-cover bg-center transition-all duration-500
                      ${selectedCard === item.id
                        ? 'h-[180px]'
                        : 'absolute inset-0 transition-transform duration-700 group-hover:scale-110'
                      }
                    `}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  {/* Overlay - always visible */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-gray-800 transition-opacity duration-500"
                  />
                  {/* Location and Nights - positioned on image */}
                  <div className="absolute top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 flex justify-between items-start z-20">
                    <div className={`flex items-center gap-1 md:gap-2 rounded-full px-2 md:px-3 py-1 font-medium font-inter text-white text-xs`}>
                        <Image src="/luxufe-icon-location-pin-white.svg" alt="Map Pin" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="text-xs md:text-xs">{item.location}</span>
                    </div>
                    <div className={`rounded-full px-2 md:px-3 py-1 font-medium font-inter text-white text-xs`}>
                      {item.nights} Nights
                    </div>
                  </div>
                  {/* Content Container */}
                  <div className={`
                    relative flex flex-col h-full text-center transition-all duration-500
                    ${selectedCard === item.id
                      ? 'p-4 md:p-6 text-gray-800 bg-white'
                      : 'p-4 md:p-6 text-white'
                    }
                  `}>
                    {/* Main Content */}
                    <div className={`space-y-3 ${selectedCard === item.id ? 'mt-3' : 'mt-auto'}`}>
                      {/* Title */}
                      <h3 className={`font-medium leading-tight font-arpona ${selectedCard === item.id ? 'text-lg md:text-xl mb-3 text-gray-900' : 'text-xl md:text-2xl'}`}>
                        {item.name}
                      </h3>
                      {/* Description - only for expanded state */}
                      {selectedCard === item.id && (
                        <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 text-bold leading-relaxed line-clamp-4 font-inter transition-opacity duration-500 opacity-100">
                          {item.description}
                        </p>
                      )}
                      {/* Flights Included */}
                      <div className={`flex items-center gap-2 md:gap-3 font-bold font-inter text-xs md:text-sm justify-center`}>
                        <Image src={selectedCard === item.id ? "/luxufe-icon-flights-dark.svg" : "/luxufe-icon-dummy-plane.svg"} alt="Plane" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Flights Included</span>
                      </div>
                      {/* Price */}
                      {item.price && (
                        <div className={`flex items-center gap-2 md:gap-3 font-inter ${selectedCard === item.id ? 'text-xs md:text-sm justify-center' : 'font-semibold text-base md:text-lg justify-center'}`}>
                          {selectedCard === item.id && <Image src="/luxufe-icon-cost-dark.svg" alt="Wallet" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4" />}
                          {selectedCard !== item.id && <Image src="/luxufe-icon-dummy-cost.svg" alt="Wallet" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4" />}
                          <p className={selectedCard === item.id ? "text-xs md:text-sm font-bold" : "font-bold text-base md:text-lg"}>
                            {selectedCard === item.id ? 'From ' : ''}USD {item.price.toLocaleString()} per person
                          </p>
                        </div>
                      )}
                      {/* More Information Button - only for expanded state */}
                      {selectedCard === item.id && (
                        <button className="border-t-2 border-gray-300 w-full py-3 md:py-4 flex items-center justify-center font-inter font-bold text-xs md:text-sm text-gray-400 gap-2 mt-3 md:mt-4 group opacity-100">
                          MORE INFORMATION
                          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow Right" width={16} height={16} className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 md:left-35 -translate-y-1/2 bg-white rounded-full p-4 md:p-7 shadow-md hover:bg-white z-0 transition-colors"
        >
          <Image src="/luxufe-icon-slider-arrow-dark.svg" alt="Arrow Left" width={34} height={34} className="h-6 w-6 md:h-9 md:w-9 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 md:right-35 -translate-y-1/2 bg-white rounded-full p-4 md:p-7 shadow-md hover:bg-white z-0 transition-colors"
        >
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow Right" width={34} height={34} className="h-6 w-6 md:h-9 md:w-9 text-gray-800" />
        </button>
      </div>
      <div className="text-center mt-12 md:mt-16 flex justify-center">
        <button className="border-2 border-gray-300 text-gray-800 px-4 md:px-6 py-3 md:py-5 hover:bg-gray-800 hover:text-white transition font-inter font-bold text-xs flex items-center justify-center gap-2">
          <span className="font-bold">{displayButtonText}</span>
          <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow Right" width={16} height={16} className="w-3 h-3 md:w-4 md:h-4 ml-2" />
        </button>
      </div>
    </section>
  );
} 