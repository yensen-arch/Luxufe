"use client";
import React, { useState } from "react";
import ItineraryCard from "./ItineraryCard";
import Image from "next/image";

interface ItinerariesGridProps {
  data?: {
    subtitle: string;
    title: string;
    description: string;
  };
}

const journeys = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Cruises",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  // Add more cards as needed
];

export default function ItinerariesGrid({ data }: ItinerariesGridProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // No card selected by default
  
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayTitle = data?.title || "Ways to Travel with Luxufe";

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-24 flex flex-col items-center">
      {/* Heading Section */}
      <div className="mb-8 lg:mb-16 text-center px-4 lg:px-0">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-arpona mb-2 text-gray-600 font-bold mb-30 md:max-w-2/4 mx-auto">
            From iconic destinations to once-in-a-lifetime adventures, every Luxufe journey
            is crafted to match your pace, preferences, and passions. Whether you seek cultural immersion,
            luxury cruising, or private escapes, your next extraordinary journey starts here.
        </div>
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-arpona font-bold mb-4 lg:mb-6">{displayTitle}</h2>
      </div>
      {/* Grid Section */}
      <div className="w-full max-w-8xl px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {journeys.map((j, idx) => (
          <ItineraryCard
            key={idx}
            image={j.image}
            title={j.title}
            description={j.description}
            button={j.button}
            highlight={j.highlight}
            isSelected={selectedCard === idx}
            onClick={() => handleCardClick(idx)}
          />
        ))}
      </div>
      
      {/* Centered Button */}
      <div className="w-full flex items-center justify-center mt-8">
        <button className="flex items-center justify-center gap-2 text-xs font-inter border-2 border-gray-300 text-gray-600 px-2 my-8 py-3 md:py-5 md:px-6 hover:bg-black hover:text-white transition font-bold tracking-widest">
            MORE WAYS TO JOURNEY WITH LUXUFE <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={24} height={24} className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}