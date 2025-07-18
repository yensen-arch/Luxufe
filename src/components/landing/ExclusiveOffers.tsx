import { ArrowRight, Trophy } from 'lucide-react';

interface Offer {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  ctaText: string;
  ctaLink: string;
}

interface ExclusiveOffersData {
  heading: string;
  description: string;
  offers: Offer[];
}

interface ExclusiveOffersProps {
  data?: ExclusiveOffersData;
}

export default function ExclusiveOffers({ data }: ExclusiveOffersProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Exclusive offers,\nunforgettable experiences",
    description: "Discover exclusive promotions and bespoke travel offers designed to elevate your journey. From elite upgrades to personalised perks, Luxufe ensures every experience is seamless, exceptional, and tailored just for you.",
    offers: []
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block border border-gray-200 rounded-full p-4 mb-6 bg-gray-50 shadow-lg">
          <Trophy className="h-10 w-10 text-gray-500 " />
        </div>
        <h2 className="text-4xl md:text-5xl font-arpona font-bold text-gray-800 mb-4">
          {sectionData.heading.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < sectionData.heading.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="max-w-xl mx-auto my-10 font-inter font-bold">
          {sectionData.description}
        </p>
        <button className="group flex items-center gap-3 text-sm font-inter font-bold tracking-widest border border-gray-400 px-6 py-4 hover:bg-gray-800 hover:text-white transition-colors mx-auto">
          EXPLORE OFFERS & PROMOTIONS
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
} 