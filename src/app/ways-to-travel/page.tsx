import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ElevePerks from "@/components/landing/ElevePerks";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import Testimonials from "@/components/landing/Testimonials";
import ChatWidget from "@/components/landing/ChatWidget";
import WaysToTravelHero from "@/components/waysToTravel/WaysToTravelHero";

const Page = () => {
  return (
    <main>
      <Navbar />
      <WaysToTravelHero />
      <ElevePerks />
      <ChatWidget />
      <Testimonials />
      <NewsletterSignUp/>
      <ContactUsJourneys />
      <Footer />
    </main>
  );
};

export default Page;