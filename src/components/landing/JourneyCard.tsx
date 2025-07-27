import React from 'react';
import { ArrowRight, MapPin, Heart, Video } from 'lucide-react';

interface JourneyCardProps {
  category: string;
  title: string;
  description?: string;
  imageUrl: string;
  link?: { text: string; href: string };
}

const icons: { [key: string]: React.ReactNode } = {
  DESTINATIONS: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />,
  EXPERIENCES: <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />,
  JOURNEYS: <Video className="w-6 h-6 md:w-8 md:h-8 text-white" />,
};

const JourneyCard: React.FC<JourneyCardProps> = ({ category, title, description, imageUrl, link }) => {
  const IconComponent = icons[category] || null;

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full group overflow-hidden cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500  group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      <div className="relative p-4 md:p-6 lg:p-8 flex items-center text-center flex-col justify-end h-full text-white">
        
        <div className="mb-2 md:mb-4">
            {IconComponent}
        </div>
          
        <p className="text-xs md:text-sm font-semibold tracking-wider uppercase font-inter font-bold">{category}</p>
        <h3 className="text-lg md:text-xl lg:text-2xl font-arpona mt-1 md:mt-2">{title}</h3>

        <div className="transition-all duration-1000 max-h-0 opacity-0 group-hover:max-h-32 md:group-hover:max-h-40 lg:group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-2 md:group-hover:mt-3 lg:group-hover:mt-4">
          {description && (
            <p className="text-xs md:text-sm leading-relaxed mb-2 md:mb-3 lg:mb-4 font-inter font-bold">{description}</p>
          )}
          {link && (
            <a href={link.href} className="font-inter font-bold flex justify-center items-center gap-1 md:gap-2 text-xs md:text-sm font-semibold tracking-wider hover:underline">
              {link.text} <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
