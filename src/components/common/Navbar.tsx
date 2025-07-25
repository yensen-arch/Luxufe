'use client';
import { Menu, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ExpandedNavbar from './ExpandedNavbar';

export default function Navbar() {
  const pathname = usePathname();
  const isBlog = pathname.startsWith('/blog');
  const textColor = isBlog ? 'text-slate-500' : 'text-white';
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`absolute top-0 left-0 right-0 z-40 py-6 px-10 font-inter font-bold ${textColor}`}>
      <div className="container mx-auto flex justify-between items-center text-xs">
        <Link href="/">
          <Image src="https://res.cloudinary.com/dqh2tacov/image/upload/v1750509663/LUXUFE_-_Wordmark_Logo_2_fqjqq2.png" alt="Luxufe" width={150} height={150} />
        </Link>
        <div className="hidden md:flex gap-10 items-center ">
          <a href="#" className={`hover:underline font-bold ${textColor}`}>DESTINATIONS</a>
          <a href="#" className={`hover:underline font-bold ${textColor}`}>EXPERIENCES</a>
          <Link href="/journeys" className={`hover:underline font-bold ${textColor}`}>JOURNEYS</Link>
          <a href="#" className={`hover:underline font-bold ${textColor}`}>HOTELS</a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className={`hover:underline font-bold ${textColor}`}>ENQUIRE</a>
          <span className={`text-sm font-bold ${textColor}`}>+12 34 567 8900</span>
          <div className="flex items-center gap-4">
            <a href="#"><User className={`h-6 w-6 font-bold ${textColor}`} /></a>
            <button onClick={() => setExpanded(true)}><Menu className={`h-6 w-6 cursor-pointer ${textColor}`} /></button>
          </div>
        </div>
      </div>
      <ExpandedNavbar open={expanded} onClose={() => setExpanded(false)} />
    </nav>
  );
} 