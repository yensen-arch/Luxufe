"use client";

import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MapPin, Plane, Wallet } from "lucide-react";

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
      "Sail through the Greek islands and immerse yourself in Mediterranean charm.",
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
        <h2 className="text-5xl font-arpona font-bold mb-6">{displayHeading}</h2>
        <p className="max-w-xl text-black mx-auto mb-8 font-inter font-bold">
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
                    relative flex-shrink-0 group overflow-hidden mx-2 cursor-pointer transition-all duration-500 ease-out
                    ${selectedCard === item.id
                      ? 'h-[550px] sm:w-86 bg-white shadow-xl transform'
                      : 'w-full sm:w-86 h-[550px] hover:shadow-2xl'
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
                  {/* Overlay - only for collapsed state */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70 transition-opacity duration-500
                      ${selectedCard === item.id ? 'opacity-0' : 'opacity-100'}
                    `}
                  />
                  {/* Content Container */}
                  <div className={`
                    relative flex flex-col h-full text-center transition-all duration-500
                    ${selectedCard === item.id
                      ? 'p-6 text-gray-800 bg-white'
                      : 'p-6 text-white'
                    }
                  `}>
                    {/* Top Section - Location and Nights */}
                    <div className={`flex justify-between items-start ${selectedCard === item.id ? 'relative' : ''}`}>
                      <div className={`flex items-center gap-2 rounded-full px-3 py-1 font-medium font-inter ${selectedCard === item.id ? 'text-xs text-white absolute top-4 left-4' : 'text-sm'}`}>
                        <MapPin className={selectedCard === item.id ? "h-3 w-3" : "h-4 w-4"} />
                        <span>{item.location}</span>
                      </div>
                      <div className={`rounded-full px-3 py-1 font-medium font-inter ${selectedCard === item.id ? 'text-xs text-white absolute top-4 right-4' : 'text-sm'}`}>
                        {item.nights} Nights
                      </div>
                    </div>
                    {/* Main Content */}
                    <div className={`space-y-3 ${selectedCard === item.id ? 'mt-3' : 'mt-auto'}`}>
                      {/* Title */}
                      <h3 className={`font-medium leading-tight font-arpona ${selectedCard === item.id ? 'text-xl mb-3 text-gray-900' : 'text-2xl'}`}>
                        {item.name}
                      </h3>
                      {/* Description - only for expanded state */}
                      {selectedCard === item.id && (
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-4 font-inter transition-opacity duration-500 opacity-100">
                          {item.description}
                        </p>
                      )}
                      {/* Flights Included */}
                      <div className={`flex items-center gap-3 font-bold font-inter text-sm justify-center`}>
                        <Plane className="h-4 w-4" />
                        <span>Flights Included</span>
                      </div>
                      {/* Price */}
                      {item.price && (
                        <div className={`flex items-center gap-3 font-inter ${selectedCard === item.id ? 'text-sm justify-center' : 'font-semibold text-lg justify-center'}`}>
                          {selectedCard === item.id && <Wallet className="h-4 w-4" />}
                          <p className={selectedCard === item.id ? "text-sm font-bold" : "font-bold text-lg"}>
                            {selectedCard === item.id ? 'From ' : ''}USD {item.price.toLocaleString()} per person
                          </p>
                        </div>
                      )}
                      {/* More Information Button - only for expanded state */}
                      {selectedCard === item.id && (
                        <button className="border-t-2 border-gray-300 w-full py-4 flex items-center justify-center font-inter font-bold text-sm text-gray-400 gap-2 mt-4 group opacity-100">
                          MORE INFORMATION
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
      <div className="text-center mt-16 flex justify-center">
        <button className="border-2 border-gray-300 text-gray-800 px-6 py-4 hover:bg-gray-800 hover:text-white transition font-inter font-bold text-xs flex items-center justify-center gap-2">
          <span className="font-bold">{displayButtonText}</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
} 