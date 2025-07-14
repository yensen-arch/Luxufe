import React from "react";
import { Building2, BookOpen } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  properties: number;
  itineraries: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, properties, itineraries }) => {
  return (
    <div className="relative rounded-none overflow-hidden shadow-lg h-[500px] flex flex-col justify-between group cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      {/* Country Name */}
      <div className="relative z-20 p-6">
        <h3 className="text-white text-2xl font-arpona font-normal mb-2 drop-shadow-lg">{name}</h3>
      </div>
      {/* Stats & Button Row */}
      <div className="relative z-20 flex items-end justify-between w-full px-6 pb-6">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2 text-white text-sm font-inter">
            <Building2 className="w-4 h-4" /> {properties} Properties
          </span>
          <span className="flex items-center gap-2 text-white text-sm font-inter">
            <BookOpen className="w-4 h-4" /> {itineraries} Itineraries
          </span>
        </div>
        <button className="bg-white text-black font-inter font-semibold px-6 py-2 text-xs rounded-none shadow hover:bg-gray-100 transition-all">EXPLORE</button>
      </div>
    </div>
  );
};

export default ProductCard; 