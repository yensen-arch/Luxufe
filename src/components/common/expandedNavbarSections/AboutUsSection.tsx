import React from 'react';
import { ArrowRight, X } from 'lucide-react';

const mainLinks = [
  'About Luxufe',
  'Stories & insights',
  'Loyalty Program',
  'Before you travel with us',
];

const mutedLinks = [
  'Booking terms & conditions',
  'Membership terms & conditions',
];

const rightCards = [
  {
    label: 'FIND THE JOURNEY FOR YOU',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'CHAT TO OUR TEAM',
    img: 'https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=600&q=80',
  },
];

const AboutUsSection: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
    {/* Left: Main links */}
    <div className="w-full lg:w-1/2 bg-white flex flex-col px-4 sm:px-8 lg:pl-12 py-6 sm:py-8 lg:py-12">
      <ul className="space-y-4 sm:space-y-6 lg:space-y-7 mb-6 sm:mb-8 lg:mb-10">
        {mainLinks.map((link) => (
          <li key={link} className="text-lg sm:text-xl lg:text-2xl font-arpona text-gray-900 cursor-pointer hover:text-gray-500">{link}</li>
        ))}
      </ul>
      <ul className="space-y-1 sm:space-y-2">
        {mutedLinks.map((link) => (
          <li key={link} className="text-sm sm:text-base font-inter text-gray-400 hover:text-gray-500 cursor-pointer">{link}</li>
        ))}
      </ul>
    </div>
    {/* Right: Stacked cards */}
    <div className="w-full lg:w-1/2 bg-[#f3f3f5] relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full max-w-[450px] flex-1 justify-center">
        {rightCards.map((card) => (
          <div key={card.label} className="relative h-40 sm:h-48 lg:h-62 overflow-hidden shadow group cursor-pointer flex items-end">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <div className="w-full absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
              <span className="text-white text-xs sm:text-sm font-arpona font-bold flex gap-1 sm:gap-2 mb-3 sm:mb-4 lg:mb-6 ml-3 sm:ml-4 lg:ml-6">{card.label} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutUsSection; 