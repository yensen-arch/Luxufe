'use client'
import Image from 'next/image'
interface TripHeroProps {
  onBecomeMember?: () => void
  data?: {
    backgroundImage: {
      url: string
      alt: string
    }
    subtitle: string
    title: string
    buttonText: string
  }
}

export default function TripHero({ onBecomeMember, data }: TripHeroProps) {
  // Fallback data
  const fallbackData = {
    backgroundImage: {
      url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80',
      alt: 'Luxury travel background'
    },
    subtitle: 'Find the journey for you',
    title: 'Take the quiz and discover tailored travel experiences designed to match your style',
    buttonText: 'JUMP TO QUIZ'
  }

  const heroData = data || fallbackData

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}>
        <Image src={heroData.backgroundImage.url} alt={heroData.backgroundImage.alt} fill className="object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 p-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <p className="text-4xl md:text-5xl italic mb-4 font-bellarina">{heroData.subtitle}</p>
        <h1 className="w-5xl text-5xl md:text-6xl font-arpona font-bold mb-8 leading-tight">
          {heroData.title}
        </h1>
        <button
          className="mt-6 px-10 py-4 border-2 border-slate-400 flex items-center justify-center gap-2 text-white font-inter font-bold bg-transparent hover:bg-white hover:text-black transition-all text-xs"
          onClick={onBecomeMember || (() => {})}
        >
          {heroData.buttonText}
          <Image src="/luxufe-icon-button-arrow-light.svg" alt="Arrow right" width={20} height={20} className="w-3 h-3 md:w-7 md:h-6 lg:w-8 lg:h-6" />
        </button>
      </div>
    </section>
  );
} 