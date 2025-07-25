import { ArrowRight } from 'lucide-react';

interface NewsletterData {
  heading: string;
  description: string;
  placeholder: string;
  ctaText: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
}

interface NewsletterSignUpProps {
  data?: NewsletterData;
}

export default function NewsletterSignUp({ data }: NewsletterSignUpProps) {
  // Fallback to hardcoded content if no data is provided
  const sectionData = data || {
    heading: "Stay inspired. Travel seamlessly.",
    description: "Join the Luxufe newsletter for exclusive travel insights, curated offers, and the latest in luxury experiences. Be the first to discover extraordinary journeys, tailored just for you.",
    placeholder: "Email*",
    ctaText: "STAY INSPIRED",
    backgroundImage: {
      url: "https://picsum.photos/seed/home-bg/1920/1080",
      alt: "Newsletter background"
    }
  };

  return (
    <section className="relative py-55 bg-cover bg-center" style={{ backgroundImage: `url('${sectionData.backgroundImage.url}')` }}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white px-16 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5 my-auto">
              <h3 className="text-3xl font-arpona font-bold text-gray-600">
                {sectionData.heading.split('.')[0]} <span className="font-bellarina font-medium text-7xl">inspired.</span>
              </h3>
              <h2 className="text-3xl font-arpona font-bold text-gray-800 mt-2 mb-6">
                {sectionData.heading.split('.')[1]}
              </h2>
              <p className="font-inter font-bold">
                {sectionData.description}
              </p>
            </div>
            <div className="lg:w-3/5 my-auto">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name*" className="w-full p-3 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:border-gray-800 outline-none font-inter font-bold" />
                  <input type="text" placeholder="Last Name*" className="w-full p-3 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:border-gray-800 outline-none font-inter font-bold" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="email" placeholder={sectionData.placeholder} className="w-full p-3 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:border-gray-800 outline-none font-inter font-bold" />
                  <input type="tel" placeholder="+1 (USA)" className="w-full p-3 text-sm border border-gray-300 focus:ring-1 focus:ring-gray-800 focus:border-gray-800 outline-none font-inter font-bold" />
                </div>
                <button type="submit" className="w-full bg-[#1a233a] text-white py-4 px-6 flex items-center justify-center gap-3 font-inter font-bold tracking-widest hover:bg-gray-800 transition-colors">
                  {sectionData.ctaText} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center font-inter font-bold">
                By joining this newsletter, you are agreeing to the terms in our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 