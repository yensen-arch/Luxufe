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
  <div className="flex w-full h-full">
    {/* Left: Cards */}
    <div className="w-1/2 flex flex-col gap-8 px-8 py-12">
      {cards.map((card) => (
        <div key={card.label} className="relative w-full h-48 overflow-hidden shadow-lg group cursor-pointer">
          <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-6">
            <span className="text-white text-2xl font-arpona">{card.label}</span>
            <ArrowRight className="ml-auto text-white w-7 h-7" />
          </div>
        </div>
      ))}
    </div>
    {/* Right: Conversation Section */}
    <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 relative px-12">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Team Member"
        className="w-28 h-28 rounded-full object-cover mb-8"
      />
      <h2 className="text-3xl font-arpona font-bold text-gray-700 mb-4 text-center">Prefer a conversation?</h2>
      <p className="text-black text-center text-md font-inter font-bold mb-8">
        Our team is always available to guide you through the process and ensure your experience is perfectly matched to your preferences.
      </p>
      <button className="w-full border border-gray-400 py-3 mb-4  font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-xs">START PLANNING <ArrowRight className="inline w-4 h-4 ml-2" /></button>
      <button className="w-full border border-gray-400 py-3  font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-xs">TRY THE TRIP WIZARD <ArrowRight className="inline w-4 h-4 ml-2" /></button>
    </div>
  </div>
);

export default ExploreBySection; 