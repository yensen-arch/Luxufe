import Navbar from "@/components/common/Navbar";
import BeforeYouTravelHero from "@/components/beforeYouTravel/BeforeYouTravelHero";
import EssentialTravelInfo from "@/components/beforeYouTravel/EssentialTravelInfo";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUs from "@/components/beforeYouTravel/ContactUsBefore";

export default function BeforeYouTravel() {
  return (
    <main>
      <Navbar />
      <BeforeYouTravelHero />
      <EssentialTravelInfo />
      <NewsletterSignUp />
      <ContactUs />
      <Footer />
    </main>
  );
}