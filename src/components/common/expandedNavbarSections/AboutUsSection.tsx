import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const mainLinks = [
  { label: 'About Luxufe', href: '/about' },
  { label: 'Stories & insights', href: '/stories-and-insights' },
  { label: 'Loyalty Program', href: '/eleve' },
  { label: 'Before you travel with us', href: '/before-you-travel' },
];

const mutedLinks = [
  { label: 'Booking terms & conditions', href: '/booking-terms' },
  { label: 'Membership terms & conditions', href: '/membership-terms' },
];

const rightCards = [
  {
    label: 'FIND THE JOURNEY FOR YOU',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    href: '#',
  },
  {
    label: 'CHAT WITH OUR TEAM',
    img: 'https://images.unsplash.com/photo-1514361892635-cebb9b6c7ca5?auto=format&fit=crop&w=600&q=80',
    href: '#',
  },
];

const AboutUsSection: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
    {/* Left: Main links */}
    <div className="w-full lg:w-1/2 bg-white flex flex-col px-4 sm:px-8 lg:pl-12 py-6 sm:py-8 lg:py-12">
      <ul className="space-y-4 sm:space-y-6 lg:space-y-7 mb-6 sm:mb-8 lg:mb-10">
        {mainLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-lg sm:text-xl lg:text-2xl font-arpona text-gray-900 cursor-pointer hover:text-gray-500">{link.label}</Link>
          </li>
        ))}
      </ul>
      <ul className="space-y-1 sm:space-y-2">
        {mutedLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm font-inter text-gray-400 hover:text-gray-500 cursor-pointer">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
    {/* Right: Stacked cards - hidden on mobile for cleaner look */}
    <div className="hidden lg:flex w-full lg:w-1/2 bg-gray-200 relative flex-col justify-center items-center px-8">
      <div className="flex flex-col gap-8 w-full max-w-[450px] flex-1 justify-center">
        {rightCards.map((card) => (
          <Link href={'#'} key={card.label} className="relative h-62 overflow-hidden shadow group cursor-pointer flex items-end">
            <Image src={card.img} alt={card.label} width={120} height={80} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <Image src={card.img} alt={card.label} width={120} height={80} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <div className="w-full absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
              <span className="text-white text-sm font-arpona font-bold flex gap-2 mb-6 ml-6">{card.label} <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" width={28} height={28} /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default AboutUsSection; 