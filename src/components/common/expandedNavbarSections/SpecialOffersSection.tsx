import React from 'react';
import { ArrowRight } from 'lucide-react';

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
    cta: 'Find the journey for you',
  },
  {
    label: 'EXPLORE LUXURY PROPERTIES',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    cta: 'Explore luxury properties',
  },
];

const SpecialOffersSection: React.FC = () => (
  <div className="flex w-full h-full">
    {/* Left: Featured Offers */}
    <div className="w-2/3 flex flex-col justify-center px-8">
      <h3 className="text-2xl font-arpona font-bold mb-8">Featured Offers</h3>
      <div className="flex flex-col gap-6">
        {offers.map((offer, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <div className="w-40 h-28 rounded-lg overflow-hidden flex-shrink-0 relative">
              <img src={offer.image} alt="Offer" className="w-full h-full object-cover" />
              <img src={offer.logo} alt="Brand Logo" className="absolute bottom-2 left-2 h-8 bg-white/80 px-2 py-1 rounded object-contain shadow" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-arpona font-bold text-gray-900 mb-1">{offer.offer}</div>
              <div className="text-xs text-gray-500 font-inter font-bold">{offer.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Right: Cards and Button */}
    <div className="w-1/3 flex flex-col justify-between gap-6 pl-8">
      <div className="flex flex-col gap-6">
        {rightCards.map((card, idx) => (
          <div key={idx} className="relative h-32 rounded-lg overflow-hidden shadow group cursor-pointer">
            <img src={card.img} alt={card.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <span className="text-white text-md font-arpona font-bold">{card.cta} <ArrowRight className="inline w-5 h-5 ml-2" /></span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full border border-gray-400 py-3 rounded font-inter font-bold text-gray-900 hover:bg-gray-200 transition-all mt-6">ALL OFFERS & PROMOTIONS <ArrowRight className="inline w-4 h-4 ml-2" /></button>
    </div>
  </div>
);

export default SpecialOffersSection; 