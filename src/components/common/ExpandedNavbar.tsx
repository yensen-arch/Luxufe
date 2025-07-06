import React from 'react';
import { X, ArrowRight, Trophy, Heart, Mail, Instagram, Facebook, Globe } from 'lucide-react';

interface ExpandedNavbarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Explore by', active: true },
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

const ExpandedNavbar: React.FC<ExpandedNavbarProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-white flex`}
      style={{ minHeight: '100vh' }}
    >
      {/* Left nav */}
      <div className="w-1/4 flex flex-col justify-between border-r border-gray-200 py-16 px-12 bg-white">
        <div>
          <ul className="space-y-6 mb-10">
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`text-3xl font-arpona font-bold transition-colors duration-200 ${item.active ? 'text-gray-900' : 'text-gray-300'} flex items-center`}
              >
                {item.label}
                {item.active && <ArrowRight className="ml-2 w-6 h-6" />}
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
      {/* Center cards */}
      <div className="w-2/4 flex flex-col justify-center items-center gap-8 py-16 px-12">
        {cards.map((card) => (
          <div key={card.label} className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <span className="text-white text-2xl font-arpona font-bold">{card.label}</span>
              <ArrowRight className="ml-auto text-white w-7 h-7" />
            </div>
          </div>
        ))}
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
  );
};

export default ExpandedNavbar; 