import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Testimonials from "@/components/landing/Testimonials";
import ChatWidget from "@/components/landing/ChatWidget";
import WaysToTravelHero from "@/components/waysToTravel/WaysToTravelHero";
import WaysToTravelIntro from "@/components/waysToTravel/WaysToTravelIntro";
import WaysToTravelReflectsYou from "@/components/waysToTravel/WaysToTravelReflectsYou";
import WaysToTravelGrid from "@/components/waysToTravel/WaysToTravelGrid";
import WaysToTravelTailorMade from "@/components/waysToTravel/WaysToTravelTailorMade";

const Page = () => {
  return (
    <main>
      <Navbar />
      <WaysToTravelHero />
      <WaysToTravelIntro />
      <WaysToTravelReflectsYou />
      <WaysToTravelGrid />
      <WaysToTravelTailorMade />
      <Testimonials />
      <ElevePerks />
      <ChatWidget />
      <NewsletterSignUp/>
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};

export default Page;