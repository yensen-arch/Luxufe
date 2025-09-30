import React from 'react';
import Image from 'next/image';
interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, title, description, imageUrl }) => {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-xl">
      <Image src={imageUrl} alt={title} className="w-full h-48 md:h-120 object-cover" width={400} height={300} />
      <div className="relative p-6 md:p-10 text-left">
        {/* SVG to create the curved top edge */}
        <div className="absolute left-0 w-full h-16" style={{ top: '-4rem', zIndex: 10 }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,60 C0,-80, 90,180, 100,40 L100,100 L0,100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-20">
          <p className="text-xs text-gray-500 tracking-widest uppercase font-inter font-bold">{category}</p>
          <h3 className="text-lg md:text-xl w-full md:w-2/4 font-arpona font-bold text-gray-800 mt-2 mb-3 min-h-12 md:h-16">{title}</h3>
          <p className="text-sm text-gray-600 w-full md:w-3/4 leading-relaxed min-h-20 md:h-24 font-inter font-bold mb-4">{description}</p>
          <a href="#" className="mt-4 text-xs inline-flex items-center gap-2 text-sm font-inter font-bold text-gray-800 hover:underline">
            READ MORE <Image src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 