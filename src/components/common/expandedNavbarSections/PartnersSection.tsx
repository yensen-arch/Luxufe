import React from 'react';

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

const PartnersSection: React.FC = () => (
  <div className="flex w-full h-full">
    <div className="w-full flex flex-col gap-12 justify-center px-8">
      {/* Hotels & Stays */}
      <div>
        <h3 className="text-2xl font-arpona font-bold mb-4">Hotels & Stays</h3>
        <div className="grid grid-cols-4 gap-x-8 gap-y-2">
          {hotels.map((hotel) => (
            <div key={hotel} className="text-lg font-inter text-gray-700 whitespace-nowrap">{hotel}</div>
          ))}
        </div>
      </div>
      {/* Cruise Lines, Airlines, Private Jets */}
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-arpona font-bold mb-2">Cruise Lines</h3>
          <ul className="space-y-1">
            {cruiseLines.map((line) => (
              <li key={line} className="text-lg font-inter text-gray-700">{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-arpona font-bold mb-2">Airlines</h3>
          <ul className="space-y-1">
            {airlines.map((airline) => (
              <li key={airline} className="text-lg font-inter text-gray-700">{airline}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-arpona font-bold mb-2">Private Jets</h3>
          <ul className="space-y-1">
            {privateJets.map((jet) => (
              <li key={jet} className="text-lg font-inter text-gray-700">{jet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PartnersSection; 