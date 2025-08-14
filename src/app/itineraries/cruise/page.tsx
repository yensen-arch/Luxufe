import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/cruise-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/cruise-itineraries/ItineraryDetails";
import PricingAndCabinsSection from "@/components/itineraries/cruise-itineraries/PricingAndCabinsSection";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";

export default function CruiseItineraries() {
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
