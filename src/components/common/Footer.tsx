import { ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const galleryImages = [
    'https://picsum.photos/seed/footer1/400/300',
    'https://picsum.photos/seed/footer2/400/300',
    'https://picsum.photos/seed/footer3/400/300',
    'https://picsum.photos/seed/footer4/400/300',
    'https://picsum.photos/seed/footer5/400/300',
];

const mainLinks = {
    EXPLORE: [
        { text: 'Journeys & Itineraries', href: '#' },
        { text: 'Hotels', href: '#' },
        { text: 'Destinations', href: '#' },
        { text: 'Experiences', href: '#' },
        { text: 'Travel Partners', href: '#' },
        { text: 'Tailored Travel', href: '#' },
    ],
    ABOUT: [
        { text: 'About Rewards Program', href: '#' },
        { text: 'About Luxufe', href: '/about' },
        { text: 'Before you travel', href: '#' },
        { text: 'Offers & Promotions', href: '#' },
        { text: 'Find the journey for you', href: '#' },
        { text: 'Travel Journal / Blog', href: '#' },
    ],
    CONTACT: [
        { text: 'Submit an enquiry', href: '#' },
        { text: 'Book a call', href: '#' },
        { text: 'Email us: info@luxufe.com', href: '#' },
        { text: 'Call us: +12 34 567 8900', href: '#' },
        { text: 'Subscribe to news', href: '#' },
    ],
};

const megaLinks = {
    Destinations: ['Africa', 'Alaska', 'Antarctica', 'Galapagos Islands', 'India and the Subcontinent', 'Mediterranean Sea', 'Northern Europe & British Isles'],
    Cruises: ['Adventure/Exploration Cruises', 'Barge Cruises', 'Family Small Ship Cruises', 'Ocean Cruises', 'Polar Cruises', 'Rails to River Cruise', 'River Cruises'],
    Airlines: ['Emirates', 'Singapore Airlines', 'Qatar Airways', 'British Airways', 'Lufthansa', 'Cathay Pacific', 'Etihad Airways'],
    Jets: ['NetJets', 'Flexjet', 'Sentient Jet', 'Wheels Up', 'VistaJet', 'PrivateFly', 'Skyjet'],
};

const brands = [
    'The Ritz-Carlton', 'Four Seasons Hotels and Resorts', 'St. Regis', 'Mandarin Oriental', 'Aman Resorts', 'The Red Carnation Hotel Collection', 'Waldorf Astoria',
    'Rosewood Hotels & Resorts', 'Belmond', 'Waldorf Astoria Hotels & Resorts', 'Jumeirah Hotels & Resorts', 'Sofitel Luxury Hotels', 'The Langham Hotels and Resorts', 'Kimpton Hotels',
    'InterContinental Hotels & Resorts', 'Hyatt Regency', 'The Luxury Collection', 'Occidental Hotels & Resorts', 'Fairmont Hotels & Resorts', 'Banyan Tree Hotels & Resorts', 'Casa Tua Hotel',
    'Shangri-La Hotels and Resorts', 'Bvlgari Hotels & Resorts', 'Park Hyatt', 'Le Meridien', 'The Leading Hotels of the World', 'SLS Hotels', 'Six Senses Hotels Resorts Spas',
    'Ritz Paris', 'The Savoy', 'COMO Hotels and Resorts', 'Capella Hotels and Resorts', 'Thompson Hotels', 'Ace Hotel', 'The NoMad Hotel',
];

export default function Footer() {
    return (
        <footer className="bg-[#1a233a] text-white">
            <div className="grid grid-cols-5">
                {galleryImages.map((src, i) => (
                    <img key={i} src={src} alt={`Gallery image ${i + 1}`} className="my-12 px-2 w-full h-60 object-cover" />
                ))}
            </div>
            <div className="container mx-auto px-8 pt-20 pb-16">
                {/* Main Footer Section */}
                <div className="grid lg:grid-cols-6 gap-16">
                    <div className="lg:col-span-3">
                        <Image src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" alt="Luxufe" width={250} height={250} />
                        <p className="text-3xl font-arpona font-bold mt-8">
                            Seamless luxury travel, tailored to you -<br/>effortless, personal, <span className="font-bellarina text-6xl font-medium">unforgettable.</span>
                        </p>
                        <div className="flex gap-4 mt-8">
                            <Link target='_blank' href="#" className="border border-white/30 rounded-full p-2 hover:bg-white/10"><Instagram className="h-5 w-5" /></Link>
                            <Link target='_blank' href="#" className="border border-white/30 rounded-full p-2 hover:bg-white/10"><Facebook className="h-5 w-5" /></Link>
                            <Link target='_blank' href="#" className="border border-white/30 rounded-full p-2 hover:bg-white/10"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-3 gap-8">
                        {Object.entries(mainLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-semibold tracking-widest mb-4 font-arpona font-bold">{title}</h3>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                        <li key={link.text}><a href={link.href} className="text-white transition-colors hover:text-gray-300">{link.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mega Links Section */}
                <div className="border-y border-white/70 my-16 py-16">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {Object.entries(megaLinks).map(([title, links]) => (
                             <div key={title}>
                                <h3 className="font-bold text-xl mb-6 font-arpona font-bold">{title}</h3>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                       <li key={link}><Link href="#" className="text-gray-400 hover:text-white transition-colors">{link}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                     <h3 className="font-bold text-xl mb-6">Brands & Partners</h3>
                     <div className="grid md:grid-cols-4 gap-x-8 gap-y-3">
                        {brands.map(brand => (
                             <Link key={brand} href='#' className="text-gray-400 hover:text-white transition-colors font-inter font-bold">{brand}</Link>
                        ))}
                     </div>
                </div>

                {/* Sub-Footer */}
                <div className="text-center ">
                    <div className="grid grid-cols-8 gap-4 mb-8">
                        {[...Array(8)].map((_, i) => (
                           <div key={i} className="h-20 bg-white/5 rounded"></div>
                        ))}
                    </div>
                    <div className="border-t border-white/70 pt-8 font-inter font-bold flex flex-wrap justify-between items-center text-sm">
                        <p>&copy; COPYRIGHT. ALL RIGHTS RESERVED. LUXUFE 2025</p>
                        <div className="flex gap-6">
                            <Link  href="#" className="hover:text-white">PRIVACY POLICY</Link>
                            <Link href="#" className="hover:text-white">TERMS OF USE</Link>
                            <Link href="#" className="hover:text-white">RESERVATION TERMS</Link>
                            <Link href="#" className="hover:text-white">REWARDS PROGRAM TERMS</Link>
                            <Link href="#" className="hover:text-white">SITE CREDITS</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
} 