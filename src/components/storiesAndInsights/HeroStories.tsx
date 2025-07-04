import ExploreBar from '@/components/storiesAndInsights/ExploreBar';


export default function HeroStories() {
  return (
    <section className="relative h-screen w-full mb-30 flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <p className="text-4xl md:text-5xl italic mb-4 font-bellarina">Stories & insights</p>
        <h1 className="text-5xl md:text-6xl font-arpona font-bold mb-8 leading-tight">
          Inspiration for the Discerning Traveler
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter font-bold text-md md:text-md text-white/90">
          Discover expert insights, curated guides, and exclusive luxury travel tips designed to elevate every journey.
        </p>
      </div>
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-full px-4">
        <ExploreBar />
      </div>
    </section>
  );
} 