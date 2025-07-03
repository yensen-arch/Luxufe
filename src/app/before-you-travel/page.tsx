import Navbar from "@/components/common/Navbar";
import BeforeYouTravelHero from "@/components/beforeYouTravel/BeforeYouTravelHero";
import EssentialTravelInfo from "@/components/beforeYouTravel/EssentialTravelInfo";
import TravelAccordion from "@/components/beforeYouTravel/TravelAccordion";
import ExploreMore from "@/components/beforeYouTravel/ExploreMore";
import Footer from "@/components/common/Footer";
import NewsletterSignUp from "@/components/landing/NewsletterSignUp";
import ContactUs from "@/components/beforeYouTravel/ContactUsBefore";
import Testimonials from "@/components/landing/Testimonials";

export default function BeforeYouTravel() {
  return (
    <main>
      <Navbar />
      <BeforeYouTravelHero />
      <EssentialTravelInfo />
      <TravelAccordion />
      <ExploreMore />
      <NewsletterSignUp />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}