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
  <div className="flex w-full h-full min-h-[600px]">
    {/* Left: Main links */}
    <div className="w-1/2 bg-white flex flex-col pl-12 py-12">
      <ul className="space-y-7 mb-10">
        {mainLinks.map((link) => (
          <li key={link} className="text-2xl font-arpona text-gray-900 cursor-pointer hover:text-gray-500">{link}</li>
        ))}
      </ul>
      <ul className="space-y-2">
        {mutedLinks.map((link) => (
          <li key={link} className="text-base font-inter text-gray-400 hover:text-gray-500 cursor-pointer">{link}</li>
        ))}
      </ul>
    </div>
    {/* Right: Stacked cards */}
    <div className="w-1/2 bg-[#f3f3f5] relative flex flex-col justify-center items-center px-8">
      <div className="flex flex-col gap-8 w-full max-w-[450px] flex-1 justify-center">
        {rightCards.map((card) => (
          <div key={card.label} className="relative h-62 overflow-hidden shadow group cursor-pointer flex items-end">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <div className="w-full absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
              <span className=" text-white text-sm font-arpona font-bold flex gap-2 mb-6 ml-6">{card.label} <ArrowRight className="w-6 h-6" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutUsSection; 