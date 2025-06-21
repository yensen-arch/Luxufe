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
  DESTINATIONS: <MapPin className="w-8 h-8 text-white" />,
  EXPERIENCES: <Heart className="w-8 h-8 text-white" />,
  JOURNEYS: <Video className="w-8 h-8 text-white" />,
};

const JourneyCard: React.FC<JourneyCardProps> = ({ category, title, description, imageUrl, link }) => {
  const IconComponent = icons[category] || null;

  return (
    <div className="relative h-[600px] w-full group overflow-hidden cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      <div className="relative p-8 flex items-center text-center flex-col justify-end h-full text-white">
        
        <div className="mb-4">
            {IconComponent}
        </div>
          
        <p className="text-sm font-semibold tracking-wider uppercase">{category}</p>
        <h3 className="text-2xl font-serif mt-2">{title}</h3>

        <div className="transition-all duration-1000 ease-in-out max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-4">
          {description && (
            <p className="text-sm leading-relaxed mb-4">{description}</p>
          )}
          {link && (
            <a href={link.href} className="flex justify-center items-center gap-2 text-sm font-semibold tracking-wider hover:underline">
              {link.text} <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
