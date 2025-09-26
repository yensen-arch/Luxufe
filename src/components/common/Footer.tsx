import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { brandNameToSlug } from '@/lib/utils';
import { getBrands } from '@/lib/database';

const galleryImages = [
    'https://picsum.photos/seed/footer1/400/300',
    'https://picsum.photos/seed/footer2/400/300',
    'https://picsum.photos/seed/footer3/400/300',
    'https://picsum.photos/seed/footer4/400/300',
    'https://picsum.photos/seed/footer5/400/300',
];

const mainLinks = {
    EXPLORE: [
        { text: 'Journeys & Itineraries', href: '/journeys' },
        { text: 'Hotels', href: '/hotels' },
        { text: 'Destinations', href: '/destinations' },
        { text: 'Experiences', href: '/experience-more' },
        { text: 'Travel Partners', href: '/partners' },
        { text: 'Tailored Travel', href: '/tailor-made-travel' },
    ],
    ABOUT: [
        { text: 'About Rewards Program', href: '#' },
        { text: 'About Luxufe', href: '/about' },
        { text: 'Before you travel', href: '/before-you-travel' },
        { text: 'Offers & Promotions', href: '#' },
        { text: 'Find the journey for you', href: '#' },
        { text: 'Travel Journal / Blog', href: '/blog' },
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
    Destinations: ['Africa', 'Alaska', 'Antarctica','Arctic Circle & Greenland','Asia','Australia & New Zealand','Caribbean & Bahamas','Central America & Mexico','Egypt & the Middle East','Europe','Galapagos Islands','India and the Subcontinent','Mediterranean Sea','Northern Europe & British Isles'],
    Cruises: ['Adventure/Exploration Cruises', 'Barge Cruises', 'Family Small Ship Cruises', 'Ocean Cruises', 'Polar Cruises', 'Rails to River Cruise', 'River Cruises'],
    Airlines: ['Emirates', 'Singapore Airlines', 'Qatar Airways', 'British Airways', 'Lufthansa', 'Cathay Pacific', 'Etihad Airways'],
    Jets: ['NetJets', 'Flexjet', 'Sentient Jet', 'Wheels Up', 'VistaJet', 'PrivateFly', 'Skyjet'],
};

// Hotel brands that should have links to brand pages
const hotelBrands = [
    'The Ritz-Carlton', 'Four Seasons Hotels and Resorts', 'St. Regis', 'Mandarin Oriental', 'Aman Resorts', 'The Red Carnation Hotel Collection', 'Waldorf Astoria',
    'Rosewood Hotels & Resorts', 'Belmond', 'Waldorf Astoria Hotels & Resorts', 'Jumeirah Hotels & Resorts', 'Sofitel Luxury Hotels', 'The Langham Hotels and Resorts', 'Kimpton Hotels',
    'InterContinental Hotels & Resorts', 'Hyatt Regency', 'The Luxury Collection', 'Occidental Hotels & Resorts', 'Fairmont Hotels & Resorts', 'Banyan Tree Hotels & Resorts', 'Casa Tua Hotel',
    'Shangri-La Hotels and Resorts', 'Bvlgari Hotels & Resorts', 'Park Hyatt', 'Le Meridien', 'The Leading Hotels of the World', 'SLS Hotels', 'Six Senses Hotels Resorts Spas',
    'Ritz Paris', 'The Savoy', 'COMO Hotels and Resorts', 'Capella Hotels and Resorts', 'Thompson Hotels', 'Ace Hotel', 'The NoMad Hotel',
];

// Non-hotel brands (cruises, airlines, etc.) that should not have links
const otherBrands = [
    'Emirates', 'Singapore Airlines', 'Qatar Airways', 'British Airways', 'Lufthansa', 'Cathay Pacific', 'Etihad Airways',
    'NetJets', 'Flexjet', 'Sentient Jet', 'Wheels Up', 'VistaJet', 'PrivateFly', 'Skyjet',
    'Silversea Cruises', 'Regent Seven Seas', 'Crystal Cruises', 'Seabourn'
];

export default async function Footer() {
    // Fetch brands from database
    const dbBrands = await getBrands();
    const brands = dbBrands.map(brand => brand.name);
    return (
        <footer className="bg-[#1a233a] text-white">
            {/* Gallery Images - hidden on mobile for cleaner look */}
            <div className="hidden lg:grid grid-cols-5 px-2">
                {galleryImages.map((src, i) => (
                    <img key={i} src={src} alt={`Gallery image ${i + 1}`} className="my-12 px-2 w-full h-60 object-cover" />
                ))}
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16">
                {/* Main Footer Section */}
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16">
                    <div className="lg:col-span-3">
                        <Image src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" alt="Luxufe" width={250} height={250} className="w-48 sm:w-56 lg:w-60" />
                        <p className="text-xl sm:text-2xl lg:text-3xl font-arpona font-bold mt-6 sm:mt-8">
                            Seamless luxury travel, tailored to you -<br className="hidden sm:block"/>effortless, personal, <span className="font-bellarina text-4xl sm:text-5xl lg:text-6xl font-medium">unforgettable.</span>
                        </p>
                        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Link target='_blank' href="#"><img src="/Icon simple-instagram-white.svg" alt="Instagram" className="h-4 w-4 sm:h-5 sm:w-5" /></Link>
                            <Link target='_blank' href="#"><img src="/Icon awesome-facebook-white.svg" alt="Facebook" className="h-4 w-4 sm:h-5 sm:w-5" /></Link>
                            <Link target='_blank' href="#"><img src="/Icon awesome-tripadvisor-white.svg" alt="Tripadvisor" className="h-4 w-4 sm:h-5 sm:w-5" /></Link>
                            <Link target='_blank' href="#"><img src="/Icon ionic-logo-google-white.svg" alt="Google" className="h-4 w-4 sm:h-5 sm:w-5" /></Link>
                        </div>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {Object.entries(mainLinks).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-semibold tracking-widest mb-3 sm:mb-4 font-arpona font-bold text-md sm:text-lg">{title}</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {links.map(link => (
                                        <li key={link.text}><a href={link.href} className="text-white font-inter font-bold text-xs sm:text-sm transition-colors hover:text-gray-300">{link.text}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mega Links Section */}
                <div className="border-y border-white/50 my-8 sm:my-12 lg:my-16 py-8 sm:py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        {/* Left: Destinations (2 columns) */}
                        <div>
                            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-arpona font-bold">Destinations</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm">
                                {megaLinks.Destinations.map(link => (
                                    <li key={link}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right: Cruises, Airlines, Jets (3 columns) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {['Cruises', 'Airlines', 'Jets'].map(title => (
                                <div key={title}>
                                    <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-arpona font-bold">{title}</h3>
                                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                                        {megaLinks[title as keyof typeof megaLinks].map(link => (
                                            <li key={link}>
                                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">{link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                     <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">Brands & Partners</h3>
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
                        {brands.map(brand => {
                            // Check if this is a hotel brand that should have a link
                            const isHotelBrand = hotelBrands.includes(brand);
                            
                            if (isHotelBrand) {
                                const brandSlug = brandNameToSlug(brand);
                                return (
                                    <Link 
                                        key={brand} 
                                        href={`/brand/${brandSlug}`} 
                                        className="text-gray-400 hover:text-white transition-colors font-inter font-bold"
                                    >
                                        {brand}
                                    </Link>
                                );
                            } else {
                                // Non-hotel brands (cruises, airlines, jets) - no link
                                return (
                                    <span 
                                        key={brand} 
                                        className="text-gray-400 font-inter font-bold"
                                    >
                                        {brand}
                                    </span>
                                );
                            }
                        })}
                     </div>
                </div>

                {/* Sub-Footer */}
                <div className="text-center">
                    {/* Decorative grid - hidden on mobile for cleaner look */}
                    <div className="hidden lg:grid grid-cols-8 gap-4 mb-8">
                        {[...Array(8)].map((_, i) => (
                           <div key={i} className="h-20 bg-white/5"></div>
                        ))}
                    </div>
                    <div className="border-t border-white/50 pt-6 sm:pt-8 font-inter font-bold flex flex-col sm:flex-row flex-wrap justify-between items-center text-xs gap-4 sm:gap-6">
                        <p>&copy; COPYRIGHT. ALL RIGHTS RESERVED. LUXUFE 2025</p>
                        <div className="flex flex-wrap gap-3 sm:gap-6 justify-center sm:justify-end">
                            <Link href="/privacy-policy" className="hover:text-white">PRIVACY POLICY</Link>
                            <Link href="/terms-and-conditions" className="hover:text-white">TERMS OF USE</Link>
                            <Link href="/reservation-terms" className="hover:text-white">RESERVATION TERMS</Link>
                            <Link href="/rewards-program-terms" className="hover:text-white">REWARDS PROGRAM TERMS</Link>
                            <Link href="#" className="hover:text-white">SITE CREDITS</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
} 