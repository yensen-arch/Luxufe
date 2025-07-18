import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Testimonials from "@/components/landing/Testimonials";
import WaysToTravelHero from "@/components/waysToTravel/WaysToTravelHero";
import WaysToTravelIntro from "@/components/waysToTravel/WaysToTravelIntro";
import WaysToTravelReflectsYou from "@/components/waysToTravel/WaysToTravelReflectsYou";
import WaysToTravelGrid from "@/components/waysToTravel/WaysToTravelGrid";
import WaysToTravelTailorMade from "@/components/waysToTravel/WaysToTravelTailorMade";
import WaysToTravelVideoSection from "@/components/waysToTravel/WaysToTravelVideoSection";
import WaysToTravelFindJourney from "@/components/waysToTravel/WaysToTravelFindJourney";
import { getWaysToTravelPageData, getLandingPageData } from "@/lib/sanity";

const Page = async () => {
  // Fetch data from Sanity CMS for both ways-to-travel page and landing page
  const [pageData, landingData] = await Promise.all([
    getWaysToTravelPageData(),
    getLandingPageData()
  ]);

  return (
    <main className="relative">
      <Navbar />
      <WaysToTravelHero data={pageData?.hero} />
      <WaysToTravelIntro data={pageData?.intro} />
      <WaysToTravelReflectsYou data={pageData?.reflectsYou} />
      <WaysToTravelGrid data={pageData?.grid} />
      <WaysToTravelTailorMade data={pageData?.tailorMade} />
      <div className="relative min-h-[600px]">
        <WaysToTravelVideoSection data={pageData?.videoSection} />
        <Testimonials data={landingData?.testimonials} />
      </div>
      <WaysToTravelFindJourney data={pageData?.findJourney} />
      <ElevePerks data={landingData?.elevePerks} />
      <NewsletterSignUp data={landingData?.newsletter} />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};

export default Page;