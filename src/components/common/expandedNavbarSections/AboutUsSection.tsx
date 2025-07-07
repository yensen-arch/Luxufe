import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  <div className="flex w-full h-full">
    {/* Main links */}
    <div className="w-2/3 flex flex-col justify-center pl-4">
      <ul className="space-y-6 mb-8">
        {mainLinks.map((link) => (
          <li key={link} className="text-2xl font-arpona font-bold text-gray-900 cursor-pointer hover:underline">{link}</li>
        ))}
      </ul>
      <ul className="space-y-2">
        {mutedLinks.map((link) => (
          <li key={link} className="text-lg font-inter text-gray-300 cursor-not-allowed">{link}</li>
        ))}
      </ul>
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
    </div>
  </div>
);

export default AboutUsSection; 