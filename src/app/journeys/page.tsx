import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/Journeys/Hero";
import ItineraryDetails from "@/components/Journeys/ItineraryDetails";
import PricingAndCabinsSection from "@/components/Journeys/PricingAndCabinsSection";
import ContactUsJourneys from "@/components/Landing/ContactUsJourneys";

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
