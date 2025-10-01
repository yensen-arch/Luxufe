import React from "react";
import Image from "next/image";

interface ItineraryCardProps {
  image: string;
  title: string;
  description: string;
  button: string;
  highlight: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function ItineraryCard({
  image,
  title,
  description,
  button,
  highlight,
  isSelected = false,
  onClick
}: ItineraryCardProps) {
  return (
    <div
      className={`flex flex-col bg-white shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected ? 'scale-105' : ''
      } ${highlight ? "border-[#17696A]" : ""}`}
      onClick={onClick}
    >
      {/* Image + Overlay */}
      <div className="relative h-60 lg:h-80 w-full">
        <Image src={image} alt={title} className="w-full h-full object-cover" width={300} height={300} />
        <div className="absolute inset-0 h-full flex flex-col items-center justify-center bg-black/20">
        </div>
      </div>
      {/* Lower Section */}
      <div className={`flex flex-col flex-1 p-6 lg:p-8 ${isSelected ? "bg-[#17696A] text-white" : highlight ? "bg-[#17696A] text-white" : "bg-white text-[#23263a]"}`}>
        <h3 className="text-2xl lg:text-3xl font-arpona font-normal mb-3 lg:mb-4">{title}</h3>
        <p className="text-sm lg:text-md font-inter font-bold mb-6 lg:mb-8">{description}</p>
        <button className={`flex items-center gap-2 text-sm lg:text-md font-inter font-bold tracking-widest ${isSelected || highlight ? "text-white" : "text-[#17696A]"}`}>
          {button} 
          <Image 
            src={isSelected || highlight ? "/luxufe-icon-button-arrow-light.svg" : "/luxufe-icon-button-arrow-dark.svg"} 
            alt="Arrow" 
            width={20} 
            height={20} 
            className="w-4 h-4 lg:w-6 lg:h-6 ml-2" 
          />
        </button>
      </div>
    </div>
  );
}