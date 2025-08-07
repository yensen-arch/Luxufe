import React from "react";

interface PartnerHighlightProps {
  data?: {
    heading?: string;
    description?: string;
    partners?: Array<{
      name?: string;
      logo?: any;
      description?: string;
    }>;
  };
}

export default function PartnerHighlight({ data }: PartnerHighlightProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Partner highlight - a Luxufe favorite";
  const partner = data?.partners?.[0] || {
    name: "St. Regis Hotels & Resorts",
    logo: "https://res.cloudinary.com/dqh2tacov/image/upload/v1754488206/St._Regis_hotels_resorts_logo_toflm9.png",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-arpona text-[#23263a] font-bold text-start mb-16">
          {heading}
        </h2>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12 justify-center">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full flex-shrink-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Seven Seas Navigator"
              className="w-[420px] h-[340px] md:w-[620px] md:h-[500px] object-cover object-center border border-gray-200 shadow"
            />
          </div>
          {/* Right: Logo, Text, Button */}
          <div className="md:w-1/2 w-full flex flex-col justify-center my-auto md:ml-10">
            {/* Logo */}
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-14 w-auto mb-6"
              style={{ maxWidth: 260 }}
            />
            {/* Large Heading */}
            <h3 className="text-2xl w-4/5 md:text-3xl font-arpona text-[#23263a] font-bold mb-4 text-left">
              {partner.name}
            </h3>
            {/* Paragraph */}
            <p className="font-inter w-4/5 text-[#23263a] text-base md:text-md font-bold mb-8 text-left max-w-xl">
              {partner.description}
            </p>
            {/* Button */}
            <button className="w-fit border-2 border-gray-300 text-xs py-3 px-6 font-inter font-bold text-gray-800 flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition text-left">
              MORE FROM THIS BRAND <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 