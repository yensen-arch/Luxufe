import React from "react";

interface PrivacyPolicyHeroProps {
  data?: {
    backgroundImage: {
      asset: {
        url: string;
      };
      alt: string | null;
    };
    title: string;
  };
  contentData?: {
    sections: Array<{
      heading: string;
      headingLevel: 'h2' | 'h3' | 'h4';
      content: string;
    }>;
  };
}

export default function PrivacyPolicyHero({ data, contentData }: PrivacyPolicyHeroProps) {
  // Use data from CMS if available, otherwise fall back to hardcoded content
  const displayBackgroundImage = data?.backgroundImage?.asset?.url || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";
  const displayTitle = data?.title || "Privacy Policy";

  // Fallback content sections if no CMS data
  const fallbackSections = [
    {
      heading: "This is a heading level 2",
      headingLevel: "h2" as const,
      content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
    },
    {
      heading: "This is a heading level 3",
      headingLevel: "h3" as const,
      content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
    },
    {
      heading: "This is a heading level 4",
      headingLevel: "h4" as const,
      content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
    }
  ];

  const sections = contentData?.sections || fallbackSections;

  const renderHeading = (heading: string, level: 'h2' | 'h3' | 'h4') => {
    switch (level) {
      case 'h2':
        return <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-bold mb-4">{heading}</h2>;
      case 'h3':
        return <h3 className="text-xl md:text-3xl font-arpona text-[#23263a] font-bold mb-4">{heading}</h3>;
      case 'h4':
        return <h4 className="text-lg font-inter font-bold uppercase tracking-widest text-[#23263a] mb-4">{heading}</h4>;
      default:
        return <h2 className="text-3xl md:text-4xl font-arpona text-[#23263a] font-bold mb-4">{heading}</h2>;
    }
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[48vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={displayBackgroundImage}
          alt="Privacy Policy Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-arpona font-bold">{displayTitle}</h1>
        </div>
      </div>
      {/* Text Section */}
      <div className="w-full bg-[#f7f7fa] py-32 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full px-4 mx-auto">
          {sections.map((section, index) => (
            <div key={index}>
              {renderHeading(section.heading, section.headingLevel)}
              <p className={`font-inter text-md text-[#23263a] font-bold ${index < sections.length - 1 ? 'mb-16' : ''}`}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 