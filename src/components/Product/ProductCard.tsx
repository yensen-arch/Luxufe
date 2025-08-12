import React from "react";
import { Building2, Users } from "lucide-react";

interface ProductCardProps {
  name: string;
  type: string;
  bed: string | null;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, type, bed, image }) => {
  return (
    <div className="relative rounded-none overflow-hidden shadow-lg h-[500px] flex flex-col justify-between group cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      
      {/* Top Section - Room Type Badge */}
      <div className="relative z-20 p-6">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded">
          <span className="text-white text-xs font-inter font-semibold tracking-widest uppercase">
            {type}
          </span>
        </div>
      </div>
      
      {/* Bottom Section - Room Info and Button */}
      <div className="relative z-20 p-6">
        {/* Room Name */}
        <h3 className="text-white text-2xl font-arpona font-normal mb-2 drop-shadow-lg">
          {name}
        </h3>
        
        {/* Sleep Capacity */}
        <div className="flex items-center gap-2 text-white text-sm font-inter mb-4">
          <Users className="w-4 h-4" />
          <span>SLEEPS 2 ADULTS</span>
        </div>
        
        {/* Action Button */}
        <button className="cursor-pointer bg-white text-black font-inter font-semibold px-6 py-3 text-xs rounded-none shadow hover:bg-gray-100 transition-all tracking-widest">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 