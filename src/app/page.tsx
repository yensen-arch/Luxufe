import ContactUs from "@/components/Landing/ContactUs";
import CuratedForYou from "@/components/Landing/CuratedForYou";
import DiscoverLuxury from "@/components/Landing/DiscoverLuxury";
import ElevePerks from "@/components/Landing/ElevePerks";
import ExclusiveOffers from "@/components/Landing/ExclusiveOffers";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Landing/Hero";
import Inspiration from "@/components/Landing/Inspiration";
import LuxuryPartners from "@/components/Landing/LuxuryPartners";
import Navbar from "@/components/common/Navbar";
import NewsletterSignUp from "@/components/Landing/NewsletterSignUp";
import StartJourney from "@/components/Landing/StartJourney";
import Testimonials from "@/components/Landing/Testimonials";
import Voyages from "@/components/Landing/Voyages";

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
