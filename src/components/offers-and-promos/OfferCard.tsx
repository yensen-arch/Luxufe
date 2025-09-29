import Image from "next/image";
import React from "react";

interface OfferCardProps {
  image: string;
  logo: string;
  description: string;
  date: string;
}

export default function OfferCard({ image, logo, description, date }: OfferCardProps) {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 lg:h-78 w-full">
        <img src={image} alt="Offer" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-full z-10">
          <img src={logo} alt="Brand Logo" className="h-8 lg:h-10 bg-white/80 px-2 lg:px-4 py-1 lg:py-2 rounded max-w-[120px] lg:max-w-[140px] object-contain shadow" />
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-between px-3 lg:px-4 py-2">
        <div className="text-center mb-3 lg:mb-4">
          <p className="text-lg lg:text-xl font-inter font-bold w-6/7 mx-auto text-[#23263a] my-3 lg:my-4">{description}</p>
          <p className="text-xs text-gray-500 font-inter font-bold mb-3 lg:mb-4">{date}</p>
        </div>
        <button className="w-full bg-[#23263a] text-white font-inter font-bold text-xs py-3 lg:py-4 rounded-none flex items-center justify-center gap-2 hover:bg-black transition mb-2">
          MORE INFO <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow" width={20} height={20} className="w-4 h-4 lg:w-6 lg:h-6 ml-2" />
        </button>
      </div>
    </div>
  );
}
