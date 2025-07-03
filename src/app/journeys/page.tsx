import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/journeys/Hero";
import ItineraryDetails from "@/components/journeys/ItineraryDetails";
import PricingAndCabinsSection from "@/components/journeys/PricingAndCabinsSection";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";

export default function Journeys() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ItineraryDetails />
      <PricingAndCabinsSection />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
}
