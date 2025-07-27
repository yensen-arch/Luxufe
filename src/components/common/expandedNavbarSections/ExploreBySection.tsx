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
  <div className="flex flex-col lg:flex-row w-full h-full">
    {/* Left: Cards */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 overflow-y-auto">
      {cards.map((card) => (
        <div key={card.label} className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden shadow-lg group cursor-pointer">
          <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4 lg:p-6">
            <span className="text-white text-lg sm:text-xl lg:text-2xl font-arpona">{card.label}</span>
            <ArrowRight className="ml-auto text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
          </div>
        </div>
      ))}
    </div>
    {/* Right: Conversation Section */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gray-100 relative px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Team Member"
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover mb-4 sm:mb-6 lg:mb-8"
      />
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-arpona font-bold text-gray-700 mb-3 sm:mb-4 text-center">Prefer a conversation?</h2>
      <p className="text-black text-center text-sm sm:text-base lg:text-md font-inter font-bold mb-6 sm:mb-8 px-2">
        Our team is always available to guide you through the process and ensure your experience is perfectly matched to your preferences.
      </p>
      <div className="w-full space-y-3 sm:space-y-4">
        <button className="w-full border border-gray-400 py-2 sm:py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-xs sm:text-sm">START PLANNING <ArrowRight className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2" /></button>
        <button className="w-full border border-gray-400 py-2 sm:py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-xs sm:text-sm">TRY THE TRIP WIZARD <ArrowRight className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2" /></button>
      </div>
    </div>
  </div>
);

export default ExploreBySection; 