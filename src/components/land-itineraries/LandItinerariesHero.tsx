import Image from "next/image";
import { getImageUrl } from "@/lib/sanity/landItinerariesPage";

interface LandItinerariesHeroProps {
  data?: {
    heading?: string;
    description?: string;
    backgroundImage?: any;
  };
}

export default function LandItinerariesHero({ data }: LandItinerariesHeroProps) {
  const heading = data?.heading || "Land Journeys";
  const description = data?.description || "Discover our curated collection of extraordinary land adventures";
  const backgroundImage = getImageUrl(data?.backgroundImage);

  return (
    <section className="relative w-full flex flex-col justify-end h-screen">
      <div className="w-full">
        {/* Background image */}
        <Image
          src={backgroundImage}
          alt={heading}
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Content */}
        <div className="relative z-10 px-4 md:px-10 pb-6 md:pb-10 max-w-7xl mx-auto w-full">
          {/* Breadcrumb */}
          <div className="text-white text-xs font-inter font-bold mb-2 opacity-80">
            Home &gt; Journeys &gt; Land
          </div>
          {/* Title */}
          <h1 className="text-white text-3xl md:text-6xl font-arpona font-light mb-6 md:mb-8 leading-tight">
            {heading}
          </h1>
          {/* Description */}
          <p className="text-white text-lg md:text-xl font-inter font-bold max-w-3xl opacity-90">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
