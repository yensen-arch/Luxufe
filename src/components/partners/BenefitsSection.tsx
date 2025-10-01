import Image from "next/image";

interface BenefitsSectionProps {
  data?: {
    heading?: string;
    description?: string;
    benefits?: Array<{
      title?: string;
      description?: string;
      icon?: string;
    }>;
  };
}

const defaultFeatures = [
  {
    icon: <Image src="/luxufe-icon-pencil.svg" alt="Pencil" width={20} height={20} className="w-8 h-8 text-[#23263a]" />,
    title: "Travel With Confidence",
    description:
      "Our cruise experts handpick the best itineraries, cabins, and experiences to suit your tastes—so your journey begins with confidence and ends in unforgettable moments.",
  },
  {
    icon: <Image src="/luxufe-icon-metro-trophy.svg" alt="Trophy" width={20} height={20} className="w-8 h-8 text-[#23263a]" />,
    title: "Experience More Benefits",
    description:
      "Enjoy priority access, exclusive onboard privileges, and price transparency across the world's most prestigious cruise lines—because luxury should never come with compromise.",
  },
  {
    icon: <Image src="/luxufe-icon-plane-grey.svg" alt="Plane" width={20} height={20} className="w-8 h-8 text-[#23263a]" />,
    title: "Seamless Service",
    description:
      "We take care of every detail—flights, transfers, and bespoke requests—so you can simply step on board and savour the voyage.",
  },
];

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  // Fallback content if no data is provided
  const heading = data?.heading || "Effortless luxury, expert guidance, and exclusive advantages—every step of the way.";
  const features = data?.benefits 
    ? data.benefits.map(benefit => ({
        icon: benefit.icon === 'pencil' ? <Image src="/luxufe-icon-pencil-dark.svg" alt="Pencil" width={24} height={24} className="w-10 h-10 text-[#23263a]" /> :
              benefit.icon === 'trophy' ? <Image src="/luxufe-icon-trophy-dark.svg" alt="Trophy" width={24} height={24} className="w-10 h-10 text-[#23263a]" /> :
              benefit.icon === 'plane' ? <Image src="/luxufe-icon-plane-dark.svg" alt="Plane" width={24} height={24} className="w-10 h-10 text-[#23263a]" /> :
              <Image src="/luxufe-icon-pencil-dark.svg" alt="Pencil" width={24} height={24} className="w-10 h-10 text-[#23263a]" />,
        title: benefit.title || "",
        description: benefit.description || ""
      }))
    : defaultFeatures;

  return (
    <section className="py-18 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl w-4/5 mx-auto md:text-4xl font-arpona font-medium text-[#23263a] mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-26 gap-8 mt-20">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="flex items-center justify-center w-18 h-18 rounded-full bg-white shadow-lg border border-gray-300 mb-6">
                {feature.icon}
              </span>
              <h4 className="text-2xl font-arpona font-bold mb-4 text-[#23263a]">{feature.title}</h4>
              <p className="text-md font-inter font-bold text-[#23263a] w-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 