import React from 'react';
import { ArrowRight, X } from 'lucide-react';

const offers = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Marriott_logo.svg',
    offer: 'Save up to 45% plus complimentary half board at JW Marriott, Mauritius',
    date: 'Book by: 30 September 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Four_Seasons_logo.svg',
    offer: 'Save up to 30% off at the Four Seasons Resort Marrakech, Morocco',
    date: 'Book by: 30 September 2025',
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Belmond_logo.svg',
    offer: 'Save up to 45% plus complimentary half board at JW Marriott, Mauritius',
    date: 'Book by: 30 September 2025',
  },
];

const rightCards = [
  {
    label: 'FIND THE JOURNEY FOR YOU',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'EXPLORE LUXURY PROPERTIES',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
];

const SpecialOffersSection: React.FC = () => (
  <div className="flex w-full h-full min-h-[600px]">
    {/* Left: Featured Offers */}
    <div className="w-1/2 bg-white flex flex-col justify-center px-12 py-12">
      <h3 className="text-2xl font-arpona text-gray-900 mb-8">Featured Offers</h3>
      <div className="flex flex-col gap-8">
        {offers.map((offer, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <div className="w-48 h-32 overflow-hidden flex-shrink-0 relative">
              <img src={offer.image} alt="Offer" className="w-full h-full object-cover" />
              <img src={offer.logo} alt="Brand Logo" className="absolute bottom-2 left-2 h-8 bg-white/80 px-2 py-1 object-contain shadow" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-arpona text-gray-900 mb-1 leading-snug">{offer.offer}</div>
              <div className="text-xs text-gray-500 font-inter font-bold mt-2">{offer.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Right: Cards and Button */}
    <div className="w-1/2 bg-[#f3f3f5] relative flex flex-col justify-center items-center px-8 py-10">
      <div className="flex flex-col gap-6 w-full flex-1 justify-center">
        {rightCards.map((card) => (
          <div key={card.label} className="relative h-52 overflow-hidden shadow group cursor-pointer flex items-end">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0" />
            <div className="w-full absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center">
              <span className="text-white text-sm font-arpona font-bold flex gap-2 mb-6 ml-6">{card.label} <ArrowRight className="w-6 h-6" /></span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full border border-gray-400 py-3 font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all mt-10 flex items-center justify-center gap-2 text-xs bg-transparent">
        ALL OFFERS & PROMOTIONS <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default SpecialOffersSection; 