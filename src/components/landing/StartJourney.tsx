import JourneyCard from "./JourneyCard";

interface Journey {
  category: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  link: {
    text: string;
    href: string;
  };
}

interface StartJourneyData {
  heading: string;
  description: string;
  journeys: Journey[];
  ctaText: string;
}

interface StartJourneyProps {
  data?: StartJourneyData;
}

const defaultJourneyData = [
  {
    category: 'DESTINATIONS',
    title: 'Begin with a place that inspires you',
    description: 'Discover the world\'s most iconic destinations, from the Eiffel Tower in Paris to the Great Wall of China. Let Luxufe help you find the perfect place to start your journey.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop',
    link: {
      text: 'DESTINATIONS',
      href: '#'
    }
  },
  {
    category: 'EXPERIENCES',
    title: 'What would you like to experience?',
    description: 'From culinary adventures to cultural tours, let Luxufe help you find the perfect experience to start your journey.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    link: {
      text: 'EXPERIENCES',
      href: '#'
    }
  },
  {
    category: 'JOURNEYS',
    title: 'Indulge in itineraries designed by experts',
    description: "Have a preferred way to travel? Whether it's a private jet, luxury cruise, or a classic train, let your style define an unforgettable experience.",
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    link: {
      text: 'JOURNEYS & TOURS',
      href: '#'
    }
  }
];

export default function StartJourney({ data }: StartJourneyProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Start your journey, your way",
    description: "Travel is personal. We all have different wants, needs, and desires when we consider where, when, and how you travel. Let Luxufe tailor your next travel experience for you.",
    journeys: defaultJourneyData.map(journey => ({
      ...journey,
      image: {
        url: journey.imageUrl,
        alt: journey.title
      }
    })),
    ctaText: "+ MORE WAYS TO TRAVEL"
  };

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl  mb-10 text-gray-900 font-arpona font-bold">{sectionData.heading}</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700 font-inter font-bold">
            {sectionData.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12"> 
          {sectionData.journeys.map((journey, index) => (
            <JourneyCard key={index} {...journey} imageUrl={journey.image.url} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="font-inter font-bold border-2 border-gray-400 text-gray-700 px-6 py-4 text-sm tracking-wider hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300">
            {sectionData.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
