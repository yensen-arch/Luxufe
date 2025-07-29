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
import { getLandingPageData } from "@/lib/sanity";

export default async function Home() {
  const landingPageData = await getLandingPageData();

  return (
    <main>
      <Navbar />
      <Hero data={landingPageData?.hero} />
      <StartJourney data={landingPageData?.startJourney} />
      <DiscoverLuxury data={landingPageData?.discoverLuxury} />
      <CuratedForYou data={landingPageData?.curatedForYou} />
      <Voyages data={landingPageData?.voyages} />
      <Testimonials data={landingPageData?.testimonials} />
      <LuxuryPartners data={landingPageData?.luxuryPartners} />
      <ElevePerks data={landingPageData?.elevePerks} />
      <ExclusiveOffers data={landingPageData?.exclusiveOffers} />
      <Inspiration data={landingPageData?.inspiration} />
      <NewsletterSignUp data={landingPageData?.newsletter} />
      <ContactUs data={landingPageData?.contactUs} />
      <Footer />
    </main>
  );
}
