import React from "react";

interface PaymentsHeroProps {
  data?: {
    backgroundImage: {
      url: string;
      alt: string | null;
    };
    subtitle: string;
    title: string;
    description: string;
  };
}

const PaymentsHero: React.FC<PaymentsHeroProps> = ({ data }) => {
  const displayBackgroundImage = data?.backgroundImage?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  const displaySubtitle = data?.subtitle || "Secure your journey";
  const displayTitle = data?.title || "You’re one step away from something extraordinary";
  const displayDescription = data?.description || "This secure payment page confirms your booking and finalizes your travel arrangements. Our team remains available should you have any questions before, during, or after your journey.";

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={displayBackgroundImage}
        alt={data?.backgroundImage?.alt || "Payments Hero Background"}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
        <span className="font-bellarina text-4xl md:text-5xl text-white mb-4 block italic">{displaySubtitle}</span>
        <h1 className="text-white text-4xl md:text-6xl font-arpona font-medium mb-8 leading-tight">
          {displayTitle}
        </h1>
        <p className="text-white text-lg md:text-2xl font-inter font-bold max-w-2xl mx-auto">
          {displayDescription}
        </p>
      </div>
    </section>
  );
};

export default PaymentsHero; 