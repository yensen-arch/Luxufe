import JourneyCard from "./JourneyCard";

const journeyData = [
  {
    category: 'DESTINATIONS',
    title: 'Begin with a place that inspires you',
    imageUrl: 'https://picsum.photos/seed/dest/800/600',
  },
  {
    category: 'EXPERIENCES',
    title: 'What would you like to experience?',
    imageUrl: 'https://picsum.photos/seed/exp/800/600',
  },
  {
    category: 'JOURNEYS',
    title: 'Indulge in itineraries designed by experts',
    description: "Have a preferred way to travel? Whether it's a private jet, luxury cruise, or a classic train, let your style define an unforgettable experience.",
    imageUrl: 'https://picsum.photos/seed/jour/800/600',
    link: {
      text: 'JOURNEYS & TOURS',
      href: '#'
    }
  }
];

export default function StartJourney() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl mb-4">Start your journey, your way</h2>
          <p className="max-w-xl mx-auto mb-12 text-black">
            Travel is personal. We all have different wants, needs, and desires when we consider where, when, and how you travel. Let Luxufe tailor your next travel experience for you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {journeyData.map((data, index) => (
            <JourneyCard key={index} {...data} />
          ))}
        </div>
        <div className="text-center">
          <button className="border border-gray-800 text-gray-800 px-6 py-3 hover:bg-gray-800 hover:text-white transition">
            + MORE WAYS TO TRAVEL
          </button>
        </div>
      </div>
    </section>
  );
} 