import { ArrowRight } from 'lucide-react';
import React from 'react';

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  category, 
  title, 
  description, 
  imageUrl, 
  buttonText = "READ MORE", 
  buttonLink = "#" 
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 sm:h-56 lg:h-auto object-cover" />
      <div className="relative p-4 sm:p-6 lg:p-10 text-left">
        {/* SVG to create the curved top edge - hidden on mobile for cleaner look */}
        <div className="hidden lg:block absolute left-0 w-full h-16" style={{ top: '-4rem', zIndex: 10 }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,60 C0,-80, 90,180, 100,40 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-20">
          <p className="text-xs text-gray-500 tracking-widest uppercase font-inter font-bold">{category}</p>
          <h3 className="text-lg sm:text-xl font-arpona font-bold text-gray-800 mt-2 mb-3 h-auto sm:h-16 w-full sm:w-2/4">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 w-full sm:w-3/4 leading-relaxed h-auto sm:h-24 font-inter font-bold mb-3 sm:mb-4">{description}</p>
          <a href={buttonLink} className="mt-3 sm:mt-4 text-xs inline-flex items-center gap-1 sm:gap-2 font-inter font-bold text-gray-800 hover:underline">
            {buttonText} <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 