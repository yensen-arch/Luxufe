import { Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-6 px-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">LUXUFE</div>
        <div className="hidden md:flex gap-10 items-center">
          <a href="#" className="hover:underline">DESTINATIONS</a>
          <a href="#" className="hover:underline">EXPERIENCES</a>
          <a href="#" className="hover:underline">JOURNEYS</a>
          <a href="#" className="hover:underline">HOTELS</a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:underline">ENQUIRE</a>
          <span className="text-sm">+12 34 567 8900</span>
          <div className="flex items-center gap-4">
            <a href="#"><User className="h-6 w-6 " /></a>
            <button><Menu className="h-6 w-6" /></button>
          </div>
        </div>
      </div>
    </nav>
  );
} 