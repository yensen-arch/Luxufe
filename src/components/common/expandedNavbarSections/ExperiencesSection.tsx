import React from 'react';
import { ArrowRight, X } from 'lucide-react';

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
  <div className="flex w-full h-full min-h-[600px]">
    {/* Left: Experiences grid */}
    <div className="w-1/2 bg-white flex items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-4 w-full max-w-[480px] px-6">
        {experiences.map((exp) => (
          <div key={exp.label} className="flex flex-col items-center cursor-pointer group">
            <div className="w-[200px] h-[130px] overflow-hidden shadow">
              <img src={exp.img} alt={exp.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="mt-4 text-gray-900 text-md font-arpona font-bold text-center">{exp.label}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Right: Stacked cards and button */}
    <div className="w-1/2 bg-[#f3f3f5] relative flex flex-col justify-center items-center px-8 py-10">
      <div className="flex flex-col gap-8 w-full max-w-[420px] flex-1 justify-center">
        {rightCards.map((card) => (
          <div key={card.label} className="relative h-52 overflow-hidden shadow group cursor-pointer flex items-center">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
              <span className="text-white text-sm font-arpona font-bold flex items-center gap-2 mt-auto mb-4">{card.label} <ArrowRight className="w-6 h-6" /></span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full max-w-[420px] border border-gray-400 py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all mt-10 flex items-center justify-center gap-2 text-xs">
        ALL LUXUFE JOURNEYS <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default ExperiencesSection; 