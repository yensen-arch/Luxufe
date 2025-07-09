import React from 'react';
import { X } from 'lucide-react';

const hotels = [
  'The Ritz-Carlton', 'Four Seasons Hotels and Resorts', 'St. Regis', 'Mandarin Oriental', 'Aman Resorts', 'The Red Carnation Hotel Collection', 'Waldorf Astoria',
  'Rosewood Hotels & Resorts', 'Belmond', 'Waldorf Astoria Hotels & Resorts', 'Jumeirah Hotels & Resorts', 'Sofitel Luxury Hotels', 'The Langham Hotels and Resorts', 'Kimpton Hotels',
  'InterContinental Hotels & Resorts', 'Hyatt Regency', 'The Luxury Collection', 'Occidental Hotels & Resorts', 'Fairmont Hotels & Resorts', 'Banyan Tree Hotels & Resorts', 'Casa Tua Hotel',
  'Shangri-La Hotels and Resorts', 'Bvlgari Hotels & Resorts', 'Park Hyatt', 'Le Meridien', 'The Leading Hotels of the World', 'SLS Hotels', 'Six Senses Hotels Resorts Spas',
];

const cruiseLines = [
  'Regent Seven Seas Cruises', 'Silversea Cruises', 'Seabourn Cruise Line', 'Ritz-Carlton Yacht Collection', 'Crystal Cruises', 'SeaDream Yacht Club', 'Aqua Expeditions',
];

const airlines = [
  'Emirates', 'Singapore Airlines', 'Qatar Airways', 'British Airways', 'Lufthansa', 'Cathay Pacific', 'Etihad Airways',
];

const privateJets = [
  'Four Seasons Private Jet', 'Aman Jet Expeditions', 'Diamond Jetsetter Experience', 'Belmond Private Jet Journeys', 'Rosewood Elite Escapes', 'Orient Express – La Dolce Vita Jet Experience', 'Peninsula Journey by Private Jet',
];

// Split hotels into 5 columns for even distribution
const hotelColumns = Array.from({ length: 5 }, (_, i) => hotels.filter((_, idx) => idx % 5 === i));

const PartnersSection: React.FC = () => (
  <div className="relative w-full h-full min-h-[700px] bg-white px-12 pt-12 pb-8">
    {/* Hotels & Stays */}
    <div className="mb-16">
      <h3 className="text-2xl font-arpona font-semibold text-gray-900 mb-8">Hotels & Stays</h3>
      <div className="grid grid-cols-5 gap-x-10">
        {hotelColumns.map((col, i) => (
          <ul key={i} className="space-y-3">
            {col.map((hotel) => (
              <li key={hotel} className="text-xs font-inter text-gray-500 whitespace-nowrap hover:text-gray-900 transition-colors duration-200 cursor-pointer">{hotel}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
    {/* Cruise Lines, Airlines, Private Jets */}
    <div className="grid grid-cols-3 gap-x-16">
      <div>
        <h3 className="text-2xl font-arpona font-semibold text-gray-900 mb-4">Cruise Lines</h3>
        <ul className="space-y-3">
          {cruiseLines.map((line) => (
            <li key={line} className="text-xs font-inter text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer">{line}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-arpona font-semibold text-gray-900 mb-4">Airlines</h3>
        <ul className="space-y-3">
          {airlines.map((airline) => (
            <li key={airline} className="text-xs font-inter text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer">{airline}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-arpona font-semibold text-gray-900 mb-4">Private Jets</h3>
        <ul className="space-y-3">
          {privateJets.map((jet) => (
            <li key={jet} className="text-xs font-inter text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer">{jet}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PartnersSection; 