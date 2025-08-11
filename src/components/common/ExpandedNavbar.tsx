import React, { useState } from 'react';
import { Heart, Mail, Instagram, Facebook, Globe, ChevronDown } from 'lucide-react';
import ExploreBySection from './expandedNavbarSections/ExploreBySection';
import ExperiencesSection from './expandedNavbarSections/ExperiencesSection';
import AboutUsSection from './expandedNavbarSections/AboutUsSection';
import PartnersSection from './expandedNavbarSections/PartnersSection';
import SpecialOffersSection from './expandedNavbarSections/SpecialOffersSection';
import Link from 'next/link';


interface ExpandedNavbarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Explore by' },
  { label: 'Journeys' },
  { label: 'About Us' },
  { label: 'Partners' },
  { label: 'Special Offers' },
  { label: 'Rewards Program' },
  { label: 'Contact us' },
];

const quickLinks = [
  { icon: <img src="/luxufe-icon-metro-trophy.svg" alt="Trophy" className="w-4 h-4 mr-2" />, label: 'Become a member', href: '/eleve' },
  { icon: <img src="/luxufe-icon-ionic-ios-heart.svg" alt="Heart" className="w-4 h-4 mr-2" />, label: 'Offers & Promotions', href: '/offers' },
  { icon: <img src="/luxufe-icon-ionic-md-mail.svg" alt="Mail" className="w-4 h-4 mr-2" />, label: 'Subscribe for news', href: '/newsletter' },
];

const socials = [
  { icon: <img src="/Icon simple-instagram.svg" alt="Instagram" className="w-5 h-5" />, href: '#' },
  { icon: <img src="/Icon awesome-facebook-f.svg" alt="Facebook" className="w-5 h-5" />, href: '#' },
  { icon: <img src="/Icon awesome-tripadvisor.svg" alt="Tripadvisor" className="w-5 h-5" />, href: '#' },
  { icon: <img src="/Icon ionic-logo-google.svg" alt="Google" className="w-5 h-5" />, href: '#' }, // Google icon - using Globe as placeholder
];

const ExpandedNavbar: React.FC<ExpandedNavbarProps> = ({ open, onClose }) => {
  const [selected, setSelected] = useState('Explore by');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let CenterSection = null;
  if (selected === 'Explore by') CenterSection = <ExploreBySection />;
  else if (selected === 'Journeys') CenterSection = <ExperiencesSection />;
  else if (selected === 'About Us') CenterSection = <AboutUsSection />;
  else if (selected === 'Partners') CenterSection = <PartnersSection />;
  else if (selected === 'Special Offers') CenterSection = <SpecialOffersSection />;
  // Add more as needed

  return (
    <div
      className={`fixed left-0 right-0 transition-all duration-700 ease-in-out transform h-screen lg:h-[90vh] ${
        open 
          ? 'translate-y-0 pointer-events-auto' 
          : '-translate-y-full pointer-events-none'
      }`}
      style={{ top: 0 }}
    >
      <div className="flex flex-col lg:flex-row w-full z-50 mx-auto bg-white shadow-2xl border border-gray-200 h-full overflow-hidden">
        {/* Mobile Header - Only visible on mobile */}
        <div className="lg:hidden flex items-center z-50 justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-arpona font-bold text-gray-900">Menu</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors" 
            aria-label="Close"
          >
            <img src="/luxufe-icon-close-dark.svg" alt="Close icon" className="w-6 h-6" />
          </button>
        </div>

        {/* Left nav */}
        <div className="w-full lg:w-1/4 flex flex-col justify-between py-6 lg:py-0 lg:mb-8 lg:mt-12 px-4 sm:px-6 lg:px-10 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-gray-200 min-h-0 ">
          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200"
            >
              <span className="text-lg font-arpona font-bold text-gray-900">{selected}</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Dropdown Menu */}
            <div className={`mt-2 bg-white border border-gray-200 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="py-2">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className={`px-4 py-3 text-base font-arpona font-bold transition-colors duration-200 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                      selected === item.label 
                        ? 'text-gray-900 bg-gray-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setSelected(item.label);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              
              {/* Quick Links in Dropdown - Only visible when dropdown is open */}
              <div className={`px-4 py-4 border-t border-gray-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="space-y-3 mb-4">
                  {quickLinks.map((link) => (
                    <div key={link.label} className="font-inter font-bold flex items-center text-gray-600 hover:text-gray-900 text-sm cursor-pointer p-2 hover:bg-gray-50 transition-colors rounded-lg">
                      {link.icon}
                      <Link href={link.href}>{link.label}</Link>
                    </div>
                  ))}
                </div>
                
                {/* Social Links in Dropdown */}
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-200">
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} className="cursor-pointer transition-colors text-[#a8d1cf] hover:text-[#8bc1bf] p-2 bg-gray-50 rounded-full hover:bg-gray-100">{s.icon}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 flex-col justify-start">
            <ul className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-10">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`text-lg sm:text-xl lg:text-3xl font-arpona font-bold transition-colors duration-200 flex items-center justify-between cursor-pointer ${selected === item.label ? 'text-gray-900' : 'text-gray-400'}`}
                  onClick={() => setSelected(item.label)}
                >
                  {item.label}
                  {selected === item.label && <img src="/luxufe-icon-simple-arrow-dark.svg" alt="Arrow right" className="ml-2 w-4 h-4 lg:w-4 lg:h-4 flex-shrink-0" />}
                </li>
              ))}
            </ul>
            {/* Quick links - hidden on mobile for cleaner look */}
            <div className="hidden lg:block space-y-4 mb-4">
              {quickLinks.map((link) => (
                <div key={link.label} className="font-inter font-bold flex items-center text-gray-400 hover:text-gray-600 text-sm cursor-pointer">
                  {link.icon}
                  <Link href={link.href}>{link.label}</Link>
                </div>
              ))}
            </div>
            {/* Social links - hidden on mobile for cleaner look */}
            <div className="hidden lg:flex gap-0 mt-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="cursor-pointer transition-colors text-[#a8d1cf] hover:text-[#8bc1bf] p-1">{s.icon}</a>
              ))}
            </div>
          </div>


        </div>
        
        {/* Center section (dynamic) */}
        <div className={`w-full lg:w-3/4 flex flex-col justify-center items-center px-2 sm:px-4 lg:px-0 h-full overflow-y-auto ${mobileMenuOpen ? 'lg:flex hidden' : 'flex'}`}>
          <div className="w-full h-full">
            {CenterSection}
          </div>
        </div>
        
        {/* Desktop Close Button - Hidden on mobile */}
        <button 
          onClick={onClose} 
          className="hidden lg:block cursor-pointer absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-7 lg:right-9 text-gray-500 hover:text-gray-900 z-10 p-1" 
          aria-label="Close"
        >
            <img src="/luxufe-icon-close-dark.svg" alt="Close icon" className="w-6 h-6" />
        </button>
      </div>
    </div> 
  );
};

export default ExpandedNavbar; 