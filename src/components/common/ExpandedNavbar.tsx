import React, { useState } from 'react';
import { X, ArrowRight, Trophy, Heart, Mail, Instagram, Facebook, Globe } from 'lucide-react';
import ExploreBySection from './expandedNavbarSections/ExploreBySection';
import ExperiencesSection from './expandedNavbarSections/ExperiencesSection';
import AboutUsSection from './expandedNavbarSections/AboutUsSection';
import PartnersSection from './expandedNavbarSections/PartnersSection';
import SpecialOffersSection from './expandedNavbarSections/SpecialOffersSection';

interface ExpandedNavbarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Explore by' },
  { label: 'Experiences' },
  { label: 'About Us' },
  { label: 'Partners' },
  { label: 'Special Offers' },
  { label: 'Rewards Program' },
  { label: 'Contact us' },
];

const quickLinks = [
  { icon: <Trophy className="w-4 h-4 mr-2" />, label: 'Become a member' },
  { icon: <Heart className="w-4 h-4 mr-2" />, label: 'Offers & Promotions' },
  { icon: <Mail className="w-4 h-4 mr-2" />, label: 'Subscribe for news' },
];

const socials = [
  { icon: <Instagram className="w-5 h-5" />, href: '#' },
  { icon: <Facebook className="w-5 h-5" />, href: '#' },
  { icon: <Globe className="w-5 h-5" />, href: '#' },
];

const ExpandedNavbar: React.FC<ExpandedNavbarProps> = ({ open, onClose }) => {
  const [selected, setSelected] = useState('Explore by');

  let CenterSection = null;
  if (selected === 'Explore by') CenterSection = <ExploreBySection />;
  else if (selected === 'Experiences') CenterSection = <ExperiencesSection />;
  else if (selected === 'About Us') CenterSection = <AboutUsSection />;
  else if (selected === 'Partners') CenterSection = <PartnersSection />;
  else if (selected === 'Special Offers') CenterSection = <SpecialOffersSection />;
  // Add more as needed

  return (
    <div
      className={`fixed left-0 right-0 transition-all duration-700 ease-in-out transform ${
        open 
          ? 'translate-y-0 opacity-100 pointer-events-auto' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ top: 0, height: '90vh' }}
    >
      <div className="flex flex-col lg:flex-row w-full z-50 mx-auto bg-white shadow-2xl border border-gray-200 h-full overflow-hidden">
        {/* Left nav */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between py-6 lg:py-0 lg:mb-8 lg:mt-12 px-4 sm:px-6 lg:px-10 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 min-h-0 lg:min-h-full">
          <div className="flex-1 flex flex-col justify-start">
            <ul className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-10">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`text-lg sm:text-xl lg:text-3xl font-arpona font-bold transition-colors duration-200 flex items-center justify-between cursor-pointer ${selected === item.label ? 'text-gray-900' : 'text-gray-300'}`}
                  onClick={() => setSelected(item.label)}
                >
                  {item.label}
                  {selected === item.label && <ArrowRight className="ml-2 w-4 h-4 lg:w-6 lg:h-6 flex-shrink-0" />}
                </li>
              ))}
            </ul>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {quickLinks.map((link) => (
                <div key={link.label} className="font-inter font-bold flex items-center text-gray-400 hover:text-gray-600 text-xs sm:text-sm lg:text-sm cursor-pointer">
                  {link.icon}
                  {link.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 sm:gap-4 lg:gap-6 mt-4 lg:mt-0">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="cursor-pointer transition-colors text-[#a8d1cf] hover:text-[#8bc1bf]">{s.icon}</a>
            ))}
          </div>
        </div>
        
        {/* Center section (dynamic) */}
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center px-2 sm:px-4 lg:px-0 h-full overflow-y-auto">
          <div className="w-full h-full">
            {CenterSection}
          </div>
        </div>
        
        <button 
          onClick={onClose} 
          className="cursor-pointer absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-7 lg:right-9 text-gray-500 hover:text-gray-900 z-10 p-1" 
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
        </button>
      </div>
    </div> 
  );
};

export default ExpandedNavbar; 