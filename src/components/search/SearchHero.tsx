import React from "react";

interface SearchHeroProps {
  data?: {
    backgroundImage?: { url: string; alt?: string };
    title?: string;
    description?: string;
    searchPlaceholder?: string;
  };
}

const defaultData = {
  backgroundImage: {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80",
    alt: "Africa Landscape",
  },
  title: "Luxury Hotels & Stays in South Africa",
  description: "",
  searchPlaceholder: "",
};

const SearchHero: React.FC<SearchHeroProps> = ({ data }) => {
  const d = { ...defaultData, ...data, backgroundImage: { ...defaultData.backgroundImage, ...data?.backgroundImage } };
  return (
    <section className="relative w-full h-[80vh] shadow-lg flex flex-col justify-end">
      <img
        src={d.backgroundImage.url}
        alt={d.backgroundImage.alt}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="relative z-20 flex flex-col items-start justify-center h-full w-full max-w-7xl mx-auto px-8">
        <div className="mt-24">
          <h1 className="text-5xl md:text-7xl font-arpona text-white font-bold mb-4">
            {d.title}
          </h1>
          {d.description && (
            <p className="text-white text-lg font-inter font-normal">{d.description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchHero; 