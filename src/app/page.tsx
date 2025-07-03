import ContactUs from "@/components/landing/ContactUs";
import CuratedForYou from "@/components/landing/CuratedForYou";
import DiscoverLuxury from "@/components/landing/DiscoverLuxury";
import ElevePerks from "@/components/landing/ElevePerks";
import ExclusiveOffers from "@/components/landing/ExclusiveOffers";
import Footer from "@/components/common/Footer";
import Hero from "@/components/landing/Hero";
import Inspiration from "@/components/landing/Inspiration";
import LuxuryPartners from "@/components/landing/LuxuryPartners";
import Navbar from "@/components/common/Navbar";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import StartJourney from "@/components/landing/StartJourney";
import Testimonials from "@/components/landing/Testimonials";
import Voyages from "@/components/landing/Voyages";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StartJourney />
      <DiscoverLuxury />
      <CuratedForYou />
      <Voyages />
      <Testimonials />
      <LuxuryPartners />
      <ElevePerks />
      <ExclusiveOffers />
      <Inspiration />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </main>
  );
}
