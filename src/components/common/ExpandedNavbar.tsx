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
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center items-center ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ top: 0, height: '80vh' }}
    >
      <div className="flex w-full mx-auto bg-white rounded-lg shadow-2xl border border-gray-200" style={{ height: '80vh' }}>
        {/* Left nav */}
        <div className="w-1/4 flex flex-col justify-between border-r border-gray-200 py-16 px-12 bg-white">
          <div>
            <ul className="space-y-6 mb-10">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`text-3xl font-arpona font-bold transition-colors duration-200 flex items-center cursor-pointer ${selected === item.label ? 'text-gray-900' : 'text-gray-300'}`}
                  onClick={() => setSelected(item.label)}
                >
                  {item.label}
                  {selected === item.label && <ArrowRight className="ml-2 w-6 h-6" />}
                </li>
              ))}
            </ul>
            <div className="space-y-3 mb-10">
              {quickLinks.map((link) => (
                <div key={link.label} className="flex items-center text-gray-400 text-lg font-inter font-bold">
                  {link.icon}
                  {link.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6 mt-8">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="text-gray-400 hover:text-gray-900 transition-colors">{s.icon}</a>
            ))}
          </div>
        </div>
        {/* Center section (dynamic) */}
        <div className="w-2/4 flex flex-col justify-center items-center gap-8 py-16 px-12">
          {CenterSection}
        </div>
        {/* Right conversation */}
        <div className="w-1/4 flex flex-col items-center justify-center bg-gray-100 relative px-12">
          <button onClick={onClose} className="absolute top-10 right-10 text-gray-500 hover:text-gray-900" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Team Member"
            className="w-28 h-28 rounded-full object-cover mb-8"
          />
          <h2 className="text-3xl font-arpona font-bold text-gray-900 mb-4 text-center">Prefer a conversation?</h2>
          <p className="text-gray-700 text-center font-inter font-bold mb-8">
            Our team is always available to guide you through the process and ensure your experience is perfectly matched to your preferences.
          </p>
          <button className="w-full border border-gray-400 py-3 mb-4 rounded font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all">START PLANNING <ArrowRight className="inline w-4 h-4 ml-2" /></button>
          <button className="w-full border border-gray-400 py-3 rounded font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all">TRY THE TRIP WIZARD <ArrowRight className="inline w-4 h-4 ml-2" /></button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedNavbar; 