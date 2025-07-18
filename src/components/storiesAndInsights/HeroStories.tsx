import ExploreBar from '@/components/storiesAndInsights/ExploreBar';

interface HeroStoriesProps {
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    subtitle: string
    title: string
    description: string
  }
}

export default function HeroStories({ data }: HeroStoriesProps) {
  // Fallback data
  const fallbackData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80',
      alt: 'Luxury travel stories background'
    },
    subtitle: 'Stories & insights',
    title: 'Inspiration for the Discerning Traveler',
    description: 'Discover expert insights, curated guides, and exclusive luxury travel tips designed to elevate every journey.'
  }

  const heroData = data || fallbackData

  return (
    <section className="relative h-screen w-full mb-30 flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <p className="text-4xl md:text-5xl italic mb-4 font-bellarina">{heroData.subtitle}</p>
        <h1 className="text-5xl md:text-6xl font-arpona font-bold mb-8 leading-tight">
          {heroData.title}
        </h1>
        <p className="mt-2 max-w-2xl mx-auto font-inter font-bold text-md md:text-md text-white/90">
          {heroData.description}
        </p>
      </div>
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-full px-4">
        <ExploreBar />
      </div>
    </section>
  );
} 