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
      <div className="flex flex-col md:flex-row w-full z-50 mx-auto bg-white shadow-2xl border border-gray-200 h-full">
        {/* Left nav */}
        <div className="w-full md:w-1/4 flex flex-col justify-between mb-8 mt-12 px-4 md:px-10 bg-white border-b-2 md:border-b-0 md:border-r-2 border-gray-200">
          <div>
            <ul className="space-y-4 md:space-y-6 mb-6 md:mb-10">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`text-xl md:text-3xl font-arpona font-bold transition-colors duration-200 flex items-center justify-between cursor-pointer ${selected === item.label ? 'text-gray-900' : 'text-gray-300'}`}
                  onClick={() => setSelected(item.label)}
                >
                  {item.label}
                  {selected === item.label && <ArrowRight className="ml-2 w-4 h-4 md:w-6 md:h-6" />}
                </li>
              ))}
            </ul>
            <div className="space-y-3 md:space-y-4">
              {quickLinks.map((link) => (
                <div key={link.label} className="font-inter font-bold flex items-center text-gray-400 hover:text-gray-600 text-xs md:text-sm cursor-pointer">
                  {link.icon}
                  {link.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 md:gap-6 mb-4 md:mb-0">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="cursor-pointer transition-colors text-[#a8d1cf]">{s.icon}</a>
            ))}
          </div>
        </div>
        
        {/* Center section (dynamic) */}
        <div className="w-full md:w-3/4 flex flex-col justify-center items-center px-4 md:px-0">
          {CenterSection}
        </div>
        
        <button 
          onClick={onClose} 
          className="cursor-pointer absolute top-4 right-4 md:top-7 md:right-9 text-gray-500 hover:text-gray-900 z-10" 
          aria-label="Close"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </div> 
  );
};

export default ExpandedNavbar; 