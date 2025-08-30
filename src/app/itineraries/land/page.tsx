import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import LandItinerariesHero from "@/components/land-itineraries/LandItinerariesHero";
import LandItinerariesMain from "@/components/land-itineraries/LandItinerariesMain";
import { getLandItinerariesPageData } from "@/lib/sanity/landItinerariesPage";
import ContactUs from "@/components/partners/ContactUs";
import Testimonials from "@/components/landing/Testimonials";
import ExploreMore from "@/components/eleve/ExploreMore";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ExclusiveOffers from "@/components/landing/ExclusiveOffers";

export default async function LandItineraries() {
  // Fetch page data from Sanity
  const pageData = await getLandItinerariesPageData();

  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <LandItinerariesHero data={pageData?.hero} />
      <ExclusiveOffers />
      <div id="main">
        <LandItinerariesMain data={pageData?.main} />
      </div>
      <ExploreMore />
      <Testimonials />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </main>
  );
}