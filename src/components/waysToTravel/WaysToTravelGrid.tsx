"use client";
import React, { useState } from "react";
import WaysToTravelCard from "./WaysToTravelCard";

interface WaysToTravelGridProps {
  data?: {
    subtitle: string;
    title: string;
    description: string;
  };
}

const journeys = [
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY CRUISES",
    title: "Luxury Cruises",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: true,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },{
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png",
    logoSub: "LUXURY TRAIN JOURNEYS",
    title: "Luxury Train Journeys",
    description: "Stay in handpicked luxury hotels offering exceptional service, world-class amenities, and breathtaking locations, from private retreats to iconic city landmarks.",
    button: "INDULGE",
    highlight: false,
  },
  // Add more cards as needed
];

export default function WaysToTravelGrid({ data }: WaysToTravelGridProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null); // No card selected by default
  
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displaySubtitle = data?.subtitle || "Ways to Travel";
  const displayTitle = data?.title || "Your journey, your way.";
  const displayDescription = data?.description || "Travel is personal. We all have different wants, needs, and desires when we consider where, when, and how you travel. Let Luxufe tailor your next travel experience for you.";

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-24 flex flex-col items-center">
      {/* Heading Section */}
      <div className="mb-8 lg:mb-16 text-center px-4 lg:px-0">
        <p className="text-2xl lg:text-3xl xl:text-5xl font-bellarina mb-2">{displaySubtitle}</p>
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-arpona font-bold mb-4 lg:mb-6">{displayTitle}</h2>
        <p className="text-base lg:text-lg font-inter font-bold text-[#23263a] max-w-2xl lg:max-w-2/5 mx-auto">
          {displayDescription}
        </p>
      </div>
      {/* Grid Section */}
      <div className="w-full max-w-8xl px-4 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {journeys.map((j, idx) => (
          <WaysToTravelCard
            key={idx}
            image={j.image}
            logo={j.logo}
            logoSub={j.logoSub}
            title={j.title}
            description={j.description}
            button={j.button}
            highlight={j.highlight}
            isSelected={selectedCard === idx}
            onClick={() => handleCardClick(idx)}
          />
        ))}
      </div>
    </section>
  );
} 