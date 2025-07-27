
interface AboutHeroProps {
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

export default function AboutHero({ data }: AboutHeroProps) {
  // Fallback data if no Sanity data is provided
  const heroData = data || {
    backgroundImage: {
      url: 'https://picsum.photos/seed/about-hero/1920/1080',
      alt: 'About Hero Background'
    },
    subtitle: 'About us',
    title: 'The Art of Effortless Luxury Travel',
    description: 'Thoughtfully Designed journeys, Crafted for you'
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="relative z-10 p-4 md:p-6 lg:p-8 max-w-5xl mx-auto">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 md:mb-3 lg:mb-4 font-bellarina">{heroData.subtitle}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arpona mb-4 md:mb-5 lg:mb-6">
          {heroData.title}
        </h1>
        <p className="mt-4 md:mt-5 lg:mt-6 max-w-2xl mx-auto font-inter font-bold text-sm md:text-base lg:text-md leading-relaxed px-4">
          {heroData.description}
        </p>
      </div>
    </div>
  );
} 