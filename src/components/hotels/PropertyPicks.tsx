"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";

interface PropertyPicksData {
  tagline: string;
  title: string;
  properties: Array<{
    name: string;
    location: string;
    image: string;
    rating?: number;
  }>;
  ctaButtons: Array<{
    text: string;
    link: string;
  }>;
}

interface PropertyPicksProps {
  data?: PropertyPicksData;
}

const defaultProperties = [
  {
    name: "Singita Ebony Lodge",
    location: "Greater Kruger · South Africa",
    image: "https://picsum.photos/seed/singita-ebony/800/600",
    rating: 5
  },
  {
    name: "Ellerman House",
    location: "Cape Town · South Africa",
    image: "https://picsum.photos/seed/ellerman-house/800/600",
    rating: 5
  },
  {
    name: "Royal Malewane",
    location: "Greater Kruger · South Africa",
    image: "https://picsum.photos/seed/royal-malewane/800/600",
    rating: 5
  },
  {
    name: "La Residence",
    location: "Franschhoek · South Africa",
    image: "https://picsum.photos/seed/la-residence/800/600",
    rating: 5
  },
  {
    name: "Morukuru Ocean House",
    location: "De Hoop Nature Reserve · South Africa",
    image: "https://picsum.photos/seed/morukuru-ocean/800/600",
    rating: 5
  },
  {
    name: "Birkenhead House",
    location: "Hermanus · South Africa",
    image: "https://picsum.photos/seed/birkenhead-house/800/600",
    rating: 5
  }
];

export default function PropertyPicks({ data }: PropertyPicksProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    tagline: "Worth Travelling for",
    title: "Luxufe's Property Picks",
    properties: defaultProperties,
    ctaButtons: [
      { text: "ENQUIRE WITH US", link: "#" },
      { text: "TRY THE TRIP WIZARD", link: "#" }
    ]
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-lg md:text-xl lg:text-2xl font-bellarina text-gray-600 mb-2 md:mb-3">
            {sectionData.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona font-bold text-gray-800">
            {sectionData.title}
          </h2>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20 lg:mb-24">
          {sectionData.properties.map((property, index) => (
            <div key={index} className="h-[300px] md:h-[350px] lg:h-[400px]">
              <PropertyCard
                name={property.name}
                location={property.location}
                image={property.image}
                rating={property.rating}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {sectionData.ctaButtons.map((button, index) => (
            <button
              key={index}
              className="border border-gray-800 text-gray-800 px-6 md:px-8 py-3 md:py-4 hover:bg-gray-800 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base font-inter font-bold"
            >
              {button.text}
              <ArrowRight className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 