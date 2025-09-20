import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/itineraries/cruise-itineraries/Hero";
import ItineraryDetails from "@/components/itineraries/cruise-itineraries/ItineraryDetails";
import PricingAndCabinsSection from "@/components/itineraries/cruise-itineraries/PricingAndCabinsSection";
import ContactUsJourneys from "@/components/landing/ContactUsJourneys";
import { getCruiseItineraryWithDetails } from "@/lib/database";
import { notFound } from "next/navigation";

interface CruiseItineraryPageProps {
  params: {
    slug: string;
  };
}

export default async function CruiseItineraryPage({ params }: CruiseItineraryPageProps) {
  // Get itinerary ID from URL
  const resolvedParams = await params;
  const itineraryId = parseInt(resolvedParams?.slug);
  
  // Fetch data for the specific cruise itinerary
  const { itinerary, brand, ship, dates, cabinTypes } = await getCruiseItineraryWithDetails(itineraryId);

  if (!itinerary) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <Hero itinerary={itinerary} brand={brand} ship={ship} />
      <ItineraryDetails itinerary={itinerary} brand={brand} ship={ship} dates={dates} />
      <PricingAndCabinsSection itinerary={itinerary} dates={dates} cabinTypes={cabinTypes} />
      <ContactUsJourneys />
      <Footer />
    </main>
  );
}
