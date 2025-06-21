import { ArrowRight, Binoculars, GlassWater, MapPin } from 'lucide-react';
import React from 'react';

const icons: { [key: string]: React.ReactNode } = {
  DESTINATIONS: <MapPin className="h-8 w-8 text-white" />,
  EXPERIENCES: <GlassWater className="h-8 w-8 text-white" />,
  JOURNEYS: <Binoculars className="h-8 w-8 text-white" />,
};

interface JourneyCardProps {
  category: string;
  title: string;
  description?: string;
  imageUrl: string;
  link?: { text: string; href:string };
}

const JourneyCard: React.FC<JourneyCardProps> = ({ category, title, description, imageUrl, link }) => {
  const IconComponent = icons[category];

  if (category === 'JOURNEYS') {
    return (
      <div className="relative h-96 w-full group overflow-hidden bg-gray-900 text-white flex flex-col">
        <div 
          className="h-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-8 flex flex-col flex-grow">
          {IconComponent}
          <p className="mt-4 text-sm font-semibold">{category}</p>
          <h3 className="text-xl font-serif mt-2">{title}</h3>
          {description && <p className="mt-4 text-sm font-light">{description}</p>}
          {link && (
            <a href={link.href} className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold hover:underline">
              {link.text} <ArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-96 w-full group overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white text-left">
        {IconComponent}
        <p className="mt-4 text-sm font-semibold">{category}</p>
        <h3 className="text-2xl font-serif mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default JourneyCard; 