import { ArrowRight, Trophy } from 'lucide-react';

export default function ExclusiveOffers() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block border border-gray-200 rounded-full p-4 mb-6 bg-gray-50">
          <Trophy className="h-10 w-10 text-gray-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
          Exclusive offers,<br/>
          unforgettable experiences
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          Discover exclusive promotions and bespoke travel offers designed to elevate your journey. From elite upgrades to personalised perks, Luxufe ensures every experience is seamless, exceptional, and tailored just for you.
        </p>
        <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest border border-gray-400 px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors mx-auto">
          EXPLORE OFFERS & PROMOTIONS
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
} 