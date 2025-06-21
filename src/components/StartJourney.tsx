import JourneyCard from "./JourneyCard";


const journeyData = [
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

export default function StartJourney() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6 text-gray-900">Start your journey, your way</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">
            Travel is personal. We all have different wants, needs, and desires when we 
            consider where, when, and how you travel. Let Luxufe tailor your next travel 
            experience for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12"> 
          {journeyData.map((data, index) => (
            <JourneyCard key={index} {...data} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="border border-gray-400 text-gray-700 px-8 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300">
            + MORE WAYS TO TRAVEL
          </button>
        </div>
      </div>
    </section>
  );
}
