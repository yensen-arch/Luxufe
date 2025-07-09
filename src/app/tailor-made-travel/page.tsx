import Navbar from "@/components/common/Navbar";
import Hero from "@/components/tailorMadeTravel/Hero";
import WhatTailorMadeMeans from "@/components/tailorMadeTravel/WhatTailorMadeMeans";
import TailorMadeItineraries from "@/components/tailorMadeTravel/TailorMadeItineraries";
import ExploreTogetherHero from "@/components/tailorMadeTravel/ExploreTogetherHero";
import AssistWithMore from "@/components/tailorMadeTravel/AssistWithMore";
import TailorMadeProcess from "@/components/tailorMadeTravel/TailorMadeProcess";
import WorldwideMap from "@/components/tailorMadeTravel/WorldwideMap";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import Footer from "@/components/common/Footer";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import Testimonials from "@/components/landing/Testimonials";

const Page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatTailorMadeMeans />
      <WorldwideMap />
      <TailorMadeItineraries />
      <ExploreTogetherHero />
      <AssistWithMore />
      <TailorMadeProcess />
      <Testimonials />
      <LuxuryPartners />
      <NewsletterSignUp />
      <Footer />
    </main>
  );
};

export default Page;