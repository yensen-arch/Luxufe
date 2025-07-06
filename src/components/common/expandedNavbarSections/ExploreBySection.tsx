import React from 'react';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    label: 'Destinations',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Experiences',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Hotels & Stays',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
  },
];

const ExploreBySection: React.FC = () => (
  <>
    {cards.map((card) => (
      <div key={card.label} className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
        <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/30 flex items-end p-6">
          <span className="text-white text-2xl font-arpona font-bold">{card.label}</span>
          <ArrowRight className="ml-auto text-white w-7 h-7" />
        </div>
      </div>
    ))}
  </>
);

export default ExploreBySection; 