import CuratedForYou from "@/components/CuratedForYou";
import DiscoverLuxury from "@/components/DiscoverLuxury";
import ElevePerks from "@/components/ElevePerks";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import Hero from "@/components/Hero";
import LuxuryPartners from "@/components/LuxuryPartners";
import Navbar from "@/components/Navbar";
import StartJourney from "@/components/StartJourney";
import Testimonials from "@/components/Testimonials";
import Voyages from "@/components/Voyages";

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
    </main>
  );
}
