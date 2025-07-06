import React from 'react';
import { ArrowRight } from 'lucide-react';

const experiences = [
  { label: 'Luxury Cruises', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { label: 'Jet Travel', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80' },
  { label: 'Luxury Safaris', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80' },
  { label: 'Exclusive Voyages', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80' },
  { label: 'Private Travel', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80' },
  { label: 'Train Journeys', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
];

const rightCards = [
  {
    label: 'TAILOR MADE EXPERIENCES',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'FIND THE JOURNEY FOR YOU',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
];

const ExperiencesSection: React.FC = () => (
  <div className="flex w-full h-full">
    {/* Experiences grid */}
    <div className="w-2/3 grid grid-cols-2 gap-6 pr-8">
      {experiences.map((exp) => (
        <div key={exp.label} className="relative h-36 rounded-lg overflow-hidden shadow group cursor-pointer">
          <img src={exp.img} alt={exp.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/20 flex items-end p-4">
            <span className="text-white text-lg font-arpona font-bold">{exp.label}</span>
          </div>
        </div>
      ))}
    </div>
    {/* Right stacked cards */}
    <div className="w-1/3 flex flex-col gap-6 justify-between">
      {rightCards.map((card) => (
        <div key={card.label} className="relative h-32 rounded-lg overflow-hidden shadow group cursor-pointer">
          <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-4">
            <span className="text-white text-md font-arpona font-bold">{card.label} <ArrowRight className="inline w-5 h-5 ml-2" /></span>
          </div>
        </div>
      ))}
      <button className="w-full border border-gray-400 py-3 rounded font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all mt-2">ALL LUXUFE JOURNEYS <ArrowRight className="inline w-4 h-4 ml-2" /></button>
    </div>
  </div>
);

export default ExperiencesSection; 