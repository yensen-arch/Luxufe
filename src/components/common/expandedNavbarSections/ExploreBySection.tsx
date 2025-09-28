import React from 'react';
import Link from 'next/link';

const cards = [
  {
    label: 'Destinations',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    href: '/destinations',
  },
  {
    label: 'Experiences',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    href: '/experience-more',
  },
  {
    label: 'Hotels & Stays',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    href: '/hotels',
  },
];

const ExploreBySection: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full h-full">
    {/* Left: Cards */}
    <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 overflow-y-auto">
      {cards.map((card) => (
        <Link href={card.href} key={card.label} className="relative w-full h-32 sm:h-40 lg:h-48 overflow-hidden shadow-lg group cursor-pointer">
          <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4 lg:p-6">
            <span className="text-white text-lg sm:text-xl lg:text-2xl font-arpona">{card.label}</span>
            <img src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" className="ml-auto text-white w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex-shrink-0" />
          </div>
        </Link>
      ))}
    </div>
    {/* Right: Conversation Section - hidden on mobile for cleaner look */}
    <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center bg-gray-200 relative px-12 py-12">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Team Member"
        className="w-28 h-28 rounded-full object-cover mb-8"
      />
      <h2 className="text-3xl font-arpona font-bold text-gray-700 mb-4 text-center">Prefer a conversation?</h2>
      <p className="text-black text-center text-md font-inter font-bold mb-8">
        Our team is always available to guide you through the process and ensure your experience is perfectly matched to your preferences.
      </p>
      <div className="w-full space-y-4">
        <button className="w-full border border-gray-400 py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-sm">START PLANNING <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="inline w-4 h-4 ml-2" /></button>
        <button className="w-full border border-gray-400 py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all text-sm">TRY THE TRIP WIZARD <img src="/luxufe-icon-button-arrow-dark.svg" alt="Arrow right" className="inline w-4 h-4 ml-2" /></button>
      </div>
    </div>
  </div>
);

export default ExploreBySection; 