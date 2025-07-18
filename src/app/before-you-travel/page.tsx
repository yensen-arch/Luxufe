import Navbar from "@/components/common/Navbar";
import BeforeYouTravelHero from "@/components/beforeYouTravel/BeforeYouTravelHero";
import EssentialTravelInfo from "@/components/beforeYouTravel/EssentialTravelInfo";
import TravelAccordion from "@/components/beforeYouTravel/TravelAccordion";
import ExploreMore from "@/components/beforeYouTravel/ExploreMore";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUs from "@/components/beforeYouTravel/ContactUsBefore";
import Testimonials from "@/components/landing/Testimonials";
import { getBeforeYouTravelPageData, getLandingPageData } from '@/lib/sanity';

export default async function BeforeYouTravel() {
  const beforeYouTravelData = await getBeforeYouTravelPageData();
  const landingData = await getLandingPageData();

  return (
    <main>
      <Navbar />
      <BeforeYouTravelHero data={beforeYouTravelData?.hero} />
      <EssentialTravelInfo data={beforeYouTravelData?.essentialTravelInfo} />
      <TravelAccordion data={beforeYouTravelData?.travelAccordion} />
      <NewsletterSignUp data={landingData?.newsletter} />
      <Testimonials data={landingData?.testimonials} />
      <ExploreMore data={beforeYouTravelData?.exploreMore} />
      <ContactUs data={beforeYouTravelData?.contactUs} />
      <Footer />
    </main>
  );
}