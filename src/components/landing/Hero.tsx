import ChatWidget from "./ChatWidget";

interface HeroData {
  tagline: string;
  mainHeading: string;
  description: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
}

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  // Fallback to hardcoded content if no data is provided
  const heroData = data || {
    tagline: "Your travel, your way",
    mainHeading: "Unforgettable Luxury\nTravel Experiences",
    description: "Time is your greatest luxury. At Luxufe, we go beyond travel, refining every unforgettable moment so that it is tailored to you.",
    backgroundImage: {
      url: "https://picsum.photos/seed/picsum/1920/1080",
      alt: "Luxury travel background"
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white text-center">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${heroData.backgroundImage.url}')` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
      <div className="relative p-4">
        <p className="text-5xl italic mb-4 font-bellarina">{heroData.tagline}</p>
        <h1 className="text-6xl leading-tight font-arpona">
          {heroData.mainHeading.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < heroData.mainHeading.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl mx-auto font-inter font-bold">
          {heroData.description}
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
        <ChatWidget />
      </div>
    </div>
  );
} 